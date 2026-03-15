// script.js

const planData = {
    '59A': {
        name: '59A㎡',
        subtitle: '"가장 무난하고 안정적인 3Bay 표준형"',
        tags: ['판상형 기본', '안정감', '호불호 적음'],
        basicImg: 'images/page_1.png',
        extendedImg: 'images/page_2.png',
        stats: { area: '59㎡', bedrooms: '3개', bathrooms: '2개', bay: '3Bay [추정]' },
        features: [
            '<strong>[공간/배치]</strong> 거실을 중심으로 방이 양 옆에 나란히 배치된 전형적인 3Bay 판상형 구조로, 버려지는 면적이 적어 가구 배치가 수월합니다.',
            '<strong>[통풍/채광]</strong> 전면에 거실과 방 2개가 배치되어 일조량 확보에 유리하며, 거실과 주방이 마주보아 맞통풍(환기) 효과를 기대할 수 있습니다.',
            '<strong>[생활/편의]</strong> 현관 진입 시 거실 내부가 바로 노출되지 않도록 살짝 꺾인 동선으로 배치되어 있어 안정감을 줍니다.'
        ],
        target: '신혼부부, 어린 자녀가 있는 3인 가구, 보편적인 선호도(환금성)를 중요하게 생각하시는 분',
        factChecks: [
            {
                title: '침실3 → 실외기실 정정',
                desc: '기존 자료에서 보조기실/침실3으로 표기된 공간은 공식 도면 라벨 확인 결과 "실외기실"입니다. (침실 아님)'
            },
            {
                title: '확장형 발코니2 통합',
                desc: '확장형에서 북측 발코니2가 통째로 주방으로 통합된 것이 아니라, 일부 실내화(주방 확장)되며 발코니2 라벨 구간이 일부 잔존합니다.'
            }
        ]
    },
    '59B': {
        name: '59B㎡',
        subtitle: '"독립성과 사생활 보호가 뛰어난 코너형"',
        tags: ['코너형', '독립/프라이버시', '비정형'],
        basicImg: 'images/page_3.png',
        extendedImg: 'images/page_4.png',
        stats: { area: '59㎡', bedrooms: '3개', bathrooms: '2개', bay: '2Bay [추정]' },
        features: [
            '<strong>[사생활/동선]</strong> 현관에서 거실로 꺾여 들어가며, 안방과 자녀방의 거리가 멀어 가족 간 사생활(프라이버시) 보호에 유리한 구조입니다.',
            '<strong>[공간/조망]</strong> 2Bay 타워형(또는 혼합형) 평면으로, 전면과 측면에 창문이 분산 배치되어 단지 배치에 따라 다양한 조망 확보가 가능할 수 있습니다.',
            '<strong>[생활/편의]</strong> 현관에서 바로 주방과 침실 영역이 분리되는 느낌을 주어 독립적인 생활 패턴(재택근무 등)을 가진 세대에 적합합니다.'
        ],
        target: '재택근무로 독립된 방이 필요한 분, 성인 자녀가 있어 가족 간 프라이버시가 중요한 가구',
        factChecks: [
            {
                title: '침실수: 2개 → 3개 정정',
                desc: '기존 문건에 "2침실"이라 명시되어 있었으나, 확인 결과 침실1, 침실2, 안방으로 총 3실 구조입니다.'
            },
            {
                title: '넓어진 확장형',
                desc: '기존의 비정형으로 인한 좁은 구간이 발코니2 확장으로 편안한 조리공간과 넓은 체감 면적으로 보상됩니다.'
            }
        ]
    },
    '59C': {
        name: '59C㎡',
        subtitle: '"59A의 장점을 살린 또 다른 대안"',
        tags: ['A형 호환', '무난함', '실사용성 높은'],
        basicImg: 'images/page_5.png',
        extendedImg: 'images/page_6.png',
        stats: { area: '59㎡', bedrooms: '3개', bathrooms: '2개', bay: '3Bay [추정]' },
        features: [
            '<strong>[공간/배치]</strong> 59A타입과 거의 유사한 3Bay 판상형 구조로, 거주자 및 임차인에게 가장 친숙하여 향후 거래(환금성) 시 보편적 선호도를 갖습니다.',
            '<strong>[통풍/채광]</strong> 전면 거실과 주방-식당으로 이어지는 동선이 일직선에 가까워 맞통풍 구성을 통한 쾌적한 실내 환경 조성이 가능합니다.',
            '<strong>[설비/특화]</strong> 59A와 달리 실외기실이 상부(북측 또는 측면) 발코니 쪽에 별도 구획되어 있어, 안방이나 전면 발코니 공간 분리에 차이가 있습니다.'
        ],
        target: '59A를 선호하나 방향, 조망, 동 배치를 이유로 다른 선택지가 필요한 모든 실수요층',
        factChecks: [
            {
                title: '실외기실 분리 확인',
                desc: '59A와 달리 우측 상단이 아닌 북측 상단에 실외기실이 별도 구획된 것이 특징입니다.'
            }
        ]
    },
    '84': {
        name: '84㎡',
        subtitle: '"가장 선호도 높은 4Bay 국민평형 완성판"',
        tags: ['4Bay', '알파룸/팬트리', '국민가족형'],
        basicImg: 'images/page_7.png',
        extendedImg: 'images/page_8.png',
        stats: { area: '84㎡', bedrooms: '3개 + 알파룸', bathrooms: '2개', bay: '4Bay [추정]' },
        features: [
            '<strong>[공간/배치]</strong> 방 3개와 거실이 모두 전면에 배치되는 대표적인 4Bay 판상형 구조로, 채광 창이 많아 겨울철 난방 효과와 실내 밝기에 유리합니다.',
            '<strong>[수납/특화]</strong> 주방과 식당 옆으로 별도 구획된 "알파룸"과 대형 "팬트리(식품저장고)"가 있어, 부족한 수납을 해결하거나 홈오피스 등으로 활용 가능합니다.',
            '<strong>[생활/편의]</strong> "ㄷ"자 혹은 대면형 주방 구성이 가능해 보일 만큼 넓은 다이닝 공간을 제공하여 3~4인 가족의 핵심 생활반경이 여유롭습니다.'
        ],
        target: '초·중·고교생 자녀를 둔 표준 3~4인 가족, 거주 만족도와 환금성을 동시에 노리는 분',
        factChecks: [
            {
                title: '알파룸 위치: 안방 내부 아님',
                desc: '기존 "안방 내부 알파룸" 표기와 달리, 도면에서 알파룸은 주방/식당 인접의 별도 문이 달린 생활실로 확인되었습니다.'
            },
            {
                title: '확장형 총깊이 증가 관련',
                desc: '기존 "깊이 420mm 추가"는 외벽 총치수 변화가 아닙니다. 외벽(9400mm)은 동일하며, "발코니 실내화"를 통한 체감 깊이의 변화입니다.'
            }
        ]
    },
    '139': {
        name: '139㎡',
        subtitle: '"희소성 100%, 5룸의 프리미엄 하우스"',
        tags: ['5룸', '대형테라스', '초대형 럭셔리'],
        basicImg: 'images/page_9.png',
        extendedImg: 'images/page_10.png',
        stats: { area: '139㎡', bedrooms: '5개', bathrooms: '3개', bay: '5Bay+ [초대형]' },
        features: [
            '<strong>[공간/배치]</strong> 무려 5개의 방(침실)과 3개의 욕실이 구비된 초대형 횡방향 구조로, 2세대 이상이 합가하여 거주해도 동선이 간섭되지 않을 만큼 넓습니다.',
            '<strong>[조망/특화]</strong> 도면 상단 중앙에 "테라스" 라벨이 명시되어 있으며, 좌측 상하단으로 이어지는 널찍한 "갤러리 복도" 공간을 통해 최고급 주거의 느낌을 연출합니다.',
            '<strong>[생활/편의]</strong> 현관 중앙 진입을 기준으로 생활공간이 좌우로 완벽히 분리되어 손님 접객 공간과 프라이빗한 침실 공간을 구분하기 매우 용이합니다.'
        ],
        target: '품격 있는 합가 대가족, 개인 서재나 취미룸, 손님 응대용 특화 공간이 필수적인 분, 펜트하우스 프리미엄을 독점하시려는 분',
        factChecks: [
            {
                title: '갤러리 명칭/테라스 범위',
                desc: '기존 문건에 언급된 "갤러리 복도"와 "대테라"는 평면도 상 물리적으로는 존재하나, 명칭 라벨 확인은 불가능하므로 분양 카탈로그 대조 요망입니다.'
            },
            {
                title: '욕실 개수: 3개 명확화',
                desc: '도면 상 욕실 1, 욕실 2, 부부욕실 등 총 3개의 시공 라벨이 확인되어 대가족 거주에 무리가 없음을 확인했습니다.'
            }
        ]
    }
};

