# 📧 Guide : Comment envoyer l'email au client

## 🎯 Vous avez 2 types de fichiers

### **Fichiers .md (Markdown)** 📝
- Ce sont des **guides de référence** (comme celui-ci)
- À lire pour comprendre quoi écrire
- **NE PAS envoyer directement** au client
- Ouvrir avec : Notepad, TextEdit, ou tout éditeur de texte

### **Fichiers .html** 📧
- Ce sont des **templates d'email prêts à l'emploi**
- Avec votre charte graphique (bleus VibeWeb)
- **À copier-coller dans Outlook/Gmail**
- Ouvrir avec : Navigateur (Chrome, Firefox, Safari)

---

## 📨 **MÉTHODE RAPIDE : Envoyer l'email HTML**

### **Étape 1 : Personnaliser le template**

1. **Ouvrez `EMAIL_TEMPLATE_HTML.html`** avec un éditeur de texte (Notepad, TextEdit, VSCode)

2. **Remplacez ces 3 éléments :**

```html
[Prénom du client]
→ Remplacez par le vrai prénom (ex: "Théo")

[METTEZ_ICI_VOTRE_URL_TEMPORAIRE]
→ Remplacez par votre URL Hostinger (ex: "https://isol45-demo.hostingersite.com")

[VOTRE_URL]
→ Remplacez par votre URL (2 fois dans le document)
```

3. **Enregistrez le fichier** (Ctrl+S ou Cmd+S)

---

### **Étape 2 : Copier l'email dans Outlook**

**Méthode A : Via navigateur (Recommandé)**

1. **Double-cliquez** sur `EMAIL_TEMPLATE_HTML.html`
   - Le fichier s'ouvre dans votre navigateur (Chrome/Firefox/Safari)

2. **Sélectionnez tout** le contenu visible
   - `Ctrl+A` (Windows) ou `Cmd+A` (Mac)
   - Tout l'email doit être surligné en bleu

3. **Copiez**
   - `Ctrl+C` (Windows) ou `Cmd+C` (Mac)

4. **Ouvrez Outlook**
   - Créez un **nouveau message** (Ctrl+N)

5. **Collez** dans le corps du message
   - `Ctrl+V` (Windows) ou `Cmd+V` (Mac)
   - L'email formaté avec les couleurs doit apparaître

6. **Remplissez les détails**
   - **À :** Email du client ISOL45
   - **Objet :** `🎨 Prévisualisation de votre nouveau site ISOL45`

7. **Envoyez !** 🚀

---

**Méthode B : Depuis Outlook Web (Office 365)**

1. Allez sur **https://outlook.office.com**
2. Cliquez sur **"Nouveau message"**
3. Suivez les mêmes étapes de copier-coller
4. L'email sera parfaitement formaté

---

### **Étape 3 : Depuis Gmail (si vous utilisez Gmail)**

1. **Ouvrez le fichier** dans un navigateur
2. **Sélectionnez et copiez** tout (`Ctrl+A` puis `Ctrl+C`)
3. **Gmail** → **Nouveau message**
4. **Collez** dans le corps (`Ctrl+V`)
5. **Objet :** `🎨 Prévisualisation de votre nouveau site ISOL45`
6. **Envoyez**

---

## 📄 **À propos des fichiers .md (Markdown)**

### **Qu'est-ce qu'un fichier .md ?**

C'est un fichier texte avec un formatage simple :
- `#` = Titre
- `**texte**` = texte en gras
- `- élément` = liste à puces

### **Comment ouvrir un fichier .md ?**

**Option 1 : Éditeur de texte simple**
- Windows : Clic droit → Ouvrir avec → Notepad
- Mac : Clic droit → Ouvrir avec → TextEdit
- Linux : Gedit, nano, vim

**Option 2 : Éditeur de code (si vous en avez un)**
- Visual Studio Code
- Sublime Text
- Notepad++

**Option 3 : Visionneuse en ligne**
- Allez sur https://dillinger.io
- Glissez-déposez votre fichier .md
- Il s'affichera joliment formaté

### **Les fichiers .md que vous avez :**

| Fichier | Utilité |
|---------|---------|
| `EMAIL_PRESENTATION_CLIENT.md` | Guide de référence pour comprendre quoi écrire |
| `EMAIL_PROPOSITION_COMMERCIALE.md` | Email détaillé sur le ROI (si client hésite) |
| `GUIDE_INSTALLATION_SIGNATURE.md` | Instructions pour installer votre signature |
| `GUIDE_DEMO_CLIENT_HOSTINGER.md` | Guide complet du déploiement |
| `CHECKLIST_DEMO.md` | Liste des étapes à cocher |

**Ces fichiers sont pour VOUS aider** → Ne les envoyez pas au client !

---

## ✅ **RÉCAPITULATIF : Quel fichier utiliser ?**

