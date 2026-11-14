# Backlog — Mise en place du contenu SEO/GEO

> Découle de [`strategie_seo_geo_mecanique_luc_vallerand.md`](strategie_seo_geo_mecanique_luc_vallerand.md).
> Périmètre : contenu, SEO local, preuves de savoir-faire et GEO.
> Hors périmètre : refonte graphique, changement d'hébergeur, développement d'application.
> Dernière mise à jour : 13 novembre 2026.

## Mode d'emploi

- `[ ]` à faire · `[x]` terminé.
- Un item n'est coché que lorsque son **critère d'acceptation** est rempli (voir chaque phase).
- Les identifiants servent au suivi : `P0-xx` = bloquant, `P1-xx` à `P5-xx` = phases de contenu.
- Effort : **S** = moins d'une heure · **M** = une demi-journée · **L** = une journée ou plus.
- Toute donnée non confirmée par le propriétaire reste marquée `À CONFIRMER` et n'est pas publiée.

## Règles de rédaction

1. Ne publier aucun chiffre, matériau, procédé, délai ou certification qui n'a pas été confirmé.
2. Un mot-clé principal par page ; les mots-clés secondaires sont intégrés naturellement dans les H2 et le corps.
3. Ne pas créer de pages géographiques quasi identiques : une page locale doit contenir de l'information réelle et utile.
4. Coordonnées identiques partout (site, GBP, annuaires) : même nom, adresse, téléphone, courriel.
5. Chaque page de service se termine par un CTA « Demander une soumission ».
6. Les FAQ visibles doivent correspondre exactement aux données `FAQPage` en JSON-LD.

---

## État actuel constaté (base de départ)

| Élément | État dans le dépôt | Écart par rapport à la stratégie |
|---|---|---|
| Pages publiques | 8 pages indexables + `404.html` | Pas de page « À propos » ni « Réalisations » |
| Titles / meta descriptions | Uniques sur toutes les pages | Peu de ciblage géographique (Beauce absente de plusieurs titles) |
| H1 | Un seul par page | — |
| Hiérarchie H1→H2→H3 | Corrigée | — |
| Canonical | Présent sur toutes les pages | — |
| JSON-LD | `LocalBusiness` (accueil, contact, services), `Service` + `FAQPage` sur les 5 pages de service | `areaServed` aligné sur les 3 zones : Beauce, Chaudière-Appalaches, région de Québec |
| FAQ | 3 questions par page de service | À enrichir (5 à 7 questions) |
| `robots.txt` | `Allow: /` + sitemap déclaré | Pas de règle explicite pour `OAI-SearchBot` |
| `sitemap.xml` | 8 URLs, `lastmod` au 2026-11-11 | À mettre à jour à chaque publication |
| Page « À propos » | Absente | À créer |
| Page « Réalisations » | Absente | À créer |
| Témoignages / logos clients | Absents | À collecter avec autorisation |
| Formulaire de contact | Action `https://formspree.io/f/VOTRE_ID` | **Non fonctionnel** : identifiant à remplacer |
| Réseaux sociaux | Liens `href="#"` | À remplacer ou à retirer |
| Horaires | « À confirmer avec l'atelier » | À valider |
| Google Business Profile | Non vérifié dans le dépôt | À créer/optimiser |

---

## Phase 0 — Déblocage et validation (bloquant)

> Aucune publication de contenu ne démarre avant la validation de la fiche entreprise.

- [ ] **P0-01 — Remplir la fiche de validation** : coordonnées, année de fondation, horaires, territoire réellement desservi, services, matériaux, procédés, équipements, capacité atelier/sur site, garanties éventuelles. **Effort : S.**
  - Fiche créée et pré-remplie le 13 novembre 2026 : [`fiche-validation-entreprise.md`](fiche-validation-entreprise.md).
  - ⏳ Reste à faire : entrevue de validation avec le propriétaire (section 10 de la fiche) et signature (section 12).
  - *Critère :* fiche remplie et datée, validée par le propriétaire.
- [x] **P0-02 — Confirmer le territoire** : Beauce, Chaudière-Appalaches et région de Québec, avec les 8 municipalités validées (voir fiche, sections 3.1 et 3.2). Formulation appliquée au contenu et au JSON-LD `areaServed`. **Effort : S.**
  - *Critère :* liste courte et définitive disponible pour le site, le JSON-LD et GBP. ✅ (reste à reporter sur GBP en P4-03).
