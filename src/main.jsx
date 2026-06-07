import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Xavier ONDO ESSONO",
  title: "Data Scientist | AI Engineer | Data Engineer | Co-fondateur Ogooué AI",
  location: "Noisy-le-Grand, France",
  email: "xavier.ondo@aivancity.education",
  phone: "+33 7 45 01 11 70",
  linkedin: "https://www.linkedin.com/in/xavier-ondo",
  github: "https://github.com/xavierondo",
  cv: "/data/CV_ONDO-ESSONO-Xavier.pdf",
};

const ogooue = {
  name: "Ogooué AI",
  baseline: "Cabinet IA & Data pour organisations exigeantes",
  siteName: "Ogooué Intelligence - Solutions IA pour l'Afrique",
  email: "contact@ogooueia.com",
  locations: "Libreville · Paris · Déploiements distants et sur site",
  bio:
    "Fondée en 2020 au coeur de Libreville avec une présence stratégique à Paris, Ogooué Artificial Intelligence accélère la transformation intelligente de l'Afrique grâce à l'intelligence artificielle responsable.",
  story:
    "Nommée d'après le fleuve Ogooué qui traverse le Gabon, l'entreprise incarne le flux continu de l'innovation et la connexion entre expertise locale et standards internationaux.",
  promise:
    "Audit IA offert de 30 minutes : cadrage ROI, priorités et trajectoire de déploiement.",
};

const metrics = [
  { value: "2020", label: "Co-fondation d'Ogooué AI" },
  { value: "2 ans", label: "Alternance IA chez ALSTOM" },
  { value: "+8%", label: "Précision smart pricing" },
  { value: "12k+", label: "Documents PDF, OCR et parsing" },
];

const experiences = [
  {
    role: "Co-fondateur",
    company: "Ogooué AI",
    period: "Depuis 2020",
    location: "Libreville · Paris",
    points: [
      "Création d'une entreprise de prestation de services en intelligence artificielle au Gabon.",
      "Cadrage d'offres IA autour des RAG chatbots, automatisations, cockpits analytics, audit data et formation.",
      "Positionnement stratégique sur l'IA responsable, la gouvernance, le ROI et l'intégration aux systèmes d'information.",
    ],
  },
  {
    role: "Apprenti Data Scientist",
    company: "ALSTOM Transport",
    period: "Sept. 2024 - Sept. 2026",
    location: "Saint-Ouen",
    points: [
      "Industrialisation d'un moteur de smart pricing avec Dataiku, Python et modèles de machine learning.",
      "Collecte et structuration de données multi-sources via API, MarkLogic et parsing PDF.",
      "Conception d'un RAG pour retrouver rapidement des clauses et informations critiques dans les contrats.",
    ],
  },
  {
    role: "Data Scientist Stagiaire",
    company: "Université Gustave Eiffel",
    period: "Juin 2023 - Sept. 2023",
    location: "Champs-sur-Marne",
    points: [
      "Analyse de 52 725 lignes de données avec Python et SQL pour produire des indicateurs exploitables.",
      "Production de tableaux de bord et visualisations pour faciliter la lecture des résultats.",
    ],
  },
];

const ogooueServices = [
  "RAG chatbots et assistants métiers",
  "Automatisation de tickets et de flux documentaires",
  "Cockpits analytics et dashboards exécutifs",
  "Audit data, gouvernance et qualité des données",
  "Prototype / POC puis déploiement et MCO",
  "Formation et acculturation IA des équipes",
];

const ogooueOffers = [
  {
    title: "Sprint Diagnostic",
    duration: "1 à 2 semaines",
    text: "Audit flash, priorisation des cas d'usage, score d'opportunité, risques et feuille de route.",
  },
  {
    title: "Prototype / POC",
    duration: "2 à 4 semaines",
    text: "Prototype ciblé, tests métier, démonstration des gains et trajectoire de passage à l'échelle.",
  },
  {
    title: "Déploiement & MCO",
    duration: "Mensuel",
    text: "Industrialisation, supervision, intégration SI, maintenance et pilotage de la performance.",
  },
];

