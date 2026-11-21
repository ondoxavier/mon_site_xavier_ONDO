import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* ------------------------------------------------------------------ */
/* Contenu — à mettre à jour ici                                        */
/* ------------------------------------------------------------------ */

const profile = {
  name: "Xavier ONDO ESSONO",
  role: "AI Engineer",
  focus: "LLM · RAG · Machine Learning · Deep Learning",
  location: "Noisy-le-Grand (93)",
  email: "ondoessonoxavier@gmail.com",
  phone: "+33 7 45 01 11 70",
  phoneHref: "tel:+33745011170",
  linkedin: "https://www.linkedin.com/in/xavier-ondo",
  github: "https://github.com/ondoxavier",
  cv: "/data/CV_ONDO_ESSONO_Xavier_AI_Engineer.pdf",
  photo: "/assets/profile.webp",
};

const nav = [
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Expérience" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "recommandations", label: "Recommandations" },
];

const metrics = [
  { value: "÷20", label: "Temps de recherche avec le RAG déployé chez Alstom (20 min → 1 min)" },
  { value: "1M+", label: "Produits couverts par l'automatisation Smart Pricing" },
  { value: "2 ans", label: "D'alternance Data Scientist chez Alstom Transport" },
  { value: "Bac+5", label: "Master IA & Data — titre RNCP niveau 7" },
];

const expertise = [
  {
    icon: "spark",
    title: "IA générative & RAG",
    text: "Systèmes RAG multimodaux, Graph RAG, Text-to-SQL, prompt engineering et orchestration de LLM intégrés aux outils métiers.",
  },
  {
    icon: "brain",
    title: "Machine & Deep Learning",
    text: "Modélisation supervisée, XGBoost, Random Forest, vision par ordinateur (UNet) et validation rigoureuse sans fuite de données.",
  },
  {
    icon: "flow",
    title: "Data Engineering & Document AI",
    text: "Pipelines ETL reproductibles, collecte via API, MarkLogic, PostgreSQL, parsing PDF et OCR pour structurer l'information.",
  },
  {
    icon: "rocket",
    title: "Déploiement & MLOps",
    text: "Mise en production dans Dataiku DSS, API FastAPI, Docker, MLflow et Azure, avec évaluation et documentation technique.",
  },
];

const experiences = [
  {
    role: "Data Scientist (Alternance)",
    company: "Alstom Transport",
    location: "Saint-Ouen",
    period: "Sept. 2024 — Sept. 2026",
    summary:
      "Conception et mise en production de solutions IA et data pour les équipes métiers, dans un environnement industriel exigeant.",
    points: [
      {
        lead: "RAG multimodal & Text-to-SQL",
        text: "déployé dans Dataiku DSS (LLM, LangChain/LlamaIndex, base vectorielle, recherche sémantique) pour interroger PostgreSQL et SharePoint. Adopté par 8 utilisateurs, il ramène une tâche de 20 minutes à 1 minute.",
      },
      {
        lead: "Analyse intelligente de données métiers",
        text: "en Python avec LLM : prompt engineering, orchestration des appels modèles et intégration aux workflows Dataiku pour appuyer les décisions.",
      },
      {
        lead: "Smart Pricing",
        text: "préparation des données, intégration de modèles ML et automatisation des recommandations tarifaires sur plus d'1 million de produits.",
      },
      {
        lead: "Pipelines Data Engineering / ETL",
        text: "collecte automatisée via API, traitement et enrichissement MarkLogic, workflows reproductibles réduisant les erreurs manuelles.",
      },
      {
        lead: "Document AI",
        text: "parsing PDF (pdfplumber, OCR), Hugging Face et expérimentation de fine-tuning pour exploiter des documents non structurés.",
      },
    ],
    tags: ["Dataiku DSS", "LLM", "LangChain", "LlamaIndex", "PostgreSQL", "MarkLogic", "Python"],
  },
  {
    role: "Data Scientist Junior (Stage)",
    company: "Université Gustave Eiffel",
    location: "Champs-sur-Marne",
    period: "Juin 2023 — Sept. 2023",
    summary: "Application du Machine Learning à la prédiction des déformations de structures en béton.",
    points: [
      {
        lead: "Dataset de 52 000+ observations",
        text: "issues de sources SQL et CSV : nettoyage, transformation et feature engineering en Python et SQL.",
      },
      {
        lead: "+8 % de précision",
        text: "sur les modèles (régression, XGBoost) grâce à l'optimisation des hyperparamètres et à la sélection de variables.",
      },
      {
        lead: "Restitution",
        text: "tableaux de bord Power BI et Tableau pour visualiser les résultats et soutenir l'analyse.",
      },
    ],
    tags: ["Python", "SQL", "XGBoost", "Power BI", "Tableau"],
  },
];

