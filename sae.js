/**
 * SAE Cards — Données et affichage des SAÉ.
 * =========================================
 * Affiche les cartes SAÉ avec navigation par onglets pour
 * condenser le contenu (Ressources | Implication | Apprentissages | À venir).
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DONNÉES DES SAÉ
  // =========================================================================

  var saeData = [
    {
      id: 3,
      titre: 'S.A.É. 3 — Application Web de Gestion Électorale',
      icone: 'fa-solid fa-check-to-slot',
      couleur: 'blue',

      ressources: {
        enseignements: [
          { nom: 'TailwindCSS', desc: 'Documentation officielle — design responsive et utilitaires' },
          { nom: 'PHP', desc: 'Documentation PHP — logique serveur et formulaires' },
          { nom: 'JavaScript', desc: 'Interactions dynamiques et validation côté client' }
        ],
        externes: [
          { nom: 'OpenClassroom', desc: 'Tutoriels et cours complémentaires PHP / JavaScript' },
          { nom: 'StackOverflow', desc: 'Résolution de problèmes techniques et bonnes pratiques' }
        ],
        bilan: 'Ces ressources m\'ont permis de mieux comprendre TailwindCSS pour le design et de renforcer mes bases en PHP pour la logique métier.'
      },

      implication: {
        modalite: 'Travail en groupe avec Tristan et Malek',
        repartition: 'Répartition équilibrée des tâches — je me suis principalement chargé du front-end',
        interaction: 'Bonne communication et entraide au sein du groupe',
        autonomie: 'Autonome sur la partie front-end, capable d\'aller chercher les ressources nécessaires'
      },

      apprentissages: {
        evolution: 'Progression marquée en TailwindCSS et JavaScript. J\'ai conçu une interface moderne inspirée d\'iOS 26 avec un style liquid-glass.',
        pointsForts: 'Front-end : design moderne, direction artistique unique. Backend : compétent en PHP pour les opérations CRUD.',
        pointsFaibles: 'La partie backend pourrait être mieux structurée (MVC). Le code gagnerait à être mieux documenté.',
        aRefaire: 'Si c\'était à refaire, je mettrais l\'accent sur les tests et la documentation pour faciliter la reprise par d\'autres développeurs.'
      },

      aVenir: {
        objectifs: 'Approfondir l\'architecture back-end (MVC) et intégrer des tests automatisés.',
        moyens: 'Cours avancés POO PHP, documentation PHP-FIG, mise en place de PHPUnit.'
      }
    }
  ];

  // =========================================================================
  // 2. PALETTES
  // =========================================================================

  var palettes = {
    blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-100',    ring: 'ring-blue-200/50',    dot: 'bg-blue-500',    tab: 'text-blue-600 border-blue-500', tabInactive: 'text-gray-400 border-transparent hover:text-gray-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', ring: 'ring-emerald-200/50', dot: 'bg-emerald-500', tab: 'text-emerald-600 border-emerald-500', tabInactive: 'text-gray-400 border-transparent hover:text-gray-600' },
    amber:   { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-100',   ring: 'ring-amber-200/50',   dot: 'bg-amber-500',   tab: 'text-amber-600 border-amber-500', tabInactive: 'text-gray-400 border-transparent hover:text-gray-600' },
    rose:    { bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-100',    ring: 'ring-rose-200/50',    dot: 'bg-rose-500',    tab: 'text-rose-600 border-rose-500', tabInactive: 'text-gray-400 border-transparent hover:text-gray-600' }
  };

  // =========================================================================
  // 3. CONSTRUCTION DES CARTES (TABBED)
  // =========================================================================

  var container = document.getElementById('sae-container');
  if (!container) return;

  function badge(p, label) {
    return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ' +
           p.bg + ' ' + p.text + ' ' + p.border + ' border"><span class="w-1.5 h-1.5 rounded-full ' + p.dot + '"></span>' + label + '</span>';
  }

  function ressourceItem(p, r) {
    return '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-[10px] ' + p.text + ' mt-0.5 shrink-0"></i>' +
           '<div><span class="text-sm font-semibold text-gray-800">' + r.nom + '</span>' +
           '<p class="text-xs text-gray-500 leading-relaxed">' + r.desc + '</p></div></div>';
  }

  function buildCard(sae, index) {
    var p = palettes[sae.couleur];
    var uid = 'sae-tab-' + sae.id;

    return '' +
      '<article class="card-lift reveal reveal-delay-' + (index + 1) + ' ' +
      'bg-white rounded-3xl border border-gray-100 ' +
      'shadow-sm shadow-gray-200/40 ' +
      'ring-1 ring-transparent hover:' + p.ring + '">' +

      // --- En-tête ---
      '<div class="p-5 sm:p-6 pb-3">' +
      '<div class="flex items-start gap-4 mb-4">' +
      '<div class="w-11 h-11 rounded-2xl ' + p.bg + ' ' + p.border + ' border ' +
      'flex items-center justify-center text-lg ' + p.text + ' shrink-0">' +
      '<i class="' + sae.icone + '"></i></div>' +
      '<div><h3 class="text-lg font-bold text-gray-900 leading-snug">' + sae.titre + '</h3>' +
      '<p class="text-xs text-gray-400 mt-0.5">BUT Informatique — Parcours A</p></div>' +
      '</div>' +

      // --- Barre d'onglets ---
      '<div class="flex gap-1 border-b border-gray-100" role="tablist">' +
      '<button class="sae-tab ' + uid + ' active pb-2.5 px-3 text-xs font-semibold border-b-2 ' + p.tab + ' transition-colors duration-200" data-panel="ressources-' + uid + '">Ressources</button>' +
      '<button class="sae-tab ' + uid + ' pb-2.5 px-3 text-xs font-semibold border-b-2 ' + p.tabInactive + ' transition-colors duration-200" data-panel="implication-' + uid + '">Implication</button>' +
      '<button class="sae-tab ' + uid + ' pb-2.5 px-3 text-xs font-semibold border-b-2 ' + p.tabInactive + ' transition-colors duration-200" data-panel="apprentissages-' + uid + '">Apprentissages</button>' +
      '<button class="sae-tab ' + uid + ' pb-2.5 px-3 text-xs font-semibold border-b-2 ' + p.tabInactive + ' transition-colors duration-200" data-panel="avenir-' + uid + '">À venir</button>' +
      '</div>' +
      '</div>' +

      // --- Panneaux ---
      '<div class="px-5 sm:px-6 pb-5 sm:pb-6">' +

      // Ressources
      '<div class="sae-panel ' + uid + '" id="ressources-' + uid + '">' +
      '<div class="space-y-2.5 mb-3">' +
      '<p class="text-xs font-semibold text-gray-500 mb-1">Issues des enseignements</p>' +
      sae.ressources.enseignements.map(function (r) { return ressourceItem(p, r); }).join('') +
      '</div>' +
      '<div class="space-y-2.5 mb-3">' +
      '<p class="text-xs font-semibold text-gray-500 mb-1">Ressources externes</p>' +
      sae.ressources.externes.map(function (r) { return ressourceItem(p, r); }).join('') +
      '</div>' +
      '<div class="flex flex-wrap gap-1 mt-2 mb-2">' +
      badge(p, 'TailwindCSS') + badge(p, 'PHP') + badge(p, 'JavaScript') + badge(p, 'OpenClassroom') + badge(p, 'StackOverflow') +
      '</div>' +
      '<p class="text-sm text-gray-600 italic leading-relaxed">' + sae.ressources.bilan + '</p>' +
      '</div>' +

      // Implication
      '<div class="sae-panel ' + uid + ' hidden" id="implication-' + uid + '">' +
      '<ul class="space-y-2 text-sm text-gray-700">' +
      '<li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[6px] ' + p.text + ' mt-2 shrink-0"></i>' + sae.implication.modalite + '</li>' +
      '<li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[6px] ' + p.text + ' mt-2 shrink-0"></i>' + sae.implication.repartition + '</li>' +
      '<li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[6px] ' + p.text + ' mt-2 shrink-0"></i>' + sae.implication.interaction + '</li>' +
      '<li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[6px] ' + p.text + ' mt-2 shrink-0"></i>' + sae.implication.autonomie + '</li>' +
      '</ul>' +
      '</div>' +

      // Apprentissages
      '<div class="sae-panel ' + uid + ' hidden" id="apprentissages-' + uid + '">' +
      '<p class="text-sm text-gray-700 leading-relaxed mb-3">' + sae.apprentissages.evolution + '</p>' +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">' +
      '<div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3">' +
      '<p class="text-xs font-semibold text-emerald-700 mb-1"><i class="fa-solid fa-check-circle mr-1"></i>Points forts</p>' +
      '<p class="text-sm text-emerald-800 leading-relaxed">' + sae.apprentissages.pointsForts + '</p></div>' +
      '<div class="bg-amber-50 border border-amber-100 rounded-xl p-3">' +
      '<p class="text-xs font-semibold text-amber-700 mb-1"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Axes d\'amélioration</p>' +
      '<p class="text-sm text-amber-800 leading-relaxed">' + sae.apprentissages.pointsFaibles + '</p></div>' +
      '</div>' +
      '<div class="bg-gray-50 border border-gray-100 rounded-xl p-3">' +
      '<p class="text-xs font-semibold text-gray-500 mb-1"><i class="fa-solid fa-rotate-left mr-1"></i>Si c\'était à refaire</p>' +
      '<p class="text-sm text-gray-700 leading-relaxed italic">« ' + sae.apprentissages.aRefaire + ' »</p></div>' +
      '</div>' +

      // À venir
      '<div class="sae-panel ' + uid + ' hidden" id="avenir-' + uid + '">' +
      '<p class="text-sm text-gray-700 leading-relaxed mb-2"><span class="font-semibold">Objectifs :</span> ' + sae.aVenir.objectifs + '</p>' +
      '<p class="text-sm text-gray-700 leading-relaxed"><span class="font-semibold">Moyens :</span> ' + sae.aVenir.moyens + '</p>' +
      '</div>' +

      '</div>' +
      '</article>';
  }

  container.innerHTML = saeData.map(function (sae, i) { return buildCard(sae, i); }).join('');

  // =========================================================================
  // 4. GESTION DES ONGLETS
  // =========================================================================

  container.addEventListener('click', function (e) {
    var tab = e.target.closest('.sae-tab');
    if (!tab) return;

    var card = tab.closest('article');
    if (!card) return;

    // Déjà actif ?
    if (tab.classList.contains('active')) return;

    // Désactiver tous les onglets de cette carte
    var tabs = card.querySelectorAll('.sae-tab');
    tabs.forEach(function (t) {
      t.classList.remove('active', 'text-blue-600', 'border-blue-500', 'text-emerald-600', 'border-emerald-500', 'text-amber-600', 'border-amber-500', 'text-rose-600', 'border-rose-500');
      t.classList.add('text-gray-400', 'border-transparent');
    });

    // Activer l'onglet cliqué
    tab.classList.add('active');
    tab.classList.remove('text-gray-400', 'border-transparent');
    tab.classList.add('text-blue-600', 'border-blue-500');

    // Transition fluide entre panneaux
    var targetId = tab.getAttribute('data-panel');
    var panels = card.querySelectorAll('.sae-panel');
    var current = card.querySelector('.sae-panel:not(.hidden):not(.hiding)');

    function showPanel(id) {
      panels.forEach(function (panel) {
        if (panel.id === id) {
          panel.classList.remove('hidden', 'hiding');
          panel.style.opacity = '0';
          panel.offsetHeight;           // force reflow : bloque le style à opacity:0
          panel.style.opacity = '1';    // déclenche la transition vers 1
        }
      });
    }

    if (current) {
      // Fade out le panneau courant
      current.classList.add('hiding');
      current.style.opacity = '0';
      current.addEventListener('transitionend', function handler() {
        current.removeEventListener('transitionend', handler);
        current.classList.add('hidden');
        current.classList.remove('hiding');
        showPanel(targetId);
      });
    } else {
      showPanel(targetId);
    }
  });

  // =========================================================================
  // 5. INTERSECTION OBSERVER — FADE-IN AU SCROLL
  // =========================================================================

  var reveals = document.querySelectorAll('.reveal:not(.visible)');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(function (el) { observer.observe(el); });

})();