- [ ] **P0-03 — Rendre le formulaire de contact fonctionnel** : remplacer `VOTRE_ID` dans `contact.html` par l'identifiant Formspree réel (ou un autre service). **Effort : S.**
  - *Critère :* envoi de test reçu, page de confirmation affichée, message d'erreur prévu.
- [ ] **P0-04 — Corriger les liens sociaux** : renseigner les URL Facebook/Instagram réelles ou retirer les icônes (en-tête et pied de page). **Effort : S.**
  - *Critère :* aucun lien `href="#"` restant dans la navigation sociale.
- [ ] **P0-05 — Valider les preuves disponibles** : nombre de projets réalisés, années d'expérience, délais de réponse, types de clients, photos utilisables et autorisations. **Effort : S.**
  - *Critère :* liste des preuves publiables, avec source et autorisation.
- [ ] **P0-06 — Valider les titles/meta cibles** (annexe B) avant modification. **Effort : S.**
  - *Critère :* chaque title ≤ 60 caractères utiles et chaque meta ≈ 150–160 caractères, sans promesse non tenue.

---

## Phase 1 — Accueil et fondations de contenu

- [ ] **P1-01 — Réviser le title et la meta de l'accueil** (annexe B, ligne Accueil). **Effort : S.**
- [ ] **P1-02 — Ajuster le H1 et le texte du hero** pour intégrer « Beauce » et « mécanique industrielle », sans surcharger. **Effort : S.**
  - *Critère :* H1 unique, lisible sur mobile, mot-clé principal présent naturellement.
- [ ] **P1-03 — Réécrire la section « Notre mission »** avec le texte de la section 5 de la stratégie, adapté aux faits validés : clientèles, services, territoire, approche. **Effort : M.**
  - *Critère :* 3 à 4 paragraphes, aucune affirmation non confirmée, un CTA en fin de section.
- [ ] **P1-04 — Ajouter un bloc visible « Zone desservie »** sur l'accueil : municipalités confirmées + phrase de couverture + lien vers `contact.html`. **Effort : S.**
  - *Critère :* contenu indexable en HTML (pas une image), liens internes valides.
- [ ] **P1-05 — Renforcer les CTA de l'accueil** : téléphone cliquable visible sur desktop, bouton secondaire « Demander une soumission », réassurance (« réponse rapide », uniquement si confirmé). **Effort : S.**
- [ ] **P1-06 — Mettre à jour le JSON-LD `LocalBusiness`** : `areaServed` aligné sur P0-02, `sameAs` si profils réels, sous-type Schema.org plus précis si pertinent. **Effort : S.**
  - *Critère :* JSON valide, mêmes données que le contenu visible, validé avec le Schema Markup Validator.
- [ ] **P1-07 — Ajouter des CTA intermédiaires** après les blocs de services et avant le pied de page. **Effort : S.**
- [ ] **P1-08 — Mettre à jour le maillage interne** : accueil → services → réalisations → contact ; ancres descriptives. **Effort : S.**
- [ ] **P1-09 — Mettre à jour le sitemap** (`lastmod`, nouvelles URLs) après chaque publication. **Effort : S.**

---

## Phase 2 — Optimisation des cinq pages de service

Gabarit commun à appliquer à chaque page (voir annexe C) : description claire, pièces concernées, matériaux/procédés confirmés, types de projets, clientèles, territoire, photos originales, FAQ, CTA.

- [ ] **P2-01 — Découpe** (`services-decoupe.html`) : réviser le title/meta, enrichir le contenu et la FAQ, ajouter 2 à 3 photos légendées. **Effort : M.**
- [ ] **P2-02 — Fabrication** (`services-fabrication.html`) : idem + préciser l'unité/petite série et les types de plans acceptés. **Effort : M.**
- [ ] **P2-03 — Installation** (`services-installation.html`) : idem + préciser les contextes (atelier, chantier, industriel) si confirmés. **Effort : M.**
- [ ] **P2-04 — Modification** (`services-modification.html`) : idem + décrire les cas d'adaptation/renforcement. **Effort : M.**
- [ ] **P2-05 — Réparation** (`services-reparation.html`) : idem + préciser diagnostic, soudage, remise en service. **Effort : M.**
- [ ] **P2-06 — Vérifier la cohérence des `Service` JSON-LD** avec le contenu visible de chaque page. **Effort : S.**
- [ ] **P2-07 — Vérifier les liens croisés** entre les cinq services, `services-tous.html` et `contact.html`. **Effort : S.**

