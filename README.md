# Documentation — Site web de Mécanique Luc Vallerand

> Site vitrine statique de **Mécanique Luc Vallerand**, entreprise spécialisée en fabrication métallique, maintenance industrielle et travaux de soudage.
> Dernière mise à jour de la documentation : **11 novembre 2026**.

> ✅ **Phases 0 à 3 appliquées le 11 novembre 2026** (phases 0 à 2 commitées, phase 3 en attente de commit). La phase 0 a corrigé les titres, descriptions, liens, attributs `alt` et légendes. La phase 1 a refondu la bannière d'accueil, la typographie, les galeries, ajouté les sections « Pourquoi nous choisir », « Notre processus », un CTA final, enrichi le pied de page et ajouté un bouton d'appel mobile. La phase 2 a rédigé le contenu long des 5 pages de service, transformé `services-tous.html` en vraie page « Services », ajouté les données structurées JSON-LD, les balises canoniques et Open Graph, ainsi que `sitemap.xml`, `robots.txt` et `404.html`. La phase 3 a converti les photos en WebP responsives, ajouté `width`/`height`, `srcset` et les préchargements, supprimé les scripts et fichiers inutilisés, et ajouté le suivi GA4 des appels, courriels et demandes de soumission. Les liens sociaux restent à renseigner.

