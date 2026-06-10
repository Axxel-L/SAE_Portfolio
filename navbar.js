/**
 * Détecte la section visible et active le lien correspondant dans la navbar.
 * Dark theme — glass pill avec 5 sections.
 */

(function () {
  'use strict';

  var sections    = document.querySelectorAll('section[id]');
  var navLinks    = document.querySelectorAll('.nav-link');
  var sectionTops = [];
  var prevSection = null;

  // =========================================================================
  // 1. CACHE DES POSITIONS
  // =========================================================================

  function cacheSections() {
    sectionTops = [];
    sections.forEach(function (s) {
      var top = s.offsetTop - 140;
      sectionTops.push({ id: s.getAttribute('id'), top: top, bottom: top + s.offsetHeight });
    });
  }

  // =========================================================================
  // 2. MISE À JOUR DU LIEN ACTIF
  // =========================================================================

  function updateActiveLink() {
    var scrollY = window.pageYOffset;
    // Trouve la dernière section dont le haut est au-dessus du scroll
    // (évite le flash "Accueil" entre deux sections)
    var current = 'accueil';
    for (var i = sectionTops.length - 1; i >= 0; i--) {
      if (scrollY >= sectionTops[i].top) {
        current = sectionTops[i].id;
        break;
      }
    }
    if (current === prevSection) return;
    prevSection = current;

    navLinks.forEach(function (link) {
      var id = link.getAttribute('data-section');
      var active = id === current;
      // Dark glass : fond blanc/10, texte blanc, semibold
      link.classList.toggle('bg-white/10', active);
      link.classList.toggle('text-white', active);
      link.classList.toggle('font-semibold', active);
      link.classList.toggle('text-gray-400', !active);
    });
  }

  cacheSections();
  updateActiveLink();

  // =========================================================================
  // 3. SCROLL (rAF THROTTLE)
  // =========================================================================

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () { updateActiveLink(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  // =========================================================================
  // 4. RESIZE (DEBOUNCE)
  // =========================================================================

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { cacheSections(); updateActiveLink(); }, 200);
  }, { passive: true });

  // =========================================================================
  // 5. SMOOTH SCROLL AU CLIC
  // =========================================================================

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('data-section');
      var target = document.getElementById(targetId);
      if (target) {
        var top = target.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: top, behavior: 'smooth' });
        prevSection = targetId;
      }
    });
  });

})();
