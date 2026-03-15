import fitz
import os
import sys

def extract_pdf_images():
    pdf_path = r'c:\Users\you82\OneDrive\Desktop\분석\TalkFile_괴정3 단위세대 컬러링.pdf'
    out_dir = r'c:\Users\you82\OneDrive\Desktop\분석\web\images'
    
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} not found.")
        sys.exit(1)
        
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    
    # 10 pages mapping to 1 to 10
    for i in range(len(doc)):
        page = doc.load_page(i)
        # 200 DPI for high quality while keeping size somewhat reasonable
        pix = page.get_pixmap(dpi=200)
        out_file = os.path.join(out_dir, f'page_{i+1}.png')
        pix.save(out_file)
        print(f"Saved {out_file}")

if __name__ == '__main__':
    extract_pdf_images()
