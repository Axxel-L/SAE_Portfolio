/**
 * Grille 24×14 de carrés animés — palette sombre monochrome.
 * Magnet (attraction souris), épulsion au clic,
 * ripple blanc discret, drift autonome. Fond fixe.
 *
 * Optimisé : opacité relevée, lerp plus rapide, drift amplifié.
 */

(function () {
  'use strict';

  var gridEl = document.getElementById('squareGrid');
  if (!gridEl) return;

  // =========================================================================
  // 1. GÉNÉRATION DE LA GRILLE
  // =========================================================================

  var COLS = 24;
  var ROWS = 14;
  var cells = [];

  var frag = document.createDocumentFragment();
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      // Palette sombre monochrome : gris ardoise quasi-noir
      // Luminosité 9-23 % (plus visible), saturation 6-14 % (léger caractère)
      var hue = 222;
      var sat = 6 + (c / (COLS - 1)) * 8;
      var lit = 9 + (r / (ROWS - 1)) * 14;

      var cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.style.backgroundColor = 'hsl(' + hue + ', ' + sat + '%, ' + lit + '%)';
      cell.style.border = '1px solid rgba(255,255,255,0.05)';
      frag.appendChild(cell);
      cells.push({ el: cell, cx: c / (COLS - 1), cy: r / (ROWS - 1), row: r });
    }
  }
  gridEl.appendChild(frag);

  // =========================================================================
  // 2. ÉTAT DE L'ANIMATION
  // =========================================================================

  var running       = true;
  var mx = 0.5, my  = 0.5;
  var tMx = 0.5, tMy = 0.5;
  var clickX = 0.5, clickY = 0.5;
  var explosionTime = -99;

  // =========================================================================
  // 3. ÉCOUTEURS
  // =========================================================================

  document.addEventListener('mousemove', function (e) {
    tMx = e.clientX / window.innerWidth;
    tMy = e.clientY / window.innerHeight;
  }, { passive: true });

  document.addEventListener('click', function (e) {
    clickX = e.clientX / window.innerWidth;
    clickY = e.clientY / window.innerHeight;
    explosionTime = performance.now() * 0.001;

    var ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top  = e.clientY + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', function () { ripple.remove(); });
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { running = false; }
    else { running = true; requestAnimationFrame(frame); }
  }, { passive: true });

  // =========================================================================
  // 4. BOUCLE D'ANIMATION
  // =========================================================================

  function frame(ts) {
    if (!running) return requestAnimationFrame(frame);
    var sec = ts * 0.001;

    // Magnet : lerp 2× plus réactif (0.05 → 0.10)
    mx += (tMx - mx) * 0.10;
    my += (tMy - my) * 0.10;

    var expAge = sec - explosionTime;
    var hasExp = expAge < 1.5;

    for (var i = 0; i < cells.length; i++) {
      var c   = cells[i];
      var dx  = mx - c.cx;
      var dy  = my - c.cy;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var inf  = Math.max(0, 1 - dist * 2.0);

      // Pull : force augmentée (22 → 34)
      var pullX = dx * inf * 34;
      var pullY = dy * inf * 34;

      var pushX = 0, pushY = 0, expScale = 0, expOp = 0;
      if (hasExp) {
        var dxc   = c.cx - clickX;
        var dyc   = c.cy - clickY;
        var dc    = Math.sqrt(dxc * dxc + dyc * dyc);
        var delay = dc * 0.08;
        var ea    = Math.max(0, expAge - delay);
        var force = Math.exp(-ea * 5.5) * Math.exp(-dc * 1.6);
        // Explosion : force amplifiée (38 → 52, scale ×0.18 → ×0.26, op ×0.25 → ×0.35)
        pushX    = dxc * force * 52;
        pushY    = dyc * force * 52;
        expScale = force * 0.26;
        expOp    = force * 0.35;
      }

      // Scale base plus grande (0.78 → 0.84) pour des carrés plus présents
      var s   = 0.84 + inf * 0.45 + expScale;
      var rot = (dx * dy) * inf * 2.5;
      // Opacité base relevée (0.25 → 0.42) — bien visible sur fond noir
      var op  = 0.42 + inf * 0.55 + expOp;

      // Drift : plus rapide (0.35→0.72, 0.30→0.60) et plus ample (3.5→6.5, 2.5→5)
      var phase = c.cx * 4 + c.cy * 3;
      var dftX  = Math.sin(sec * 0.72 + phase) * 6.5;
      var dftY  = Math.cos(sec * 0.60 + phase) * 5;

      c.el.style.transform =
        'translate3d(' + (pullX + dftX + pushX).toFixed(1) + 'px, ' +
                         (pullY + dftY + pushY).toFixed(1) + 'px, 0) ' +
        'scale(' + s.toFixed(2) + ') rotate(' + rot.toFixed(2) + 'deg)';
      c.el.style.opacity = op.toFixed(2);
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);

})();
