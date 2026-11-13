# Guide de modification du site

Ce guide s'adresse à la personne qui met à jour le contenu du site **Mécanique Luc Vallerand** sans nécessairement connaître la programmation.

Pour la documentation technique complète, voir le [README principal](../README.md).

---

## Avant de commencer

1. **Faire une copie de sauvegarde** du dossier `mlv` (ou s'assurer que les changements sont bien enregistrés dans Git).
2. Ouvrir les fichiers `.html` avec un éditeur de texte simple (Visual Studio Code, Notepad++, Sublime Text). Éviter Word, qui ajoute du formatage invisible.
3. Travailler sur une seule page à la fois.
4. Après chaque modification, **ouvrir la page dans un navigateur** pour vérifier le résultat (double-clic sur le fichier `.html`).
5. Tester aussi en réduisant la fenêtre du navigateur (mode mobile).

> 💡 Les fichiers HTML sont sensibles à la casse et aux accents dans les noms de fichiers. Si vous renommez une image, pensez à mettre à jour son nom dans le HTML.

---

## 1. Modifier un texte visible

1. Ouvrir la page concernée.
2. Utiliser la recherche (`Ctrl+F`) pour trouver le texte à changer.
3. Modifier **uniquement le texte entre les balises**, pas les balises elles-mêmes.

Exemple :

```html
<!-- Avant -->
<h2>Fondé en 2019</h2>

<!-- Après -->
<h2>Fondé en 2019 à Saint-Honoré-de-Shenley</h2>
```

Ne pas toucher aux éléments comme `<h2>`, `</h2>`, `<p>`, `</p>`, `<div>`, etc.

---

## 2. Modifier les coordonnées

Fichier : **`contact.html`**

Chercher la section `Banner Area` (environ ligne 84).

| À modifier | Où |
|---|---|
| Texte du courriel | Entre `<a>` et `</a>` |
| Lien du courriel | Dans `href="mailto:..."` |
| Texte du téléphone | Entre `<a>` et `</a>` |
| Lien du téléphone | Dans `href="tel:..."` |
| Adresse | Dans les balises `<h4>` |

Exemple complet :

```html
<h3>Courriel: <a href="mailto:mecaniquelucv@gmail.com">mecaniquelucv@gmail.com</a></h3>
<hr />
<h3>Téléphone: <a href="tel:418-313-4032">418-313-4032</a></h3>
<hr /><br />
<h4>524 rue Principale</h4>
<h4>Saint-Honoré-de-Shenley QC</h4>
<h4>G0M 1V0</h4>
```

> ⚠️ Le texte affiché et le lien doivent être identiques. Si vous changez le numéro, changez les deux endroits.

---

## 3. Modifier la mission de l'entreprise

Fichier : **`index.html`** (et **`services-tous.html`**, qui est une copie).

Chercher `Notre mission` (`Ctrl+F`). Chaque paragraphe est encadré par `<p>` et `</p>`.

```html
<p>
  Votre nouveau paragraphe ici.
</p>
```

Laisser les `<br>` entre les paragraphes pour conserver l'espacement.

---

## 4. Remplacer ou ajouter une photo de réalisation

### Étape 1 — Préparer l'image

- Formats acceptés : `.jpg`, `.png`, `.webp`.
- Privilégier `.webp` (plus léger) ou un `.jpg` compressé.
- Largeur recommandée : 1200 à 1600 px maximum.
- Nom de fichier simple : `soudure-escalier-2024.jpg` (minuscules, tirets, pas d'accents ni d'espaces).

### Étape 2 — Déposer l'image

Dans le dossier du service concerné :

| Service | Dossier |
|---|---|
| Découpe | `images/découpe/` |
| Fabrication | `images/fabrication/` |
| Installation | `images/installation/` |
| Modification | `images/modification/` |
| Réparation | `images/réparation/` |

### Étape 3 — Modifier la galerie

Ouvrir la page du service et repérer le bloc `<div class="gallery">`.

```html
<figure>
  <img src="images/fabrication/ma-photo.jpg"
       alt="Description courte de la réalisation"
       loading="lazy"
       style="max-height:60vh" />
  <figcaption>Titre de la réalisation <small>Détail ou année</small></figcaption>
</figure>
```

- `src` : chemin de l'image (utiliser des `/`, pas des `\`).
- `alt` : description pour l'accessibilité et le référencement.
- `figcaption` : légende affichée sous l'image.

### Ajouter une nouvelle photo

Copier un bloc `<figure>...</figure>` complet et le coller à l'intérieur du `<div class="gallery">`, puis adapter le `src`, le `alt` et la légende.

### Supprimer une photo

Supprimer tout le bloc, de `<figure>` à `</figure>`.

---

## 5. Changer le logo

1. Préparer le nouveau logo au format `.webp` ou `.png`, fond transparent de préférence.
2. Le nommer **`logo-1.webp`**.
3. Remplacer le fichier `assets/img/logo-1.webp`.
4. Conserver une taille raisonnable (hauteur d'affichage maximale : 96 px dans l'en-tête).

Le logo apparaît dans l'en-tête et le pied de page de chaque page, mais il est chargé depuis le même fichier : un seul remplacement suffit.

---

## 6. Renseigner les réseaux sociaux

Actuellement, les icônes Facebook et Instagram ne mènent nulle part (`href="#"`).

Dans **chaque page**, chercher `fa-facebook` ou `fa-instagram` et remplacer :

```html
<!-- Avant -->
<li><a href="#"><i class="fab fa-facebook"></i></a></li>

<!-- Après -->
<li><a href="https://www.facebook.com/VOTRE-PAGE" target="_blank" rel="noopener">
  <i class="fab fa-facebook"></i>
</a></li>
```

Il y a deux blocs par page : un dans la bannière, un dans le pied de page.

---

## 7. Changer la vidéo YouTube

Fichier : **`index.html`** et **`services-tous.html`**

Chercher `youtube.com/embed`.

```html
<a class="video-popup" href="https://www.youtube.com/embed/NOUVEL_IDENTIFIANT">
  <i class="fas fa-play"></i>
</a>
```

L'identifiant se trouve dans l'URL de la vidéo : `https://www.youtube.com/watch?v=XXXXXXXXXXX` → utiliser `XXXXXXXXXXX`.

> ⚠️ Sur `index.html`, la classe actuelle est `popup-youtube` et la vidéo ne s'ouvre pas correctement. Remplacer par `video-popup` pour corriger le problème.

---

## 8. Ajouter un service au menu

1. Créer la page du service (voir le README, section 15).
2. Dans **toutes les pages**, chercher le sous-menu `Services` :

```html
<ul class="sub-menu">
  <li><a href="services-decoupe.html">Découpe</a></li>
  <li><a href="services-fabrication.html">Fabrication</a></li>
  <li><a href="services-installation.html">Installation</a></li>
  <li><a href="services-modification.html">Modification</a></li>
  <li><a href="services-reparation.html">Réparation</a></li>
</ul>
```

3. Ajouter une ligne :

```html
<li><a href="services-soudage.html">Soudage</a></li>
```

4. Ajouter aussi une carte sur l'accueil dans la section `Nos Services`, et éventuellement une vignette dans le carrousel.

---

## 9. Modifier le titre affiché dans l'onglet du navigateur

Dans le `<head>` de chaque page :

```html
<title>Mécanique Luc Vallerand</title>
```

Remplacer par un titre propre à la page :

```html
<title>Découpe de métal sur mesure | Mécanique Luc Vallerand</title>
```

Ajouter également une description :

```html
<meta name="description" content="Découpe de métal sur mesure à Saint-Honoré-de-Shenley : acier, aluminium et structures sur mesure.">
```

---

## 10. Publier les modifications

Une fois les changements terminés et testés :

```bash
git status
git diff
git add .
git commit -m "Mise à jour du contenu : description des changements"
git push
```

Le site publié sur GitHub Pages se met à jour automatiquement en quelques minutes.

Vérifier ensuite :

- `https://mecaniquelucv.com`
- la page modifiée directement
- l'affichage mobile

---

## 11. En cas de problème

| Symptôme | Cause probable | Solution |
|---|---|---|
| La page est blanche ou cassée | Balise HTML non fermée | Vérifier les `<div>`, `<p>`, `<figure>` |
| Une image ne s'affiche pas | Mauvais chemin ou nom de fichier | Vérifier `src`, la casse, les accents et l'extension |
| Le menu ne fonctionne plus | Erreur JavaScript | Ouvrir la console (`F12`) et vérifier les messages |
| Le style est perdu | Fichier CSS introuvable | Vérifier `assets/sass/style.css` |
| Les accents s'affichent mal | Encodage du fichier | Enregistrer en **UTF-8** |
| Le site ne se met pas à jour | Publication GitHub Pages en attente | Vérifier l'onglet Actions / Pages du dépôt |

### Retour arrière

Si une modification pose problème et qu'elle a déjà été envoyée :

```bash
git log --oneline
git revert <identifiant_du_commit>
git push
```

Ou restaurer le fichier depuis la sauvegarde avant de republier.

---

## 12. Bonnes pratiques

- Toujours **sauvegarder** avant une modification importante.
- Modifier **un seul type de contenu à la fois**.
- Éviter les majuscules et les accents dans les noms de fichiers et de dossiers.
- Toujours renseigner l'attribut `alt` des images.
- Ne pas coller de texte depuis Word sans le nettoyer (utiliser un éditeur de texte intermédiaire).
- Vérifier le rendu sur téléphone, pas seulement sur ordinateur.
- Mettre à jour la documentation si la structure du site change.

---

*Pour toute question technique, consulter le [README principal](../README.md) ou contacter la personne responsable du site.*
