import zipfile
import xml.etree.ElementTree as ET
import re
import json
import os

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_content = []
            for p in tree.findall('.//w:p', ns):
                p_text = []
                for child in p:
                    if child.tag == f"{{{ns['w']}}}r":
                        for node in child:
                            if node.tag == f"{{{ns['w']}}}t":
                                if node.text:
                                    p_text.append(node.text)
                            elif node.tag == f"{{{ns['w']}}}tab":
                                p_text.append(" ") # Replace tab with space
                            elif node.tag == f"{{{ns['w']}}}br":
                                p_text.append("\n")
                            elif node.tag == f"{{{ns['w']}}}cr":
                                p_text.append("\n")
                if p_text:
                    text_content.append(''.join(p_text))
            return '\n'.join(text_content)
    except Exception as e:
        print(f"Error reading {docx_path}: {e}")
        return ""

def parse_questions(text):
    questions = []
    # Split by question numbers (e.g., "1. ", "2. ")
    # We use a lookahead to keep the delimiter or just split and process
    # Regex: Start of line, digits, dot, space
    # We'll iterate line by line to build chunks
    
    lines = text.split('\n')
    current_chunk = []
    
    # Helper to process a complete chunk
    def process_chunk(chunk_lines):
        if not chunk_lines:
            return None
            
        full_text = " ".join(chunk_lines).strip()
        
        # 1. Extract ID
        # Match "123. " at start
        id_match = re.match(r'^(\d+)\.\s+(.*)', full_text)
        if not id_match:
            return None
            
        q_id = int(id_match.group(1))
        content = id_match.group(2)
        
        # 2. Split Question and Rest (Options/Explanation)
        # User rule: "put the texts before the text 'Options:' in the question"
        if "Options:" in content:
            parts = content.split("Options:", 1)
            q_text = parts[0].strip()
            rest = parts[1].strip()
        else:
            # Fallback if "Options:" is missing (maybe formatted differently)
            # We'll assume everything is question text if no options found
            # But usually these files have options.
            q_text = content
            rest = ""

        # 3. Extract Explanation
        # User rule: "from the text starts with 'Explanation:' , you can put in the explanation area"
        explanation = ""
        if "Explanation:" in rest:
            parts = rest.split("Explanation:", 1)
            options_part = parts[0].strip()
            explanation = parts[1].strip()
        else:
            options_part = rest
            explanation = "" # Leave empty if not found

        # 4. Parse Options
        # User rule: "A.", "B.", "C.", "D.", "E."
        # We look for these markers in options_part
        options = []
        correct_indices = []
        
        # We need to split options_part by these markers
        # We can find indices of " A. ", " B. ", etc.
        # Note: The text might be "A. Option text B. Option text"
        # or "A. Option text" (at start)
        
        # Add space at start to match " A." pattern easily
        search_blob = " " + options_part
        
        markers = ["A.", "B.", "C.", "D.", "E.", "F."]
        found_markers = []
        
        for m in markers:
            # Look for " A." or " B." etc
            # We use regex to ensure it's a distinct label
            # pattern = r'\s' + re.escape(m)
            idx = search_blob.find(" " + m)
            if idx != -1:
                found_markers.append((idx, m))
        
        found_markers.sort()
        
        for i in range(len(found_markers)):
            start = found_markers[i][0] + len(found_markers[i][1]) + 1 # +1 for the leading space we added
            
            if i < len(found_markers) - 1:
                end = found_markers[i+1][0]
            else:
                end = len(search_blob)
            
            opt_text = search_blob[start:end].strip()
            
            # Check for correctness
            # User didn't specify marker, but previous files used " - Correct" or " - correct"
            is_correct = False
            if " - Correct" in opt_text:
                is_correct = True
                opt_text = opt_text.replace(" - Correct", "").strip()
            elif " - correct" in opt_text:
                is_correct = True
                opt_text = opt_text.replace(" - correct", "").strip()
            
            # Clean up trailing punctuation if needed
            # opt_text = opt_text.rstrip('.,') 
            
            options.append(opt_text)
            if is_correct:
                correct_indices.append(i)
        
        # Construct Question Object
        return {
            "id": q_id,
            "text": q_text,
            "options": options,
            "correctAnswers": correct_indices,
            "explanation": explanation
        }

    parsed_questions = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if line starts with number dot (e.g. "55.")
        if re.match(r'^\d+\.', line):
            # Process previous chunk
            if current_chunk:
                q = process_chunk(current_chunk)
                if q: parsed_questions.append(q)
            current_chunk = [line]
        else:
            current_chunk.append(line)
            
    # Process last chunk
    if current_chunk:
        q = process_chunk(current_chunk)
        if q: parsed_questions.append(q)
        
    if not parsed_questions:
        return parse_questions_no_numbers(text)
        
    return parsed_questions

