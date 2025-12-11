import re

def fix_ts_file(filename):
    with open(filename, 'r') as f:
        content = f.read()

    # We need to process the file content carefully.
    # Since it's a TS file, we can't just load it as JSON.
    # However, the structure is very regular.
    # We can use regex to find the blocks that need fixing.
    
    # Pattern to find a question block that has "Options:" in the text
    # We look for text: "..." that contains Options:
    
    def replacer(match):
        full_match = match.group(0)
        text_content = match.group(1)
        
        if "Options:" not in text_content:
            return full_match
            
        # Split into question and options
        parts = text_content.split("Options:")
        question_text = parts[0].strip()
        options_blob = parts[1].strip()
        
        # Regex to split options (A., B., C., D., E.)
        # We use a lookahead to split
        # Pattern: (A\.|B\.|C\.|D\.|E\.)
        
        # First, let's normalize spaces
        options_blob = " ".join(options_blob.split())
        
        # Split by capital letter followed by dot
        # We need to keep the delimiters to know which option is which, 
        # but actually we can just split and assume order if they are A, B, C...
        
        # Better approach: find all matches of "X. Option Text"
        # pattern = r'([A-E]\.)\s*(.*?)(?=(?:[A-E]\.)|$)'
        # This might fail if option text contains "A."
        
        # Let's try to split by " A. ", " B. ", etc.
        # But first option starts at beginning.
        
        # Add a leading space to make regex easier
        blob_to_search = " " + options_blob
        
        # Find all start indices
        indices = []
        for label in ["A.", "B.", "C.", "D.", "E."]:
            idx = blob_to_search.find(" " + label)
            if idx != -1:
                indices.append((idx, label))
        
        indices.sort()
        
        options = []
        correct_indices = []
        
        for i in range(len(indices)):
            start_idx = indices[i][0] + len(indices[i][1]) + 1 # +1 for space
            if i < len(indices) - 1:
                end_idx = indices[i+1][0]
            else:
                end_idx = len(blob_to_search)
            
            opt_text = blob_to_search[start_idx:end_idx].strip()
            
            # Check for correct
            is_correct = False
            if "- Correct" in opt_text:
                is_correct = True
                opt_text = opt_text.replace("- Correct", "").strip()
            
            # Remove trailing dot or comma if any (though unlikely based on blob)
            
            options.append(opt_text)
            if is_correct:
                correct_indices.append(i)
        
        if not options:
            return full_match # Failed to parse options
            
        # Reconstruct the block
        # We need to replace the text field and the options field
        # and the correctAnswers field.
        
        # The match group 1 is the content inside text: "..."
        # We need to reconstruct the whole object string? 
        # No, the regex matched the 'text: "..."' line.
        # We need to replace the following lines too: options: [...], correctAnswer: ..., correctAnswers: ...
        
        # This regex approach on the file content is tricky because we need to replace multiple lines.
        # Instead, let's parse the file line by line and maintain state.
        return full_match

    # Let's do line-by-line processing
    lines = content.split('\n')
    new_lines = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this line is 'text: "..."' and has "Options:"
        if 'text: "' in line and 'Options:' in line:
            # Extract the text content
            start_quote = line.find('"')
            end_quote = line.rfind('"')
            full_text = line[start_quote+1:end_quote]
            
            if "Options:" in full_text:
                parts = full_text.split("Options:")
                q_text = parts[0].strip()
                opts_blob = parts[1].strip()
                
                # Parse options
                blob_to_search = " " + opts_blob
                indices = []
                for label in ["A.", "B.", "C.", "D.", "E."]:
                    idx = blob_to_search.find(" " + label)
                    if idx != -1:
                        indices.append((idx, label))
                indices.sort()
                
                parsed_options = []
                correct_indices = []
                
                if indices:
                    for k in range(len(indices)):
                        start = indices[k][0] + len(indices[k][1]) + 1
                        end = indices[k+1][0] if k < len(indices) - 1 else len(blob_to_search)
                        opt_val = blob_to_search[start:end].strip()
                        
                        if "- Correct" in opt_val:
                            correct_indices.append(k)
                            opt_val = opt_val.replace("- Correct", "").strip()
                        
                        parsed_options.append(opt_val)
                
                if parsed_options:
                    # We found options!
                    # 1. Write the new text line
                    new_lines.append(f'        text: "{q_text}",')
                    
                    # 2. Skip the old options block
                    # The next line should be 'options: ['
                    i += 1
                    while '],' not in lines[i]:
                        i += 1
                    # Now lines[i] is '    ],'
                    
                    # 3. Write new options block
                    new_lines.append('        options: [')
                    for opt in parsed_options:
                        # Escape quotes if needed
                        opt_esc = opt.replace('"', '\\"')
                        new_lines.append(f'        "{opt_esc}",')
                    new_lines.append('    ],')
                    
                    # 4. Skip old correct answer lines
                    # Next lines are correctAnswer: ..., correctAnswers: ...
                    # We will overwrite them
                    i += 1
                    while 'correctAnswer:' not in lines[i] and 'correctAnswers:' not in lines[i]:
                         # Should be immediate, but just in case
                         # Actually we can just write our new ones and skip the next 2 lines if they match
                         pass
                    
                    # We expect:
                    # correctAnswer: X,
                    # correctAnswers: [...],
                    
                    # Let's just consume lines until we hit 'explanation:'
                    while 'explanation:' not in lines[i]:
                        i += 1
                    
                    # Now we are at explanation.
                    # Write our correct answers before explanation
                    primary_correct = correct_indices[0] if correct_indices else 0
                    new_lines.append(f'        correctAnswer: {primary_correct},')
                    new_lines.append(f'        correctAnswers: {correct_indices},')
                    
                    # Current line is explanation, let's keep it (and process it in next loop iteration or just append)
                    # But wait, we need to clean up explanation garbage if any
                    # The user mentioned garbage in explanation for Q30 (which is line 2242)
                    # But we are currently processing the 'text' line.
                    # So we just append the explanation line as is, unless we want to fix it too.
                    
                    # Let's fix the specific garbage string in explanation if present
                    expl_line = lines[i]
                    garbage = " Here are the Multiple Choice Questions (31-70) extracted from the provided PDF, formatted as requested. AWS Mock Test Questions 31-70"
                    if garbage in expl_line:
                        expl_line = expl_line.replace(garbage, "")
                    
                    new_lines.append(expl_line)
                    
                    i += 1
                    continue

        # Default: just copy the line
        new_lines.append(line)
        i += 1

    with open(filename, 'w') as f:
        f.write('\n'.join(new_lines))

if __name__ == "__main__":
    fix_ts_file('src/data/mockTests.ts')
