import os
import re

mapping = {
    # Backgrounds
    r'\bbg-midnight-950\b': 'bg-slate-50',
    r'\bbg-midnight-900\b': 'bg-white shadow-sm border border-slate-200',
    r'\bbg-midnight-800(?!/)': 'bg-white border-slate-200',
    r'\bbg-midnight-800/([0-9]+)\b': 'bg-slate-100',
    r'\bbg-midnight-700\b': 'bg-slate-100',
    r'\bbg-midnight-600\b': 'bg-slate-200',
    
    # Texts
    r'\btext-midnight-50\b': 'text-primary-950',
    r'\btext-midnight-100\b': 'text-primary-950',
    r'\btext-midnight-200\b': 'text-slate-600',
    r'\btext-midnight-300\b': 'text-slate-600',
    r'\btext-midnight-400\b': 'text-slate-500',
    r'\btext-midnight-500\b': 'text-slate-400',
    r'\btext-white\b(?!/)(?![\w-])': 'text-primary-950',
    r'\btext-white/([0-9]+)\b': 'text-slate-500',
    r'\bplaceholder:text-midnight-400\b': 'placeholder:text-slate-400',
    r'\bplaceholder:text-midnight-500\b': 'placeholder:text-slate-400',
    
    # Borders
    r'\bborder-white/5\b': 'border-slate-200',
    r'\bborder-white/10\b': 'border-slate-200',
    r'\bborder-midnight-700/50\b': 'border-slate-200',
    r'\bborder-midnight-700\b': 'border-slate-200',
    r'\bborder-midnight-600/50\b': 'border-slate-200',
    r'\bborder-midnight-600\b': 'border-slate-300',

    # Hover Texts
    r'\bhover:text-white\b': 'hover:text-primary-800',
    r'\bgroup-hover:text-white\b': 'group-hover:text-primary-800',

    # Hover BGs
    r'\bhover:bg-midnight-800/([0-9]+)\b': 'hover:bg-slate-100',
    r'\bhover:bg-midnight-800\b': 'hover:bg-slate-100',
    r'\bhover:bg-midnight-700\b': 'hover:bg-slate-200',

    # Border focus
    r'\bhover:border-accent-500/50\b': 'hover:border-accent-500',

    # Fill
    r'\bfill-midnight-950\b': 'fill-slate-50',
    r'\bfill-white\b': 'fill-primary-950',
    
    # Shadows
    r'\bshadow-glass-hover\b': 'shadow-md',
    r'\bshadow-glass\b': 'shadow-sm',
    
    # Misc
    r'\bbg-black/80\b': 'bg-slate-800',
}

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in mapping.items():
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js'):
                # skip i18n
                if file == 'i18n.js': continue
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == "__main__":
    process_directory(r"c:\Users\Akshta\digital library\DigitalLibrary\src")
