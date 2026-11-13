# Plan de mise à jour des bibliothèques (Bootstrap, jQuery, Font Awesome, etc.)

> Site : Mécanique Luc Vallerand — site vitrine statique
> Date : 11 novembre 2026
> État actuel (après LIB-01 à LIB-06) : Bootstrap 5.3.3 (CSS seul), JavaScript vanilla (jQuery supprimé), Font Awesome Free 6, Swiper 11.2.10, Magnific Popup supprimé (lien direct YouTube), menu mobile maison (MeanMenu supprimé).

## 1. Inventaire actuel

| Bibliothèque | Version actuelle | Dernière stable | Utilisation réelle | Priorité |
|---|---|---|---|---|
| jQuery | 3.7.1 | supprimé (LIB-06) | Remplacé par JavaScript vanilla dans `custom.js` | Terminé |
| Bootstrap CSS | 5.3.3 | 5.3.3 | Grille + utilitaires (`container`, `row`, `col-*`, `d-flex`) | Terminé (LIB-01) |
| Bootstrap JS | — | — | Supprimé (aucun composant interactif) | — |
| Font Awesome | Free 6 | 6.x | Icônes (`fas`, `fab`) | Terminé (LIB-03) |
| Swiper | 11.2.10 | 11.x | Carrousel d'accueil uniquement | Terminé (LIB-04) |
| Magnific Popup | supprimé | — | Remplacé par lien direct YouTube | Terminé (LIB-02) |
| MeanMenu | supprimé | — | Menu mobile maison | Terminé (LIB-05) |
| Animate.css | — | — | **Supprimé en phase 3** | — |
| Popper | — | — | **Supprimé en phase 3** | — |

### Constats

- **jQuery a été supprimé** (LIB-06) : `custom.js` est désormais en JavaScript vanilla.
- **Bootstrap JS n'est plus utilisé** : seul le CSS (grille + utilitaires) reste.
- **Font Awesome Free 6** est utilisé (LIB-03) ; les icônes `fal` ont été remplacées par des équivalents `fas`.
- **Magnific Popup a été supprimé** (LIB-02) : lien direct YouTube.
- **MeanMenu a été supprimé** (LIB-05) : menu mobile maison.
- **Swiper 11** est utilisé (LIB-04).

---

## 2. Stratégie générale

1. **Ne rien casser** : travailler branche par branche, tester sur les 9 pages et 4 tailles d'écran.
2. **Une bibliothèque à la fois**, dans l'ordre de risque croissant.
3. **Garder un repli** : conserver les anciens fichiers dans un dossier `assets/vendor-legacy/` jusqu'à validation.
4. **Mesurer** : Lighthouse + test navigateur avant/après chaque étape.
5. **Ne pas modifier `assets/sass/style.css`** (CSS principal) ; surcharger via `phase1.css`/`phase2.css`.

---

## 3. Plan par phases

### Phase A — Bootstrap CSS 5.1.3 → 5.3.3 (faible risque)

**Objectif** : profiter des correctifs et de la cohérence avec la doc Bootstrap 5.3.

1. Télécharger `bootstrap.min.css` 5.3.3 (et sa map) depuis jsdelivr/npm.
2. Remplacer `assets/css/bootstrap.min.css`.
3. Vérifier :
   - Grille (`container`, `row`, `col-xl-*`) : inchangée.
   - Utilitaires (`d-flex`, `align-items-center`, `section-padding` custom) : inchangés.
   - `bootstrap-grid.css` non utilisé : pas besoin de mise à jour.
4. Tester les 9 pages × 4 tailles d'écran (pas de régression visuelle attendue).
5. Mettre à jour la doc (`README.md` section 3 et 7).

**Risque** : très faible. Bootstrap 5.3 est rétrocompatible pour la grille.

### Phase B — Magnific Popup → `<dialog>` natif (risque moyen, gain élevé)

**Objectif** : supprimer une dépendance abandonnée (2016) et alléger la page d'accueil.

1. Remplacer le bouton `.video-popup` par un bouton qui ouvre un `<dialog>` natif.
2. Implémenter l'ouverture/fermeture en ~15 lignes de JS vanilla dans `custom.js` :
   - `dialog.showModal()`, fermeture au clic sur le backdrop ou Échap (natif).
   - Intégrer l'iframe YouTube dans le dialog.
3. Supprimer `jquery.magnific-popup.min.js` et `magnific-popup.css` des pages et du dépôt.
4. Tester : ouverture, lecture, fermeture (clic, Échap, croix), accessibilité (focus).
5. Mettre à jour `custom.js` (table des fonctions) et `README.md`.

**Gain** : ~30 Ko JS + 7 Ko CSS supprimés, dépendance abandonnée retirée.

### Phase C — Font Awesome 5 → 6 (risque moyen)

**Option 1 (recommandée) : passer à Font Awesome Free 6**

1. Remplacer `assets/css/all.css` et `assets/webfonts/*` par la version Free 6.
2. Remplacer les icônes `fal` (light) par des équivalents `fas` :
   - `fal fa-times` → `fas fa-xmark`
   - `fal fa-angle-up/down` → `fas fa-chevron-up/down`
