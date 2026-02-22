import os

def check_and_update_nav():
    directory = '.'
    
    # <li><a href="percent.html" class="hover:text-blue-600 transition-colors">퍼센트 계산기</a></li>
    # 위 타겟을 찾아서, 그 아래에 part-time.html 링크를 추가한다.
    
    target_string_active = '<li><a href="percent.html" class="text-blue-600 font-bold">퍼센트 계산기</a></li>'
    target_string_inactive = '<li><a href="percent.html" class="hover:text-blue-600 transition-colors">퍼센트 계산기</a></li>'
    
    new_link_string = '\n                    <li><a href="part-time.html" class="hover:text-blue-600 transition-colors">주휴수당 계산기</a></li>'

    html_files = [f for f in os.listdir(directory) if f.endswith('.html')]
    
    for filename in html_files:
        # 새로 만든 파일들은 이미 추가되어 있으므로 패스
        if filename in ['part-time.html', 'part-time-tip.html']:
            continue
            
        filepath = os.path.join(directory, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 이미 링크가 있는지 확인
        if 'part-time.html' in content:
            print(f"[{filename}] Already contains part-time.html link. Skipping.")
            continue
            
        updated = False
        
        # 교체 작업 (현재 퍼센트 페이지인 경우)
        if target_string_active in content:
            content = content.replace(target_string_active, target_string_active + new_link_string)
            updated = True
        # 교체 작업 (나머지 모든 페이지)
        elif target_string_inactive in content:
            content = content.replace(target_string_inactive, target_string_inactive + new_link_string)
            updated = True
            
        if updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[{filename}] Updated successfully.")
        else:
            print(f"[{filename}] Target string not found.")

if __name__ == '__main__':
    check_and_update_nav()
