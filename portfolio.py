from datetime import datetime
from pathlib import Path

import pandas as pd
import streamlit as st
from PIL import Image

# ------------------------
# Configuration générale
# ------------------------
st.set_page_config(
    page_title="Xavier ONDO ESSONO | Data Scientist & AI Engineer",
    page_icon="assets/profile.jpg",
    layout="wide",
)

# ------------------------
# Thème & CSS custom
# ------------------------
PRIMARY = "#0F172A"
SECONDARY = "#1E293B"
ACCENT = "#0EA5E9"
ACCENT_SOFT = "#E0F2FE"
SURFACE = "#FFFFFF"
TEXT = "#0F172A"
MUTED = "#475569"
BORDER = "#CBD5E1"

PROFILE = {
    "name": "Xavier ONDO ESSONO",
    "headline": "Data Scientist | AI Engineer | Data Engineer",
    "location": "Noisy-le-Grand, France",
    "email": "xavier.ondo@aivancity.education",
    "phone": "+33 7 45 01 11 70",
    "linkedin": "https://www.linkedin.com/in/xavier-ondo",
}

HERO_METRICS = [
    {"label": "Alternance IA", "value": "2 ans", "detail": "ALSTOM Transport"},
    {"label": "Impact pricing", "value": "+8%", "detail": "amelioration de precision"},
    {"label": "Documents traites", "value": "12k+", "detail": "PDF, OCR, parsing"},
]

EXPERIENCES = [
    {
        "title": "Apprenti Data Scientist",
        "company": "ALSTOM Transport",
        "period": "Sept. 2024 - Sept. 2026",
        "location": "Saint-Ouen",
        "items": [
            "Industrialisation d'un moteur de smart pricing avec Dataiku, Python et modeles de machine learning.",
            "Collecte et structuration de donnees multi-sources via API, MarkLogic et parsing PDF.",
            "Conception d'un RAG pour retrouver rapidement des clauses et informations critiques dans les contrats.",
        ],
    },
    {
        "title": "Data Scientist Stagiaire",
        "company": "Universite Gustave Eiffel",
        "period": "Juin 2023 - Sept. 2023",
        "location": "Champs-sur-Marne",
        "items": [
            "Analyse de 52 725 lignes de donnees avec Python et SQL pour produire des indicateurs exploitables.",
            "Production de tableaux de bord et visualisations pour faciliter la lecture des resultats.",
        ],
    },
]

PROJECTS = [
    {
        "name": "Smart Pricing",
        "subtitle": "Automatisation d'aide a la decision chez ALSTOM",
        "image": ASSETS / "project_images" / "smart_pricing.png",
        "context": "Le besoin etait de recommander des prix plus coherents et exploitables a partir de donnees techniques et historiques disperses.",
        "role": "J'ai contribue a la collecte, au nettoyage, au feature engineering et a l'integration du pipeline dans un usage metier lisible.",
        "impact": "Amelioration mesuree d'environ 8% sur la precision des recommandations et gain de lisibilite pour les equipes.",
        "tech": ["Python", "Dataiku", "Pandas", "scikit-learn", "Excel/PDF"],
    },
    {
        "name": "RAG Contrats",
        "subtitle": "Recherche semantique dans des documents contractuels",
        "image": ASSETS / "project_images" / "rag_contracts.png",
        "context": "Les equipes avaient besoin d'acceder rapidement a des clauses precises sans relire manuellement chaque PDF.",
        "role": "J'ai mis en place l'ingestion, le chunking, l'indexation vectorielle et une chaine de question-reponse avec citations.",
        "impact": "Reduction du temps de recherche documentaire et meilleure reutilisation de la connaissance contenue dans les contrats.",
        "tech": ["Python", "LangChain", "FAISS", "LLM", "PDF parsing"],
    },
    {
        "name": "YOLOW Vision",
        "subtitle": "Detection de defauts sur composants",
        "image": ASSETS / "project_images" / "yolow.png",
        "context": "Objectif: detecter automatiquement des zones defectueuses sur composants a partir d'images.",
        "role": "J'ai participe au pipeline d'annotation, au travail sur les images et a la restitution des resultats dans une interface web.",
        "impact": "Projet concret de computer vision avec 800 images, utile pour illustrer ma capacite a mener un sujet IA de bout en bout.",
        "tech": ["PyTorch", "YOLO", "SAM", "OpenCV", "Flask"],
    },
]