def parse_questions_no_numbers(text):
    questions = []
    lines = text.split('\n')
    
    current_q_text = []
    current_options = []
    current_explanation = ""
    current_correct = []
    
    # State: 0=Reading Question, 1=Reading Options, 2=Reading Explanation
    state = 0
    
    # We need to assign IDs manually since they are missing
    q_id_counter = 1
    
    def save_question():
        nonlocal q_id_counter
        # Only save if we have a question text
        if current_q_text:
            questions.append({
                "id": q_id_counter,
                "text": " ".join(current_q_text),
                "options": current_options,
                "correctAnswers": current_correct,
                "explanation": current_explanation
            })
            q_id_counter += 1

    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check for Options start
        if "Options:" in line:
            # If we were reading question, this ends the question text
            parts = line.split("Options:", 1)
            pre_text = parts[0].strip()
            options_content = parts[1].strip()
            
            if pre_text:
                current_q_text.append(pre_text)
            
            # If options are on the same line, parse them
            if options_content:
                search_blob = " " + options_content
                markers = ["A.", "B.", "C.", "D.", "E.", "F."]
                found_markers = []
                for m in markers:
                    idx = search_blob.find(" " + m)
                    if idx != -1:
                        found_markers.append((idx, m))
                found_markers.sort()
                
                if found_markers:
                    # Parse inline options
                    opts = []
                    correct_idxs = []
                    for i in range(len(found_markers)):
                        start = found_markers[i][0] + len(found_markers[i][1]) + 1
                        end = found_markers[i+1][0] if i < len(found_markers) - 1 else len(search_blob)
                        opt_text = search_blob[start:end].strip()
                        
                        is_correct = False
                        if "-correct" in opt_text.lower() or "- correct" in opt_text.lower():
                            is_correct = True
                            opt_text = re.sub(r'-\s*correct', '', opt_text, flags=re.IGNORECASE).strip()
                        
                        opts.append(opt_text)
                        if is_correct:
                            correct_idxs.append(i)
                    
                    current_options.extend(opts)
                    current_correct.extend(correct_idxs)
            
            state = 1 # Reading Options
            continue
            
        # Check for Explanation start
        if "explanation:" in line.lower():
            # Find the index of explanation (case insensitive)
            idx = line.lower().find("explanation:")
            expl_content = line[idx + len("explanation:"):].strip()
            
            if expl_content:
                # Inline explanation
                current_explanation = expl_content
                save_question()
                
                # Reset
                current_q_text = []
                current_options = []
                current_explanation = ""
                current_correct = []
                state = 0
            else:
                # Explanation on next line
                state = 2 # Expecting explanation text
            continue
            
        # Regular line processing based on state
        if state == 0:
            # Reading Question
            current_q_text.append(line)
            
        elif state == 1:
            # Reading Options
            # Check if this line is an option (starts with A., B., etc.)
            opt_match = re.match(r'^([A-F])\.\s*(.*)', line)
            if opt_match:
                opt_label = opt_match.group(1)
                opt_text = opt_match.group(2).strip()
                
                is_correct = False
                if "-correct" in opt_text.lower() or "- correct" in opt_text.lower():
                    is_correct = True
                    opt_text = re.sub(r'-\s*correct', '', opt_text, flags=re.IGNORECASE).strip()
                
                current_options.append(opt_text)
                if is_correct:
                    current_correct.append(len(current_options) - 1)
            else:
                # Not an option. Start of new question.
                if current_options:
                    save_question()
                    current_q_text = [line]
                    current_options = []
                    current_explanation = ""
                    current_correct = []
                    state = 0
                else:
                    # Garbage or continuation? Assume new question if we have text.
                    if current_q_text:
                        save_question()
                    current_q_text = [line]
                    current_options = []
                    current_explanation = ""
                    current_correct = []
                    state = 0

        elif state == 2:
            # Reading Explanation Text (on new line)
            # Heuristic: Test 9 has explanations on new line starting with "Option" or "Answer".
            # Test 6 has empty explanation line followed by new question.
            
            is_explanation = False
            lower_line = line.lower()
            if lower_line.startswith("option") or lower_line.startswith("answer") or lower_line.startswith("the correct"):
                is_explanation = True
            elif line.strip().endswith("?") or line.strip().endswith(".)") or line.strip().endswith(":)"):
                # Likely a question
                is_explanation = False
            else:
                # Ambiguous.
                # If it looks like a question start (Who, What, Where, When, Why, Which, A company, An administrator)
                if re.match(r'^(Who|What|Where|When|Why|Which|A |An |The )', line):
                    is_explanation = False
                else:
                    # Default to explanation if it doesn't look like a question?
                    # Or default to question?
                    # In Test 9, "Option..." matches.
                    # In Test 6, "Which..." matches question.
                    # Let's assume explanation if not clearly a question.
                    is_explanation = True

            if is_explanation:
                current_explanation = line
                save_question()
                
                # Reset
                current_q_text = []
                current_options = []
                current_explanation = ""
                current_correct = []
                state = 0
            else:
                # It's a new question. Previous question has empty explanation.
                save_question()
                
                # Start new question
                current_q_text = [line]
                current_options = []
                current_explanation = ""
                current_correct = []
                state = 0
            
    # Save last question if pending
    if current_q_text:
        save_question()
            
    return questions

