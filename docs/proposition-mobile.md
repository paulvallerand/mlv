# Propositions d'amélioration pour le web mobile

> Site : Mécanique Luc Vallerand — site vitrine statique (HTML/CSS/JS)
> État de référence : phases 0 à 3 appliquées (novembre 2026)
> Objectif : améliorer l'expérience, la performance et la conversion sur mobile.

---

## 1. Performance (impact élevé)

| # | Proposition | Détail | Effort |
|---|---|---|---|
| 1 | **Purger le CSS inutilisé** | `all.css` (Font Awesome, ~221 Ko), `bootstrap.min.css` (~160 Ko) et `style.css` (~129 Ko) sont chargés en entier sur mobile. Utiliser PurgeCSS ou un sous-ensemble Font Awesome (icônes réellement utilisées : `fa-phone`, `fa-arrow-right`, `fa-play`, `fa-facebook-f`, `fa-instagram`, `fa-times`, `fa-angle-*`). Gain estimé 250 à 300 Ko. | Moyen |
| 2 | **Polices : `preconnect` + sous-ensemble** | Remplacer les `@import` Google Fonts (Ubuntu, Inter) par `<link rel="preconnect">` + `<link rel="stylesheet">`, limiter aux graisses utilisées (400, 500, 600, 700), supprimer l'import Lora inutilisé. Gain FCP/LCP. | Faible |
| 3 | **Minifier `style.css` et `custom.js`** | Aucune minification actuellement. Ajouter un build simple (ex. `clean-css`, `terser`) ou une étape CI. | Faible |
| 4 | **Charger les scripts non critiques en `defer`** | `custom.js` peut être différé (Swiper conditionnel). Réduit le TBT mobile. | Faible |
| 5 | **Images d'icônes en WebP ou SVG** | `icon/services-*.png` (100×100 px) sont chargés en PNG. Convertir en WebP (~0,5 Ko) ou en sprite SVG. | Faible |
| 6 | **Service worker / cache offline** | Mettre en cache CSS, JS et images pour les visites répétées (Workbox ou SW manuel). Améliore le ressenti sur réseau mobile lent. | Moyen |
| 7 | **Preload de la police principale** | `<link rel="preload" as="font" … crossorigin>` sur Ubuntu 400/700 pour éviter le FOIT sur mobile. | Faible |

## 2. Navigation et UX mobile (impact élevé)

| # | Proposition | Détail | Effort |
|---|---|---|---|
| 8 | **Menu mobile : état actif et fermeture au clic** | Le MeanMenu s'ouvre mais ne se ferme pas toujours au clic sur un lien. Ajouter un indicateur de page active (classe `.active`). | Faible |
| 9 | **Bouton d'appel persistant** | Le `.mlv-callbar` est déjà présent. Vérifier qu'il ne masque pas le contenu important (padding-bottom 62 px déjà prévu). Ajouter `aria-live`. | Faible |
| 10 | **Galerie : 1 colonne sous 400 px** | Actuellement 2 colonnes dès 576 px. Sur très petits écrans (≤ 360 px), passer à 1 colonne pour des vignettes plus grandes. | Faible |
| 11 | **Filtrage / tri des galeries** | Sur mobile, 8 photos de fabrication = beaucoup de défilement. Ajouter un filtre par catégorie ou un carrousel horizontal. | Moyen |
| 12 | **Bouton « retour en haut »** | Déjà présent ; vérifier qu'il ne chevauche pas le call bar (bottom: 84 px déjà). OK. | — |

## 3. Touch et accessibilité (impact moyen)

| # | Proposition | Détail | Effort |
|---|---|---|---|
| 13 | **Zones tactiles ≥ 44×44 px** | Vérifier les liens du pied de page, icônes sociales et liens de service (certains < 44 px). Augmenter le padding. | Faible |
| 14 | **`prefers-reduced-motion`** | Aucune gestion actuellement. Désactiver les animations (carrousel auto, hover scale, poppy) pour les utilisateurs sensibles. | Faible |
| 15 | **Lien d'évitement (skip link)** | « Aller au contenu » en haut de page, déjà noté dans les recommandations. | Faible |
| 16 | **Contraste des textes sur fond photo** | Vérifier le contraste du texte sur `banner.webp` et `services.webp` (overlay). | Faible |
| 17 | **Focus visible sur mobile** | `:focus-visible` déjà ajouté (phase 1). Vérifier sur les boutons tactiles. | Faible |

