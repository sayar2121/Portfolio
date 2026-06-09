export const personalInfo = {
  name: "Sayar Paul",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Flutter Developer",
    "FastAPI Engineer",
    "AI/ML Enthusiast",
    "Graphics Designer",
  ],
  email: "sayarpaul2004@gmail.com",
  github: "https://github.com/sayar2121",
  linkedin: "https://www.linkedin.com/in/sayarpaul/",
  location: "Kolkata, West Bengal, India",
  bio: "I am a passionate Full Stack Developer and Tech Enthusiast with experience in building scalable mobile and web applications using Flutter, FastAPI, Python, and modern backend technologies. My expertise includes frontend development, backend architecture, REST API development, database management, and real-time application systems.",
  bio2: "Along with software development, I also work in Data Analytics, Artificial Intelligence, and Business Intelligence using Python, SQL, Excel, Power BI, and Machine Learning concepts to analyze data, generate insights, and build intelligent solutions.",
};

export const skills = [
  { name: "Flutter", level: 90, category: "Mobile", icon: "📱" },
  { name: "Dart", level: 88, category: "Mobile", icon: "🎯" },
  { name: "Python", level: 92, category: "Backend", icon: "🐍" },
  { name: "FastAPI", level: 85, category: "Backend", icon: "⚡" },
  { name: "PostgreSQL", level: 82, category: "Database", icon: "🗄️" },
  { name: "React", level: 78, category: "Frontend", icon: "⚛️" },
  { name: "Machine Learning", level: 80, category: "AI/ML", icon: "🤖" },
  { name: "Firebase", level: 83, category: "Backend", icon: "🔥" },
  { name: "REST APIs", level: 88, category: "Backend", icon: "🌐" },
  { name: "Power BI", level: 75, category: "Analytics", icon: "📊" },
  { name: "UI/UX Design", level: 80, category: "Design", icon: "🎨" },
  { name: "Git & GitHub", level: 87, category: "Tools", icon: "🐙" },
];

export const skillCategories = ["All", "Mobile", "Backend", "Frontend", "AI/ML", "Database", "Analytics", "Design", "Tools"];

