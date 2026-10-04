export const personalInfo = {
  name: "Purushotham Balamurali",
  githubHandle: "pbalamurali74-hue",
  githubUrl: "https://github.com/pbalamurali74-hue",
  linkedinUrl: "https://www.linkedin.com/in/purushothambalamurali/",
  email: "purushothambalamurali74@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1zK2FtddSxjEQh-I8zjzKVun-WPpHVErV/view?usp=share_link",
  role: "AI/ML Developer • Geospatial & Deep Learning • Python",
  eyebrow: "AI/ML • SATELLITE & GEOSPATIAL INTELLIGENCE • DEEP LEARNING",
  heroHeading: "BUILDING INTELLIGENT SYSTEMS.",
  heroSubheading: "DATA-DRIVEN. PRODUCTION-READY.",
  heroDescription:
    "I build practical AI models, cloud-penetrating satellite geospatial pipelines, and robust Python software systems that turn real-world data into reliable, actionable intelligence.",
  aboutHeading: "SOLVING HIGH-STAKES PROBLEMS WITH APPLIED AI.",
  aboutParagraphs: [
    "I am an AIML student at SRMIST driven by a deep fascination with machine learning, deep learning, geospatial remote sensing, and intelligent software engineering. My focus centers on transforming complex datasets into reliable predictive models and real-world tools that deliver genuine utility.",
    "From radar-physics flood exposure mapping with Copernicus Sentinel-1 SAR (GEOSHIELD, deployed live on Vercel) and PyTorch LSTM Remaining Useful Life forecasting on NASA turbofan sensor telemetry, to deploying zero-trust authenticated FastAPI REST services and interactive Streamlit analytics dashboards, I emphasize practical implementation, clean modular code, and verifiable metrics.",
    "I actively build for high-impact hackathons (GEOIMPATHON 1.0, Smart India Hackathon 2026) and develop production-grade prototypes—seeking AI/ML, Data Science, and Python software engineering roles where I can contribute to mission-critical systems."
  ],
};

export const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "HTML5/CSS3"]
  },
  {
    category: "AI, ML & Deep Learning",
    skills: ["Machine Learning", "Deep Learning", "PyTorch", "XGBoost", "Scikit-Learn", "Computer Vision (YOLO)", "NLP & Chatbots", "Time-Series Forecasting", "Prompt Engineering"]
  },
  {
    category: "Geospatial & Remote Sensing AI",
    skills: ["Sentinel-1 SAR", "GeoPandas", "Rasterio", "Google Earth Engine", "Copernicus DEM", "MapLibre GL", "OSMnx & NetworkX", "AHP Multi-Criteria"]
  },
  {
    category: "Development & Frameworks",
    skills: ["FastAPI", "React", "Next.js", "Streamlit", "Flask", "SQLAlchemy", "Spring Boot", "REST APIs", "Git & GitHub"]
  },
  {
    category: "Tools & Analytics",
    skills: ["Power BI", "Pandas & NumPy", "Prophet", "Jupyter Notebook", "Docker", "Pytest", "Vercel", "MongoDB"]
  }
];

