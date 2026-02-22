from PIL import Image, ImageDraw

def create_favicon():
    img = Image.new('RGBA', (256, 256), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # 본체 (어두운 회색 실루엣)
    draw.rounded_rectangle([(32, 24), (224, 232)], 40, fill="#2d3748")
    
    # 화면 (밝은 회색)
    draw.rounded_rectangle([(56, 56), (200, 104)], 16, fill="#e2e8f0")
    
    # 일반 버튼들
    btn_color = "#4a5568"
    draw.rounded_rectangle([(56, 128), (96, 160)], 8, fill=btn_color)
    draw.rounded_rectangle([(108, 128), (148, 160)], 8, fill=btn_color)
    draw.rounded_rectangle([(160, 128), (200, 160)], 8, fill=btn_color)
    
    draw.rounded_rectangle([(56, 176), (96, 208)], 8, fill=btn_color)
    draw.rounded_rectangle([(108, 176), (148, 208)], 8, fill=btn_color)
    
    # 눈에 띄는 빨간색 포인트 버튼
    draw.rounded_rectangle([(160, 176), (200, 208)], 12, fill="#ef4444") 
    
    img.save('favicon.png')
    print("Favicon generated successfully.")

if __name__ == '__main__':
    create_favicon()