const projects = [
  {
    name: "RAG multimodal & Text-to-SQL",
    context: "Alstom · Production",
    image: "/assets/projects/rag-multimodal.webp",
    summary:
      "Assistant qui interroge en langage naturel des bases PostgreSQL et des documents SharePoint, déployé dans Dataiku DSS.",
    result: "8 utilisateurs · 20 min → 1 min",
    tech: ["LLM", "LangChain", "LlamaIndex", "Vector DB", "Text-to-SQL"],
  },
  {
    name: "AgriPredict AI",
    context: "AI Clinic aivancity · 2026",
    cover: { label: "Sentinel · NDVI · Météo", tone: "green" },
    summary:
      "Prévision de la date de récolte du blé à la parcelle à partir de données publiques. Responsable du volet climat et télédétection (Sentinel-1/2, NASA POWER, SoilGrids).",
    result: "MAE ≈ 8 jours sur une année jamais vue",
    tech: ["Scikit-learn", "Random Forest", "Conformal prediction", "FastAPI", "React", "Docker"],
  },
  {
    name: "Radiologic Image Project",
    context: "Projet académique · 2025-2026",
    image: "/assets/projects/radiologic.webp",
    summary:
      "Diagnostic vétérinaire assisté par IA : segmentation anatomique UNet, calcul automatique du VHS et rapport généré par LLM.",
    result: "Pipeline complet + interface Streamlit avec export PDF",
    tech: ["PyTorch", "UNet", "Computer Vision", "Llama", "Streamlit"],
  },
  {
    name: "Smart Pricing",
    context: "Alstom · Production",
    image: "/assets/projects/smart-pricing.webp",
    summary:
      "Recommandations tarifaires automatisées à partir de données techniques et historiques, intégrées dans Dataiku.",
    result: "Plus d'1 million de produits couverts",
    tech: ["Python", "Dataiku", "Machine Learning", "MarkLogic"],
  },
  {
    name: "Family Graph RAG",
    context: "Projet personnel · 2025-2026",
    cover: { label: "Neo4j · Cypher · LLM", tone: "violet" },
    summary:
      "Assistant qui explore un arbre généalogique en langage naturel : relations modélisées en graphe (parents, conjoints, fratries, ascendants).",
    result: "Graph RAG sur Neo4j avec front Next.js",
    tech: ["Neo4j", "Cypher", "LangChain", "FastAPI", "Next.js", "Docker"],
  },
  {
    name: "Document AI",
    context: "Alstom · Production",
    image: "/assets/projects/document-ai.webp",
    summary:
      "Transformation de documents PDF non structurés en données exploitables : parsing, OCR et modèles Hugging Face.",
    result: "Données documentaires prêtes pour les équipes métiers",
    tech: ["pdfplumber", "OCR", "Hugging Face", "Fine-tuning"],
  },
];