3. Vérifier les icônes utilisées : `fa-phone`, `fa-arrow-right`, `fa-play`, `fa-facebook-f`, `fa-instagram`, `fa-th-large`.
4. Tester le rendu (poids des glyphes, tailles).

**Option 2 : upgrader Font Awesome Pro à la v6**

1. Mettre à jour via le kit Font Awesome (CDN) ou les fichiers Pro 6.
2. Vérifier la licence (kit ID).
3. Moins de changements d'icônes, mais dépendance à un service externe.

**Recommandation** : Option 1 (Free) pour supprimer la dépendance à une licence et réduire le poids (~30 % de glyphes en moins).

### Phase D — Swiper 7 → 11 (ou remplacement) (risque moyen)

**Option A (mise à jour)**

1. Remplacer `swiper-bundle.min.js/css` par la v11.
2. Adapter l'initialisation dans `custom.js` :
   - Modules : `import Swiper from 'swiper'` (ou garder le bundle UMD).
   - Classes CSS : `swiper` (déjà utilisé), `swiper-wrapper`, `swiper-slide` (inchangés).
   - Options : `slidesPerView`, `breakpoints`, `loop`, `speed` (inchangés dans v11).
3. Tester le carrousel sur desktop et mobile.

**Option B (remplacement par CSS scroll-snap)**

1. Remplacer le carrousel Swiper par un conteneur `overflow-x: auto; scroll-snap-type: x mandatory`.
2. Supprimer Swiper entièrement (~120 Ko JS + 15 Ko CSS).
3. Effort plus élevé (refonte HTML/CSS) mais gain maximal.

**Recommandation** : Option A à court terme (mise à jour), Option B à moyen terme si on veut supprimer jQuery/Swiper.

### Phase E — MeanMenu → menu mobile maison (risque moyen)

**Objectif** : supprimer une bibliothèque ciblant IE7/8.

1. Implémenter un menu mobile en CSS + JS vanilla :
   - Bouton hamburger → toggle d'une classe `.menu-open` sur `<body>` ou `.header`.
   - Sous-menus en accordéon (clic pour déplier).
   - Fermeture au clic en dehors ou sur un lien.
2. Supprimer `jquery.meanmenu.min.js` et `meanmenu.min.css` (ou garder le CSS minimal).
3. Tester sur mobile (ouverture, défilement, sous-menus, fermeture).

### Phase F — Suppression de jQuery (long terme, optionnel)

**Prérequis** : Phases B, D, E terminées (plus aucune dépendance jQuery).

1. Réécrire `custom.js` en JavaScript vanilla :
   - `$("[data-background]")` → `document.querySelectorAll`.
   - `$.fn.meanmenu` → supprimé (Phase E).
   - Swiper init → vanilla (Phase D).
   - Magnific → `<dialog>` (Phase B).
   - GA4 délégateur → vanilla `addEventListener`.
   - Visionneuse de galerie → vanilla.
2. Supprimer `jquery-3.7.0.min.js`.
3. Gain : ~90 Ko JS supprimés, site plus moderne et plus rapide.

---

## 4. Ordre d'exécution recommandé

```
Phase A (Bootstrap)  →  Phase B (Magnific)  →  Phase C (Font Awesome)
        ↓
Phase D (Swiper)  →  Phase E (MeanMenu)  →  Phase F (jQuery, optionnel)
```

Chaque phase = une branche Git + tests + commit séparé.

---

## 5. Tests requis à chaque phase

- [ ] Les 9 pages s'ouvrent sans erreur console (Chrome headless).
- [ ] Aucun débordement horizontal à 1440 px et 390 px.
- [ ] Galerie et visionneuse fonctionnent (clic, clavier, Échap).
- [ ] Carrousel de services défile correctement.
- [ ] Menu mobile s'ouvre et se ferme.
- [ ] Bouton vidéo ouvre la modale.
- [ ] Lighthouse mobile : score ≥ score actuel (57 accueil / 62 fabrication).
- [ ] `git diff --check` sans erreur.

## 6. Rollback

- Conserver les anciens fichiers dans `assets/vendor-legacy/` pendant la phase de validation.
- Chaque phase = un commit séparé → `git revert <commit>` possible.
- Ne jamais mettre à jour plusieurs bibliothèques dans le même commit.

---

## 7. Estimation des gains

| Étape | Gain JS | Gain CSS | Risque |
|---|---|---|---|
| Phase A (Bootstrap) | — | ~0 (mise à jour) | Faible |
| Phase B (Magnific → dialog) | ~30 Ko | ~7 Ko | Moyen |
| Phase C (FA Free) | — | ~60 Ko (glyphes) | Moyen |
| Phase D (Swiper → scroll-snap) | ~120 Ko | ~15 Ko | Moyen |
| Phase E (MeanMenu → maison) | ~10 Ko | ~3 Ko | Moyen |
| Phase F (suppression jQuery) | ~90 Ko | — | Élevé |

**Total potentiel** : ~250 Ko de JS + ~85 Ko de CSS en moins, soit une réduction d'environ 30 % du poids total des assets.

---

*Document généré le 11 novembre 2026. À valider avant application.*
