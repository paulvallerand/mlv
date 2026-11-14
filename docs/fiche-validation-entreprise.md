# Fiche de validation de l'entreprise — Mécanique Luc Vallerand

> Document de travail pour la tâche **P0-01** du [backlog SEO/GEO](backlog-seo-geo-mecanique-luc-vallerand.md).
> Objectif : disposer d'une source de vérité unique avant de publier du contenu (services, territoire, matériaux, preuves).
> Version : **brouillon v0.2** — 13 novembre 2026.
> Statut global : **validation partielle** — territoire, horaires, services, clientèles et formulaire validés ; preuves et présence numérique à compléter.

## Légende des statuts

| Statut | Signification |
|---|---|
| ✅ Confirmé | Information présente et cohérente dans le code ou la documentation du site. |
| 🟡 À valider | Information déjà publiée sur le site, mais non confirmée explicitement par le propriétaire. |
| ⛔ À CONFIRMER | Information absente ou contradictoire : **interdiction de la publier avant validation**. |

> Règle : une information `🟡` ou `⛔` ne peut pas être reprise dans un nouveau contenu (title, meta, JSON-LD, page de service) avant d'être passée à `✅`.

---

## 1. Identification

| Champ | Valeur | Source | Statut |
|---|---|---|---|
| Nom commercial | Mécanique Luc Vallerand | En-tête et pied de page de toutes les pages | ✅ |
| Raison sociale / entité légale | Mécanique Luc Vallerand | — | ✅ |
| Année de fondation | 2019 | Accueil, pied de page, JSON-LD, README | 🟡 |
| Activité principale | Fabrication métallique, maintenance industrielle, soudage | Titles, accueil, README | ✅ |
| Site Web | https://mecaniquelucv.com/ | `CNAME`, canonicals | ✅ |
| Langue du site | Français (`lang="fr"`) | Toutes les pages | ✅ |

## 2. Coordonnées

| Champ | Valeur | Source | Statut |
|---|---|---|---|
| Adresse | 524 rue Principale | `contact.html`, JSON-LD | ✅ |
| Ville | Saint-Honoré-de-Shenley | `contact.html`, JSON-LD | ✅ |
| Province | Québec (QC) | `contact.html`, JSON-LD | ✅ |
| Code postal | G0M 1V0 | `contact.html`, JSON-LD | ✅ |
| Pays | Canada (CA) | JSON-LD | ✅ |
| Téléphone | 418-313-4032 (`+1-418-313-4032`) | `contact.html`, JSON-LD | ✅ |
| Courriel | mecaniquelucv@gmail.com | `contact.html`, JSON-LD | ✅ |
| Horaires | Lundi au vendredi, de 7 h à 19 h | `contact.html` | ✅ |
| Lien Google Maps | https://www.google.com/maps/search/?api=1&query=524+rue+Principale+Saint-Honore-de-Shenley+QC+G0M+1V0 | `contact.html` | ✅ |
| Fiche Google Business Profile | À CONFIRMER (URL inconnue) | — | ⛔ |

## 3. Territoire desservi

### 3.1 Formulation officielle (validée)

| Formulation | Emplacement | Statut |
|---|---|---|
| « Beauce, Chaudière-Appalaches et région de Québec » | Formulation officielle à reprendre partout (contenu, JSON-LD, GBP, annuaires) | ✅ |

Décision du propriétaire (13 novembre 2026) : le territoire couvre les **trois** zones — Beauce, Chaudière-Appalaches et région de Québec. Les anciennes formulations partielles (« Beauce et région de Québec », « Beauce et Chaudière-Appalaches ») sont remplacées.

**Application effectuée sur le site :** `areaServed` du JSON-LD (accueil, contact, 5 pages de service, page Services) et mentions visibles des pages alignées sur les trois zones.

### 3.2 Municipalités desservies

Municipalités confirmées par le propriétaire le 13 novembre 2026 :

- [x] Saint-Honoré-de-Shenley (siège)
- [x] Saint-Georges
- [x] Sainte-Marie
- [x] Beauceville
- [x] Saint-Joseph-de-Beauce
- [x] Thetford Mines
- [x] Lévis
- [x] Québec

| Champ | Valeur validée | Statut |
|---|---|---|
| Formulation officielle du territoire | Beauce, Chaudière-Appalaches et région de Québec | ✅ |
| Municipalités desservies | Les 8 municipalités ci-dessus | ✅ |
| Déplacement sur site | Oui, facturé séparément (préciser les modalités dans la soumission) | ✅ |
| Rayon maximal d'intervention | 200 km ou plus | ✅ |

## 4. Services offerts

| Service | Description publiée sur le site | Statut |
|---|---|---|
| Découpe | Découpe de pièces métalliques selon plans, croquis ou mesures ; travail à l'unité ou en petite série. | ✅ |
| Fabrication | Fabrication de pièces, structures et assemblages métalliques sur mesure, à l'unité ou en petite série. | ✅ |
| Installation | Montage et mise en place de pièces et structures, ajustement sur site. | ✅ |
| Modification | Adaptation, modification et renforcement de pièces et équipements existants. | ✅ |
| Réparation | Diagnostic, soudage, réparation et remise en service de pièces métalliques. | ✅ |
| Maintenance industrielle | Entretien d'équipements et maintenance industrielle. | ✅ |
| Soudage | Travaux de soudage et préparation avant soudage. | ✅ |

