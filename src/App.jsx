<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TOFFEE COUNCIL — ระบบเข้าเวร</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700;800&family=Sarabun:wght@400;500;600;700&family=Chakra+Petch:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --void:#0a0806;
    --void-2:#120e08;
    --onyx:#171208;
    --onyx-2:#1e1710;
    --hairline:#3a2f18;
    --gold:#c9a227;
    --gold-bright:#e8c34a;
    --neon:#f4ff3d;
    --neon-dim:#c9d42a;
    --ivory:#f3ead9;
    --brass:#a3936a;
    --brass-dim:#6b5f45;
    --danger:#ff5a4d;
    --danger-dim:#a13f37;
    --ok:#7dffb0;
    --radius:14px;
    --shadow-gold: 0 0 0 1px rgba(201,162,39,.35), 0 8px 30px rgba(0,0,0,.55);
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:
      radial-gradient(60% 50% at 50% -10%, rgba(201,162,39,.16), transparent 60%),
      radial-gradient(40% 30% at 85% 10%, rgba(244,255,61,.05), transparent 60%),
      var(--void);
    color:var(--ivory);
    font-family:'Sarabun', sans-serif;
    min-height:100vh;
    -webkit-font-smoothing:antialiased;
  }
  ::selection{ background:var(--gold); color:#161105; }
  a{ color:var(--gold-bright); }
  button{ font-family:inherit; cursor:pointer; }
  input, select{ font-family:inherit; }
  :focus-visible{ outline:2px solid var(--neon); outline-offset:2px; border-radius:4px; }

  /* ---------- layout shells ---------- */
  .wrap{ max-width:1080px; margin:0 auto; padding:22px 16px 60px; }
  .topbar{
    display:flex; align-items:center; justify-content:space-between; gap:14px;
    padding:14px 18px; border:1px solid var(--hairline); border-radius:var(--radius);
    background:linear-gradient(180deg, var(--onyx-2), var(--onyx));
    box-shadow:var(--shadow-gold);
    flex-wrap:wrap;
  }
  .brand{ display:flex; align-items:center; gap:12px; }
  .seal{ width:44px; height:44px; flex:0 0 auto; filter:drop-shadow(0 0 6px rgba(244,255,61,.25)); }
  .seal.live circle.pulse{ animation:pulseRing 2.4s ease-in-out infinite; }
  @keyframes pulseRing{
    0%,100%{ opacity:.55; }
    50%{ opacity:1; filter:drop-shadow(0 0 6px var(--neon)); }
  }
  .brand h1{
    font-family:'Kanit',sans-serif; font-weight:800; letter-spacing:.06em;
    font-size:19px; margin:0; text-transform:uppercase;
    color:var(--ivory);
    text-shadow:0 0 18px rgba(201,162,39,.35);
  }
  .brand small{ display:block; font-family:'Sarabun',sans-serif; font-weight:500; color:var(--brass); font-size:12px; letter-spacing:.03em; margin-top:2px; }

  .navtabs{ display:flex; gap:6px; }
  .navtabs button{
    background:transparent; border:1px solid var(--hairline); color:var(--brass);
    padding:9px 16px; border-radius:999px; font-family:'Kanit',sans-serif; font-weight:600; font-size:13.5px;
    letter-spacing:.02em; transition:all .15s ease;
  }
  .navtabs button.active{ background:var(--gold); border-color:var(--gold); color:#191204; box-shadow:0 0 18px rgba(201,162,39,.4); }
  .navtabs button:not(.active):hover{ border-color:var(--gold); color:var(--gold-bright); }

  .marquee{
    margin-top:12px; border:1px solid var(--hairline); border-radius:10px;
    background:#0c0a06; padding:9px 16px; display:flex; align-items:center; gap:10px;
    font-family:'Chakra Petch',monospace; font-size:13px; color:var(--neon);
    text-shadow:0 0 10px rgba(244,255,61,.35); letter-spacing:.03em; flex-wrap:wrap;
  }
  .marquee .dot{ width:8px; height:8px; border-radius:50%; background:var(--ok); box-shadow:0 0 8px var(--ok); flex:0 0 auto; animation:blink 1.6s ease-in-out infinite; }
  @keyframes blink{ 0%,100%{opacity:1;} 50%{opacity:.35;} }
  .marquee .sep{ color:var(--brass-dim); }

  main{ margin-top:20px; }

  /* ---------- cards / panels ---------- */
  .panel{
    border:1px solid var(--hairline); border-radius:var(--radius);
    background:linear-gradient(180deg, var(--onyx-2), var(--onyx));
    box-shadow:var(--shadow-gold); padding:22px;
  }
  .panel + .panel{ margin-top:16px; }
  .panel h2{
    font-family:'Kanit',sans-serif; font-weight:700; font-size:16px; letter-spacing:.03em;
    margin:0 0 16px; color:var(--gold-bright); text-transform:uppercase; font-size:14px;
    display:flex; align-items:center; gap:8px;
  }
  .panel h2::before{ content:''; width:4px; height:14px; background:var(--gold); border-radius:2px; box-shadow:0 0 8px var(--gold); }

  /* ---------- member duty terminal ---------- */
  .terminal{ max-width:440px; margin:0 auto; text-align:center; }
  .terminal .label{ font-family:'Kanit',sans-serif; font-weight:600; font-size:12px; letter-spacing:.12em; color:var(--brass); text-transform:uppercase; margin-bottom:8px; }
  select.nameSelect, input.pinField{
    width:100%; background:#0c0a06; border:1px solid var(--hairline); color:var(--ivory);
    padding:13px 14px; border-radius:10px; font-size:15px; margin-bottom:12px; transition:border-color .15s;
  }
  select.nameSelect:focus, input.pinField:focus{ border-color:var(--gold); }
  input.pinField{ font-family:'Chakra Petch',monospace; letter-spacing:.4em; text-align:center; font-size:20px; }
  input.pinField::placeholder{ letter-spacing:normal; font-family:'Sarabun',sans-serif; font-size:14px; }

  .duty-ring-wrap{ position:relative; width:220px; height:220px; margin:14px auto 18px; }
  .duty-ring-wrap svg{ width:100%; height:100%; transform:rotate(-90deg); }
  .duty-ring-bg{ fill:none; stroke:var(--hairline); stroke-width:6; }
  .duty-ring-fg{ fill:none; stroke:var(--neon); stroke-width:6; stroke-linecap:round; filter:drop-shadow(0 0 6px var(--neon)); transition:stroke-dashoffset 1s linear; }
  .duty-ring-fg.idle{ stroke:var(--brass-dim); filter:none; }
  .duty-center{ position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; }
  .duty-center .status-dot{ width:9px; height:9px; border-radius:50%; margin-bottom:8px; background:var(--brass-dim); }
  .duty-center.on .status-dot{ background:var(--ok); box-shadow:0 0 10px var(--ok); animation:blink 1.6s ease-in-out infinite; }
  .duty-time{ font-family:'Chakra Petch',monospace; font-size:30px; font-weight:600; color:var(--ivory); letter-spacing:.02em; }
  .duty-time.on{ color:var(--neon); text-shadow:0 0 16px rgba(244,255,61,.45); }
  .duty-sub{ font-family:'Sarabun',sans-serif; font-size:11.5px; color:var(--brass); letter-spacing:.08em; margin-top:4px; text-transform:uppercase; }

  .who{ font-family:'Kanit',sans-serif; font-weight:600; font-size:17px; margin:2px 0 0; color:var(--ivory); }
  .startedAt{ font-size:12.5px; color:var(--brass); margin-top:2px; }

  .btn{
    font-family:'Kanit',sans-serif; font-weight:700; letter-spacing:.03em; font-size:14.5px;
    padding:13px 20px; border-radius:10px; border:1px solid transparent; width:100%;
    transition:transform .1s ease, box-shadow .15s ease; text-transform:uppercase;
  }
  .btn:active{ transform:scale(.98); }
  .btn-gold{ background:linear-gradient(180deg, var(--gold-bright), var(--gold)); color:#181205; box-shadow:0 0 22px rgba(201,162,39,.35); }
  .btn-gold:hover{ box-shadow:0 0 30px rgba(232,195,74,.55); }
  .btn-neon{ background:transparent; border-color:var(--neon); color:var(--neon); box-shadow:0 0 0 rgba(0,0,0,0); }
  .btn-neon:hover{ background:rgba(244,255,61,.08); box-shadow:0 0 20px rgba(244,255,61,.25); }
  .btn-danger{ background:transparent; border-color:var(--danger-dim); color:var(--danger); }
  .btn-danger:hover{ background:rgba(255,90,77,.1); }
  .btn-ghost{ background:transparent; border-color:var(--hairline); color:var(--brass); }
  .btn-ghost:hover{ border-color:var(--gold); color:var(--gold-bright); }
  .btn-sm{ width:auto; padding:7px 12px; font-size:12px; border-radius:8px; }

  .msg{ margin-top:10px; font-size:13px; font-family:'Sarabun',sans-serif; min-height:18px; }
  .msg.err{ color:var(--danger); }
  .msg.ok{ color:var(--ok); }

  /* ---------- public duty list ---------- */
  .duty-list{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:8px; }
  .duty-list li{
    display:flex; align-items:center; justify-content:space-between; gap:10px;
    padding:10px 14px; background:#0c0a06; border:1px solid var(--hairline); border-radius:10px;
  }
  .duty-list .who2{ display:flex; align-items:center; gap:9px; font-family:'Kanit',sans-serif; font-weight:500; font-size:14px; }
  .duty-list .who2 .dot{ width:7px; height:7px; border-radius:50%; background:var(--ok); box-shadow:0 0 7px var(--ok); animation:blink 1.6s ease-in-out infinite; }
  .duty-list .pos{ color:var(--brass); font-size:12px; font-weight:400; }
  .duty-list .elapsed{ font-family:'Chakra Petch',monospace; color:var(--neon); font-size:13.5px; }
  .empty-note{ color:var(--brass-dim); font-size:13.5px; text-align:center; padding:14px 0; }

  /* ---------- admin ---------- */
  .login-box{ max-width:340px; margin:40px auto; text-align:center; }
  .login-box .seal{ width:56px; height:56px; margin:0 auto 14px; }
  .login-box h2{ justify-content:center; }
  .login-box h2::before{ display:none; }
  .hint{ font-size:12px; color:var(--brass-dim); margin-top:10px; }

  .stat-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:6px; }
  .plaque{ border:1px solid var(--hairline); border-radius:10px; background:#0c0a06; padding:16px; text-align:center; }
  .plaque .num{ font-family:'Chakra Petch',monospace; font-size:26px; font-weight:600; color:var(--gold-bright); }
  .plaque .lbl{ font-size:11.5px; color:var(--brass); text-transform:uppercase; letter-spacing:.08em; margin-top:4px; }

  .admin-tabs{ display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px; }
  .admin-tabs button{
    background:transparent; border:1px solid var(--hairline); color:var(--brass);
    padding:8px 14px; border-radius:8px; font-family:'Kanit',sans-serif; font-weight:600; font-size:13px;
  }
  .admin-tabs button.active{ background:var(--onyx-2); border-color:var(--gold); color:var(--gold-bright); }

  table{ width:100%; border-collapse:collapse; font-size:13.5px; }
  thead th{
    text-align:left; font-family:'Kanit',sans-serif; font-weight:600; font-size:11.5px; letter-spacing:.06em;
    text-transform:uppercase; color:var(--gold); border-bottom:1px solid var(--hairline); padding:9px 10px;
  }
  tbody td{ padding:10px; border-bottom:1px solid rgba(58,47,24,.5); color:var(--ivory); }
  tbody tr:hover td{ background:rgba(244,255,61,.03); }
  .tbl-wrap{ overflow-x:auto; }
  .badge{ display:inline-block; padding:3px 9px; border-radius:999px; font-size:11px; font-family:'Kanit',sans-serif; font-weight:600; }
  .badge.on{ background:rgba(125,255,176,.12); color:var(--ok); border:1px solid rgba(125,255,176,.3); }
  .badge.off{ background:rgba(163,147,106,.12); color:var(--brass); border:1px solid var(--hairline); }

  .form-row{ display:grid; grid-template-columns:1fr 1fr 1fr auto; gap:10px; align-items:end; margin-bottom:18px; }
  .form-row .field label, .inline-edit label{ display:block; font-size:11.5px; color:var(--brass); margin-bottom:5px; text-transform:uppercase; letter-spacing:.05em; }
  .form-row input, .inline-edit input{
    width:100%; background:#0c0a06; border:1px solid var(--hairline); color:var(--ivory);
    padding:10px 11px; border-radius:8px; font-size:13.5px;
  }
  .form-row input:focus, .inline-edit input:focus{ border-color:var(--gold); }

  .filters{ display:flex; gap:10px; flex-wrap:wrap; margin-bottom:16px; align-items:end; }
  .filters .field label{ display:block; font-size:11.5px; color:var(--brass); margin-bottom:5px; text-transform:uppercase; letter-spacing:.05em; }
  .filters select, .filters input{ background:#0c0a06; border:1px solid var(--hairline); color:var(--ivory); padding:9px 11px; border-radius:8px; font-size:13.5px; }

  .row-actions{ display:flex; gap:6px; flex-wrap:wrap; }
  .rank{ font-family:'Chakra Petch',monospace; color:var(--gold); font-weight:600; }

  .foot{ text-align:center; color:var(--brass-dim); font-size:11.5px; margin-top:28px; letter-spacing:.03em; }

  @media (max-width:640px){
    .stat-grid{ grid-template-columns:1fr; }
    .form-row{ grid-template-columns:1fr 1fr; }
    .navtabs button{ padding:8px 12px; font-size:12.5px; }
    .brand h1{ font-size:16px; }
  }
  @media (prefers-reduced-motion: reduce){
    .seal.live circle.pulse, .marquee .dot, .duty-center.on .status-dot, .duty-list .who2 .dot{ animation:none !important; }
  }
</style>
</head>
<body>
<div class="wrap">

  <div class="topbar">
    <div class="brand">
      <svg class="seal" id="sealSvg" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="26" fill="none" stroke="#c9a227" stroke-width="1.5"/>
        <circle class="pulse" cx="30" cy="30" r="21" fill="none" stroke="#f4ff3d" stroke-width="1"/>
        <g stroke="#c9a227" stroke-width="1">
          <line x1="30" y1="4" x2="30" y2="9"/><line x1="30" y1="51" x2="30" y2="56"/>
          <line x1="4" y1="30" x2="9" y2="30"/><line x1="51" y1="30" x2="56" y2="30"/>
        </g>
        <text x="30" y="36" text-anchor="middle" font-family="Kanit, sans-serif" font-weight="800" font-size="17" fill="#f3ead9">TC</text>
      </svg>
      <div>
        <h1>Toffee Council</h1>
        <small>ระบบปฏิบัติหน้าที่ · Duty Log System</small>
      </div>
    </div>
    <div class="navtabs">
      <button id="tabMemberBtn" class="active">หน้าสมาชิก</button>
      <button id="tabAdminBtn">แอดมิน</button>
    </div>
  </div>

  <div class="marquee">
    <span class="dot"></span>
    <span id="marqueeText">กำลังโหลดข้อมูล…</span>
  </div>

  <main id="main"></main>

  <div class="foot">TOFFEE COUNCIL DUTY SYSTEM · เวลาทั้งหมดอ้างอิงเขตเวลา Asia/Bangkok</div>
</div>

<script>
/* ============================================================
   STATE
============================================================ */
const S = {
  members: [],
  sessions: [],
  adminAuth: null,
  view: 'member',
  adminTab: 'dashboard',
  loggedIn: false,
  selectedMemberId: '',
  editingMemberId: null,
  histFilterMember: '',
  histFilterDate: '',
  lastSnapshot: ''
};

/* ============================================================
   HELPERS
============================================================ */
function uid(p){ return p + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }

function bkkDateKey(ms){
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Bangkok', year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(ms));
  const m = {}; parts.forEach(p=>m[p.type]=p.value);
  return `${m.year}-${m.month}-${m.day}`;
}
function bkkTimeStr(ms){
  return new Intl.DateTimeFormat('th-TH',{timeZone:'Asia/Bangkok',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(ms));
}
function bkkDateStr(ms){
  return new Intl.DateTimeFormat('th-TH',{timeZone:'Asia/Bangkok',day:'2-digit',month:'short',year:'numeric'}).format(new Date(ms));
}
function fmtDur(sec){
  sec = Math.max(0, Math.floor(sec));
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function fmtHM(sec){
  sec = Math.max(0, Math.floor(sec));
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60);
  return `${h} ชม. ${m} น.`;
}
function esc(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function todayKeyNow(){ return bkkDateKey(Date.now()); }
function yesterdayKeyNow(){ return bkkDateKey(Date.now() - 24*3600*1000); }
function thisMonthPrefix(){ return todayKeyNow().slice(0,7); }

function getActiveSession(memberId){
  return S.sessions.find(s => s.memberId === memberId && s.clockOut === null) || null;
}
function getAllActiveSessions(){
  return S.sessions.filter(s => s.clockOut === null).sort((a,b)=>a.clockIn-b.clockIn);
}
function activeMembers(){ return S.members.filter(m => m.status !== 'inactive'); }

function sumSecondsForDate(dateKey, memberId){
  return S.sessions.filter(s => (!memberId || s.memberId === memberId) && bkkDateKey(s.clockIn) === dateKey)
    .reduce((acc,s) => {
      const end = s.clockOut ?? Date.now();
      return acc + Math.floor((end - s.clockIn)/1000);
    }, 0);
}
function sumSecondsForMonth(monthPrefix, memberId){
  return S.sessions.filter(s => (!memberId || s.memberId === memberId) && bkkDateKey(s.clockIn).startsWith(monthPrefix))
    .reduce((acc,s) => {
      const end = s.clockOut ?? Date.now();
      return acc + Math.floor((end - s.clockIn)/1000);
    }, 0);
}

/* ============================================================
   STORAGE
============================================================ */
async function storageGetJSON(key){
  try{
    const r = await window.storage.get(key, true);
    return r ? JSON.parse(r.value) : null;
  }catch(e){ return null; }
}
async function storageSetJSON(key, value){
  try{
    await window.storage.set(key, JSON.stringify(value), true);
    return true;
  }catch(e){ console.error('storage set failed', key, e); return false; }
}

async function loadAll(){
  const [m, s, a] = await Promise.all([
    storageGetJSON('tc_members'),
    storageGetJSON('tc_sessions'),
    storageGetJSON('tc_admin_auth')
  ]);
  S.members = m || [];
  S.sessions = s || [];
  S.adminAuth = a;
  if(!S.adminAuth){
    S.adminAuth = { password: 'council2026' };
    await storageSetJSON('tc_admin_auth', S.adminAuth);
  }
}
function saveMembers(){ return storageSetJSON('tc_members', S.members); }
function saveSessions(){ return storageSetJSON('tc_sessions', S.sessions); }
function saveAdminAuth(){ return storageSetJSON('tc_admin_auth', S.adminAuth); }

/* ============================================================
   RENDER: TOPBAR / MARQUEE
============================================================ */
function renderMarquee(){
  const active = getAllActiveSessions();
  const todaySec = sumSecondsForDate(todayKeyNow());
  document.getElementById('marqueeText').textContent =
    `${active.length} สมาชิกกำลังปฏิบัติหน้าที่ · วันนี้รวม ${fmtHM(todaySec)} · สมาชิกทั้งหมด ${activeMembers().length} คน`;
  document.getElementById('sealSvg').classList.toggle('live', active.length > 0);
}

/* ============================================================
   RENDER: MEMBER VIEW
============================================================ */
function renderMemberView(){
  const main = document.getElementById('main');
  const members = activeMembers();
  const selected = members.find(m => m.id === S.selectedMemberId) || null;
  const activeSession = selected ? getActiveSession(selected.id) : null;

  const options = members
    .slice()
    .sort((a,b)=>a.name.localeCompare(b.name,'th'))
    .map(m => `<option value="${esc(m.id)}" ${m.id===S.selectedMemberId?'selected':''}>${esc(m.name)}${m.position?' — '+esc(m.position):''}</option>`)
    .join('');

  let ringHtml, controlsHtml;

  if(!selected){
    ringHtml = ringSvg(false, 0);
    controlsHtml = `<div class="msg">เลือกชื่อของคุณเพื่อเริ่มปฏิบัติหน้าที่</div>`;
  } else if(activeSession){
    ringHtml = ringSvg(true, activeSession.clockIn);
    controlsHtml = `
      <div class="who">${esc(selected.name)}</div>
      <div class="startedAt">เริ่มเวลา ${bkkTimeStr(activeSession.clockIn)} น.</div>
      ${selected.pin ? `<input type="password" inputmode="numeric" maxlength="6" class="pinField" id="pinOutInput" placeholder="รหัสสมาชิก">` : ''}
      <button class="btn btn-danger" id="clockOutBtn" style="margin-top:6px;">ออกเวร</button>
      <div class="msg" id="memberMsg"></div>
    `;
  } else {
    ringHtml = ringSvg(false, 0);
    controlsHtml = `
      <div class="who">${esc(selected.name)}</div>
      <div class="startedAt">${selected.position ? esc(selected.position) : 'พร้อมปฏิบัติหน้าที่'}</div>
      ${selected.pin ? `<input type="password" inputmode="numeric" maxlength="6" class="pinField" id="pinInInput" placeholder="รหัสสมาชิก">` : ''}
      <button class="btn btn-gold" id="clockInBtn" style="margin-top:6px;">เข้าเวร</button>
      <div class="msg" id="memberMsg"></div>
    `;
  }

  const activeList = getAllActiveSessions().map(s => {
    const m = S.members.find(mm => mm.id === s.memberId);
    return `<li>
      <span class="who2"><span class="dot"></span>${esc(s.memberName)}${m && m.position ? `<span class="pos">· ${esc(m.position)}</span>`:''}</span>
      <span class="elapsed" data-clockin="${s.clockIn}">00:00:00</span>
    </li>`;
  }).join('');

  main.innerHTML = `
    <div class="panel terminal">
      <h2 style="justify-content:center;">ปฏิบัติหน้าที่</h2>
      <div class="label">ชื่อสมาชิก</div>
      <select class="nameSelect" id="nameSelect">
        <option value="">— เลือกชื่อของคุณ —</option>
        ${options}
      </select>
      <div class="duty-ring-wrap">${ringHtml}</div>
      ${controlsHtml}
    </div>

    <div class="panel">
      <h2>กำลังปฏิบัติหน้าที่อยู่ตอนนี้</h2>
      ${activeList ? `<ul class="duty-list">${activeList}</ul>` : `<div class="empty-note">ยังไม่มีใครเข้าเวรอยู่ตอนนี้</div>`}
    </div>
  `;

  document.getElementById('nameSelect').addEventListener('change', (e) => {
    S.selectedMemberId = e.target.value;
    renderMemberView();
  });
  const inBtn = document.getElementById('clockInBtn');
  if(inBtn) inBtn.addEventListener('click', handleClockIn);
  const outBtn = document.getElementById('clockOutBtn');
  if(outBtn) outBtn.addEventListener('click', handleClockOut);

  tickTimers();
}

function ringSvg(active, clockIn){
  const r = 100, c = 2*Math.PI*r;
  return `
    <svg viewBox="0 0 220 220">
      <circle class="duty-ring-bg" cx="110" cy="110" r="${r}"></circle>
      <circle class="duty-ring-fg ${active?'':'idle'}" id="ringFg" cx="110" cy="110" r="${r}"
        stroke-dasharray="${c}" stroke-dashoffset="${c*0.25}"></circle>
    </svg>
    <div class="duty-center ${active?'on':''}">
      <span class="status-dot"></span>
      <span class="duty-time ${active?'on':''}" id="ringTime" data-clockin="${active?clockIn:''}">${active?'00:00:00':'--:--:--'}</span>
      <span class="duty-sub">${active?'กำลังเข้าเวร':'ยังไม่เข้าเวร'}</span>
    </div>
  `;
}

async function handleClockIn(){
  const member = S.members.find(m => m.id === S.selectedMemberId);
  const msg = document.getElementById('memberMsg');
  if(!member){ setMsg(msg,'กรุณาเลือกชื่อของคุณ','err'); return; }
  if(getActiveSession(member.id)){ setMsg(msg,'คุณกำลังเข้าเวรอยู่แล้ว','err'); return; }
  if(member.pin){
    const pinVal = document.getElementById('pinInInput')?.value.trim() || '';
    if(pinVal !== member.pin){ setMsg(msg,'รหัสสมาชิกไม่ถูกต้อง','err'); return; }
  }
  S.sessions.push({ id: uid('s'), memberId: member.id, memberName: member.name, clockIn: Date.now(), clockOut: null, durationSeconds: null, endedBy: null });
  await saveSessions();
  renderMemberView();
  renderMarquee();
}

async function handleClockOut(){
  const member = S.members.find(m => m.id === S.selectedMemberId);
  const msg = document.getElementById('memberMsg');
  if(!member) return;
  const session = getActiveSession(member.id);
  if(!session) return;
  if(member.pin){
    const pinVal = document.getElementById('pinOutInput')?.value.trim() || '';
    if(pinVal !== member.pin){ setMsg(msg,'รหัสสมาชิกไม่ถูกต้อง','err'); return; }
  }
  session.clockOut = Date.now();
  session.durationSeconds = Math.floor((session.clockOut - session.clockIn)/1000);
  session.endedBy = 'member';
  await saveSessions();
  renderMemberView();
  renderMarquee();
}

function setMsg(el, text, kind){
  if(!el) return;
  el.textContent = text;
  el.className = 'msg ' + (kind||'');
}

/* ticking clocks — updates text only, no re-render, so inputs keep focus */
function tickTimers(){
  document.querySelectorAll('[data-clockin]').forEach(el => {
    const ci = Number(el.getAttribute('data-clockin'));
    if(!ci) return;
    const sec = Math.floor((Date.now()-ci)/1000);
    el.textContent = fmtDur(sec);
  });
}

/* ============================================================
   RENDER: ADMIN VIEW
============================================================ */
function renderAdminView(){
  const main = document.getElementById('main');
  if(!S.loggedIn){
    main.innerHTML = `
      <div class="panel login-box">
        <svg class="seal" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="26" fill="none" stroke="#c9a227" stroke-width="1.5"/>
          <text x="30" y="36" text-anchor="middle" font-family="Kanit, sans-serif" font-weight="800" font-size="17" fill="#f3ead9">TC</text>
        </svg>
        <h2>Council Admin</h2>
        <input class="pinField" style="letter-spacing:.15em;font-size:16px;" type="password" id="adminPassInput" placeholder="รหัสผ่านแอดมิน">
        <button class="btn btn-gold" id="adminLoginBtn" style="margin-top:10px;">เข้าสู่ระบบ</button>
        <div class="msg" id="adminLoginMsg"></div>
        <div class="hint">ครั้งแรกใช้งาน รหัสผ่านเริ่มต้นคือ <b>council2026</b><br>เปลี่ยนได้ในแท็บตั้งค่าเมื่อเข้าสู่ระบบแล้ว</div>
      </div>
    `;
    document.getElementById('adminLoginBtn').addEventListener('click', () => {
      const val = document.getElementById('adminPassInput').value;
      const msg = document.getElementById('adminLoginMsg');
      if(val === S.adminAuth.password){
        S.loggedIn = true;
        renderAdminView();
      } else {
        setMsg(msg,'รหัสผ่านไม่ถูกต้อง','err');
      }
    });
    document.getElementById('adminPassInput').addEventListener('keydown', (e) => {
      if(e.key === 'Enter') document.getElementById('adminLoginBtn').click();
    });
    return;
  }

  const tabs = [
    ['dashboard','แดชบอร์ด'], ['members','จัดการสมาชิก'], ['history','ประวัติ'], ['reports','รายงาน'], ['settings','ตั้งค่า']
  ];
  main.innerHTML = `
    <div class="admin-tabs">
      ${tabs.map(([k,l]) => `<button data-tab="${k}" class="${S.adminTab===k?'active':''}">${l}</button>`).join('')}
      <button class="btn-ghost" id="logoutBtn" style="margin-left:auto;border-radius:8px;padding:8px 14px;font-family:'Kanit',sans-serif;font-weight:600;font-size:13px;background:transparent;">ออกจากระบบ</button>
    </div>
    <div id="adminContent"></div>
  `;
  document.querySelectorAll('.admin-tabs [data-tab]').forEach(btn => {
    btn.addEventListener('click', () => { S.adminTab = btn.getAttribute('data-tab'); renderAdminView(); });
  });
  document.getElementById('logoutBtn').addEventListener('click', () => { S.loggedIn = false; renderAdminView(); });

  const content = document.getElementById('adminContent');
  if(S.adminTab === 'dashboard') content.innerHTML = adminDashboardHtml();
  if(S.adminTab === 'members') content.innerHTML = adminMembersHtml();
  if(S.adminTab === 'history') content.innerHTML = adminHistoryHtml();
  if(S.adminTab === 'reports') content.innerHTML = adminReportsHtml();
  if(S.adminTab === 'settings') content.innerHTML = adminSettingsHtml();

  bindAdminTabEvents();
  tickTimers();
}

function adminDashboardHtml(){
  const active = getAllActiveSessions();
  const todaySec = sumSecondsForDate(todayKeyNow());
  const rows = active.map(s => {
    const m = S.members.find(mm => mm.id === s.memberId);
    return `<tr>
      <td>${esc(s.memberName)}</td>
      <td>${m && m.position ? esc(m.position) : '-'}</td>
      <td>${bkkTimeStr(s.clockIn)}</td>
      <td class="elapsed" data-clockin="${s.clockIn}">00:00:00</td>
      <td><button class="btn btn-sm btn-danger" data-force="${s.id}">บังคับออกเวร</button></td>
    </tr>`;
  }).join('');
  return `
    <div class="panel">
      <div class="stat-grid">
        <div class="plaque"><div class="num">${activeMembers().length}</div><div class="lbl">สมาชิกทั้งหมด</div></div>
        <div class="plaque"><div class="num">${active.length}</div><div class="lbl">กำลังเข้าเวร</div></div>
        <div class="plaque"><div class="num">${fmtHM(todaySec)}</div><div class="lbl">รวมชั่วโมงวันนี้</div></div>
      </div>
    </div>
    <div class="panel">
      <h2>ผู้ที่กำลังเข้าเวร</h2>
      ${rows ? `<div class="tbl-wrap"><table><thead><tr><th>สมาชิก</th><th>ตำแหน่ง</th><th>เข้าเวลา</th><th>ปฏิบัติมาแล้ว</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`
             : `<div class="empty-note">ไม่มีสมาชิกเข้าเวรอยู่ในขณะนี้</div>`}
    </div>
  `;
}

function adminMembersHtml(){
  const list = S.members.slice().sort((a,b)=>{
    if(a.status !== b.status) return a.status === 'inactive' ? 1 : -1;
    return a.name.localeCompare(b.name,'th');
  });
  const rows = list.map(m => {
    if(S.editingMemberId === m.id){
      return `<tr>
        <td colspan="5">
          <div class="inline-edit" style="display:grid;grid-template-columns:1fr 1fr 1fr auto auto;gap:8px;align-items:end;">
            <div><label>ชื่อ</label><input id="editName" value="${esc(m.name)}"></div>
            <div><label>ตำแหน่ง</label><input id="editPosition" value="${esc(m.position||'')}"></div>
            <div><label>รหัส 4-6 หลัก</label><input id="editPin" value="${esc(m.pin||'')}" maxlength="6"></div>
            <button class="btn btn-sm btn-gold" data-save-edit="${m.id}">บันทึก</button>
            <button class="btn btn-sm btn-ghost" data-cancel-edit="1">ยกเลิก</button>
          </div>
        </td>
      </tr>`;
    }
    const active = getActiveSession(m.id);
    return `<tr>
      <td>${esc(m.name)}</td>
      <td>${m.position ? esc(m.position) : '-'}</td>
      <td>${m.pin ? '••••' : '<span style="color:var(--brass-dim)">ไม่ใช้รหัส</span>'}</td>
      <td>${active ? '<span class="badge on">กำลังเข้าเวร</span>' : (m.status==='inactive' ? '<span class="badge off">ปิดใช้งาน</span>' : '<span class="badge off">ว่าง</span>')}</td>
      <td>
        <div class="row-actions">
          <button class="btn btn-sm btn-ghost" data-edit="${m.id}">แก้ไข</button>
          <button class="btn btn-sm btn-ghost" data-toggle="${m.id}">${m.status==='inactive'?'เปิดใช้งาน':'ปิดใช้งาน'}</button>
          ${S.confirmDeleteId === m.id
            ? `<button class="btn btn-sm btn-danger" data-delete-confirm="${m.id}">ยืนยันลบ</button><button class="btn btn-sm btn-ghost" data-delete-cancel="1">ยกเลิก</button>`
            : `<button class="btn btn-sm btn-danger" data-delete="${m.id}">ลบถาวร</button>`}
        </div>
      </td>
    </tr>`;
  }).join('');

  return `
    <div class="panel">
      <h2>เพิ่มสมาชิกใหม่</h2>
      <div class="form-row">
        <div class="field"><label>ชื่อ *</label><input id="newName" placeholder="เช่น นาย A"></div>
        <div class="field"><label>ตำแหน่ง</label><input id="newPosition" list="posList" placeholder="สมาชิกสภา">
          <datalist id="posList">
            <option value="ประธานสภา"><option value="รองประธานสภา"><option value="เลขานุการ"><option value="สมาชิกสภา"><option value="ที่ปรึกษา">
          </datalist>
        </div>
        <div class="field"><label>รหัส 4-6 หลัก (ไม่บังคับ)</label><input id="newPin" placeholder="เว้นว่างได้" maxlength="6"></div>
        <button class="btn btn-gold" id="addMemberBtn" style="width:auto;">เพิ่มสมาชิก</button>
      </div>
      <div class="msg" id="membersMsg"></div>
    </div>
    <div class="panel">
      <h2>รายชื่อสมาชิก (${list.length})</h2>
      ${list.length ? `<div class="tbl-wrap"><table><thead><tr><th>ชื่อ</th><th>ตำแหน่ง</th><th>รหัส</th><th>สถานะ</th><th>จัดการ</th></tr></thead><tbody>${rows}</tbody></table></div>`
                    : `<div class="empty-note">ยังไม่มีสมาชิกในระบบ</div>`}
    </div>
  `;
}

function adminHistoryHtml(){
  const memberOptions = S.members.slice().sort((a,b)=>a.name.localeCompare(b.name,'th'))
    .map(m => `<option value="${esc(m.id)}" ${S.histFilterMember===m.id?'selected':''}>${esc(m.name)}</option>`).join('');

  let filtered = S.sessions.filter(s => s.clockOut !== null);
  if(S.histFilterMember) filtered = filtered.filter(s => s.memberId === S.histFilterMember);
  if(S.histFilterDate) filtered = filtered.filter(s => bkkDateKey(s.clockIn) === S.histFilterDate);
  filtered = filtered.sort((a,b) => b.clockIn - a.clockIn).slice(0,300);

  const rows = filtered.map(s => `<tr>
    <td>${bkkDateStr(s.clockIn)}</td>
    <td>${esc(s.memberName)}</td>
    <td>${bkkTimeStr(s.clockIn)}</td>
    <td>${bkkTimeStr(s.clockOut)}</td>
    <td>${fmtDur(s.durationSeconds)}</td>
    <td>${s.endedBy==='admin' ? '<span class="badge off">แอดมินสั่งออก</span>' : '<span class="badge on">ออกเวรเอง</span>'}</td>
  </tr>`).join('');

  return `
    <div class="panel">
      <h2>ค้นหาประวัติ</h2>
      <div class="filters">
        <div class="field"><label>สมาชิก</label>
          <select id="histMember"><option value="">ทั้งหมด</option>${memberOptions}</select>
        </div>
        <div class="field"><label>วันที่</label><input type="date" id="histDate" value="${S.histFilterDate}"></div>
        <button class="btn btn-ghost" id="histClear" style="width:auto;">ล้างตัวกรอง</button>
        <button class="btn btn-neon" id="histExport" style="width:auto;">ส่งออก CSV</button>
      </div>
      <div class="tbl-wrap">
        ${rows ? `<table><thead><tr><th>วันที่</th><th>สมาชิก</th><th>เข้า</th><th>ออก</th><th>รวม</th><th>สิ้นสุดโดย</th></tr></thead><tbody>${rows}</tbody></table>`
               : `<div class="empty-note">ไม่พบข้อมูลตามเงื่อนไข</div>`}
      </div>
    </div>
  `;
}

function adminReportsHtml(){
  const dateKey = todayKeyNow();
  const yKey = yesterdayKeyNow();
  const monthPrefix = thisMonthPrefix();

  function tableFor(secFn, args){
    const rows = activeMembers()
      .map(m => ({ m, sec: secFn(...args, m.id) }))
      .sort((a,b) => b.sec - a.sec)
      .filter(r => r.sec > 0);
    if(!rows.length) return `<div class="empty-note">ยังไม่มีข้อมูลในช่วงนี้</div>`;
    return `<table><thead><tr><th>อันดับ</th><th>สมาชิก</th><th>ชั่วโมงรวม</th></tr></thead><tbody>
      ${rows.map((r,i) => `<tr><td class="rank">#${i+1}</td><td>${esc(r.m.name)}</td><td>${fmtHM(r.sec)}</td></tr>`).join('')}
    </tbody></table>`;
  }

  return `
    <div class="panel">
      <h2>วันนี้ (${bkkDateStr(Date.now())})</h2>
      <div class="tbl-wrap">${tableFor(sumSecondsForDate,[dateKey])}</div>
    </div>
    <div class="panel">
      <h2>เมื่อวาน</h2>
      <div class="tbl-wrap">${tableFor(sumSecondsForDate,[yKey])}</div>
    </div>
    <div class="panel">
      <h2>เดือนนี้</h2>
      <div class="tbl-wrap">${tableFor(sumSecondsForMonth,[monthPrefix])}</div>
    </div>
  `;
}

function adminSettingsHtml(){
  return `
    <div class="panel" style="max-width:420px;">
      <h2>เปลี่ยนรหัสผ่านแอดมิน</h2>
      <div class="field" style="margin-bottom:10px;"><label style="display:block;font-size:11.5px;color:var(--brass);margin-bottom:5px;text-transform:uppercase;">รหัสผ่านใหม่</label>
        <input id="newAdminPass" class="pinField" style="letter-spacing:.1em;font-size:15px;" placeholder="อย่างน้อย 4 ตัวอักษร"></div>
      <button class="btn btn-gold" id="savePassBtn">บันทึกรหัสผ่านใหม่</button>
      <div class="msg" id="settingsMsg"></div>
    </div>
  `;
}

function bindAdminTabEvents(){
  const forceBtns = document.querySelectorAll('[data-force]');
  forceBtns.forEach(b => b.addEventListener('click', async () => {
    const id = b.getAttribute('data-force');
    const session = S.sessions.find(s => s.id === id);
    if(!session) return;
    session.clockOut = Date.now();
    session.durationSeconds = Math.floor((session.clockOut - session.clockIn)/1000);
    session.endedBy = 'admin';
    await saveSessions();
    renderAdminView();
    renderMarquee();
  }));

  const addBtn = document.getElementById('addMemberBtn');
  if(addBtn) addBtn.addEventListener('click', async () => {
    const name = document.getElementById('newName').value.trim();
    const position = document.getElementById('newPosition').value.trim();
    const pin = document.getElementById('newPin').value.trim();
    const msg = document.getElementById('membersMsg');
    if(!name){ setMsg(msg,'กรุณากรอกชื่อสมาชิก','err'); return; }
    if(pin && !/^\d{4,6}$/.test(pin)){ setMsg(msg,'รหัสต้องเป็นตัวเลข 4-6 หลัก','err'); return; }
    S.members.push({ id: uid('m'), name, position, pin, status:'active' });
    await saveMembers();
    setMsg(msg,'เพิ่มสมาชิกเรียบร้อย','ok');
    renderAdminView();
  });

  document.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => {
    S.editingMemberId = b.getAttribute('data-edit'); S.confirmDeleteId = null; renderAdminView();
  }));
  document.querySelectorAll('[data-cancel-edit]').forEach(b => b.addEventListener('click', () => {
    S.editingMemberId = null; renderAdminView();
  }));
  document.querySelectorAll('[data-save-edit]').forEach(b => b.addEventListener('click', async () => {
    const id = b.getAttribute('data-save-edit');
    const m = S.members.find(mm => mm.id === id);
    const name = document.getElementById('editName').value.trim();
    const position = document.getElementById('editPosition').value.trim();
    const pin = document.getElementById('editPin').value.trim();
    if(!name) return;
    if(pin && !/^\d{4,6}$/.test(pin)) return;
    m.name = name; m.position = position; m.pin = pin;
    S.editingMemberId = null;
    await saveMembers();
    renderAdminView();
  }));

  document.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', async () => {
    const id = b.getAttribute('data-toggle');
    const m = S.members.find(mm => mm.id === id);
    m.status = m.status === 'inactive' ? 'active' : 'inactive';
    await saveMembers();
    renderAdminView();
  }));
  document.querySelectorAll('[data-delete]').forEach(b => b.addEventListener('click', () => {
    S.confirmDeleteId = b.getAttribute('data-delete'); renderAdminView();
  }));
  document.querySelectorAll('[data-delete-cancel]').forEach(b => b.addEventListener('click', () => {
    S.confirmDeleteId = null; renderAdminView();
  }));
  document.querySelectorAll('[data-delete-confirm]').forEach(b => b.addEventListener('click', async () => {
    const id = b.getAttribute('data-delete-confirm');
    S.members = S.members.filter(m => m.id !== id);
    S.confirmDeleteId = null;
    await saveMembers();
    renderAdminView();
  }));

  const histMember = document.getElementById('histMember');
  if(histMember) histMember.addEventListener('change', (e) => { S.histFilterMember = e.target.value; renderAdminView(); });
  const histDate = document.getElementById('histDate');
  if(histDate) histDate.addEventListener('change', (e) => { S.histFilterDate = e.target.value; renderAdminView(); });
  const histClear = document.getElementById('histClear');
  if(histClear) histClear.addEventListener('click', () => { S.histFilterMember=''; S.histFilterDate=''; renderAdminView(); });
  const histExport = document.getElementById('histExport');
  if(histExport) histExport.addEventListener('click', exportCsv);

  const savePassBtn = document.getElementById('savePassBtn');
  if(savePassBtn) savePassBtn.addEventListener('click', async () => {
    const val = document.getElementById('newAdminPass').value;
    const msg = document.getElementById('settingsMsg');
    if(!val || val.length < 4){ setMsg(msg,'รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร','err'); return; }
    S.adminAuth.password = val;
    await saveAdminAuth();
    setMsg(msg,'บันทึกรหัสผ่านใหม่แล้ว','ok');
  });
}

function exportCsv(){
  let filtered = S.sessions.filter(s => s.clockOut !== null);
  if(S.histFilterMember) filtered = filtered.filter(s => s.memberId === S.histFilterMember);
  if(S.histFilterDate) filtered = filtered.filter(s => bkkDateKey(s.clockIn) === S.histFilterDate);
  filtered = filtered.sort((a,b) => b.clockIn - a.clockIn);

  const header = ['วันที่','สมาชิก','เข้าเวลา','ออกเวลา','รวม(ชม:นาที:วิ)','สิ้นสุดโดย'];
  const lines = [header.join(',')];
  filtered.forEach(s => {
    lines.push([
      bkkDateStr(s.clockIn), s.memberName, bkkTimeStr(s.clockIn), bkkTimeStr(s.clockOut),
      fmtDur(s.durationSeconds), s.endedBy === 'admin' ? 'แอดมิน' : 'ตนเอง'
    ].map(v => `"${String(v).replace(/"/g,'""')}"`).join(','));
  });
  const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `toffee-council-history-${todayKeyNow()}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============================================================
   ROOT RENDER / NAV
============================================================ */
function render(){
  renderMarquee();
  if(S.view === 'member') renderMemberView();
  else renderAdminView();
}

document.getElementById('tabMemberBtn').addEventListener('click', () => {
  S.view = 'member';
  document.getElementById('tabMemberBtn').classList.add('active');
  document.getElementById('tabAdminBtn').classList.remove('active');
  render();
});
document.getElementById('tabAdminBtn').addEventListener('click', () => {
  S.view = 'admin';
  document.getElementById('tabAdminBtn').classList.add('active');
  document.getElementById('tabMemberBtn').classList.remove('active');
  render();
});

/* ============================================================
   INIT / TIMERS / POLLING
============================================================ */
(async function init(){
  await loadAll();
  S.lastSnapshot = JSON.stringify({ m: S.members, s: S.sessions });
  render();

  setInterval(tickTimers, 1000);

  setInterval(async () => {
    const focused = document.activeElement;
    const isTyping = focused && ['INPUT','SELECT'].includes(focused.tagName);
    if(isTyping || S.editingMemberId) return;
    await loadAll();
    const snap = JSON.stringify({ m: S.members, s: S.sessions });
    if(snap !== S.lastSnapshot){
      S.lastSnapshot = snap;
      render();
    } else {
      renderMarquee();
    }
  }, 5000);
})();
</script>
</body>
</html>