from datetime import datetime
from pathlib import Path

import pandas as pd
import streamlit as st
from PIL import Image


st.set_page_config(
    page_title="Xavier ONDO ESSONO | Data Scientist & AI Engineer",
    page_icon="📈",
    layout="wide",
    initial_sidebar_state="collapsed",
)


PRIMARY = "#0F172A"
SECONDARY = "#1E293B"
ACCENT = "#0EA5E9"
ACCENT_SOFT = "#E0F2FE"
SURFACE = "#FFFFFF"
SURFACE_SOFT = "#F8FAFC"
TEXT = "#0F172A"
MUTED = "#475569"
BORDER = "#CBD5E1"

ASSETS = Path("assets")
DATA_DIR = Path("data")
DATA_DIR.mkdir(parents=True, exist_ok=True)

PROFILE = {
    "name": "Xavier ONDO ESSONO",
    "headline": "Data Scientist | Data Engineer | AI Engineer",
    "location": "Noisy-le-Grand, France",
    "email": "xavier.ondo@aivancity.education",
    "phone": "+33 7 45 01 11 70",
    "linkedin": "https://www.linkedin.com/in/xavier-ondo",
}

HERO_METRICS = [
    {"label": "Disponibilite CDI", "value": "Oct. 2026", "detail": "Data / IA / Engineering"},
    {"label": "Alternance", "value": "2 ans", "detail": "Data Scientist chez ALSTOM"},
    {"label": "Documents et donnees", "value": "12k+", "detail": "Selenium, PDF, OCR, NLP"},
]

EXPERIENCES = [
    {
        "title": "Apprenti Data Scientist",
        "company": "ALSTOM Transport",
        "period": "Sept. 2024 - Sept. 2026",
        "location": "Saint-Ouen",
        "items": [
            "Conception et deploiement d'un systeme Graph RAG multimodal dans Dataiku DSS, avec moteur Text-to-SQL sur PostgreSQL et recherche semantique sur documents SharePoint.",
            "Developpement d'une solution d'analyse intelligente des donnees metiers en Python avec integration d'APIs LLM dans les workflows Dataiku.",
            "Contribution au projet Smart Pricing par integration de modeles de machine learning pour automatiser la recommandation tarifaire.",
            "Mise en place de pipelines ETL pour la collecte via API, le traitement et l'enrichissement de donnees issues de MarkLogic.",
            "Developpement d'un pipeline de parsing PDF avec pdfplumber et OCR pour transformer des documents non structures en donnees exploitables.",
        ],
    },
    {
        "title": "Data Scientist Stagiaire",
        "company": "Universite Gustave Eiffel",
        "period": "Juin 2023 - Sept. 2023",
        "location": "Champs-sur-Marne",
        "items": [
            "Preparation et exploitation d'un dataset de plus de 52 000 observations provenant de sources SQL et CSV.",
            "Developpement de modeles de regression et XGBoost pour la prediction de deformations de structures en beton.",
            "Amelioration de la precision des modeles de 8% via optimisation d'hyperparametres et selection de variables.",
            "Realisation de tableaux de bord sous Tableau et Power BI pour soutenir l'analyse metier.",
        ],
    },
]

PROJECTS = [
    {
        "name": "Graph RAG multimodal",
        "subtitle": "Dataiku, Text-to-SQL et recherche documentaire intelligente chez ALSTOM",
        "image": ASSETS / "project_images" / "rag_contracts.png",
        "context": "Le besoin etait de rendre interrogeables a la fois des donnees PostgreSQL et des documents metiers disperses dans SharePoint.",
        "role": "J'ai concu un systeme dans Dataiku DSS combinant Graph RAG, moteur Text-to-SQL et recherche semantique avec integration d'APIs LLM dans les workflows.",
        "impact": "Le projet illustre une capacite a relier data engineering, NLP et usages metiers pour accelerer l'acces aux informations critiques.",
        "tech": ["Python", "Dataiku DSS", "LLM APIs", "PostgreSQL", "RAG", "SharePoint"],
    },
    {
        "name": "Radiologic Image Project",
        "subtitle": "Diagnostic veterinaire assiste par IA",
        "image": ASSETS / "project_images" / "yolow.png",
        "context": "Projet academique centre sur l'analyse d'images radiologiques veterinaires et la generation de rapports d'aide au diagnostic.",
        "role": "J'ai contribue a un pipeline associant segmentation UNet, extraction d'indicateurs cliniques, LLM pour le reporting et interface Streamlit.",
        "impact": "Projet complet de deep learning et IA generative, pertinent pour montrer une capacite a concevoir une chaine de valeur IA de bout en bout.",
        "tech": ["PyTorch", "UNet", "Computer Vision", "LLM", "Streamlit", "PDF export"],
    },
    {
        "name": "Clinique IA SOCOTEC",
        "subtitle": "Extraction, NLP et scoring documentaire",
        "image": ASSETS / "project_images" / "smart_pricing.png",
        "context": "La mission consistait a extraire, structurer et scorer des informations utiles a partir de documents techniques en volume.",
        "role": "J'ai travaille sur l'extraction de plus de 12 000 donnees via Selenium, le traitement de 395 PDF et une logique de scoring de pertinence documentaire.",
        "impact": "Le projet montre une execution solide sur la collecte automatisee, le NLP applique et l'amelioration du tri d'information technique.",
        "tech": ["Selenium", "NLP", "Python", "PDF processing", "JSON/CSV"],
    },
]

