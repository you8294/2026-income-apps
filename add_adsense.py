import os
import glob

html_files = glob.glob('*.html')

adsense_code = """    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6898048106664229"
     crossorigin="anonymous"></script>
</head>"""

count = 0
for file_path in html_files:
    if file_path.startswith(('google', 'naver')):
        continue # Skip verification files
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'ca-pub-6898048106664229' not in content:
        # Insert right before </head>
        updated_content = content.replace('</head>', adsense_code)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        count += 1

print(f"AdSense code added to {count} files.")