*Critère d'acceptation par page :* title et meta uniques, H2 qui reprennent les intentions de recherche, au moins 5 questions FAQ, un CTA visible au-dessus et en dessous du contenu, images avec `alt` descriptif et légende.

---

## Phase 3 — Nouvelles pages de contenu

- [ ] **P3-01 — Créer `a-propos.html`** : histoire de l'entreprise, valeurs, approche, équipe (si accepté), atelier, territoire, services. **Effort : L.**
  - *Critère :* title/meta dédiés, H1 unique, lien depuis le menu et le pied de page, ajout au sitemap.
- [ ] **P3-02 — Créer `realisations.html`** : index des projets avec vignette, service associé et région (si autorisée). **Effort : M.**
  - *Critère :* au moins 3 projets réels, liens vers les pages de service.
- [ ] **P3-03 à P3-05 — Rédiger 3 études de cas** (gabarit annexe D) : une par service prioritaire (ex. fabrication, modification, réparation). **Effort : L (total).**
  - *Critère :* contexte, intervention, matériaux/procédés confirmés, résultat, 3 à 5 photos originales, service associé, localisation autorisée.
- [ ] **P3-06 — Ajouter les entrées de menu et de pied de page** vers « À propos » et « Réalisations ». **Effort : S.**
- [ ] **P3-07 — Ajouter `BreadcrumbList` + `Service`/`Article` JSON-LD** sur les nouvelles pages. **Effort : S.**
- [ ] **P3-08 — Relier les « Projets phares » de l'accueil** à `realisations.html` et aux études de cas. **Effort : S.**
- [ ] **P3-09 — Ajouter les nouvelles URLs au sitemap** et vérifier les canonicals. **Effort : S.**

---

## Phase 4 — Preuves, crédibilité et SEO local

- [ ] **P4-01 — Publier 3 à 5 témoignages authentiques** avec nom, entreprise (si autorisé) et type de projet. **Effort : M.**
  - *Critère :* autorisation écrite ou courriel conservé, pas de témoignage inventé.
- [ ] **P4-02 — Ajouter une section « Ils nous font confiance »** avec logos clients, uniquement avec autorisation. **Effort : S.**
- [ ] **P4-03 — Créer/optimiser Google Business Profile** : catégorie principale réelle, catégories secondaires, description, services, photos récentes, zone desservie, site Web, horaires. **Effort : M.**
- [ ] **P4-04 — Demander des avis Google authentiques** aux clients récents et répondre à chaque avis. **Effort : M (récurrent).**
- [ ] **P4-05 — Inscrire l'entreprise dans les répertoires régionaux pertinents** : chambres de commerce, développement économique, répertoires industriels. Vérifier les conditions avant inscription. **Effort : M.**
- [ ] **P4-06 — Obtenir des backlinks légitimes** : fournisseurs, partenaires, associations, médias régionaux. **Effort : L (récurrent).**
- [ ] **P4-07 — Uniformiser les coordonnées (NAP)** sur le site, GBP et tous les annuaires. **Effort : S.**
- [ ] **P4-08 — Afficher un lien vers la fiche Google Business Profile** sur `contact.html`. **Effort : S.**

---

## Phase 5 — GEO (moteurs IA) et contenu factuel

- [ ] **P5-01 — Enrichir les FAQ** à 5–7 questions par page de service, avec réponses courtes, directes et factuelles. **Effort : M.**
- [ ] **P5-02 — Synchroniser le JSON-LD `FAQPage`** avec les questions visibles. **Effort : S.**
- [ ] **P5-03 — Rendre la page « À propos » exploitable par les IA** : description précise de l'entreprise, localisation, services, territoire, histoire, liens. **Effort : S.**
- [ ] **P5-04 — Vérifier l'accès des robots IA** dans `robots.txt` : `OAI-SearchBot` (ChatGPT) et robots Bing, sans bloquer Googlebot. **Effort : S.**
  - *Critère :* règles testées, sitemap toujours déclaré, aucun `Disallow` involontaire.