### **Pour envoyer l'email au client :**
✅ **`EMAIL_TEMPLATE_HTML.html`** → Ouvrir dans navigateur → Copier → Coller dans Outlook

### **Pour vous inspirer du contenu :**
📖 **`EMAIL_PRESENTATION_CLIENT.md`** → Ouvrir avec Notepad → Lire

### **Si le client hésite sur le prix :**
Créez un autre email HTML avec le contenu de :
📖 **`EMAIL_PROPOSITION_COMMERCIALE.md`**

---

## 🎨 **Personnalisations possibles**

### **Changer l'URL du bouton "Découvrir le site" :**

Dans le fichier HTML, cherchez :
```html
<a href="[METTEZ_ICI_VOTRE_URL_TEMPORAIRE]"
```

Remplacez par :
```html
<a href="https://votre-domaine-temporaire.com"
```

### **Modifier le texte :**

Tout le texte visible peut être modifié directement dans le HTML :
- Ouvrez le fichier avec Notepad
- Cherchez le texte à modifier
- Changez-le
- Enregistrez

### **Ajouter une image :**

Si vous voulez ajouter une capture d'écran du site :
```html
<img src="https://lien-vers-votre-image.jpg" style="width: 100%; border-radius: 8px; margin: 20px 0;">
```

---

## 🆘 **Problèmes fréquents**

### **L'email n'est pas formaté quand je le colle**
→ Assurez-vous d'ouvrir le fichier HTML dans un **navigateur** (pas Notepad)
→ Utilisez Ctrl+A puis Ctrl+C depuis le navigateur

### **Les couleurs ne s'affichent pas**
→ Certains clients email bloquent les styles
→ Le contenu reste lisible, juste sans les couleurs

### **Je veux modifier les couleurs**
→ Ouvrez le HTML avec Notepad
→ Cherchez `#3b82f6` (bleu) et remplacez par une autre couleur
→ Outil utile : https://www.color-hex.com

### **Je ne vois pas le fichier .html**
→ Vérifiez l'extension des fichiers (ne doit pas être .txt)
→ Sur Windows : Affichage → Cochez "Extensions de noms de fichiers"

---

## 📋 **Template d'objet d'email (alternatives)**

Choisissez celui qui vous plaît :

1. `🎨 Prévisualisation de votre nouveau site ISOL45`
2. `Votre nouveau site web est prêt à être découvert !`
3. `ISOL45 : Découvrez votre site modernisé`
4. `✨ Votre site web nouvelle génération - ISOL45`
5. `Projet web ISOL45 : prévisualisation disponible`

---

## 💡 **Conseils supplémentaires**

**Timing d'envoi :**
- ✅ Mardi-Jeudi matin (9h-11h) : Meilleur taux d'ouverture
- ❌ Lundi matin (trop occupé)
- ❌ Vendredi après-midi (pensée week-end)

**Relance :**
Si pas de réponse après 3 jours :
```
Objet : Re: Prévisualisation de votre nouveau site ISOL45

Bonjour [Prénom],

J'espère que vous avez pu prendre le temps de consulter le site.
Avez-vous des questions ou souhaitez-vous échanger dessus ?

Je reste à votre disposition.

Cordialement,
Corentin
```

**Après l'envoi :**
- Notez la date d'envoi
- Relancez après 48-72h si pas de réponse
- Proposez un appel de 15 min pour présenter

---

## ✨ **Version simplifiée (si l'HTML ne fonctionne pas)**

Si vraiment vous n'arrivez pas à envoyer l'email HTML, voici une version texte simple à copier-coller :

```
Objet : Prévisualisation de votre nouveau site ISOL45

Bonjour [Prénom],

Suite à nos échanges, j'ai le plaisir de vous présenter la maquette 
interactive de votre futur site internet.

🌐 Lien de démonstration : [VOTRE_URL_TEMPORAIRE]

📄 Documents du projet :
• Devis détaillé : [URL]/devis-projet
• Contrat maintenance : [URL]/contrat-maintenance

Principales évolutions :
✅ Design moderne et professionnel
✅ Référencement naturel (SEO) optimisé
✅ Gestion simplifiée des réalisations
✅ Formulaire de contact automatisé

Résultats attendus :
📈 Visibilité en ligne accrue (page 1 Google)
💰 15-25 demandes de devis/mois (vs 3-5 actuellement)
🎯 ROI : site rentabilisé en 1-2 mois

Prochaines étapes :
1. Explorez le site et notez vos remarques
2. Partagez-le avec vos collaborateurs
3. Échangeons sur les ajustements éventuels
4. Mise en ligne sur www.isol45.fr

Je reste à votre disposition pour toute question ou organiser 
une présentation en visio.

Cordialement,

Corentin Villoing
Développeur Web - VibeWeb
📞 06 78 07 15 22
✉️ corentin@vibeweb.fr
```

---

**Vous êtes prêt ! Envoyez cet email et impressionnez votre client ! 🚀**