SKILL_GROUPS = {
    "Expertise principale": [
        "Python",
        "Machine Learning",
        "NLP",
        "Computer Vision",
        "Data Engineering",
        "Generative AI",
    ],
    "Outils et plateformes": [
        "Dataiku",
        "scikit-learn",
        "PyTorch",
        "TensorFlow",
        "MLflow",
        "Azure",
        "GitLab",
    ],
    "Data et systemes": [
        "SQL",
        "MySQL",
        "MarkLogic",
        "Selenium",
        "OCR",
        "API integration",
    ],
}

EDUCATION = pd.DataFrame(
    [
        {
            "Diplome": "Master - Chef de projet IA (RNCP 38584)",
            "Etablissement": "Aivancity school of AI & Data for business and society - Paris-Cachan",
            "Periode": "2025 - 2026",
            "Orientation": "Solutions IA",
        },
        {
            "Diplome": "Licence - IA & Data",
            "Etablissement": "Aivancity school of AI & Data for business and society - Paris-Cachan",
            "Periode": "2022 - 2025",
            "Orientation": "Data Science",
        },
        {
            "Diplome": "Licence professionnelle - Developpement",
            "Etablissement": "Aivancity school of AI & Data for business and society - Paris-Cachan",
            "Periode": "2019 - 2020",
            "Orientation": "Developpement logiciel",
        },
    ]
)

SEARCH_TARGET = [
    "CDI en Data Science, AI Engineering ou Data Engineering.",
    "Environnement ou la valeur business, la rigueur technique et l'industrialisation des solutions IA comptent vraiment.",
    "Missions avec impact concret: optimisation, automatisation, recherche documentaire, vision, NLP ou plateformes data.",
]

CUSTOM_CSS = f"""
<style>
/* Police générale (fallback si non dispo) */
html, body, [class*="css"], .stMarkdown {{
    font-family: 'Inter', 'Roboto', system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
}}

/* Background doux */
.main .block-container {{
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 16px;
}}

/* Cartes */
.card {{
    background: {WHITE};
    border: 1px solid #E5E7EB;
    border-radius: 16px;
    padding: 1.25rem 1.25rem;
    box-shadow: 0 6px 20px rgba(11,60,93,0.06);
}}
.card h3 {{ margin-top: 0.2rem; margin-bottom: 0.6rem; }}

.badge {{
    display: inline-block;
    padding: 6px 10px;
    border-radius: 999px;
    background: {LIGHT};
    color: {PRIMARY};
    font-size: 0.85rem;
    margin: 4px 6px 0 0;
    border: 1px solid #E5E7EB;
}}

.kpi {{
    display: inline-block;
    padding: 10px 14px;
    border-radius: 12px;
    background: linear-gradient(180deg, #ffffff, #f7fafc);
    border: 1px solid #E5E7EB;
    margin-right: 8px;
}}

.timeline {{
    position: relative;
    margin: 1rem 0 0 0;
    padding-left: 1.25rem;
}}
.timeline::before {{
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #E5E7EB;
}}
.timeline-item {{
    position: relative;
    margin: 0 0 1.2rem 0;
}}
.timeline-item::before {{
    content: '';
    position: absolute;
    left: -2px;
    top: 4px;
    width: 12px;
    height: 12px;
    background: {ACCENT};
    border: 2px solid {WHITE};
    border-radius: 999px;
    box-shadow: 0 0 0 3px #E5F2FE;
}}

.footer {{
    color: {MUTED};
    font-size: 0.9rem;
    text-align: center;
    padding: 1.5rem 0 0.5rem 0;
}}

a.btn {{
    text-decoration: none !important;
    background: {PRIMARY};
    color: {WHITE} !important;
    padding: 10px 14px;
    border-radius: 12px;
    display: inline-block;
    border: 1px solid #0a3552;
}}

a.btn-outline {{
    text-decoration: none !important;
    background: {WHITE};
    color: {PRIMARY} !important;
    padding: 10px 14px;
    border-radius: 12px;
    display: inline-block;
    border: 1px solid {PRIMARY};
}}
</style>
"""

st.markdown(CUSTOM_CSS, unsafe_allow_html=True)