📄 **Documents associés :**
> - [Guide de modification du site](docs/guide-modification.md)
> - [Propositions d'amélioration — Design & SEO](docs/ameliorations-design-seo.md)

---

## Table des matières

1. [Présentation générale](#1-présentation-générale)
2. [Informations de l'entreprise](#2-informations-de-lentreprise)
3. [Structure du projet](#3-structure-du-projet)
4. [Cartographie des pages](#4-cartographie-des-pages)
5. [Contenu de chaque page](#5-contenu-de-chaque-page)
6. [Navigation et liens](#6-navigation-et-liens)
7. [Architecture technique](#7-architecture-technique)
8. [Styles et apparence](#8-styles-et-apparence)
9. [JavaScript et interactions](#9-javascript-et-interactions)
10. [Images et médias](#10-images-et-médias)
11. [Référencement (SEO)](#11-référencement-seo)
12. [Mesure d'audience (Google Analytics)](#12-mesure-daudience-google-analytics)
13. [Déploiement et hébergement](#13-déploiement-et-hébergement)
14. [Guide de modification rapide](#14-guide-de-modification-rapide)
15. [Ajouter une nouvelle page de service](#15-ajouter-une-nouvelle-page-de-service)
16. [Problèmes connus et points à corriger](#16-problèmes-connus-et-points-à-corriger)
17. [Recommandations d'amélioration](#17-recommandations-damélioration)
18. [Checklist avant mise en ligne](#18-checklist-avant-mise-en-ligne)

---

## 1. Présentation générale

| Élément | Valeur |
|---|---|
| Type de site | Site vitrine statique (HTML/CSS/JavaScript) |
| Langue | Français (`lang="fr"`) |
| Nombre de pages | 9 fichiers HTML (8 pages publiques + `404.html`) |
| Domaine | [mecaniquelucv.com](https://mecaniquelucv.com) |
| Hébergement | GitHub Pages (fichier `CNAME`) |
| Année de fondation | 2019 |
| Activités | Fabrication, maintenance industrielle, soudage, découpe, installation, modification, réparation |
| Analytics | Google Analytics 4 — identifiant `G-TNM9JC9YL7` |

Le site est **entièrement statique** : aucune base de données, aucun serveur applicatif, aucun formulaire côté serveur. Il peut être ouvert directement dans un navigateur ou publié sur n'importe quel hébergeur de fichiers statiques.

---

## 2. Informations de l'entreprise

Ces informations sont utilisées dans le site et doivent être mises à jour de manière cohérente.

| Champ | Valeur | Emplacement principal |
|---|---|---|
| Nom | Mécanique Luc Vallerand | En-tête, pied de page, `<title>` |
| Courriel | mecaniquelucv@gmail.com | `contact.html` |
| Téléphone | 418-313-4032 | `contact.html` |
| Adresse | 524 rue Principale | `contact.html` |
| Ville | Saint-Honoré-de-Shenley, QC | `contact.html` |
| Code postal | G0M 1V0 | `contact.html` |
| Facebook | Lien `#` (non renseigné) | En-tête et pied de page |
| Instagram | Lien `#` (non renseigné) | En-tête et pied de page |
| Vidéo YouTube | `https://www.youtube.com/embed/k8x2J3vZwwg` | `index.html`, `services-tous.html` |

> ⚠️ Les liens Facebook et Instagram sont actuellement des ancres `#`. Voir [section 16](#16-problèmes-connus-et-points-à-corriger).

---

## 3. Structure du projet

```text
mlv/
├── index.html                  # Page d'accueil
├── contact.html                # Page de contact
├── 404.html                    # Page d'erreur personnalisée (noindex)
├── services-tous.html          # Page « Nos services » (vue d'ensemble + FAQ)
├── services-decoupe.html       # Service : Découpe
├── services-fabrication.html   # Service : Fabrication
├── services-installation.html  # Service : Installation
├── services-modification.html  # Service : Modification
├── services-reparation.html    # Service : Réparation
├── CNAME                       # Domaine personnalisé GitHub Pages
├── BingSiteAuth.xml            # Validation du site pour Bing Webmaster Tools
├── sitemap.xml                 # Sitemap des 8 pages publiques
├── robots.txt                  # Autorise l'exploration et déclare le sitemap
├── assets/
│   ├── css/                    # Feuilles de style tierces + Bootstrap
│   │   ├── bootstrap.min.css
│   │   ├── all.css             # Font Awesome
│   │   ├── swiper-bundle.min.css   # Accueil uniquement
│   │   ├── magnific-popup.css      # Accueil uniquement
│   │   ├── critical.css        # CSS consolidé (critique)
│   │   └── deferred.css        # CSS consolidé (différé)
│   │   ├── phase1.css          # Surcharges de la phase 1 (design)
│   │   └── phase2.css          # Surcharges de la phase 2 (contenu, FAQ, 404)
│   ├── sass/
│   │   └── style.css           # ⚠️ CSS principal du site (malgré le dossier « sass »)
│   ├── js/
│   │   ├── jquery.magnific-popup.min.js   # Accueil uniquement (supprimé)
│   │   ├── swiper-bundle.min.js           # Accueil uniquement

│   │   └── custom.js           # ⚠️ Script principal du site
│   ├── img/                    # Logos, bannières, icônes, images de sections
│   └── webfonts/               # Polices Font Awesome
├── images/
│   ├── pickup2.webp            # Image d'origine de la bannière d'accueil (1488 px)
│   ├── pickup2-1024.webp       # Version 1024 px servie par défaut
│   ├── pickup2-744.webp        # Version 744 px servie sur mobile
│   ├── découpe/                # Photos + variantes WebP (1024 et 640) du service Découpe
│   ├── fabrication/            # Photos + variantes WebP du service Fabrication
│   ├── installation/           # Photos + variantes WebP du service Installation
│   ├── modification/           # Photos + variantes WebP du service Modification
│   └── réparation/             # Photos + variantes WebP du service Réparation
└── .vs/                        # Fichiers de Visual Studio (à ignorer)
```

### Fichiers réellement chargés par les pages

Les pages HTML chargent :

- **CSS** : `assets/css/bootstrap.min.css`, `all.css`, `meanmenu.min.css`, puis `assets/sass/style.css`, `assets/css/phase1.css` et `assets/css/phase2.css`. `swiper-bundle.min.css` et `magnific-popup.css` ne sont chargés que sur `index.html`.
- **JS** : `assets/js/custom.js` (vanilla JS, plus de dépendance jQuery depuis LIB-06). Magnific Popup et Swiper ne sont chargés que sur `index.html`. Le menu mobile est implémenté dans `custom.js` (menu maison).

> Les feuilles `phase1.css` et `phase2.css` sont chargées **après** `assets/sass/style.css` : elles surchargent le thème d'origine sans modifier le CSS compilé principal. `phase2.css` contient les styles du contenu long des services, de la FAQ, de la page « Nos services » et de la page 404.

Depuis la phase 3, les fichiers suivants ont été supprimés : dossier racine `bootstrap/`, `assets/css/animate.css`, `assets/js/bootstrap.min.js`, `assets/js/popper.min.js`, `assets/js/progressbar.min.js`, ainsi que les images non référencées (`*.old`, doublons PNG, anciennes photos).

---

## 4. Cartographie des pages

```text
Accueil (index.html)
├── Services (menu déroulant)
│   ├── Découpe ............... services-decoupe.html
│   ├── Fabrication ........... services-fabrication.html
│   ├── Installation .......... services-installation.html
│   ├── Modification .......... services-modification.html
│   └── Réparation ............ services-reparation.html
├── Services (pied de page) ... services-tous.html  → copie de l'accueil
└── Contact ................... contact.html
```

| Page | Rôle | Titre principal (`<h1>`) |
|---|---|---|
| `index.html` | Accueil, mission, services, pourquoi nous choisir, processus, vidéo, CTA | « Fabrication, soudage et maintenance industrielle sur mesure » |
| `services-tous.html` | Page « Nos services » : vue d'ensemble des 5 services, méthode, FAQ, CTA | « Services de fabrication, soudage et maintenance industrielle » |
| `services-decoupe.html` | Contenu long, méthode, FAQ et galerie — découpe | « Découpe de métal sur mesure » |
| `services-fabrication.html` | Contenu long, méthode, FAQ et galerie — fabrication | « Services de fabrication de pièces de métal sur mesure » |
| `services-installation.html` | Contenu long, méthode, FAQ et galerie — installation | « Installation de pièces et structures métalliques » |
| `services-modification.html` | Contenu long, méthode, FAQ et galerie — modification | « Modification de pièces et structures métalliques » |
| `services-reparation.html` | Contenu long, méthode, FAQ et galerie — réparation | « Réparation de pièces et structures métalliques » |
| `contact.html` | Coordonnées | « Contactez-nous » |
| `404.html` | Page d'erreur personnalisée (`noindex, follow`) | « Page introuvable » |

> ℹ️ `services-tous.html` n'est plus un duplicata de l'accueil : depuis la phase 2, il présente les 5 services, la méthode de travail, une FAQ et des liens vers les pages détaillées.

---

## 5. Contenu de chaque page

### 5.1 `index.html` — Accueil

Structure des sections :

| Section | Lignes indicatives | Contenu |
|---|---|---|
| En-tête | 48–76 | Logo, titre, menu principal |
| Bannière (hero) | 77–113 | H1, promesse, boutons « Demander une soumission » et téléphone, bande de réassurance, image `pickup2.webp` |
| Carrousel de services | 114–165 | 5 vignettes : Découpe, Fabrication, Installation, Modification, Réparation |
| Notre mission | 166–213 | Texte de présentation de l'entreprise (6 paragraphes) |
| Nos services | 214–304 | 5 cartes numérotées avec icônes, descriptions et liens |
| Pourquoi nous choisir | 305–338 | 4 arguments : fabrication sur mesure, maintenance, précision, accompagnement |
| Notre processus | 339–372 | 4 étapes : besoin, soumission, réalisation, suivi |
| Vidéo | 373–383 | Bouton lecture vers YouTube |
| Appel à l'action final | 384–400 | Bandeau orange avec soumission et téléphone |
| Pied de page | 401–448 | 4 colonnes : marque, services, navigation, coordonnées |
| Bouton d'appel mobile | 449–454 | Barre fixe sous 991 px |
| Bouton retour en haut | 455–460 | Flèche circulaire animée |
| Scripts | 461–478 | Bibliothèques JavaScript |

### 5.2 `contact.html`

Affiche les coordonnées dans la bannière :

- Courriel cliquable : `mailto:mecaniquelucv@gmail.com`
- Téléphone cliquable : `tel:418-313-4032`
- Adresse postale sur trois lignes

> Il n'y a **pas de formulaire de contact**. L'utilisateur doit utiliser son client courriel ou téléphoner.

### 5.3 Pages de service

Les cinq pages suivent le même modèle :

1. En-tête et menu identiques.
2. Bannière avec un titre `<h1>` et un sous-titre `<h3>` rédigé.
3. Galerie `<div class="gallery">` contenant des `<figure>` avec images.
4. Bandeau d'appel à l'action final (soumission + téléphone).
5. Pied de page complet et scripts.

Chaque `<figure>` possède désormais une légende descriptive, un attribut `alt` et un accès clavier :

```html
<figure tabindex="0" role="button" aria-label="Agrandir : Titre de la réalisation">
  <img src="images/fabrication/ma-photo.jpg"
       alt="Description de la réalisation"
       loading="lazy" style="max-height:60vh" />
  <figcaption>Titre de la réalisation <small>Détail</small></figcaption>
</figure>
```

---

## 6. Navigation et liens

### Menu principal (toutes les pages)

| Libellé | Cible | Remarque |
|---|---|---|
| Accueil | `index.html` | OK |
| Services | `services-tous.html` | Ouvre aussi le sous-menu au survol |
| ├ Découpe | `services-decoupe.html` | OK |
| ├ Fabrication | `services-fabrication.html` | OK |
| ├ Installation | `services-installation.html` | OK |
| ├ Modification | `services-modification.html` | OK |
| └ Réparation | `services-reparation.html` | OK |
| Contact | `contact.html` | OK |

### Pied de page

| Libellé | Cible | Remarque |
|---|---|---|
| Accueil | `index.html` | OK |
| Tous nos services | `services-tous.html` | Vraie page « Nos services » depuis la phase 2 |
| Les 5 services | `services-*.html` | OK |
| Contact | `contact.html` | OK |
| Téléphone / courriel | `tel:+14183134032`, `mailto:` | OK |

### Carte « Réparation » de l'accueil

Dans `index.html` et `services-tous.html`, la carte « Réparation » pointe bien vers `services-reparation.html` depuis la phase 0.

### Icônes sociales

Dans l'en-tête (bannière) et le pied de page, les liens Facebook et Instagram valent `href="#"`. **À remplacer** par les URL réelles des comptes.

---

## 7. Architecture technique

### 7.1 Technologies

| Technologie | Version / rôle | Fichier |
|---|---|---|
| HTML5 | Structure des pages | `*.html` |
| CSS3 | Mise en page | `assets/sass/style.css` |
| Bootstrap | Grille et utilitaires | `assets/css/bootstrap.min.css` |
| Font Awesome | Icônes | `assets/css/all.css`, `assets/webfonts/` |
| Swiper | Carrousel de services | `assets/js/swiper-bundle.min.js` |
| Menu mobile maison | Menu responsive (LIB-05) | `assets/js/custom.js` |
| Magnific Popup | Lecteur vidéo YouTube | `assets/js/jquery.magnific-popup.min.js` |
| JavaScript vanilla | Manipulation DOM (LIB-06) | `assets/js/custom.js` |
| Google Fonts | Polices Lora et Ubuntu | Import dans `style.css` |
| Inter | Police du texte courant | Import dans `phase1.css` |

### 7.2 En-tête HTML commun

Chaque page contient :

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="keywords" content="...">
<meta name="author" content="Mécanique Luc Vallerand">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mécanique Luc Vallerand</title>
<link rel="icon" type="image/png" href="assets/img/favicon-1.png">
```

> ✅ Depuis la phase 0, chaque page possède un `<title>` et une `meta description` uniques. Voir [section 11](#11-référencement-seo).

### 7.3 Compatibilité

- Site adaptatif (responsive) grâce à Bootstrap et aux media queries.
- Menu mobile activé sous **991 px** de largeur (`meanScreenWidth: '991'`).
- Les chemins d'images des galeries utilisent désormais des **barres obliques** (`images/découpe/...`) depuis la phase 0. Les dossiers accentués sont conservés ; les renommer en minuscules sans accent améliorerait la portabilité.

---

## 8. Styles et apparence

Le fichier principal est **`assets/sass/style.css`** (~131 Ko). Malgré son emplacement dans un dossier `sass`, il s'agit de CSS compilé et non de sources SCSS.

La phase 1 ajoute **`assets/css/phase1.css`**, chargé après `style.css`. Cette feuille contient les surcharges de design (variables, hero, sections, galeries, footer, bouton d'appel mobile) sans modifier le CSS compilé d'origine.

### Variables et couleurs principales

| Rôle | Valeur |
|---|---|
| Couleur d'accent | `#F94D1D` (orange) |
| Orange des aplats avec texte blanc | `#C93A0E` (contraste AA) |
| Texte clair | `#CFD0D0` / `#D7D8D9` |
| Fond sombre | `#030404`, surfaces `#0F1212` et `#151B1B` |
| Texte des boutons | `#FFFFFF` |

### Polices

- **Inter** (400 à 700) — texte courant, importée dans `phase1.css`.
- **Ubuntu** (300 à 700) — titres, boutons et libellés.
- **Lora** reste déclarée dans le thème d'origine mais n'est plus utilisée pour les titres visibles.

### Classes utilitaires importantes

| Classe | Usage |
|---|---|
| `.container`, `.row`, `.col-xl-*` | Grille Bootstrap |
| `.section-padding` | Espacement vertical (150 px, 90 px sur mobile) |
| `.header__area` | En-tête fixe |
| `.banner__area` | Bannière avec image de fond via `data-background` |
| `.banner__area.hero` | Bannière d'accueil refondue (H1, CTA, réassurance) |
| `.banner__area.service-banner` | Bannière des pages de service |
| `.features__area` | Carrousel de services |
| `.services__area` | Sections mission et services |
| `.mlv-why`, `.mlv-process` | Sections « Pourquoi nous choisir » et « Notre processus » |
| `.mlv-cta` | Bandeau d'appel à l'action final |
| `.mlv-footer` | Pied de page enrichi en 4 colonnes |
| `.mlv-callbar` | Barre d'appel fixe sous 991 px |
| `.scroll-up` | Bouton de retour en haut |
| `.gallery` | Grille de photos des pages de service |
| `.popup` | Visionneuse d'image plein écran (générée par JS) |

### Comportement des images

- `phase1.css` rétablit `img { max-width: 100%; }` pour éviter tout débordement.
- Les images de galerie utilisent un ratio constant (`aspect-ratio: 4 / 3`) et `object-fit: cover`.
- Toutes les images ont `width` et `height` pour éviter les décalages de mise en page (CLS).
- Les galeries et l'image principale de l'accueil utilisent `srcset`/`sizes` avec une variante **640 px** et une variante **1024 px**.
- Les photos sont servies en **WebP** ; les JPG d'origine restent dans le dépôt comme sources mais ne sont plus chargés.
- La bannière d'accueil utilise `fetchpriority="high"` et est préchargée ; les vignettes et galeries sont en `loading="lazy" decoding="async"`.

---

## 9. JavaScript et interactions

Le fichier **`assets/js/custom.js`** gère :

| Fonction | Description |
|---|---|
| Images de fond | Applique `data-background` en `background-image` ; les fonds de section sont chargés à l'approche du viewport via `IntersectionObserver`. |
| Menu responsive | Menu mobile maison sous 991 px (accordéon des sous-menus, fermeture au clic). |
| Carrousel de services | Swiper avec 4 vignettes sur grand écran, 1 sur mobile, défilement infini (uniquement si `.features-slider` existe). |
| Menu accordéon | `.toggle-menu` (non utilisé actuellement). |
| FAQ | Accordéon `.faq-item-card` (non utilisé actuellement). |
| Vidéo | Magnific Popup de type `iframe` sur `.video-popup` (protégé par `if ($.fn.magnificPopup)`). |
| Carrousel de partenaires | `.sponsors-slider` (non utilisé actuellement). |
| Barres de compétences | Animation à l'apparition (non utilisée actuellement). |
| Témoignages | Carrousel `.reviews` (non utilisé actuellement). |
| Survol des cartes | Ajout de classes `-hover` au survol des services et des vignettes. |
| Bouton retour en haut | Animation du cercle SVG et remontée fluide (désactivé si le SVG est absent). |
| Visionneuse de galerie | Clic ou touche Entrée/Espace sur une `<figure>` → ouverture d'un `.popup` plein écran ; fermeture au clic, au clic sur la croix ou avec Échap. |
| Événements GA4 | Envoie `appel_telephone`, `courriel`, `demande_soumission` et `clic_service` (voir section 12). |

### Comportement de la visionneuse

- Le clic (ou les touches Entrée / Espace) sur une `<figure>` de galerie ouvre l'image en grand.
- Le clic sur le fond, sur la croix ou la touche **Échap** ferme la visionneuse.
- La croix est dessinée en CSS (plus besoin du symbole SVG `#close`).
- Le focus est placé sur le bouton de fermeture à l'ouverture, puis rendu à la figure d'origine à la fermeture.
- La visionneuse reconstruit l'`<img>` à partir de son `src` (variante 1024 px) pour toujours afficher l'image pleine résolution, même si la vignette avait chargé la variante 640 px.

### Bouton vidéo de l'accueil

Le bouton utilise désormais la classe `.video-popup` sur `index.html`. Magnific Popup ouvre donc correctement la vidéo dans une fenêtre modale. Un `aria-label` a également été ajouté pour l'accessibilité.

---

## 10. Images et médias

### Images de structure (`assets/img/`)

| Fichier | Utilisation |
|---|---|
| `logo-1.webp` | Logo de l'en-tête et du pied de page (304×304 px) |
| `favicon-1.png` | Favicon |
| `banner.webp` | Fond de la bannière (1460×1556 px, 115 Ko) |
| `features-1.webp` à `features-4.webp` | Vignettes du carrousel (480×380 px, 27–30 Ko) |
| `services.webp` | Fond des sections mission/services (1842×1734 px, 147 Ko) |
| `video.webp` | Fond de la section vidéo (1920×570 px, 84 Ko) |
| `icon/services-*.png` | Icônes des cartes de services (100×100 px) |

### Photos de réalisations (`images/`)

Chaque dossier contient les JPG d'origine plus deux variantes WebP par photo : une à 1024 px (suf. `.webp`) et une à 640 px (suf. `-640.webp`).

| Dossier | Photos | Utilisé dans |
|---|---|---|
| `images/découpe/` | 4 | `services-decoupe.html` |
| `images/fabrication/` | 8 | `services-fabrication.html` |
| `images/installation/` | 3 | `services-installation.html` |
| `images/modification/` | 5 | `services-modification.html` |
| `images/réparation/` | 2 | `services-reparation.html` |
| `images/pickup2.webp` + variantes | 1 | Bannière de l'accueil (LCP) |

### Bonnes pratiques pour les images

- Privilégier le format **WebP** (plus léger) avec les JPG d'origine conservés comme sources.
- Redimensionner les photos à 1024 px maximum sur le grand côté.
- Renseigner l'attribut `alt` avec une description courte et pertinente (fait sur les images de contenu en phase 0).
- Éviter les espaces et accents dans les noms de fichiers (renommés en tirets en phase 3).
- Conserver `loading="lazy"` sur les images sous la ligne de flottaison et `fetchpriority="high"` sur le LCP.
- Renseigner `width`/`height` et `decoding="async"` sur toutes les images.

---

## 11. Référencement (SEO)

### État actuel

| Point | État |
|---|---|
| Balise `<title>` | ✅ Unique sur les 9 pages (phases 0 et 2) |
| `meta description` | ✅ Renseignée sur les 9 pages (phases 0 et 2) |
| `meta keywords` | Renseigné sur `index.html` et `services-tous.html` uniquement (obsolète pour Google) |
| Attributs `alt` | ✅ Renseignés sur le logo, la bannière, les vignettes et les galeries ; icônes décoratives laissées vides |
| Structure des titres | ✅ Un seul `<h1>` par page ; H2/H3 pour les sections (phase 1) |
| URL | Propres et explicites (`services-decoupe.html`, etc.) |
| Sitemap | ✅ `sitemap.xml` — 8 pages publiques (phase 2) |
| `robots.txt` | ✅ Présent, déclare le sitemap (phase 2) |
| Page 404 | ✅ `404.html` personnalisée, en `noindex, follow` (phase 2) |
| Données structurées | ✅ JSON-LD `LocalBusiness` sur les pages principales, `Service` et `FAQPage` sur les pages de service (phase 2) |
| Validation Bing | Présente (`BingSiteAuth.xml`) |
| Domaine canonique | ✅ `rel="canonical"` et Open Graph sur les 8 pages publiques (phase 2) |
| Bouton d'appel mobile | ✅ Ajouté sous 991 px (phase 1) |
| Réseaux sociaux | ⏳ URL réelles à fournir |

### Recommandations prioritaires

1. ✅ **Titre unique par page** — fait en phase 0.
2. ✅ **Description unique** — fait en phase 0.
3. ✅ **Attributs `alt` descriptifs** sur les images de contenu — fait en phase 0.
4. ✅ **`sitemap.xml`** et **`robots.txt`** ajoutés à la racine — fait en phase 2.
5. ✅ `rel="canonical"` et Open Graph ajoutés sur chaque page publique — fait en phase 2.
6. ✅ **Données structurées JSON-LD** `LocalBusiness`, `Service` et `FAQPage` — fait en phase 2 (test Rich Results après déploiement).
7. Créer une fiche **Google Business Profile** cohérente avec l'adresse affichée.
8. Renseigner les **liens sociaux réels** (Facebook et Instagram).

---

## 12. Mesure d'audience (Google Analytics)

Le suivi Google Analytics 4 est intégré dans le `<head>` de chaque page :

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TNM9JC9YL7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TNM9JC9YL7');
</script>
```

- Identifiant de mesure : **`G-TNM9JC9YL7`**
- Pour le remplacer : modifier les **deux occurrences** dans chacune des 9 pages.
- En cas de mise en conformité RGPD/Loi 25 (Québec), prévoir une **bannière de consentement** avant le chargement du script Analytics. Actuellement, le script se charge immédiatement.

### Événements GA4 (phase 3)

Les événements sont envoyés depuis `assets/js/custom.js` via un seul délégeur de clic (pas de double comptage), avec `transport_type: 'beacon'` :

| Événement | Déclencheur |
|---|---|
| `appel_telephone` | Clic sur un lien `tel:` |
| `courriel` | Clic sur un lien `mailto:` |
| `demande_soumission` | Clic sur un bouton `.theme-btn-1` vers `contact.html` |
| `clic_service` | Clic vers une page `services-*.html` (paramètre `service`) |

Dans GA4, marquer `appel_telephone`, `courriel` et `demande_soumission` comme **conversions clés**.

## 13. Déploiement et hébergement

### Hébergement actuel

| Élément | Valeur |
|---|---|
| Plateforme | GitHub Pages |
| Branche publiée | Généralement `main` (à vérifier dans les paramètres du dépôt) |
| Domaine personnalisé | `mecaniquelucv.com` (fichier `CNAME`) |
| HTTPS | Fourni par GitHub Pages (Let's Encrypt) |
| Dossier publié | Racine du dépôt |

### Procédure de publication

1. Modifier les fichiers localement.
2. Vérifier le rendu en ouvrant `index.html` dans un navigateur.
3. Valider les changements :
   ```bash
   git status
   git diff
   ```
4. Enregistrer et envoyer :
   ```bash
   git add .
   git commit -m "Mise à jour du contenu"
   git push
   ```
5. GitHub Pages republie automatiquement le site en quelques minutes.
6. Vérifier le site en production : `https://mecaniquelucv.com`.

### Configuration DNS (rappel)

Le domaine doit pointer vers GitHub Pages :

- Enregistrements `A` vers les IP de GitHub Pages.
- Enregistrement `CNAME` pour `www` vers `<utilisateur>.github.io`.
- Le fichier `CNAME` doit contenir exactement `mecaniquelucv.com` (sans protocole ni slash).

### Test local

Aucun build n'est nécessaire. Deux options :

- Ouvrir directement `index.html` dans le navigateur.
- Servir le dossier avec un petit serveur local pour éviter les restrictions de fichiers :
  ```bash
  # Python
  python -m http.server 8000
  # ou avec Node.js
  npx serve .
  ```
  puis ouvrir `http://localhost:8000`.

---

## 14. Guide de modification rapide

### Modifier le titre et la description d'une page

Dans le `<head>` de la page concernée :

```html
<title>Votre nouveau titre | Mécanique Luc Vallerand</title>
<meta name="description" content="Description de 150 à 160 caractères.">
```

### Modifier les coordonnées

Fichier `contact.html`, section « Banner Area » (environ lignes 80 à 108) :

```html
<h3>Courriel: <a href="mailto:ADRESSE@EXEMPLE.COM">ADRESSE@EXEMPLE.COM</a></h3>
<h3>Téléphone: <a href="tel:418-000-0000">418-000-0000</a></h3>
<h4>524 rue Principale</h4>
<h4>Saint-Honoré-de-Shenley QC</h4>
<h4>G0M 1V0</h4>
```

Pensez à mettre à jour **les deux** l'adresse affichée et le lien `mailto:` / `tel:`.

### Modifier le texte de mission

Fichier `index.html` (et `services-tous.html`), section « Notre mission », lignes ~166 à 213. Chaque paragraphe est dans une balise `<p>`.

### Remplacer une photo de réalisation

1. Déposer la nouvelle image dans le dossier du service (ex. `images/fabrication/`).
2. Ouvrir la page correspondante (ex. `services-fabrication.html`).
3. Modifier le `src` de la `<figure>` :

```html
<figure>
  <img src="images/fabrication/ma-nouvelle-photo.jpg" alt="Description de la réalisation" loading="lazy" style="max-height:60vh"/>
  <figcaption>Titre de la réalisation <small>Détail</small></figcaption>
</figure>
```

### Modifier le logo

Remplacer `assets/img/logo-1.webp` en conservant le même nom, ou modifier les deux occurrences (en-tête et pied de page) dans chaque page :

```html
<img src="assets/img/logo-1.webp" alt="Logo Mécanique Luc Vallerand">
```

### Modifier l'apparence (design)

Les styles de la phase 1 sont regroupés dans **`assets/css/phase1.css`** : couleurs, typographie, bannière, sections, galeries, pied de page et bouton d'appel mobile. Modifier ce fichier plutôt que `assets/sass/style.css` pour conserver le thème d'origine intact.

### Modifier les liens sociaux

Remplacer les `href="#"` des blocs suivants :

- En-tête (`.banner__area-bottom-icon`)
- Pied de page (`.footer__area-widget-about-social`)

```html
<li><a href="https://www.facebook.com/VOTRE-PAGE" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="https://www.instagram.com/VOTRE-COMPTE" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></li>
```

### Modifier la vidéo YouTube

Remplacer l'identifiant dans l'URL :

```html
<a class="video-popup" href="https://www.youtube.com/embed/NOUVEL_ID">
```

Fichiers concernés : `index.html` et `services-tous.html`.

---

## 15. Ajouter une nouvelle page de service

1. **Dupliquer** une page existante, par exemple `services-decoupe.html` → `services-soudage.html`.
2. Modifier :
   - le `<title>` et la `meta description` ;
   - le `<h2>` et le `<h3>` de la bannière ;
   - les images de la galerie.
3. Ajouter le lien dans **le menu principal** de toutes les pages :

```html
<li><a href="services-soudage.html">Soudage</a></li>
```

4. Ajouter la carte correspondante sur l'accueil (`index.html`) et éventuellement dans `services-tous.html`.
5. Ajouter une vignette dans le carrousel `.features-slider` si désiré.
6. Tester le lien sur toutes les pages et sur mobile.

---

## 16. Problèmes connus et points à corriger

> **Phases 0 à 3 appliquées le 11 novembre 2026.** Les points marqués « ✅ Corrigé » sont traités dans le code actuel ; les modifications des phases 0 à 2 sont commitées, la phase 3 est en attente de commit. L'image de la bannière a été remplacée par `images/pickup2.webp`.

| # | Problème | Emplacement | Priorité | Statut |
|---|---|---|---|---|
| 1 | La carte « Réparation » pointe vers `services-tous.html` au lieu de `services-reparation.html` | `index.html`, `services-tous.html` (~ligne 283) | Haute | ✅ Corrigé |
| 2 | Le bouton vidéo de l'accueil utilise `popup-youtube` au lieu de `video-popup` : la modale ne s'ouvre pas | `index.html` (~ligne 298) | Haute | ✅ Corrigé |
| 3 | Liens Facebook et Instagram vides (`#`) | Toutes les pages | Haute | ⏳ URL réelles à fournir |
| 4 | `<title>` identique et descriptions vides | Toutes les pages | Haute | ✅ Corrigé (8 titres et descriptions uniques) |
| 5 | Sous-titres `<h3>...</h3>` non rédigés | 5 pages de service | Moyenne | ✅ Corrigé |
| 6 | Légendes de galerie provisoires `a b` | 5 pages de service | Moyenne | ✅ Corrigé |
| 7 | Paragraphes vides `<p></p>` sous les cartes de services | `index.html`, `services-tous.html` | Moyenne | ✅ Corrigé |
| 8 | Numérotation dupliquée « 04 » pour Modification et Réparation | `index.html`, `services-tous.html` | Moyenne | ✅ Corrigé (01 à 05) |
| 9 | `services-tous.html` est une copie de l'accueil | Racine | Moyenne | ✅ Corrigé : vraie page « Nos services » (phase 2) |
| 10 | Menu « Accueil » incohérent (`#` vs URL absolue) | Toutes les pages | Basse | ✅ Corrigé (`index.html`) |
| 11 | Attributs `alt` vides | Toutes les pages | Moyenne | ✅ Corrigé sur les images de contenu ; icônes décoratives laissées vides |
| 12 | Symbole SVG `#close` absent : croix de fermeture de la visionneuse possiblement invisible | Toutes les pages | Basse | ✅ Corrigé : croix dessinée en CSS (phase 1) |
| 13 | Chemins d'images avec antislashs et accents | Pages de service | Basse | ✅ Antislashs remplacés par `/` ; dossiers accentués conservés |
| 14 | Police `Inter` déclarée mais non importée | `assets/sass/style.css` | Basse | ✅ Corrigé : Inter importée dans `phase1.css` |
<|end|> 15 | Dossiers/fichiers inutilisés : `bootstrap/`, `.vs/`, `*.old`, doublons PNG | Racine | Basse | ✅ Corrigé en phase 3 (sauf `.vs/`, à exclure via `.gitignore`) |
| 16 | Absence de `robots.txt`, `sitemap.xml`, `404.html` | Racine | Basse | ✅ Corrigé (phase 2) |
| 17 | Pas de bannière de consentement Analytics | Toutes les pages | Selon juridiction | ⏳ À évaluer |
| 18 | Visionneuse non utilisable au clavier | `assets/js/custom.js` | Moyenne | ✅ Corrigé : Entrée/Espace, Échap, focus géré (phase 1) |
| 19 | Pas de bouton d'appel mobile | Toutes les pages | Moyenne | ✅ Corrigé : `.mlv-callbar` sous 991 px (phase 1) |
| 20 | Pas de `<h1>` ni de sections de réassurance sur l'accueil | `index.html`, pages de service | Haute | ✅ Corrigé (phase 1) |
| 21 | CSS et polices bloquants (Font Awesome ~221 Ko, Bootstrap ~160 Ko, `style.css` ~129 Ko ; polices Google en `@import`) | Toutes les pages | Moyenne | ⏳ À optimiser (purge CSS, sous-ensemble Font Awesome, `preconnect`) |
| 22 | LCP supérieur à 2,5 s en local (7,0 à 7,4 s) | Accueil, Fabrication | Haute | ⏳ Mesure réelle après déploiement |

---

## 17. Recommandations d'amélioration

### Contenu

- ✅ Rédiger un vrai texte de présentation pour chaque service (343 à 373 mots par page, phase 2).
- ✅ Remplacer les légendes provisoires par des descriptions de réalisations (fait en phase 0).
- ✅ Ajouter les sections « Pourquoi nous choisir » et « Notre processus » (fait en phase 1).
- Ajouter des témoignages clients (uniquement réels et autorisés) ou des projets phares.
- Ajouter des horaires d'ouverture et une zone de service sur la page contact.
- Envisager un formulaire de contact (via un service externe comme Formspree, Netlify Forms ou un simple `mailto:` amélioré).

### Technique

- ✅ Uniformiser les chemins d'images : barres obliques `/` (fait en phase 0) ; renommer encore les dossiers accentués si souhaité.
- ✅ Convertir toutes les photos en WebP et générer des miniatures (phase 3).
- ✅ Ajouter `width` et `height` aux images (phase 3).
- ✅ Ajouter `rel="noopener"` à tous les liens `target="_blank"`.
- ✅ Nettoyer les fichiers et dossiers inutilisés (phase 3).
- Mettre en place un fichier `.gitignore` pour exclure `.vs/`.
- ✅ Ajouter une page `404.html` personnalisée (phase 2).
- ✅ Charger les fonds de section à la demande (phase 3).
- Centraliser l'en-tête et le pied de page (template) ou migrer vers un générateur statique (Hugo, Eleventy, Astro) si le site grandit.

### SEO et performance

- ✅ Créer `sitemap.xml` et `robots.txt` (phase 2).
- ✅ Ajouter les données structurées `LocalBusiness`, `Service` et `FAQPage` (phase 2).
- ✅ Déclarer `rel="canonical"` et Open Graph (phase 2).
- ✅ Précharger la bannière et l'image LCP (phase 3).
- ✅ Suivre les événements GA4 (appels, courriels, CTA, services) (phase 3).
- Soumettre le sitemap dans Google Search Console et Bing Webmaster Tools après la mise en ligne.
- Compresser davantage le CSS (purge) et les polices (sous-ensemble, auto-hébergement) — principal frein restant.
- Vérifier les Core Web Vitals avec PageSpeed Insights après déploiement.

### Accessibilité

- ✅ Renseigner tous les `alt` (phase 0).
- ✅ Vérifier les contrastes de texte (orange soutenu `#C93A0E` pour les aplats avec texte blanc, phase 1).
- ✅ Ajouter `aria-label` aux liens iconographiques (réseaux sociaux, retour en haut).
- ✅ S'assurer que la visionneuse est utilisable au clavier (Entrée/Espace, Échap, focus géré).
- ✅ Ajouter des états de focus visibles (`:focus-visible`).
- Ajouter un lien d'évitement (« Aller au contenu »).

---

## 18. Checklist avant mise en ligne

- [x] Toutes les pages s'ouvrent sans erreur dans la console du navigateur (vérifié en local, 4 tailles d'écran).
- [x] Les menus et sous-menus fonctionnent sur ordinateur et mobile.
- [x] Le carrousel de services défile correctement.
- [x] Le bouton vidéo ouvre bien la modale YouTube.
- [ ] Les liens Facebook et Instagram sont renseignés.
- [x] Le courriel et le téléphone sont cliquables et exacts.
- [x] Chaque page a un `<title>` et une `meta description` uniques.
- [x] Chaque page a un seul `<h1>`.
- [x] Chaque page publique déclare une URL canonique et des balises Open Graph.
- [x] Les données structurées JSON-LD sont présentes et valides syntaxiquement.
- [x] `sitemap.xml`, `robots.txt` et `404.html` sont en place.
- [x] Toutes les images ont un attribut `alt`.
- [x] Les images sont optimisées (WebP, `srcset`, `width`/`height`, préchargements) — LCP réel à vérifier après déploiement.
- [x] Les bibliothèques inutilisées ont été supprimées (phase 3).
- [x] La visionneuse de galerie fonctionne à la souris et au clavier.
- [x] Le bouton d'appel mobile s'affiche sous 991 px.
- [x] Aucun texte provisoire (`...`, `a b`, `#`) ne reste visible, sauf les liens sociaux en attente.
- [x] Le site est testé sur mobile, tablette et ordinateur.
- [ ] Le domaine `mecaniquelucv.com` répond en HTTPS.
- [ ] Google Analytics reçoit bien les visites et les événements.
- [ ] Le fichier `CNAME` contient toujours le bon domaine.
- [ ] Une sauvegarde du dépôt est disponible avant les changements majeurs.

---

## Ressources utiles

- [Bootstrap 5 — documentation](https://getbootstrap.com/docs/5.3/)
- [Swiper — documentation](https://swiperjs.com/)
- [Magnific Popup — documentation](https://dimsemenov.com/plugins/magnific-popup/)
- Menu mobile maison (LIB-05) — implémenté dans `assets/js/custom.js`
- [GitHub Pages — documentation](https://docs.github.com/fr/pages)
- [Google Search Central — guide SEO](https://developers.google.com/search/docs?hl=fr)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

*Documentation générée à partir de l'analyse du code source du site. Pour toute modification importante, mettre à jour ce fichier en même temps que le site.*
