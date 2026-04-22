/**
 * Rete di particelle + linee (canvas #particleCanvas).
 * Deve stare DENTRO il contenitore della pagina (es. .nx-grid-bg), non dietro body,
 * altrimenti lo sfondo opaco della pagina lo copre.
 */
(function () {
  if (typeof window === 'undefined') return;

  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var particles = [];
  var mouse = { x: null, y: null, radius: 150 };
  var raf = 0;

  function canvasSize() {
    var p = canvas.parentElement;
    if (!p) return { w: 0, h: 0 };
    var w = Math.max(1, Math.floor(p.clientWidth));
    var h = Math.max(1, Math.floor(p.clientHeight));
    return { w: w, h: h };
  }

  function Particle(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
  }

  Particle.prototype.draw = function () {
    ctx.fillStyle = 'rgba(148, 163, 184, 0.85)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  };

  Particle.prototype.update = function (w, h) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > w || this.x < 0) this.speedX *= -1;
    if (this.y > h || this.y < 0) this.speedY *= -1;

    if (mouse.x == null || mouse.y == null) return;

    var dx = mouse.x - this.x;
    var dy = mouse.y - this.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 1 && distance < mouse.radius) {
      var fx = dx / distance;
      var fy = dy / distance;
      var force = (mouse.radius - distance) / mouse.radius;
      this.x -= fx * force * 5;
      this.y -= fy * force * 5;
    }
  };

  function init() {
    var sz = canvasSize();
    var w = sz.w;
    var h = sz.h;
    if (w < 8 || h < 8) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    particles = [];
    var n = Math.floor((w * h) / 9000);
    if (n > 130) n = 130;
    if (n < 45) n = 45;
    for (var i = 0; i < n; i++) {
      particles.push(new Particle(w, h));
    }
  }

  function connect(w, h) {
    var a;
    var b;
    var dx;
    var dy;
    var distance;
    var opacity;
    for (a = 0; a < particles.length; a++) {
      for (b = a + 1; b < particles.length; b++) {
        dx = particles[a].x - particles[b].x;
        dy = particles[a].y - particles[b].y;
        distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          opacity = (1 - distance / 150) * 0.22;
          ctx.strokeStyle = 'rgba(59, 130, 246, ' + opacity + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function frame() {
    var sz = canvasSize();
    var w = sz.w;
    var h = sz.h;
    ctx.clearRect(0, 0, w, h);

    var i;
    for (i = 0; i < particles.length; i++) {
      particles[i].update(w, h);
      particles[i].draw();
    }
    connect(w, h);
    raf = requestAnimationFrame(frame);
  }

  function syncCanvasCssSize() {
    var sz = canvasSize();
    canvas.style.width = sz.w + 'px';
    canvas.style.height = sz.h + 'px';
  }

  function onResize() {
    cancelAnimationFrame(raf);
    syncCanvasCssSize();
    init();
    if (!reduced && particles.length) {
      raf = requestAnimationFrame(frame);
    }
  }

  function setMouseFromEvent(e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }

  window.addEventListener(
    'mousemove',
    function (e) {
      setMouseFromEvent(e);
    },
    { passive: true },
  );

  var parent = canvas.parentElement;
  if (parent) {
    var ro = new ResizeObserver(onResize);
    ro.observe(parent);
  }

  window.addEventListener('resize', onResize, { passive: true });

  syncCanvasCssSize();
  init();

  if (reduced) {
    return;
  }

  if (particles.length) {
    raf = requestAnimationFrame(frame);
  }
})();
