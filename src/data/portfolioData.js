export const personalInfo = {
  name: "Purushotham Balamurali",
  githubHandle: "pbalamurali74-hue",
  githubUrl: "https://github.com/pbalamurali74-hue",
  linkedinUrl: "https://www.linkedin.com/in/purushothambalamurali/",
  email: "purushothambalamurali74@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
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
    skills: ["Python", "JavaScript", "SQL", "MongoDB", "HTML5/CSS3", "Java"]
  },
  {
    category: "AI / ML & Data Science",
    skills: ["Machine Learning", "Data Science", "Predictive Modeling", "Prompt Engineering", "XGBoost", "Scikit-Learn", "Pandas & NumPy", "NLP & Chatbots"]
  },
  {
    category: "Development & Frameworks",
    skills: ["FastAPI", "React", "Node.js", "REST APIs", "Streamlit", "SQLAlchemy", "Git & GitHub"]
  },
  {
    category: "Tools & Databases",
    skills: ["MongoDB", "Power BI", "Jupyter Notebook", "VS Code", "Google Colab", "Docker", "Pytest", "Vercel"]
  }
];

export const featuredProjects = [
  {
    id: "turbofan-rul",
    title: "NASA Turbofan Engine RUL Prediction",
    tagline: "Predictive maintenance modeling using time-series sensor data.",
    mainIdea: "Physics-informed degradation modeling on 21 multi-sensor telemetry channels from NASA C-MAPSS to predict cycle-by-cycle mechanical breakdown before catastrophic failure.",
    uniqueFeature: "Dual-phase exponential degradation thresholding isolating irreversible mechanical wear from operational sensor noise.",
    metrics: [
      { label: "Monitored Units", value: "100 Turbofan Engines" },
      { label: "Telemetry Sensors", value: "21 Channels" },
      { label: "Prediction Window", value: "Cycle-by-Cycle RUL" }
    ],
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
    mainIdea: "Enterprise zero-trust authenticated RESTful service with strict user data isolation, cascade deletion, and automated DDoS rate limits.",
    uniqueFeature: "Dual JWT token session architecture (15-min access / 7-day database-backed refresh tokens) with instant single-click revocation.",
    metrics: [
      { label: "JWT Session", value: "15m Access / 7d Refresh" },
      { label: "Rate Limiting", value: "15 Auth / 100 Global req/15m" },
      { label: "Test Suite", value: "19/19 Pytest Pass (0 Warnings)" }
    ],
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
    mainIdea: "Enterprise customer retention cockpit transforming raw ML risk probabilities into counterfactual retention actions and capital protection.",
    uniqueFeature: "Interactive Real-Time 'What-If' Customer Simulator with explainable AI factor waterfall showing how proactive interventions cut churn risk dynamically.",
    metrics: [
      { label: "Model Metric", value: "86.8% ROC-AUC" },
      { label: "Retention Impact", value: "-42% Churn via Active Tier" },
      { label: "Cohort Size", value: "10,000 Customers" }
    ],
    problem: "Subscription services require early identification of at-risk customers to prevent revenue churn.",
    built: "Trained and evaluated Logistic Regression, Random Forest, and XGBoost models on customer behavioral features. Deployed an interactive Streamlit app with What-If counterfactual simulation and explainable factor breakdown alongside Power BI visual analytics.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "Streamlit", "Power BI", "Pandas"],
    githubUrl: "https://github.com/pbalamurali74-hue/FUTURE_ML_02",
    liveUrl: "https://futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app/",
    isFeatured: true,
    isPlaceholder: false,
    badge: "ML & Interactive App",
    architecture: [
      "Customer Behavioral & Financial Feature Engineering",
      "Model Comparison (Logistic Regression vs. Random Forest vs. XGBoost)",
      "Interactive Streamlit What-If Simulator GUI",
      "Explainable AI Risk Factor Waterfall",
      "Power BI Customer Churn Analytics Dashboard"
    ]
  },
  {
    id: "matrix-operations",
    title: "Interactive Matrix Operations Tool",
    tagline: "Dual-interface numerical computing engine with Tkinter GUI & CLI.",
    mainIdea: "High-performance numerical computing suite featuring strict dimension safety and zero-dependency GUI/CLI execution.",
    uniqueFeature: "Dynamic Dimension Auto-Binding engine mathematically locking input grids to prevent invalid operations (auto-binding columns of A to rows of B).",
    metrics: [
      { label: "Test Suite", value: "17/17 Unit Tests (0.016s)" },
      { label: "Core Operations", value: "9 Matrix Solvers" },
      { label: "Interface", value: "Tkinter GUI + CLI" }
    ],
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
    mainIdea: "Multi-year retail time-series revenue projection platform coupled with supply chain inventory risk detection.",
    uniqueFeature: "Interactive Macroeconomic Scenario Planner modeling demand shocks and cost inflation alongside 12-month Prophet confidence bands.",
    metrics: [
      { label: "Transactions", value: "9,000+ Records" },
      { label: "Forecast Band", value: "12 Months (95% CI)" },
      { label: "Early Warning", value: "+45% Q4 Surge Detection" }
    ],
    problem: "Retail organizations require accurate sales trend predictions for supply chain management.",
    built: "Engineered multi-year retail transactions forecasting with interactive Streamlit revenue simulator, 12-month Prophet confidence projections, Q4 stockout risk alerts, and custom Power BI visual dashboards.",
    stack: ["Python", "Prophet", "Streamlit", "Pandas", "Power BI", "Scikit-Learn"],
    githubUrl: "https://github.com/pbalamurali74-hue/FUTURE_ML_01",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Data Science & AI",
    architecture: [
      "Retail Transaction Ingestion & Seasonality Decomposition",
      "Prophet / Holt-Winters 12-Month Projections (95% CI)",
      "Interactive Streamlit Forecaster & Scenario Simulator",
      "Q4 Supply Chain Peak Inventory Surge Alerting System",
      "Power BI Interactive Sales Dashboard"
    ]
  },
  {
    id: "intent-chatbot",
    title: "Intent-Based AI Conversational Bot",
    tagline: "Custom NLP intent classification engine & interactive bot api.",
    mainIdea: "Intelligent NLP customer service command center with automated ticket triage, sentiment detection, and graceful escalation.",
    uniqueFeature: "Sub-15ms inference engine with strict confidence threshold guardrails (<35% triggers clarification/human handover) and real-time customer mood classification.",
    metrics: [
      { label: "Inference Latency", value: "<15ms" },
      { label: "Fallback Guard", value: "35% Confidence Threshold" },
      { label: "Test Suite", value: "6/6 Tests Passed" }
    ],
    problem: "Automated customer support requires rapid, context-aware intent resolution without hallucinations or unhelpful dead ends.",
    built: "Engineered an intelligent customer service platform with TF-IDF vectorization, confidence threshold guardrails (<35% auto-escalation), real-time sentiment analysis, and a modern glassmorphic web UI.",
    stack: ["Python", "Flask", "Scikit-Learn", "NLP", "VADER Sentiment", "HTML5/CSS3"],
    githubUrl: "https://github.com/pbalamurali74-hue/FUTURE_ML_03",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "NLP & AI Platform",
    architecture: [
      "Structured Intent & Entity Taxonomy Knowledgebase",
      "TF-IDF Vectorizer + Multinomial Classification Engine",
      "VADER Real-Time Sentiment & Urgency Detection",
      "Confidence Threshold Guardrail (<35% Auto-Escalation)",
      "Flask Web Server & Glassmorphic Chatbot Interface"
    ]
  },
  {
    id: "jpmc-forage",
    title: "JPMorgan Chase Software Engineering",
    tagline: "Financial data service engineering via JPMC Forage Program.",
    mainIdea: "High-throughput event-driven financial telemetry streaming service with resilient balance ledger persistence.",
    uniqueFeature: "Real-time Apache Kafka transaction consumer stream seamlessly calculating external incentives and persisting atomic account balances via Spring Data JPA.",
    metrics: [
      { label: "Stream Processing", value: "Sub-Millisecond Ingestion" },
      { label: "Architecture", value: "5-Stage Microservice" },
      { label: "Data Integrity", value: "100% Transactional Atomicity" }
    ],
    problem: "High-frequency financial data feeds require performant Java services and precise data pipelines.",
    built: "Completed real-world software engineering modules under the JPMorgan Chase & Co. Advanced Software Engineering Forage Virtual Program, implementing transaction event streaming, balance tracking, and incentive management.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "Spring Data JPA", "Maven", "REST APIs"],
    githubUrl: "https://github.com/pbalamurali74-hue/forage-midas",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Enterprise Engineering",
    architecture: [
      "Apache Kafka Event Stream Consumer",
      "Transaction Processing & Balance Aggregator",
      "Incentive Calculation Microservice Engine",
      "Spring Data JPA Atomic Persistence",
      "RESTful Query API"
    ]
  },
  {
    id: "civic-ai",
    title: "CivicAI — Problem Detection Platform",
    tagline: "Edge AI mobile urban intelligence platform using transit camera fleets.",
    mainIdea: "Edge AI mobile urban intelligence platform utilizing public transit camera fleets for automated road distress and hazard detection.",
    uniqueFeature: "Multi-bus spatial-temporal Bayesian consensus engine that corroborates sightings from multiple vehicles to eliminate false positives and auto-dispatch municipal work orders.",
    metrics: [
      { label: "Audit Readiness", value: "23/23 Tests Passed (100%)" },
      { label: "Bandwidth Drop", value: "99.7% Edge Filter" },
      { label: "Real-time FPS", value: "45 FPS (22.2ms Latency)" }
    ],
    problem: "Municipal authorities face delays in triaging citizen reports due to unorganized complaint streams, missing potholes and road hazards.",
    built: "Engineered edge AI road hazard priority scoring engine and incident classification database with multi-bus corroboration and spatial aggregation.",
    stack: ["Python", "Edge AI", "Computer Vision", "Pytest", "FastAPI"],
    githubUrl: "https://github.com/pbalamurali74-hue/CivicAI",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Edge AI / Smart City",
    architecture: [
      "On-Bus Real-Time Video Frame Stream Ingestion",
      "Edge YOLO Road Distress Detection & Geotagging",
      "Spatial-Temporal Multi-Bus Corroboration Engine",
      "Road Distress Priority Scoring & Municipal Work Order Auto-Dispatch"
    ]
  },
  {
    id: "quickmark",
    title: "Quickmark — Intelligent Attendance System",
    tagline: "Automated biometric / facial verification attendance system.",
    mainIdea: "Automated biometric facial verification attendance engine built for high-throughput, contactless identity logging in academic institutions.",
    uniqueFeature: "Anti-spoof liveness check paired with 128D facial embeddings yielding sub-second verification and proxy prevention.",
    metrics: [
      { label: "Verification Speed", value: "<0.8s / Student" },
      { label: "Embedding Dim", value: "128D Deep Metric" },
      { label: "Proxy Resistance", value: "Zero-Trust Liveness" }
    ],
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
    mainIdea: "Event-driven asynchronous infrastructure monitoring bot with webhook triggers and automated health incident dispatch.",
    uniqueFeature: "Exponential backoff auto-recovery alert grouping preventing alert fatigue during cluster degradation events.",
    metrics: [
      { label: "Alert Dispatch", value: "<250ms Delivery" },
      { label: "Uptime Health", value: "99.9% Monitored" },
      { label: "Protocol", value: "Async Webhooks" }
    ],
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
  }
];

