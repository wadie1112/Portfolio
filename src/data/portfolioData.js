export const profile = {
  name: "Wadie Gaddour",
  role: {
    en: "Data Analyst & BI Engineer",
    fr: "Data Analyst & Ingénieur BI",
  },
  headline: {
    en: "Power BI · SQL · Python · Data Storytelling",
    fr: "Power BI · SQL · Python · Data Storytelling",
  },
  statement: {
    en: "Computer engineer specialised in Business Intelligence and data analysis, turning business needs into reliable data models, automated workflows and decision dashboards.",
    fr: "Ingénieur en informatique spécialisé en Business Intelligence et analyse de données, je transforme les besoins métier en modèles de données fiables, workflows automatisés et tableaux de bord décisionnels.",
  },
  email: "gaddourwadie@gmail.com",
  phone: "+216 27 074 033",
  location: { en: "Monastir, Tunisia", fr: "Monastir, Tunisie" },
  github: "https://github.com/wadie1112",
  linkedin: "https://www.linkedin.com/in/wadie-gaddour/",
};

export const experience = [
  {
    id: "mobelite-bi-engineer",
    entity: "Experience",
    company: "Mobelite",
    role: { en: "BI Engineer", fr: "Ingénieur BI" },
    period: { en: "04/2025 — Present", fr: "04/2025 — Aujourd’hui" },
    location: { en: "Monastir, Tunisia", fr: "Monastir, Tunisie" },
    type: "Professional Experience",
    domain: "Business Intelligence",
    summary: {
      en: "Design and deliver cross-functional Power BI dashboards and automated Power Platform solutions, working directly with the CEO and CTO.",
      fr: "Conception et livraison de tableaux de bord Power BI transverses et de solutions Power Platform automatisées, en collaboration directe avec le CEO et le CTO.",
    },
    responsibilities: {
      en: [
        "Design and deliver cross-functional Power BI dashboards covering HR, recruitment, operations, invoicing, workload and business KPIs.",
        "Work directly with the CEO and CTO to define key indicators and data governance, translating business needs into technical solutions.",
        "Build and automate data extraction and refresh flows with Power Automate, ensuring reliability, security and report availability.",
        "Integrate data from the BoondManager REST API, Excel/CSV files on SharePoint and internal sources, modelled in star schemas.",
        "Develop advanced DAX measures (dynamic KPIs, time intelligence, multi-scope indicators) and clean data with Power Query, SQL and Python.",
        "Work in Agile Scrum: sprints, follow-ups, prioritisation of business needs and continuous improvement.",
      ],
      fr: [
        "Concevoir et livrer des tableaux de bord Power BI transverses couvrant RH, recrutement, opérations, facturation, charge de travail et KPI métier.",
        "Travailler directement avec le CEO et le CTO pour définir les indicateurs clés et la gouvernance des données, en traduisant les besoins métier en solutions techniques.",
        "Construire et automatiser les flux d’extraction et d’actualisation des données avec Power Automate, en garantissant fiabilité, sécurité et disponibilité des rapports.",
        "Intégrer les données de l’API REST BoondManager, des fichiers Excel/CSV sur SharePoint et des sources internes, modélisées en schémas en étoile.",
        "Développer des mesures DAX avancées (KPI dynamiques, time intelligence, indicateurs multi-périmètres) et préparer les données avec Power Query, SQL et Python.",
        "Travailler en Agile Scrum : sprints, suivis, priorisation des besoins métier et amélioration continue.",
      ],
    },
    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "Power Automate",
      "SharePoint",
      "REST API",
      "SQL",
      "Python",
      "Agile Scrum",
    ],
  },
];