- [x] Confirmer que les sept activités ci-dessus sont réellement offertes.
- [x] Préciser celles qui ne le sont pas : aucune activité à retirer.
- [ ] Ajouter les services manquants (ex. pliage, usinage, sablage, peinture), s'ils existent.

## 5. Matériaux et procédés

| Élément | Ce qui est publié | Statut |
|---|---|---|
| Acier | « Découpe précise de l'acier » (accueil) | 🟡 |
| Aluminium | « Découpe précise […] de l'aluminium » (accueil) | 🟡 |
| Inox | Non mentionné | ⛔ |
| Autres métaux | Non mentionné | ⛔ |
| Découpe | Mentionnée, sans procédé précis (scie, plasma, laser ?) | 🟡 |
| Soudage | Mentionné, sans procédé précis (MIG, TIG, électrode ?) | 🟡 |
| Assemblage | Mentionné | 🟡 |
| Pliage | Non mentionné | ⛔ |
| Usinage (tour, fraiseuse, CNC) | Non mentionné | ⛔ |
| Contrôle dimensionnel | « Contrôle des dimensions » mentionné | 🟡 |
| Traitement de surface / peinture | Non mentionné | ⛔ |

- [ ] Lister les matériaux réellement travaillés.
- [ ] Lister les procédés réellement disponibles (et les équipements, si le propriétaire souhaite les publier).
- [ ] Valider la formulation des limites (« petites séries », « pièces uniques », dimensions maximales).

## 6. Clientèles et types de projets

| Élément | Ce qui est publié | Statut |
|---|---|---|
| Entreprises industrielles | « entreprises du secteur industriel et manufacturier » (accueil) | ✅ |
| Entreprises manufacturières | Idem | ✅ |
| Particuliers | Non mentionné sur le site ; proposé par la stratégie | ✅ |
| Entrepreneurs / PME | Non mentionné ; proposé par la stratégie | ✅ |
| Projets à l'unité | Mentionné | ✅ |
| Petites séries | Mentionné | ✅ |
| Projets sur plans | Mentionné | ✅ |
| Projets sur site | Mentionné (installation, modification, réparation) | ✅ |

- [x] Confirmer les clientèles réellement ciblées et acceptées.
- [ ] Confirmer les types de projets à ne pas accepter (hors capacité).

## 7. Preuves, engagements et capacités

| Champ | Valeur | Statut |
|---|---|---|
| Nombre de projets réalisés | À CONFIRMER | ⛔ |
| Années d'expérience | Déduites de 2019 — à confirmer | ⛔ |
| Délai de réponse aux demandes | Le site dit « nous répondons rapidement » — précision à confirmer | ⛔ |
| Délais de réalisation typiques | À CONFIRMER | ⛔ |
| Garanties offertes | À CONFIRMER | ⛔ |
| Assurances (responsabilité, chantier) | À CONFIRMER | ⛔ |
| Certifications / qualifications (soudage, etc.) | À CONFIRMER — **aucune certification ne doit être affichée sans preuve** | ⛔ |
| Capacité maximale (dimensions, poids, tonnage) | À CONFIRMER | ⛔ |
| Témoignages clients autorisés | À CONFIRMER | ⛔ |
| Logos clients autorisés | À CONFIRMER | ⛔ |
| Photos de réalisations utilisables | 22 photos environ (découpe 4, fabrication 8, installation 3, modification 5, réparation 2) — droits à confirmer | 🟡 |

## 8. Présence numérique

| Élément | Valeur | Source | Statut |
|---|---|---|---|
| Domaine | mecaniquelucv.com | `CNAME` | ✅ |
| Hébergement | GitHub Pages | README | ✅ |
| Google Analytics 4 | `G-TNM9JC9YL7` | `<head>` des pages | ✅ |
| Validation Bing | `BingSiteAuth.xml` | Racine du dépôt | ✅ |
| Vidéo YouTube | `k8x2J3vZwwg` | `index.html`, `services-tous.html` | 🟡 |
| Facebook | `href="#"` — URL inconnue | En-tête et pied de page | ⛔ |
| Instagram | `href="#"` — URL inconnue | En-tête et pied de page | ⛔ |
| Google Business Profile | À CONFIRMER | — | ⛔ |
| Search Console | À CONFIRMER (accès propriétaire) | — | ⛔ |
| Bing Webmaster Tools | Compte à confirmer malgré le fichier de validation | — | ⛔ |

## 9. Formulaire de contact

| Élément | État | Statut |
|---|---|---|
| Service utilisé | Formspree | ✅ |
| Identifiant | `xaeoqdrn` — intégré dans `contact.html`, test d'envoi à effectuer | 🟡 |
| Champs collectés | Nom, courriel, téléphone, service, besoin | ✅ |
| Page de confirmation | Non requise — message par défaut Formspree | ✅ |
| Destination des demandes | mecaniquelucv@gmail.com | ✅ |

