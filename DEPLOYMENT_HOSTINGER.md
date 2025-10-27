# 🚀 Guide de Déploiement sur Hostinger

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- ✅ Un compte Hostinger avec hébergement VPS ou Business
- ✅ Accès SSH à votre serveur
- ✅ Git installé sur votre serveur
- ✅ Node.js 18+ et Python 3.9+ installés
- ✅ MongoDB installé ou accès à MongoDB Atlas

---

## 🎯 Options de Déploiement

### **Option 1 : VPS Hostinger (Recommandé pour production)**

Si vous avez un VPS Hostinger, vous avez un contrôle total.

#### **Étape 1 : Connexion SSH**

```bash
ssh root@votre-ip-hostinger
# ou
ssh u123456789@votre-domaine.com
```

#### **Étape 2 : Installation des dépendances**

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Installer Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Installer Python 3.9+
sudo apt install -y python3 python3-pip python3-venv

# Installer MongoDB (ou utiliser MongoDB Atlas)
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# Installer Nginx
sudo apt install -y nginx

# Installer PM2 pour gérer les processus
sudo npm install -g pm2 yarn
```

#### **Étape 3 : Cloner votre projet depuis GitHub**

```bash
# Créer un dossier pour votre projet
cd /var/www
sudo mkdir isol45
sudo chown -R $USER:$USER isol45
cd isol45

# Cloner votre repository
git clone https://github.com/votre-username/isol45-site.git .
```

#### **Étape 4 : Configuration Backend**

```bash
cd /var/www/isol45/backend

# Créer un environnement virtuel Python
python3 -m venv venv
source venv/bin/activate

# Installer les dépendances
pip install -r requirements.txt

# Créer le fichier .env
nano .env
```

Contenu du fichier `.env` backend :
```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=isol45_db
CORS_ORIGINS=https://votre-domaine-temporaire.com,https://www.votre-domaine-temporaire.com
```

Sauvegarder avec `Ctrl + X`, puis `Y`, puis `Enter`.

#### **Étape 5 : Configuration Frontend**

```bash
cd /var/www/isol45/frontend

# Installer les dépendances
yarn install

# Créer le fichier .env
nano .env
```

Contenu du fichier `.env` frontend :
```env
REACT_APP_BACKEND_URL=https://votre-domaine-temporaire.com
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

**IMPORTANT** : Remplacez `votre-domaine-temporaire.com` par votre vrai domaine temporaire Hostinger.

```bash
# Build le frontend pour production
yarn build
```

#### **Étape 6 : Configurer PM2 pour le Backend**

```bash
cd /var/www/isol45

# Créer un fichier ecosystem.config.js
nano ecosystem.config.js
```

Contenu :
```javascript
module.exports = {
  apps: [
    {
      name: 'isol45-backend',
      cwd: '/var/www/isol45/backend',
      script: '/var/www/isol45/backend/venv/bin/uvicorn',
      args: 'server:app --host 0.0.0.0 --port 8001',
      interpreter: 'none',
      env: {
        PYTHONPATH: '/var/www/isol45/backend'
      }
    }
  ]
};
```