# ------------------------
# Données de profil
# ------------------------
PROFILE = {
    "name": "Xavier ONDO ESSONO",
    "headline": "Data Scientist · IA Developer · Chef de projet IA · Data Engineer",
    "phone": "+33 7 45 01 11 70",
    "email": "xavier.ondo@aivancity.education",
    "location": "Noisy-le-Grand (FR)",
    "linkedin": "https://www.linkedin.com/in/xavier-ondo",
    "github": "https://github.com/xavierondo"
}

ASSETS = Path("assets")
DATA_DIR = Path("data")
DATA_DIR.mkdir(parents=True, exist_ok=True)

# ------------------------
# Utilitaires
# ------------------------

def load_image(path: Path, fallback_text: str = "Image"):
    try:
        return Image.open(path)
    except Exception:
        return None


def file_download_button(label: str, filepath: Path, mime: str = "application/octet-stream"):
    if filepath.exists():
        with open(filepath, "rb") as f:
            data = f.read()
        b64 = base64.b64encode(data).decode()
        href = f'<a class="btn" href="data:{mime};base64,{b64}" download="{filepath.name}">{label}</a>'
        st.markdown(href, unsafe_allow_html=True)
    else:
        st.info("📄 CV introuvable pour l’instant. Placez votre fichier dans `data/cv_xavier.pdf`. ")


def badge_group(items):
    html = "".join([f'<span class="badge">{i}</span>' for i in items])
    st.markdown(html, unsafe_allow_html=True)


# ------------------------
# Sections
# ------------------------

def section_references():
    st.subheader("Références / Recommandations")
    st.write("Quelques témoignages et contacts professionnels (vérifiables sur demande).")

    refs = [
        {
            "name": "Angela (Alstom)",
            "role": "Manager – Smart Pricing",
            "text": "Xavier a structuré un pipeline de pricing robuste et lisible, en améliorant la précision de manière mesurable (≈+8%). Il sait prioriser et communiquer avec clarté.",
            "contact": "linkedin.com/in/..."
        },
        {
            "name": "Maïssa (Alstom)",
            "role": "Chef de projet Data",
            "text": "Fiable, rigoureux et autonome sur les sujets Dataiku/MarkLogic. Force de proposition sur l'industrialisation.",
            "contact": "linkedin.com/in/..."
        },
        {
            "name": "Dr. Anuradha Kar (Aivancity)",
            "role": "Encadrante – Projets IA",
            "text": "Bon esprit d'analyse et de synthèse. Travaille proprement, avec sens de l'éthique de l'IA et de la validation des résultats.",
            "contact": "aivancity.edu/..."
        },
    ]

    for r in refs:
        st.markdown(
            f"""
            <div class='card'>
                <h3 style='margin:0'>{r['name']}</h3>
                <p style='color:#6B7280; margin:4px 0'>{r['role']}</p>
                <p style='margin:6px 0'>“{r['text']}”</p>
                <a class='btn-outline' href='https://{r['contact']}' target='_blank'>Profil / Contact</a>
            </div>
            """,
            unsafe_allow_html=True,
        )

    st.info("Souhaitez-vous que j'ajoute des lettres de recommandation (PDF) téléchargeables ?")

def section_home():
    col1, col2 = st.columns([1, 2.2])
    with col1:
        avatar = load_image(ASSETS / "profile.jpg")
        if avatar is not None:
            st.image(avatar, use_column_width=True, caption="Xavier ONDO ESSONO")
        else:
            st.markdown("<div class='card'><b>Photo</b> : placez `assets/profile.jpg`.</div>", unsafe_allow_html=True)

    with col2:
        st.markdown(f"""
            <div class='card'>
                <h1 style='margin-bottom:0'>{PROFILE['name']}</h1>
                <p style='color:{MUTED}; font-size:1.1rem; margin-top:6px'>{PROFILE['headline']}</p>
                <div class='kpi'>📍 {PROFILE['location']}</div>
                <div class='kpi'>✉️ {PROFILE['email']}</div>
                <div class='kpi'>📞 {PROFILE['phone']}</div>
            </div>
        """, unsafe_allow_html=True)

        st.write(
            "Passionné par l’IA appliquée, je conçois des pipelines de données, des modèles ML/Deep Learning et des outils d’aide à la décision. Mon objectif : transformer les données en valeur opérationnelle mesurable."
        )

        c1, c2, c3 = st.columns([1, 1, 1])
        with c1:
            file_download_button("📄 Télécharger mon CV", DATA_DIR / "cv_xavier.pdf", mime="application/pdf")
        with c2:
            st.markdown(f"<a class='btn-outline' href='{PROFILE['linkedin']}' target='_blank'>LinkedIn</a>", unsafe_allow_html=True)
        with c3:
            st.markdown("<a class='btn-outline' href='mailto:{0}'>Me contacter</a>".format(PROFILE['email']), unsafe_allow_html=True)

        st.divider()
        st.subheader("Points clés")
        col_a, col_b, col_c = st.columns(3)
        with col_a:
            st.metric("Automatisation Smart Pricing", "+8% précision", help="Gain mesuré sur modèles ML pricing")
        with col_b:
            st.metric("Scraping / Parsing PDF", "12k+ docs", help="Selenium, pdfplumber, OCR")
        with col_c:
            st.metric("RAG contrats", "Prod interne", help="Recherche sémantique LangChain")



