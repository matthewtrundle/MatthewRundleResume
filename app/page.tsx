import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Building2, Github, Linkedin, Mail, Radio, Workflow } from "lucide-react";

const projects = [
  {
    id: "manufacturing", number: "01", title: "Manufacturing execution", company: "Western Magnetics", status: "Built from the ground up · In production",
    description: "I built the manufacturing execution system currently running Western Magnetics’ end-to-end production process.",
    scope: ["Procurement", "Production", "Quality", "Supply", "Traceability"],
    need: "Run an entire factory — procurement, production, quality and supply — on one system with full traceability, at a company that was still coming out of stealth.",
    ownership: "Built the core infrastructure from the ground up. Partnered with cross-functional teams to understand their specific needs, and worked with mechatronics engineers to build custom controllers and integrations that pull live signals directly from imported production equipment, often reverse-engineering undocumented vendor protocols.",
    detailLabel: "Beyond the MES",
    detail: "Joined as employee #13 at an a16z-backed hard-tech startup shortly after its seed round and helped bring the company out of stealth. Alongside the MES: the company website, the NDA platform, the employee check-in/check-out system, and design and test tooling around motor development, including agentic hill-climb experiment loops run with frontier model teams.",
    result: "The MES runs Western Magnetics’ end-to-end manufacturing process, procurement through quality and supply, with 100% traceability across every aspect of the engineering pipeline.",
    stack: "Manufacturing execution · Equipment integration · Custom controllers · Traceability", icon: Building2, accent: "orange",
  },
  {
    id: "corelinq", number: "02", title: "Agentic communications", company: "CoreLinq", status: "Business communications platform",
    description: "I built the entire platform from the ground up: email, SMS, drip campaigns, cold and warm-lead calling, tied together through an agentic process with order tracking and fulfillment.",
    scope: ["Email / SMS / voice", "Drip campaigns", "Agentic follow-up", "Order tracking / fulfillment"],
    need: "Coordinate customer outreach, turn conversations into useful next steps, and work across several communication channels.",
    ownership: "Developed the whole platform: campaign orchestration, email and SMS, drip sequences, cold and warm-lead calling, AI inbox handling, scheduling, and the order tracking and fulfillment processes that close the loop.",
    detailLabel: "Inside the implementation",
    detail: "Conversation outcomes are checked before follow-up tasks are created. Recovery handling detects stalled campaign work, limits repeated retries and pauses campaigns that cannot recover. Human escalation supports cases that require intervention.",
    result: "Used to automate communications and support sales outreach for client businesses.",
    stack: "Next.js · TypeScript · Supabase · Inngest · Retell · Twilio", icon: Radio, accent: "blue",
  },
  {
    id: "scribe", number: "03", title: "Clinical documentation", company: "CoreLinq Scribe", status: "Explore the product demo",
    description: "I built a product for dental practices that tracks every patient interaction and turns it into a SOAP note with ICD codes, CDT codes and procedural notes.",
    scope: ["Encounter capture", "SOAP + ICD / CDT codes", "Review", "Predictive inventory"],
    need: "Give dentists complete, coded documentation without the after-hours charting, and keep the practice stocked for what is on the schedule.",
    ownership: "Built the scribe product end to end, plus an inventory management system with predictive analytics that cross-references upcoming appointments to keep the right inventory on hand and connects to suppliers to order automatically.",
    detailLabel: "Where AI fits",
    detail: "AI drafts the SOAP note, ICD and CDT codes and procedural notes from the encounter record. Notes remain editable, with review and approval states in the workflow. The product also includes claims, pre-authorizations and the predictive inventory system.",
    result: "A populated demo lets visitors explore encounters, draft notes, treatment plans and practice analytics.",
    stack: "Next.js · React · Supabase · Anthropic · OpenAI", icon: Workflow, accent: "green",
    link: "https://scribe-two-tau.vercel.app/api/demo/start", linkLabel: "Explore Scribe",
  },
];