```bash
# Démarrer le backend avec PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### **Étape 7 : Configurer Nginx**

```bash
sudo nano /etc/nginx/sites-available/isol45
```

Contenu :
```nginx
server {
    listen 80;
    server_name votre-domaine-temporaire.com www.votre-domaine-temporaire.com;

    # Frontend React
    root /var/www/isol45/frontend/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Frontend - Servir les fichiers statiques
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API - Proxy vers FastAPI
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/isol45 /etc/nginx/sites-enabled/

# Tester la configuration
sudo nginx -t

# Redémarrer Nginx
sudo systemctl restart nginx
```

#### **Étape 8 : Configurer SSL avec Let's Encrypt (Optionnel mais recommandé)**

```bash
# Installer Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtenir un certificat SSL
sudo certbot --nginx -d votre-domaine-temporaire.com -d www.votre-domaine-temporaire.com
```

#### **Étape 9 : Configuration du domaine temporaire**

Dans votre panneau Hostinger :
1. Allez dans **DNS/Nameservers**
2. Ajoutez un enregistrement A :
   - Type : `A`
   - Nom : `@` (ou votre sous-domaine)
   - Pointe vers : `Votre-IP-VPS`
   - TTL : 3600

3. Si vous utilisez www, ajoutez aussi :
   - Type : `CNAME`
   - Nom : `www`
   - Pointe vers : `votre-domaine-temporaire.com`

---

### **Option 2 : Hébergement Web Hostinger (Plus simple mais limité)**

Si vous avez un hébergement web classique Hostinger (pas VPS), c'est plus limité.

#### **Limitations :**
- ❌ Pas de support Python/FastAPI natif
- ❌ Pas d'accès SSH complet
- ❌ Pas de MongoDB installable

#### **Solution de contournement :**

**Backend :**
- Hébergez le backend sur **Railway.app** (gratuit) ou **Render.com**
- Utilisez **MongoDB Atlas** (gratuit jusqu'à 512MB)

**Frontend uniquement sur Hostinger :**

1. **Build le frontend localement :**
```bash
cd frontend
yarn build
```

2. **Uploader via FTP :**
   - Téléchargez FileZilla
   - Connectez-vous avec vos identifiants Hostinger FTP
   - Uploadez le contenu du dossier `frontend/build/` dans `public_html/`

3. **Configurer le fichier .env avant le build :**
```env
REACT_APP_BACKEND_URL=https://votre-backend-railway.up.railway.app
```

4. **Créer un fichier `.htaccess` dans `public_html/` :**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Mise à jour du site (après modifications)

### **Sur VPS :**

```bash
# Connexion SSH
ssh root@votre-ip-hostinger

# Aller dans le dossier du projet
cd /var/www/isol45

# Récupérer les dernières modifications
git pull origin main

# Mettre à jour le backend
cd backend
source venv/bin/activate
pip install -r requirements.txt
pm2 restart isol45-backend

# Mettre à jour le frontend
cd ../frontend
yarn install
yarn build

# Redémarrer Nginx
sudo systemctl restart nginx
```

### **Sur hébergement Web (FTP) :**
1. Build localement : `yarn build`
2. Uploader via FTP le nouveau dossier `build/`

---

## 🎯 URLs Finales

Après déploiement, votre site sera accessible :
- **Site principal** : https://votre-domaine-temporaire.com
- **Devis PDF** : https://votre-domaine-temporaire.com/devis-projet
- **Contrat PDF** : https://votre-domaine-temporaire.com/contrat-maintenance

---

## 📊 Monitoring

```bash
# Voir les logs du backend
pm2 logs isol45-backend

# Voir le statut
pm2 status

# Redémarrer
pm2 restart isol45-backend

# Arrêter
pm2 stop isol45-backend
```

---

## 🆘 Dépannage

### **Le site ne charge pas :**
```bash
# Vérifier Nginx
sudo systemctl status nginx
sudo nginx -t

# Vérifier le backend
pm2 status
pm2 logs isol45-backend --lines 50
```

### **Erreur CORS :**
Vérifiez que `CORS_ORIGINS` dans `/backend/.env` contient votre domaine.

### **Base de données vide :**
```bash
# Se connecter à MongoDB
mongosh

# Vérifier la base
use isol45_db
db.services.countDocuments()
db.realizations.countDocuments()
```

Si vide, relancez le backend qui initialisera automatiquement les données.

---

## 💡 Recommandation Finale

**Pour montrer au client rapidement :**

1. **Option la plus simple** : 
   - Frontend sur Hostinger (upload via FTP)
   - Backend sur Railway.app (gratuit, déploiement en 2 min)
   - MongoDB Atlas (gratuit)

2. **Option professionnelle** :
   - VPS Hostinger complet (10-15€/mois)
   - Tout hébergé au même endroit
   - Meilleure performance

**Mon conseil** : Commencez avec Railway + Hostinger FTP pour la démo, puis migrez vers VPS si le client signe.

---

## 📞 Besoin d'aide ?

- Documentation Hostinger : https://support.hostinger.com
- Railway.app : https://railway.app
- MongoDB Atlas : https://www.mongodb.com/cloud/atlas

Bonne chance ! 🚀
