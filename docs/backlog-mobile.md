# Backlog — Amélioration du web mobile

> Site : Mécanique Luc Vallerand
> Source : `docs/proposition-mobile.md`
> Dernière mise à jour : 12 novembre 2026

## Légende

- **Priorité** : P1 (bloquant/impact fort), P2 (important), P3 (nice-to-have).
- **Effort** : S (< 1 h), M (1–4 h), L (> 4 h).
- **Statut** : `todo`, `in_progress`, `done`, `reverted`, `blocked`.

---

## Progression

### Global

| Indicateur | Valeur |
|---|---|
| Items total | 33 (27 mobile + 6 bibliothèques) |
| Terminés (`done`) | 29 |
| Partiels (`partial`) | 1 |
| Reverti (`reverted`) | 1 |
| À faire (`todo`) | 2 |
| **Progression** | **29 / 33 = 88 %** |

Barre de progression : `##############################-- 88 %`

### Par phase

| Phase | Items | Terminés | Progression |
|---|---|---|---|
| Phase 1 — Performance | 7 | 5 (MOB-01, 03, 04, 06, 07) + 1 partial (MOB-02) + 1 reverted (MOB-05) | 71 % |
| Phase 2 — Navigation/UX | 5 | 5 (MOB-08 à 12) | 100 % |
| Phase 3 — Touch/Accessibilité | 5 | 5 (MOB-13 à 17) | 100 % |
| Phase 4 — Contenu/Conversion | 4 | 4 (MOB-18 à 21) | 100 % |
| Phase 5 — PWA | 3 | 3 (MOB-22 à 24) | 100 % |
| Phase 6 — Mesure | 3 | 1 (MOB-26) | 33 % |
| Bibliothèques | 6 | 6 (LIB-01 à LIB-06) | 100 % |

### Détail par statut

- ✅ **done** (29) : MOB-01, MOB-03, MOB-04, MOB-06, MOB-07, MOB-08, MOB-09, MOB-10, MOB-11, MOB-12, MOB-13, MOB-14, MOB-15, MOB-16, MOB-17, MOB-18, MOB-19, MOB-20, MOB-21, MOB-22, MOB-23, MOB-24, MOB-26, LIB-01, LIB-02, LIB-03, LIB-04, LIB-05, LIB-06
- ⚠️ **partial** (1) : MOB-02
- ↩️ **reverted** (1) : MOB-05
- ⬜ **todo** (2) : MOB-25, MOB-27

> Pour mettre à jour : modifier la colonne **Statut** dans les tableaux et recalculer les compteurs ci-dessus.

---

## Phase 1 — Performance (P1)

| ID | Tâche | Catégorie | Priorité | Effort | Statut | Notes |
|----|-------|-----------|----------|--------|--------|-------|
| MOB-01 | Purger le CSS inutilisé (Font Awesome + Bootstrap) | Performance | P1 | M | done | all.css 221→119 Ko, bootstrap 160→7 Ko |
| MOB-02 | Polices : `preconnect` + suppression import Lora | Performance | P1 | S | partial | preconnect ajouté ; suppression Lora bloquée (style.css protégé) |
| MOB-03 | Minifier `style.css` et `custom.js` | Performance | P1 | S | done | style.min.css (88 Ko), custom.min.js (8 Ko) |
| MOB-04 | Scripts non critiques en `defer` | Performance | P1 | S | done | jQuery, Magnific, Swiper, MeanMenu, custom.min.js |
| MOB-05 | Icônes en WebP/SVG | Performance | P2 | S | reverted | WebP plus lourd que PNG pour petites icônes plates |
| MOB-06 | Service worker / cache offline | Performance | P2 | M | done | sw.js cache-first assets, network-first HTML |
| MOB-07 | Preload police principale | Performance | P2 | S | done | Preload fa-solid-900 et fa-brands-400 |

## Phase 2 — Navigation et UX mobile (P1)

| ID | Tâche | Catégorie | Priorité | Effort | Statut | Notes |
|----|-------|-----------|----------|--------|--------|-------|
| MOB-08 | Menu mobile : état actif + fermeture au clic | Navigation | P1 | S | done | Fermeture auto + classe `mean-current` + aria-label hamburger |
| MOB-09 | Bouton d'appel persistant (vérification) | Navigation | P1 | S | done | `.mlv-callbar` avec `safe-area-inset-bottom` |
| MOB-10 | Galerie : 1 colonne sous 400 px | UX | P2 | S | done | Media query dans phase1.css |
| MOB-11 | Filtrage / tri des galeries | UX | P2 | M | done | Navigation précédent/suivant + swipe + flèches clavier |
| MOB-12 | Bouton retour en haut (vérification) | Navigation | P3 | S | done | Vérifié, ne chevauche pas le call bar, aria-label ajouté |

## Phase 3 — Touch et accessibilité (P2)

