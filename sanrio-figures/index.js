/* ============================================================
   Art Figure Collection – My Melody & Kuromi
   index.js
   ============================================================ */

// ─── DATA ────────────────────────────────────────────────────────
const DATA = {
  melody: {
    badge:     '✨ Edição Limitada',
    title:     'A doçura que<br>cabe na sua prateleira',
    sub:       'Figuras de arte oficiais para quem carrega amor por toda parte 🎀',
    eyebrow:   '🎀 Art Figure Premium',
    copyTitle: 'My Melody nasceu para<br>trazer doçura ao seu dia',
    copyBody:  'Criada nas florestas encantadas de Mary Land, My Melody carrega no seu capuzinho rosa toda a ternura do mundo. Esta figura de arte captura cada detalhe com perfeição: os olhinhos brilhantes, o laço delicado e aquele sorriso que aquece qualquer coração. Perfeita para a sua mesa, prateleira ou como presente inesquecível.',
    price:     'R$ 189,90',
    priceOld:  'R$ 249,00',
    disc:      '−24%',
    ribbon:    'NOVO ✦',
    stock:     '🔥 Restam apenas 12 unidades!',
    stockPct:  '23%',
    rating:    '4.9 · 2.341 avaliações',
    amazonUrl: 'https://www.amazon.com.br/Funko-Pop-Sanrio-colecion%C3%A1vel-Mercadoria/dp/B0DP7BZMNZ/ref=sr_1_15',
    tags:      ['Colecionável', 'Sanrio Official', '12 cm', 'Alta Fidelidade', 'Pintura à Mão'],
    features: [
      { icon: '🎨', title: 'Pintura à Mão',     desc: 'Cada detalhe feito com carinho artesanal' },
      { icon: '📦', title: 'Embalagem Premium',  desc: 'Box colecionável com janela de exposição' },
      { icon: '✨', title: 'Edição Limitada',    desc: 'Apenas 500 unidades disponíveis globalmente' },
      { icon: '🌸', title: 'Licença Oficial',    desc: '100% oficial licenciado pela Sanrio' },
    ],
    deco:    ['🌸', '⭐', '🎀'],
    reviews: [
      {
        name: 'Ana P.', avatar: '🌸', date: '12 mar 2025', stars: 5, verified: true,
        text: 'Chegou super rápido e a embalagem é lindíssima! A My Melody ficou perfeita na minha prateleira, estou absolutamente apaixonada 💖',
      },
      {
        name: 'Juliana M.', avatar: '🎀', date: '28 fev 2025', stars: 5, verified: true,
        text: 'Presente perfeito pra quem ama Sanrio. A pintura é muito detalhada, vale cada centavo. Já estou pensando em comprar a Kuromi também!',
      },
      {
        name: 'Carla R.', avatar: '💕', date: '5 jan 2025', stars: 4, verified: false,
        text: 'Fiquei encantada com a qualidade. O capuzinho rosa dela é literalmente a coisa mais fofa que já vi. Recomendo demais!',
      },
    ],
    confettiColors: ['#FF2D55', '#FFD700', '#FFC0CB', '#FFFFFF', '#FF6B8A'],
  },

  kuromi: {
    badge:     '🖤 Drop Especial',
    title:     'Atitude que você<br>carrega pra sempre',
    sub:       'Para quem ama o fofo — mas com muita atitude e estilo rebelde 💜',
    eyebrow:   '💀 Art Figure Premium',
    copyTitle: 'Kuromi: a rival favorita<br>de todos',
    copyBody:  'Criada na Gamagori Junior High School, Kuromi pode parecer durona — mas no fundo é pura paixão. Esta figura de arte premium captura cada detalhe: o crânio no capuz, os olhos expressivos e aquela atitude inconfundível que conquistou o mundo. Ideal para quem coleciona personalidade. E bom gosto.',
    price:     'R$ 199,90',
    priceOld:  'R$ 259,00',
    disc:      '−23%',
    ribbon:    'EDGY ✦',
    stock:     '⚡ Restam apenas 8 unidades!',
    stockPct:  '15%',
    rating:    '4.8 · 1.876 avaliações',
    amazonUrl: 'https://www.amazon.com.br/Funko-Pop-Sanrio-colecion%C3%A1vel-Mercadoria/dp/B0DP7CDDNX/ref=sr_1_3',
    tags:      ['Colecionável', 'Sanrio Official', '13 cm', 'Edição Dark', 'Pintura à Mão'],
    features: [
      { icon: '🖤', title: 'Edição Dark',    desc: 'Estética exclusiva para colecionadores edgy' },
      { icon: '📦', title: 'Box Exclusiva',  desc: 'Embalagem temática com skull pattern' },
      { icon: '⚡', title: 'Drop Limitado',  desc: 'Apenas 300 unidades no Brasil' },
      { icon: '💜', title: 'Licença Oficial',desc: '100% oficial licenciado pela Sanrio' },
    ],
    deco:    ['💜', '💀', '⚡'],
    reviews: [
      {
        name: 'Beatriz K.', avatar: '💜', date: '15 mar 2025', stars: 5, verified: true,
        text: 'Kuromi é minha personalidade num objeto. A figura chegou sem nenhum arranhão, embalagem incrível. Quem é da gang da Kuromi precisa ter essa.',
      },
      {
        name: 'Fernanda L.', avatar: '⚡', date: '20 fev 2025', stars: 5, verified: true,
        text: 'Comprei de surpresa e me arrependi de ter esperado tanto. O nível de detalhe é absurdo — o crânio no capuz ficou PERFEITO. 10/10',
      },
      {
        name: 'Marina S.', avatar: '🖤', date: '8 jan 2025', stars: 5, verified: false,
        text: 'Olhei o modelo 3D no site e já fiquei apaixonada, mas o produto real superou tudo. Kuromi representando na minha mesa de trabalho 🖤',
      },
    ],
    confettiColors: ['#B57EDC', '#FF4FA3', '#5A2D82', '#FFFFFF', '#FF80C0'],
  },
};