def section_experience():
    st.subheader("Parcours professionnel")
    st.markdown("""
    <div class='timeline'>
      <div class='timeline-item'>
        <div class='card'>
          <h3>ALSTOM Transport – Apprenti Data Scientist</h3>
          <p style='color:#6B7280; margin:4px 0;'>Saint-Ouen · Sept. 2024 – Sept. 2026</p>
          <ul>
            <li>Projet <b>Smart Pricing</b> : automatisation du calcul des prix (Dataiku + modèles IA).</li>
            <li>Collecte via API & parsing PDF (MarkLogic, pdfplumber, OCR).</li>
            <li>Implémentation d’un <b>RAG</b> pour la recherche d’informations sur contrats.</li>
          </ul>
        </div>
      </div>
      <div class='timeline-item'>
        <div class='card'>
          <h3>Université Gustave Eiffel – Data Scientist (Stage)</h3>
          <p style='color:#6B7280; margin:4px 0;'>Champs-sur-Marne · Juin – Sept. 2023</p>
          <ul>
            <li>Analyse de <b>52 725</b> lignes (Python, SQL) et data viz (Power BI, Tableau).</li>
          </ul>
        </div>
      </div>
    </div>
    """, unsafe_allow_html=True)



def section_skills():
    st.subheader("Compétences")

    col1, col2 = st.columns(2)
    with col1:
        st.markdown("**Langages**")
        badge_group(["Python", "R", "PHP", "SQL", "HTML/CSS"])

        st.markdown("**IA & Data**")
        badge_group(["ML", "Deep Learning", "NLP", "Computer Vision", "MLOps", "IA générative"])    

        st.markdown("**Frameworks & Outils**")
        badge_group(["scikit-learn", "TensorFlow", "PyTorch", "Selenium", "Dataiku", "GitLab", "Azure", "MLflow"]) 

    with col2:
        st.markdown("**Bases de données & ERP**")
        badge_group(["MySQL", "MarkLogic", "Odoo"]) 

        st.markdown("**Soft skills**")
        badge_group(["Adaptabilité", "Rigueur", "Esprit d’équipe", "Analyse", "Esprit critique"]) 

        st.markdown("**Niveaux (auto-évaluation)**")
        skills = {
            "Python": 0.88,
            "ML / DS": 0.85,
            "NLP": 0.78,
            "Computer Vision": 0.80,
            "MLOps": 0.70,
            "SQL": 0.75,
        }
        for k, v in skills.items():
            st.write(k)
            st.progress(v)



def project_card(title: str, img_path: Path, summary: str, bullets: list, tech: list, links: dict):
    img = load_image(img_path)
    col_img, col_txt = st.columns([1.1, 2])
    with col_img:
        if img is not None:
            st.image(img, use_column_width=True)
        else:
            st.markdown("<div class='card'>Image manquante. Placez une image dans assets/project_images/</div>", unsafe_allow_html=True)
    with col_txt:
        st.markdown(f"### {title}")
        st.write(summary)
        for b in bullets:
            st.write(f"- {b}")
        badge_group(tech)
        if links:
            st.write("")
            for label, url in links.items():
                st.markdown(f"<a class='btn-outline' href='{url}' target='_blank'>{label}</a>", unsafe_allow_html=True)


