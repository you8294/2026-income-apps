import os
import re

def fix_all_navs():
    directory = '.'
    
    # 덮어씌울 통일된 GNB (활성 탭 처리는 뒷부분에서 파일명 기반으로 적용)
    standard_nav_links = """
                <ul class="flex space-x-6 text-sm font-medium text-slate-600">
                    <li><a href="index.html" class="[INDEX_CLASS]">홈</a></li>
                    <li><a href="salary.html" class="[SALARY_CLASS]">연봉 계산기</a></li>
                    <li><a href="part-time.html" class="[PARTTIME_CLASS]">주휴수당 계산기</a></li>
                    <li><a href="percent.html" class="[PERCENT_CLASS]">퍼센트 계산기</a></li>
                    <li><a href="char-count.html" class="[CHAR_CLASS]">글자수 세기</a></li>
                    <li><a href="num-to-korean.html" class="[NUMKOR_CLASS]">숫자 한글 변환기</a></li>
                    <li><a href="tips.html" class="[TIPS_CLASS]">유용한 팁</a></li>
                    <li><a href="about.html" class="[ABOUT_CLASS]">소개</a></li>
                </ul>"""

    active_class = "text-blue-600 font-bold"
    inactive_class = "hover:text-blue-600 transition-colors"
    
    html_files = [f for f in os.listdir(directory) if f.endswith('.html')]
    
    # 정규식 패턴: <nav class="hidden sm:block"> 내부의 <ul> 태그 구조 전체 매칭
    # 주의: \s* 는 공백/줄바꿈 모두 매칭
    pattern = re.compile(r'<ul class="flex space-x-6 text-sm font-medium text-slate-600">.*?</ul>', re.DOTALL)
    
    updated_count = 0
    
    for filename in html_files:
        filepath = os.path.join(directory, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 이 파일 맞춤형 nav 링크 교체 생성
        nav_content = standard_nav_links
        nav_content = nav_content.replace('[INDEX_CLASS]', active_class if filename == 'index.html' else inactive_class)
        nav_content = nav_content.replace('[CHAR_CLASS]', active_class if filename == 'char-count.html' else inactive_class)
        nav_content = nav_content.replace('[SALARY_CLASS]', active_class if filename == 'salary.html' else inactive_class)
        nav_content = nav_content.replace('[PERCENT_CLASS]', active_class if filename == 'percent.html' else inactive_class)
        nav_content = nav_content.replace('[PARTTIME_CLASS]', active_class if filename == 'part-time.html' else inactive_class)
        nav_content = nav_content.replace('[NUMKOR_CLASS]', active_class if filename == 'num-to-korean.html' else inactive_class)
        nav_content = nav_content.replace('[TIPS_CLASS]', active_class if 'tip' in filename and filename != 'tips.html' else (active_class if filename == 'tips.html' else inactive_class))
        nav_content = nav_content.replace('[ABOUT_CLASS]', active_class if filename == 'about.html' else inactive_class)
        
        # 실제 치환 (re.sub)
        new_content, count = pattern.subn(nav_content.strip(), content)
        
        if count > 0 and new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[{filename}] Navigation updated successfully.")
            updated_count += 1
        elif count == 0:
            print(f"[{filename}] Nav pattern not found (no <ul> matched).")
        else:
            print(f"[{filename}] Navigation is already up-to-date and perfect.")
            
    print(f"\n총 {updated_count}개의 파일에서 네비게이션 메뉴를 일괄 갱신했습니다.")

if __name__ == '__main__':
    fix_all_navs()