const projects = [
  {
    name: "Ogooué AI",
    type: "Entreprise IA & Data",
    image: "/assets/project_images/generated-ogooue-ai.png",
    summary:
      "Cabinet IA & Data conçu pour accompagner entreprises, administrations, PME et institutions dans des systèmes IA utiles, gouvernés et mesurables.",
    impact: "Approche structurée autour du cadrage ROI, de la preuve de valeur, de la gouvernance et du passage à l'échelle.",
    tech: ["RAG", "Automatisation", "Analytics", "MLOps", "Gouvernance IA"],
  },
  {
    name: "Smart Pricing",
    type: "Machine learning industriel",
    image: "/assets/project_images/generated-smart-pricing.png",
    summary:
      "Automatisation d'aide à la décision chez ALSTOM pour recommander des prix plus cohérents à partir de données techniques et historiques dispersées.",
    impact: "Amélioration mesurée d'environ 8% sur la précision des recommandations.",
    tech: ["Python", "Dataiku", "Pandas", "scikit-learn", "MarkLogic"],
  },
  {
    name: "RAG Contrats",
    type: "Recherche documentaire IA",
    image: "/assets/project_images/generated-rag-contracts.png",
    summary:
      "Ingestion, chunking, indexation vectorielle et chaîne de question-réponse pour retrouver des clauses précises dans des contrats PDF.",
    impact: "Réduction du temps de recherche documentaire et meilleure réutilisation de la connaissance contractuelle.",
    tech: ["Python", "LangChain", "FAISS", "LLM", "PDF parsing"],
  },
  {
    name: "YOLOW Vision",
    type: "Computer vision",
    image: "/assets/project_images/generated-yolow-vision.png",
    summary:
      "Détection automatique de zones défectueuses sur composants à partir d'images, avec pipeline d'annotation et restitution web.",
    impact: "Projet complet sur 800 images, du traitement image à l'interface de visualisation.",
    tech: ["PyTorch", "YOLO", "SAM", "OpenCV", "Flask"],
  },
  {
    name: "Analyse radiologique",
    type: "IA appliquée santé",
    image: "/assets/project_images/generated-radiology-ai.png",
    summary:
      "Travail exploratoire autour d'images médicales, de la préparation des données à l'évaluation de modèles de vision.",
    impact: "Mise en pratique des méthodes de classification, segmentation et validation de résultats visuels.",
    tech: ["Python", "Computer Vision", "Deep Learning", "Data Viz"],
  },
];

const skills = [
  {
    title: "IA & Data Science",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "MLOps"],
  },
  {
    title: "Data Engineering",
    items: ["Python", "SQL", "API integration", "OCR", "Selenium", "MarkLogic"],
  },
  {
    title: "Entrepreneuriat IA",
    items: ["Cadrage ROI", "Offres B2B", "Audit IA", "Gouvernance", "Delivery", "Formation"],
  },
  {
    title: "Plateformes & outils",
    items: ["Dataiku", "scikit-learn", "PyTorch", "TensorFlow", "MLflow", "Azure", "GitLab"],
  },
];

const education = [
  {
    degree: "Master - Chef de projet IA",
    school: "Aivancity school of AI & Data for business and society",
    period: "2025 - 2026",
  },
  {
    degree: "Licence - IA & Data",
    school: "Aivancity school of AI & Data for business and society",
    period: "2022 - 2025",
  },
  {
    degree: "Licence professionnelle - Développement",
    school: "IPTIC Gabon",
    period: "2019 - 2020",
  },
];

const references = [
  {
    institution: "ALSTOM Services",
    name: "M. CHI Si-An",
    role: "Customer Services & Digitalization Director",
    context: "Collaboration de 2 ans au sein de StationOne, filiale d'Alstom, puis d'Alstom.",
    quote:
      "Xavier occupait alors le poste d'apprenti Data Scientist, et ses compétences ainsi que son professionnalisme ont toujours été exemplaires.",
    points: [
      "Contribution à des projets de calcul de prix de vente à partir d'historiques d'achat, de vente et d'attributs pièces.",
      "Analyse de commandes client PDF, parsing documentaire et intégration avec API.",
      "Implémentation d'un RAG et intégration rapide auprès des équipes métier et techniques.",
    ],
    file: "/data/Lettre_de_recommandation_ALSTOM.pdf",
  },
  {
    institution: "Université Gustave Eiffel",
    name: "Jean Michel Torrenti",
    role: "Chercheur au département Matériaux et Structures, professeur ENPC",
    context: "Stage de 3 mois en 2023 sur l'application de techniques d'IA à la déformation différée des bétons.",
    quote:
      "Il a su se mettre à l'écoute de notre problématique, la comprendre, traiter les données et interpréter les résultats.",
    points: [
      "Maîtrise des outils IA et traitement de données appliqué à une problématique scientifique.",
      "Capacité à comprendre un sujet éloigné du cursus initial et à interpréter les résultats.",
      "Motivation, intégration au laboratoire et recommandation forte pour la poursuite du parcours.",
    ],
    file: "/data/lettre_de_recommandation_UGE.pdf",
  },
];