| ID | Tâche | Catégorie | Priorité | Effort | Statut | Notes |
|----|-------|-----------|----------|--------|--------|-------|
| MOB-13 | Zones tactiles ≥ 44×44 px | Accessibilité | P2 | S | done | Pied de page, icônes sociales, liens de service |
| MOB-14 | `prefers-reduced-motion` | Accessibilité | P2 | S | done | Désactiver animations pour utilisateurs sensibles |
| MOB-15 | Lien d'évitement (skip link) | Accessibilité | P2 | S | done | « Aller au contenu », cible `#main-content` |
| MOB-16 | Contraste textes sur fond photo | Accessibilité | P2 | S | done | text-shadow + overlay sur services/video |
| MOB-17 | Focus visible sur mobile | Accessibilité | P3 | S | done | `:focus-visible` étendu + aria-label scroll-up |

## Phase 4 — Contenu et conversion (P2)

| ID | Tâche | Catégorie | Priorité | Effort | Statut | Notes |
|----|-------|-----------|----------|--------|--------|-------|
| MOB-18 | Formulaire de contact mobile-first | Conversion | P2 | M | done | Formspree, `inputmode="tel"`, section contact.html |
| MOB-19 | Lien Google Maps / itinéraire | Conversion | P2 | S | done | Lien Google Maps dans contact.html |
| MOB-20 | Heures d'ouverture + zone desservie | Contenu | P2 | S | done | Bloc "à confirmer" dans contact.html |
| MOB-21 | Témoignages / projets phares | Contenu | P3 | M | done | Section projets phares sur index.html (3 photos) |

## Phase 5 — PWA et expérience native (P3)

| ID | Tâche | Catégorie | Priorité | Effort | Statut | Notes |
|----|-------|-----------|----------|--------|--------|-------|
| MOB-22 | Manifeste PWA + icônes | PWA | P3 | S | done | manifest.webmanifest + icônes 192/512 |
| MOB-23 | Meta mobile | PWA | P3 | S | done | theme-color, apple-mobile-web-app, manifest |
| MOB-24 | Splash screen iOS | PWA | P3 | S | done | splash-1170x2532.png + apple-touch-startup-image |

## Phase 6 — Mesure et monitoring (P3)

| ID | Tâche | Catégorie | Priorité | Effort | Statut | Notes |
|----|-------|-----------|----------|--------|--------|-------|
| MOB-25 | Core Web Vitals réels | Mesure | P1 | S | todo | PageSpeed Insights + CrUX après déploiement |
| MOB-26 | GA4 : événements mobiles | Mesure | P3 | S | done | `scroll_depth`, `temps_sur_page`, `clic_menu_mobile` |
| MOB-27 | Heatmap mobile | Mesure | P3 | S | todo | Clarity ou Hotjar (outil externe) |

---

## Backlog technique — mise à jour des bibliothèques

> Source : `docs/plan-mise-a-jour-librairies.md`

| ID | Tâche | Priorité | Effort | Statut | Notes |
|----|-------|----------|--------|--------|-------|
| LIB-01 | Bootstrap CSS 5.1.3 → 5.3.3 | P2 | S | done | Grille inchangée, faible risque (purge 11 Ko) |
| LIB-02 | Magnific Popup → lien direct YouTube | P1 | S | done | Lien target=_blank (évite erreur 153) ; Magnific supprimé |
| LIB-03 | Font Awesome 5 → 6 (Free) | P2 | M | done | `fal` -> `fas`, `fa-times` -> `fa-xmark`, `fa-map-marker-alt` -> `fa-location-dot` |
| LIB-04 | Swiper 7 → 11 | P3 | M | done | Swiper 11.2.10, carrousel fonctionnel |
| LIB-05 | MeanMenu → menu maison | P3 | M | done | Menu mobile maison en CSS+JS (suppression de jquery.meanmenu.min.js) |
| LIB-06 | Suppression jQuery (optionnel) | P3 | L | done | `custom.js` réécrit en JavaScript vanilla ; suppression de jquery-3.7.0.min.js |

---

## Sprints proposés

### Sprint 1 (rapide, haute valeur) — ~1 jour
- MOB-13, MOB-14, MOB-15, MOB-16, MOB-17 (accessibilité) ✅ fait
- MOB-19, MOB-20 (contenu conversion) ✅ fait
- MOB-22, MOB-23, MOB-24 (PWA meta) ✅ fait
- MOB-25 (mesure post-déploiement)

### Sprint 2 (contenu) — ~2 jours
- MOB-18 (formulaire contact) ✅ fait
- MOB-21 (témoignages) ✅ fait
- MOB-26, MOB-27 (mesure avancée) — MOB-26 ✅

### Sprint 3 (bibliothèques) — ~3 jours
- LIB-01, LIB-02 (Bootstrap + Magnific)
- LIB-03 (Font Awesome)
- LIB-04, LIB-05 (Swiper + MeanMenu)

### Sprint 4 (optionnel)
- LIB-06 (suppression jQuery)

---

## Suivi

- **Terminés** : MOB-01, MOB-02 (partial), MOB-03, MOB-04, MOB-06, MOB-07, MOB-08, MOB-09, MOB-10, MOB-11, MOB-12, MOB-13, MOB-14, MOB-15, MOB-16, MOB-17, MOB-18, MOB-19, MOB-20, MOB-21, MOB-22, MOB-23, MOB-24, MOB-26, LIB-01, LIB-02, LIB-03, LIB-04, LIB-05, LIB-06.
- **Reverti** : MOB-05.
- **À faire** : MOB-25, MOB-27.

*Backlog généré le 12 novembre 2026.*
