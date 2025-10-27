#!/bin/bash

# 🚀 Script de préparation pour déploiement démo client
# Ce script prépare le frontend pour l'upload sur Hostinger

echo "🚀 PRÉPARATION DU SITE ISOL45 POUR DÉMO CLIENT"
echo "=============================================="
echo ""

# Vérifier si on est dans le bon dossier
if [ ! -d "frontend" ]; then
    echo "❌ Erreur : Le dossier 'frontend' n'existe pas."
    echo "   Assurez-vous d'exécuter ce script depuis la racine du projet."
    exit 1
fi

# Demander l'URL du backend Railway
echo "📝 Entrez l'URL de votre backend Railway :"
echo "   (exemple: https://isol45-website-production.up.railway.app)"
read -p "URL : " BACKEND_URL

if [ -z "$BACKEND_URL" ]; then
    echo "❌ L'URL du backend est requise !"
    exit 1
fi

# Créer le fichier .env
echo ""
echo "📝 Création du fichier .env..."
cat > frontend/.env << EOF
REACT_APP_BACKEND_URL=$BACKEND_URL
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
EOF

echo "✅ Fichier .env créé avec l'URL : $BACKEND_URL"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances..."
cd frontend
yarn install

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi

echo "✅ Dépendances installées"
echo ""

# Build le frontend
echo "🔨 Build du frontend pour production..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build"
    exit 1
fi

echo "✅ Build réussi !"
echo ""

# Résumé
echo "🎉 LE FRONTEND EST PRÊT POUR L'UPLOAD !"
echo "========================================"
echo ""
echo "📂 Dossier à uploader : frontend/build/"
echo ""
echo "📋 PROCHAINES ÉTAPES :"
echo "  1. Ouvrez FileZilla"
echo "  2. Connectez-vous à votre FTP Hostinger"
echo "  3. Uploadez TOUT LE CONTENU de 'frontend/build/' vers 'public_html/'"
echo "  4. Créez le fichier .htaccess (voir le guide)"
echo "  5. Testez votre site sur le domaine temporaire"
echo ""
echo "📖 Guide complet : GUIDE_DEMO_CLIENT_HOSTINGER.md"
echo ""
echo "✨ Bonne chance avec votre démo client ! ✨"
