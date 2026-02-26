import os
import glob
from urllib.parse import urljoin

base_url = "https://utildesk.com/"
html_files = glob.glob('*.html')

count = 0
for file_path in html_files:
    if file_path.startswith(('google', 'naver')):
        continue
    
    # Determine the canonical URL for the current file
    file_name = os.path.basename(file_path)
    if file_name == 'index.html':
        canonical_url = base_url
    else:
        canonical_url = urljoin(base_url, file_name)
        
    canonical_tag = f'    <link rel="canonical" href="{canonical_url}">\n</head>'

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Avoid adding if already present
    if '<link rel="canonical"' not in content:
        # Insert right before </head>
        updated_content = content.replace('</head>', canonical_tag)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        count += 1

print(f"Canonical tags added to {count} files.")