SKILL_GROUPS = {
    "Expertise principale": [
        "Python",
        "SQL",
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
        "Power BI",
        "Tableau",
        "GitLab",
    ],
    "Data et systemes": [
        "PostgreSQL",
        "MarkLogic",
        "Selenium",
        "OCR",
        "API integration",
        "ETL",
    ],
}

EDUCATION = pd.DataFrame(
    [
        {
            "Diplome": "Master - Chef de projet IA (RNCP 38584)",
            "Etablissement": "Aivancity Paris-Cachan",
            "Periode": "2025 - 2026",
            "Orientation": "Solutions IA",
        },
        {
            "Diplome": "Licence - IA & Data",
            "Etablissement": "Aivancity",
            "Periode": "2022 - 2025",
            "Orientation": "Data Science",
        },
        {
            "Diplome": "Licence professionnelle - Developpement",
            "Etablissement": "IPTIC Gabon",
            "Periode": "2019 - 2020",
            "Orientation": "Developpement logiciel",
        },
    ]
)

CERTIFICATIONS = [
    "Dataiku: Core Designer, ML Practitioner, Gen AI Practitioner, Advanced Designer, Developer, MLOps Practitioner",
    "Microsoft DP-100: score 435/700",
    "AI Product Engineering: From Concept to Market, Spring 2025",
]

LANGUAGES_AND_INTERESTS = [
    "Francais: maternel",
    "Anglais: B2",
    "Interets: football, documentaires tech, nature et IA",
]

SEARCH_TARGET = [
    "CDI en Data Science, AI Engineering ou Data Engineering.",
    "Disponibilite a partir d'octobre 2026.",
    "Environnement ou la valeur business, la rigueur technique et l'industrialisation des solutions IA comptent vraiment.",
    "Missions avec impact concret: automatisation, analyse documentaire, machine learning, computer vision, NLP ou plateformes data.",
]