// ─── THEMES ──────────────────────────────────────────────────────
const THEMES = {
  melody: {
    '--bg':      '#FFF0F5',
    '--primary': '#FF2D55',
    '--accent':  '#FFD700',
    '--soft':    '#FFC0CB',
    '--text':    '#2a2a2a',
    '--card':    '#FFFFFF',
    '--btn':     '#FF2D55',
    '--btn-txt': '#FFFFFF',
    '--shadow':  'rgba(255,45,85,0.18)',
    '--hf':      "'Pacifico', cursive",
    '--bf':      "'Nunito', sans-serif",
    '--star':    '#FFD700',
    '--ribbon':  '#FF2D55',
    '--tag-bg':  '#FFE4EC',
    '--tag-txt': '#FF2D55',
    '--border':  '#FFD0DC',
  },
  kuromi: {
    '--bg':      '#0d0010',
    '--primary': '#B57EDC',
    '--accent':  '#FF4FA3',
    '--soft':    '#5A2D82',
    '--text':    '#f0e6ff',
    '--card':    '#1a0025',
    '--btn':     '#FF4FA3',
    '--btn-txt': '#FFFFFF',
    '--shadow':  'rgba(181,126,220,0.30)',
    '--hf':      "'Fredoka One', cursive",
    '--bf':      "'Nunito', sans-serif",
    '--star':    '#B57EDC',
    '--ribbon':  '#5A2D82',
    '--tag-bg':  '#2a0040',
    '--tag-txt': '#B57EDC',
    '--border':  '#3a0060',
  },
};

// ─── STATE ───────────────────────────────────────────────────────
let current = 'melody';
let wished  = false;

// ─── THEME ───────────────────────────────────────────────────────
function applyTheme(name) {
  const root = document.documentElement;
  Object.entries(THEMES[name]).forEach(([key, val]) => root.style.setProperty(key, val));
}