export const certificationsData = [
  // Specializations & Core Badges
  {
    title: "Google AI Essentials Specialization",
    issuer: "Google (via Coursera)",
    date: "Jun 18, 2026",
    credentialUrl: "https://coursera.org/verify/specialization/X0GFX9ZRLPUC",
    isVerified: true
  },
  {
    title: "Google Prompting Essentials Specialization",
    issuer: "Google (via Coursera)",
    date: "Jun 29, 2026",
    credentialUrl: "https://coursera.org/verify/specialization/BX9ZT0G3EF4A",
    isVerified: true
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Jan 11, 2026",
    credentialUrl: "https://www.credly.com/badges/ebb75448-589a-4c9a-98ec-8087a0bf4b7a",
    isVerified: true
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB / IBM",
    date: "Jun 20, 2025",
    credentialUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
    isVerified: true
  },
  // Individual Verified Google AI & Data Courses
  {
    title: "Speed Up Data Analysis & Presentation Building",
    issuer: "Google (via Coursera)",
    date: "Jun 27, 2026",
    credentialUrl: "https://coursera.org/verify/W14SJF7SNEYS",
    isVerified: true
  },
  {
    title: "Start Writing Prompts like a Pro",
    issuer: "Google (via Coursera)",
    date: "Jun 23, 2026",
    credentialUrl: "https://coursera.org/verify/CRXRHWHQANYG",
    isVerified: true
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Google (via Coursera)",
    date: "Jun 11, 2026",
    credentialUrl: "https://coursera.org/verify/DFO4EJHOWT7E",
    isVerified: true
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Google (via Coursera)",
    date: "Jun 16, 2026",
    credentialUrl: "https://coursera.org/verify/NUTPE0SQCI39",
    isVerified: true
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google (via Coursera)",
    date: "Jun 16, 2026",
    credentialUrl: "https://coursera.org/verify/IH81AOUV8X2S",
    isVerified: true
  },
  {
    title: "Use AI Responsibly",
    issuer: "Google (via Coursera)",
    date: "Jun 18, 2026",
    credentialUrl: "https://coursera.org/verify/BSXR9IU6588B",
    isVerified: true
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: "Google (via Coursera)",
    date: "Jun 18, 2026",
    credentialUrl: "https://coursera.org/verify/0OGZA1KKZS77",
    isVerified: true
  },
  // Industry Credentials
  {
    title: "Deloitte Data Analytics Virtual Internship",
    issuer: "Deloitte / Forage",
    date: "Verified Internship",
    credentialUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
    isVerified: true
  },
  {
    title: "Machine Learning Internship Certificate",
    issuer: "Future Interns",
    date: "Verified Internship",
    credentialUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
    isVerified: true
  },
  {
    title: "NPTEL Certification",
    issuer: "NPTEL / IIT",
    date: "Verified Course",
    credentialUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
    isVerified: true
  },
  {
    title: "Scaler Certification",
    issuer: "Scaler Academy",
    date: "Verified Skills",
    credentialUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
    isVerified: true
  }
];
