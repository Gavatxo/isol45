# 📧 Guide d'utilisation des templates Brevo

## 📁 Fichiers créés

1. **BREVO_TEMPLATE_PRESENTATION.html** : Template pour présenter la maquette/démo du site
2. **BREVO_TEMPLATE_AVANTAGES.html** : Template pour convaincre avec les avantages et ROI

---

## 🎨 Charte graphique respectée

Les deux templates utilisent votre identité VibeWeb :

### Couleurs principales
- **Bleu foncé** : #1e40af, #1e3a5f
- **Bleu principal** : #3b82f6, #2563eb
- **Bleu clair** : #60a5fa, #93c5fd, #bfdbfe, #dbeafe
- **Backgrounds** : #f8fafc, #eff6ff, #e0f2fe
- **Texte** : #1e293b (foncé), #475569 (moyen), #64748b (gris)

### Éléments de marque
- Logo "V" avec fond bleu
- Gradients bleus (135deg)
- Border-radius arrondis (12px, 16px, 30px)
- Boutons avec ombre portée
- Cartes avec icônes emoji

---

## 🔧 Comment importer dans Brevo

### Étape 1 : Connexion à Brevo
1. Allez sur [app.brevo.com](https://app.brevo.com)
2. Connectez-vous à votre compte

### Étape 2 : Créer une campagne email
1. Dans le menu principal, cliquez sur **Campaigns** → **Email**
2. Cliquez sur **Create an email campaign**
3. Donnez un nom à votre campagne (ex: "Présentation site ISOL45")

### Étape 3 : Choisir le template
1. Dans l'étape "Design", cliquez sur **Import from file**
2. Sélectionnez le fichier HTML correspondant :
   - `BREVO_TEMPLATE_PRESENTATION.html` pour la présentation
   - `BREVO_TEMPLATE_AVANTAGES.html` pour les avantages
3. Le template s'affichera dans l'éditeur

### Étape 4 : Personnaliser les variables

Les templates utilisent des variables Brevo à remplacer :

#### Pour BREVO_TEMPLATE_PRESENTATION.html :
```
{{ FIRSTNAME }}         → Prénom du contact
{{ COMPANY_NAME }}      → Nom de l'entreprise (ex: ISOL 45)
{{ DEMO_URL }}          → URL de la démo (ex: https://isol45-temp.com)
{{ DEVIS_URL }}         → URL du devis (ex: https://isol45-temp.com/devis-projet)
{{ CONTRAT_URL }}       → URL du contrat (ex: https://isol45-temp.com/contrat-maintenance)
```

#### Pour BREVO_TEMPLATE_AVANTAGES.html :
```
{{ FIRSTNAME }}         → Prénom du contact
{{ MONTANT_DEVIS }}     → Montant du devis (ex: 1500)
```

#### Comment remplacer les variables dans Brevo :
1. Dans l'éditeur Brevo, double-cliquez sur le texte contenant `{{ VARIABLE }}`
2. Option A : Remplacez manuellement par la valeur
3. Option B : Laissez la variable si vous avez les contacts avec ces champs dans Brevo

### Étape 5 : Tester l'email
1. Cliquez sur **Preview** en haut à droite
2. Testez sur différents appareils (desktop, mobile)
3. Envoyez un email de test à votre adresse : **Send a test**

### Étape 6 : Configurer et envoyer
1. Définissez l'objet de l'email :
   - Présentation : "🎨 Prévisualisation de votre nouveau site [COMPANY_NAME]"
   - Avantages : "💰 Pourquoi moderniser votre site ? Les chiffres parlent"
2. Choisissez vos destinataires (liste de contacts)
3. Programmez ou envoyez immédiatement

---

## 📱 Variables Brevo disponibles par défaut

Brevo offre des variables natives que vous pouvez utiliser :

```
{{ contact.FIRSTNAME }}     → Prénom
{{ contact.LASTNAME }}      → Nom
{{ contact.EMAIL }}         → Email
{{ contact.SMS }}           → Téléphone
{{ unsubscribe }}           → Lien de désinscription
```

Si vos contacts ont des champs personnalisés dans Brevo, utilisez :
```
{{ contact.VOTRE_CHAMP }}   → Remplacez VOTRE_CHAMP par le nom exact
```

---

## 🎯 Quand utiliser chaque template ?

### Template PRESENTATION (BREVO_TEMPLATE_PRESENTATION.html)
**Utiliser pour :**
- Présenter la maquette/démo d'un site terminé
- Premier contact avec un prospect ayant demandé un devis
- Relance après avoir finalisé le site

**Moment idéal :**
- Juste après avoir terminé la maquette
- Quand le site de démo est prêt à être consulté

### Template AVANTAGES (BREVO_TEMPLATE_AVANTAGES.html)
**Utiliser pour :**
- Convaincre un prospect hésitant
- Expliquer la valeur d'un site moderne
- Relance commerciale après un premier contact
- Email de prospection à froid (avec liste qualifiée)

**Moment idéal :**
- Après un premier rendez-vous sans engagement
- Relance 3-5 jours après envoi d'un devis
- Campagne de prospection ciblée (artisans, PME)

---

## 📊 Séquence email recommandée

### Scénario 1 : Client ayant demandé un devis
1. **J+0** : Email AVANTAGES → expliquer les bénéfices
2. **J+3** : Relance téléphonique ou email court
3. **J+7** : Email PRESENTATION → montrer la maquette (si réalisée)
4. **J+14** : Dernière relance avec offre limitée dans le temps

### Scénario 2 : Prospection à froid
1. **Email 1** : Email AVANTAGES → créer l'intérêt
2. **Email 2** (7 jours après) : Étude de cas / témoignage client
3. **Email 3** (7 jours après) : Offre spéciale ou consultation gratuite

---

## 🔍 Tests à effectuer avant envoi

### ✅ Checklist technique
- [ ] Toutes les variables sont remplacées (pas de `{{ }}` vides)
- [ ] Les liens fonctionnent (démo, devis, contrat)
- [ ] L'email s'affiche correctement sur Gmail
- [ ] L'email s'affiche correctement sur Outlook
- [ ] L'email s'affiche correctement sur mobile
- [ ] Les images/emojis s'affichent correctement
- [ ] Le lien de désinscription fonctionne

### 📱 Test sur différents clients
Brevo permet de tester l'affichage sur :
- Gmail (desktop + mobile)
- Outlook (desktop + mobile)
- Apple Mail (iPhone, iPad, Mac)
- Yahoo Mail

---

## 💡 Conseils d'optimisation

### Améliorer le taux d'ouverture
- **Objet percutant** : Utilisez des emojis (🎨, 💰, 🚀)
- **Personnalisation** : Incluez le prénom dans l'objet
- **Curiosité** : "[Prénom], découvrez votre nouveau site"
- **Urgence** : "Offre valable jusqu'au [date]"

### Améliorer le taux de clic
- **CTA clair** : "Découvrir le site" plutôt que "Cliquez ici"
- **Répéter le CTA** : 2-3 fois dans l'email
- **Contraste visuel** : Boutons bleus qui ressortent

### Améliorer la conversion
- **Preuve sociale** : Ajoutez des témoignages clients
- **Urgence** : "Devis gratuit sous 24h"
- **Faciliter l'action** : Liens directs vers calendrier de RDV

---

## 🛠️ Personnalisation avancée

### Modifier les couleurs
Si vous souhaitez adapter les couleurs pour un client spécifique :

1. Ouvrez le fichier HTML dans un éditeur de texte
2. Recherchez et remplacez :
   - `#3b82f6` → Nouvelle couleur principale
   - `#1e40af` → Nouvelle couleur foncée
   - `#dbeafe` → Nouvelle couleur claire

### Ajouter votre logo
Remplacez la lettre "V" par votre logo :

```html
<!-- Remplacer -->
<span style="font-size: 36px; font-weight: bold; color: white;">V</span>

<!-- Par -->
<img src="URL_DE_VOTRE_LOGO" alt="Logo" style="width: 60px; height: 60px;" />
```

### Ajouter des sections
Les templates sont modulaires, vous pouvez :
- Dupliquer une section (table) pour ajouter du contenu
- Modifier les textes directement dans Brevo
- Ajouter des images (elles seront hébergées par Brevo)

---

## 📈 Suivi des performances

Dans Brevo, vous pouvez suivre :
- **Taux d'ouverture** : % de personnes ayant ouvert l'email
- **Taux de clic** : % de personnes ayant cliqué sur un lien
- **Taux de désabonnement** : % de personnes s'étant désabonnées
- **Heatmap des clics** : Quels liens sont les plus cliqués

**Objectifs moyens pour un email B2B :**
- Taux d'ouverture : 20-30%
- Taux de clic : 3-5%
- Taux de conversion : 1-3%

---

## ❓ FAQ

**Q : Puis-je modifier les templates directement dans Brevo ?**
R : Oui ! Une fois importés, vous pouvez modifier tous les textes, couleurs et images dans l'éditeur visuel Brevo.

**Q : Les emojis s'affichent-ils partout ?**
R : Oui, les emojis sont compatibles avec 99% des clients email modernes (Gmail, Outlook, Apple Mail, etc.).

**Q : Puis-je utiliser ces templates pour plusieurs clients ?**
R : Absolument ! Il suffit de remplacer les variables (nom, URL, montant) pour chaque client.

**Q : Comment ajouter un bouton "Se désabonner" ?**
R : Le lien `{{ unsubscribe }}` est déjà présent dans le footer. Brevo le remplace automatiquement.

**Q : Puis-je automatiser l'envoi ?**
R : Oui, avec les **Automations** de Brevo, vous pouvez créer des séquences déclenchées automatiquement (ex: 3 jours après un formulaire).

---

## 🎓 Ressources utiles

- **Documentation Brevo** : https://help.brevo.com/
- **Variables Brevo** : https://help.brevo.com/hc/en-us/articles/209499265
- **Test d'email** : https://www.mail-tester.com/ (vérifier le spam score)
- **Prévisualisation multi-clients** : Litmus ou Email on Acid

---

**Besoin d'aide ?**
Contactez-moi : 
📞 06 78 07 15 22  
✉️ corentin@vibeweb.fr

---

**Dernière mise à jour :** Janvier 2025  
**Compatibilité :** Brevo (ex-Sendinblue), MailChimp, SendGrid, Mailjet
