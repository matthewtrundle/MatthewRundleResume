import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Bot, Boxes, Building2, Database, Github, Linkedin, Mail, Radio, Workflow } from "lucide-react";

const projects = [
  {
    number: "01", title: "CoreLinq", subtitle: "Agentic communications platform", status: "Private source · Production system",
    description: "A multi-tenant operating layer for customer communication. CoreLinq coordinates AI-assisted email, voice and SMS outreach, qualifies leads, books appointments, escalates edge cases and verifies outcomes in one workflow.",
    capabilities: ["Cross-channel campaign orchestration", "AI inbox and reply handling", "Voice agents and human escalation", "Scheduling, analytics and outcome verification"],
    stack: "Next.js · TypeScript · Supabase · Inngest · Retell · Twilio", icon: Radio, accent: "orange",
  },
  {
    number: "02", title: "CoreLinq Scribe", subtitle: "AI clinical documentation and practice operations", status: "Live interactive demo",
    description: "An end-to-end product for turning clinical activity into structured operational work. The demo includes encounters, AI-extracted SOAP notes, claims, pre-authorizations, inventory and workflow tracking in a populated practice.",
    capabilities: ["AI-assisted encounter documentation", "Claims and pre-authorization workflows", "Inventory and operational tracking", "Browser and mobile product surfaces"],
    stack: "Next.js · React · Supabase · Anthropic · OpenAI · Capacitor", icon: Workflow, accent: "green",
    link: "https://scribe-two-tau.vercel.app/demo", linkLabel: "Open the 60-second demo",
  },
  {
    number: "03", title: "Domain Labs", subtitle: "Custom AI and SaaS systems for small businesses", status: "Founder-led product studio",
    description: "A practical build studio for companies that had outgrown generic site builders and disconnected point solutions. Projects combined custom product design, operating workflows, automation and customer-facing software.",
    capabilities: ["Custom SaaS replacing fragmented tools", "Workflow and inventory applications", "Agent-enabled sales and communications", "Product strategy through production delivery"],
    stack: "Product strategy · AI systems · Full-stack delivery · Automation", icon: Boxes, accent: "blue",
  },
];

const experiments = [
  { title: "RAG knowledge assistant", text: "Evidence synthesis across a 69-document collection using embeddings, pgvector and Claude.", tag: "Retrieval systems" },
  { title: "AI image agent", text: "A Python SDK and CLI for contextual image generation, persistent preferences and resilient tool chaining.", tag: "Open-source SDK", link: "https://github.com/matthewtrundle/CLI-Gemini-image-generator-SDK" },
  { title: "Multi-agent deliberation", text: "A visible decision framework where specialized agents surface disagreement and work toward consensus.", tag: "Agent coordination" },
];