// ─── CONTENT ─────────────────────────────────────────────────────
function updateContent(name) {
  const d = DATA[name];

  // Text fields
  document.getElementById('brand-badge').textContent  = d.badge;
  document.getElementById('main-title').innerHTML     = d.title;
  document.getElementById('main-sub').textContent     = d.sub;
  document.getElementById('eyebrow').textContent      = d.eyebrow;
  document.getElementById('copy-title').innerHTML     = d.copyTitle;
  document.getElementById('copy-body').textContent    = d.copyBody;
  document.getElementById('price').textContent        = d.price;
  document.getElementById('price-old').textContent    = d.priceOld;
  document.getElementById('disc-badge').textContent   = d.disc;
  document.getElementById('ribbon').textContent       = d.ribbon;
  document.getElementById('stock-label').textContent  = d.stock;
  document.getElementById('stock-fill').style.width   = d.stockPct;
  document.getElementById('rating-lbl').textContent   = d.rating;
  document.getElementById('buy-btn').href             = d.amazonUrl;

  // Tags
  document.getElementById('tags').innerHTML =
    d.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Features
  document.getElementById('features').innerHTML =
    d.features.map(f => `
      <div class="feat">
        <div class="feat-icon">${f.icon}</div>
        <div class="feat-title">${f.title}</div>
        <div class="feat-desc">${f.desc}</div>
      </div>`).join('');

  // Deco emojis
  ['deco0', 'deco1', 'deco2'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = d.deco[i];
  });

  // Reviews
  document.getElementById('reviews-grid').innerHTML =
    d.reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${r.avatar}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-stars">${'<span>★</span>'.repeat(r.stars)}</div>
          </div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-text">${r.text}</div>
        ${r.verified ? '<div class="review-verified">✔ Compra verificada</div>' : ''}
      </div>`).join('');

  // Reset wishlist state
  wished = false;
  const wb = document.getElementById('wish-btn');
  wb.textContent = '🤍 Adicionar à Lista de Desejos';
  wb.classList.remove('wished');
}

// ─── MODEL SWAP ──────────────────────────────────────────────────
function switchModels(name) {
  const melody = document.getElementById('model-melody');
  const kuromi = document.getElementById('model-kuromi');

  if (name === 'melody') {
    kuromi.classList.add('hidden');
    melody.classList.remove('hidden', 'fade-in');
    void melody.offsetWidth; // reflow trigger
    melody.classList.add('fade-in');
  } else {
    melody.classList.add('hidden');
    kuromi.classList.remove('hidden', 'fade-in');
    void kuromi.offsetWidth;
    kuromi.classList.add('fade-in');
  }
}

// ─── OVERLAY FLASH ───────────────────────────────────────────────
function flashOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('flash');
  setTimeout(() => overlay.classList.remove('flash'), 400);
}

// ─── MAIN SWITCH ─────────────────────────────────────────────────
function switchTo(name) {
  if (name === current) return;
  current = name;

  flashOverlay();

  document.getElementById('btn-melody').classList.toggle('active', name === 'melody');
  document.getElementById('btn-kuromi').classList.toggle('active', name === 'kuromi');

  applyTheme(name);
  updateContent(name);
  switchModels(name);
  respawnParticles(name);
}

// ─── PARTICLES ───────────────────────────────────────────────────
function respawnParticles(theme) {
  const container = document.getElementById('particles');
  container.innerHTML = '';

  const colors = theme === 'melody'
    ? ['#FFB3C6', '#FFC0CB', '#FF2D55', '#FFD700', '#FFFFFF']
    : ['#5A2D82', '#B57EDC', '#FF4FA3', '#000000', '#f0e6ff'];

  const shapes = theme === 'melody'
    ? ['🌸', '🎀', '⭐', '💖', '🌷']
    : ['💜', '⚡', '🖤', '✦', '💀'];

  // Circular bubble particles
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 18 + 6;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}vw;
      bottom: -20px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.4 + 0.1};
    `;
    container.appendChild(p);
  }

  // Emoji floating particles
  for (let i = 0; i < 10; i++) {
    const e = document.createElement('div');
    e.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 14 + 10}px;
      left: ${Math.random() * 100}vw;
      bottom: -30px;
      pointer-events: none;
      animation: floatUp ${Math.random() * 14 + 10}s linear ${Math.random() * 12}s infinite;
      opacity: ${Math.random() * 0.35 + 0.15};
    `;
    e.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    container.appendChild(e);
  }
}

// ─── CONFETTI ────────────────────────────────────────────────────
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = DATA[current].confettiColors;
  const pieces = [];

  for (let i = 0; i < 140; i++) {
    pieces.push({
      x:     Math.random() * canvas.width,
      y:     -20,
      r:     Math.random() * 7 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx:    (Math.random() - 0.5) * 6,
      vy:    Math.random() * 4 + 3,
      rot:   Math.random() * 360,
      vr:    (Math.random() - 0.5) * 8,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    });
  }

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle    = p.color;
      ctx.globalAlpha  = Math.max(0, 1 - frame / 90);

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      }

      ctx.restore();
      p.x  += p.vx;
      p.y  += p.vy;
      p.rot += p.vr;
      p.vy  += 0.14;
    });

    frame++;
    if (frame < 95) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}

// ─── BUY CLICK HANDLER ───────────────────────────────────────────
function onBuyClick(event) {
  launchConfetti();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── WISHLIST TOGGLE ─────────────────────────────────────────────
function toggleWish() {
  wished = !wished;
  const btn = document.getElementById('wish-btn');
  if (wished) {
    btn.textContent = '❤️ Na Lista de Desejos!';
    btn.classList.add('wished');
  } else {
    btn.textContent = '🤍 Adicionar à Lista de Desejos';
    btn.classList.remove('wished');
  }
}

// ─── COUNTDOWN TIMER ─────────────────────────────────────────────
(function initCountdown() {
  const end = Date.now() + (5 * 3600 + 47 * 60 + 22) * 1000;

  function tick() {
    const diff = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
})();

// ─── INIT ────────────────────────────────────────────────────────
applyTheme('melody');
updateContent('melody');
respawnParticles('melody');
