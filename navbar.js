/**
 * Navigation liquide avec détection de section visible au scroll.
 */

(function () {
  'use strict';

  var sections    = document.querySelectorAll('section[id]');
  var navLinks    = document.querySelectorAll('.nav-link');
  var sectionTops = [];
  var prevSection = null;

  /**
   * Calcule et met en cache les positions verticales de chaque section.
   * Un décalage de 140px est appliqué pour compenser la hauteur de la navbar fixe.
   */
  function cacheSections() {
    sectionTops = [];
    sections.forEach(function (s) {
      var top = s.offsetTop - 140;
      sectionTops.push({ id: s.getAttribute('id'), top: top, bottom: top + s.offsetHeight });
    });
  }

  /**
   * Met à jour le lien actif dans la navbar selon la position de défilement.
   * Parcourt les sections de la dernière à la première pour éviter un flash
   * entre deux sections. Applique les classes Tailwind actives/inactives.
   */
  function updateActiveLink() {
    var scrollY = window.pageYOffset;
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
      link.classList.toggle('bg-white/10', active);
      link.classList.toggle('text-white', active);
      link.classList.toggle('font-semibold', active);
      link.classList.toggle('text-gray-400', !active);
    });
  }

  cacheSections();
  updateActiveLink();

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () { updateActiveLink(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { cacheSections(); updateActiveLink(); }, 200);
  }, { passive: true });

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
