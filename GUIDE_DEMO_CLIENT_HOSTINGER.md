# 🎯 GUIDE EXPRESS : Site de démo pour le client (Hostinger)

## 🎬 Objectif
Mettre le site ISOL45 en ligne sur un **domaine temporaire Hostinger** pour que le client puisse le voir et naviguer AVANT de signer le devis.

**Durée totale : 45 minutes**  
**Coût : 0€** (tout est gratuit pour la démo)

---

## 🏗️ Architecture de démo

```
┌─────────────────────────────────────────────────┐
│                   CLIENT                        │
│         https://isol45-demo.com                 │
└──────────────────┬──────────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │   HOSTINGER FTP     │  ← Frontend React (pages HTML/CSS/JS)
        │  (Hébergement Web)  │
        └──────────┬──────────┘
                   │
                   │ Appels API
                   │
        ┌──────────▼──────────┐
        │    RAILWAY.APP      │  ← Backend FastAPI (gratuit)
        │    (Backend API)    │
        └──────────┬──────────┘
                   │
                   │ Connexion base
                   │
        ┌──────────▼──────────┐
        │  MONGODB ATLAS      │  ← Base de données (gratuit)
        │   (Database)        │
        └─────────────────────┘
```

**Pourquoi cette architecture ?**
- ✅ Hostinger hébergement web classique ne supporte pas Python/FastAPI
- ✅ Railway héberge gratuitement le backend (500h/mois gratuit)
- ✅ MongoDB Atlas gratuit jusqu'à 512MB
- ✅ Le client voit un site 100% fonctionnel
- ✅ Coût total : 0€

---

## 📋 Ce dont vous avez besoin

