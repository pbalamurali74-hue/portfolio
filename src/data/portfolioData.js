export const personalInfo = {
  name: "Purushotham Balamurali",
  githubHandle: "pbalamurali74-hue",
  githubUrl: "https://github.com/pbalamurali74-hue",
  linkedinUrl: "https://linkedin.com/in/purushotham-balamurali", // Placeholder updateable by user
  email: "purushothambalamurali74@gmail.com",
  resumeUrl: "#resume-placeholder", // Placeholder updateable by user
  role: "AI/ML Developer • Data Science • Python",
  eyebrow: "AI/ML • DATA SCIENCE • PYTHON",
  heroHeading: "BUILDING INTELLIGENT SYSTEMS.",
  heroSubheading: "ONE PROJECT AT A TIME.",
  heroDescription:
    "I build practical AI, machine learning and software projects that turn real-world data into reliable, actionable solutions.",
  aboutHeading: "CURIOUS BY NATURE. BUILDER BY CHOICE.",
  aboutParagraphs: [
    "I am an AIML student driven by a deep fascination with machine learning, data science, and intelligent software engineering. My focus centers on transforming complex datasets into predictive models and real-world tools that deliver genuine utility.",
    "From modeling turbofan engine degradation using NASA time-series datasets to deploying FastAPI REST services and interactive Streamlit analytics dashboards, I emphasize practical implementation, clean modular code, and scalable architecture.",
    "I am continuously expanding my skill set in machine learning, Python development, predictive analytics, and full-stack software integration—actively seeking opportunities to solve challenging engineering problems."
  ],
};

export const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "SQL", "HTML5/CSS3", "Java"]
  },
  {
    category: "AI / ML & Data Science",
    skills: ["Machine Learning", "Data Science", "Predictive Modeling", "Time-Series Degradation", "XGBoost", "Scikit-Learn", "Pandas & NumPy", "NLP & Chatbots"]
  },
  {
    category: "Development & Frameworks",
    skills: ["FastAPI", "React", "Node.js", "REST APIs", "Streamlit", "SQLAlchemy", "Git & GitHub"]
  },
  {
    category: "Tools & Analytics",
    skills: ["Power BI", "Jupyter Notebook", "VS Code", "Google Colab", "Docker", "Pytest", "Vercel"]
  }
];

