# 괴정3가로주택정비사업조합 — 웹 대시보드

> GitHub: https://github.com/you8294/2026-income-apps  
> 배포 URL: https://you8294.github.io/2026-income-apps/  
> 마지막 업데이트: 2026-03-15

---

## 🗂 프로젝트 구조

```
2026-income-apps/
├── index.html                          ← 메인 홈 (카드 메뉴 허브)
├── 최종_괴정3_글자최대_출력최적화.html   ← 분담금 계산기 (조합원용 출력)
├── 최종_조합원_분양_혜택.html           ← 무상 옵션 및 혜택 안내
├── analysis/
│   ├── building.html                   ← 건축 분석 시뮬레이션 (단위세대 도면 비교)
│   ├── style.css
│   ├── script.js
│   └── images/                         ← 단위세대 도면 이미지 (page_1.png ~ page_10.png 등)
└── goejeong3-all/                      ← 괴정3 전체 단지 안내 (apt.html)
    ├── apt.html                        ← 단지 배치도 + 항공조감도 + 동별 상세 안내
    ├── app.js
    ├── styles.css
    ├── 전체배치.png                     ← 단지 배치도 이미지
    ├── rendering.png                   ← 항공 조감도 AI 렌더링
    └── ...기타 분석 자료
```

---

## 🔐 비밀번호

| 카드 | 대상 페이지 | 비밀번호 |
|---|---|---|
| 건축 분석 시뮬레이션 보기 | `analysis/building.html` | **2033** |
| 괴정3 전체 상세 요약 보기 | `goejeong3-all/apt.html` | **2033** |

---

## 📄 페이지별 주요 기능

### `index.html` — 메인 홈
- D-Day 카운트다운 (5월 7일 분양신청 마감)
- 진행률 프로그레스 바 (2/25 시작 ~ 5/7 마감)
- 4개 메뉴 카드 (비밀번호가 필요한 카드는 2개)

### `최종_괴정3_글자최대_출력최적화.html` — 분담금 계산기
- React 기반 SPA (Babel CDN)
- 감정가 · 비례율 입력 → 예상 분담금 자동 계산
- 조합원 혜택(무상옵션) 체크리스트
- JSON 파일 저장/불러오기
- A4 인쇄 최적화

### `analysis/building.html` — 단위세대 도면 비교
- 59A / 59B / 59C / 84 / 139㎡ 타입별 슬라이더 비교 (기본형 ↔ 확장형)
- 종합 비교 모달 테이블
- script.js?v=1.1 (캐시 무효화 버전 쿼리 사용)

### `goejeong3-all/apt.html` — 단지 전체 안내
- 단지 배치도 (`전체배치.png`) + 항공 조감도 (`rendering.png`) 탭 전환
- 동 마커 클릭 → 101·102·103동 상세 카드
- 시설 버튼(관리사무소, 경로당 등) → 지도 위 위치 표시 팝업
- **풀스크린 확대 버튼** (이미지 자연 비율 계산 → 마커 위치 정확 유지)
- 나에게 맞는 동 찾기 퀴즈
- Chart.js 차트 (평형 구성 비율 / 동별 특성 비교 레이더)
- 라이트/다크 모드 토글, 인쇄 버튼

---

## 🔗 페이지 간 이동 버튼

| 페이지 | 메인으로 돌아가기 버튼 | 경로 |
|---|---|---|
| `최종_괴정3_글자최대_출력최적화.html` | ✅ (좌상단 고정) | `index.html` |
| `최종_조합원_분양_혜택.html` | ✅ (좌상단 고정) | `index.html` |
| `analysis/building.html` | ✅ (좌상단 고정) | `../index.html` |
| `goejeong3-all/apt.html` | ✅ (좌상단 고정) | `../index.html` |

---

## ✅ 작업 이력

### 2026-03-15
- `goejeong3-all/` 폴더 생성 및 `괴정3 전체` 프로젝트 복사
- `index.html`에 4번째 카드("괴정3 전체 상세 요약 보기") 추가 — 비밀번호 `2033` 보호
- `analysis/building.html`, `goejeong3-all/apt.html`에 메인으로 돌아가는 버튼 추가
- `apt.html` 단지 배치도 / 항공 조감도에 **풀스크린 확대 버튼** 추가
  - JS가 `naturalWidth/naturalHeight`로 이미지 비율 계산 → img-layer 크기를 px로 설정 → 마커 위치 정확 유지
- `index.html` CSS 오류 수정: `:first-child`/`:last-child` → `:nth-child(1)`/`:nth-child(2)` 아이콘 색상 수정
- `index.html` 3·4번째 카드 애니메이션 딜레이 추가

---

## 🛠 다음 작업 시 참고 사항

- **CSS 변수**: `index.html` `:root` 블록에 색상 변수 정의 (`--accent: #6b8afd` 등)
- **폰트**: Noto Sans KR (Google Fonts CDN), FontAwesome 6.x (CDNJS)
- **차트**: Chart.js 4.4.0 (jsDelivr CDN)
- **`apt.html` 마커 좌표**: `left: xx%; top: xx%` — 이미지 비율 기준이므로 이미지 교체 시 재조정 필요
- **인쇄 비밀번호**: `checkPassword()` 및 `checkPasswordNew()` 함수 — `index.html` 하단 `<script>` 태그 내
- **도면 이미지**: `analysis/images/page_1.png ~ page_10.png` (타입별 기본형·확장형)
- **GitHub Pages** 배포가 활성화되어 있으므로 `main/master` 브랜치 push 즉시 반영됨
