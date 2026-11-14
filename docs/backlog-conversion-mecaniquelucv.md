# Backlog — Amélioration de la conversion

> Découle de [`analyse-conversion-mecaniquelucv.md`](analyse-conversion-mecaniquelucv.md).
> Périmètre : preuves, réassurance, formulaire, parcours d'urgence, réalisations et appels à l'action.
> Hors périmètre : SEO/GEO (voir [`backlog-seo-geo-mecanique-luc-vallerand.md`](backlog-seo-geo-mecanique-luc-vallerand.md)), mobile (voir [`backlog-mobile.md`](backlog-mobile.md)), refonte graphique.
> Dernière mise à jour : 14 novembre 2026.

## Mode d'emploi

- `[ ]` à faire · `[x]` terminé.
- Un item n'est coché que lorsque son **critère d'acceptation** est rempli.
- Identifiants : `C0-xx` = bloquant, `C1-xx` à `C5-xx` = phases d'exécution.
- Effort : **S** = moins d'une heure · **M** = une demi-journée · **L** = une journée ou plus.
- Statuts du tableau de suivi : `☐` à faire · `🟡` partiel / en attente · `✅` terminé · `⛔` bloqué.
- Toute donnée non confirmée par le propriétaire reste marquée `À CONFIRMER` et n'est pas publiée.

## Règles de rédaction et de preuve

1. **Aucune preuve inventée** : pas de témoignage, logo, note Google, chiffre ou certification sans source et autorisation.
2. **Aucune promesse non validée** : pas de « réponse en 24 h », « soumission gratuite », « urgence disponible » ni « garantie » tant que le propriétaire ne l'a pas confirmé par écrit.
3. **Témoignages et photos** : conserver l'autorisation (courriel ou formulaire) et pouvoir retirer la publication sur demande.
4. **Pas de doublon de suivi** : les tâches qui recoupent le backlog SEO/GEO sont rattachées à leur identifiant d'origine (`P4-01`, `P3-02`, etc.).
5. **Vérifier Formspree avant d'ajouter des pièces jointes** : la fonction dépend du forfait. Si elle n'est pas disponible, prévoir un envoi par courriel avec instructions claires.
6. **Cohérence** : toute donnée publiée doit correspondre à la [`fiche-validation-entreprise.md`](fiche-validation-entreprise.md) et au JSON-LD.

---

## État actuel constaté

Audit du dépôt au 14 novembre 2026, complété par l'analyse de conversion.

| Élément | Constat dans le dépôt | Écart / commentaire |
|---|---|---|
| CTA « Demander une soumission » | Présent dans le hero, le bandeau final et le pied de page | — |
| Téléphone cliquable | Présent partout (`tel:+14183134032`) | — |
| Bouton d'appel fixe mobile | `.mlv-callbar` sous 991 px (MOB-09 ✅) | Déjà en place |
| Formulaire | Nom, courriel, téléphone, service, message | Pas de photos, ni délai souhaité, ni case urgence |
| Réassurance sous le bouton | Absente | « Soumission gratuite » / délai non confirmés |
| Message de confirmation | Aucune page ni message local prévu | Dépend du comportement Formspree |
| Témoignages / avis | Aucun | À collecter (P4-01, P4-04) |
| Note Google | Absente | Dépend de la fiche GBP (P4-03) |
| Photos de Luc / de l'atelier | Absentes | Analyse : le visage absent = frein de confiance |
| Légendes des projets | « Fabrication sur mesure », « Avant / après », « Installation sur site » | Génériques, sans problème ni résultat |
| Lien « Voir toutes les réalisations » | Pointe vers `services-fabrication.html` | Aucune galerie dédiée (`realisations.html` absente) |
| Pages Soudage et Maintenance industrielle | Absentes | Services pourtant confirmés dans la fiche |
| Matériaux et capacités (Fabrication) | Non précisés | Acier/aluminium mentionnés sur l'accueil et en meta de Découpe, statut 🟡 |
| Mentions de délais | « respect des délais », « délais respectés », « meilleurs délais » | À valider ou reformuler (voir C0-07) |
| Images dupliquées | `features-4.webp` sert Découpe et Réparation ; `services-4.png` sert Modification et Réparation | Confirmé dans `index.html` et `services-tous.html` |
| Courriel | `mecaniquelucv@gmail.com` | Adresse de domaine à décider (C0-05) |
| Public cible | Mission : particuliers, entrepreneurs, entreprises industrielles ; H1 : mécanique industrielle | Positionnement à clarifier |
| Territoire | Beauce, Chaudière-Appalaches et région de Québec ; rayon de 200 km ou plus | Cohérence à rappeler sur Contact et les services |
| Suivi GA4 | Événements `appel_telephone`, `courriel`, `demande_soumission`, `clic_service` codés | Reste à marquer les conversions dans GA4 (C5-01) |
| Pages non analysées | Découpe, Installation, Modification, Réparation | Analyse de conversion à étendre (C0-06) |