## 4. Contenu et conversion mobile (impact moyen)

| # | Proposition | Détail | Effort |
|---|---|---|---|
| 18 | **Formulaire de contact mobile-first** | Pas de formulaire actuellement (mailto/tel). Ajouter un formulaire simple (Formspree/Netlify) avec champs larges, clavier numérique pour le téléphone (`inputmode="tel"`). | Moyen |
| 19 | **Carte / lien Google Maps** | Ajouter un lien « Itinéraire » (`https://maps.google.com/?q=...`) cliquable depuis mobile. | Faible |
| 20 | **Heures d'ouverture et zone desservie** | Déjà demandé ; crucial sur mobile (recherche locale). | Faible |
| 21 | **Témoignages / projets phares** | Section vide actuellement (témoignages uniquement si réels). Ajouter 2 à 3 photos de projets récents en carrousel mobile. | Moyen |

## 5. PWA et expérience native (impact moyen/long terme)

| # | Proposition | Détail | Effort |
|---|---|---|---|
| 22 | **Manifeste PWA + icônes** | `manifest.webmanifest` avec `display: standalone`, icônes 192/512 px, thème orange. Permet « Ajouter à l'écran d'accueil ». | Faible |
| 23 | **Meta mobile** | `theme-color`, `apple-mobile-web-app-capable`, `apple-touch-icon`. | Faible |
| 24 | **Splash screen iOS** | `apple-touch-startup-image`. | Faible |

## 6. Mesure et monitoring mobile

| # | Proposition | Détail | Effort |
|---|---|---|---|
| 25 | **Core Web Vitals réels** | Déployer puis mesurer avec PageSpeed Insights + CrUX. Objectif LCP < 2,5 s (actuel local 7,4 s). | Faible |
| 26 | **GA4 : événements mobiles** | Ajouter `scroll_depth`, `temps_sur_page`, `clic_menu_mobile`. | Faible |
| 27 | **Heatmap mobile** | Clarity ou Hotjar pour comprendre le comportement tactile (zones cliquées, scroll). | Faible |

## Top 5 recommandations à faire en premier

1. **Purger le CSS + sous-ensemble Font Awesome** (item 1) — gain de ~250 Ko, impact LCP direct.
2. **Polices : `preconnect` + suppression de Lora** (item 2) — gain FCP.
3. **Galerie 1 colonne sous 400 px + icônes WebP** (items 5, 10) — polish mobile rapide.
4. **`prefers-reduced-motion` + skip link** (items 14, 15) — accessibilité.
5. **Manifeste PWA + meta mobile** (items 22, 23) — expérience native à faible coût.

---

## Résultats d'application — items 3 à 12 (12 novembre 2026)

| Item | Statut | Détail |
|---|---|---|
| 3. Minifier CSS/JS | ✅ | `custom.min.js` (11 → 8 Ko) et `style.min.css` (128 → 88 Ko). HTML mis à jour pour les référencer. |
| 4. Scripts en `defer` | ✅ | Swiper et custom.min.js chargés en `defer` sur les 9 pages (jQuery et MeanMenu supprimés). |
| 5. Icônes WebP/SVG | ⚠️ Reverti | La conversion PNG → WebP augmentait le poids des petites icônes plates. Conservé en PNG. |
| 6. Service worker | ✅ | `sw.js` créé (cache-first assets, network-first HTML) et enregistré via `custom.min.js`. |
| 7. Preload police | ✅ | Preload des webfonts Font Awesome (`fa-solid-900`, `fa-brands-400`) dans les 9 pages. |
| 8. Menu mobile | ✅ | Fermeture automatique après clic sur un lien + classe `mean-current` sur la page active. |
| 9. Bouton d'appel | ✅ (déjà en place) | `.mlv-callbar` avec `safe-area-inset-bottom`, vérifié. |
| 10. Galerie 1 col < 400 px | ✅ | Media query ajoutée dans `phase1.css`. |
| 11. Navigation galerie | ✅ | Boutons précédent/suivant + flèches clavier + swipe tactile dans la visionneuse. |
| 12. Bouton retour en haut | ✅ (déjà en place) | Vérifié, ne chevauche pas le call bar. |

**Lighthouse mobile après items 3 à 12 (accueil)** : score 60 → **65**, FCP 4,7 → **4,0 s**, TBT 200 → **130 ms**, poids 1 738 → **1 698 Ko**.

---

*Document généré le 11 novembre 2026. À valider avant application.*