const experience = [
  { years: "2026 — PRESENT", company: "Westmag", role: "AI Systems and AI-Native Manufacturing Software", text: "Leading development of an AI-native operating system for U.S. drone motor manufacturing across ERP, MES, procurement, production, quality, traceability and factory operations." },
  { years: "2025", company: "Domain Labs", role: "Founder, AI and SaaS Solutions", text: "Partnered with small businesses to design and ship custom SaaS, workflow products and agent-driven communications systems." },
  { years: "2019 — 2025", company: "Expedia Group / Vrbo", role: "Analytics and Data Science Leadership", text: "Built and led a six-person data science team; established executive analytics used in major capital allocation decisions; and delivered systems spanning market prioritization, listing quality and commercial performance." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Matthew Rundle home">MR<span>/</span>AI</a>
        <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
        <a className="nav-contact" href="mailto:matthewtrundle@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> APPLIED AI · DATA · PRODUCT</p>
          <h1>I build AI systems that do the work.</h1>
          <p className="hero-lede">I turn ambiguous operating problems into products, agent workflows and decision systems — from factory software to customer communications and enterprise analytics.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See selected work <ArrowDownRight size={18} /></a>
            <a className="button ghost" href="/Matthew_Rundle_Applied_AI_Resume.pdf" download>Download résumé</a>
          </div>
          <div className="hero-meta" aria-label="Career summary">
            <div><strong>12+</strong><span>years in data and technology</span></div>
            <div><strong>3</strong><span>AI systems in production</span></div>
            <div><strong>Austin</strong><span>Texas</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="AI systems map">
          <div className="visual-grid" /><div className="system-label">OPERATING SYSTEM</div>
          <div className="system-core"><Bot size={28} /><span>AGENT LAYER</span></div>
          <div className="system-node node-a"><Building2 size={18} /><span>OPERATIONS</span></div>
          <div className="system-node node-b"><Database size={18} /><span>DATA</span></div>
          <div className="system-node node-c"><Workflow size={18} /><span>WORKFLOWS</span></div>
          <div className="system-node node-d"><Radio size={18} /><span>CHANNELS</span></div>
          <div className="signal signal-a" /><div className="signal signal-b" /><div className="signal signal-c" /><div className="signal signal-d" />
          <p className="visual-caption">STRATEGY → SYSTEM → OUTCOME</p>
        </div>
      </section>

      <section className="intro shell" id="about">
        <p className="section-kicker">WHAT I DO</p>
        <div><h2>Leadership without the handoff.</h2><p>I can define the opportunity with executives, map the operating model with domain experts, and stay close enough to the implementation to make sure the product works. My background connects enterprise analytics leadership with hands-on AI product development.</p></div>
      </section>

      <section className="work-section" id="work">
        <div className="shell section-heading"><div><p className="section-kicker">SELECTED SYSTEMS</p><h2>Built for real operations.</h2></div><p>Production products and founder-led builds, not concept mockups.</p></div>
        <div className="shell project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-index">{project.number}</div>
              <div className="project-main">
                <div className="project-title-row"><div><p className="project-status">{project.status}</p><h3>{project.title}</h3><h4>{project.subtitle}</h4></div><div className="project-icon"><Icon size={27} /></div></div>
                <p className="project-description">{project.description}</p>
                <ul>{project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
                <div className="project-footer"><span>{project.stack}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={17} /></a>}</div>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="lab shell">
        <div className="lab-heading"><p className="section-kicker">LAB WORK</p><h2>Smaller builds. Specific questions.</h2></div>
        <div className="experiment-grid">{experiments.map((item) => <article className="experiment" key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>{item.link && <a href={item.link} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a>}</article>)}</div>
      </section>

      <section className="experience-section" id="experience">
        <div className="shell experience-grid">
          <div className="experience-aside"><p className="section-kicker">EXPERIENCE</p><h2>Enterprise scale. Builder speed.</h2><p>Most recently focused on AI-native manufacturing, after building products through Domain Labs and leading data science and analytics at Vrbo.</p></div>
          <div className="timeline">
            {experience.map((item) => <article key={`${item.company}-${item.years}`}><p className="years">{item.years}</p><div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.text}</p></div></article>)}
            <a className="text-link" href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer">Full history on LinkedIn <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="profile shell">
        <div className="portrait-wrap"><Image src="/images/headshot.jpeg" alt="Matthew Rundle" width={480} height={600} className="portrait" /><span>AUSTIN · TEXAS</span></div>
        <div className="profile-copy"><p className="section-kicker">WORKING STYLE</p><blockquote>“The useful AI work starts after the demo — when it has to fit the operation, survive edge cases and earn trust.”</blockquote><p>I work best on messy, cross-functional problems where product, data and operations have to become one system. I’m particularly interested in applied AI, robotics, advanced manufacturing and AI-enabled software leadership.</p><div className="capability-row"><span>AI product strategy</span><span>Agent workflows</span><span>Data leadership</span><span>Team building</span><span>Operating systems</span><span>Executive communication</span></div></div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner"><div><p className="section-kicker">LET’S BUILD SOMETHING USEFUL</p><h2>Have an ambitious AI problem?</h2><a className="footer-email" href="mailto:matthewtrundle@gmail.com">matthewtrundle@gmail.com <ArrowUpRight size={22} /></a></div><div className="footer-links"><a href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="mailto:matthewtrundle@gmail.com"><Mail size={18} /> Email</a></div></div>
        <div className="shell copyright"><span>© 2026 Matthew Rundle</span><span>Applied AI · Data · Product</span></div>
      </footer>
    </main>
  );
}