export const internships = [
  {
    id: "mobelite-internship",
    entity: "Internships",
    company: "Mobelite",
    role: { en: "Data Analyst Intern", fr: "Stagiaire Data Analyst" },
    period: { en: "06/2023 — 08/2023", fr: "06/2023 — 08/2023" },
    location: { en: "Monastir, Tunisia", fr: "Monastir, Tunisie" },
    year: "2023",
    type: "Internship",
    domain: "HR",
    context: {
      en: "Human resources analytics",
      fr: "Analytique des ressources humaines",
    },
    contribution: {
      en: "Analysed company HR data and built Power BI reports to extract strategic insights.",
      fr: "Analyse des données RH de l’entreprise et création de rapports Power BI pour en extraire des informations stratégiques.",
    },
    technologies: ["Power BI", "Data Modeling"],
  },
  {
    id: "kpmg-internship",
    entity: "Internships",
    company: "KPMG",
    role: { en: "Data Analyst Intern", fr: "Stagiaire Data Analyst" },
    period: { en: "09/2023 — 10/2023", fr: "09/2023 — 10/2023" },
    location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
    year: "2023",
    type: "Internship",
    domain: "Data Analytics",
    context: {
      en: "Reporting on unstructured data",
      fr: "Reporting sur données non structurées",
    },
    contribution: {
      en: "Built a dynamic SQL query engine generating BI reports from unstructured data.",
      fr: "Développement d’un moteur de requêtes SQL dynamique générant des rapports BI à partir de données non structurées.",
    },
    technologies: ["SQL", "MongoDB", "PySpark", "Flask", "Python"],
  },
  {
    id: "sotacib-internship",
    entity: "Internships",
    company: "Sotacib",
    role: { en: "Data Analyst Intern", fr: "Stagiaire Data Analyst" },
    period: { en: "04/2024 — 12/2024", fr: "04/2024 — 12/2024" },
    location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
    year: "2024",
    type: "Internship",
    domain: "Industry",
    context: {
      en: "Industrial data and SAP reporting",
      fr: "Données industrielles et reporting SAP",
    },
    contribution: {
      en: "Analysed industrial data with Python scripts, designed Power BI reports for business KPIs and contributed to existing SAP reporting.",
      fr: "Analyse de données industrielles avec des scripts Python, conception de rapports Power BI pour les KPI métier et contribution au reporting SAP existant.",
    },
    technologies: ["Python", "Power BI", "SAP"],
  },
];

export const projects = [
  {
    id: "profitability-dashboards",
    entity: "Projects",
    name: {
      en: "Profitability & Decision Dashboards",
      fr: "Tableaux de bord rentabilité & décision",
    },
    type: { en: "BI project", fr: "Projet BI" },
    domain: "Business Intelligence",
    year: "2025",
    description: {
      en: "Power BI dashboards built on a dedicated data model with DAX measures to track profitability, activity and business KPIs.",
      fr: "Tableaux de bord Power BI reposant sur un modèle de données dédié avec des mesures DAX pour suivre la rentabilité, l’activité et les KPI métier.",
    },
    highlights: {
      en: [
        "Dedicated data model designed for decision reporting.",
        "DAX measures for profitability, activity and business KPIs.",
      ],
      fr: [
        "Modèle de données dédié conçu pour le reporting décisionnel.",
        "Mesures DAX pour la rentabilité, l’activité et les KPI métier.",
      ],
    },
    technologies: ["Power BI", "DAX", "Data Modeling"],
    featured: true,
  },
  {
    id: "ecommerce-data-analysis",
    entity: "Projects",
    name: {
      en: "E-commerce Data Analysis",
      fr: "Analyse de données e-commerce",
    },
    type: { en: "Data project", fr: "Projet data" },
    domain: "Data Analytics",
    year: "2024",
    description: {
      en: "End-to-end analysis combining a Talend ETL pipeline, exploratory analysis in Python and an interactive Power BI dashboard.",
      fr: "Analyse de bout en bout combinant un pipeline ETL Talend, une analyse exploratoire en Python et un tableau de bord Power BI interactif.",
    },
    highlights: {
      en: [
        "Talend ETL pipeline for data preparation.",
        "Exploratory analysis in Python.",
        "Interactive Power BI dashboard.",
      ],
      fr: [
        "Pipeline ETL Talend pour la préparation des données.",
        "Analyse exploratoire en Python.",
        "Tableau de bord Power BI interactif.",
      ],
    },
    technologies: ["Talend", "ETL", "Python", "Power BI"],
    featured: false,
  },
];