---

## Phase 0 — Déblocage et validation (bloquant)

> Aucune preuve, promesse ou donnée technique n'est publiée avant validation.

- [ ] **C0-01 — Valider les preuves publiables** : témoignages, avis, ancienneté, nombre de projets, types de clients, résultats. **Effort : S.** *(dépend de P0-01 et P0-05)*
  - *Critère :* liste des preuves autorisées, avec source et mention « publiable / non publiable ».
- [ ] **C0-02 — Valider le délai de réponse et la politique d'urgence** : délai réel, disponibilité hors 7 h–19 h, frais de déplacement d'urgence, procédure pour une panne. **Effort : S.**
  - *Critère :* réponses écrites du propriétaire ; aucune promesse publiée avant cette validation.
- [ ] **C0-03 — Valider les matériaux, procédés et capacités** : acier, aluminium, inox, épaisseurs, dimensions maximales, pliage, types de soudage. **Effort : S.** *(complète la section 6 de la fiche)*
  - *Critère :* liste confirmée, utilisable sur Fabrication, Découpe et les futures pages Soudage/Maintenance.
- [ ] **C0-04 — Obtenir les autorisations photos** : portrait de Luc, atelier, réalisations, clients, logos. **Effort : S.**
  - *Critère :* autorisation écrite ou courriel conservé pour chaque photo publiée.
- [ ] **C0-05 — Trancher l'adresse courriel professionnelle** : conserver Gmail ou passer à `@mecaniquelucv.com`. **Effort : S.**
  - *Critère :* décision du propriétaire ; si changement, redirection et mise à jour du NAP, du JSON-LD et de Formspree.
- [ ] **C0-06 — Étendre l'analyse de conversion aux 4 pages non analysées** (Découpe, Installation, Modification, Réparation). **Effort : S.**
  - *Critère :* mêmes critères que l'analyse initiale : preuves, urgence, formulaire/CTA, contexte des réalisations.
- [ ] **C0-07 — Vérifier et reformuler les mentions de délais** : meta de Découpe (« délais respectés »), meta de Fabrication (« respect des délais »), accueil (« respect des délais »), Réparation (« meilleurs délais »). **Effort : S.**
  - *Critère :* chaque mention est soit validée, soit remplacée par une formulation factuelle. Aucune promesse de rapidité non confirmée.

---

## Phase 1 — Preuves et réassurance (semaine 1)

- [ ] **C1-01 — Publier 3 à 5 témoignages authentiques** sur l'accueil (et un rappel sur Contact) : nom, entreprise si autorisée, type de travail. **Effort : M.** *(doublon de P4-01)*
  - *Critère :* autorisation conservée, témoignage non modifié sur le fond, section visible sans JavaScript.
