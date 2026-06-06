import os

replacements = {
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\pages\Login.jsx": [
        ("text-midnight-950", "text-primary-950")
    ],
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\pages\Lectures.jsx": [
        ("text-midnight-950", "text-white")
    ],
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\pages\Dashboard.jsx": [
        ("from-midnight-950/90 via-midnight-950/20", "from-slate-900/80 via-slate-900/40")
    ],
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\pages\BookDetail.jsx": [
        ("from-midnight-950/80", "from-slate-900/80"),
        ("border-midnight-800/50", "border-slate-200")
    ],
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\components\ui\ActionSurface.jsx": [
        ("text-midnight-950", "text-white")
    ],
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\components\library\BookCard.jsx": [
        ("from-midnight-950/80", "from-slate-900/80")
    ],
    r"c:\Users\Akshta\digital library\DigitalLibrary\src\components\layout\Navbar.jsx": [
        ("border-midnight-800/50", "border-slate-200"),
        ("text-midnight-950", "text-white")
    ]
}

for filepath, reps in replacements.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in reps:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {os.path.basename(filepath)}")
