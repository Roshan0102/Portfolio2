import re
import glob

replacements = [
    (r'\btext-gray-900(?!\s+dark:)(\b)', r'text-gray-900 dark:text-gray-100\1'),
    (r'\btext-gray-800(?!\s+dark:)(\b)', r'text-gray-800 dark:text-gray-200\1'),
    (r'\btext-gray-700(?!\s+dark:)(\b)', r'text-gray-700 dark:text-gray-300\1'),
    (r'\btext-gray-600(?!\s+dark:)(\b)', r'text-gray-600 dark:text-gray-400\1'),
    (r'\btext-gray-500(?!\s+dark:)(\b)', r'text-gray-500 dark:text-gray-400\1'),
    (r'\bbg-white(?!\s+dark:)(?!/|:|\b-\b)(\b)', r'bg-white dark:bg-gray-900 transition-colors\1'),
    (r'\bbg-gray-50(?!\s+dark:)(\b)', r'bg-gray-50 dark:bg-gray-800/80 transition-colors\1'),
    (r'\bbg-gray-100(?!\s+dark:)(\b)', r'bg-gray-100 dark:bg-gray-800 transition-colors\1'),
    (r'\bborder-gray-100(?!\s+dark:)(\b)', r'border-gray-100 dark:border-gray-800\1'),
    (r'\bborder-gray-200(?!\s+dark:)(\b)', r'border-gray-200 dark:border-gray-700\1'),
    (r'\bbg-white/80(?!\s+dark:)(\b)', r'bg-white/80 dark:bg-gray-900/80\1'),
    (r'\bbg-white/90(?!\s+dark:)(\b)', r'bg-white/90 dark:bg-gray-900/90\1'),
    (r'\bbg-white/95(?!\s+dark:)(\b)', r'bg-white/95 dark:bg-gray-900/95\1'),
    (r'\bbg-white/50(?!\s+dark:)(\b)', r'bg-white/50 dark:bg-gray-900/50\1'),
]

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    for pattern, repl in replacements:
        new_content = re.sub(pattern, repl, new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f'Updated {filepath}')