- [x] Compte Hostinger (vous l'avez déjà)
- [ ] Compte MongoDB Atlas (gratuit) → https://www.mongodb.com/cloud/atlas
- [ ] Compte Railway.app (gratuit) → https://railway.app
- [ ] Compte GitHub (gratuit si pas déjà) → https://github.com
- [ ] FileZilla (logiciel FTP gratuit) → https://filezilla-project.org

---

## 🚀 ÉTAPE 1 : Préparer MongoDB Atlas (Base de données) - 10 min

### 1.1 Créer le compte

1. Allez sur **https://www.mongodb.com/cloud/atlas**
2. Cliquez sur **"Try Free"**
3. Inscrivez-vous avec Google ou email
4. Validez votre email

### 1.2 Créer le cluster gratuit

1. Cliquez sur **"Build a Database"**
2. Choisissez **"M0 FREE"** (Shared)
3. Provider : **AWS**
4. Region : **Frankfurt (eu-central-1)** ou **Paris (eu-west-3)**
5. Cluster Name : `isol45-cluster`
6. Cliquez sur **"Create"**
7. ⏰ Attendez 3-5 minutes que le cluster se crée

### 1.3 Créer un utilisateur pour la base

1. Une popup s'ouvre pour créer un utilisateur
2. Username : `isol45admin`
3. Cliquez sur **"Autogenerate Secure Password"**
4. 📝 **COPIEZ ET NOTEZ CE MOT DE PASSE !** (exemple: `xK9mP2vL4nQ8`)
5. Cliquez sur **"Create User"**

### 1.4 Autoriser l'accès depuis n'importe où

1. Cliquez sur **"Network Access"** (menu gauche)
2. Cliquez sur **"Add IP Address"**
3. Sélectionnez **"Allow Access from Anywhere"**
4. Adresse IP : `0.0.0.0/0` (déjà rempli)
5. Cliquez sur **"Confirm"**

### 1.5 Récupérer la chaîne de connexion

1. Retournez sur **"Database"** (menu gauche)
2. Cliquez sur **"Connect"** (sur votre cluster)
3. Choisissez **"Drivers"**
4. Copiez la chaîne de connexion qui ressemble à :
```
mongodb+srv://isol45admin:<password>@isol45-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

5. 📝 **REMPLACEZ `<password>` par le mot de passe généré à l'étape 1.3**
6. **GARDEZ cette chaîne** dans un fichier texte

Exemple final :
```
mongodb+srv://isol45admin:xK9mP2vL4nQ8@isol45-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

✅ **MongoDB est prêt !**

---

## 🚂 ÉTAPE 2 : Déployer le Backend sur Railway - 15 min

### 2.1 Pousser votre code sur GitHub

**Si vous n'avez PAS encore mis le code sur GitHub :**

```bash
# Ouvrir un terminal dans le dossier de votre projet
cd /chemin/vers/votre/projet

# Initialiser Git
git init

# Créer un fichier .gitignore
echo "node_modules/
build/
__pycache__/
*.pyc
venv/
.env
.DS_Store" > .gitignore

# Ajouter tous les fichiers
git add .
git commit -m "Initial commit - Site ISOL45"
```

Maintenant sur **GitHub.com** :
1. Créez un nouveau repository (bouton **"New"**)
2. Nom : `isol45-website`
3. Visibilité : **Private** (pour ne pas partager le code)
4. Ne cochez rien d'autre
5. Cliquez sur **"Create repository"**

Retour au terminal :
```bash
# Lier votre projet au repository GitHub
git remote add origin https://github.com/VOTRE-USERNAME/isol45-website.git
git branch -M main
git push -u origin main
```

### 2.2 Créer un compte Railway

1. Allez sur **https://railway.app**
2. Cliquez sur **"Login"**
3. Choisissez **"Sign in with GitHub"**
4. Autorisez Railway à accéder à GitHub

### 2.3 Déployer le backend

1. Sur Railway, cliquez sur **"New Project"**
2. Sélectionnez **"Deploy from GitHub repo"**
3. Si demandé, autorisez Railway à accéder à vos repositories
4. Sélectionnez votre repository **`isol45-website`**
5. Railway va commencer à analyser le code...

### 2.4 Configurer le service backend

1. Railway a créé un service, cliquez dessus
2. Allez dans **"Settings"** (⚙️ en haut à droite)

**Root Directory :**
- Descendez jusqu'à **"Root Directory"**
- Entrez : `backend`
- Cliquez sur **"Update"**

**Start Command :**
- Descendez jusqu'à **"Start Command"**
- Entrez : `uvicorn server:app --host 0.0.0.0 --port $PORT`
- Cliquez sur **"Update"**

**Custom Build Command :**
- Entrez : `pip install -r requirements.txt`
- Cliquez sur **"Update"**

### 2.5 Ajouter les variables d'environnement

1. Allez dans **"Variables"** (en haut)
2. Cliquez sur **"New Variable"**
3. Ajoutez ces 3 variables :

**Variable 1 :**
- Variable : `MONGO_URL`
- Value : `mongodb+srv://isol45admin:xK9mP2vL4nQ8@isol45-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority`
  (Collez votre vraie chaîne de connexion MongoDB de l'étape 1.5)

**Variable 2 :**
- Variable : `DB_NAME`
- Value : `isol45_db`

**Variable 3 :**
- Variable : `CORS_ORIGINS`
- Value : `*`

4. Railway va automatiquement **redéployer**
5. ⏰ Attendez 2-3 minutes que le déploiement se termine

### 2.6 Récupérer l'URL publique du backend

1. Retournez dans **"Settings"**
2. Descendez jusqu'à **"Networking"**
3. Cliquez sur **"Generate Domain"**
4. Une URL apparaît, type : `isol45-website-production.up.railway.app`
5. 📝 **COPIEZ cette URL complète** dans un fichier texte
6. Ajoutez `https://` devant si ce n'est pas déjà fait

Exemple : `https://isol45-website-production.up.railway.app`

### 2.7 Tester le backend

Ouvrez votre navigateur et testez :
```
https://votre-url-railway.up.railway.app/api/
```

Vous devriez voir : `{"message":"ISOL45 API - Bienvenue"}`

Si ça marche, testez les services :
```
https://votre-url-railway.up.railway.app/api/services
```

Vous devriez voir du JSON avec la liste des services.

✅ **Backend déployé et fonctionnel !**

---

## 💻 ÉTAPE 3 : Préparer le Frontend - 10 min

### 3.1 Configurer l'URL du backend

Sur votre ordinateur, ouvrez un terminal dans le dossier du projet :

```bash
cd frontend

# Créer le fichier .env
nano .env
```

Collez ce contenu (remplacez par votre vraie URL Railway) :
```env
REACT_APP_BACKEND_URL=https://isol45-website-production.up.railway.app
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

**Enregistrez** : `Ctrl+X`, puis `Y`, puis `Entrée`

**Sur Windows, utilisez plutôt Notepad :**
- Créez un fichier `.env` dans le dossier `frontend/`
- Collez le contenu ci-dessus

### 3.2 Installer les dépendances et build

```bash
# Installer les dépendances (si pas déjà fait)
yarn install

# Créer la version de production
yarn build
```

⏰ Attendez 2-3 minutes. Un dossier `build/` est créé avec tout le site.

✅ **Frontend prêt pour l'upload !**

---

## 🌐 ÉTAPE 4 : Déployer sur Hostinger - 15 min

### 4.1 Récupérer vos identifiants FTP Hostinger

1. Connectez-vous à **hpanel.hostinger.com**
2. Sélectionnez votre hébergement
3. Allez dans **"Fichiers"** → **"Gestionnaire FTP"** ou **"Comptes FTP"**
4. Si aucun compte n'existe, créez-en un :
   - Username : `isol45demo` (ou ce que vous voulez)
   - Mot de passe : Générez-en un fort
   - Répertoire : `/public_html`
   - Cliquez sur **"Créer"**
5. 📝 **Notez** :
   - Hôte FTP : `ftp.votredomaine.com` (ou l'IP fournie)
   - Port : `21`
   - Username
   - Mot de passe

### 4.2 Se connecter avec FileZilla

1. Téléchargez et installez **FileZilla** : https://filezilla-project.org/download.php?type=client
2. Ouvrez FileZilla
3. En haut, remplissez :
   - **Hôte** : `ftp.votredomaine.com` (ou l'adresse IP)
   - **Identifiant** : votre username FTP
   - **Mot de passe** : votre mot de passe FTP
   - **Port** : `21`
4. Cliquez sur **"Connexion rapide"**
5. Si demandé, acceptez le certificat

### 4.3 Vider le dossier public_html (si nécessaire)

Dans FileZilla, partie **SERVEUR** (à droite) :
1. Naviguez vers `/public_html`
2. Si il y a des fichiers dedans (comme `index.html`), **supprimez-les tous**
3. Gardez uniquement `.htaccess` si il existe

### 4.4 Uploader le site

Dans FileZilla :

**Partie LOCALE (à gauche)** :
1. Naviguez vers votre dossier `frontend/build/`
2. Vous devriez voir : `index.html`, `static/`, `asset-manifest.json`, etc.

**Partie SERVEUR (à droite)** :
1. Assurez-vous d'être dans `/public_html`

**Upload :**
1. **Sélectionnez TOUT** dans `frontend/build/` (Ctrl+A)
2. **Glissez-déposez** vers la partie serveur (public_html)
3. ⏰ Attendez 5-10 minutes (dépend de votre connexion)

### 4.5 Créer le fichier .htaccess

Dans FileZilla, partie **SERVEUR** (`public_html`) :
1. Clic droit → **"Créer un fichier"**
2. Nom : `.htaccess`
3. Clic droit sur le fichier → **"Voir/Éditer"**
4. Collez ce contenu :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Compression Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

5. **Enregistrez** et fermez l'éditeur
6. Dans FileZilla, confirmez l'upload

✅ **Site uploadé sur Hostinger !**

### 4.6 Configurer le domaine temporaire

**Option 1 : Utiliser le domaine temporaire Hostinger**

Si vous venez de créer l'hébergement, Hostinger vous donne un domaine temporaire gratuit type :
- `votresite.hostingersite.com`
- `votresite.preview-domain.com`

Pour le trouver :
1. Dans hPanel Hostinger
2. Allez dans **"Domaines"**
3. Vous verrez votre domaine temporaire gratuit

**Option 2 : Acheter un domaine temporaire pas cher**

1. Dans hPanel → **"Domaines"** → **"Acheter un domaine"**
2. Cherchez un nom disponible type : `isol45-demo.xyz` ou `isol45-test.space`
3. Prix : 1-2€/an pour `.xyz` ou `.space`
4. Achetez-le et associez-le à votre hébergement
5. ⏰ Attendez 5-30 minutes pour la propagation DNS

**Option 3 : Utiliser un sous-domaine**

Si vous avez déjà un domaine :
1. Dans hPanel → **"Domaines"** → **"Gestion DNS"**
2. Ajoutez un enregistrement **A** :
   - Type : `A`
   - Nom : `demo` ou `isol45`
   - Pointe vers : IP de votre hébergement Hostinger
3. Vous aurez : `demo.votredomaine.com`

---

## ✅ ÉTAPE 5 : Tester le site - 5 min

### 5.1 Ouvrir le site

Ouvrez votre navigateur et allez sur :
```
https://votredomaine-temporaire.com
```
ou
```
http://votredomaine-temporaire.com
```

### 5.2 Checklist de test

Vérifiez que tout fonctionne :

- [ ] ✅ La page d'accueil s'affiche correctement
- [ ] ✅ Navigation : Clic sur "Services" → page Services charge
- [ ] ✅ Navigation : Clic sur "Réalisations" → page Réalisations charge
- [ ] ✅ Navigation : Clic sur "Nos atouts" → page Atouts charge
- [ ] ✅ Les cartes Services s'affichent (6 services)
- [ ] ✅ Les cartes Réalisations s'affichent (5 réalisations)
- [ ] ✅ Clic sur un service → page détail service
- [ ] ✅ Clic sur une réalisation → page détail réalisation
- [ ] ✅ Formulaire de contact : tous les champs présents
- [ ] ✅ Remplir et soumettre le formulaire → message de succès

**Documents PDF :**
- [ ] ✅ Accéder à `/devis-projet` → page s'affiche
- [ ] ✅ Accéder à `/contrat-maintenance` → page s'affiche
- [ ] ✅ Bouton "Imprimer PDF" fonctionne

### 5.3 Tester sur mobile

1. Ouvrez le site sur votre smartphone
2. Vérifiez que tout est bien responsive
3. Testez la navigation
4. Testez le formulaire

---

## 🎁 ÉTAPE 6 : Envoyer au client

### 6.1 Préparer le message

**Email type :**

```
Objet : Prévisualisation du nouveau site ISOL45

Bonjour [Prénom],

J'ai le plaisir de vous présenter la maquette interactive de votre 
futur site internet.

🌐 Lien de prévisualisation : https://votredomaine-temporaire.com

Vous pouvez naviguer librement et découvrir :
• La nouvelle page d'accueil moderne
• Les pages Services avec descriptions détaillées
• La galerie de vos Réalisations
• Le formulaire de demande de devis

📄 Documents du projet :
• Devis détaillé : https://votredomaine-temporaire.com/devis-projet
• Contrat maintenance : https://votredomaine-temporaire.com/contrat-maintenance

N'hésitez pas à me faire part de vos impressions et suggestions 
d'amélioration. Je reste à votre disposition pour toute question.

Cordialement,
Corentin Villoing
VibeWeb
📞 06 78 07 15 22
✉️ contact@vibeweb.fr
```

### 6.2 Créer une vidéo de présentation (Optionnel mais puissant)

1. Utilisez **Loom** (gratuit) : https://www.loom.com
2. Enregistrez une vidéo de 3-5 minutes où vous :
   - Présentez la page d'accueil
   - Naviguez dans les différentes sections
   - Montrez les réalisations
   - Testez le formulaire
   - Ouvrez les PDF
3. Ajoutez le lien de la vidéo dans votre email

---

## 🔧 Dépannage

### ❌ Le site affiche une erreur 404 ou page blanche

**Solution :**
- Vérifiez que le fichier `.htaccess` est bien dans `public_html/`
- Vérifiez que tous les fichiers de `build/` ont été uploadés
- Dans FileZilla, vérifiez qu'il y a bien `index.html` dans `public_html/`

### ❌ Les services et réalisations ne s'affichent pas

**Solution :**
- Ouvrez la console du navigateur (F12)
- Vérifiez s'il y a des erreurs réseau
- Testez directement l'API backend : `https://votre-url-railway.up.railway.app/api/services`
- Vérifiez que `REACT_APP_BACKEND_URL` dans `.env` est correct
- Si changé, refaites `yarn build` et re-uploadez

### ❌ Erreur CORS

**Solution :**
- Allez sur Railway → Variables
- Modifiez `CORS_ORIGINS` en mettant votre domaine exact :
  `https://votredomaine-temporaire.com`
- Attendez que Railway redéploie

### ❌ Le formulaire ne fonctionne pas

**Solution :**
- Vérifiez que le backend est bien déployé sur Railway
- Testez l'API directement dans le navigateur
- Vérifiez les logs Railway : onglet **"Deployments"** → **"View Logs"**

---

## 💰 Coûts

| Service | Coût |
|---------|------|
| MongoDB Atlas | **0€** (plan gratuit) |
| Railway.app | **0€** (500h/mois gratuit) |
| Hostinger | **Déjà payé** |
| Domaine temporaire | **0-2€** (selon option) |
| **TOTAL** | **~0-2€** |

---

## 📊 Après la démo

### Si le client accepte :

1. **Migrer vers production**
   - Acheter le vrai nom de domaine (`isol45.fr`)
   - Activer SSL/HTTPS (Let's Encrypt gratuit)
   - Éventuellement migrer vers VPS Hostinger

2. **Créer le back-office admin**
   - Interface pour gérer les réalisations
   - Système de gestion des devis

3. **Finaliser le contenu**
   - Photos professionnelles
   - Textes finalisés
   - Vraies réalisations du client

### Si le client refuse :

- Supprimez le site de Hostinger
- Supprimez le projet Railway
- Supprimez le cluster MongoDB Atlas
- Coût total : 0€

---

## 📞 Aide supplémentaire

**Si vous êtes bloqué :**
1. Vérifiez les logs Railway
2. Vérifiez les erreurs dans la console navigateur (F12)
3. Testez chaque étape indépendamment

**Ressources :**
- Railway Docs : https://docs.railway.app
- MongoDB Atlas Docs : https://www.mongodb.com/docs/atlas
- Hostinger Support : https://support.hostinger.com

---

✨ **Vous êtes prêt à impressionner votre client !** ✨