const comparisonTableData = [
    { type: '59A', area: '59㎡', pWidth: '12,880', beds: 3, baths: 2, balks: 3, bay: '3Bay', extras: '-' },
    { type: '59B', area: '59㎡', pWidth: '9,660', beds: 3, baths: 2, balks: 2, bay: '2Bay', extras: '-' },
    { type: '59C', area: '59㎡', pWidth: '12,980', beds: 3, baths: 2, balks: 3, bay: '3Bay', extras: '예비PD' },
    { type: '84', area: '84㎡', pWidth: '14,680', beds: 3, baths: 2, balks: 2, bay: '4Bay', extras: '알파룸, 팬트리' },
    { type: '139', area: '139㎡', pWidth: '29,360', beds: 5, baths: 3, balks: 5, bay: '5Bay+', extras: '테라스2개, 팬트리2개' }
];

// DOM Elements
const typeBtns = document.querySelectorAll('.type-btn:not(.compare-btn)');
const compareBtn = document.querySelector('.compare-btn');
const compareModal = document.getElementById('compareModal');
const closeModal = document.getElementById('closeModal');

const basicImg = document.getElementById('basicImg');
const extendedImg = document.getElementById('extendedImg');
const planTitle = document.getElementById('planTitle');
const planSubtitle = document.getElementById('planSubtitle');
const planTags = document.getElementById('planTags');
const planStats = document.getElementById('planStats');
const planFeatures = document.getElementById('planFeatures');