function Icon({ children }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Retour à l'accueil">
          <span className="brand-mark">XO</span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          <a href="#ogooue">Ogooué AI</a>
          <a href="#experience">Expérience</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#referents">Référents</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio professionnel</p>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.title}</p>
            <p className="intro">
              Je conçois des pipelines de données, des modèles ML et des outils IA orientés impact métier.
              Mon parcours combine production IA en environnement industriel et entrepreneuriat avec Ogooué AI,
              cabinet IA & Data fondé pour accompagner la transformation intelligente de l'Afrique.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={profile.cv} download>
                <Icon>CV</Icon> Télécharger le CV
              </a>
              <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon>in</Icon> LinkedIn
              </a>
              <a className="button ghost" href={`mailto:${profile.email}`}>
                <Icon>@</Icon> Email
              </a>
            </div>
          </div>
          <aside className="profile-panel" aria-label="Résumé du profil">
            <img src="/assets/profile.jpg" alt="Portrait de Xavier ONDO ESSONO" />
            <div>
              <strong>{profile.title}</strong>
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
              <span>{profile.email}</span>
            </div>
          </aside>
        </section>

        <section className="metrics" aria-label="Chiffres clés">
          {metrics.map((metric) => (
            <article className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section id="ogooue" className="venture-section">
          <div className="venture-hero">
            <div className="venture-logo" aria-label="Logo texte Ogooué AI">
              <span>Ogooué</span>
              <strong>AI</strong>
            </div>
            <div>
              <p className="eyebrow">Co-fondateur</p>
              <h2>{ogooue.name}</h2>
              <p className="venture-baseline">{ogooue.baseline}</p>
              <p>{ogooue.bio}</p>
              <p>{ogooue.story}</p>
              <div className="venture-actions">
                <a className="button primary" href={`mailto:${ogooue.email}?subject=Audit IA Ogooué AI`}>
                  <Icon>@</Icon> Demander un audit
                </a>
                <a className="button secondary" href="#projets">
                  <Icon>IA</Icon> Voir les cas d'usage
                </a>
              </div>
            </div>
          </div>

          <div className="venture-proof">
            <article>
              <span>Preuve</span>
              <strong>Cadrage ROI en 30 minutes</strong>
            </article>
            <article>
              <span>Delivery</span>
              <strong>Trajectoire exploitable sous 7 à 10 jours</strong>
            </article>
            <article>
              <span>Méthode</span>
              <strong>Audit, prototype, déploiement, MCO et formation</strong>
            </article>
          </div>

          <div className="venture-grid">
            <div className="venture-card">
              <h3>Solutions</h3>
              <div className="tags">
                {ogooueServices.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </div>
            <div className="venture-card">
              <h3>Offres</h3>
              <div className="offer-list">
                {ogooueOffers.map((offer) => (
                  <article key={offer.title}>
                    <span>{offer.duration}</span>
                    <strong>{offer.title}</strong>
                    <p>{offer.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="venture-footer">
            <span>{ogooue.siteName}</span>
            <span>{ogooue.locations}</span>
            <a href={`mailto:${ogooue.email}`}>{ogooue.email}</a>
          </div>
        </section>

        <section id="experience" className="section two-columns">
          <div className="section-heading">
            <p className="eyebrow">Parcours</p>
            <h2>Expérience orientée production IA</h2>
            <p>
              Un profil data capable de comprendre le besoin métier, construire les données, entraîner les modèles,
              cadrer le ROI et rendre les résultats exploitables.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projets" className="section">
          <div className="section-heading compact">
            <p className="eyebrow">Portfolio</p>
            <h2>Projets sélectionnés</h2>
            <p>Des cas concrets qui montrent le passage de l'idée au résultat exploitable.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <img src={project.image} alt={`Aperçu du projet ${project.name}`} />
                <div className="project-body">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <p className="impact">{project.impact}</p>
                  <div className="tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="competences" className="section skills-section">
          <div className="section-heading compact">
            <p className="eyebrow">Stack</p>
            <h2>Compétences clés</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-columns education-section">
          <div className="section-heading">
            <p className="eyebrow">Formation</p>
            <h2>Parcours académique</h2>
            <p>
              Formation centrée sur l'IA, la data et la conduite de projets techniques avec une orientation business.
            </p>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="referents" className="section references-section">
          <div className="section-heading compact">
            <p className="eyebrow">Référents</p>
            <h2>Recommandations professionnelles</h2>
            <p>
              Deux recommandations vérifiables issues d'un environnement industriel et d'un laboratoire académique.
              Elles documentent la rigueur, l'adaptabilité et la capacité à produire des résultats exploitables.
            </p>
          </div>
          <div className="references-grid">
            {references.map((reference) => (
              <article className="reference-card" key={reference.institution}>
                <div className="reference-top">
                  <span>{reference.institution}</span>
                  <a className="button secondary" href={reference.file} target="_blank" rel="noreferrer">
                    <Icon>PDF</Icon> Voir la lettre
                  </a>
                </div>
                <h3>{reference.name}</h3>
                <p className="reference-role">{reference.role}</p>
                <p className="reference-context">{reference.context}</p>
                <blockquote>{reference.quote}</blockquote>
                <ul>
                  {reference.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Disponible pour échanger sur un poste Data Science, AI Engineering, Data Engineering ou un projet IA avec Ogooué AI.</h2>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Icon>@</Icon> Email Xavier
            </a>
            <a className="button secondary" href={`mailto:${ogooue.email}`}>
              <Icon>AI</Icon> Contact Ogooué AI
            </a>
            <a className="button ghost" href={profile.cv} download>
              <Icon>CV</Icon> Télécharger le CV
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{ogooue.name} · {profile.location}</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