- [ ] **C1-02 — Afficher la note Google et un lien vers les avis** (note réelle, nombre d'avis réel). **Effort : S.** *(dépend de P4-03, P4-04 et P4-08)*
  - *Critère :* chiffres exacts au moment de la publication, lien valide, mise à jour prévue.
- [ ] **C1-03 — Ajouter une photo de Luc et une photo de l'atelier** sur l'accueil et/ou la page À propos. **Effort : M.** *(dépend de C0-04)*
  - *Critère :* photos originales, `alt` descriptif, poids optimisé (WebP), autorisation.
- [ ] **C1-04 — Ajouter un bloc de réassurance sous les CTA** avec 3 faits validés maximum. **Effort : S.**
  - *Critère :* uniquement des faits confirmés (ex. « Atelier ou sur site », « Lun.–ven. 7 h–19 h », « Beauce, Chaudière-Appalaches et région de Québec »). Pas de « 24 h » ni de « gratuit » sans validation.
- [ ] **C1-05 — Clarifier la cible et le territoire** dans la mission et l'introduction : pour qui (particuliers, PME, industriels), où (Beauce et 200 km), comment (atelier ou sur site). **Effort : M.** *(dépend de P1-03)*
  - *Critère :* un visiteur comprend en 10 secondes s'il est concerné ; aucune contradiction avec le H1.
- [ ] **C1-06 — Renforcer le CTA secondaire** actuellement « Vérifier la couverture de votre secteur ». **Effort : S.**
  - *Critère :* libellé plus direct (« Appelez-nous », « Décrivez votre besoin » ou « Soumission gratuite » si validé), testé sur mobile.

---

## Phase 2 — Formulaire et parcours d'urgence

- [ ] **C2-01 — Permettre l'envoi de photos ou de plans** depuis le formulaire. **Effort : M.**
  - Vérifier d'abord si le forfait Formspree accepte les pièces jointes.
  - Solution de repli : bloc d'instructions « Envoyez vos photos à `mecaniquelucv@gmail.com` en précisant votre besoin ».
  - *Critère :* le visiteur peut transmettre une photo en moins de deux étapes ; test d'envoi réussi.
- [ ] **C2-02 — Ajouter un champ « délai souhaité » et une case « panne en cours »**. **Effort : S.**
  - *Critère :* champs facultatifs, accessibles au clavier, valeurs compréhensibles, aucune promesse de délai affichée.
- [ ] **C2-03 — Ajouter une micro-réassurance sous le bouton d'envoi**. **Effort : S.** *(dépend de C1-04 et C0-02)*
  - Exemples autorisés si confirmés : « Soumission gratuite · Réponse en X h ouvrables ».
  - *Critère :* texte exact, aucune donnée non validée, lisible sur mobile.
- [ ] **C2-04 — Prévoir un message de confirmation clair et un message d'erreur**. **Effort : S.**
  - *Critère :* après envoi, le visiteur sait que sa demande est reçue ; en cas d'échec, il est invité à appeler ou écrire.
- [ ] **C2-05 — Rendre l'urgence visible sur Contact** : bloc « Panne ou bris ? » avec le numéro de téléphone en premier. **Effort : S.** *(dépend de C0-02)*
  - *Critère :* affiché uniquement si la disponibilité réelle est confirmée ; sinon, formulation neutre sans promesse.
- [x] **C2-06 — Vérifier l'accessibilité du formulaire** : libellés associés, hauteur minimale de 44 px, `autocomplete`. **Effort : S.**
  - *Critère :* champs étiquetés, utilisables au clavier, rendu correct à 390 px. ✅ (état actuel ; à revalider après ajout des champs C2-01/C2-02).
- [ ] **C2-07 — Refaire un test d'envoi complet** après modification du formulaire. **Effort : S.**
  - *Critère :* courriel reçu à `mecaniquelucv@gmail.com`, données et pièces jointes intactes, confirmation affichée.

---

## Phase 3 — Réalisations et contexte

- [ ] **C3-01 — Réécrire les légendes des 3 projets de l'accueil** : problème, travail réalisé, résultat. **Effort : S.**
  - *Critère :* chaque légende apporte une information concrète, sans matériau ni délai non confirmé.
- [ ] **C3-02 — Corriger le lien « Voir toutes les réalisations »**. **Effort : S.** *(dépend de P3-02)*
  - Option A : créer `realisations.html` et y pointer.
  - Option B : renommer le lien en « Voir nos services de fabrication » tant que la galerie n'existe pas.
  - *Critère :* le libellé correspond exactement à la destination ; aucun lien trompeur.
- [ ] **C3-03 — Rédiger 3 études de cas courtes** (une par service prioritaire). **Effort : L.** *(doublon de P3-03 à P3-05)*
  - Gabarit : besoin → intervention → matériaux/procédés confirmés → résultat → photo avant/après → service lié.
  - *Critère :* contenu réel, autorisation client si nommé, photos originales légendées.
- [ ] **C3-04 — Remplacer les images et icônes dupliquées** : `features-4.webp` (Découpe/Réparation) et `services-4.png` (Modification/Réparation). **Effort : S.**
  - *Critère :* chaque service a une image et une icône distinctes, ou une décision documentée de les conserver.
- [ ] **C3-05 — Ajouter du contexte technique aux galeries de service** : légende courte (pièce, usage, intervention). **Effort : M.** *(dépend de C0-03)*
  - *Critère :* au moins une légende contextualisée par page, sans divulgation d'information client non autorisée.

---

## Phase 4 — Offre et pages manquantes

- [ ] **C4-01 — Créer la page « Soudage »** (`services-soudage.html`). **Effort : L.** *(dépend de C0-03 et C0-04)*
  - *Critère :* contenu unique, title/meta dédiés, FAQ, photos originales, CTA, JSON-LD `Service` + `FAQPage`, ajout au sitemap.
- [ ] **C4-02 — Créer la page « Maintenance industrielle »** (`services-maintenance.html`). **Effort : L.** *(dépend de C0-03 et C0-04)*
  - *Critère :* mêmes exigences que C4-01, avec exemples d'interventions réels.
- [ ] **C4-03 — Préciser les matériaux et capacités sur Fabrication** : matériaux réellement travaillés, épaisseurs, dimensions, procédés. **Effort : S.** *(dépend de C0-03)*
  - *Critère :* uniquement des faits validés ; aucune capacité maximale inventée.
- [ ] **C4-04 — Intégrer Soudage et Maintenance dans la navigation** : menu, accueil, page Services, pied de page, sitemap. **Effort : S.** *(dépend de C4-01 et C4-02)*
  - *Critère :* liens cohérents sur toutes les pages, aucun lien mort, rendu mobile vérifié.
- [ ] **C4-05 — Créer des pages locales** (« Soudeur à Saint-Georges », « Fabrication métallique à Thetford Mines », etc.). **Effort : L (récurrent).** *(dépend de C0-01 et de la stratégie P0-02)*
  - *Critère :* chaque page contient de l'information réellement distincte (interventions, photos, témoignages locaux). Pas de duplication de texte entre villes.
- [ ] **C4-06 — Étendre la FAQ conversion** à toutes les pages : prix/soumission, délais (si confirmés), urgence, matériaux, déplacement. **Effort : M.** *(recoupe P5-01)*
  - *Critère :* 5 à 7 questions par page, réponses courtes et factuelles, JSON-LD `FAQPage` synchronisé.

---

## Phase 5 — Mesure et amélioration continue

- [ ] **C5-01 — Marquer les conversions clés dans GA4** : `appel_telephone`, `courriel`, `demande_soumission`. **Effort : S.**
  - *Critère :* événements visibles dans GA4 et marqués comme conversions ; un clic de test est bien compté.
- [ ] **C5-02 — Suivre les appels et les soumissions par source** : campagne GBP, pages de service, pages locales. **Effort : M.**
  - *Critère :* au moins un paramètre de source ou un rapport GA4 permet de distinguer les origines.
- [ ] **C5-03 — Revue à 30 / 60 / 90 jours** : comparer clics d'appel, envois de formulaire et pages d'entrée. **Effort : S (récurrent).** *(recoupe P6-05)*
  - *Critère :* décision documentée par page : conserver, corriger ou retirer.
- [ ] **C5-04 — Tester deux variantes de CTA** (ex. « Demander une soumission » vs « Appelez-nous ») une fois le volume suffisant. **Effort : M.**
  - *Critère :* test limité dans le temps, mesure avant/après, aucune conclusion tirée sous 100 clics.

---

## Tableau de suivi synthétique

| ID | Tâche | Priorité | Effort | Dépend de | Statut |
|---|---|---|---|---|---|
| C0-01 | Preuves publiables | Critique | S | P0-01, P0-05 | ☐ |
| C0-02 | Délai de réponse et urgence | Critique | S | — | ☐ |
| C0-03 | Matériaux, procédés, capacités | Critique | S | P0-01 | ☐ |
| C0-04 | Autorisations photos | Critique | S | — | ☐ |
| C0-05 | Courriel professionnel | Moyenne | S | — | ☐ |
| C0-06 | Analyser les 4 pages restantes | Élevée | S | — | ☐ |
| C0-07 | Mentions de délais | Élevée | S | — | ☐ |
| C1-01 | Témoignages | Élevée | M | C0-01, P4-01 | ☐ |
| C1-02 | Note Google + avis | Élevée | S | P4-03, P4-04, P4-08 | ☐ |
| C1-03 | Photos de Luc et de l'atelier | Élevée | M | C0-04 | ☐ |
| C1-04 | Bloc de réassurance | Élevée | S | C0-01 | ☐ |
| C1-05 | Cible et territoire clarifiés | Élevée | M | P1-03 | ☐ |
| C1-06 | CTA secondaire renforcé | Moyenne | S | — | ☐ |
| C2-01 | Photos/plans dans le formulaire | Élevée | M | forfait Formspree | ☐ |
| C2-02 | Délai souhaité + panne en cours | Élevée | S | — | ☐ |
| C2-03 | Micro-réassurance sous le bouton | Élevée | S | C1-04, C0-02 | ☐ |
| C2-04 | Confirmation et erreur | Moyenne | S | C2-01 | ☐ |
| C2-05 | Bloc urgence sur Contact | Élevée | S | C0-02 | ☐ |
| C2-06 | Accessibilité du formulaire | Moyenne | S | — | ✅ |
| C2-07 | Test d'envoi complet | Élevée | S | C2-01 à C2-04 | ☐ |
| C3-01 | Légendes des projets accueil | Élevée | S | — | ☐ |
| C3-02 | Lien « Voir toutes les réalisations » | Élevée | S | P3-02 | ☐ |
| C3-03 | 3 études de cas | Élevée | L | C0-01, C0-04, P3-03 | ☐ |
| C3-04 | Images et icônes dupliquées | Moyenne | S | — | ☐ |
| C3-05 | Contexte des galeries | Moyenne | M | C0-03 | ☐ |
| C4-01 | Page Soudage | Élevée | L | C0-03, C0-04 | ☐ |
| C4-02 | Page Maintenance industrielle | Élevée | L | C0-03, C0-04 | ☐ |
| C4-03 | Matériaux et capacités (Fabrication) | Élevée | S | C0-03 | ☐ |
| C4-04 | Navigation Soudage/Maintenance | Élevée | S | C4-01, C4-02 | ☐ |
| C4-05 | Pages locales | Basse | L | C0-01, P0-02 | ☐ |
| C4-06 | FAQ conversion | Moyenne | M | C0-02, C0-03 | ☐ |
| C5-01 | Conversions GA4 | Élevée | S | — | 🟡 événements codés, marquage à faire |
| C5-02 | Suivi par source | Moyenne | M | C5-01 | ☐ |
| C5-03 | Revue 30/60/90 | Moyenne | S | C5-01 | ☐ |
| C5-04 | Test de CTA | Basse | M | C5-01 | ☐ |

---

## Annexe A — Modèle de collecte de témoignage

Demander au client, avec son accord :

1. Quel type de travail avez-vous confié à Mécanique Luc Vallerand ?
2. Quel problème ou besoin aviez-vous au départ ?
3. Qu'est-ce qui a été réalisé ?
4. Quel a été le résultat concret pour vous ?
5. Acceptez-vous que votre nom et votre entreprise apparaissent ? (sinon : prénom + type d'entreprise)
6. Acceptez-vous une photo de la réalisation ? Laquelle ?

> Conserver la réponse écrite. Reformuler au besoin, sans changer le sens, et faire approuver la version publiée.

## Annexe B — Réassurances : validé / à confirmer

| Mention | Statut | Source |
|---|---|---|
| Atelier ou sur site | ✅ Publiable | Fiche, services |
| Beauce, Chaudière-Appalaches et région de Québec | ✅ Publiable | Fiche, section 3 |
| Lundi au vendredi, de 7 h à 19 h | ✅ Publiable | Fiche, section 4 |
| Déplacement sur site facturé séparément | ✅ Publiable | Fiche, section 3 |
| Sept services (découpe, fabrication, installation, modification, réparation, maintenance, soudage) | ✅ Publiable | Fiche, section 5 |
| « Soumission gratuite » | 🟡 À confirmer | Non validé |
| « Réponse en 24 h ouvrables » | ⛔ À confirmer | Non validé |
| « Urgences disponibles hors horaires » | ⛔ À confirmer | Non validé |
| « Garantie » / « assuré » / « certifié » | ⛔ À confirmer | Aucune preuve fournie |
| Nombre d'années, nombre de projets, délais habituels | ⛔ À confirmer | Aucune donnée validée |

## Annexe C — Correspondance avec l'analyse

### Les 5 freins

| Frein de l'analyse | Tâches |
|---|---|
| 1. Presque aucune preuve | C0-01, C1-01, C1-02, C1-03, C3-03 |
| 2. Public visé flou | C1-05, C1-06 |
| 3. Rien ne cible l'urgence | C0-02, C2-02, C2-05 |
| 4. Formulaire sans réassurance | C2-01, C2-03, C2-04, C1-04 |
| 5. Réalisations sans contexte | C3-01, C3-02, C3-03, C3-05 |

### Plan d'action de l'analyse

| # | Action d'origine | Tâche(s) | Remarque |
|---|---|---|---|
| 1 | 3 à 5 témoignages | C1-01 | Authentiques et autorisés |
| 2 | Photos/plans, délai, urgence | C2-01, C2-02 | Vérifier le forfait Formspree |
| 3 | « Soumission gratuite · Réponse en 24 h » | C2-03, C1-04 | ⛔ Ne pas publier avant C0-02 |
| 4 | Google Business Profile + avis | C1-02 + P4-03, P4-04 | Suivi principal dans le backlog SEO |
| 5 | Photo de Luc et de l'atelier | C1-03 | Autorisation C0-04 |
| 6 | Réécrire le titre | C1-05 + P1-01 | Validation P0-06 |
| 7 | Remplacer « Notre mission » par des preuves | C1-05 + P1-03 | Dépend de C0-01 |
| 8 | Pages Soudage et Maintenance | C4-01, C4-02, C4-04 | Services déjà confirmés |
| 9 | Études de cas | C3-03 | Doublon P3-03 à P3-05 |
| 10 | FAQ sur toutes les pages | C4-06 | Recoupe P5-01 |
| 11 | Pages locales | C4-05 | Après les preuves et le contenu de base |
| 12 | Bouton d'appel fixe mobile | — | ✅ Déjà en place (MOB-09) |
| 13 | Suivi des appels et soumissions | C5-01, C5-02 | Recoupe P6-03 |

---

## Definition of Done (global)

Un item est terminé lorsque :

1. Le contenu ou le formulaire est publié dans le fichier HTML concerné et fonctionne sans JavaScript.
2. Aucune donnée non confirmée n'a été publiée (preuve, délai, prix, matériau, certification).
3. Les autorisations de témoignage, de photo ou de logo sont conservées.
4. Les liens internes et externes fonctionnent.
5. Le rendu est vérifié à 390 px et 768 px.
6. Le JSON-LD et le sitemap sont cohérents si le contenu change.
7. Le test d'envoi ou le clic de mesure a été effectué.
8. La case correspondante du backlog et le tableau de suivi sont mis à jour.