export const featuredProjects = [
  {
    id: "geoshield-flood",
    title: "GEOSHIELD — Flood Exposure Intelligence",
    tagline: "Radar-physics flood detection & explainable decision support (GEOIMPathon 1.0).",
    mainIdea: "End-to-end cloud-penetrating Sentinel-1 C-band SAR satellite change detection engine with zero-overlap spatial exposure accounting across 23,000+ infrastructure footprints and 506 1-km² sectors.",
    uniqueFeature: "Copernicus C-SAR microwave specular backscatter drop (-5.68 dB) penetrating 100% cloud cover with exact mathematical bijection (0.00% double-counting error) and factor-share priority decomposition.",
    metrics: [
      { label: "Detected Flood", value: "3.35 km² (0.69%)" },
      { label: "Exposed Assets", value: "272 Bldgs / 17.8 km Roads" },
      { label: "Reconciliation Error", value: "0.00% Exact Bijection" }
    ],
    problem: "During cyclonic cloudbursts, optical satellites are blinded by clouds, and emergency dispatchers lack granular, explainable 1-km² prioritization of where to deploy rescue boats and relief supplies.",
    built: "Built a reproducible Python geospatial intelligence pipeline (GeoPandas, Rasterio, Copernicus DEM, ESA WorldCover) coupled with an ultra-fast, zero-server MapLibre GL React web command center deployed on Vercel.",
    stack: ["Python", "Sentinel-1 SAR", "GeoPandas", "Rasterio", "Copernicus DEM", "MapLibre GL", "React", "Vite"],
    githubUrl: "https://github.com/pbalamurali74-hue/geoshield-flood-intelligence",
    liveUrl: "https://geoshield-flood.vercel.app",
    isFeatured: true,
    isPlaceholder: false,
    badge: "Satellite & Geospatial AI",
    architecture: [
      "Sentinel-1A RTC C-SAR (10m) Window Streaming & UTM 43N Reprojection",
      "Log-dB Calibration & 3x3 Median Speckle Filter (Dual Condition: Post <= -15dB, Delta <= -2.5dB)",
      "Topographic Slope <= 5° & JRC 38-Yr Permanent Water Masking (1,000 m² Sieve)",
      "506 1-km² Grid Zonal Sum with Enforced 1:1 Centroid Bijection (Zero Double-Count)",
      "Multi-Criteria Priority Index & 100% Static MapLibre GL Command Center"
    ]
  },
  {
    id: "turbofan-rul",
    title: "Turbofan Engine RUL Prediction (PyTorch LSTM)",
    tagline: "Predictive maintenance modeling using NASA C-MAPSS multivariate telemetry.",
    mainIdea: "Physics-informed time-series degradation modeling benchmarking Linear Regression, Random Forest, XGBoost, 1D-CNN, and PyTorch LSTM to forecast Remaining Useful Life (RUL) per operating cycle.",
    uniqueFeature: "PyTorch LSTM model achieving 14.72 RMSE, 11.19 MAE, and 0.8745 R² on NASA C-MAPSS FD001 test evaluation, integrated into an interactive Streamlit maintenance console.",
    metrics: [
      { label: "PyTorch LSTM", value: "14.72 RMSE / 0.8745 R²" },
      { label: "Monitored Fleet", value: "100 Turbofan Engines" },
      { label: "Telemetry Channels", value: "21 Sensor Streams" }
    ],
    problem: "Turbofan engine degradation in commercial aircraft leads to catastrophic in-flight failures and costly unscheduled grounding if cycle wear is not caught early.",
    built: "Engineered leak-free engine-level train/validation splits, piecewise-linear RUL targets, rolling temporal statistics, multi-model benchmarks, and an interactive Streamlit operational maintenance console.",
    stack: ["Python", "PyTorch", "LSTM", "XGBoost", "Scikit-Learn", "Streamlit", "Pandas", "NumPy"],
    githubUrl: "https://github.com/pbalamurali74-hue/Turbofan-Engine-RUL-Prediction",
    liveUrl: null,
    isFeatured: true,
    isPlaceholder: false,
    badge: "Deep Learning & Time-Series",
    architecture: [
      "Multivariate NASA C-MAPSS Sensor Telemetry Ingestion (FD001)",
      "Leak-Free Unit Splitting & Piecewise-Linear RUL Target Construction",
      "Rolling Window Statistics & Temporal Feature Engineering",
      "PyTorch Deep LSTM & XGBoost Regressor Benchmarking",
      "Streamlit Real-Time Maintenance Console for Cycle-by-Cycle Inference"
    ]
  },
  {
    id: "fastapi-todo",
    title: "Secure FastAPI REST Service",
    tagline: "Production-grade authenticated backend with dual JWT tokens & rate limiting.",
    mainIdea: "Enterprise zero-trust authenticated RESTful service with strict user data isolation, cascade deletion, and automated DDoS rate limits.",
    uniqueFeature: "Dual JWT token session architecture (15-min access / 7-day database-backed refresh tokens) with instant single-click revocation and slowapi rate limiters.",
    metrics: [
      { label: "JWT Session", value: "15m Access / 7d Refresh" },
      { label: "Rate Limiting", value: "15 Auth / 100 Global req/15m" },
      { label: "Test Suite", value: "19/19 Pytest Pass (0 Warnings)" }
    ],
    problem: "Applications require secure, rate-limited user authentication and isolated data storage with clean API contracts.",
    built: "Built a fully-tested FastAPI REST service featuring bcrypt password hashing, 15-min access tokens + 7-day database refresh tokens, Pydantic validation, slowapi rate limiting, and cascade database deletion.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "JWT / Bcrypt", "slowapi", "Vercel"],
    githubUrl: "https://github.com/pbalamurali74-hue/ToDo-LIST-API",
    liveUrl: "https://to-do-list-api-tau.vercel.app",
    isFeatured: true,
    isPlaceholder: false,
    badge: "Backend & API Security",
    architecture: [
      "FastAPI Endpoint Layer + Pydantic Schema Validation",
      "Dual JWT Token Authentication & Database Refresh Token Session Storage",
      "SQLAlchemy ORM + SQLite Data Persistence",
      "slowapi Middleware (Auth 15 req/15min, Global 100 req/15min)",
      "Vercel Serverless Cloud Deployment"
    ]
  },
  {
    id: "geoimpathon-dss",
    title: "Multi-Hazard Decision Support & Least-Risk Routing",
    tagline: "Emergency routing & critical road isolation modeling (GEOIMPATHON 1.0).",
    mainIdea: "Multi-hazard decision-support platform designed for District Disaster Management Officers (DDMO) that identifies least-risk emergency routes, detects critical road single-points-of-failure, and stages emergency relief.",
    uniqueFeature: "Dijkstra Risk-Weighted Network Router with non-linear flood impedance and graph removal analysis exposing road severance that isolates maximum populations.",
    metrics: [
      { label: "Study Corridor", value: "20×20 km South Chennai" },
      { label: "Validation Event", value: "Cyclone Michaung Floods" },
      { label: "Scientific Rigor", value: "AHP Matrix (CR < 0.10)" }
    ],
    problem: "In major urban floods, shortest routes to hospitals are often submerged death traps, while rescue dispatchers lack tools to simulate road network collapse.",
    built: "Integrated Google Earth Engine (GEE), Copernicus DEM (HAND proxy), Sentinel-1 SAR change detection, Sentinel-2 NDVI, and OpenStreetMap drive graphs with Dijkstra cost equations and greedy maximum coverage relief staging.",
    stack: ["Python", "Google Earth Engine", "Sentinel-1 SAR", "Copernicus DEM", "NetworkX", "OSMnx", "Streamlit", "Pytest"],
    githubUrl: "https://github.com/pbalamurali74-hue/geoimpathon-multi-hazard-dss",
    liveUrl: null,
    isFeatured: true,
    isPlaceholder: false,
    badge: "GIS & Network Graph AI",
    architecture: [
      "Multi-Satellite Ingestion (Sentinel-1 SAR, Sentinel-2 MSI, Copernicus DEM GLO-30, CHIRPS)",
      "Topographic HAND Proxy & Dual-Date SAR Backscatter Inundation Delineation",
      "AHP Multi-Criteria Decision Model with Shannon Entropy Cross-Verification",
      "Dijkstra Risk-Weighted Graph Routing (Cost = Length * (1 + alpha * Risk))",
      "Greedy Maximum Coverage Pre-Positioning & Hospital Golden-Hour Accessibility Analysis"
    ]
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction Engine & Simulator",
    tagline: "End-to-end ML churn classification with interactive Streamlit GUI & Power BI.",
    mainIdea: "Enterprise customer retention cockpit transforming raw ML risk probabilities into counterfactual retention actions and capital protection.",
    uniqueFeature: "Interactive Real-Time 'What-If' Customer Simulator with explainable AI factor waterfall showing how proactive interventions cut churn risk dynamically.",
    metrics: [
      { label: "Model Metric", value: "86.8% ROC-AUC" },
      { label: "Retention Impact", value: "-42% Churn via Active Tier" },
      { label: "Cohort Size", value: "10,000 Customers" }
    ],
    problem: "Subscription and banking services require early identification of at-risk customers to prevent revenue churn and optimize retention budgets.",
    built: "Trained and evaluated Logistic Regression, Random Forest, and XGBoost models on customer behavioral features. Deployed an interactive Streamlit app with What-If counterfactual simulation alongside Power BI visual analytics.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "Streamlit", "Power BI", "Pandas"],
    githubUrl: "https://github.com/pbalamurali74-hue/customer-churn-prediction",
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
    id: "civic-ai",
    title: "CivicAI — Smart Road Distress Detection",
    tagline: "Edge AI mobile urban intelligence platform using transit camera fleets (SIH 2026).",
    mainIdea: "Transforms municipal transit bus fleets into distributed edge-sensing nodes that passively inspect roadway health, geotag distress, and auto-dispatch municipal repair work orders.",
    uniqueFeature: "Multi-bus spatial-temporal Bayesian consensus corroborating sightings across multiple bus runs to eliminate false positives with 99.7% edge bandwidth reduction.",
    metrics: [
      { label: "Inference Speed", value: "45 FPS (22.2ms Latency)" },
      { label: "Bandwidth Drop", value: "99.7% Edge Filter" },
      { label: "Validation Pass", value: "23/23 Tests Passed (100%)" }
    ],
    problem: "Municipal road inspections rely on manual complaints or costly dedicated survey vehicles, creating delays in repairing dangerous potholes and road erosion.",
    built: "Engineered edge YOLO detection pipeline, geodetic reverse referencing, multi-vehicle spatial clustering, municipal priority scoring engine, and FastAPI incident dispatch dashboard.",
    stack: ["TypeScript", "Python", "Computer Vision", "Edge YOLO", "FastAPI", "Pytest"],
    githubUrl: "https://github.com/pbalamurali74-hue/CivicAI",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Edge AI & Smart Cities",
    architecture: [
      "On-Bus Real-Time Video Frame Stream Ingestion",
      "Edge YOLO Road Distress Detection & Geotagging",
      "Spatial-Temporal Multi-Bus Corroboration Engine",
      "Road Distress Priority Scoring & Municipal Work Order Auto-Dispatch"
    ]
  },
  {
    id: "sales-forecasting",
    title: "Superstore Sales Forecasting & Power BI Analytics",
    tagline: "Time-series revenue prediction & Power BI visual intelligence.",
    mainIdea: "Multi-year retail time-series revenue projection platform coupled with supply chain inventory risk detection.",
    uniqueFeature: "Interactive Macroeconomic Scenario Planner modeling demand shocks and cost inflation alongside 12-month Prophet confidence bands.",
    metrics: [
      { label: "Transactions", value: "9,000+ Records" },
      { label: "Forecast Band", value: "12 Months (95% CI)" },
      { label: "Early Warning", value: "+45% Q4 Surge Detection" }
    ],
    problem: "Retail organizations require accurate sales trend predictions for supply chain management and inventory buffer planning.",
    built: "Engineered multi-year retail transactions forecasting with interactive Streamlit revenue simulator, 12-month Prophet confidence projections, Q4 stockout risk alerts, and custom Power BI visual dashboards.",
    stack: ["Python", "Prophet", "Streamlit", "Pandas", "Power BI", "Scikit-Learn"],
    githubUrl: "https://github.com/pbalamurali74-hue/sales-forecasting-powerbi",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Data Science & BI",
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
    tagline: "Custom NLP intent classification engine & interactive bot web interface.",
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
    githubUrl: "https://github.com/pbalamurali74-hue/customer-support-ai-chatbot",
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
    title: "JPMorgan Chase Software Engineering (Midas)",
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
    id: "python-leetcode",
    title: "Python LeetCode & DSA Problem Solving",
    tagline: "Algorithmic problem-solving codebase for interview and competitive readiness.",
    mainIdea: "Structured collection of modular, optimized Python solutions solving fundamental to advanced Data Structures and Algorithms problems.",
    uniqueFeature: "Clean time/space complexity annotations with categorized patterns across arrays, two pointers, binary search, trees, graphs, and dynamic programming.",
    metrics: [
      { label: "Language", value: "Python 3" },
      { label: "Focus", value: "DSA & Problem Solving" },
      { label: "Architecture", value: "Topic-Wise Categorized" }
    ],
    problem: "Technical interviews and competitive programming require structured problem-solving discipline and optimal time-space algorithmic efficiency.",
    built: "Engineered topic-wise Python solutions covering two pointers, sliding window, binary search, tree traversals, graph BFS/DFS, and dynamic programming with explanatory comments.",
    stack: ["Python", "Algorithms", "Data Structures", "LeetCode", "Git"],
    githubUrl: "https://github.com/pbalamurali74-hue/Python-Leetcode-Submissions",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Algorithms & DSA",
    architecture: [
      "Algorithmic Pattern Decomposition (Sliding Window, Binary Search, DP)",
      "Optimized Python Implementation with Time & Space Complexity Profiling",
      "Test Case Verification against Edge Cases",
      "Continuous Placement & Technical Interview Readiness"
    ]
  },
  {
    id: "raksha-vanguard",
    title: "RAKSHA VANGUARD™ — Edge Safety Platform",
    tagline: "Subterranean multi-hazard AI safety intelligence wearable platform.",
    mainIdea: "Edge-native adaptive AI safety intelligence platform engineered for next-generation industrial, subterranean, and tactical safety wearables (smart chest-rigs, helmet nodes).",
    uniqueFeature: "Sub-15ms on-device multi-hazard inference detecting asphyxiating gas spikes (H₂S, CH₄, CO), hypoxia, and kinetic fall impacts with zero cloud dependency during subterranean cellular blackouts.",
    metrics: [
      { label: "Inference Latency", value: "<15ms On-Device" },
      { label: "Initiative", value: "IHFC Patent Prototype Call" },
      { label: "Event", value: "RakshaTech Synapse 2026" }
    ],
    problem: "In subterranean sewers, mining shafts, and chemical vaults, toxic gas leaks and fall impacts cause recurring worker deaths while concrete walls block cellular and Wi-Fi alarms completely.",
    built: "Engineered multi-sensor preprocessing, edge machine learning risk classification, full software simulator, Next.js operational dashboard, and FastAPI telemetry stream.",
    stack: ["Next.js", "FastAPI", "Python", "XGBoost", "Edge AI", "Tailwind CSS"],
    githubUrl: "https://github.com/pbalamurali74-hue",
    liveUrl: null,
    isFeatured: false,
    isPlaceholder: false,
    badge: "Patent Prototype / Edge AI",
    architecture: [
      "10Hz Multi-Sensor Telemetry Simulation (H2S, CH4, CO, SpO2, Accelerometer)",
      "Edge Feature Normalization & Oversampling Pipeline",
      "Sub-15ms Real-Time Hazard Classification Engine",
      "Offline-Resilient Local Audio-Visual Wearable Alarm",
      "Next.js Tactical Command & Dispatch Operations Dashboard"
    ]
  }
];