- [ ] **P5-05 — Vérifier que les informations clés existent en HTML** (coordonnées, services, territoire), sans dépendre d'une image ou d'un script. **Effort : S.**
- [ ] **P5-06 — Contrôler la cohérence des faits** entre accueil, services, à propos, contact, JSON-LD et GBP. **Effort : S.**

---

## Phase 6 — Mesure et amélioration continue

- [ ] **P6-01 — Configurer Google Search Console** (propriété domaine) et soumettre `sitemap.xml`. **Effort : S.**
- [ ] **P6-02 — Configurer Bing Webmaster Tools** (import possible depuis GSC). **Effort : S.**
- [ ] **P6-03 — Suivre les conversions** : clics `tel:`, envois du formulaire, clics vers Google Maps. **Effort : M.**
- [ ] **P6-04 — Suivre les requêtes cibles** : fabrication métallique, fabrication de pièces sur mesure, soudage industriel, réparation mécanique industrielle, découpe de métal, modification d'équipements industriels, municipalités desservies. **Effort : S (récurrent).**
- [ ] **P6-05 — Revue à 30/60/90 jours** : identifier les pages qui gagnent des impressions, corriger les pages sous-performantes, ajuster les titles/meta. **Effort : M (récurrent).**

---

## Tableau de suivi synthétique

| ID | Tâche | Priorité | Effort | Dépend de | Statut |
|---|---|---|---|---|---|
| P0-01 | Fiche de validation entreprise | Critique | S | — | 🟡 Pré-remplie, validation en attente |
| P0-02 | Confirmer le territoire | Critique | S | P0-01 | ✅ |
| P0-03 | Formulaire Formspree fonctionnel | Critique | S | — | ☐ |
| P0-04 | Liens sociaux réels ou retirés | Critique | S | — | ☐ |
| P0-05 | Preuves publiables | Critique | S | P0-01 | ☐ |
| P0-06 | Valider titles/meta cibles | Critique | S | P0-02 | ☐ |
| P1-01 | Title/meta accueil | Élevée | S | P0-06 | ☐ |
| P1-02 | H1 + hero accueil | Élevée | S | P0-02 | ☐ |
| P1-03 | Section mission | Élevée | M | P0-01, P0-05 | ☐ |
| P1-04 | Bloc zone desservie | Élevée | S | P0-02 | ☐ |
| P1-05 | CTA accueil | Élevée | S | — | ☐ |
| P1-06 | JSON-LD LocalBusiness | Élevée | S | P0-02 | ☐ |
| P1-07 | CTA intermédiaires | Moyenne | S | — | ☐ |
| P1-08 | Maillage interne | Moyenne | S | P3-06 | ☐ |
| P1-09 | Sitemap | Moyenne | S | publications | ☐ |
| P2-01 à P2-05 | Pages de service | Élevée | M × 5 | P0-01, P0-06 | ☐ |
| P2-06 | Cohérence JSON-LD Service | Moyenne | S | P2-01 à P2-05 | ☐ |
| P3-01 | Page À propos | Élevée | L | P0-01, P0-05 | ☐ |
| P3-02 | Page Réalisations | Élevée | M | P3-03 à P3-05 | ☐ |
| P3-03 à P3-05 | 3 études de cas | Élevée | L | P0-05 | ☐ |
| P3-06 | Menu/footer | Moyenne | S | P3-01, P3-02 | ☐ |
| P3-07 | JSON-LD nouvelles pages | Moyenne | S | P3-01, P3-02 | ☐ |
| P4-01 | Témoignages | Élevée | M | P0-05 | ☐ |
| P4-03 | Google Business Profile | Élevée | M | P0-01, P0-02 | ☐ |
| P4-04 | Avis Google | Élevée | M | P4-03 | ☐ |
| P4-05 | Répertoires régionaux | Moyenne | M | P0-01 | ☐ |
| P4-06 | Backlinks | Moyenne | L | — | ☐ |
| P5-01 | FAQ enrichies | Moyenne | M | P2-01 à P2-05 | ☐ |
| P5-04 | Robots IA | Moyenne | S | — | ☐ |
| P6-01 | Search Console | Élevée | S | site en ligne | ☐ |
| P6-02 | Bing Webmaster | Moyenne | S | P6-01 | ☐ |
| P6-03 | Suivi des conversions | Moyenne | M | P0-03 | ☐ |

---

## Annexe A — Fiche de validation