const experience = [
  { years: "2026 — PRESENT", company: "Western Magnetics / Westmag", role: "Manufacturing Systems & Applied AI", text: "Employee #13 at an a16z-backed hard-tech startup; helped bring the company out of stealth. Built the manufacturing execution system from the ground up. It now runs the company’s end-to-end manufacturing process with 100% traceability across the engineering pipeline." },
  { years: "2025", company: "Domain Labs", role: "Founder, AI and SaaS Solutions", text: "Partnered with small businesses to build custom SaaS, websites and operating workflows, replacing dependencies on generic site builders and fragmented tools. Built CoreLinq Communications and CoreLinq Scribe from the ground up." },
  { years: "2019 — 2025", company: "Expedia Group / Vrbo", role: "Analytics and Data Science Leadership", text: "Built and managed a team of six data scientists. Led executive analytics, market segmentation, supply prioritization and commercial decision support, using tools including Databricks, Python and SQL." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top">Matthew Rundle<span>.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
        <a className="nav-contact" href="mailto:matthewtrundle@gmail.com">Let’s talk <ArrowUpRight size={16} /></a>
      </nav>
      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> MATTHEW RUNDLE · AUSTIN, TEXAS</p>
            <h1>Manufacturing systems.<br />Applied AI.</h1>
            <p className="hero-role">Manufacturing Systems &amp; Applied AI</p>
            <p className="hero-lede">I build the systems that run factories. Most recently, the manufacturing execution system running Western Magnetics’ end-to-end production process, with 100% traceability across the engineering pipeline.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
              <a className="button ghost" href="/Matthew_Rundle_Resume.pdf" download>Download résumé</a>
            </div>
            <p className="availability">Interested in manufacturing, robotics and hard-tech roles where software meets the floor.</p>
          </div>
          <figure className="hero-portrait">
            <Image src="/images/headshot.jpeg" alt="Matthew Rundle" width={480} height={600} priority />
            <figcaption><span>12+ years in systems &amp; data</span><span>Manufacturing · SaaS · Analytics</span></figcaption>
          </figure>
        </section>

        <section className="work-section" id="work">
          <div className="shell section-heading"><div><p className="section-kicker">SELECTED WORK</p><h2>Systems I’ve built.</h2></div><p>A factory’s execution system, an agentic communications platform, and clinical documentation.</p></div>
          <div className="shell project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card ${project.accent}`} key={project.id} id={project.id}>
                  <div className="project-index">{project.number}</div>
                  <div className="project-main">
                    <div className="project-title-row"><div><p className="project-status">{project.company} · {project.status}</p><h3>{project.title}</h3></div><div className="project-icon"><Icon size={27} /></div></div>
                    <p className="project-description">{project.description}</p>
                    <div className="scope-strip" aria-label="Product workflow">{project.scope.map((step) => <span key={step}>{step}</span>)}</div>
                    <details className="case-study" open>
                      <summary>Read the case study <span aria-hidden="true">+</span></summary>
                      <dl>
                        <div><dt>The need</dt><dd>{project.need}</dd></div>
                        <div><dt>My contribution</dt><dd>{project.ownership}</dd></div>
                        <div><dt>{project.detailLabel}</dt><dd>{project.detail}</dd></div>
                        <div><dt>The result</dt><dd>{project.result}</dd></div>
                      </dl>
                    </details>
                    <div className="project-footer"><span>{project.stack}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={17} /></a>}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="shell experience-grid">
            <div className="experience-aside"><p className="section-kicker">LEADERSHIP &amp; EXPERIENCE</p><h2>From business decisions to working systems.</h2><p>My experience spans leading a data science team, working with executives on commercial decisions, and building software around the needs of an operating business.</p></div>
            <div className="timeline">
              {experience.map((item) => <article key={item.company}><p className="years">{item.years}</p><div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.text}</p></div></article>)}
              <a className="text-link" href="/Matthew_Rundle_Resume.pdf">Read the full résumé <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="intro shell" id="about">
          <p className="section-kicker">HOW I WORK</p>
          <div><h2>Close to the business.<br />Close to the build.</h2><p>I work across product, data and operations: understanding the business problem, defining the workflow, and staying involved through implementation. I’m particularly interested in applied AI, robotics and advanced manufacturing.</p><div className="capability-row"><span>Manufacturing systems</span><span>Equipment integration</span><span>Agent workflows</span><span>Data leadership</span><span>Team building</span></div></div>
        </section>

        <section className="lab shell">
          <div className="lab-heading"><p className="section-kicker">FURTHER EXPLORATION</p><h2>Selected experiments.</h2></div>
          <div className="experiment-grid">
            <article className="experiment"><span>Python SDK</span><h3>AI image agent</h3><p>Contextual image generation with persistent preferences, tool chaining and retry handling.</p><a href="https://github.com/matthewtrundle/CLI-Gemini-image-generator-SDK" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></article>
            <article className="experiment"><span>Retrieval &amp; coordination</span><h3>Knowledge and agent systems</h3><p>Experiments in document retrieval and multi-agent deliberation, exploring how systems use evidence and surface disagreement.</p><a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer">Browse public repositories <ArrowUpRight size={16} /></a></article>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="shell footer-inner"><div><p className="section-kicker">MANUFACTURING SYSTEMS · APPLIED AI · DATA LEADERSHIP</p><h2>Let’s talk about<br />your team.</h2><p className="footer-context">Based in Austin. Interested in leading teams and building the software that runs physical operations.</p><a className="footer-email" href="mailto:matthewtrundle@gmail.com">matthewtrundle@gmail.com <ArrowUpRight size={22} /></a></div><div className="footer-links"><a href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="mailto:matthewtrundle@gmail.com"><Mail size={18} /> Email</a></div></div>
        <div className="shell copyright"><span>© 2026 Matthew Rundle</span><span>Austin, Texas</span></div>
      </footer>
    </>
  );
}