export const experienceData = [
  {
    company: "GEOIMPATHON 1.0",
    role: "Geospatial AI & Disaster Decision Systems Lead",
    period: "Oct 2026 (Hackathon)",
    isPlaceholder: false,
    details: [
      "Architected GEOSHIELD: cloud-penetrating Sentinel-1 SAR flood exposure detection deployed to Vercel with 1-km² explainable priority zoning over 487.92 km² in Tamil Nadu.",
      "Built Multi-Hazard Decision Support System with Dijkstra least-risk emergency routing for Cyclone Michaung floods, hospital access collapse quantification, and road single-points-of-failure analysis.",
      "Engineered automated geospatial pipelines in Python (GeoPandas, Rasterio, Google Earth Engine, OSMnx) asserting 0.00% double-counting error."
    ]
  },
  {
    company: "Future Interns",
    role: "Machine Learning Intern",
    period: "Verified Internship",
    isPlaceholder: false,
    details: [
      "Developed end-to-end Machine Learning systems including Customer Churn Prediction (XGBoost + Streamlit + Power BI) with real-time What-If counterfactual simulation.",
      "Executed Retail Sales Forecasting analysis with 12-month Prophet confidence projections and interactive Power BI executive reporting dashboards.",
      "Built an Intent-based NLP chatbot application using structured JSON taxonomy, TF-IDF vectorization, and confidence threshold guardrails."
    ]
  },
  {
    company: "Smart India Hackathon 2026",
    role: "AI / Computer Vision Engineer (CivicAI)",
    period: "National Hackathon (PS 26124)",
    isPlaceholder: false,
    details: [
      "Developed CivicAI: transforming public transit bus cameras into mobile AI road distress sensing units running at 45 FPS.",
      "Engineered multi-bus spatial-temporal Bayesian consensus filtering out 99.7% of redundant edge bandwidth and eliminating false positives.",
      "Built FastAPI municipal dispatch backend with 23/23 unit test verification."
    ]
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Virtual Experience",
    period: "Forage Program",
    isPlaceholder: false,
    details: [
      "Participated in the JPMC Advanced Software Engineering Virtual Experience program.",
      "Engineered transaction event streaming using Apache Kafka, Spring Boot microservices, and Spring Data JPA atomic persistence."
    ]
  },
  {
    company: "IHFC / RakshaTech Synapse 2026",
    role: "Edge AI Wearable Systems Developer (Raksha Vanguard)",
    period: "Patent & Prototype Call",
    isPlaceholder: false,
    details: [
      "Engineered edge-native adaptive AI safety wearable platform for subterranean and industrial hazard protection against toxic gas asphyxiation and fall trauma.",
      "Implemented sub-15ms local ML inference architecture operating completely offline during cellular and Wi-Fi blackouts."
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
