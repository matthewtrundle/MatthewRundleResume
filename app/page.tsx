import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  where: string;
  status: string;
  lede: string;
  rows: { label: string; text: string }[];
  result: string;
  stack: string;
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    id: "manufacturing",
    number: "01",
    title: "The system that runs the factory",
    where: "Western Magnetics",
    status: "In production since 2026",
    lede: "A manufacturing execution system, built from the ground up, now running Western Magnetics’ end-to-end production process: procurement, production, quality and supply, with 100% traceability across every aspect of the engineering pipeline.",
    rows: [
      { label: "The need", text: "Run an entire motor factory on one system with full traceability, at a company that was still coming out of stealth." },
      { label: "What I built", text: "The core infrastructure from the ground up. I partnered with each team to understand what they actually needed, and worked with mechatronics engineers on custom controllers and integrations that pull live signals directly from imported production equipment, often reverse-engineering undocumented vendor protocols." },
      { label: "Beyond the MES", text: "Joined as employee #13 at an a16z-backed hard-tech startup shortly after its seed round and helped bring the company out of stealth. Also built the company website, the NDA platform, the employee check-in system, and design and test tooling around motor development, including agentic hill-climb experiment loops run with frontier model teams." },
    ],
    result: "Every motor, part and process step is traceable end to end.",
    stack: "Manufacturing execution, equipment integration, custom controllers, traceability",
  },
  {
    id: "corelinq",
    number: "02",
    title: "Agentic customer communications",
    where: "CoreLinq",
    status: "Used by client businesses",
    lede: "The entire platform, built from the ground up: email, SMS, drip campaigns, cold and warm-lead calling, tied together through an agentic process with order tracking and fulfillment.",
    rows: [
      { label: "The need", text: "Coordinate customer outreach, turn conversations into useful next steps, and work across several communication channels without a sales team babysitting it." },
      { label: "What I built", text: "Campaign orchestration, email and SMS, drip sequences, cold and warm-lead calling, AI inbox handling, scheduling, and the order tracking and fulfillment processes that close the loop." },
      { label: "How it holds up", text: "Conversation outcomes are checked before follow-up tasks are created. Stalled campaigns are detected, retries are bounded, and anything that cannot recover pauses and escalates to a person." },
    ],
    result: "Automates communications and supports sales outreach for client businesses.",
    stack: "Next.js, TypeScript, Supabase, Inngest, Retell, Twilio",
  },
  {
    id: "scribe",
    number: "03",
    title: "Clinical documentation for dental practices",
    where: "CoreLinq Scribe",
    status: "Live demo",
    lede: "Tracks every patient interaction and turns it into a SOAP note with ICD codes, CDT codes and procedural notes, plus an inventory system that knows what next week’s appointments will need.",
    rows: [
      { label: "The need", text: "Give dentists complete, coded documentation without after-hours charting, and keep the practice stocked for what is on the schedule." },
      { label: "What I built", text: "The scribe product end to end, and an inventory management system with predictive analytics that cross-references upcoming appointments to keep the right inventory on hand and connects to suppliers to order automatically." },
      { label: "Where AI fits", text: "AI drafts the SOAP note, codes and procedural notes from the encounter record. Notes stay editable, with review and approval states. Claims and pre-authorizations are in the same workflow." },
    ],
    result: "A populated demo lets you walk through encounters, draft notes, treatment plans and practice analytics.",
    stack: "Next.js, React, Supabase, Anthropic, OpenAI",
    link: { href: "https://scribe-two-tau.vercel.app/api/demo/start", label: "Open the Scribe demo" },
  },
];