def section_projects():
    st.subheader("Projets IA")

    tab1, tab2, tab3, tab4, tab5 = st.tabs([
        "Smart Pricing",
        "YOLOW (Vision)",
        "RAG Contrats",
        "Projet clinique SOCOTEC",
        "NLP Design Automobile"
    ])

    with tab1:
        project_card(
            title="Smart Pricing – Alstom",
            img_path=ASSETS / "project_images" / "smart_pricing.png",
            summary="Automatisation du calcul des prix recommandés avec Dataiku et modèles d’IA.",
            bullets=[
                "Collecte multi-sources (API, MarkLogic)",
                "Nettoyage & features engineering (Captivity, Supplier Type)",
                "Export Excel/PDF par pièce et synthèse",
            ],
            tech=["Python", "Dataiku", "scikit-learn", "Pandas", "Excel/PDF"],
            links={}
        )
        with st.expander("Mini démonstration (exemple jouet)"):
            df = pd.DataFrame({
                "Part": ["A", "B", "C", "D"],
                "SitePrice": [120, 95, 210, 140],
                "SmartPrice": [110, 100, 195, 150],
            })
            st.dataframe(df, use_container_width=True)
            st.line_chart(df.set_index("Part"))

    with tab2:
        project_card(
            title="YOLOW – Détection de défauts (Vision)",
            img_path=ASSETS / "project_images" / "yolow.png",
            summary="Application Flask + IA pour détecter automatiquement les zones défectueuses (voids) sur composants.",
            bullets=[
                "800 images, pipeline d’annotation avec SAM",
                "Segmentation + détection (void / component)",
                "Interface web pour visualiser les résultats",
            ],
            tech=["Flask", "PyTorch", "YOLO", "SAM", "OpenCV"],
            links={}
        )

    with tab3:
        project_card(
            title="RAG Contrats – Recherche intelligente",
            img_path=ASSETS / "project_images" / "rag_contracts.png",
            summary="RAG (LangChain) pour retrouver des clauses précises dans des contrats PDF.",
            bullets=[
                "Ingestion & chunking de PDF",
                "Indexation FAISS + embeddings",
                "Chaîne QA et citations des sources",
            ],
            tech=["Python", "LangChain", "FAISS", "OpenAI/LLM"],
            links={}
        )

    with tab4:
        st.markdown("**Projet clinique IA – SOCOTEC Monitoring**")
        st.write("Scraping (Selenium) + NLP pour scorer la pertinence de documents.")
        badge_group(["Selenium", "NLP", "Pandas", "JSON/CSV"])

    with tab5:
        st.markdown("**NLP & Design Automobile**")
        st.write("Analyse de 4 829 descriptions (NLTK/SpaCy) et tendances (fine-tuning Stable Diffusion).")
        badge_group(["SpaCy", "NLTK", "Stable Diffusion"]) 



def section_education():
    st.subheader("Formations")
    df = pd.DataFrame([
        {"Diplôme": "Master – Chef de projet IA (Niv. 7, RNCP38584)", "École": "Aivancity Paris-Cachan", "Année": "2025–2026", "Spécialisation": "Solutions IA"},
        {"Diplôme": "Licence – IA & Data", "École": "Aivancity", "Année": "2022–2025", "Spécialisation": "Data Science"},
        {"Diplôme": "Licence Pro – Développement", "École": "IPTIC Gabon", "Année": "2019–2020", "Spécialisation": "Développement"},
    ])
    st.dataframe(df, use_container_width=True, hide_index=True)



def section_contact():
    st.subheader("Contact")
    st.write("N’hésitez pas à me laisser un message. Je reviens vers vous rapidement.")

    with st.form("contact_form"):
        c1, c2 = st.columns(2)
        with c1:
            name = st.text_input("Nom")
        with c2:
            email = st.text_input("Email")
        subject = st.text_input("Objet")
        message = st.text_area("Message", height=140)
        send = st.form_submit_button("Envoyer")

    if send:
        ts = datetime.now().isoformat(timespec="seconds")
        row = {"timestamp": ts, "name": name, "email": email, "subject": subject, "message": message}
        out = DATA_DIR / "contact_messages.csv"
        try:
            if out.exists():
                df = pd.read_csv(out)
                df = pd.concat([df, pd.DataFrame([row])], ignore_index=True)
            else:
                df = pd.DataFrame([row])
            df.to_csv(out, index=False)
            st.success("✅ Message envoyé ! (enregistré localement dans data/contact_messages.csv)")
        except Exception as e:
            st.error(f"❌ Erreur lors de l’enregistrement : {e}")

    st.markdown("""
    Vous pouvez aussi me contacter directement :  
    - ✉️ **Email** : xavier.ondo@aivancity.education  
    - 🔗 **LinkedIn** : [linkedin.com/in/xavier-ondo](https://www.linkedin.com/in/xavier-ondo)
    """)