def generate_ts_file(all_tests_data, output_file):
    ts_content = """export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    correctAnswers?: number[];
    explanation: string;
}

"""
    
    for var_name, questions in all_tests_data.items():
        ts_content += f"export const {var_name}: Question[] = [\n"
        
        for q in questions:
            # Escape quotes for TS string
            text = q['text'].replace('"', '\\"')
            explanation = q['explanation'].replace('"', '\\"')
            
            # Primary correct answer (first one or 0)
            primary = q['correctAnswers'][0] if q['correctAnswers'] else 0
            
            ts_content += "    {\n"
            ts_content += f"        id: {q['id']},\n"
            ts_content += f'        text: "{text}",\n'
            ts_content += "        options: [\n"
            for opt in q['options']:
                opt_esc = opt.replace('"', '\\"')
                ts_content += f'        "{opt_esc}",\n'
            ts_content += "    ],\n"
            ts_content += f"        correctAnswer: {primary},\n"
            ts_content += f"        correctAnswers: {q['correctAnswers']},\n"
            ts_content += f'        explanation: "{explanation}"\n'
            ts_content += "    },\n"
            
        ts_content += "];\n\n"
        
    with open(output_file, 'w') as f:
        f.write(ts_content)
    print(f"Generated {output_file}")

def main():
    files = [
        ("Mock Test-1.docx", "awsCCPQuestions"),
        ("Mock Test-2.docx", "awsCCPQuestions2"),
        ("Mock Test-3.docx", "awsCCPQuestions3"),
        ("Mock Test-4.docx", "awsCCPQuestions4"),
        ("Mock Test-5.docx", "awsCCPQuestions5"),
        ("Mock Test-6.docx", "awsCCPQuestions6"),
        ("Mock Test-7.docx", "awsCCPQuestions7"),
        ("Mock Test-8.docx", "awsCCPQuestions8"),
        ("Mock Test-9.docx", "awsCCPQuestions9"),
        ("Mock Test-10.docx", "awsCCPQuestions10"),
        ("Mock Test-11.docx", "awsCCPQuestions11")
    ]
    
    all_data = {}
    
    for filename, var_name in files:
        if os.path.exists(filename):
            print(f"Processing {filename}...")
            text = extract_text_from_docx(filename)
            questions = parse_questions(text)
            all_data[var_name] = questions
            print(f"  Found {len(questions)} questions.")
        else:
            print(f"Warning: {filename} not found.")
            all_data[var_name] = []

    generate_ts_file(all_data, "src/data/mockTests.ts")

if __name__ == "__main__":
    main()