CUSTOM_CSS = f"""
<style>
html, body, [class*=\"css\"], .stMarkdown, .stApp {{
    font-family: \"Aptos\", \"Segoe UI\", \"Helvetica Neue\", sans-serif;
    color: {TEXT};
}}

.stApp {{
    background:
        radial-gradient(circle at top left, rgba(14, 165, 233, 0.10) 0%, rgba(14, 165, 233, 0) 24%),
        radial-gradient(circle at top right, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0) 22%),
        linear-gradient(180deg, #f4f7fb 0%, #eef3f8 100%);
}}

.main .block-container {{
    padding-top: 1.25rem;
    padding-bottom: 3rem;
    max-width: 1160px;
}}

.hero {{
    background:
        radial-gradient(circle at top right, rgba(14, 165, 233, 0.25) 0%, rgba(14, 165, 233, 0) 26%),
        linear-gradient(135deg, #0f172a 0%, #172554 100%);
    border: 1px solid rgba(15, 23, 42, 0.22);
    border-radius: 32px;
    padding: 2.25rem;
    color: white;
    box-shadow: 0 28px 60px rgba(15, 23, 42, 0.16);
}}

.hero h1 {{
    margin: 0;
    font-size: 2.7rem;
    line-height: 0.98;
    letter-spacing: -0.03em;
}}

.hero p {{
    color: #dbeafe;
    max-width: 60ch;
}}

.eyebrow {{
    display: inline-block;
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.10);
    color: #e0f2fe;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}}

.section-card {{
    background: {SURFACE};
    border: 1px solid {BORDER};
    border-radius: 24px;
    padding: 1.35rem;
    box-shadow: 0 10px 26px rgba(15, 23, 42, 0.045);
}}

.metric-card {{
    background: {SURFACE};
    border: 1px solid rgba(148, 163, 184, 0.28);
    border-radius: 22px;
    padding: 1.1rem;
    min-height: 124px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.035);
}}

.metric-card .value {{
    font-size: 1.6rem;
    font-weight: 700;
    color: {PRIMARY};
}}

.metric-card .label {{
    color: {MUTED};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}}

.metric-card .detail {{
    color: {MUTED};
    font-size: 0.82rem;
}}

.badge {{
    display: inline-block;
    margin: 0.3rem 0.4rem 0 0;
    padding: 0.42rem 0.75rem;
    border-radius: 999px;
    background: {ACCENT_SOFT};
    color: {PRIMARY};
    border: 1px solid #bae6fd;
    font-size: 0.88rem;
}}

.timeline {{
    position: relative;
    margin-top: 1rem;
    padding-left: 1.4rem;
}}

.timeline::before {{
    content: \"\";
    position: absolute;
    left: 0.35rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #cbd5e1;
}}

.timeline-item {{
    position: relative;
    margin-bottom: 1rem;
}}

.timeline-item::before {{
    content: \"\";
    position: absolute;
    left: -1.08rem;
    top: 0.65rem;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: {ACCENT};
    box-shadow: 0 0 0 4px #e0f2fe;
}}

.subtle {{
    color: {MUTED};
}}

.topbar {{
    background: rgba(255, 255, 255, 0.74);
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 22px;
    padding: 0.8rem 1rem 0.2rem 1rem;
    backdrop-filter: blur(12px);
    margin-bottom: 1.1rem;
}}

.topbar-title {{
    font-size: 0.9rem;
    color: {MUTED};
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
}}

.cta-row {{
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-top: 1rem;
}}

a.cta-primary, a.cta-secondary {{
    text-decoration: none !important;
    display: inline-block;
    padding: 0.78rem 1rem;
    border-radius: 14px;
    font-weight: 600;
}}

a.cta-primary {{
    background: {ACCENT};
    color: #082f49 !important;
}}

a.cta-secondary {{
    background: transparent;
    color: white !important;
    border: 1px solid rgba(224, 242, 254, 0.28);
}}

.project-title {{
    margin-bottom: 0.2rem;
}}

.stRadio > div {{
    gap: 0.65rem;
}}

div[role="radiogroup"] {{
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}}

div[role="radiogroup"] label {{
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 999px;
    padding: 0.45rem 0.9rem;
}}

div[role="radiogroup"] label:hover {{
    border-color: rgba(14, 165, 233, 0.55);
    box-shadow: 0 4px 14px rgba(14, 165, 233, 0.10);
}}

div[role="radiogroup"] label p {{
    color: {PRIMARY};
    font-weight: 600;
}}

[data-testid="stSidebar"] {{
    display: none;
}}

[data-testid="collapsedControl"] {{
    display: none;
}}

.footer {{
    color: {MUTED};
    font-size: 0.9rem;
    text-align: center;
    padding-top: 1.5rem;
}}

.stDownloadButton button {{
    background: linear-gradient(135deg, {ACCENT} 0%, #38bdf8 100%);
    color: #082f49;
    border: 1px solid #38bdf8;
    border-radius: 14px;
    font-weight: 700;
    min-height: 2.85rem;
    box-shadow: 0 10px 24px rgba(14, 165, 233, 0.18);
}}

.stDownloadButton button:hover {{
    background: linear-gradient(135deg, #0284c7 0%, {ACCENT} 100%);
    color: white;
    border-color: #0284c7;
}}
</style>
"""

st.markdown(CUSTOM_CSS, unsafe_allow_html=True)


def load_image(path: Path):
    try:
        return Image.open(path)
    except Exception:
        return None


def get_cv_path():
    preferred_names = ["cv_xavier.pdf", "CV_ONDO-ESSONO-Xavier.pdf"]
    for name in preferred_names:
        path = DATA_DIR / name
        if path.exists():
            return path
    pdf_files = sorted(DATA_DIR.glob("*.pdf"))
    return pdf_files[0] if pdf_files else None


