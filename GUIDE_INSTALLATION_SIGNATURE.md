# 📧 Guide d'installation de votre signature Outlook

## 🎯 2 versions disponibles

**Version 1 : Signature claire** (`SIGNATURE_OUTLOOK.html`)
- Fond blanc
- Design épuré et professionnel
- ✅ **Recommandé pour usage quotidien**

**Version 2 : Signature colorée** (`SIGNATURE_OUTLOOK_V2.html`)
- Fond bleu dégradé (comme votre carte de visite)
- Design impactant
- ✅ **Recommandé pour emails marketing/commerciaux**

---

## 💻 Installation sur Outlook Desktop (Windows/Mac)

### **Méthode 1 : Copier-Coller HTML (Recommandé)**

1. **Ouvrir le fichier HTML dans un navigateur**
   - Localisez `SIGNATURE_OUTLOOK.html` sur votre ordinateur
   - Double-clic pour l'ouvrir dans Chrome/Firefox/Safari

2. **Sélectionner toute la signature**
   - `Ctrl+A` (Windows) ou `Cmd+A` (Mac)
   - La signature entière doit être surlignée

3. **Copier**
   - `Ctrl+C` (Windows) ou `Cmd+C` (Mac)

4. **Ouvrir Outlook**
   - Allez dans **Fichier** → **Options** → **Courrier** → **Signatures**
   - Ou raccourci : cherchez "Signatures" dans la barre de recherche Outlook

5. **Créer une nouvelle signature**
   - Cliquez sur **"Nouvelle"**
   - Nom : `VibeWeb - Principale`

6. **Coller la signature**
   - Cliquez dans la zone d'édition de signature
   - `Ctrl+V` (Windows) ou `Cmd+V` (Mac)
   - La signature formatée doit apparaître

7. **Configurer par défaut**
   - Sous "Choisir la signature par défaut"
   - **Nouveaux messages** : Sélectionnez `VibeWeb - Principale`
   - **Réponses/transferts** : Sélectionnez `VibeWeb - Principale`

8. **Enregistrer**
   - Cliquez sur **OK**

---

### **Méthode 2 : Via éditeur de texte (alternative)**

Si la méthode 1 ne fonctionne pas :

1. Ouvrez le fichier HTML avec **Notepad** (Windows) ou **TextEdit** (Mac)
2. Copiez TOUT le code HTML
3. Dans Outlook, créez une nouvelle signature
4. Au lieu de coller directement, utilisez l'éditeur HTML d'Outlook :
   - Dans la fenêtre de signature, cherchez l'option "Source HTML" ou "Code source"
   - Collez le code HTML
   - Revenez en mode visuel

---

## 📱 Installation sur Outlook Web (Office 365)

1. **Connexion**
   - Allez sur https://outlook.office.com
   - Connectez-vous avec votre compte

2. **Paramètres**
   - Cliquez sur l'engrenage ⚙️ en haut à droite
   - Cherchez **"Signatures"** dans la recherche
   - Ou allez dans **Afficher tous les paramètres Outlook** → **Courrier** → **Composer et répondre**

3. **Créer une signature**
   - Cliquez sur **+ Nouvelle signature**
   - Nom : `VibeWeb`

4. **Copier-Coller**
   - Ouvrez `SIGNATURE_OUTLOOK.html` dans un navigateur
   - Sélectionnez tout (`Ctrl+A` / `Cmd+A`)
   - Copiez (`Ctrl+C` / `Cmd+C`)
   - Collez dans l'éditeur Outlook Web (`Ctrl+V` / `Cmd+V`)

5. **Configurer par défaut**
   - Cochez **"Inclure automatiquement ma signature dans les nouveaux messages"**
   - Sélectionnez votre signature dans le menu déroulant

6. **Enregistrer**
   - Cliquez sur **Enregistrer** en haut

---

## 📧 Installation sur Gmail (Bonus)

Si vous utilisez aussi Gmail :

1. **Paramètres Gmail**
   - Ouvrez Gmail
   - Cliquez sur l'engrenage ⚙️ → **Voir tous les paramètres**
   - Onglet **Général**

2. **Section Signature**
   - Descendez jusqu'à **Signature**
   - Cliquez sur **+ Créer**
   - Nom : `VibeWeb`

3. **Insérer la signature**
   - Ouvrez `SIGNATURE_OUTLOOK.html` dans un navigateur
   - Sélectionnez et copiez toute la signature
   - Collez dans l'éditeur Gmail

4. **Configurer**
   - **Pour les nouveaux e-mails** : Sélectionnez `VibeWeb`
   - **Pour les réponses/transferts** : Sélectionnez `VibeWeb`

5. **Enregistrer**
   - Descendez tout en bas et cliquez sur **Enregistrer les modifications**

---

## 🎨 Personnalisation

### **Modifier les liens**

Dans le code HTML, cherchez et modifiez :

```html
<!-- Email -->
<a href="mailto:corentin@vibeweb.fr">

<!-- Téléphone -->
<a href="tel:0678071522">

<!-- Site web -->
<a href="https://vibeweb.fr">
```

### **Modifier les couleurs (Version 1)**

Cherchez dans le code :
- `#3b82f6` → Bleu principal
- `#1e40af` → Bleu foncé
- `#2c3e50` → Texte foncé

### **Modifier les couleurs (Version 2)**

- `#1e3a5f` → Bleu foncé fond
- `#60a5fa` → Bleu clair accents

---

## ✅ Vérification

Pour tester votre signature :

1. **Nouveau message**
   - Créez un nouveau message dans Outlook
   - Votre signature doit apparaître automatiquement en bas

2. **Envoyez-vous un test**
   - Envoyez-vous un email
   - Vérifiez que la signature s'affiche correctement
   - Testez les liens (email, téléphone, site web)

---

## 🆘 Problèmes fréquents

### **La signature n'apparaît pas**
→ Vérifiez que vous l'avez bien définie par défaut dans les paramètres

### **Les couleurs ne s'affichent pas**
→ Certains clients email bloquent les styles. Utilisez la Version 1 (plus compatible)

### **Les liens ne fonctionnent pas**
→ Vérifiez que les URL sont correctes (avec `https://` pour le site web)

### **La signature est trop grande**
→ Dans Outlook, vous pouvez ajuster la taille après l'avoir collée

### **Erreur lors du copier-coller**
→ Essayez d'ouvrir le fichier HTML dans un autre navigateur (Chrome recommandé)

---

## 💡 Conseils d'utilisation

**Signature complète (Version 1 ou 2)**
- ✅ Premiers contacts
- ✅ Emails commerciaux
- ✅ Propositions
- ✅ Emails externes

**Signature réduite (créez une variante)**
- Pour les réponses rapides
- Conservez juste : Nom, titre, téléphone, email

**Multiple signatures**
- Créez plusieurs versions selon le contexte
- Ex: "VibeWeb - Complète", "VibeWeb - Simple", "VibeWeb - Marketing"

---

## 📊 Tracking (optionnel)

Pour savoir si vos emails sont lus, vous pouvez :
1. Utiliser les accusés de lecture Outlook
2. Ajouter un pixel de tracking (services tiers)
3. Utiliser des outils comme Mailtrack, HubSpot, etc.

---

**Besoin d'aide ?**
📞 06 78 07 15 22
✉️ corentin@vibeweb.fr

Bonne utilisation de votre nouvelle signature professionnelle ! ✨