La fiche complète, avec le statut de chaque donnée (✅ confirmé / 🟡 à valider / ⛔ à confirmer), les questions à poser au propriétaire et la section de signature, se trouve dans :

**→ [`fiche-validation-entreprise.md`](fiche-validation-entreprise.md)**

Cette fiche remplace le tableau initialement prévu ici et sert de source de vérité unique pour tous les contenus du site.

## Annexe B — Titles et meta descriptions cibles

| Page | Title cible | Meta description cible |
|---|---|---|
| Accueil | Mécanique industrielle et fabrication métallique en Beauce \| MLV | Mécanique Luc Vallerand offre des services de fabrication métallique sur mesure, soudage, réparation et maintenance industrielle en Beauce et Chaudière-Appalaches. |
| Découpe | Découpe de métal sur mesure en Beauce \| MLV | Découpe de pièces métalliques selon vos plans, croquis ou mesures. Préparation de pièces pour fabrication, assemblage et réparation. |
| Fabrication | Fabrication métallique sur mesure en Beauce \| MLV | Fabrication de pièces, structures et assemblages métalliques sur mesure. Projets uniques et petites séries pour particuliers et entreprises en Beauce. |
| Installation | Installation de structures métalliques en Beauce \| MLV | Installation de pièces et structures métalliques pour l'industrie. Travail sécuritaire, propre et durable. |
| Modification | Modification d'équipements industriels en Beauce \| MLV | Modification, adaptation et renforcement de pièces et structures métalliques existantes. Service personnalisé. |
| Réparation | Réparation mécanique et soudage industriel en Beauce \| MLV | Réparation, soudage et remise en état de pièces et équipements métalliques. Service en atelier ou sur site en Beauce et Chaudière-Appalaches. |
| Réalisations | Réalisations de fabrication métallique en Beauce \| MLV | Projets de découpe, fabrication, installation, modification et réparation réalisés par Mécanique Luc Vallerand en Beauce et Chaudière-Appalaches. |
| À propos | Mécanique Luc Vallerand — atelier de fabrication en Beauce | Découvrez Mécanique Luc Vallerand, atelier de fabrication métallique et de mécanique industrielle à Saint-Honoré-de-Shenley depuis 2019. |
| Contact | Contact et demande de soumission \| Mécanique Luc Vallerand | Contactez-nous : 418-313-4032, mecaniquelucv@gmail.com. 524 rue Principale, Saint-Honoré-de-Shenley (Québec). |

> Les titles et descriptions doivent être ajustés après validation du territoire et des services réels.

## Annexe C — Gabarit d'une page de service

1. **H1** : service + bénéfice + zone (« Découpe de métal sur mesure en Beauce »).
2. **Introduction** : ce que fait l'entreprise, pour qui, dans quel délai (si confirmé).
3. **Ce que nous réalisons** : types de pièces, structures, équipements.
4. **Matériaux et procédés** : uniquement ceux réellement utilisés.
5. **Types de projets acceptés** : unité, petite série, réparation, sur plan.
6. **Clientèles** : particuliers, entrepreneurs, industriels.
7. **Territoire desservi** : municipalités confirmées.
8. **Photos originales** : 2 à 3, avec légende technique et `alt` descriptif.
9. **FAQ** : 5 à 7 questions/réponses.
10. **CTA final** : « Demander une soumission » vers `contact.html` + téléphone.

## Annexe D — Gabarit d'une étude de cas

| Section | Contenu attendu |
|---|---|
| Titre | Nature du projet + type de travail |
| Contexte | Problème ou besoin du client |
| Intervention | Travail effectué par MLV |
| Matériaux et procédés | Seulement si connus et pertinents |
| Résultat | Bénéfice concret pour le client |
| Photos | 3 à 5 photos originales légendées |
| Service associé | Lien vers la page de service |
| Localisation | Région, si le client autorise la publication |

---

## Definition of Done (global)

Un item est terminé lorsque :

1. Le contenu est publié dans le fichier HTML concerné et visible sans JavaScript.
2. Les métadonnées (title, meta description, canonical, JSON-LD) sont cohérentes avec le contenu.
3. Les liens internes et externes fonctionnent.
4. Le rendu mobile est vérifié (390 px et 768 px).
5. Aucune donnée non confirmée n'a été publiée.
6. Le sitemap et, si nécessaire, le JSON-LD ont été mis à jour.
7. La case correspondante du présent backlog est cochée.