# ------------------------
# Barre latérale (navigation)
# ------------------------
with st.sidebar:
    st.image(load_image(ASSETS / "profile.jpg") or Image.new('RGB', (600, 400), color=(240, 244, 248)), caption="Xavier ONDO ESSONO")
    st.markdown("### Navigation")
    page = st.radio("", ["Accueil", "Parcours", "Compétences", "Projets", "Formations", "Références", "Contact"], index=0)

    st.divider()
    st.markdown("**Téléchargements**")
    file_download_button("📄 Mon CV (PDF)", DATA_DIR / "cv_xavier.pdf", mime="application/pdf")

    st.divider()
    st.caption("© " + str(datetime.now().year) + " – Xavier ONDO ESSONO")

# ------------------------
# Routage pages
# ------------------------
if page == "Accueil":
    section_home()
elif page == "Parcours":
    section_experience()
elif page == "Compétences":
    section_skills()
elif page == "Projets":
    section_projects()
elif page == "Formations":
    section_education()
elif page == "Références":
    section_references()
elif page == "Contact":
    section_contact()

# ------------------------
# Fichiers prêts à l'emploi (copiez/collez dans des fichiers séparés)
# ------------------------

REQ_TXT = """\
streamlit
pandas
pillow
"""

README_MD = """\
# Portfolio – Xavier ONDO ESSONO (Streamlit)

Mix **professionnel + moderne** pour présenter mon profil Data Scientist / Data Engineer / Chef de projet IA.

## 🚀 Fonctionnalités
- Page d'accueil avec KPIs et CTA (CV / LinkedIn / Email)
- Timeline d'expériences
- Compétences (badges + jauges)
- Projets (cartes, images, mini démo Smart Pricing)
- Formations (tableau)
- **Références / Recommandations** (nouvelle section)
- Formulaire de contact (enregistre en local `data/contact_messages.csv`)

## 📦 Structure
```
portfolio_xavier/
├── app.py
├── assets/
│   ├── profile.jpg
│   └── project_images/
│       ├── smart_pricing.png
│       ├── yolow.png
│       └── rag_contracts.png
├── data/
│   └── cv_xavier.pdf
├── requirements.txt
└── README.md
```

## 🧑‍💻 Installation & Lancement
```bash
pip install -r requirements.txt
streamlit run app.py
```

## ☁️ Déploiement (Streamlit Cloud)
1. Poussez le repo sur GitHub.
2. Allez sur share.streamlit.io → New app → connectez le repo.
3. Choisissez la branche et `app.py`.
4. Ajoutez les variables (si besoin) dans *Secrets*.
5. Déployez.

### Alternatives d'hébergement
- **Render** (free tier)
- **Railway** (free tier)

## 🎨 Personnalisation
- Couleurs dans `CUSTOM_CSS` (PRIMARY, ACCENT, etc.).
- Images projets dans `assets/project_images/`.
- Texte des projets dans `section_projects()`.
- KPI / Accroche dans `section_home()`.

## 🔎 SEO & Visibilité
- `st.set_page_config(page_title=...)` déjà configuré.
- Ajoutez un **README** soigné + un bon *About* dans votre repo GitHub.
- Liez votre **LinkedIn** et des **repos publics** de projets (YOLOW, RAG, etc.).
- Ajoutez un **favicon** (`assets/favicon.ico`) et renseignez `page_icon`.

## 🧪 QA rapide
- Lancement local OK ?
- Images présentes ?
- CV disponible dans `data/cv_xavier.pdf` ?
- Formulaire contact → CSV créé ?

## 📝 Licence
MIT (ou autre au choix).
"""

# ------------------------
# Pied de page
# ------------------------
st.markdown("""
<hr/>
<div class='footer'>
Construit avec Streamlit • Thème sur-mesure (bleu {PRIMARY}) • Design pro + moderne.  
Astuce : hébergez sur Streamlit Cloud (gratuit) et liez votre domaine perso.
</div>
""", unsafe_allow_html=True)