const experience = [
  { years: "2026 –", company: "Western Magnetics", role: "Manufacturing Systems & Applied AI", text: "Employee #13 at an a16z-backed hard-tech startup; helped bring the company out of stealth. Built the manufacturing execution system from the ground up. It now runs the company’s end-to-end manufacturing process with 100% traceability across the engineering pipeline." },
  { years: "2025", company: "Domain Labs", role: "Founder", text: "Partnered with small businesses to build custom SaaS, websites and operating workflows, replacing generic site builders and fragmented tools. Built CoreLinq Communications and CoreLinq Scribe from the ground up." },
  { years: "2019 – 2025", company: "Expedia Group / Vrbo", role: "Analytics and Data Science Leadership", text: "Built and managed a team of six data scientists. Led executive analytics, market segmentation, supply prioritization and commercial decision support with Databricks, Python and SQL." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="nav shell" aria-label="Primary">
        <a className="wordmark" href="#top">MR</a>
        <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
        <a className="nav-contact" href="mailto:matthewtrundle@gmail.com">Email me</a>
      </nav>

      <main id="main">
        <section className="hero shell" id="top">
          <h1 className="hero-name" aria-label="Matthew Rundle">
            <span className="word">Matthew</span>
            <span className="hero-photo" aria-hidden="true">
              <Image src="/images/headshot.jpeg" alt="" width={480} height={600} priority />
            </span>
            <span className="word">Rundle</span>
          </h1>
          <div className="hero-under">
            <div className="hero-copy">
              <p className="hero-claim">I build the software that runs factories.</p>
              <p className="hero-lede">Manufacturing systems and applied AI. Most recently the manufacturing execution system behind Western Magnetics’ end-to-end production process. Before that, a decade leading data science and analytics teams. Austin, Texas.</p>
              <div className="hero-actions">
                <a className="button primary" href="#work">See the work</a>
                <a className="button ghost" href="/Matthew_Rundle_Resume.pdf" download>Download résumé</a>
              </div>
            </div>
            <aside className="now-tile">
              <p className="now-label">Now</p>
              <p className="now-text">Running the MES at Western Magnetics. Open to manufacturing, robotics and hard-tech roles where software meets the floor.</p>
            </aside>
          </div>
        </section>

        <section className="work" id="work">
          <div className="shell work-heading">
            <h2>Work</h2>
            <p>Three systems, all built from scratch, all in use. The first is the one that matters most.</p>
          </div>
          {projects.map((project) => (
            <article className={`chapter ${project.number === "01" ? "chapter-flagship" : ""}`} key={project.id} id={project.id}>
              <div className="shell chapter-grid">
                <div className="chapter-side">
                  <p className="chapter-number">{project.number}</p>
                  <p className="chapter-where">{project.where}<br />{project.status}</p>
                </div>
                <div className="chapter-body">
                  <h3>{project.title}</h3>
                  <p className="chapter-lede">{project.lede}</p>
                  <dl className="chapter-rows">
                    {project.rows.map((row) => (
                      <div key={row.label}><dt>{row.label}</dt><dd>{row.text}</dd></div>
                    ))}
                  </dl>
                  <p className="chapter-result">{project.result}</p>
                  <div className="chapter-foot">
                    <span>{project.stack}</span>
                    {project.link && <a href={project.link.href} target="_blank" rel="noreferrer">{project.link.label} <ArrowUpRight size={16} /></a>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="experience" id="experience">
          <div className="shell experience-grid">
            <div className="experience-aside">
              <h2>From business decisions to working systems.</h2>
              <p>I have led a data science team, worked with executives on commercial decisions, and built software around the needs of an operating business. The last two years have been the building part.</p>
              <a className="text-link" href="/Matthew_Rundle_Resume.pdf">Full résumé (PDF) <ArrowUpRight size={15} /></a>
            </div>
            <ol className="timeline">
              {experience.map((item) => (
                <li key={item.company}><p className="years">{item.years}</p><div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.text}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about shell" id="about">
          <h2>Close to the business.<br />Close to the build.</h2>
          <div>
            <p>I work across product, data and operations: understanding the business problem, defining the workflow, and staying in it through implementation. The work I want to keep doing is the kind where software has to agree with a physical process.</p>
            <ul className="capabilities"><li>Manufacturing systems</li><li>Equipment integration</li><li>Agent workflows</li><li>Data leadership</li><li>Team building</li></ul>
          </div>
        </section>

        <section className="lab shell">
          <h2>Experiments</h2>
          <div className="experiment-grid">
            <article className="experiment"><h3>AI image agent</h3><p>Contextual image generation with persistent preferences, tool chaining and retry handling. Python SDK.</p><a href="https://github.com/matthewtrundle/CLI-Gemini-image-generator-SDK" target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} /></a></article>
            <article className="experiment"><h3>Knowledge and agent systems</h3><p>Document retrieval and multi-agent deliberation: how systems use evidence and surface disagreement.</p><a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer">Public repositories <ArrowUpRight size={15} /></a></article>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="shell footer-inner">
          <div>
            <h2>Let’s talk about your factory.</h2>
            <p className="footer-context">Based in Austin. Interested in leading teams and building the software that runs physical operations.</p>
            <a className="footer-email" href="mailto:matthewtrundle@gmail.com">matthewtrundle@gmail.com</a>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
            <a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a href="/Matthew_Rundle_Resume.pdf">Résumé</a>
          </div>
        </div>
        <div className="shell copyright"><span>© 2026 Matthew Rundle</span><span>Austin, Texas</span></div>
      </footer>
    </>
  );
}
