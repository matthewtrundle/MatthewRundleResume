// One entry per resume variant. Every claim traces to output/application-system/EVIDENCE_BANK.md;
// the only numbers allowed are the team of six, "more than 15 variables", and dates.

export type WorkKey = "mes" | "corelinq" | "scribe";

export type Stat = { value: string; label: string };
export type Pillar = { label: string; text: string };
export type Faq = { q: string; a: string };
export type FlowStep = { tag: string; title: string; detail: string };

export type Track = {
  slug: string;
  short: string;
  title: string;
  resumePdf: string;
  accent: string;
  eyebrow: string;
  headline: string;
  lede: string;
  manifesto: string;
  pillars: [Pillar, Pillar, Pillar];
  flowTitle: string;
  flow: FlowStep[];
  stats: [Stat, Stat];
  statNote: string;
  work: WorkKey[];
  workEmphasis: Partial<Record<WorkKey, string[]>>;
  showMesDemo: boolean;
  showArchitecture: boolean;
  leadFirst: boolean;
  skills: { label: string; text: string }[];
  faq: Faq[];
};

export const tracks: Track[] = [
  {
    slug: "manufacturing",
    short: "Manufacturing",
    title: "Manufacturing Software and Applied AI",
    resumePdf: "/resumes/Matthew_Rundle_Manufacturing_Software.pdf",
    accent: "#315e51",
    eyebrow: "MES / ERP / Software that runs the floor",
    headline: "Software that runs the factory floor.",
    lede: "I built and deployed the MES and ERP running Western Magnetics' production, quality and supply workflows, working with production staff from first prototype through rollout.",
    manifesto: "Built around how the work happens.",
    pillars: [
      { label: "Work orders, not spreadsheets", text: "Work-order, routing and station workflows with role-based operator interfaces." },
      { label: "Equipment in the loop", text: "Interfaces that carry live machine signals into the MES, alongside the mechatronics engineers who built the controllers." },
      { label: "Traceable by default", text: "An event stream records production state changes, from incoming inspection to shipment." },
    ],
    flowTitle: "From the floor to the business",
    flow: [
      { tag: "FLOOR", title: "Factory devices", detail: "Machines, controllers and test stations" },
      { tag: "EDGE", title: "Edge device", detail: "Carries machine signals into the MES" },
      { tag: "MES", title: "Execution", detail: "Work orders, routings, quality, lots" },
      { tag: "ERP", title: "Business", detail: "Purchasing, inventory, shipping" },
    ],
    stats: [
      { value: "MES + ERP", label: "Built from scratch and deployed at Western Magnetics." },
      { value: "End to end", label: "Production, quality, purchasing, inventory and shipping in one system." },
    ],
    statNote: "Western Magnetics, 2026 to present",
    work: ["mes", "corelinq", "scribe"],
    workEmphasis: {
      mes: [
        "Quality checks, nonconformance records and per-unit testing linked to the build.",
        "Material tracking from incoming inspection through lots, FIFO, BOM consumption and kitting.",
        "An agentic failure-analysis workbench connecting test results to evidence-linked conclusions.",
      ],
    },
    showMesDemo: true,
    showArchitecture: true,
    leadFirst: false,
    skills: [
      { label: "Manufacturing", text: "MES and ERP, work orders and routings, equipment integration, quality records, material tracking and traceability" },
      { label: "Engineering", text: "TypeScript, Python, SQL, Next.js, React, PostgreSQL, Prisma, Docker and API integration" },
      { label: "Applied AI", text: "LLM APIs, agent workflows, evidence-linked agent traces, review and hardening of AI-generated code" },
    ],
    faq: [
      { q: "Did you build the equipment controllers?", a: "No. Mechatronics engineers built the controllers. I built the interfaces that carry their live machine signals into the MES, and the workflows that use them." },
      { q: "How did the system get adopted on the floor?", a: "I worked directly with production staff from the first prototype through integration, hardening and rollout, translating how they actually worked into the software they use." },
      { q: "What does traceability look like?", a: "Work orders, routings and stations write to an event stream that records production state changes. Quality records, per-unit tests and material lots link back to the build." },
      { q: "Where does AI fit?", a: "Two places: AI coding agents during development, with me owning review and hardening, and an agentic failure-analysis workbench that ties conclusions back to source evidence." },
    ],
  },
  {
    slug: "applied-ai",
    short: "Applied AI",
    title: "Applied AI and Solutions Engineering",
    resumePdf: "/resumes/Matthew_Rundle_Applied_AI_Solutions.pdf",
    accent: "#35598a",
    eyebrow: "Applied AI / Workflows into working software",
    headline: "AI that ships into real workflows.",
    lede: "I turn operational workflows into working applications: a production MES, a multi-channel communications platform and a clinical documentation product, each built from system design through delivery.",
    manifesto: "Verify before you act.",
    pillars: [
      { label: "Outcomes, not strings", text: "Check what actually happened in a conversation before creating the follow-up task." },
      { label: "Bounded recovery", text: "Detect stalled work, limit retries and escalate to a person when the system should not guess." },
      { label: "Humans approve", text: "AI drafts; people edit, review and approve. Review is part of the design, not an afterthought." },
    ],
    flowTitle: "The agent loop",
    flow: [
      { tag: "IN", title: "Event", detail: "Email, SMS, voice, test result" },
      { tag: "AGENT", title: "Orchestrate", detail: "Plan the next action" },
      { tag: "VERIFY", title: "Check outcome", detail: "Confirm before follow-up" },
      { tag: "HUMAN", title: "Escalate", detail: "Review when confidence is low" },
    ],
    stats: [
      { value: "3", label: "Systems designed and built end to end." },
      { value: "6", label: "Data scientists built and managed at Expedia Group." },
    ],
    statNote: "MES at Western Magnetics, CoreLinq Communications, CoreLinq Scribe",
    work: ["corelinq", "mes", "scribe"],
    workEmphasis: {
      mes: [
        "Built on Next.js, PostgreSQL, Prisma and Docker with API boundaries and an audit trail for state changes.",
        "Used AI coding agents throughout development while owning code review, refinement and hardening.",
        "An agentic failure-analysis workbench with conclusions traceable to source evidence and agent activity.",
      ],
    },
    showMesDemo: true,
    showArchitecture: false,
    leadFirst: false,
    skills: [
      { label: "AI systems", text: "LLM APIs, retrieval-augmented generation, agent orchestration, outcome verification and human review workflows" },
      { label: "Engineering", text: "Python, SQL, TypeScript, Next.js, React, PostgreSQL, Prisma, Docker and API integration" },
      { label: "Delivery", text: "System design, data modeling, stakeholder collaboration, code review and software rollout" },
    ],
    faq: [
      { q: "How do you keep agents from doing the wrong thing?", a: "Verify outcomes before acting, bound retries, and route to a person when the system is unsure. CoreLinq checks conversation outcomes before creating tasks and escalates stalled work." },
      { q: "Do you work directly with customers?", a: "Yes. Through Domain Labs I partnered with small businesses to design and build their software, owning system design, data modeling, API design and delivery." },
      { q: "How do you use AI coding tools?", a: "Throughout development, with me owning code review, refinement and hardening of what they generate. The MES was built this way." },
      { q: "What's your data background?", a: "From 2019 to 2025 at Expedia Group and Vrbo, leading supply and commercial analytics, including building and managing a team of six data scientists." },
    ],
  },
  {
    slug: "ai-product",
    short: "AI Product",
    title: "AI Product and Software Delivery",
    resumePdf: "/resumes/Matthew_Rundle_AI_Product_Delivery.pdf",
    accent: "#76477a",
    eyebrow: "Product / From customer workflow to shipped",
    headline: "Products built around the work.",
    lede: "I build products by starting with the customer's workflow: a factory's production process, a sales team's follow-up, a dental practice's charting. Then I stay involved through delivery.",
    manifesto: "Start with the workflow.",
    pillars: [
      { label: "Sit with the users", text: "Production staff, small-business owners and clinicians shaped each product from the first prototype." },
      { label: "Design the handoffs", text: "Drafts, reviews, approvals and escalations are product decisions, not edge cases." },
      { label: "Own the delivery", text: "System design, data model and APIs through rollout, not a spec thrown over the wall." },
    ],
    flowTitle: "How a product gets built",
    flow: [
      { tag: "01", title: "Workflow", detail: "How the work actually happens" },
      { tag: "02", title: "Prototype", detail: "Put something real in front of users" },
      { tag: "03", title: "Harden", detail: "Integrate, review, iterate" },
      { tag: "04", title: "Roll out", detail: "Software people use daily" },
    ],
    stats: [
      { value: "3", label: "Products taken from problem to working software." },
      { value: "15+", label: "Variables in the market segmentation behind acquisition priorities." },
    ],
    statNote: "Commercial analytics leadership at Expedia Group, 2019–2025",
    work: ["scribe", "corelinq", "mes"],
    workEmphasis: {
      mes: [
        "Worked directly with production staff from prototype through integration, hardening and rollout.",
        "Work-order, routing and station workflows with role-based operator interfaces.",
      ],
    },
    showMesDemo: false,
    showArchitecture: false,
    leadFirst: false,
    skills: [
      { label: "Product delivery", text: "Workflow design, system and API design, data modeling, stakeholder collaboration and software rollout" },
      { label: "AI products", text: "LLM APIs, agent workflows, outcome verification and human editing and approval workflows" },
      { label: "Business", text: "Commercial prioritization, executive reporting, segmentation, Python and SQL" },
    ],
    faq: [
      { q: "Have you held a formal PM title?", a: "No. I've owned products as the builder and founder: deciding what to build, designing the workflow and shipping it. Before that I led commercial analytics that informed product and business priorities." },
      { q: "How do you decide what to build?", a: "Start from the workflow and the decision it supports. At Expedia that meant segmentation and executive analytics; in my products it means watching how the work happens first." },
      { q: "How do you handle AI output quality?", a: "Design the review into the product. Scribe drafts notes and codes; clinicians edit, review and approve. CoreLinq verifies outcomes before acting." },
      { q: "Can you work with engineering teams?", a: "I am one. I build the systems I design, and I've led a team of six data scientists with shared Python and SQL standards." },
    ],
  },
  {
    slug: "ai-transformation",
    short: "AI Transformation",
    title: "Applied AI and Operational Transformation",
    resumePdf: "/resumes/Matthew_Rundle_AI_Transformation.pdf",
    accent: "#8a5626",
    eyebrow: "Operations / AI where it earns its place",
    headline: "Operational AI, adopted by people.",
    lede: "I translate operational needs into software and help leaders use data to make decisions. Most recently: rolling out a production MES alongside the people who run the floor.",
    manifesto: "Adoption is the deliverable.",
    pillars: [
      { label: "Work with the floor", text: "Built Western Magnetics' MES with production staff, from prototype through rollout." },
      { label: "Connect the business", text: "Production, procurement, quality and traceability through shared workflows and operational data." },
      { label: "Inform the executives", text: "Established an executive analytics function for commercial strategy and resource allocation." },
    ],
    flowTitle: "How change sticks",
    flow: [
      { tag: "LISTEN", title: "Operators", detail: "Map how the work is done today" },
      { tag: "BUILD", title: "Workflow", detail: "Software shaped to that work" },
      { tag: "ROLL", title: "Rollout", detail: "Harden with the people using it" },
      { tag: "INFORM", title: "Leaders", detail: "Data that changes decisions" },
    ],
    stats: [
      { value: "6", label: "Data scientists built and managed at Expedia Group." },
      { value: "12+", label: "Years across analytics, team leadership and software delivery." },
    ],
    statNote: "Expedia Group / Vrbo, National Instruments, The Advisory Board Company",
    work: ["mes", "corelinq", "scribe"],
    workEmphasis: {
      mes: [
        "Worked directly with production staff from prototype through integration, hardening and rollout.",
        "Connected production, procurement, quality, traceability and factory operations through shared workflows.",
        "Used AI coding agents throughout development while owning review and hardening.",
      ],
    },
    showMesDemo: false,
    showArchitecture: true,
    leadFirst: false,
    skills: [
      { label: "Operational delivery", text: "Workflow and system design, stakeholder collaboration, integrations and software rollout" },
      { label: "AI implementation", text: "LLM APIs, agent orchestration, human review workflows and AI-assisted development" },
      { label: "Decision support", text: "Executive reporting, commercial prioritization, segmentation and data modeling" },
    ],
    faq: [
      { q: "Have you run an enterprise change program?", a: "Not as a formal program owner. My transformation work is hands-on: building and rolling out the systems, with the people who use them, and running analytics that executives relied on." },
      { q: "How do you get people to adopt new software?", a: "Build it with them. The MES went from prototype to rollout with production staff involved throughout, so it reflected how they actually worked." },
      { q: "Where should a company start with AI?", a: "With a workflow that has a clear outcome and a clear person to review it. AI drafts or decides; the system verifies; a person approves when it matters." },
      { q: "How do you work with executives?", a: "At Expedia I established an executive analytics function and integrated disparate data sources so leaders made decisions from the same numbers." },
    ],
  },
  {
    slug: "data-leadership",
    short: "Data Leadership",
    title: "Data and Analytics Leadership",
    resumePdf: "/resumes/Matthew_Rundle_Data_Analytics_Leadership.pdf",
    accent: "#1f6070",
    eyebrow: "Data / Useful when it changes a decision",
    headline: "Data that changes a decision.",
    lede: "I built and managed a team of six data scientists at Expedia Group and established the executive reporting behind market prioritization and resource allocation. Now I build the software, too.",
    manifesto: "Build the team. Inform the call.",
    pillars: [
      { label: "Build the team", text: "Built and managed six data scientists with shared Python and SQL standards." },
      { label: "Focus the effort", text: "Segmentation across more than 15 variables to prioritize high-value property acquisition." },
      { label: "Inform executives", text: "An executive analytics function for commercial strategy and resource allocation." },
    ],
    flowTitle: "From data to decision",
    flow: [
      { tag: "SRC", title: "Sources", detail: "Disparate commercial data" },
      { tag: "MODEL", title: "Segment", detail: "15+ variables, prioritized" },
      { tag: "REPORT", title: "Executive view", detail: "One consistent set of numbers" },
      { tag: "ACT", title: "Decision", detail: "Strategy and resource allocation" },
    ],
    stats: [
      { value: "6", label: "Data scientists built and managed." },
      { value: "15+", label: "Variables in the acquisition segmentation." },
    ],
    statNote: "Expedia Group / Vrbo, Supply and Commercial Data Science, 2019–2025",
    work: ["mes", "corelinq", "scribe"],
    workEmphasis: {},
    showMesDemo: false,
    showArchitecture: false,
    leadFirst: true,
    skills: [
      { label: "Analytics", text: "Python, SQL, Tableau, segmentation, experimentation, statistical analysis and analytics pipelines" },
      { label: "Leadership", text: "Technical team development, shared analytics standards, executive communication and stakeholder management" },
      { label: "Data and systems", text: "Data modeling, reporting integration, PostgreSQL, API design and operational workflows" },
    ],
    faq: [
      { q: "What did your team work on?", a: "Supply and commercial analytics: market segmentation, listing quality scoring, regional reporting and executive analytics for strategy and resource allocation." },
      { q: "How did you lead the team?", a: "Built it, managed it, and set shared Python and SQL standards so analytics work was consistent and reviewable." },
      { q: "Why the recent software work?", a: "It's the same instinct: get data into the decision. At Western Magnetics that meant building the system that records production itself." },
      { q: "Are you hands-on?", a: "Yes. I write Python and SQL, and I've built production software in TypeScript and PostgreSQL since leaving Expedia." },
    ],
  },
];

export const trackBySlug = (slug: string): Track | undefined => tracks.find(t => t.slug === slug);