export const featuredProjects = [
  {
    id: "turbofan-rul",
    title: "NASA Turbofan Engine RUL Prediction",
    tagline: "Predictive maintenance modeling using time-series sensor data.",
    problem: "Engine failures in aerospace systems cause costly unscheduled downtime. Predicting Remaining Useful Life (RUL) before total degradation is critical.",
    built: "Engineered multivariate time-series sensor preprocessing, degradation trend analysis, and predictive regression models to forecast exact RUL per engine cycle.",
    stack: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    githubUrl: "https://github.com/pbalamurali74-hue/TurboFan-Degradation-ML-Project",
    liveUrl: null,
    isFeatured: true,
    isPlaceholder: false,
    badge: "AI / ML Engine",
    architecture: [
      "NASA C-MAPSS Sensor Telemetry Raw Data",
      "Multivariate Normalization & Degradation Labeling",
      "Feature Correlation & Sensor Selection",
      "Scikit-Learn RUL Regression Modeling",
      "Performance Evaluation & Error Visualization"
    ]
  },
  {
    id: "fastapi-todo",
    title: "Secure FastAPI REST Service",
    tagline: "Production-grade authenticated backend with dual JWT tokens.",
    problem: "Applications require secure, rate-limited user authentication and isolated data storage with clean API contracts.",
    built: "Built a fully-tested FastAPI REST service featuring bcrypt password hashing, 15-min access tokens + 7-day database refresh tokens, Pydantic validation, slowapi rate limiting, and cascade database deletion.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "JWT / Bcrypt", "slowapi"],
    githubUrl: "https://github.com/pbalamurali74-hue/ToDo-LIST-API",
    liveUrl: "https://to-do-list-api-tau.vercel.app",
    isFeatured: true,
    isPlaceholder: false,
    badge: "Backend / Security",
    architecture: [
      "FastAPI Endpoint Layer + Pydantic Schema Validation",
      "Dual JWT Token Authentication & Database Refresh Token Session Storage",
      "SQLAlchemy ORM + SQLite Data Persistence",
      "slowapi Middleware (Auth 15 req/15min, Global 100 req/15min)",
      "Vercel Serverless Deployment"
    ]
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction Dashboard",
    tagline: "End-to-end ML churn classification with interactive Streamlit GUI & Power BI.",
    problem: "Subscription services require early identification of at-risk customers to prevent revenue churn.",
    built: "Trained and evaluated Logistic Regression, Random Forest, and XGBoost models on customer behavioral features. Deployed an interactive Streamlit app for real-time risk scoring alongside a Power BI executive visual dashboard.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "Streamlit", "Power BI", "Pandas"],
    githubUrl: "https://github.com/pbalamurali74-hue/FUTURE_ML_02",
    liveUrl: "https://futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app/",
    isFeatured: true,
    isPlaceholder: false,
    badge: "ML & Interactive App",
    architecture: [
      "Customer Behavioral & Financial Feature Engineering",
      "Model Comparison (Logistic Regression vs. Random Forest vs. XGBoost)",
      "Streamlit Real-Time Prediction GUI",
      "Power BI Customer Churn Analytics Dashboard"
    ]
  },
  {
    id: "matrix-operations",
    title: "Interactive Matrix Operations Tool",
    tagline: "Dual-interface numerical computing engine with Tkinter GUI & CLI.",
    problem: "Linear algebra computations demand reliable dimension validation, formatted visual outputs, and versatile execution environments.",
    built: "Developed a modular matrix calculator with dynamic dimension auto-sync for addition/multiplication/inversion, formatted ASCII matrix rendering, preset loaders (Identity/Random/Clear), and unit test coverage.",
    stack: ["Python", "NumPy", "Tkinter GUI", "Pytest", "CLI Engine"],
    githubUrl: "https://github.com/pbalamurali74-hue/MatrixOperations",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Software Engineering",
    architecture: [
      "NumPy Mathematical Computation Core",
      "Dynamic Dimension Binding UI Engine (Tkinter)",
      "CLI Command Runner (`--cli` flag)",
      "Pytest Automated Test Suite"
    ]
  },
  {
    id: "sales-forecasting",
    title: "Superstore Sales Forecasting & Analytics",
    tagline: "Time-series revenue prediction & Power BI visual intelligence.",
    problem: "Retail organizations require accurate sales trend predictions for supply chain management.",
    built: "Performed exploratory data analysis and forecasting modeling on multi-year retail transactions, paired with a custom interactive Power BI sales performance dashboard.",
    stack: ["Python", "Jupyter Notebook", "Pandas", "Power BI", "Time-Series"],
    githubUrl: "https://github.com/pbalamurali74-hue/FUTURE_ML_01",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Data Science",
    architecture: [
      "Retail Transaction Data Cleaning & Aggregation",
      "Time-Series Sales Forecasting Model",
      "Power BI Interactive Sales Dashboard"
    ]
  },
  {
    id: "intent-chatbot",
    title: "Intent-Based AI Conversational Bot",
    tagline: "Custom NLP intent classification engine & interactive bot api.",
    problem: "Automated customer support requires rapid, context-aware intent resolution.",
    built: "Developed an intent classification model using JSON structured intent definitions, custom text preprocessing, and a modular Python chatbot execution engine.",
    stack: ["Python", "NLP", "JSON Intents", "Scikit-Learn"],
    githubUrl: "https://github.com/pbalamurali74-hue/FUTURE_ML_03",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "NLP & AI",
    architecture: [
      "JSON Intent & Entity Taxonomy",
      "Text Vectorization & Pattern Matching",
      "Interactive Chatbot Dispatcher"
    ]
  },
  {
    id: "jpmc-forage",
    title: "JPMorgan Chase Software Engineering",
    tagline: "Financial data service engineering via JPMC Forage Program.",
    problem: "High-frequency financial data feeds require performant Java services and precise data pipelines.",
    built: "Completed real-world software engineering modules under the JPMorgan Chase & Co. Advanced Software Engineering Forage Virtual Program.",
    stack: ["Java", "Spring Boot", "Maven", "REST APIs"],
    githubUrl: "https://github.com/pbalamurali74-hue/forage-midas",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Virtual Experience",
    architecture: [
      "Java Backend Microservice Architecture",
      "Financial Telemetry Data Processing"
    ]
  },
  {
    id: "civic-ai",
    title: "CivicAI — Problem Detection Platform",
    tagline: "AI-driven civic issue classification & community report dispatcher.",
    problem: "Municipal authorities face delays in triaging citizen reports due to unorganized complaint streams.",
    built: "[PLACEHOLDER / REPO COMING SOON] AI platform concept designed for automatic civic issue triage and spatial anomaly detection.",
    stack: ["Python", "AI / ML", "Computer Vision", "React"],
    githubUrl: "https://github.com/pbalamurali74-hue",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: true,
    badge: "Upcoming Project",
    architecture: ["Spatial Data Triage Engine", "Civic Dashboard UI"]
  },
  {
    id: "quickmark",
    title: "Quickmark — Intelligent Attendance System",
    tagline: "Automated biometric / facial verification attendance system.",
    problem: "Manual attendance logging is prone to proxy entries and administrative latency.",
    built: "[PLACEHOLDER / REPO COMING SOON] Automated verification system designed for rapid classroom/event attendance tracking.",
    stack: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    githubUrl: "https://github.com/pbalamurali74-hue",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: true,
    badge: "Upcoming Project",
    architecture: ["Video Frame Extractor", "Biometric Matching Engine"]
  },
  {
    id: "telegram-bot",
    title: "Telegram Automated Notification System",
    tagline: "Event-driven server monitoring & webhook alert bot.",
    problem: "Developers require instantaneous alerts when background cron jobs or servers experience status changes.",
    built: "[PLACEHOLDER / REPO COMING SOON] Python automated notification bot with webhook endpoints.",
    stack: ["Python", "Telegram Bot API", "Asyncio"],
    githubUrl: "https://github.com/pbalamurali74-hue",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: true,
    badge: "Upcoming Project",
    architecture: ["Webhook Listener", "Telegram Dispatcher"]
  }
];

