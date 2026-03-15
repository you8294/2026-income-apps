/* ── Theme Toggle (D2) ── */
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.innerHTML = document.body.classList.contains('light')
    ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

/* ── Map vs Photo View Toggle ── */
document.querySelectorAll('.map-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update tabs
    document.querySelectorAll('.map-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update image layers
    const targetId = 'view-' + btn.dataset.view;
    document.querySelectorAll('.img-layer').forEach(layer => {
      layer.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
  });
});

/* ── Hotspot Click Logic ── */
(function(){
  const hotspots = document.querySelectorAll('.hs');
  const cards = document.querySelectorAll('.icard');
  function showCard(id){
    cards.forEach(c => { c.classList.remove('visible'); c.style.display='none'; });
    const t = document.getElementById(id);
    if(t){
      t.style.display='block';
      setTimeout(()=>t.classList.add('visible'),10);
      // Mobile auto-scroll to card
      if(window.innerWidth <= 1024) {
        setTimeout(() => t.scrollIntoView({behavior:'smooth', block:'nearest'}), 100);
      }
    }
  }
  hotspots.forEach(hs => {
    hs.addEventListener('click', () => {
      hotspots.forEach(h => h.classList.remove('active'));
      hs.classList.add('active');
      showCard(hs.dataset.target);
      
      // If photo layer is active, switch back to map so user sees the hotspot
      const mapTab = document.querySelector('.map-tab[data-view="map"]');
      if(mapTab && !mapTab.classList.contains('active')) mapTab.click();
    });
  });
})();

/* ── Home Finder Quiz (C1) ── */
document.getElementById('quiz-submit').addEventListener('click', () => {
  const f = document.getElementById('q-family').value;
  const c = document.getElementById('q-commute').value;
  const q = document.getElementById('q-quiet').value;
  const s = document.getElementById('q-size').value;
  const res = document.getElementById('quiz-result');

  // Validation
  if(!f || !c || !q || !s) {
    res.innerHTML = '⚠️ <span style="color:var(--text2)">모든 항목을 선택해주세요.</span>';
    res.style.display = 'block';
    return;
  }
  
  let scores = {102:0, 101:0, 103:0};
  // Family
  if(f==='1') scores[102]+=3;
  if(f==='2') { scores[101]+=3; scores[103]+=1; }
  if(f==='3') scores[103]+=3;
  if(f==='4') { scores[101]+=3; scores[103]+=1; }
  // Commute
  if(c==='y') { scores[102]+=3; scores[103]+=1; }
  if(c==='n') { scores[101]+=2; scores[103]+=2; }
  // Quiet
  if(q==='y') { scores[101]+=3; }
  if(q==='n') { scores[102]+=1; scores[103]+=1; }
  // Size
  if(s==='59') scores[102]+=3;
  if(s==='84') scores[103]+=3;
  if(s==='any') { scores[101]+=1; scores[102]+=1; scores[103]+=1; }
  
  const best = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const dong = best[0][0];
  const msgs = {
    '102': '🏆 <strong style="color:#60a5fa">102동</strong>이 가장 잘 맞습니다!<br>빠른 출퇴근 동선 + 59㎡ 실속형 119세대. 상가(337평)도 가장 가까워 슬세권 생활이 가능합니다.<br><em style="color:var(--muted)">2순위: ' + best[1][0] + '동</em>',
    '101': '🏆 <strong style="color:#34d399">101동</strong>이 가장 잘 맞습니다!<br>단지 안쪽 초저소음 + 대형 경로당(40평) 직결 + 🏆139㎡ 펜트하우스(1세대). 승학어린이집도 인접합니다.<br><em style="color:var(--muted)">2순위: ' + best[1][0] + '동</em>',
    '103': '🏆 <strong style="color:#fbbf24">103동</strong>이 가장 잘 맞습니다!<br>84㎡ 국민평형 전용 로열동. 놀이터 직결 + 2개층 필로티 + 관리사무소(60평) 1분 컷.<br><em style="color:var(--muted)">2순위: ' + best[1][0] + '동</em>'
  };
  res.innerHTML = msgs[dong];
  res.style.display = 'block';

  // Auto-click the recommended hotspot
  const hsEl = document.getElementById('hs-' + dong);
  if(hsEl) hsEl.click();
});

