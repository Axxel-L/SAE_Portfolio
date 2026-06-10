/**
 * - Cartes liquid-glass
 * - Au clic → ouverture d'un modal avec 5 onglets
 * - Onglets : Ressources | Implication | Apprentissages | À venir | Traces
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DONNÉES DES SAÉ
  // =========================================================================

  var saeData = [
    // SAÉ S3.A.01
    {
      id: 'S3.A.01',
      titre: 'SAÉ S3.A.01 — Application Web de Gestion Électorale',
      icone: 'fa-solid fa-check-to-slot',
      resume: 'Conception et développement full-stack d\'une application web de gestion électorale avec interface moderne.',
      competences: ['Développement Web', 'PHP', 'Base de données'],

      ressources: {
        enseignements: [
          { nom: 'TailwindCSS', desc: 'Documentation officielle · Design responsive et utilitaires' },
          { nom: 'PHP', desc: 'Documentation PHP · Logique serveur et formulaires' },
          { nom: 'JavaScript', desc: 'Snippets de code JS · Interactions dynamiques et validation côté client' }
        ],
        externes: [
          { nom: 'OpenClassroom', desc: 'Tutoriels et cours complémentaires PHP / JavaScript' },
          { nom: 'StackOverflow', desc: 'Résolution de problèmes techniques et bonnes pratiques' }
        ],
        bilan: 'Ces ressources m\'ont permis de mieux comprendre TailwindCSS pour le design et de renforcer mes bases en PHP pour la logique métier.'
      },

      implication: {
        modalite: 'Travail en groupe avec Tristan et Malek',
        repartition: 'Répartition équilibrée des tâches · Je me suis principalement chargé du front-end',
        interaction: 'Bonne communication et entraide au sein du groupe',
        autonomie: 'Autonome sur la partie front-end, capable d\'aller chercher les ressources nécessaires'
      },

      apprentissages: {
        evolution: 'Progression marquée en TailwindCSS et JavaScript. J\'ai conçu une interface moderne inspirée d\'iOS 26 avec un style liquid-glass.',
        pointsForts: 'Front-end : design moderne, direction artistique unique. Back-end : compétent en PHP pour les opérations CRUD.',
        pointsFaibles: 'La partie back-end pourrait être mieux structurée (MVC). Le code gagnerait à être mieux documenté.',
        aRefaire: 'Si c\'était à refaire, je mettrais l\'accent sur les tests et la documentation pour faciliter la reprise par d\'autres développeurs.'
      },

      aVenir: {
        objectifs: 'Approfondir l\'architecture back-end (MVC) et intégrer des tests automatisés.',
        moyens: 'Cours avancés POO PHP, documentation PHP-FIG, mise en place de PHPUnit.'
      },

      traces: [
        { type: 'github', url: 'https://github.com/Axxel-L/SAE-S3_BUT2', label: 'Code source du projet' },
        { type: 'pdf', url: 'https://github.com/Axxel-L/SAE-S3_BUT2/blob/main/README.md', label: 'Rapport de SAÉ' }
      ]
    },

    // SAÉ S4.A.01 
    {
      id: 'S4.A.01',
      titre: 'SAÉ S4.A.01 — Optimisation et Sécurisation d\'une Application Web',
      icone: 'fa-solid fa-shield-halved',
      resume: 'Reprise et sécurisation d\'une application web existante : correction des failles CSRF, protection des identifiants, validation serveur, optimisation BDD.',
      competences: ['Sécurité Web', 'PHP', 'Base de données', 'Travail d\'équipe'],

      ressources: {
        enseignements: [
          { nom: 'VsCode', desc: 'IDE · Utilisé pour l\'analyse et la correction du code source' },
          { nom: 'Gitlab (IUT)', desc: 'Gitlab · Plateforme de versionnement et de collaboration de l\'université' },
          { nom: 'OWASP', desc: ' Plateforme de cybersécurité · Référentiel des failles de sécurité web (CSRF, XSS, injections)' },
          { nom: 'DeepSeek', desc: ' IA générative · Permet d\'expliquer les problèmes de sécurité et donner des solutions' }
        ],
        externes: [
          { nom: 'Documentation PHP', desc: 'Bonnes pratiques de sécurité : validation serveur, requêtes préparées' },
          { nom: 'Playwright', desc: 'Tentative de mise en place de tests fonctionnels (non aboutie avec PHP)' }
        ],
        bilan: 'Cette SAÉ m\'a permis de découvrir concrètement les failles de sécurité courantes dans une application web et d\'apprendre à les corriger. Le travail sur une codebase existante (celle d\'un autre groupe) a été particulièrement formateur.'
      },

      implication: {
        modalite: 'Travail en équipe et reprise du code d\'un autre groupe de la classe',
        repartition: 'Bonne répartition des tâches entre mon coéquipier et moi, chacun sur des corrections complémentaires, aucun conflit Git',
        interaction: 'Bonne coordination tout au long du projet, communication fluide sur les choix techniques',
        autonomie: 'Capable d\'identifier les failles de sécurité dans le code existant et de proposer des corrections adaptées'
      },

      apprentissages: {
        evolution: 'J\'ai analysé le code d\'un autre groupe et identifié plusieurs problèmes critiques : absence de protection CSRF sur les formulaires, identifiants de base de données en clair dans un fichier PHP, absence de vérifications côté serveur, actions GET non sécurisées (suppression/modification sans confirmation), pas de fichier .gitignore, aucun test unitaire ni fonctionnel, et une base de données non optimisée (index manquants, SELECT * systématiques). J\'ai corrigé l\'ensemble de ces problèmes avec mon coéquipier.',
        pointsForts: 'Mise en place de tokens CSRF, protection des identifiants (fichier .env), validation serveur sur tous les formulaires, sécurisation des routes GET, création d\'un .gitignore complet, ajout d\'index sur les colonnes clés, remplacement des SELECT * par des sélections ciblées.',
        pointsFaibles: 'Les tests fonctionnels avec Playwright n\'ont pas pu être finalisés : l\'outil se connecte bien à VsCode et fonctionne avec du JavaScript, mais la configuration avec du PHP n\'a pas abouti.',
        aRefaire: 'Si c\'était à refaire, j\'insisterais sur la mise en place de Playwright avec PHP dès le début du projet, car les tests fonctionnels automatisés sont essentiels pour garantir la non-régression après des corrections de sécurité.'
      },

      aVenir: {
        objectifs: 'Faire fonctionner Playwright avec du PHP pour automatiser les tests fonctionnels sur mes futures applications web.',
        moyens: 'Documentation officielle Playwright, exploration des adaptateurs PHP pour Playwright, mise en pratique sur des projets personnels et les prochaines SAÉ.'
      },

      traces: [
        { type: 'github', url: 'https://gitlab.univ-lorraine.fr/e66197u/sae4-optimisation-application', label: 'Code source sur le Gitlab de l\'IUT' },
        { type: 'pdf', url: 'https://gitlab.univ-lorraine.fr/e66197u/sae4-optimisation-application/-/blob/develop/Analyse/Audit.pdf?ref_type=heads', label: 'Rapport de SAÉ' }
      ]
    }
  ];

  // =========================================================================
  // 2. ICÔNES DE TRACE PAR TYPE
  // =========================================================================

  var traceIcons = {
    github: 'fa-brands fa-github',
    pdf: 'fa-solid fa-file-pdf',
    link: 'fa-solid fa-link',
    image: 'fa-solid fa-image',
    video: 'fa-solid fa-video'
  };

  // =========================================================================
  // 3. RENDU DES CARTES SAÉ
  // =========================================================================

  var container = document.getElementById('sae-container');
  if (!container) return;

  function buildCard(sae) {
    var tagsHtml = sae.competences.map(function (c) {
      return '<span class="bg-white/[0.04] border border-white/[0.06] text-gray-400 text-xs px-2 py-0.5 rounded-full">' + c + '</span>';
    }).join('');

    return '' +
      '<article class="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group" data-sae-id="' + sae.id + '">' +
        '<div class="flex items-start gap-3 mb-3">' +
          '<div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg text-white/70 group-hover:text-white shrink-0 transition-colors">' +
            '<i class="' + sae.icone + '"></i>' +
          '</div>' +
          '<div class="min-w-0">' +
            '<h3 class="text-base font-semibold text-white truncate">' + sae.titre + '</h3>' +
            '<p class="text-xs text-gray-500 mt-0.5">SAÉ ' + sae.id + '</p>' +
          '</div>' +
        '</div>' +
        '<p class="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">' + sae.resume + '</p>' +
        '<div class="flex flex-wrap gap-1.5 mb-3">' + tagsHtml + '</div>' +
        '<div class="flex items-center gap-1 text-xs text-gray-600 group-hover:text-gray-400 transition-colors">' +
          '<span>Voir les détails</span>' +
          '<i class="fa-solid fa-arrow-right text-[10px]"></i>' +
        '</div>' +
      '</article>';
  }

  container.innerHTML = saeData.map(buildCard).join('');

  // =========================================================================
  // 4. MODAL
  // =========================================================================

  var modal        = document.getElementById('sae-modal');
  var modalContent = document.getElementById('sae-modal-content');
  var modalTabs    = document.getElementById('sae-modal-tabs');
  var modalBody    = document.getElementById('sae-modal-body');
  var modalClose   = document.getElementById('sae-modal-close');
  var modalIcon    = document.getElementById('sae-modal-icon');
  var modalTitle   = document.getElementById('sae-modal-title');

  var TAB_CONFIG = [
    { id: 'ressources',     label: 'Ressources',     icon: 'fa-solid fa-book' },
    { id: 'implication',    label: 'Implication',    icon: 'fa-solid fa-users' },
    { id: 'apprentissages', label: 'Apprentissages', icon: 'fa-solid fa-graduation-cap' },
    { id: 'avenir',         label: 'À venir',        icon: 'fa-solid fa-compass' },
    { id: 'traces',         label: 'Traces',         icon: 'fa-solid fa-paperclip' }
  ];

  // ─── Garde anti-conflit ouverture/fermeture ──────────────────────────

  var _closeHandler = null;

  // ─── Ouverture ────────────────────────────────────────────────────────

  function openModal(sae) {
    // Annuler toute fermeture en cours
    if (_closeHandler) {
      modalContent.removeEventListener('transitionend', _closeHandler);
      _closeHandler = null;
    }
    // Marquer la SAÉ courante
    modal.setAttribute('data-current-sae-id', sae.id);

    // En-tête
    modalIcon.innerHTML = '<i class="' + sae.icone + '"></i>';
    modalTitle.textContent = sae.titre;

    // Onglets
    var tabsHtml = TAB_CONFIG.map(function (tab, i) {
      var isActive = i === 0;
      return '<button class="sae-modal-tab flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors duration-150 shrink-0 ' +
        (isActive
          ? 'text-white border-white/40 bg-white/[0.04]'
          : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-white/10') +
        '" data-tab="' + tab.id + '">' +
        '<i class="' + tab.icon + ' text-xs"></i>' +
        tab.label +
        '</button>';
    }).join('');
    modalTabs.innerHTML = tabsHtml;

    // Contenu du premier onglet
    renderTabContent('ressources', sae);

    // Afficher
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Animer l'entrée
    requestAnimationFrame(function () {
      modalContent.classList.remove('opacity-0', 'scale-95');
      modalContent.classList.add('opacity-100', 'scale-100');
    });

    modalClose.focus();
  }

  // ─── Fermeture ────────────────────────────────────────────────────────

  function closeModal() {
    modalContent.classList.add('opacity-0', 'scale-95');
    modalContent.classList.remove('opacity-100', 'scale-100');

    function onTransitionEnd() {
      modalContent.removeEventListener('transitionend', onTransitionEnd);
      modal.classList.add('hidden');
      modal.style.display = 'none';
      document.body.style.overflow = '';
      _closeHandler = null;
    }
    _closeHandler = onTransitionEnd;
    modalContent.addEventListener('transitionend', onTransitionEnd);
  }

  // ─── Rendu d'un onglet ────────────────────────────────────────────────

  function renderTabContent(tabId, sae) {
    var html = '';

    switch (tabId) {

      // ── Ressources ────────────────────────────────────────────────
      case 'ressources':
        html += '<div class="space-y-4">';

        // Enseignements
        html += '<div>';
        html += '<h4 class="text-sm font-semibold text-gray-300 mb-2"><i class="fa-solid fa-chalkboard-user mr-2"></i>Ressources pédagogiques</h4>';
        html += '<ul class="space-y-2">';
        sae.ressources.enseignements.forEach(function (r) {
          html += '<li class="flex items-start gap-2.5 bg-white/[0.03] rounded-lg p-3">';
          html += '<span class="text-gray-600 mt-2 shrink-0">·</span>';
          html += '<div><p class="text-sm text-white font-medium">' + r.nom + '</p>';
          html += '<p class="text-xs text-gray-500 leading-relaxed mt-0.5">' + r.desc + '</p></div>';
          html += '</li>';
        });
        html += '</ul></div>';

        // Externes
        if (sae.ressources.externes.length > 0) {
          html += '<div>';
          html += '<h4 class="text-sm font-semibold text-gray-300 mb-2"><i class="fa-solid fa-globe mr-2"></i>Ressources externes</h4>';
          html += '<ul class="space-y-2">';
          sae.ressources.externes.forEach(function (r) {
            html += '<li class="flex items-start gap-2.5 bg-white/[0.03] rounded-lg p-3">';
            html += '<span class="text-gray-600 mt-2 shrink-0">·</span>';
            html += '<div><p class="text-sm text-white font-medium">' + r.nom + '</p>';
            html += '<p class="text-xs text-gray-500 leading-relaxed mt-0.5">' + r.desc + '</p></div>';
            html += '</li>';
          });
          html += '</ul></div>';
        }

        // Bilan
        html += '<div class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">';
        html += '<p class="text-xs font-semibold text-gray-400 mb-1.5"><i class="fa-solid fa-scale-balanced mr-1.5"></i>Bilan</p>';
        html += '<p class="text-sm text-gray-300 leading-relaxed">' + sae.ressources.bilan + '</p>';
        html += '</div>';

        html += '</div>';
        break;

      // ── Implication ───────────────────────────────────────────────
      case 'implication':
        html += '<div class="space-y-3">';

        var impFields = [
          { icon: 'fa-solid fa-people-group', label: 'Modalité',    value: sae.implication.modalite },
          { icon: 'fa-solid fa-list-check',   label: 'Répartition', value: sae.implication.repartition },
          { icon: 'fa-solid fa-comments',     label: 'Interaction', value: sae.implication.interaction },
          { icon: 'fa-solid fa-person-walking', label: 'Autonomie', value: sae.implication.autonomie }
        ];

        impFields.forEach(function (f) {
          html += '<div class="flex items-start gap-3 bg-white/[0.03] rounded-lg p-3">';
          html += '<i class="' + f.icon + ' text-gray-500 mt-0.5 shrink-0"></i>';
          html += '<div>';
          html += '<p class="text-xs font-semibold text-gray-400 mb-0.5">' + f.label + '</p>';
          html += '<p class="text-sm text-gray-300 leading-relaxed">' + f.value + '</p>';
          html += '</div></div>';
        });

        html += '</div>';
        break;

      // ── Apprentissages ────────────────────────────────────────────
      case 'apprentissages':
        html += '<div class="space-y-4">';

        html += '<p class="text-sm text-gray-300 leading-relaxed">' + sae.apprentissages.evolution + '</p>';

        html += '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">';
        // Points forts
        html += '<div class="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4">';
        html += '<p class="text-xs font-semibold text-emerald-400 mb-1"><i class="fa-solid fa-check-circle mr-1.5"></i>Points forts</p>';
        html += '<p class="text-sm text-emerald-200/80 leading-relaxed">' + sae.apprentissages.pointsForts + '</p>';
        html += '</div>';
        // Axes d'amélioration
        html += '<div class="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4">';
        html += '<p class="text-xs font-semibold text-amber-400 mb-1"><i class="fa-solid fa-arrow-trend-up mr-1.5"></i>Axes d\'amélioration</p>';
        html += '<p class="text-sm text-amber-200/80 leading-relaxed">' + sae.apprentissages.pointsFaibles + '</p>';
        html += '</div>';
        html += '</div>';

        // Si c'était à refaire
        html += '<div class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">';
        html += '<p class="text-xs font-semibold text-gray-400 mb-1"><i class="fa-solid fa-rotate-left mr-1.5"></i>Si c\'était à refaire</p>';
        html += '<p class="text-sm text-gray-300 leading-relaxed italic">« ' + sae.apprentissages.aRefaire + ' »</p>';
        html += '</div>';

        html += '</div>';
        break;

      // ── À venir ───────────────────────────────────────────────────
      case 'avenir':
        html += '<div class="space-y-4">';

        html += '<div class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">';
        html += '<p class="text-xs font-semibold text-gray-400 mb-1.5"><i class="fa-solid fa-bullseye mr-1.5"></i>Objectifs</p>';
        html += '<p class="text-sm text-gray-300 leading-relaxed">' + sae.aVenir.objectifs + '</p>';
        html += '</div>';

        html += '<div class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">';
        html += '<p class="text-xs font-semibold text-gray-400 mb-1.5"><i class="fa-solid fa-toolbox mr-1.5"></i>Moyens</p>';
        html += '<p class="text-sm text-gray-300 leading-relaxed">' + sae.aVenir.moyens + '</p>';
        html += '</div>';

        html += '</div>';
        break;

      // ── Traces ────────────────────────────────────────────────────
      case 'traces':
        if (sae.traces.length === 0) {
          html += '<div class="text-center py-8"><p class="text-sm text-gray-500 italic">Aucune trace enregistrée pour cette SAÉ.</p></div>';
        } else {
          html += '<div class="space-y-2">';
          sae.traces.forEach(function (t) {
            var icon = traceIcons[t.type] || 'fa-solid fa-link';
            html += '<a href="' + t.url + '" target="_blank" rel="noopener" class="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] rounded-lg p-3 transition-all duration-200 group/trace">';
            html += '<div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm text-gray-400 group-hover/trace:text-white transition-colors shrink-0">';
            html += '<i class="' + icon + '"></i>';
            html += '</div>';
            html += '<div class="flex-1 min-w-0">';
            html += '<p class="text-sm text-white font-medium truncate">' + t.label + '</p>';
            html += '<p class="text-xs text-gray-600 truncate">' + t.url + '</p>';
            html += '</div>';
            html += '<i class="fa-solid fa-arrow-up-right-from-square text-xs text-gray-600 group-hover/trace:text-gray-400 transition-colors"></i>';
            html += '</a>';
          });
          html += '</div>';
        }
        break;

      default:
        html += '<p class="text-sm text-gray-500">Contenu non disponible.</p>';
        break;
    }

    modalBody.innerHTML = html;
  }

  // =========================================================================
  // 5. ÉVÉNEMENTS
  // =========================================================================

  // Clic sur une carte SAÉ → ouvre le modal
  container.addEventListener('click', function (e) {
    var card = e.target.closest('article[data-sae-id]');
    if (!card) return;
    var saeId = card.getAttribute('data-sae-id');
    var sae = saeData.find(function (s) { return s.id === saeId; });
    if (sae) openModal(sae);
  });

  // Bouton de fermeture
  modalClose.addEventListener('click', closeModal);

  // Clic sur l'overlay (en dehors du contenu)
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Touche Échap
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Changement d'onglet dans le modal
  modalTabs.addEventListener('click', function (e) {
    var tab = e.target.closest('.sae-modal-tab');
    if (!tab) return;

    // SAÉ courante
    var currentSaeId = modal.getAttribute('data-current-sae-id');
    var sae = saeData.find(function (s) { return s.id === currentSaeId; });
    if (!sae) return;

    // Mise à jour des classes actives
    var allTabs = modalTabs.querySelectorAll('.sae-modal-tab');
    allTabs.forEach(function (t) {
      t.classList.remove('text-white', 'border-white/40', 'bg-white/[0.04]');
      t.classList.add('text-gray-500', 'border-transparent');
    });
    tab.classList.remove('text-gray-500', 'border-transparent');
    tab.classList.add('text-white', 'border-white/40', 'bg-white/[0.04]');

    // Rendu du contenu
    var tabId = tab.getAttribute('data-tab');
    modalBody.scrollTop = 0;
    renderTabContent(tabId, sae);
  });

})();