const skills = [
  {
    title: "IA générative",
    items: ["LLM", "RAG", "Graph RAG", "Agents IA (Microsoft Foundry)", "Prompt engineering", "Fine-tuning", "Hugging Face", "LangChain", "LlamaIndex", "Bases vectorielles", "Recherche sémantique", "Text-to-SQL"],
  },
  {
    title: "Machine & Deep Learning",
    items: ["Scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "UNet", "NLP", "Computer Vision"],
  },
  {
    title: "Développement IA",
    items: ["Python", "SQL", "FastAPI", "API REST", "Streamlit", "React", "Next.js", "PostgreSQL", "Neo4j", "Docker"],
  },
  {
    title: "Plateformes & MLOps",
    items: ["Dataiku DSS", "Azure", "MLflow", "Git", "GitLab", "GitHub", "Évaluation de modèles", "Data quality", "Agile"],
  },
];

const education = [
  {
    degree: "Master Intelligence Artificielle & Data (Bac+5)",
    detail: "Chef de projet en développement de solutions IA · Alternance · RNCP38584, niveau 7",
    school: "aivancity — Paris-Villejuif",
    period: "2024 — 2026",
  },
  {
    degree: "Licence Programme Grande École IA & Data",
    school: "aivancity — Paris-Cachan",
    period: "2022 — 2024",
  },
  {
    degree: "Licence professionnelle Développement Web",
    school: "Institut de la Poste des TIC — Libreville, Gabon",
    period: "2019 — 2021",
  },
];

const certifications = [
  { name: "Dataiku — Core Designer, ML Practitioner, Advanced Designer, Developer, MLOps Practitioner, GenAI Practitioner", status: "Obtenues" },
  { name: "AI Product Engineering: From Concept to Market — UC Berkeley", status: "2025" },
  { name: "Microsoft Azure AI Apps and Agents Developer Associate (AI-103)", status: "En préparation" },
  { name: "Microsoft Azure Data Scientist Associate (DP-100)", status: "En préparation" },
];

const references = [
  {
    institution: "Alstom Services",
    name: "M. CHI Si-An",
    role: "Customer Services & Digitalization Director",
    quote:
      "Xavier occupait alors le poste d'apprenti Data Scientist, et ses compétences ainsi que son professionnalisme ont toujours été exemplaires.",
    context: "Deux ans de collaboration chez StationOne (filiale d'Alstom) puis Alstom : pricing, parsing documentaire, intégration API et RAG.",
    file: "/data/Lettre_de_recommandation_ALSTOM.pdf",
  },
  {
    institution: "Université Gustave Eiffel",
    name: "Jean-Michel Torrenti",
    role: "Chercheur, département Matériaux et Structures · Professeur ENPC",
    quote:
      "Il a su se mettre à l'écoute de notre problématique, la comprendre, traiter les données et interpréter les résultats.",
    context: "Stage de 3 mois en 2023 sur l'application de l'IA à la déformation différée des bétons.",
    file: "/data/lettre_de_recommandation_UGE.pdf",
  },
];

const ogooue = {
  name: "Ogooué AI",
  baseline: "Cabinet IA & Data — Libreville · Paris",
  text: "Co-fondateur d'Ogooué AI, qui accompagne des organisations africaines dans des projets IA utiles et gouvernés : RAG, automatisation, analytics et formation.",
  email: "contact@ogooueia.com",
};

/* ------------------------------------------------------------------ */
/* Icônes                                                               */
/* ------------------------------------------------------------------ */

const paths = {
  download: <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />,
  brain: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="m6.6 7.4 3.2 2.9M17.4 7.4l-3.2 2.9M6.6 16.6l3.2-2.9M17.4 16.6l-3.2-2.9" />
    </>
  ),
  flow: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5M5 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 15l-3-3c1.5-4 5-8.5 13-9-.5 8-5 11.5-9 13z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

function Icon({ name, size = 18 }) {
  if (name === "linkedin") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" />
      </svg>
    );
  }
  if (name === "github") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Composants                                                           */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="container topbar-inner">
        <a className="brand" href="#accueil" aria-label="Retour à l'accueil" onClick={() => setOpen(false)}>
          <span className="brand-mark">XO</span>
          <span className="brand-name">Xavier ONDO ESSONO</span>
        </a>
        <nav id="main-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Navigation principale">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button primary small nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Me contacter
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="availability">
            <span className="pulse" aria-hidden="true" />
            Disponible immédiatement · CDI
          </p>
          <h1>
            {profile.name}
            <span className="hero-role">{profile.role}</span>
          </h1>
          <p className="hero-focus">{profile.focus}</p>
          <p className="hero-intro">
            Data Scientist diplômé d'un Master Bac+5 en IA & Data, avec deux ans d'alternance chez Alstom. Je conçois
            et déploie des solutions d'IA générative, de RAG et de Machine Learning adoptées par les équipes métiers.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={profile.cv} download>
              <Icon name="download" /> Télécharger le CV
            </a>
            <a className="button secondary" href="#contact">
              <Icon name="mail" /> Me contacter
            </a>
            <div className="social">
              <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
            </div>
          </div>
          <ul className="hero-facts">
            <li>
              <Icon name="pin" size={16} /> {profile.location} · Permis B
            </li>
            <li>
              <Icon name="check" size={16} /> Master IA & Data · RNCP niveau 7
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img src={profile.photo} alt="Portrait de Xavier ONDO ESSONO" width="720" height="1124" fetchpriority="high" />
          </div>
          <div className="float-card float-card--top">
            <strong>RAG en production</strong>
            <span>Alstom · 8 utilisateurs</span>
          </div>
          <div className="float-card float-card--bottom">
            <strong>÷20</strong>
            <span>temps de recherche métier</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics" aria-label="Chiffres clés">
      <div className="container metrics-grid">
        {metrics.map((m) => (
          <div className="metric" key={m.value}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionHeading eyebrow="Expertise" title="Du besoin métier à la solution IA en production">
          Je couvre toute la chaîne : données, modèles, intégration et adoption par les utilisateurs.
        </SectionHeading>
        <div className="expertise-grid">
          {expertise.map((e) => (
            <article className="expertise-card" key={e.title}>
              <span className="expertise-icon">
                <Icon name={e.icon} size={22} />
              </span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Expérience" title="Parcours professionnel" />
        <div className="timeline">
          {experiences.map((job) => (
            <article className="job" key={job.company}>
              <div className="job-meta">
                <span className="job-period">{job.period}</span>
                <span>{job.location}</span>
              </div>
              <div className="job-body">
                <h3>{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-summary">{job.summary}</p>
                <ul className="job-points">
                  {job.points.map((p) => (
                    <li key={p.lead}>
                      <strong>{p.lead}</strong> — {p.text}
                    </li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <SectionHeading eyebrow="Projets" title="Réalisations sélectionnées">
          Projets en production chez Alstom, projets académiques et personnels autour de l'IA générative, de la vision
          et du Machine Learning.
        </SectionHeading>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-media">
                {p.image ? (
                  <img src={p.image} alt={`Illustration du projet ${p.name}`} loading="lazy" width="1200" height="750" />
                ) : (
                  <div className={`project-cover project-cover--${p.cover.tone}`} aria-hidden="true">
                    <span>{p.cover.label}</span>
                  </div>
                )}
                <span className="project-context">{p.context}</span>
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <p className="project-result">
                  <Icon name="check" size={16} /> {p.result}
                </p>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="competences" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Compétences" title="Stack technique" />
        <div className="skills-grid">
          {skills.map((g) => (
            <article className="skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <div className="tags">
                {g.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="languages">
          <strong>Langues :</strong> Français (langue maternelle) · Anglais (B2)
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="formation" className="section">
      <div className="container edu-grid">
        <div>
          <SectionHeading eyebrow="Formation" title="Parcours académique" />
          <ol className="edu-list">
            {education.map((e) => (
              <li key={e.degree}>
                <span className="edu-period">{e.period}</span>
                <h3>{e.degree}</h3>
                {e.detail && <p className="edu-detail">{e.detail}</p>}
                <p>{e.school}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionHeading eyebrow="Certifications" title="Certifications" />
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <span>{c.name}</span>
                <em className={c.status === "En préparation" ? "pending" : ""}>{c.status}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function References() {
  return (
    <section id="recommandations" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Recommandations" title="Ils ont travaillé avec moi">
          Deux lettres de recommandation, consultables en PDF.
        </SectionHeading>
        <div className="ref-grid">
          {references.map((r) => (
            <figure className="ref-card" key={r.institution}>
              <span className="ref-institution">{r.institution}</span>
              <blockquote>« {r.quote} »</blockquote>
              <p className="ref-context">{r.context}</p>
              <figcaption>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
                <a className="text-link" href={r.file} target="_blank" rel="noreferrer">
                  <Icon name="file" size={16} /> Lire la lettre
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Venture() {
  return (
    <section className="section venture" aria-labelledby="ogooue-title">
      <div className="container venture-inner">
        <div className="venture-logo" aria-hidden="true">
          <span>Ogooué</span>
          <strong>AI</strong>
        </div>
        <div className="venture-copy">
          <p className="eyebrow">Entrepreneuriat</p>
          <h2 id="ogooue-title">{ogooue.name}</h2>
          <p className="venture-baseline">{ogooue.baseline}</p>
          <p>{ogooue.text}</p>
        </div>
        <a className="button secondary" href={`mailto:${ogooue.email}`}>
          <Icon name="mail" /> {ogooue.email}
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow eyebrow--light">Contact</p>
          <h2>Vous recrutez un AI Engineer ?</h2>
          <p className="contact-lead">
            Je recherche un CDI en AI Engineering / IA générative et je suis disponible immédiatement. Parlons de votre
            projet.
          </p>
          <div className="hero-actions">
            <a className="button light" href={`mailto:${profile.email}?subject=Opportunité AI Engineer`}>
              <Icon name="mail" /> M'écrire
            </a>
            <a className="button outline-light" href={profile.cv} download>
              <Icon name="download" /> Télécharger le CV
            </a>
          </div>
        </div>
        <ul className="contact-list">
          <li>
            <Icon name="mail" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <Icon name="phone" />
            <a href={profile.phoneHref}>{profile.phone}</a>
          </li>
          <li>
            <Icon name="linkedin" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/xavier-ondo
            </a>
          </li>
          <li>
            <Icon name="github" />
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/ondoxavier
            </a>
          </li>
          <li>
            <Icon name="pin" />
            <span>{profile.location} · Île-de-France</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <Expertise />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <References />
        <Venture />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#accueil">
            Retour en haut <Icon name="arrow" size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