export const projects = [
  {
    id: 1,
    title: "Hyper-Local News App",
    subtitle: "Multilingual News Aggregation Platform",
    description:
      "A multilingual news aggregation platform focused on West Bengal, supporting Bengali, Hindi, and English content with local news feed, video/reels section, weather updates, community engagement, and push notifications.",
    tech: ["Flutter", "Firebase", "FastAPI", "PostgreSQL", "YouTube API", "RSS Feeds"],
    features: ["Local News Feed", "Video/Reels Section", "Multi-language Support", "Weather Updates", "Community Engagement", "Push Notifications"],
    color: "#00D4FF",
    gradient: "linear-gradient(135deg, #00D4FF20, #0080FF20)",
    github: "https://github.com/sayar2121",
    icon: "📰",
    category: "Mobile",
  },
  {
    id: 2,
    title: "HomeValue AI",
    subtitle: "ML-Powered House Price Predictor",
    description:
      "A machine learning web application that predicts house prices and architectural styles based on housing data using Random Forest models trained on the Ames Housing dataset with Explainable AI visualization.",
    tech: ["Python", "Machine Learning", "FastAPI", "PostgreSQL", "HTML/CSS/JS", "Chart.js"],
    features: ["Price Prediction", "Style Classification", "Explainable AI", "Feature Importance Charts", "Responsive Dashboard"],
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED20, #DB2777 20)",
    github: "https://github.com/sayar2121",
    icon: "🏠",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "MindGuard AI",
    subtitle: "Mental Health Detection Platform",
    description:
      "An AI-powered mental health detection and analysis platform that analyzes social media text for potential indicators of suicidal ideation, providing confidence scores and sentiment analysis.",
    tech: ["Python", "Machine Learning", "Streamlit", "Scikit-learn", "TextBlob", "Pandas"],
    features: ["Mental Health Assessment", "Risk Detection", "Confidence Scores", "Batch CSV Upload", "Sentiment Analysis"],
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B98120, #059669 20)",
    github: "https://github.com/sayar2121/Mental_Health_Detection_by_Social_Media_Text",
    icon: "🧠",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "DocChat — RAG Chatbot",
    subtitle: "RAG-Based Document Chatbot",
    description:
      "A RAG-powered document chatbot using FAISS vector store and Groq Llama 3.3 70B. Upload PDFs and chat with your documents — completely free with local embeddings and page citations.",
    tech: ["Python", "Streamlit", "FAISS", "Groq API", "sentence-transformers", "SQLite"],
    features: ["PDF Upload & Chat", "Page Citations", "Vector Search", "Chat History", "100% Free", "Privacy-First"],
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B20, #D9770620)",
    github: "https://github.com/sayar2121/doc_chat",
    icon: "💬",
    category: "AI/ML",
  },
  {
    id: 5,
    title: "Medicine Delivery Platform",
    subtitle: "Price Prediction & Delivery App",
    description:
      "A medicine delivery application with ML-powered price forecasting using ARIMA, Prophet, XGBoost, and LSTM models. Tracks historical prices, compares market rates, and forecasts future prices.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Python", "ARIMA", "XGBoost", "LSTM"],
    features: ["Medicine Ordering", "Price Forecasting", "Market Comparison", "Pharmacy Dashboard", "ML Models"],
    color: "#EF4444",
    gradient: "linear-gradient(135deg, #EF444420, #DC262620)",
    github: "https://github.com/sayar2121",
    icon: "💊",
    category: "Mobile",
  },
  {
    id: 6,
    title: "KishanSeva",
    subtitle: "Agriculture Digital Platform — HackNITR 5.0",
    description:
      "An agriculture-focused hackathon project developed to assist farmers through digital services and information accessibility. Presented at HackNITR 5.0.",
    tech: ["Flutter", "FastAPI", "Python", "PostgreSQL"],
    features: ["Farmer Assistance", "Agricultural Guidance", "Resource Information", "Mobile Accessibility"],
    color: "#84CC16",
    gradient: "linear-gradient(135deg, #84CC1620, #65A30D20)",
    github: "https://github.com/sayar2121",
    icon: "🌾",
    category: "Hackathon",
    achievement: "HackNITR 5.0",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Naiyo24 Pvt. Ltd.",
    duration: "2026 – Present",
    description: "Building scalable full-stack applications using Flutter, FastAPI, and PostgreSQL. Working on mobile app development, backend API design, and database architecture.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Python"],
    icon: "💼",
  },
  {
    role: "UI/UX Design Intern",
    company: "CodSoft",
    duration: "2024",
    description: "Conducted user research, wireframing, UI design, and user experience optimization. Developed and maintained design systems for consistent product experiences.",
    tech: ["Figma", "UI Design", "Wireframing", "UX Research"],
    icon: "🎨",
  },
  {
    role: "Graphics Design & Social Media Lead",
    company: "GDG On Campus HETC",
    duration: "2023 – Present",
    description: "Leading graphics design and social media strategy for Google Developer Groups on Campus at Hooghly Engineering & Technology College.",
    tech: ["Graphic Design", "Leadership", "Social Media", "Branding"],
    icon: "🎯",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Hooghly Engineering & Technology College",
    duration: "2022 – 2026",
    description: "4th Year undergraduate student specializing in Computer Science and Engineering.",
    icon: "🎓",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Institute Level Selection",
    description: "Selected at Institute Level with Team Nomination for Smart India Hackathon 2025.",
    icon: "🏆",
    color: "#F59E0B",
  },
  {
    title: "ETHGlobal New Delhi",
    subtitle: "Selected Participant",
    description: "Selected as a participant in ETHGlobal New Delhi Hackathon.",
    icon: "🌐",
    color: "#6366F1",
  },
  {
    title: "Yellow Hackathon 2025",
    subtitle: "Selected Participant",
    description: "Selected participant in Yellow Hackathon 2025.",
    icon: "⭐",
    color: "#EAB308",
  },
  {
    title: "HackNITR 5.0",
    subtitle: "Project Presenter",
    description: "Built and presented KishanSeva & Med-In India at HackNITR 5.0.",
    icon: "🚀",
    color: "#10B981",
  },
];

export const research = {
  title: "AgriDiseaseNet",
  paper: "CNN-Based Disease Detection Using Modified CNN with Explainable AI",
  conference: "Advances in Communication, Medical Electronics and Smart Grid Automation (ACMESGA 2K26)",
  domains: ["Artificial Intelligence", "Deep Learning", "Agriculture", "Explainable AI (XAI)"],
  contributions: ["Disease Detection Model", "CNN Architecture Design", "Explainability Analysis", "Research Presentation"],
  github: "https://github.com/sayar2121/HIBISCUS_LEAF",
  icon: "📄",
};

export const journeyImages = [
  "/M1.jpg", "/M2.jpg", "/M3.jpg", "/M4.jpg", "/M5.jpg", 
  "/M6.jpg", "/M7.jpg", "/M8.jpg", "/M9.jpg", "/M10.jpg", 
  "/M11.jpg", "/M12.jpg", "/M13.jpeg", "/M14.jpg", "/M15.jpeg", 
  "/M16.jpeg", "/M17.jpeg", "/M18.jpeg", "/M19.jpeg", "/M20.jpeg", 
  "/M21.jpeg", "/M22.jpeg", "/M23.jpg", "/M24.jpg", "/M25.jpeg", 
  "/M26.jpeg", "/M27.jpeg", "/M28.jpeg", "/M29.jpeg", "/M30.jpeg", 
  "/M31.jpeg", "/M32.jpeg"
];