export const skillGroups = [
  {
    id: "power-platform",
    category: { en: "Power Platform", fr: "Power Platform" },
    detail: {
      en: "Data modelling, DAX, Power Query, automated and scheduled flows, SharePoint lists, libraries and permissions.",
      fr: "Modélisation de données, DAX, Power Query, flux automatisés et planifiés, listes, bibliothèques et permissions SharePoint.",
    },
    skills: ["Power BI", "DAX", "Power Query", "Power Automate", "SharePoint Online"],
  },
  {
    id: "data-integration",
    category: { en: "Data & Integration", fr: "Données & intégration" },
    detail: {
      en: "REST APIs, Excel/CSV and SharePoint sources, star schema modelling and data quality control.",
      fr: "API REST, sources Excel/CSV et SharePoint, modélisation en schéma en étoile et contrôle qualité des données.",
    },
    skills: ["REST API", "Star Schema", "ETL", "Talend", "Data Quality"],
  },
  {
    id: "databases",
    category: { en: "Databases & SQL", fr: "Bases de données & SQL" },
    detail: {
      en: "Advanced SQL across relational engines, with MongoDB fundamentals.",
      fr: "SQL avancé sur moteurs relationnels, avec les fondamentaux MongoDB.",
    },
    skills: ["Advanced SQL", "SQL Server", "MySQL", "Oracle", "MongoDB"],
  },
  {
    id: "programming",
    category: { en: "Programming", fr: "Programmation" },
    detail: {
      en: "Python for data preparation, analysis and processing.",
      fr: "Python pour la préparation, l’analyse et le traitement des données.",
    },
    skills: ["Python", "Pandas", "NumPy", "PySpark", "Flask"],
  },
  {
    id: "tools",
    category: { en: "Tools & Methods", fr: "Outils & méthodes" },
    detail: {
      en: "Agile delivery, collaboration and version control tooling.",
      fr: "Livraison agile, collaboration et gestion de versions.",
    },
    skills: ["Agile Scrum", "Jira", "Confluence", "GitHub / GitLab", "Figma", "Tableau"],
  },
  {
    id: "languages",
    category: { en: "Languages", fr: "Langues" },
    detail: {
      en: "English (professional working proficiency), French (fluent), Arabic (native).",
      fr: "Anglais (niveau professionnel), français (courant), arabe (langue maternelle).",
    },
    skills: ["English", "Français", "العربية"],
  },
];

export const roadmap = [
  {
    id: "proficient",
    status: { en: "Proficient", fr: "Maîtrisé" },
    title: {
      en: "Core professional practice",
      fr: "Pratique professionnelle principale",
    },
    description: {
      en: "Technologies used daily in production BI and Power Platform work.",
      fr: "Technologies utilisées quotidiennement en production sur des projets BI et Power Platform.",
    },
    items: ["Power BI", "DAX", "Power Query", "Power Automate", "SharePoint", "SQL", "Python"],
  },
  {
    id: "working-knowledge",
    status: { en: "Working knowledge", fr: "Bonne connaissance" },
    title: { en: "Applied in projects", fr: "Appliqué en projet" },
    description: {
      en: "Technologies applied during internships, projects or supporting tasks.",
      fr: "Technologies appliquées en stage, en projet ou en support.",
    },
    items: ["Talend", "PySpark", "MongoDB", "Flask", "SAP", "Tableau", "REST API"],
  },
  {
    id: "learning",
    status: { en: "Currently learning", fr: "En cours d’apprentissage" },
    title: { en: "Modern analytics stack", fr: "Stack analytique moderne" },
    description: {
      en: "Explored outside production work and never presented as professional expertise.",
      fr: "Exploré hors production et jamais présenté comme une expertise professionnelle.",
    },
    items: [
      "Microsoft Fabric",
      "dbt",
      "Snowflake",
      "Databricks",
      "BigQuery",
      "Airflow",
      "CI/CD for analytics",
    ],
  },
];

export const certifications = {
  earned: [
    {
      id: "prompt-engineering",
      name: "Prompt Engineering for Everyone",
      status: { en: "Earned", fr: "Obtenue" },
    },
  ],
  inProgress: [
    {
      id: "power-bi-data-analyst-pl-300",
      name: "Microsoft Power BI Data Analyst (PL-300)",
      status: { en: "In progress", fr: "En cours" },
    },
    {
      id: "oracle-sql",
      name: "Oracle SQL",
      status: { en: "In progress", fr: "En cours" },
    },
    {
      id: "power-platform-functional-consultant-pl-200",
      name: "Microsoft Power Platform Functional Consultant (PL-200)",
      status: { en: "In progress", fr: "En cours" },
    },
    {
      id: "databricks-data-analyst",
      name: "Databricks Data Analyst",
      status: { en: "In progress", fr: "En cours" },
    },
  ],
};

export const education = {
  credential: {
    en: "National Engineering Degree in Computer Science",
    fr: "Diplôme national d’ingénieur en informatique",
  },
  school: "ESPRIT",
  graduation: "2025",
  specialization: {
    en: "ERP & Business Intelligence",
    fr: "ERP & Business Intelligence",
  },
  focus: ["Business Intelligence", "ERP", "Data", "Analytics", "Software Engineering"],
};

export const allQueryableRecords = [
  ...experience.map((item) => ({ ...item, label: item.role })),
  ...internships.map((item) => ({ ...item, label: item.role })),
  ...projects.map((item) => ({ ...item, label: item.name, company: null })),
];