/* ── Chart.js: Pie ── */
(function(){
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type:'doughnut',
    data:{
      labels:['59A (51세대)','59B (68세대)','59C (18세대)','84㎡ (92세대)','139P (1세대)'],
      datasets:[{data:[51,68,18,92,1],backgroundColor:['#3b82f6','#60a5fa','#93c5fd','#f59e0b','#10b981'],borderWidth:0,hoverOffset:6}]
    },
    options:{responsive:true,cutout:'55%',plugins:{legend:{position:'bottom',labels:{color:'#94a3b8',font:{size:10},padding:8,boxWidth:10}}}}
  });
})();

/* ── Chart.js: Radar ── */
(function(){
  const ctx = document.getElementById('radarChart').getContext('2d');
  new Chart(ctx, {
    type:'radar',
    data:{
      labels:['교통접근','커뮤니티','쾌적도','자녀양육','투자가치','대중성'],
      datasets:[
        {label:'102동',data:[5,3,3,2,5,5],fill:true,backgroundColor:'rgba(59,130,246,.15)',borderColor:'#3b82f6',pointBackgroundColor:'#3b82f6',pointRadius:3},
        {label:'101동',data:[3,3,5,4,3,3],fill:true,backgroundColor:'rgba(16,185,129,.15)',borderColor:'#10b981',pointBackgroundColor:'#10b981',pointRadius:3},
        {label:'103동',data:[3,5,3,5,5,5],fill:true,backgroundColor:'rgba(245,158,11,.15)',borderColor:'#f59e0b',pointBackgroundColor:'#f59e0b',pointRadius:3}
      ]
    },
    options:{responsive:true,scales:{r:{min:0,max:5,ticks:{stepSize:1,display:false},grid:{color:'rgba(255,255,255,.08)'},angleLines:{color:'rgba(255,255,255,.06)'},pointLabels:{color:'#94a3b8',font:{size:9}}}},plugins:{legend:{position:'bottom',labels:{color:'#94a3b8',font:{size:10},padding:8,boxWidth:10}}}}
  });
})();

/* ── Facility Button → Map Marker + Popup ── */
function toggleFac(btn) {
  const facName = btn.dataset.fac;
  const wasActive = btn.classList.contains('active');

  // Reset all
  document.querySelectorAll('.fac-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.fac-marker').forEach(m => {
    m.classList.remove('show', 'show-popup');
  });

  if (!wasActive) {
    // Activate this button and show its marker + popup
    btn.classList.add('active');
    const marker = document.querySelector(`.fac-marker[data-fac="${facName}"]`);
    if (marker) {
      marker.classList.add('show', 'show-popup');
    }
  }
}

// Click emoji dot to toggle popup on/off
document.querySelectorAll('.fac-marker .fm-dot').forEach(dot => {
  dot.addEventListener('click', (e) => {
    e.stopPropagation();
    const marker = dot.closest('.fac-marker');
    marker.classList.toggle('show-popup');
  });
});

// Click outside to close popups
const imgContainer = document.querySelector('.img-container');
if (imgContainer) {
  imgContainer.addEventListener('click', (e) => {
    if (!e.target.closest('.fac-marker') && !e.target.closest('.hs')) {
      document.querySelectorAll('.fac-marker').forEach(m => m.classList.remove('show-popup'));
    }
  });
}


/* ── Scroll Animations + Stat Counter (D4) ── */
(function(){
  let statsCounted = false;
  function animateCounters() {
    if(statsCounted) return;
    statsCounted = true;
    document.querySelectorAll('.stat-val').forEach(el => {
      const raw = el.textContent.replace(/[^0-9.]/g, '');
      const target = parseFloat(raw);
      if(isNaN(target)) return;
      const suffix = el.innerHTML.includes('<span>') ? el.querySelector('span')?.outerHTML || '' : '';
      const isFloat = raw.includes('.');
      const duration = 1200;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = target * ease;
        el.innerHTML = (isFloat ? current.toFixed(raw.split('.')[1].length) : Math.round(current)) + suffix;
        if(progress < 1) requestAnimationFrame(step);
      }
      el.innerHTML = (isFloat ? '0.' + '0'.repeat(raw.split('.')[1]?.length || 1) : '0') + suffix;
      requestAnimationFrame(step);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible-anim');
        if(e.target.classList.contains('stats')) animateCounters();
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll('.anim-target').forEach(el => observer.observe(el));
  // Also observe .stats specifically
  const statsEl = document.querySelector('.stats');
  if(statsEl) observer.observe(statsEl);
})();