def badge_group(items):
    badges = "".join([f"<span class='badge'>{item}</span>" for item in items])
    st.markdown(badges, unsafe_allow_html=True)


def download_cv_button(key_suffix="default"):
    cv_path = get_cv_path()
    if not cv_path:
        st.warning("Aucun CV PDF n'a ete trouve dans le dossier `data/`.")
        return
    with open(cv_path, "rb") as file:
        st.download_button(
            "Telecharger le CV",
            data=file.read(),
            file_name=cv_path.name,
            mime="application/pdf",
            use_container_width=True,
            key=f"download_cv_{key_suffix}",
        )


def render_topbar():
    st.markdown(
        """
        <div class="topbar">
            <div class="topbar-title">Navigation</div>
        </div>
        """,
        unsafe_allow_html=True,
    )
    nav_left, nav_right = st.columns([2.3, 1], gap="large")
    with nav_left:
        page = st.radio(
            "Navigation principale",
            ["Accueil", "Expérience", "Projets", "Compétences", "Formation", "CDI", "Contact"],
            index=0,
            horizontal=True,
            label_visibility="collapsed",
        )
    with nav_right:
        download_cv_button("topbar")
    return page


def section_home():
    left, right = st.columns([1.35, 1], gap="large")

    with left:
        st.markdown(
            f"""
            <div class="hero">
                <span class="eyebrow">Disponible pour un CDI</span>
                <h1>{PROFILE["name"]}</h1>
                <p style="font-size:1.18rem; margin:0.7rem 0 0.35rem 0;">{PROFILE["headline"]}</p>
                <p style="margin:0.2rem 0 0 0;">Apprenti Data Scientist chez ALSTOM et en fin de Master en Intelligence Artificielle et Data a Aivancity, je conçois des solutions de data engineering, machine learning et IA generative pour l'automatisation, l'analyse documentaire et l'aide a la decision.</p>
                <p style="margin:0.6rem 0 0 0;">Je recherche un CDI a partir d'octobre 2026 en Data Science, Data Engineering ou AI Engineering.</p>
                <div class="cta-row">
                    <a class="cta-primary" href="{PROFILE['linkedin']}" target="_blank">Voir LinkedIn</a>
                    <a class="cta-secondary" href="mailto:{PROFILE['email']}">Me contacter</a>
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

    with right:
        avatar = load_image(ASSETS / "profile.jpg")
        if avatar:
            st.image(avatar, use_container_width=True)
        else:
            st.markdown(
                "<div class='section-card'><strong>Photo de profil</strong><p class='subtle'>Ajoute `assets/profile.jpg` pour compléter la page d'accueil.</p></div>",
                unsafe_allow_html=True,
            )

    metric_columns = st.columns(3)
    for column, metric in zip(metric_columns, HERO_METRICS):
        with column:
            st.markdown(
                f"""
                <div class="metric-card">
                    <div class="label">{metric['label']}</div>
                    <div class="value">{metric['value']}</div>
                    <div class="detail">{metric['detail']}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

    st.write("")
    info_col, action_col = st.columns([1.7, 1], gap="large")

    with info_col:
        st.markdown(
            """
            <div class="section-card">
                <h3>Ce que j'apporte</h3>
                <p>Un profil hybride entre data science appliquee et mise en production: je sais travailler sur la preparation des donnees, la modelisation, l'analyse documentaire, les workflows data et la restitution vers les equipes metier.</p>
                <p class="subtle">Mes sujets les plus solides aujourd'hui: Dataiku, ETL, parsing PDF, OCR, LLM, RAG, machine learning, NLP et computer vision.</p>
            </div>
            """,
            unsafe_allow_html=True,
        )

    with action_col:
        st.markdown(
            f"""
            <div class="section-card">
                <h3>Informations</h3>
                <p><strong>Localisation</strong><br>{PROFILE['location']}</p>
                <p><strong>Email</strong><br>{PROFILE['email']}</p>
                <p><strong>Téléphone</strong><br>{PROFILE['phone']}</p>
            </div>
            """,
            unsafe_allow_html=True,
        )
        download_cv_button("home")


def section_experience():
    st.subheader("Expérience")
    st.caption("Une progression orientée cas concrets, industrialisation et usage métier.")

    st.markdown("<div class='timeline'>", unsafe_allow_html=True)
    for experience in EXPERIENCES:
        items = "".join([f"<li>{item}</li>" for item in experience["items"]])
        st.markdown(
            f"""
            <div class="timeline-item">
                <div class="section-card">
                    <h3 style="margin-bottom:0.2rem;">{experience['title']} - {experience['company']}</h3>
                    <p class="subtle" style="margin-top:0;">{experience['location']} | {experience['period']}</p>
                    <ul>{items}</ul>
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )
    st.markdown("</div>", unsafe_allow_html=True)


def section_projects():
    st.subheader("Projets sélectionnés")
    st.caption("Trois cas qui montrent mon niveau actuel et ma façon de travailler.")

    tabs = st.tabs([project["name"] for project in PROJECTS])
    for tab, project in zip(tabs, PROJECTS):
        with tab:
            image_col, content_col = st.columns([1, 1.25], gap="large")
            with image_col:
                image = load_image(project["image"])
                if image:
                    st.image(image, use_container_width=True)
                else:
                    st.markdown(
                        "<div class='section-card'><strong>Visuel manquant</strong><p class='subtle'>Ajoute l'image projet correspondante dans `assets/project_images/`.</p></div>",
                        unsafe_allow_html=True,
                    )

            with content_col:
                st.markdown(
                    f"""
                    <div class="section-card">
                        <h3 class="project-title">{project['name']}</h3>
                        <p class="subtle" style="margin-top:0;">{project['subtitle']}</p>
                        <p><strong>Contexte.</strong> {project['context']}</p>
                        <p><strong>Ma contribution.</strong> {project['role']}</p>
                        <p><strong>Résultat.</strong> {project['impact']}</p>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )
                badge_group(project["tech"])


def section_skills():
    st.subheader("Compétences")
    st.caption("Présentation resserrée sur les compétences qui soutiennent le mieux un positionnement CDI Data / IA.")

    columns = st.columns(len(SKILL_GROUPS))
    for column, (title, items) in zip(columns, SKILL_GROUPS.items()):
        with column:
            st.markdown(f"<div class='section-card'><h3>{title}</h3></div>", unsafe_allow_html=True)
            badge_group(items)


def section_education():
    st.subheader("Formation")
    st.dataframe(EDUCATION, use_container_width=True, hide_index=True)

    left, right = st.columns(2, gap="large")
    with left:
        st.markdown("<div class='section-card'><h3>Certifications</h3></div>", unsafe_allow_html=True)
        for item in CERTIFICATIONS:
            st.write(f"- {item}")
    with right:
        st.markdown("<div class='section-card'><h3>Langues et centres d'interet</h3></div>", unsafe_allow_html=True)
        for item in LANGUAGES_AND_INTERESTS:
            st.write(f"- {item}")


def section_job_search():
    st.subheader("Recherche de CDI")
    st.markdown(
        """
        <div class="section-card">
            <h3>Cible</h3>
            <p>Je recherche un poste où je peux combiner excellence technique, sens business et exécution opérationnelle autour de la data et de l'IA.</p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    for item in SEARCH_TARGET:
        st.write(f"- {item}")


def section_contact():
    st.subheader("Contact")
    st.markdown(
        f"""
        <div class="section-card">
            <h3>Entrer en contact</h3>
            <p>Pour un entretien, un échange ou une opportunité de CDI, le plus simple est de me contacter directement par email ou via LinkedIn.</p>
            <p><strong>Email</strong><br>{PROFILE['email']}</p>
            <p><strong>LinkedIn</strong><br><a href="{PROFILE['linkedin']}" target="_blank">{PROFILE['linkedin']}</a></p>
            <p><strong>Téléphone</strong><br>{PROFILE['phone']}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )

    action_left, action_right = st.columns(2)
    with action_left:
        st.link_button("Ouvrir LinkedIn", PROFILE["linkedin"], use_container_width=True)
    with action_right:
        st.link_button("Envoyer un email", f"mailto:{PROFILE['email']}", use_container_width=True)


page = render_topbar()


if page == "Accueil":
    section_home()
elif page == "Expérience":
    section_experience()
elif page == "Projets":
    section_projects()
elif page == "Compétences":
    section_skills()
elif page == "Formation":
    section_education()
elif page == "CDI":
    section_job_search()
elif page == "Contact":
    section_contact()


st.markdown(
    f"""
    <hr>
    <div class="footer">
        Portfolio Streamlit de {PROFILE['name']} | Data, IA, industrialisation et impact métier.
    </div>
    """,
    unsafe_allow_html=True,
)
