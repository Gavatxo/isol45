# ⚡ Déploiement Rapide pour Démo Client (Railway + Hostinger)

## 🎯 Solution Recommandée pour Démo Rapide

Cette solution permet de mettre en ligne le site en **moins de 30 minutes** sans VPS.

**Stack :**
- 🔴 **Backend** : Railway.app (gratuit, 500h/mois)
- 🟢 **Frontend** : Hostinger (hébergement web classique, upload FTP)
- 🍃 **Base de données** : MongoDB Atlas (gratuit, 512MB)

**Coût total : 0€** (idéal pour démo)

---

## 📦 Étape 1 : MongoDB Atlas (Base de données)

### **1.1 Créer un compte MongoDB Atlas**

1. Allez sur https://www.mongodb.com/cloud/atlas
2. Cliquez sur **"Try Free"**
3. Créez un compte avec votre email

### **1.2 Créer un cluster**

1. Sélectionnez le plan **FREE (M0)**
2. Provider : **AWS** ou **Google Cloud**
3. Region : **Europe (Frankfurt)** ou **Paris** (plus proche)
4. Cluster Name : `isol45-cluster`
5. Cliquez sur **"Create Cluster"**

### **1.3 Configurer l'accès**

1. Dans **Database Access** :
   - Cliquez sur **"Add New Database User"**
   - Username : `isol45admin`
   - Password : **Générez un mot de passe fort** (notez-le !)
   - Role : **Atlas admin**
   - Cliquez sur **"Add User"**

2. Dans **Network Access** :
   - Cliquez sur **"Add IP Address"**
   - Sélectionnez **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Cliquez sur **"Confirm"**

### **1.4 Récupérer la chaîne de connexion**

1. Retournez sur **Database** → **Connect**
2. Choisissez **"Connect your application"**
3. Driver : **Python**, Version : **3.12 or later**
4. Copiez la chaîne de connexion :
```
mongodb+srv://isol45admin:<password>@isol45-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
5. **Remplacez `<password>` par votre mot de passe réel**
6. **Gardez cette chaîne** pour Railway

---

## 🚂 Étape 2 : Railway.app (Backend)

### **2.1 Créer un compte Railway**

1. Allez sur https://railway.app
2. Cliquez sur **"Start a New Project"**
3. Connectez-vous avec **GitHub**

### **2.2 Pousser votre code sur GitHub**

Dans votre terminal local (où vous avez le code) :

```bash
# Initialiser git si pas déjà fait
cd /chemin/vers/votre/projet
git init

# Créer un .gitignore
cat > .gitignore << EOF
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/

# Node
node_modules/
build/
.env.local
.env.production

# OS
.DS_Store
Thumbs.db

# Logs
*.log
EOF

# Ajouter tous les fichiers
git add .
git commit -m "Initial commit - ISOL45 website"

# Créer un repo sur GitHub (depuis github.com)
# Puis lier votre repo local :
git remote add origin https://github.com/votre-username/isol45-site.git
git branch -M main
git push -u origin main
```

### **2.3 Déployer sur Railway**

1. Sur Railway, cliquez sur **"New Project"**
2. Sélectionnez **"Deploy from GitHub repo"**
3. Choisissez votre repository `isol45-site`
4. Railway détectera automatiquement Python

### **2.4 Configuration Railway**

1. Cliquez sur votre service (backend)
2. Allez dans **"Settings"**
3. **Root Directory** : `backend`
4. **Start Command** : `uvicorn server:app --host 0.0.0.0 --port $PORT`

5. Allez dans **"Variables"** et ajoutez :
```
MONGO_URL=mongodb+srv://isol45admin:VOTRE_MOT_DE_PASSE@isol45-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
DB_NAME=isol45_db
CORS_ORIGINS=*
PORT=8001
```

6. Railway va redéployer automatiquement

### **2.5 Récupérer l'URL du backend**

1. Dans **"Settings"** → **"Networking"**
2. Cliquez sur **"Generate Domain"**
3. Vous obtenez une URL type : `isol45-backend.up.railway.app`
4. **Notez cette URL** pour le frontend

---

## 🌐 Étape 3 : Hostinger (Frontend)

### **3.1 Préparer le build**

Sur votre machine locale :

```bash
cd frontend

# Créer le fichier .env avec l'URL Railway
cat > .env << EOF
REACT_APP_BACKEND_URL=https://isol45-backend.up.railway.app
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
EOF

