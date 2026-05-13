# Portfolio professionnel de Xavier ONDO ESSONO

Portfolio Streamlit conçu pour une recherche de CDI en Data Science, AI Engineering et Data Engineering.

## Positionnement

Ce portfolio met en avant:
- une expérience appliquée en environnement industriel
- des projets IA présentés comme des cas concrets
- un message orienté impact métier et industrialisation
- un accès direct au CV et aux coordonnées

## Structure du projet

```text
portfolio_xavier/
├── portfolio.py
├── assets/
│   ├── profile.jpg
│   └── project_images/
│       ├── smart_pricing.png
│       ├── yolow.png
│       └── rag_contracts.png
├── data/
│   ├── CV_ONDO-ESSONO-Xavier.pdf
├── requirements.txt
└── README.md
```

## Lancer le projet

```bash
pip install -r requirements.txt
streamlit run portfolio.py
```

## Sections du portfolio

- `Accueil` : proposition de valeur, chiffres clés, accès rapide au CV
- `Expérience` : parcours professionnel orienté résultats
- `Projets` : études de cas IA sélectionnées
- `Compétences` : stack resserrée sur le positionnement CDI
- `Formation` : parcours académique
- `CDI` : type d'opportunités recherchées
- `Contact` : email, téléphone et LinkedIn

## Personnalisation rapide

- Modifier les textes de profil dans `PROFILE` dans `portfolio.py`
- Ajuster les expériences dans `EXPERIENCES`
- Mettre à jour les projets dans `PROJECTS`
- Remplacer les visuels dans `assets/project_images/`
- Déposer le CV PDF dans `data/`

## Recommandations de diffusion

- Déployer sur Streamlit Community Cloud
- Ajouter le lien du portfolio sur LinkedIn et sur le CV
- Associer si possible des dépôts GitHub publics pour les projets démontrables
- Utiliser une URL propre et un titre cohérent sur toutes les plateformes
