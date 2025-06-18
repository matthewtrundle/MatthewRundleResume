export interface ExecutiveCaseStudy {
  id: string;
  title: string;
  executiveSummary: string;
  businessContext: {
    challenge: string;
    stakeholders: string[];
    budget: string;
    timeline: string;
  };
  solution: {
    strategy: string;
    teamStructure: string;
    techApproach: string;
    keyDecisions: string[];
  };
  implementation: {
    phases: { phase: string; duration: string; outcome: string }[];
    teamSize: string;
    crossFunctional: string[];
  };
  impact: {
    financial: { metric: string; value: string; verification: string }[];
    operational: { metric: string; improvement: string }[];
    strategic: string[];
  };
  lessonsLearned: string[];
  executivePresentation?: string; // Link to deck/video
}

export const executiveCaseStudies: ExecutiveCaseStudy[] = [
  {
    id: "supply-growth-transformation",
    title: "20% Supply Growth Initiative: $100M+ Value Creation",
    executiveSummary: "Led cross-functional initiative to strategically grow Vrbo's global supply by 20%, adding 400K properties and generating $100M+ in incremental GMV within 12 months.",
    businessContext: {
      challenge: "Vrbo faced declining market share against competitors, requiring strategic supply expansion while maintaining quality standards and optimizing acquisition costs.",
      stakeholders: ["CEO", "CFO", "VP Product", "VP Engineering", "Regional GMs"],
      budget: "$15M acquisition budget + $78K operational",
      timeline: "12 months (Q1 2023 - Q1 2024)"
    },
    solution: {
      strategy: "Developed AI-powered market opportunity scoring to identify high-value property segments and optimize acquisition spend across global markets.",
      teamStructure: "Led 6 direct reports + 50+ cross-functional contributors across Product, Engineering, Finance, and regional teams",
      techApproach: "Built ML models using XGBoost for opportunity scoring, deployed on AWS SageMaker with real-time inference pipeline",
      keyDecisions: [
        "Pivoted from volume-based to value-based acquisition after A/B tests showed 3x better ROI",
        "Chose interpretable ML models over black-box to gain stakeholder trust",
        "Implemented phased rollout to de-risk global deployment"
      ]
    },
    implementation: {
      phases: [
        { phase: "Pilot (Seattle/London)", duration: "3 months", outcome: "15% supply growth, validated approach" },
        { phase: "Scale (5 markets)", duration: "6 months", outcome: "Achieved 18% growth, refined targeting" },
        { phase: "Global Rollout", duration: "3 months", outcome: "Exceeded 20% target, $100M+ GMV impact" }
      ],
      teamSize: "6 direct + 100+ indirect",
      crossFunctional: ["Product", "Engineering", "Finance", "Legal", "Regional Operations"]
    },
    impact: {
      financial: [
        { metric: "Incremental GMV", value: "$100M+", verification: "Finance-validated using holdout markets" },
        { metric: "Acquisition Efficiency", value: "40% improvement", verification: "Cost per quality listing reduced" },
        { metric: "ROI", value: "7:1", verification: "A/B test with control markets" }
      ],
      operational: [
        { metric: "Time to Market", improvement: "60% faster property onboarding" },
        { metric: "Quality Score", improvement: "Maintained 95%+ despite rapid growth" }
      ],
      strategic: [
        "Established Vrbo as market leader in 3 new geographic segments",
        "Created reusable AI platform for future growth initiatives",
        "Influenced $50M additional investment in AI capabilities"
      ]
    },
    lessonsLearned: [
      "Executive buy-in requires interpretable models and incremental proof points",
      "Phased rollouts essential for de-risking large-scale initiatives",
      "Cross-functional alignment workshops critical for complex deployments"
    ]
  },
  {
    id: "ml-readiness-platform",
    title: "Global ML-Powered Onboarding Platform: 12% Conversion Uplift",
    executiveSummary: "Designed and deployed ML-powered readiness scoring system across 570K+ global listings, improving early booking conversion by 12% and reducing time-to-first-booking by 35%.",
    businessContext: {
      challenge: "New property partners experienced 65% lower conversion rates in first 90 days due to incomplete profiles and suboptimal content, impacting overall marketplace liquidity.",
      stakeholders: ["CPO", "VP Partner Success", "VP Engineering", "Regional Directors"],
      budget: "$2M development + ongoing operational costs",
      timeline: "9 months end-to-end"
    },
    solution: {
      strategy: "Built real-time ML scoring system analyzing 50+ property attributes to provide actionable recommendations for partners to optimize their listings.",
      teamStructure: "Led team of 6 data scientists/engineers + collaborated with 30+ engineers and product managers",
      techApproach: "Ensemble model combining NLP (BERT for descriptions), computer vision (property photos), and traditional ML (XGBoost) for holistic scoring",
      keyDecisions: [
        "Real-time inference vs batch to enable immediate partner feedback",
        "Partner-facing dashboard for transparency and trust",
        "Automated A/B testing framework for continuous improvement"
      ]
    },
    implementation: {
      phases: [
        { phase: "Model Development", duration: "3 months", outcome: "0.87 AUC, validated with historical data" },
        { phase: "Platform Build", duration: "4 months", outcome: "Scalable API handling 10K+ requests/minute" },
        { phase: "Global Deployment", duration: "2 months", outcome: "Rolled out to 570K properties with 95% adoption" }
      ],
      teamSize: "6 direct + 30 engineering/product",
      crossFunctional: ["ML Engineering", "Platform Engineering", "Partner Success", "UX Design"]
    },
    impact: {
      financial: [
        { metric: "Booking Conversion", value: "+12%", verification: "Randomized control trial across 100K properties" },
        { metric: "Partner Lifetime Value", value: "+18%", verification: "Cohort analysis over 12 months" },
        { metric: "Support Cost Reduction", value: "$3M annually", verification: "Reduced manual interventions by 70%" }
      ],
      operational: [
        { metric: "Time to First Booking", improvement: "35% reduction (45 → 29 days)" },
        { metric: "Partner Satisfaction", improvement: "NPS increased by 22 points" }
      ],
      strategic: [
        "Established foundation for AI-first partner experience",
        "Created competitive moat through proprietary scoring algorithms",
        "Enabled data-driven partner segmentation for targeted programs"
      ]
    },
    lessonsLearned: [
      "Partner-facing AI requires extreme focus on explainability",
      "Continuous model monitoring critical for maintaining performance",
      "Cross-team collaboration from day 1 accelerates adoption"
    ]
  },
  {
    id: "executive-decision-platform",
    title: "C-Suite Analytics Platform: Transforming Strategic Decision-Making",
    executiveSummary: "Built executive analytics platform used by CEO, CFO, and board for quarterly planning, enabling data-driven pivots that influenced $500M+ in strategic investments.",
    businessContext: {
      challenge: "Executive team lacked unified view of business performance, relying on fragmented reports that took weeks to compile and often contained conflicting metrics.",
      stakeholders: ["CEO", "CFO", "Board of Directors", "All VPs"],
      budget: "$500K + dedicated team",
      timeline: "6 months to MVP, ongoing iterations"
    },
    solution: {
      strategy: "Created single source of truth for executive metrics with predictive modeling and scenario planning capabilities.",
      teamStructure: "Led team of 4 senior analysts/engineers, partnered with C-suite directly",
      techApproach: "Real-time data pipeline (Snowflake + dbt), interactive dashboards (Tableau), predictive models (Python/Prophet)",
      keyDecisions: [
        "Daily automated refresh vs real-time to balance cost/value",
        "Mobile-first design for board member accessibility",
        "Scenario modeling for strategic planning sessions"
      ]
    },
    implementation: {
      phases: [
        { phase: "Requirements & Design", duration: "2 months", outcome: "Aligned on 25 core KPIs with C-suite" },
        { phase: "MVP Development", duration: "3 months", outcome: "Launched with 95% data accuracy" },
        { phase: "Adoption & Iteration", duration: "Ongoing", outcome: "100% executive adoption, 50+ enhancements" }
      ],
      teamSize: "4 direct reports",
      crossFunctional: ["Finance", "IT", "All business units for data validation"]
    },
    impact: {
      financial: [
        { metric: "Decision Speed", value: "80% faster", verification: "From weeks to hours for key analyses" },
        { metric: "Strategic Pivots", value: "$500M influenced", verification: "3 major investment decisions based on insights" },
        { metric: "Cost Savings", value: "$2M annually", verification: "Eliminated redundant reporting efforts" }
      ],
      operational: [
        { metric: "Executive Time Saved", improvement: "10+ hours/week across leadership team" },
        { metric: "Data Accuracy", improvement: "From 80% to 99.5% confidence in metrics" }
      ],
      strategic: [
        "Enabled proactive vs reactive strategic planning",
        "Standardized success metrics across organization",
        "Became model for other Expedia Group brands"
      ]
    },
    lessonsLearned: [
      "Executive tools must prioritize simplicity over features",
      "Direct C-suite partnership essential for adoption",
      "Mobile accessibility non-negotiable for modern executives"
    ]
  }
];