# Build le frontend
yarn install
yarn build
```

Le dossier `build/` contient maintenant votre site prêt pour production.

### **3.2 Upload sur Hostinger via FTP**

1. **Télécharger FileZilla** : https://filezilla-project.org/download.php

2. **Récupérer vos identifiants FTP Hostinger** :
   - Connectez-vous à votre panneau Hostinger
   - Allez dans **"Fichiers"** → **"Gestionnaire de fichiers"** ou **"Comptes FTP"**
   - Créez un compte FTP si nécessaire
   - Notez : Host, Username, Password, Port

3. **Connexion FileZilla** :
   - Hôte : `ftp.votredomaine.com` ou IP fournie par Hostinger
   - Identifiant : votre username FTP
   - Mot de passe : votre mot de passe FTP
   - Port : 21
   - Cliquez sur **"Connexion rapide"**

4. **Upload des fichiers** :
   - Dans FileZilla, naviguez vers `public_html/` (côté serveur)
   - Sur votre machine (côté local), naviguez vers `frontend/build/`
   - **Sélectionnez TOUT le CONTENU** du dossier `build/` (pas le dossier lui-même)
   - Glissez-déposez vers `public_html/`
   - Attendez la fin du transfert (peut prendre 5-10 min)

### **3.3 Configurer .htaccess pour React Router**

Créez un fichier `.htaccess` dans `public_html/` avec FileZilla :

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

# Cache des fichiers statiques
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

### **3.4 Configurer le domaine temporaire**

Dans votre panneau Hostinger :

1. Allez dans **"Domaines"**
2. Si vous avez un domaine temporaire Hostinger (ex: `isol45-demo.hostingersite.com`), utilisez-le
3. Ou ajoutez votre propre domaine temporaire :
   - Achetez un `.xyz` ou `.space` pas cher (1-2€/an)
   - Configurez les nameservers vers Hostinger
   - Attendez 1-24h pour propagation DNS

---

## ✅ Étape 4 : Test Final

### **4.1 Tester le backend**

```bash
# Testez que le backend répond
curl https://isol45-backend.up.railway.app/api/

# Testez les services
curl https://isol45-backend.up.railway.app/api/services

# Testez les réalisations
curl https://isol45-backend.up.railway.app/api/realizations
```

Vous devriez voir du JSON en réponse.

### **4.2 Tester le frontend**

1. Ouvrez `https://votre-domaine-temporaire.com`
2. Vérifiez que :
   - ✅ La page d'accueil charge
   - ✅ La navigation fonctionne (Services, Réalisations, Atouts)
   - ✅ Les services s'affichent
   - ✅ Les réalisations s'affichent
   - ✅ Le formulaire de contact fonctionne
   - ✅ Les documents PDF sont accessibles :
     - `/devis-projet`
     - `/contrat-maintenance`

---

## 🔄 Mise à jour du site

### **Pour mettre à jour le code :**

```bash
# 1. Modifier votre code localement
# 2. Pousser sur GitHub
git add .
git commit -m "Description des modifications"
git push origin main

# 3. Railway redéploiera automatiquement le backend

# 4. Pour le frontend, rebuild et re-upload
cd frontend
yarn build
# Puis re-upload le contenu de build/ via FTP
```

---

## 📊 Monitoring

### **Railway (Backend) :**
- Logs en temps réel dans l'onglet **"Deployments"**
- Métriques CPU/RAM dans **"Metrics"**
- 500h gratuites/mois (largement suffisant pour une démo)

### **Hostinger (Frontend) :**
- Statistiques dans le panneau Hostinger
- Analytics : ajoutez Google Analytics si nécessaire

---

## 💰 Coûts

| Service | Plan | Coût |
|---------|------|------|
| Railway | Hobby (500h/mois) | **0€** |
| MongoDB Atlas | M0 Free (512MB) | **0€** |
| Hostinger | Web hosting | **2-5€/mois** |
| Domaine temporaire | .xyz ou .space | **1-2€/an** |

**Total : ~5€/mois** pour la démo

---

## 🚀 Timeline

| Étape | Durée |
|-------|-------|
| MongoDB Atlas setup | 5 min |
| GitHub push | 5 min |
| Railway deploy | 10 min |
| Frontend build | 3 min |
| FTP upload | 10 min |
| Tests | 5 min |
| **TOTAL** | **~40 min** |

---

## 🎁 URLs à envoyer au client

Une fois déployé, envoyez au client :

```
🌐 Site principal : https://votre-domaine-temporaire.com

📄 Documents :
- Devis : https://votre-domaine-temporaire.com/devis-projet
- Contrat : https://votre-domaine-temporaire.com/contrat-maintenance

Identifiants de test (si vous ajoutez un admin) :
- Email : admin@isol45.fr
- Mot de passe : [À définir]
```

---

## 🆘 Problèmes Courants

### **Le frontend ne charge pas les données :**
- Vérifiez que `REACT_APP_BACKEND_URL` dans `.env` pointe vers Railway
- Rebuild le frontend : `yarn build`
- Re-upload sur Hostinger

### **Erreur CORS :**
- Dans Railway, vérifiez que `CORS_ORIGINS=*` dans les variables d'environnement

### **Le site affiche "Cannot GET /" sur les sous-pages :**
- Vérifiez que `.htaccess` est bien uploadé dans `public_html/`

### **Les images ne s'affichent pas :**
- Les URLs d'images Unsplash peuvent être bloquées
- Remplacez par des images locales si nécessaire

---

## 🎯 Prochaines Étapes (après validation client)

1. **Acheter le vrai nom de domaine** : `isol45.fr` ou similaire
2. **Migrer vers VPS Hostinger** pour meilleures performances
3. **Ajouter SSL/HTTPS** (Let's Encrypt gratuit)
4. **Configurer les backups** automatiques
5. **Ajouter le back-office** d'administration

---

Vous êtes prêt pour montrer le site au client ! 🎉