- [x] Fournir l'identifiant Formspree réel et l'intégrer au formulaire.
- [x] Confirmer l'adresse courriel de réception des demandes.
- [x] Message de confirmation : non requis (réponse par défaut Formspree).
- [ ] Définir le délai de réponse annoncé sur le site (si publié).

## 10. Questions à poser au propriétaire

> À utiliser telle quelle pour l'entrevue de validation. Une réponse = une mise à jour de la fiche.

1. Confirmez-vous l'adresse, le téléphone, le courriel et l'année de fondation (2019) ? — **✅ Adresse, téléphone et courriel confirmés ; année 2019 encore à confirmer.**
2. Quels sont les horaires d'ouverture officiels (et varient-ils en été) ? — **✅ Lundi au vendredi, de 7 h à 19 h.**
3. Quel est le territoire réellement desservi : Beauce seulement, Beauce + Chaudière-Appalaches, ou aussi la région de Québec ? — **✅ Validé : les trois zones.**
4. Quelles municipalités acceptez-vous de nommer publiquement ? — **✅ Validé : voir la liste en 3.2.**
5. Lesquels de ces services offrez-vous réellement : découpe, fabrication, installation, modification, réparation, maintenance, soudage ? — **✅ Les sept activités sont confirmées.**
6. Quels matériaux travaillez-vous (acier, aluminium, inox, autres) ?
7. Quels procédés et équipements pouvez-vous publier (type de découpe, type de soudage, pliage, usinage, etc.) ?
8. Travaillez-vous uniquement en atelier ou aussi sur site ? Quelles sont les limites ? — **✅ Sur site possible, déplacement facturé séparément ; limites à préciser.**
9. Ciblez-vous les particuliers, les entrepreneurs ou uniquement les entreprises industrielles ? — **✅ Particuliers, entrepreneurs/PME et entreprises industrielles et manufacturières.**
10. Quelles preuves pouvez-vous publier : nombre de projets, ancienneté, délais, garanties, assurances, certifications ?
11. Quelles sont les URL Facebook et Instagram, et la fiche Google Business Profile ?
12. Autorisez-vous la publication des photos, témoignages et logos clients ? Lesquels ?

## 11. Décisions à prendre (arbitrages)

- [x] **Territoire** : formulation unique retenue le 13 novembre 2026 — « Beauce, Chaudière-Appalaches et région de Québec », appliquée au contenu et au JSON-LD `areaServed`. Reste à répercuter sur GBP et les annuaires.
- [x] **Clientèles** : particuliers, entrepreneurs/PME, entreprises industrielles et manufacturières confirmés le 13 novembre 2026.
- [x] **Services** : liste des sept activités confirmée ; aucune à retirer.
- [ ] **Preuves** : décider quels chiffres et engagements seront publiés (aucun par défaut).
- [ ] **Réseaux sociaux** : fournir les URL ou retirer les icônes.
- [x] **Horaires** : lundi au vendredi, de 7 h à 19 h — publiés sur `contact.html` et dans le JSON-LD.
- [x] **Formulaire** : identifiant Formspree `xaeoqdrn` intégré ; test d'envoi à effectuer.

## 12. Validation

| Champ | Valeur |
|---|---|
| Fiche validée par (nom, fonction) | |
| Date de validation | |
| Version validée | |
| Signature / courriel de confirmation | |
| Prochaine révision prévue | |

> Tant que cette section n'est pas remplie, la tâche **P0-01** reste ouverte et les données `🟡` / `⛔` ne doivent pas alimenter de nouveaux contenus.

---

## Données publiables immédiatement (✅)

Ces informations peuvent être réutilisées sans risque dans les contenus et les données structurées :

- Nom : Mécanique Luc Vallerand
- Adresse : 524 rue Principale, Saint-Honoré-de-Shenley (QC) G0M 1V0, Canada
- Téléphone : 418-313-4032
- Courriel : mecaniquelucv@gmail.com
- Site : https://mecaniquelucv.com/
- Territoire officiel : Beauce, Chaudière-Appalaches et région de Québec
- Municipalités desservies : Saint-Honoré-de-Shenley, Saint-Georges, Sainte-Marie, Beauceville, Saint-Joseph-de-Beauce, Thetford Mines, Lévis, Québec
- Rayon d'intervention : 200 km ou plus
- Déplacement sur site : possible, facturé séparément
- Horaires : lundi au vendredi, de 7 h à 19 h
- Clientèles : particuliers, entrepreneurs/PME, entreprises industrielles et manufacturières
- Formulaire : Formspree `xaeoqdrn`, réception à mecaniquelucv@gmail.com
- Domaine, hébergement, identifiant GA4, validation Bing
- Lien Google Maps de l'adresse

## Données à ne pas publier avant validation (⛔)

- Matériaux autres que l'acier et l'aluminium
- Procédés non décrits (pliage, usinage, types de soudage)
- Chiffres (nombre de projets, années, délais, capacité)
- Garanties, assurances et certifications
- Témoignages et logos clients
- URL des réseaux sociaux et de Google Business Profile
