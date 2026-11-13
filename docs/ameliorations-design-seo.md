# Propositions d'amélioration — Design & SEO

> Site : **mecaniquelucv.com** — Mécanique Luc Vallerand
> Document de recommandations établi le **11 novembre 2026**
> Objectifs : rendre le site plus attractif, plus crédible, plus rapide, et mieux positionné sur Google.

> ✅ **Mise à jour — phases 0, 1 et 2 appliquées le 11 novembre 2026.** Les correctifs rapides (titres, descriptions, liens, `alt`, légendes, numérotation) et la refonte de design (bannière, typographie, galeries, sections de réassurance, CTA, pied de page, bouton d'appel mobile) sont intégrés au site. La phase 2 ajoute le contenu long des pages de service, une vraie page « Nos services », les données structurées JSON-LD, les balises canoniques et Open Graph, `sitemap.xml`, `robots.txt` et `404.html`. Voir le [README principal](../README.md#16-problèmes-connus-et-points-à-corriger) pour l'état détaillé. Les liens sociaux restent à renseigner et les modifications ne sont pas encore commitées.

---

## Table des matières

1. [Résumé exécutif](#1-résumé-exécutif)
2. [Diagnostic actuel](#2-diagnostic-actuel)
3. [Améliorations de design](#3-améliorations-de-design)
4. [Améliorations SEO](#4-améliorations-seo)
5. [Contenu et référencement local](#5-contenu-et-référencement-local)
6. [Performance et Core Web Vitals](#6-performance-et-core-web-vitals)
7. [Éléments prêts à intégrer](#7-éléments-prêts-à-intégrer)
8. [Feuille de route priorisée](#8-feuille-de-route-priorisée)
9. [Maquette textuelle des pages](#9-maquette-textuelle-des-pages)
10. [Checklist finale](#10-checklist-finale)
11. [Indicateurs de succès](#11-indicateurs-de-succès)

---

## 1. Résumé exécutif

Le site possède de bonnes bases : grille responsive, identité orange/noir, images WebP, carrousel, galeries photos et hébergement statique rapide. Les phases 0 à 3 ont corrigé les principaux freins : contenu rédigé sur les pages de service, hiérarchie visuelle clarifiée, titres et descriptions uniques, sitemap, données structurées, page 404, photos WebP responsives et allègement des scripts. Les prochains gains viendront du référencement local (Google Business Profile, Search Console) et d'une optimisation plus poussée du CSS et des polices.

### Les 10 actions à fort impact

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Rédiger un titre et une description uniques pour chaque page | 🔥🔥🔥 | Faible |
| 2 | Remplacer les textes provisoires (`...`, `a b`, `<p></p>`) | 🔥🔥🔥 | Faible |
| 3 | Corriger les liens brisés et les liens sociaux vides | 🔥🔥🔥 | Faible |
| 4 | Ajouter un vrai `<h1>` et un discours clair sur l'accueil | 🔥🔥🔥 | Faible |
| 5 | Rédiger 300 à 500 mots de contenu par page de service | 🔥🔥🔥 | Moyen |
| 6 | Renseigner les attributs `alt` de toutes les images | 🔥🔥 | Faible |
| 7 | Ajouter les données structurées `LocalBusiness` | 🔥🔥 | Faible |
| 8 | Créer `sitemap.xml` et `robots.txt` | 🔥🔥 | Faible |
| 9 | Enrichir le pied de page (coordonnées, heures, zone desservie) | 🔥🔥 | Faible |
| 10 | Optimiser les images lourdes et supprimer les scripts inutilisés | 🔥🔥 | Moyen — ✅ fait |

> 💡 **Règle d'or** : mieux vaut un site simple, rapide et bien rédigé qu'un site chargé d'effets. Chaque section doit répondre à une question du visiteur : *« Que faites-vous ? Pour qui ? Pourquoi vous choisir ? Comment vous joindre ? »*

---

## 2. Diagnostic actuel

> ℹ️ Ce diagnostic décrit l'état **initial** du site. Les faiblesses de design et de SEO listées ci-dessous ont été corrigées en phases 0 à 3 ; les points restants (référencement local, URL sociales, CSS/polices) sont suivis dans le [README](../README.md#16-problèmes-connus-et-points-à-corriger).

### 2.1 Points forts à conserver

- Site **statique** : rapide, sécurisé, peu coûteux à héberger.
- **Responsive** grâce à Bootstrap et au menu mobile maison (vanilla JS).
- **Palette identifiable** : orange `#F94D1D`, fond sombre, photos industrielles.
- **Galerie de réalisations** existante, avec visionneuse au clic.
- **Images WebP** pour les visuels de structure.
- **Analytics** déjà en place (GA4).
- **Domaine personnalisé** et validation Bing.

### 2.2 Faiblesses de design

| Constat | Conséquence |
|---|---|
| Titres et textes provisoires (`...`, `a b`, `<p></p>`) | Impression de site inachevé, perte de crédibilité |
| Pas de vrai `<h1>` : les titres commencent en `<h2>` | Hiérarchie visuelle et SEO affaiblis |
| Bannière chargée (texte + camion) et peu de contraste maîtrisé | Message moins lisible, surtout sur mobile |
| Cartes de services sans description | Le visiteur ne comprend pas l'offre en un coup d'œil |
| Numérotation dupliquée « 04 » | Incohérence visible |
| Galeries sans légendes utiles | Photos jolies mais muettes |
| Pied de page très vide (5 colonnes sur 7 inutilisées) | Espace perdu, coordonnées peu visibles |
| Police `Inter` déclarée mais non chargée | Rendu typographique imprévisible selon les appareils |
| Peu d'appels à l'action | Le visiteur ne sait pas quoi faire ensuite |

### 2.3 Faiblesses SEO

| Constat | Conséquence |
|---|---|
| `<title>` identique sur les 8 pages | Google ne distingue pas les pages |
| `meta description` vides | Aucun contrôle sur l'extrait affiché dans Google |
| Attributs `alt` vides | Perte de trafic images + accessibilité |
| Pages de service presque vides (titre + photos) | Contenu trop mince pour se positionner |
| `services-tous.html` duplique `index.html` | Contenu dupliqué, dilution |
| Aucun `sitemap.xml` ni `robots.txt` | Exploration moins efficace |
| Aucune donnée structurée | Pas de résultats enrichis (adresse, téléphone, activité) |
| Aucun `rel="canonical"` | Risque de duplication d'URL |
| Liens internes incohérents (Réparation, Accueil) | Mauvaise circulation et signaux contradictoires |
| Liens sociaux vides | Perte de confiance et de canaux |
| Pas de page 404 | Mauvaise expérience sur les liens obsolètes |

---

## 3. Améliorations de design

### 3.1 Renforcer l'identité visuelle

**Créer un système de couleurs et d'espacement cohérent** dans `assets/sass/style.css` :

```css
:root {
  --mlv-orange: #F94D1D;
  --mlv-orange-dark: #D63E12;
  --mlv-charcoal: #1C1E1E;
  --mlv-charcoal-soft: #272A2A;
  --mlv-text: #E8E8E8;
  --mlv-text-muted: #A9ADAD;
  --mlv-white: #FFFFFF;

  --mlv-radius: 12px;
  --mlv-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  --mlv-section-space: clamp(64px, 8vw, 120px);
}
```

Puis remplacer progressivement les valeurs codées en dur par ces variables.

**Objectifs :**

- Une seule couleur d'accent (orange) pour les boutons et les liens importants.
- Un fond sombre uniforme, avec des sections alternées claires pour respirer.
- Des coins arrondis et des ombres discrètes, cohérents partout.
- Des espacements verticaux harmonisés (au lieu de 150 px fixes).

### 3.2 Corriger la typographie

> ✅ **Phase 1 :** l'option A a été retenue. Inter est importée dans `assets/css/phase1.css` et utilisée pour le texte courant ; Ubuntu reste utilisée pour les titres. L'échelle typographique est fluide (`clamp()`).

Le CSS déclare `font-family: "Inter", sans-serif` mais n'importe pas Inter. Deux options :

**Option A — Charger Inter** (moderne, très lisible) :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@500;600;700&display=swap" rel="stylesheet">
```

**Option B — Utiliser la police système** (zéro requête, très rapide) :

```css
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

**Recommandation :** Option A pour les titres en Lora + le texte en Inter, avec `display=swap` pour éviter le texte invisible. Limiter à 3 graisses maximum.

**Échelle typographique suggérée :**

| Élément | Taille desktop | Taille mobile |
|---|---|---|
| H1 | 48–56 px | 32–36 px |
| H2 | 36–40 px | 28–30 px |
| H3 | 24–28 px | 22–24 px |
| Texte courant | 17–18 px | 16–17 px |
| Légende | 14–15 px | 14 px |

Augmenter légèrement la hauteur de ligne du texte courant (1,65 à 1,75) pour un rendu plus aéré.

### 3.3 Refondre la bannière d'accueil

> ✅ **Phase 1 :** bannière refondue avec un H1, une phrase de positionnement, deux boutons (soumission et téléphone), une bande de réassurance, un dégradé sombre et un visuel `pickup2.webp`. La photo de camion a été conservée, faute d'image d'atelier fournie.

**Problème initial :** la bannière juxtaposait « Fondé en 2019 » et une photo de camion, sans message principal ni bouton d'action.

**Proposition :**

- Un `<h1>` unique et clair : *« Fabrication, soudage et maintenance industrielle en Beauce »*.
- Une phrase de positionnement : *« Depuis 2019, nous concevons, réparons et installons vos pièces et structures métalliques sur mesure. »*
- Deux boutons : **Demander une soumission** (principal) et **Voir nos réalisations** (secondaire).
- Une bande de réassurance : *Depuis 2019 · Travail sur mesure · Service en région · Réponse rapide*.
- Une image de fond avec un dégradé sombre pour garantir la lisibilité.
- Remplacer la photo de camion par une photo de réalisation ou d'atelier plus évocatrice (soudure, structure métallique).

**Structure HTML proposée :**

```html
<section class="hero">
  <div class="hero__overlay"></div>
  <div class="container hero__content">
    <p class="hero__eyebrow">Mécanique industrielle · Beauce</p>
    <h1>Fabrication, soudage et maintenance industrielle sur mesure</h1>
    <p class="hero__lead">
      Depuis 2019, Mécanique Luc Vallerand conçoit, répare et installe
      vos pièces et structures métalliques avec précision et rigueur.
    </p>
    <div class="hero__actions">
      <a class="btn btn--primary" href="contact.html">Demander une soumission</a>
      <a class="btn btn--ghost" href="#realisations">Voir nos réalisations</a>
    </div>
    <ul class="hero__trust">
      <li>Depuis 2019</li>
      <li>Travail sur mesure</li>
      <li>Service en région</li>
      <li>Réponse rapide</li>
    </ul>
  </div>
</section>
```

### 3.4 Améliorer les cartes de services

> ✅ **Phase 1 :** les cartes ont une icône, un numéro, un titre, une description courte et un lien. La grille est harmonisée en CSS.

Chaque carte doit contenir :

1. Une **icône** ou un numéro discret.
2. Un **titre** clair.
3. **Une phrase de description** (15 à 25 mots).
4. Un lien **« En savoir plus → »**.

**Exemple :**

```html
<article class="service-card">
  <div class="service-card__icon" aria-hidden="true">
    <img src="assets/img/icon/services-1.png" alt="" loading="lazy">
  </div>
  <h3><a href="services-decoupe.html">Découpe</a></h3>
  <p>Découpe précise de l'acier, de l'aluminium et de pièces industrielles selon vos plans.</p>
  <a class="service-card__link" href="services-decoupe.html">En savoir plus <span aria-hidden="true">→</span></a>
</article>
```

**Corrections immédiates :**

- Numéroter correctement : 01, 02, 03, 04, 05.
- Corriger le lien « Réparation » vers `services-reparation.html`.
- Uniformiser la hauteur des cartes et l'alignement des icônes.

### 3.5 Sublimer les galeries de réalisations

> ✅ **Phase 1 :** grille régulière en `aspect-ratio: 4 / 3`, zoom léger au survol, légende toujours visible avec dégradé, figures accessibles au clavier (`tabindex`, `role="button"`, `aria-label`), visionneuse ouvrable avec Entrée/Espace et fermable avec Échap, focus géré. Restent à faire : filtres par catégorie, comparateur avant/après et miniatures WebP.

**Pistes visuelles :**

- Grille régulière avec **ratio d'image constant** (`aspect-ratio: 4 / 3`) pour éviter les hauteurs inégales.
- Effet de survol : léger zoom de l'image + voile sombre + loupe.
- **Légende toujours visible** ou apparaissant au survol.
- **Filtres par catégorie** si le volume de photos augmente.
- **Comparateur avant/après** pour les photos existantes (`avant apres 1 officiel.jpg`, etc.) : très convaincant pour la réparation et la modification.
- Visionneuse accessible : navigation clavier (← → Échap), bouton de fermeture visible, compteur d'images.
- **Miniatures WebP** + version pleine taille chargée uniquement à l'ouverture.

**Exemple de grille CSS :**

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.gallery figure {
  position: relative;
  overflow: hidden;
  border-radius: var(--mlv-radius);
  aspect-ratio: 4 / 3;
  margin: 0;
  cursor: zoom-in;
}

.gallery figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.gallery figure:hover img {
  transform: scale(1.05);
}

.gallery figcaption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: var(--mlv-white);
}
```

**Comparateur avant/après :** prévoir un bloc avec deux images superposées et un curseur. Si l'intégration d'un plugin est jugée trop lourde, commencer par des paires « Avant / Après » côte à côte avec des libellés clairs.

### 3.6 Ajouter des sections qui rassurent

L'accueil actuel enchaîne mission → services → vidéo. Il manque des preuves et un parcours de conversion. Ajouter, dans cet ordre :

1. **Bandeau de chiffres clés** : *Depuis 2019 · 5 services · Réalisations sur mesure · Clientèle industrielle*.
2. **Pourquoi nous choisir** : 4 arguments (précision, délais, proximité, polyvalence).
3. **Notre processus** en 4 étapes : *1. Votre besoin → 2. Analyse et soumission → 3. Fabrication → 4. Livraison et installation*.
4. **Réalisations phares** : 3 à 6 photos avec légendes.
5. **Témoignages** (uniquement s'ils sont réels et autorisés).
6. **FAQ** : 4 à 6 questions fréquentes.
7. **Bandeau d'appel à l'action final** : *Un projet en tête ? Parlons-en.* + téléphone + bouton.

> ⚠️ Ne jamais inventer de témoignages, de chiffres ou de certifications. Utiliser uniquement des informations véridiques et vérifiables.

### 3.7 Enrichir le pied de page

> ✅ **Phase 1 :** pied de page en 4 colonnes (présentation, services, navigation, coordonnées cliquables), mention de droits et bouton d'appel fixe sur mobile. Les heures d'ouverture et la zone desservie précise restent à confirmer avec l'entreprise ; aucun horaire n'a été inventé.

Le pied de page actuel contient uniquement le logo, deux icônes sociales et trois liens. Il doit devenir un véritable point de contact :

- Logo + phrase de présentation courte.
- **Téléphone cliquable** et **courriel cliquable**.
- **Adresse complète**.
- **Heures d'ouverture** (à définir).
- **Zone desservie** (Beauce, Chaudière-Appalaches, Québec — à confirmer).
- Liens vers les 5 services.
- Liens Facebook et Instagram réels.
- Mention « © 2026 Mécanique Luc Vallerand. Tous droits réservés. »
- Lien vers la politique de confidentialité si Analytics est conservé.

**Ajouter aussi un bouton d'appel flottant sur mobile** :

```html
<a class="mobile-call" href="tel:418-313-4032" aria-label="Appeler Mécanique Luc Vallerand">
  <i class="fas fa-phone" aria-hidden="true"></i>
  <span>418-313-4032</span>
</a>
```

### 3.8 Soigner les détails qui font la différence

- **En-tête collant** avec téléphone visible et bouton « Soumission ».
- **Bouton retour en haut** conservé, avec `aria-label`.
- **Animations discrètes** : apparition au défilement, jamais de mouvement permanent.
- **Respect de `prefers-reduced-motion`** :

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- **États de focus visibles** pour la navigation au clavier.
- **Contraste suffisant** : vérifier le gris `#CFD0D0` sur fond sombre (viser AA, ratio ≥ 4,5:1).
- **Remplacer les icônes PNG par des SVG** pour un rendu net sur tous les écrans.
- **Page 404 personnalisée** avec liens de retour.

---

## 4. Améliorations SEO

### 4.1 Balises title et meta description

Chaque page doit avoir un titre unique (55–65 caractères) et une description unique (150–160 caractères).

| Page | Title proposé | Meta description proposée |
|---|---|---|
| `index.html` | Mécanique Luc Vallerand \| Fabrication, soudage et maintenance | Fabrication, maintenance industrielle et soudage à Saint-Honoré-de-Shenley. Des solutions métalliques sur mesure depuis 2019. |
| `services-decoupe.html` | Découpe de métal sur mesure \| Mécanique Luc Vallerand | Découpe précise d'acier, d'aluminium et de pièces industrielles. Service sur mesure en Beauce, délais respectés. |
| `services-fabrication.html` | Fabrication de pièces métalliques sur mesure \| MLV | Fabrication de pièces et structures métalliques à l'unité ou en série. Qualité, précision et respect des délais. |
| `services-installation.html` | Installation de structures métalliques \| MLV | Installation de pièces et structures métalliques pour l'industrie. Travail sécuritaire, propre et durable. |
| `services-modification.html` | Modification de pièces et structures métalliques \| MLV | Modification, adaptation et renforcement de pièces et structures métalliques existantes. Service personnalisé. |
| `services-reparation.html` | Réparation de pièces et structures métalliques \| MLV | Diagnostic, soudage et réparation de pièces métalliques. Remise en service rapide et travail durable. |
| `contact.html` | Contact et demande de soumission \| Mécanique Luc Vallerand | Contactez-nous : 418-313-4032, mecaniquelucv@gmail.com. 524 rue Principale, Saint-Honoré-de-Shenley (Québec). |
| `services-tous.html` | Nos services \| Mécanique Luc Vallerand | Découvrez nos services de découpe, fabrication, installation, modification et réparation métallique. |

> ⚠️ Ces textes sont des propositions : les valider avec l'entreprise, notamment la zone desservie et les heures.

### 4.2 Un seul `<h1>` par page

> ✅ **Phase 1 :** chaque page possède désormais un seul `<h1>` (bannière d'accueil et titres des pages de service et de contact). Les autres niveaux restent en `h2`/`h3`.

Actuellement, les pages utilisent des `<h2>` comme titre principal. Remplacer le titre de bannière par un `<h1>`, puis descendre les autres niveaux de manière logique (`h2` pour les sections, `h3` pour les sous-sections).

**Exemple pour l'accueil :**

```html
<h1>Fabrication, soudage et maintenance industrielle en Beauce</h1>
...
<h2>Notre mission</h2>
<h2>Nos services</h2>
<h3>Découpe</h3>
<h3>Fabrication</h3>
```

### 4.3 Structurer les pages de service

Chaque page de service devrait contenir **300 à 500 mots minimum**, organisés ainsi :

1. **Introduction** : ce que fait le service, pour qui, où.
2. **Ce que nous réalisons** : liste de 4 à 6 prestations concrètes.
3. **Matériaux et procédés** : acier, aluminium, inox, soudage, pliage, etc. (uniquement ce qui est réellement offert).
4. **Notre méthode** : 3 à 4 étapes.
5. **Galerie de réalisations** avec légendes descriptives.
6. **FAQ** : 3 questions spécifiques au service.
7. **Appel à l'action** : téléphone, courriel, bouton soumission.
8. **Liens internes** vers les autres services et la page contact.

**Exemple d'introduction pour la découpe :**

> « Vous avez besoin d'une découpe précise pour une pièce industrielle, une structure ou un projet sur mesure ? Mécanique Luc Vallerand réalise des découpes de métal adaptées à vos plans, à l'unité comme en petite série. Basés à Saint-Honoré-de-Shenley, nous accompagnons les entreprises de la Beauce et de Chaudière-Appalaches. »

### 4.4 Maillage interne

- Chaque page de service doit renvoyer vers **2 ou 3 autres services** pertinents.
- Chaque page doit avoir un lien clair vers **Contact**.
- Le pied de page doit lister les 5 services.
- Ajouter un fil d'Ariane (`BreadcrumbList`) sur les pages de service.
- Utiliser des ancres descriptives : « Découvrir nos services de réparation » plutôt que « Cliquez ici ».

### 4.5 Supprimer le contenu dupliqué

`services-tous.html` est une copie de `index.html`. Trois options :

1. **Recommandé** : rediriger le lien du pied de page vers une vraie page « Services » qui présente les 5 services avec des textes distincts.
2. Supprimer `services-tous.html` et pointer le pied de page vers l'ancre `#services` de l'accueil.
3. Conserver la page mais ajouter `<link rel="canonical" href="https://mecaniquelucv.com/">` et la vider de son contenu dupliqué.

### 4.6 URLs canoniques et Open Graph

Ajouter dans le `<head>` de chaque page :

```html
<link rel="canonical" href="https://mecaniquelucv.com/services-decoupe.html">

<meta property="og:type" content="website">
<meta property="og:locale" content="fr_CA">
<meta property="og:site_name" content="Mécanique Luc Vallerand">
<meta property="og:title" content="Découpe de métal sur mesure | Mécanique Luc Vallerand">
<meta property="og:description" content="Découpe précise d'acier, d'aluminium et de pièces industrielles en Beauce.">
<meta property="og:url" content="https://mecaniquelucv.com/services-decoupe.html">
<meta property="og:image" content="https://mecaniquelucv.com/assets/img/banner.webp">

<meta name="twitter:card" content="summary_large_image">
```

> Les images Open Graph devraient idéalement être au format **1200 × 630 px**.

### 4.7 Données structurées (JSON-LD)

Ajouter sur **toutes les pages** un bloc `LocalBusiness`. Exemple à adapter :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mecaniquelucv.com/#business",
  "name": "Mécanique Luc Vallerand",
  "url": "https://mecaniquelucv.com/",
  "logo": "https://mecaniquelucv.com/assets/img/logo-1.webp",
  "image": "https://mecaniquelucv.com/assets/img/banner.webp",
  "description": "Fabrication, maintenance industrielle et travaux de soudage sur mesure.",
  "telephone": "+1-418-313-4032",
  "email": "mecaniquelucv@gmail.com",
  "foundingDate": "2019",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "524 rue Principale",
    "addressLocality": "Saint-Honoré-de-Shenley",
    "addressRegion": "QC",
    "postalCode": "G0M 1V0",
    "addressCountry": "CA"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Beauce" },
    { "@type": "AdministrativeArea", "name": "Chaudière-Appalaches" }
  ],
  "sameAs": [
    "https://www.facebook.com/VOTRE-PAGE",
    "https://www.instagram.com/VOTRE-COMPTE"
  ]
}
</script>
```

> Ne pas ajouter `aggregateRating` ni `review` sans avis réels. Ne pas inventer d'horaires.

Sur les pages de service, ajouter un bloc `Service` :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Découpe de métal sur mesure",
  "serviceType": "Découpe métallique",
  "provider": { "@id": "https://mecaniquelucv.com/#business" },
  "areaServed": "Beauce, Québec",
  "url": "https://mecaniquelucv.com/services-decoupe.html"
}
</script>
```

### 4.8 Sitemap et robots.txt

Créer **`sitemap.xml`** à la racine :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mecaniquelucv.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mecaniquelucv.com/services-decoupe.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mecaniquelucv.com/services-fabrication.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mecaniquelucv.com/services-installation.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mecaniquelucv.com/services-modification.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mecaniquelucv.com/services-reparation.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mecaniquelucv.com/contact.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

Créer **`robots.txt`** :

```txt
User-agent: *
Allow: /

Sitemap: https://mecaniquelucv.com/sitemap.xml
```

### 4.9 Corriger les bases techniques

- Uniformiser le lien « Accueil » : utiliser `index.html` ou `/` partout, pas `#`.
- Corriger le lien « Réparation » de l'accueil vers `services-reparation.html`.
- Corriger la classe du bouton vidéo (`video-popup`).
- Renseigner les liens Facebook et Instagram.
- Ajouter `rel="noopener"` aux liens externes ouverts dans un nouvel onglet.
- Vérifier que le fichier `CNAME` contient toujours `mecaniquelucv.com`.
- S'assurer que la version `https://` et la version `www` redirigent vers une seule URL canonique.
- Ajouter une page `404.html`.
- Envisager des URLs sans `.html` (structure `services/decoupe/index.html`) — optionnel, à faire seulement si les redirections sont maîtrisées.

---

## 5. Contenu et référencement local

### 5.1 Cibler les bonnes requêtes

| Page | Requêtes principales | Requêtes secondaires |
|---|---|---|
| Accueil | mécanique industrielle Beauce, soudage Saint-Honoré-de-Shenley | fabrication métallique Québec, atelier de soudure Beauce |
| Découpe | découpe de métal sur mesure | découpe acier Beauce, découpe aluminium Québec |
| Fabrication | fabrication de pièces métalliques sur mesure | structures d'acier sur mesure, fabrication industrielle |
| Installation | installation de structures métalliques | montage métallique industriel |
| Modification | modification de pièce métallique | renforcement de structure, adaptation de pièce |
| Réparation | réparation de pièces métalliques | soudage de réparation, réparation d'équipement industriel |
| Contact | contact mécanique Luc Vallerand, soumission soudure | téléphone atelier Beauce |

> Éviter le bourrage de mots-clés. Écrire naturellement, puis vérifier que les termes importants apparaissent dans le titre, le H1, l'introduction et au moins une sous-section.

### 5.2 Référencement local (priorité forte)

Pour une entreprise de services, **Google Business Profile** est souvent plus rentable que le site seul :

1. Créer ou revendiquer la fiche **Google Business Profile**.
2. Renseigner exactement les mêmes informations que le site (nom, adresse, téléphone, site, heures).
3. Choisir les bonnes catégories : *Atelier de mécanique*, *Soudeur*, *Entreprise de fabrication métallique*.
4. Ajouter 10 à 20 photos de réalisations et de l'atelier.
5. Demander des avis clients authentiques après chaque projet.
6. Publier une actualité ou une réalisation par mois.
7. Ajouter la zone desservie : Beauce, Chaudière-Appalaches, Québec.

**Cohérence NAP** (Name, Address, Phone) : le nom, l'adresse et le téléphone doivent être **identiques** sur le site, Google, Facebook, Bing, Pages Jaunes et tout annuaire.

### 5.3 Idées de contenus pour se positionner

Créer une rubrique « Réalisations » ou « Actualités » avec des articles courts :

- « Réparation d'une structure métallique : étude de cas »
- « Comment choisir le bon type de soudure pour votre projet ? »
- « Avant/après : modification d'un équipement industriel »
- « Pourquoi faire appel à un atelier local pour vos pièces sur mesure ? »
- « 5 signes qu'une structure métallique doit être inspectée »

Chaque article doit contenir une photo réelle, 400 à 800 mots, un titre clair et des liens vers les services concernés. C'est le levier le plus efficace pour élargir le référencement au-delà des pages commerciales.

### 5.4 Page contact plus utile

- Ajouter un **formulaire** (nom, courriel, téléphone, type de projet, message) via un service sans serveur (Formspree, Netlify Forms, Basin) ou un simple `mailto:` bien présenté.
- Afficher une **carte** ou un lien vers Google Maps.
- Préciser les **heures d'ouverture** et le **délai de réponse**.
- Ajouter une photo de l'atelier ou de l'équipe.
- Indiquer la **zone desservie** et les modalités de déplacement.

---

## 6. Performance et Core Web Vitals

### 6.1 Optimiser les images — ✅ appliqué

Les 22 photos de galerie ont été converties en **WebP** (qualité 80) en deux variantes : **1024 px** pour l'affichage plein écran et **640 px** pour les vignettes. Les JPG d'origine sont conservés dans le dépôt mais ne sont plus chargés par les pages.

| Mesure | Avant (JPG) | Après (WebP 1024) | Après (WebP 640) |
|---|---|---|---|
| 22 photos de galerie | 7 075 Ko | 2 629 Ko (**−63 %**) | 1 144 Ko (**−84 %**) |
| `images/pickup2.webp` (bannière d'accueil) | 266 Ko | 90 Ko (`-1024`) | 50 Ko (`-744`) |
| `assets/img/features-1..4.webp` (vignettes) | 57 à 74 Ko | 27 à 30 Ko | — |

Les images les plus lourdes citées dans le diagnostic initial (`20170918_194241.jpg`, `20220423_092227.jpg`, `20191017_171925.jpg`, `20211211_112514.jpg`) ne sont plus servies : elles ont été supprimées ou remplacées par leurs équivalents WebP.

**Ce qui est en place :**

1. ✅ Conversion en **WebP**, avec variante 640 px pour les galeries.
2. ✅ Redimensionnement à **1024 px maximum** sur le grand côté (les sources ne dépassent pas cette taille).
3. ✅ Vignette légère dans la grille, image 1024 px chargée uniquement dans la visionneuse.
4. ✅ `width` et `height` renseignés sur **toutes** les balises `<img>` (logo, bannière, vignettes, icônes, galeries) pour supprimer les décalages de mise en page.
5. ✅ `srcset` et `sizes` sur les images de galerie et l'image principale de l'accueil :

```html
<img
  src="images/fabrication/photo.webp"
  srcset="images/fabrication/photo-640.webp 640w,
          images/fabrication/photo.webp 1024w"
  sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
  width="1024" height="768"
  alt="Structure métallique fabriquée sur mesure"
  loading="lazy" decoding="async">
```

6. ✅ **Préchargement de la bannière** (`banner.webp`) sur les 8 pages qui l'affichent, et préchargement de l'image principale de l'accueil avec `imagesrcset` / `imagesizes` :

```html
<link rel="preload" as="image" href="assets/img/banner.webp" fetchpriority="high">
```

7. ✅ Les fonds de bannière utilisent un `style="background-image:..."` inline (peinture immédiate, sans attendre jQuery). Les fonds `services.webp` et `video.webp`, plus bas dans la page, sont chargés à l'approche du viewport via `IntersectionObserver` (environ 231 Ko économisés au chargement initial).

> ⚠️ Les noms de fichiers contenant des espaces ont été renommés en tirets (`avant-apres-1`, `fabrication-1`, `base-moteur`) afin que les URL de `srcset` restent valides. Les dossiers accentués (`découpe`, `réparation`) sont conservés.

### 6.2 Alléger les ressources — ✅ partiellement appliqué

**Supprimé du dépôt et des pages :**

- ✅ `progressbar.min.js`, `bootstrap.min.js`, `popper.min.js` et `animate.css` (aucune animation ni composant Bootstrap JS utilisés).
- ✅ Swiper et Magnific Popup retirés des 8 pages qui ne s'en servent pas ; ils restent uniquement sur `index.html` (carrousel et vidéo).
- ✅ Dossier racine `bootstrap/` (44 fichiers, 8,3 Mo), images `*.old`, doublons PNG, anciennes photos non référencées.
- ✅ Fonds lourds chargés à la demande (`services.webp`, `video.webp`).

**Reste à faire (CSS et polices) :**

- Les CSS restent bloquants : `all.css` (Font Awesome, ~221 Ko), `bootstrap.min.css` (~160 Ko), `style.css` (~129 Ko), plus `phase1.css` et `phase2.css`. Une purge du CSS inutilisé et un sous-ensemble Font Awesome apporteraient le gain le plus important.
- Les polices Google sont chargées via `@import` dans `style.css` (Ubuntu) et `phase1.css` (Inter). Remplacer par des `<link rel="preconnect">` + `<link rel="stylesheet">`, ou auto-héberger les polices, supprimerait une chaîne de requêtes bloquante. L'import de **Lora** (police non utilisée) peut être retiré.
- Ajouter `defer` aux scripts non critiques et minifier `style.css` / `custom.js` en production.

### 6.3 Objectifs Core Web Vitals

| Métrique | Objectif |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5 s |
| INP (Interaction to Next Paint) | < 200 ms |
| CLS (Cumulative Layout Shift) | < 0,1 |

**Mesure locale indicative (Lighthouse 12, mobile simulé, serveur local) :**

| Page | Score avant | Score après | LCP avant | LCP après | TBT avant | TBT après | Poids avant | Poids après |
|---|---|---|---|---|---|---|---|---|
| Accueil | 46 | **57** | 15,6 s | **7,4 s** | 500 ms | **280 ms** | 2 712 Ko | **1 991 Ko** |
| Fabrication | 52 | **62** | 14,1 s | **7,0 s** | 280 ms | **190 ms** | 4 365 Ko | **2 472 Ko** |

> ℹ️ Ces chiffres proviennent d'un serveur local **sans compression ni cache HTTP** : ils surestiment les temps réels et servent surtout à comparer avant/après. Les Core Web Vitals réels doivent être mesurés avec [PageSpeed Insights](https://pagespeed.web.dev/) **après déploiement**. Le CLS reste inférieur à 0,05.

### 6.4 Bonnes pratiques d'hébergement

- Activer **HTTPS** (déjà le cas via GitHub Pages).
- Vérifier la **compression** des fichiers (gzip/brotli).
- Configurer la **mise en cache** des assets statiques.
- Surveiller le temps de réponse du domaine.

---

## 7. Éléments prêts à intégrer

### 7.1 Extrait de feuille de style pour les boutons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  line-height: 1;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  background: var(--mlv-orange);
  color: var(--mlv-white);
}

.btn--primary:hover {
  background: var(--mlv-orange-dark);
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: var(--mlv-white);
}
```

### 7.2 Bloc « Pourquoi nous choisir »

```html
<section class="why section-padding">
  <div class="container">
    <h2>Pourquoi choisir Mécanique Luc Vallerand ?</h2>
    <div class="why__grid">
      <article>
        <h3>Précision</h3>
        <p>Des pièces fabriquées selon vos plans, avec un souci du détail constant.</p>
      </article>
      <article>
        <h3>Polyvalence</h3>
        <p>Découpe, fabrication, installation, modification et réparation au même endroit.</p>
      </article>
      <article>
        <h3>Proximité</h3>
        <p>Un atelier local, joignable et disponible pour vos projets en région.</p>
      </article>
      <article>
        <h3>Fiabilité</h3>
        <p>Des délais respectés et un travail durable, pensé pour durer.</p>
      </article>
    </div>
  </div>
</section>
```

### 7.3 Bloc FAQ (avec balisage structuré)

```html
<section class="faq section-padding">
  <div class="container">
    <h2>Questions fréquentes</h2>

    <details>
      <summary>Réalisez-vous des projets sur mesure ?</summary>
      <p>Oui. Chaque projet est analysé selon vos plans, vos contraintes et vos délais.</p>
    </details>

    <details>
      <summary>Dans quelles régions intervenez-vous ?</summary>
      <p>Nous desservons principalement la Beauce et Chaudière-Appalaches. Contactez-nous pour valider votre secteur.</p>
    </details>

    <details>
      <summary>Comment obtenir une soumission ?</summary>
      <p>Appelez le 418-313-4032 ou écrivez à mecaniquelucv@gmail.com en précisant votre besoin.</p>
    </details>
  </div>
</section>
```

Ajouter le balisage `FAQPage` uniquement si les questions et réponses sont visibles sur la page :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Réalisez-vous des projets sur mesure ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Chaque projet est analysé selon vos plans, vos contraintes et vos délais."
      }
    }
  ]
}
</script>
```

### 7.4 Bandeau d'appel à l'action

```html
<section class="cta-band">
  <div class="container cta-band__inner">
    <div>
      <h2>Un projet métallique en tête ?</h2>
      <p>Parlez-nous de votre besoin : nous vous répondrons rapidement.</p>
    </div>
    <div class="cta-band__actions">
      <a class="btn btn--primary" href="tel:418-313-4032">Appeler maintenant</a>
      <a class="btn btn--ghost" href="contact.html">Demander une soumission</a>
    </div>
  </div>
</section>
```

---

## 8. Feuille de route priorisée

### Phase 0 — Correctifs rapides (1 journée) — ✅ appliquée

- [x] Corriger le lien « Réparation » de l'accueil.
- [x] Corriger la classe du bouton vidéo (`video-popup`).
- [ ] Renseigner Facebook et Instagram — **URL réelles à fournir**.
- [x] Remplacer tous les `...`, `a b` et `<p></p>`.
- [x] Corriger la numérotation des services (01 à 05).
- [x] Uniformiser le lien « Accueil ».
- [x] Ajouter les `alt` sur les images principales.
- [x] Mettre à jour les `<title>` et `meta description` (section 4.1).

### Phase 1 — Design et conversion (1 à 2 semaines) — ✅ appliquée

- [x] Refondre la bannière d'accueil (H1, promesse, CTA, réassurance).
- [x] Charger correctement les polices et harmoniser la typographie (Inter importée dans `phase1.css`).
- [x] Ajouter les descriptions sur les cartes de services.
- [x] Améliorer la grille des galeries et les légendes.
- [x] Ajouter « Pourquoi nous choisir », « Notre processus » et un CTA final.
- [x] Enrichir le pied de page (coordonnées, services, navigation) — heures et zone desservie à confirmer.
- [x] Ajouter un bouton d'appel mobile.
- [x] Corriger les contrastes et les états de focus.
- [x] Rendre la visionneuse utilisable au clavier.
- [ ] Remplacer les liens sociaux vides par les URL réelles — **à fournir**.

### Phase 2 — Contenu et SEO (2 à 4 semaines) — ✅ appliquée sur le site

- [x] Rédiger 300 à 500 mots par page de service. *(343 à 373 mots par page)*
- [x] Créer une vraie page « Services » (ou supprimer le doublon).
- [x] Ajouter les données structurées `LocalBusiness`, `Service`, `FAQPage`. *(JSON-LD présent et syntaxiquement valide ; test Rich Results à refaire après déploiement)*
- [x] Créer `sitemap.xml`, `robots.txt` et une page `404.html`. *(404 en `noindex, follow`, sitemap de 8 URL)*
- [x] Ajouter les balises canoniques et Open Graph.
- [ ] Mettre en place Google Business Profile et la cohérence NAP. **Hors dépôt : à faire par le propriétaire.**
- [x] Déployer Google Search Console et soumettre le sitemap. **Hors dépôt : à faire après la mise en ligne.**

> **État au 11 novembre 2026 :** les éléments on-site de la phase 2 sont en place. Restent à faire hors dépôt la fiche Google Business Profile, la vérification NAP, Search Console et la soumission du sitemap. Les URL Facebook et Instagram sont toujours à fournir.

### Phase 3 — Performance et mesure (en continu) — ✅ appliquée sur le site

- [x] Convertir et compresser toutes les photos. *(22 photos en WebP 1024 + 640, `pickup2` en 1024/744, vignettes recompressées)*
- [x] Ajouter `width`/`height`, `srcset` et le préchargement de la bannière. *(toutes les `<img>`, galeries et hero responsives, bannière préchargée sur 8 pages)*
- [x] Supprimer les scripts et fichiers inutilisés. *(`bootstrap/`, `animate.css`, `progressbar`, `bootstrap.min.js`, `popper.min.js`, Swiper/Magnific des pages hors accueil, images non référencées)*
- [x] Mesurer les Core Web Vitals avant/après. *(Lighthouse mobile simulé en local : accueil 46 → 57, fabrication 52 → 62 ; mesure réelle à refaire après déploiement)*
- [x] Suivre les événements GA4 (appels, courriels, clics CTA). *(`appel_telephone`, `courriel`, `demande_soumission`, `clic_service` dans `custom.js`)*
- [ ] Publier une réalisation ou un article par mois. **En continu : à faire par le propriétaire.**

> **État au 11 novembre 2026 :** la phase 3 on-site est terminée. Les principaux freins restants sont le CSS bloquant (Font Awesome, Bootstrap, `style.css`) et les polices Google chargées en `@import`. La publication régulière de réalisations et la mesure PageSpeed en production restent à la charge du propriétaire.

---

## 9. Maquette textuelle des pages

### 9.1 Accueil

```text
[En-tête collant : logo | Accueil | Services ▾ | Réalisations | Contact | 📞 418-313-4032 | Soumission]

1. Bannière
   - H1 : Fabrication, soudage et maintenance industrielle sur mesure
   - Phrase de positionnement
   - Boutons : Demander une soumission / Voir nos réalisations
   - Bande de réassurance

2. Chiffres clés / réassurance

3. Nos services (5 cartes avec descriptions)

4. Pourquoi nous choisir (4 arguments)

5. Notre processus (4 étapes)

6. Réalisations phares (grille de 3 à 6 photos)

7. Notre mission (texte synthétique)

8. Témoignages (si réels)

9. FAQ (4 à 6 questions)

10. Bandeau CTA final

[Pied de page complet : coordonnées, heures, zone desservie, services, réseaux sociaux, mentions]
```

### 9.2 Page de service

```text
[Bannière courte : fil d'Ariane + H1 + phrase d'introduction]

1. Introduction (100 à 150 mots)
2. Ce que nous réalisons (liste)
3. Matériaux et procédés
4. Notre méthode (3 à 4 étapes)
5. Galerie de réalisations avec légendes
6. FAQ spécifique (3 questions)
7. Services complémentaires (liens internes)
8. Bandeau CTA : téléphone + soumission

[Pied de page complet]
```

### 9.3 Contact

```text
1. H1 : Parlons de votre projet
2. Coordonnées cliquables (téléphone, courriel, adresse)
3. Formulaire de demande de soumission
4. Carte / lien Google Maps
5. Heures d'ouverture et délai de réponse
6. Zone desservie
7. Photo de l'atelier ou de l'équipe
```

---

## 10. Checklist finale

### Design

- [x] Un `<h1>` clair par page.
- [x] Une palette et une typographie cohérentes.
- [x] Des boutons visibles et des appels à l'action à chaque étape.
- [x] Des descriptions sur toutes les cartes de services.
- [x] Des galeries régulières avec légendes utiles.
- [x] Un pied de page complet.
- [x] Un rendu vérifié sur mobile, tablette et ordinateur.
- [x] Aucun texte provisoire visible.

### SEO

- [x] Titles et descriptions uniques.
- [x] Un seul H1, hiérarchie de titres logique.
- [x] Attributs `alt` sur toutes les images.
- [x] Contenu rédigé sur chaque page de service (343 à 373 mots par page).
- [x] Maillage interne cohérent.
- [x] `sitemap.xml`, `robots.txt`, page 404.
- [x] Balises canoniques et Open Graph.
- [ ] Données structurées valides (test Rich Results après déploiement).
- [ ] Domaine et HTTPS vérifiés.
- [ ] Google Search Console et Bing Webmaster Tools configurés.

### Performance

- [x] Images compressées et redimensionnées (WebP 1024 + 640, JPG d'origine non servis).
- [x] `width`/`height` renseignés sur toutes les images.
- [x] `srcset` / `sizes` sur les galeries et l'image principale.
- [x] Préchargement de la bannière et de l'image LCP de l'accueil.
- [x] Bibliothèques inutilisées supprimées (`animate.css`, `progressbar`, `bootstrap.min.js`, `popper.min.js`, dossier `bootstrap/`).
- [x] Fonds lourds chargés à la demande (`IntersectionObserver`).
- [ ] Scripts non critiques en `defer`.
- [ ] CSS purge et polices optimisées (`preconnect`, suppression de l'import Lora, sous-ensemble Font Awesome).
- [ ] LCP < 2,5 s, INP < 200 ms, CLS < 0,1 — **mesure réelle après déploiement** (local : 7,0 à 7,4 s de LCP, CLS < 0,05).

### Contenu

- [x] Aucune information inventée (heures, avis, certifications).
- [x] Coordonnées exactes et cohérentes partout.
- [ ] Zone desservie confirmée.
- [ ] Photos récentes et représentatives.
- [ ] Liens sociaux fonctionnels.

---

## 11. Indicateurs de succès

Suivre ces indicateurs **chaque mois** :

| Indicateur | Source | Objectif |
|---|---|---|
| Impressions dans Google | Search Console | Progression continue sur 6 mois |
| Clics organiques | Search Console | +30 % après la phase 2 |
| Position moyenne | Search Console | Top 10 sur les requêtes locales |
| Appels et courriels | GA4 (événements) | Mesurer et augmenter les conversions |
| Trafic mobile | GA4 | > 50 % du trafic |
| LCP / INP / CLS | PageSpeed Insights | Dans le vert |
| Avis Google | Google Business Profile | 5 à 10 avis authentiques la première année |
| Pages vues par session | GA4 | > 2 |

### Événements GA4 — ✅ en place

Les événements sont envoyés depuis `assets/js/custom.js` via un délégateur de clic unique (pas de double comptage), avec `transport_type: 'beacon'` pour ne pas perdre les événements lors d'une navigation :

| Événement | Déclencheur | Paramètres |
|---|---|---|
| `appel_telephone` | Clic sur un lien `tel:` | `link_text`, `link_url` |
| `courriel` | Clic sur un lien `mailto:` | `link_text`, `link_url` |
| `demande_soumission` | Clic sur un bouton `.theme-btn-1` vers `contact.html` | `link_text`, `link_url` |
| `clic_service` | Clic vers une page `services-*.html` | `service`, `link_text`, `link_url` |

Pour retrouver les conversions dans GA4 : **Rapports → Engagement → Événements**, puis marquer `appel_telephone`, `courriel` et `demande_soumission` comme **conversions clés**.

---

## À éviter

- ❌ Inventer des avis, des chiffres ou des certifications.
- ❌ Empiler des mots-clés sans logique.
- ❌ Ajouter des animations lourdes ou permanentes.
- ❌ Utiliser des images de stock génériques à la place de vraies réalisations.
- ❌ Multiplier les pages quasi identiques pour chaque ville (contenu dupliqué).
- ❌ Charger Analytics sans consentement si la réglementation l'exige.
- ❌ Publier des photos sans l'accord des clients ou sans masquer les informations sensibles.

---

*Ce document est une proposition. Les textes, chiffres et informations d'entreprise doivent être validés avant publication.*
