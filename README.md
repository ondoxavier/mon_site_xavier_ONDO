# Portfolio React - Xavier ONDO ESSONO

Portfolio professionnel centré sur le CV, les expériences Data/IA, les projets sélectionnés et le rôle de co-fondateur d'Ogooué AI.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée par Vite.

## Build de production

```bash
npm run build
```

## Publication

Le site est préparé pour GitHub Pages avec le workflow :

```text
.github/workflows/deploy.yml
```

À chaque push sur `main`, GitHub Actions installe les dépendances, lance `npm run build`, puis publie le dossier `dist/` sur GitHub Pages.

Pour activer la publication :

1. Aller dans le dépôt GitHub.
2. Ouvrir `Settings` puis `Pages`.
3. Dans `Build and deployment`, choisir `GitHub Actions`.
4. Lancer ou attendre le workflow `Deploy portfolio to GitHub Pages`.

URL GitHub Pages attendue avant domaine personnalisé :

```text
https://ondoxavier.github.io/mon_site_xavier_ONDO/
```

## Structure

```text
portfolio_xavier/
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   └── styles.css
├── assets/
│   ├── profile.jpg
│   └── project_images/
└── data/
    └── CV_ONDO-ESSONO-Xavier.pdf
```

## Contenu à modifier

- Profil, expériences, projets, compétences et Ogooué AI : `src/main.jsx`
- Design responsive : `src/styles.css`
- Photo : `assets/profile.jpg`
- CV téléchargeable : `data/CV_ONDO-ESSONO-Xavier.pdf`

## Ogooué AI

La section Ogooué AI présente le positionnement public de l'entreprise :

- Cabinet IA & Data pour organisations exigeantes
- RAG chatbots, automatisation, analytics, MLOps, gouvernance et formation
- Sprint Diagnostic, Prototype / POC, Déploiement & MCO
- Contact public : `contact@ogooueia.com`

Ne pas ajouter de mot de passe, clé API ou identifiant privé dans ce dépôt. Les secrets doivent rester dans un gestionnaire de mots de passe ou dans des variables d'environnement non versionnées.

## Domaine personnalisé

Le domaine choisi est :

```text
xavierondo.com
```

Ajouter ce domaine dans `Settings > Pages > Custom domain`, puis configurer les DNS chez OVH.

Pour le sous-domaine `www.xavierondo.com`, créer un enregistrement `CNAME` vers :

```text
ondoxavier.github.io
```

Pour le domaine racine `xavierondo.com`, créer les enregistrements `A` GitHub Pages indiqués dans la documentation officielle GitHub.
