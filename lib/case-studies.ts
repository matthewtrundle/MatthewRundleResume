export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  implementation: string[];
  results: {
    metric: string;
    value: string;
    impact: string;
  }[];
  techStack: string[];
  category: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "onboarding-readiness",
    title: "AI-Powered Onboarding Readiness Score",
    subtitle: "Transforming 570K listings with ML-driven intelligence",
    challenge: "New property listings on Vrbo experienced low early booking rates due to incomplete profiles and suboptimal content quality. With 570,000+ properties globally, manual quality assessment was impossible.",
    approach: "Developed a comprehensive ML model that analyzes listing completeness, photo quality, description sentiment, and competitive positioning to generate real-time readiness scores.",
    implementation: [
      "Built ensemble model combining NLP for description analysis and computer vision for photo quality assessment",
      "Implemented real-time scoring pipeline processing 10K+ listings daily",
      "Created automated recommendation engine for listing improvements",
      "Deployed A/B testing framework to measure conversion impact"
    ],
    results: [
      {
        metric: "Early Booking Conversion",
        value: "+12%",
        impact: "Across all scored listings"
      },
      {
        metric: "Time to First Booking",
        value: "-35%",
        impact: "From listing creation"
      },
      {
        metric: "Listings Processed",
        value: "570K+",
        impact: "Global coverage"
      }
    ],
    techStack: ["Python", "TensorFlow", "AWS SageMaker", "Snowflake", "React", "Next.js"],
    category: "Machine Learning",
    featured: true
  },
  {
    id: "dynamic-pricing",
    title: "Personalized Dynamic Pricing Model",
    subtitle: "Optimizing revenue through intelligent price recommendations",
    challenge: "Property partners struggled to set competitive prices in rapidly changing markets, leaving money on the table during high-demand periods and experiencing low occupancy during off-seasons.",
    approach: "Created a multi-variate pricing model that considers seasonality, local events, competitor rates, property features, and historical performance to suggest optimal pricing strategies.",
    implementation: [
      "Developed time-series forecasting model with LSTM networks",
      "Built real-time competitive intelligence data pipeline",
      "Created partner-facing dashboard with pricing recommendations",
      "Implemented automated price adjustment APIs"
    ],
    results: [
      {
        metric: "Booking Uplift",
        value: "+12%",
        impact: "For partners using optimized pricing"
      },
      {
        metric: "Revenue per Property",
        value: "+18%",
        impact: "Year-over-year growth"
      },
      {
        metric: "Partner Adoption",
        value: "45%",
        impact: "Within first 6 months"
      }
    ],
    techStack: ["Python", "PyTorch", "Airflow", "Snowflake", "Tableau", "REST APIs"],
    category: "Revenue Optimization",
    featured: true
  },
  {
    id: "supply-growth",
    title: "Strategic Supply Growth Analytics Platform",
    subtitle: "Driving $100M+ value through data-driven expansion",
    challenge: "Vrbo needed to strategically grow supply by 20% while maintaining quality standards and focusing on high-value markets with the best ROI potential.",
    approach: "Built comprehensive analytics platform combining market opportunity scoring, competitive analysis, and ROI forecasting to guide strategic supply acquisition.",
    implementation: [
      "Developed market opportunity scoring algorithm analyzing 50+ factors",
      "Created executive dashboards for C-suite strategic planning",
      "Built predictive models for market penetration forecasting",
      "Implemented automated alerting for high-value opportunities"
    ],
    results: [
      {
        metric: "Supply Growth",
        value: "+20%",
        impact: "Total platform inventory"
      },
      {
        metric: "Incremental Value",
        value: "$100M+",
        impact: "Annual revenue impact"
      },
      {
        metric: "Market Efficiency",
        value: "+40%",
        impact: "ROI on acquisition spend"
      }
    ],
    techStack: ["SQL", "Python", "Tableau", "Snowflake", "Apache Spark", "dbt"],
    category: "Strategic Analytics",
    featured: true
  },
  {
    id: "demand-forecasting",
    title: "Demand Forecasting with Ensemble ML",
    subtitle: "Predicting travel patterns for optimal inventory management",
    challenge: "Seasonal demand fluctuations and emerging travel trends made it difficult to predict booking volumes, leading to missed revenue opportunities and poor resource allocation.",
    approach: "Developed ensemble forecasting model combining traditional time-series analysis with deep learning to predict demand across markets and property types.",
    implementation: [
      "Built ensemble model combining ARIMA, XGBoost, and neural networks",
      "Integrated external data sources (events, weather, economic indicators)",
      "Created automated retraining pipeline for model freshness",
      "Deployed real-time prediction API serving 1M+ predictions daily"
    ],
    results: [
      {
        metric: "Forecast Accuracy",
        value: "94%",
        impact: "30-day prediction window"
      },
      {
        metric: "Revenue Capture",
        value: "+$15M",
        impact: "Through better inventory allocation"
      },
      {
        metric: "Processing Speed",
        value: "100x",
        impact: "Faster than previous system"
      }
    ],
    techStack: ["Python", "scikit-learn", "XGBoost", "Kubernetes", "Redis", "PostgreSQL"],
    category: "Machine Learning",
    featured: false
  },
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Detection Engine",
    subtitle: "Protecting platform integrity with AI-powered security",
    challenge: "Increasing sophistication of fraudulent listings and bookings threatened platform trust and resulted in significant financial losses and customer dissatisfaction.",
    approach: "Implemented real-time fraud detection system using anomaly detection and pattern recognition to identify suspicious activities before they impact customers.",
    implementation: [
      "Developed anomaly detection models using isolation forests and autoencoders",
      "Built real-time streaming pipeline processing all platform events",
      "Created explainable AI dashboard for fraud investigation teams",
      "Implemented automated response system for high-confidence detections"
    ],
    results: [
      {
        metric: "Fraud Prevention",
        value: "85%",
        impact: "Catch rate improvement"
      },
      {
        metric: "False Positive Rate",
        value: "-60%",
        impact: "Reduction in incorrect flags"
      },
      {
        metric: "Response Time",
        value: "<100ms",
        impact: "Real-time detection"
      }
    ],
    techStack: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "Docker", "AWS"],
    category: "Security & Trust",
    featured: false
  },
  {
    id: "nlp-insights",
    title: "Natural Language Insights Dashboard",
    subtitle: "Transforming customer feedback into actionable intelligence",
    challenge: "Millions of customer reviews and support tickets contained valuable insights, but manual analysis was impossible at scale, leaving critical feedback patterns undiscovered.",
    approach: "Built NLP-powered analytics platform to automatically extract insights, sentiment, and actionable recommendations from unstructured text data.",
    implementation: [
      "Implemented transformer-based models for sentiment analysis and topic extraction",
      "Created multilingual support for global market coverage",
      "Built automated insight generation and trend detection system",
      "Developed interactive dashboard for product and operations teams"
    ],
    results: [
      {
        metric: "Insights Generated",
        value: "10K+",
        impact: "Monthly actionable insights"
      },
      {
        metric: "Analysis Speed",
        value: "1000x",
        impact: "Faster than manual review"
      },
      {
        metric: "Product Improvements",
        value: "45",
        impact: "Features launched from insights"
      }
    ],
    techStack: ["Python", "Hugging Face", "BERT", "Streamlit", "MongoDB", "FastAPI"],
    category: "Natural Language Processing",
    featured: false
  }
];