export const experienceData = [
  {
    company: "Future Interns",
    role: "Machine Learning Intern",
    period: "Verified Experience",
    isPlaceholder: false,
    details: [
      "Developed end-to-end Machine Learning systems including Customer Churn Prediction (XGBoost + Streamlit + Power BI).",
      "Executed Retail Sales Forecasting analysis and interactive Power BI executive reporting dashboards.",
      "Built an Intent-based NLP chatbot application using structured JSON taxonomy and custom pattern matching."
    ]
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Virtual Experience",
    period: "Forage Program",
    isPlaceholder: false,
    details: [
      "Participated in the JPMC Advanced Software Engineering Virtual Experience program.",
      "Worked with Java microservices, Maven builds, and financial data feed components."
    ]
  },
  {
    company: "[INTERNSHIP COMPANY PLACEHOLDER]",
    role: "[ROLE PLACEHOLDER]",
    period: "[DATE PLACEHOLDER]",
    isPlaceholder: true,
    details: [
      "Reserved for upcoming industry internships and fresh engineering roles.",
      "Ready to be updated upon official appointment."
    ]
  }
];

export const certificationsData = [
  {
    title: "Google AI Essentials Specialization",
    issuer: "Google & Coursera",
    date: "Verified Certification",
    credentialUrl: null,
    isVerified: true
  },
  {
    title: "Deloitte Data Analytics Virtual Internship",
    issuer: "Deloitte / Forage",
    date: "Virtual Internship Certificate",
    credentialUrl: null,
    isVerified: true
  },
  {
    title: "Machine Learning Internship Certificate",
    issuer: "Future Interns",
    date: "Internship Certificate",
    credentialUrl: null,
    isVerified: true
  },
  {
    title: "NPTEL Certification",
    issuer: "NPTEL / IIT",
    date: "Verified Course",
    credentialUrl: null,
    isVerified: true
  },
  {
    title: "Scaler Certification",
    issuer: "Scaler Academy",
    date: "Verified Skills",
    credentialUrl: null,
    isVerified: true
  }
];
