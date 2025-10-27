# 📋 CHECKLIST RAPIDE : Démo Client ISOL45

## ✅ Checklist complète (cochez au fur et à mesure)

### 🗄️ PHASE 1 : Base de données (10 min)
- [ ] Compte MongoDB Atlas créé
- [ ] Cluster gratuit M0 créé (région Frankfurt ou Paris)
- [ ] Utilisateur `isol45admin` créé avec mot de passe noté
- [ ] Accès autorisé depuis partout (0.0.0.0/0)
- [ ] Chaîne de connexion copiée et mot de passe remplacé
- [ ] ✅ **MongoDB prêt**

### 🚂 PHASE 2 : Backend (15 min)
- [ ] Code poussé sur GitHub (repository créé)
- [ ] Compte Railway.app créé (connexion via GitHub)
- [ ] Projet Railway créé depuis GitHub
- [ ] Root Directory configuré : `backend`
- [ ] Start Command configuré : `uvicorn server:app --host 0.0.0.0 --port $PORT`
- [ ] Variables ajoutées :
  - [ ] `MONGO_URL` = votre chaîne MongoDB
  - [ ] `DB_NAME` = `isol45_db`
  - [ ] `CORS_ORIGINS` = `*`
- [ ] Domaine Railway généré et copié
- [ ] API testée : `/api/` et `/api/services` répondent
- [ ] ✅ **Backend déployé**

### 💻 PHASE 3 : Frontend (10 min)
- [ ] Fichier `frontend/.env` créé avec URL Railway
- [ ] `yarn install` exécuté
- [ ] `yarn build` exécuté avec succès
- [ ] Dossier `frontend/build/` créé et contient les fichiers
- [ ] ✅ **Frontend prêt**

### 🌐 PHASE 4 : Hostinger (15 min)
- [ ] Identifiants FTP Hostinger récupérés
- [ ] FileZilla installé
- [ ] Connexion FTP réussie
- [ ] Dossier `public_html/` vidé (si nécessaire)
- [ ] Contenu de `frontend/build/` uploadé dans `public_html/`
- [ ] Fichier `.htaccess` créé avec le bon contenu
- [ ] Domaine temporaire configuré et actif
- [ ] ✅ **Site en ligne**

### ✅ PHASE 5 : Tests (5 min)
- [ ] Site accessible sur le domaine temporaire
- [ ] Page d'accueil s'affiche correctement
- [ ] Navigation fonctionne (Services, Réalisations, Atouts)
- [ ] Services affichés (6 cartes)
- [ ] Réalisations affichées (5 cartes)
- [ ] Pages détails fonctionnent
- [ ] Formulaire de contact fonctionne
- [ ] `/devis-projet` accessible
- [ ] `/contrat-maintenance` accessible
- [ ] Test sur mobile OK
- [ ] ✅ **Tout fonctionne**

### 📧 PHASE 6 : Envoyer au client
- [ ] Email de présentation préparé
- [ ] Lien du site copié
- [ ] Liens des documents copiés
- [ ] Vidéo de présentation enregistrée (optionnel)
- [ ] Email envoyé au client
- [ ] ✅ **Client contacté**

---

## 🔗 Liens Rapides

### 📝 Comptes à créer
- MongoDB Atlas : https://www.mongodb.com/cloud/atlas
- Railway.app : https://railway.app
- GitHub : https://github.com

### 🛠️ Outils à télécharger
- FileZilla : https://filezilla-project.org/download.php?type=client
- Loom (vidéo) : https://www.loom.com

### 📚 Documentations
- Guide complet : `GUIDE_DEMO_CLIENT_HOSTINGER.md`
- Script automatique : `prepare-demo.sh`

---

## 💡 Commandes Rapides

### Terminal (dans le dossier du projet) :

```bash
# 1. Pousser sur GitHub (première fois)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-USERNAME/isol45-website.git
git push -u origin main

# 2. Préparer le frontend
cd frontend
echo "REACT_APP_BACKEND_URL=https://VOTRE-URL-RAILWAY.up.railway.app
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false" > .env
yarn install
yarn build

# 3. Le dossier frontend/build/ est prêt pour l'upload FTP
```

---

## 📊 Timeline Réaliste

| Étape | Durée | Cumulé |
|-------|-------|--------|
| MongoDB Atlas | 10 min | 10 min |
| Railway Backend | 15 min | 25 min |
| Frontend Build | 10 min | 35 min |
| Upload Hostinger | 15 min | 50 min |
| Tests | 5 min | 55 min |
| **TOTAL** | **55 min** | |

*Prévoir 1h pour être confortable*

---

## 🆘 Aide Rapide

### Le backend ne démarre pas sur Railway
→ Vérifier les logs : Railway → Deployments → View Logs
→ Vérifier que `MONGO_URL` est correcte

### Le site affiche une page blanche
→ Vérifier le fichier `.htaccess` dans public_html
→ Ouvrir la console navigateur (F12) et regarder les erreurs

### Les données ne s'affichent pas
→ Tester l'API directement : `https://votre-railway-url.up.railway.app/api/services`
→ Vérifier que `REACT_APP_BACKEND_URL` est correct dans `.env`
→ Refaire le build si modifié : `yarn build`

### Erreur CORS
→ Railway → Variables → `CORS_ORIGINS` → Mettre votre domaine exact
→ Ou mettre `*` temporairement pour la démo

---

## 📞 Contacts Utiles

- **Support Hostinger** : https://support.hostinger.com
- **Railway Discord** : https://discord.gg/railway
- **MongoDB Community** : https://www.mongodb.com/community/forums

---

## 🎯 Après la démo

### ✅ Client accepte le devis
1. Commencer le développement complet
2. Acheter le vrai domaine
3. Migrer vers production
4. Activer SSL/HTTPS
5. Créer le back-office admin

### ❌ Client refuse
1. Supprimer le projet Railway
2. Supprimer le cluster MongoDB
3. Nettoyer Hostinger
4. Garder le code pour réutilisation

---

## 💰 Coûts Total Démo

- MongoDB Atlas : **0€**
- Railway.app : **0€**
- GitHub : **0€**
- Hostinger : **Déjà payé**
- Domaine temp. : **0-2€**

**TOTAL : 0-2€ pour impressionner le client ! 🎉**

---

Bon courage ! Vous allez cartonner ! 💪