const expandBtn = document.getElementById('expandBtn');
const imageComparison = document.getElementById('imageComparison');
const comparisonInner = document.getElementById('comparisonInner');

// Slider logic
const slider = document.getElementById('compareSlider');
const extendedWrapper = document.getElementById('extendedWrapper');
const sliderHandle = document.getElementById('sliderHandle');

// Initial setup
init();

function init() {
    // Add event listeners
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        // clip-path inset: top right bottom left
        // Our extended image is on top, and we reveal it from the Right inwards.
        // Wait, standard slider: left=Extended, right=Basic (or vice versa).
        // A value of 0 means extendedWrapper is completely hidden (clipped right to 0%).
        // A value of 100 means extendedWrapper is fully visible (clipped left to 100%?).
        // Let's use: clip-path: inset(0 0 0 X%) where X is the slider value.
        // If X=50%, the left half is clipped out, showing Basic. Right half is Extended.
        extendedWrapper.style.clipPath = `inset(0 0 0 ${value}%)`;
        sliderHandle.style.left = `${value}%`;
    });

    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadType(btn.dataset.type);
        });
    });

    // Zoom and Pan State
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let startX, startY;

    function updateTransform() {
        comparisonInner.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    // Fullscreen Expand Toggle
    expandBtn.addEventListener('click', () => {
        imageComparison.classList.toggle('fullscreen-mode');
        const icon = expandBtn.querySelector('i');
        
        if (imageComparison.classList.contains('fullscreen-mode')) {
            icon.classList.remove('fa-expand');
            icon.classList.add('fa-compress');
            expandBtn.title = "원래 크기로 복귀";
            document.body.style.overflow = 'hidden';
            
            // Auto zoom in slightly to hide margins
            scale = 1.6;
            updateTransform();
        } else {
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
            expandBtn.title = "전체화면으로 크게 보기";
            document.body.style.overflow = '';
            
            // Reset zoom and pan
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
        }
    });

    // Zoom Handling
    imageComparison.addEventListener('wheel', (e) => {
        if (!imageComparison.classList.contains('fullscreen-mode')) return;
        e.preventDefault();
        
        const zoomSpeed = 0.1;
        if (e.deltaY < 0) {
            scale += zoomSpeed;
        } else {
            scale -= zoomSpeed; // zoom out
        }
        
        scale = Math.max(1, Math.min(scale, 5)); // Restrict scale between 1 and 5
        updateTransform();
    }, { passive: false });

    // Pan Handling (Mouse Drag)
    imageComparison.addEventListener('mousedown', (e) => {
        // Only pan if in fullscreen, not clicking the slider or expand button
        if (!imageComparison.classList.contains('fullscreen-mode') || 
            e.target.id === 'compareSlider' || 
            e.target.closest('#expandBtn')) return;
            
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Modal
    compareBtn.addEventListener('click', () => {
        compareModal.classList.add('show');
    });
    
    closeModal.addEventListener('click', () => {
        compareModal.classList.remove('show');
    });

    // Populate comparison table
    const tbody = document.getElementById('compareTableBody');
    comparisonTableData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.type}㎡</strong></td>
            <td>${row.area}</td>
            <td>${row.pWidth}</td>
            <td>${row.beds}</td>
            <td>${row.baths}</td>
            <td>${row.balks}개</td>
            <td>${row.bay}</td>
            <td>${row.extras}</td>
        `;
        tbody.appendChild(tr);
    });

    // Load initial 59A
    loadType('59A');
}

function loadType(typeKey) {
    const data = planData[typeKey];
    
    // Update Images
    basicImg.src = data.basicImg;
    extendedImg.src = data.extendedImg;
    planTitle.textContent = `${data.name} 기본형 ↔ 확장형 비교`;
    
    // Reset Slider
    slider.value = 50;
    extendedWrapper.style.clipPath = `inset(0 0 0 50%)`;
    sliderHandle.style.left = `50%`;

    // Update Text
    planSubtitle.textContent = data.subtitle;
    
    // Tags
    planTags.innerHTML = data.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Stats
    const statsHTML = `
        <div class="stat-item"><span class="stat-label">전용면적</span><span class="stat-value">${data.stats.area}</span></div>
        <div class="stat-item"><span class="stat-label">침실/알파룸</span><span class="stat-value">${data.stats.bedrooms}</span></div>
        <div class="stat-item"><span class="stat-label">욕실 수</span><span class="stat-value">${data.stats.bathrooms}</span></div>
        <div class="stat-item"><span class="stat-label">설계 관례</span><span class="stat-value">${data.stats.bay}</span></div>
    `;
    planStats.innerHTML = statsHTML;

    // Features
    planFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
}
