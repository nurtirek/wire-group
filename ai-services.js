/* =============================================================
   Wire Group · AI services section
   - Single shared Three.js renderer, viewport-scissor per card
   - Lazy-loaded only when the section enters the viewport
   - Auto-pauses when off-screen / tab hidden
   - Falls back to pure CSS on mobile / touch / low-end / reduced-motion
   ============================================================= */
(function () {
  const section = document.getElementById('ai-services');
  if (!section) return;

  const mql = (q) => (typeof matchMedia === 'function' ? matchMedia(q).matches : false);
  const reduceMotion = mql('(prefers-reduced-motion: reduce)');
  const isCoarse     = mql('(pointer: coarse)');
  const isSmall      = window.innerWidth < 900;
  const lowEnd       = (navigator.hardwareConcurrency || 4) <= 2;

  const use3D = !reduceMotion && !isCoarse && !isSmall && !lowEnd;
  const useBg = !reduceMotion;

  /* ---------- 2D particles (background) ---------- */
  let bgCanvas, ctx, particles = [], bgVisible = false, bgRaf = null;

  function setupBg() {
    bgCanvas = section.querySelector('.ai-bg-particles');
    if (!bgCanvas) return;
    ctx = bgCanvas.getContext('2d', { alpha: true });
    sizeBg();
    seedParticles();
    window.addEventListener('resize', onBgResize);
  }
  function onBgResize() { sizeBg(); seedParticles(); }
  function sizeBg() {
    if (!bgCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = section.offsetWidth;
    const h = section.offsetHeight;
    bgCanvas.width  = w * dpr;
    bgCanvas.height = h * dpr;
    bgCanvas.style.width  = w + 'px';
    bgCanvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seedParticles() {
    const w = section.offsetWidth;
    const h = section.offsetHeight;
    const count = Math.min(36, Math.floor((w * h) / 55000));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.5 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 0.10,
        vy: (Math.random() - 0.5) * 0.10,
        a: 0.08 + Math.random() * 0.28,
        blue: Math.random() < 0.3,
      });
    }
  }
  function drawBg() {
    const w = section.offsetWidth;
    const h = section.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.blue
        ? 'rgba(74,127,212,' + (p.a + 0.05) + ')'
        : 'rgba(200,210,225,' + p.a + ')';
      ctx.fill();
    }
  }
  function bgLoop() {
    if (!bgVisible) { bgRaf = null; return; }
    drawBg();
    bgRaf = requestAnimationFrame(bgLoop);
  }

  /* ---------- Three.js (3D objects on cards) ---------- */
  let renderer = null, scenes = [], mainRaf = null, webglCanvas = null, container = null;
  let threePromise = null;

  function ensureThree() {
    if (threePromise) return threePromise;
    threePromise = new Promise((resolve, reject) => {
      if (window.THREE) return resolve(window.THREE);
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/three@0.160.0/build/three.min.js';
      s.async = true;
      s.onload = () => resolve(window.THREE);
      s.onerror = (e) => reject(e);
      document.head.appendChild(s);
    });
    return threePromise;
  }

  async function setup3D() {
    if (!use3D || renderer) return;
    try {
      const THREE = await ensureThree();
      webglCanvas = section.querySelector('.ai-3d-canvas');
      container = section.querySelector('.ai-packages');
      if (!webglCanvas || !container) return;

      renderer = new THREE.WebGLRenderer({ canvas: webglCanvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      sizeWebgl();

      const cards = section.querySelectorAll('.ai-pack');
      cards.forEach((card) => {
        const mount = card.querySelector('.ai-pack-3d');
        if (!mount) return;
        const type = mount.dataset['3d'];

        const scene = new THREE.Scene();
        const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
        cam.position.z = 4;

        scene.add(new THREE.AmbientLight(0xffffff, 0.20));
        const key = new THREE.DirectionalLight(0xffffff, 0.95);
        key.position.set(2, 3, 4);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x4a7fd4, 0.65);
        rim.position.set(-3, -1, -2);
        scene.add(rim);

        let object;
        if (type === 'sphere') {
          object = new THREE.Mesh(
            new THREE.SphereGeometry(1, 28, 20),
            new THREE.MeshStandardMaterial({ color: 0xeaecf0, metalness: 0.60, roughness: 0.30 })
          );
          // Particle halo
          const N = 90;
          const pos = new Float32Array(N * 3);
          for (let i = 0; i < N; i++) {
            const r = 1.45 + Math.random() * 1.40;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(Math.random() * 2 - 1);
            pos[i*3]     = r * Math.sin(p) * Math.cos(t);
            pos[i*3 + 1] = r * Math.sin(p) * Math.sin(t);
            pos[i*3 + 2] = r * Math.cos(p);
          }
          const pGeo = new THREE.BufferGeometry();
          pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
          const halo = new THREE.Points(pGeo, new THREE.PointsMaterial({
            color: 0x4a7fd4, size: 0.05, sizeAttenuation: true,
            transparent: true, opacity: 0.85,
          }));
          scene.add(halo);
          object.userData.halo = halo;
        } else if (type === 'cube') {
          const geo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
          object = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
            color: 0xeaecf0, metalness: 0.50, roughness: 0.40,
          }));
          object.add(new THREE.LineSegments(
            new THREE.EdgesGeometry(geo),
            new THREE.LineBasicMaterial({ color: 0x4a7fd4, transparent: true, opacity: 0.70 })
          ));
        } else if (type === 'torus') {
          object = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.38, 18, 48),
            new THREE.MeshStandardMaterial({ color: 0xeaecf0, metalness: 0.60, roughness: 0.25 })
          );
          object.rotation.x = -0.45;
        } else {
          return;
        }
        scene.add(object);

        const so = { scene, camera: cam, object, mount, speed: 0.004, target: 0.004 };
        scenes.push(so);

        card.addEventListener('mouseenter', () => { so.target = 0.022; });
        card.addEventListener('mouseleave', () => { so.target = 0.004; });
      });

      section.classList.add('is-3d-active');
      window.addEventListener('resize', sizeWebgl);
      startMainLoop();
    } catch (err) {
      console.warn('[ai-services] Three.js failed to load, CSS fallback stays:', err);
    }
  }

  function sizeWebgl() {
    if (!renderer || !container) return;
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    renderer.setSize(w, h, false);
    webglCanvas.style.width  = w + 'px';
    webglCanvas.style.height = h + 'px';
  }

  function startMainLoop() {
    if (mainRaf || !renderer) return;
    const loop = () => {
      if (!sectionVisible) { mainRaf = null; return; }
      const ch = container.offsetHeight;
      const cRect = container.getBoundingClientRect();

      renderer.setScissorTest(false);
      renderer.clear();
      renderer.setScissorTest(true);

      for (const s of scenes) {
        s.speed += (s.target - s.speed) * 0.07;
        s.object.rotation.y += s.speed;
        s.object.rotation.x += s.speed * 0.4;
        if (s.object.userData.halo) {
          s.object.userData.halo.rotation.y -= s.speed * 0.6;
          s.object.userData.halo.rotation.x += s.speed * 0.2;
        }

        const r = s.mount.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0) continue;
        const x = r.left - cRect.left;
        const y = ch - (r.top - cRect.top + r.height);
        s.camera.aspect = r.width / r.height;
        s.camera.updateProjectionMatrix();
        renderer.setViewport(x, y, r.width, r.height);
        renderer.setScissor(x, y, r.width, r.height);
        renderer.render(s.scene, s.camera);
      }
      mainRaf = requestAnimationFrame(loop);
    };
    mainRaf = requestAnimationFrame(loop);
  }

  /* ---------- Visibility orchestration ---------- */
  let sectionVisible = false;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      const e = entries[0];
      sectionVisible = e.isIntersecting;
      bgVisible = e.isIntersecting && useBg;
      if (e.isIntersecting) {
        if (useBg && !bgRaf) bgLoop();
        if (use3D && !renderer) setup3D();
        else if (renderer && !mainRaf) startMainLoop();
      }
    }, { rootMargin: '120px' });
    io.observe(section);
  } else {
    sectionVisible = true;
    bgVisible = useBg;
    if (use3D) setup3D();
    if (useBg) bgLoop();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      sectionVisible = false;
      bgVisible = false;
    } else {
      // Re-check intersection on resume
      const r = section.getBoundingClientRect();
      const onScreen = r.bottom > 0 && r.top < window.innerHeight;
      if (onScreen) {
        sectionVisible = true;
        bgVisible = useBg;
        if (renderer) startMainLoop();
        if (useBg && !bgRaf) bgLoop();
      }
    }
  });

  /* ---------- Init ---------- */
  if (useBg) setupBg();
})();

/* =============================================================
   Wire Group · AI service detail modals
   ============================================================= */
(function () {
  const triggers = document.querySelectorAll('[data-modal]');
  if (!triggers.length) return;

  let lastTrigger = null;

  const open = (id, trigger) => {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastTrigger = trigger || null;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('ai-modal-lock');
    const closeBtn = modal.querySelector('.ai-modal-close');
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  };

  const close = (modal) => {
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    const anyOpen = document.querySelector('.ai-modal.is-open');
    if (!anyOpen) document.body.classList.remove('ai-modal-lock');
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus({ preventScroll: true });
    }
  };

  triggers.forEach((el) => {
    const id = el.getAttribute('data-modal');
    el.addEventListener('click', (e) => {
      // Don't hijack clicks on inner links/buttons
      if (e.target.closest('a, button')) return;
      open(id, el);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(id, el);
      }
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', () => {
      const modal = el.closest('.ai-modal');
      close(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const openModal = document.querySelector('.ai-modal.is-open');
    if (openModal) close(openModal);
  });
})();
