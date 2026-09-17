import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import MESPreview, { ManufacturingArchitecture } from "./mes-preview";

const experience = [
  { years: "2026 — PRESENT", company: "Western Magnetics", role: "Manufacturing Systems & Applied AI", text: "Joined as employee #13. Built the manufacturing execution system and the integrations connecting software to production equipment." },
  { years: "2025", company: "Domain Labs", role: "Founder · AI & SaaS", text: "Built custom software for operating businesses, including CoreLinq Communications and CoreLinq Scribe." },
  { years: "2019 — 2025", company: "Expedia Group / Vrbo", role: "Analytics & Data Science Leadership", text: "Built and managed a team of six data scientists. Led executive analytics, market segmentation, supply prioritization and commercial decision support." },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="wordmark" href="#top">Matthew Rundle<span> / </span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
      <a className="nav-contact" href="mailto:matthewtrundle@gmail.com">Let’s talk <ArrowUpRight size={16} /></a>
    </nav>
    <main id="main">
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">MATTHEW RUNDLE / AUSTIN, TEXAS</p>
          <h1>Manufacturing systems.<br />Applied AI.</h1>
          <p className="hero-lede">I’m Matthew Rundle. I connect equipment, data and people through software built around how the work actually happens.</p>
          <p className="hero-context">Most recently: the manufacturing execution system running Western Magnetics’ production, quality and supply operations.</p>
          <div className="hero-actions"><a className="button primary" href="#work">See the work <ArrowDownRight size={18} /></a><a className="button ghost" href="/Matthew_Rundle_Resume.pdf" download>Download résumé <ArrowUpRight size={16} /></a></div>
          <p className="availability"><span /> Austin, Texas · Open to manufacturing, robotics &amp; hard-tech roles</p>
        </div>
        <figure className="hero-portrait"><Image src="/images/headshot.jpeg" alt="Matthew Rundle" width={800} height={800} sizes="(max-width: 700px) 90vw, 420px" preload /><figcaption><strong>Matthew Rundle</strong><span>Builder. Team leader. Hands-on with the work.</span></figcaption></figure>
      </section>
      <section className="work-section" id="work">
        <div className="shell section-heading"><div><p className="eyebrow">SELECTED WORK / 01—03</p><h2>Built to be used.</h2></div><p>Three systems. Different businesses.<br />Ownership from the problem through production.</p></div>
        <article className="manufacturing-story shell" id="manufacturing">
          <div className="story-meta"><span>01 / WESTERN MAGNETICS</span><span className="live-label"><i /> IN PRODUCTION</span></div>
          <div className="story-opening"><div><h3>A factory’s operations,<br />connected in software.</h3><p className="story-deck">I built the manufacturing execution system from the ground up. It now runs procurement, production, quality and supply across the business.</p></div><aside className="outcome"><strong>100%</strong><p>Traceability across the engineering pipeline.</p><span>ONE SYSTEM, END TO END</span></aside></div>
          <div className="story-body">
            <div className="story-context"><p className="eyebrow">THE SETTING</p><p>I joined an a16z-backed hard-tech startup as employee #13, shortly after its seed round, and helped bring the company out of stealth.</p><p>The job was to build software around a factory’s real operating needs.</p></div>
            <div className="story-contributions">
              <section><span>01</span><div><h4>Built the system around the work.</h4><p>Partnered with teams across the business to connect purchasing, production, quality and supply in one manufacturing execution system.</p></div></section>
              <section><span>02</span><div><h4>Brought the equipment into the loop.</h4><p>Worked with mechatronics engineers on custom controllers that pull live signals from production equipment, often reverse-engineering undocumented vendor protocols.</p></div></section>
              <section><span>03</span><div><h4>Built beyond the factory software.</h4><p>Delivered motor design and test tooling, including agentic experiment loops, plus the company website, NDA platform and employee check-in system.</p></div></section>
            </div>
          </div>
          <MESPreview />
          <ManufacturingArchitecture />
        </article>
        <div className="shell product-stories">
          <article className="product-story" id="corelinq">
            <div className="product-copy">
            <div className="story-meta"><span>02 / CORELINQ</span><span>COMMUNICATIONS</span></div>
            <h3>A conversation should<br />lead somewhere.</h3>
            <p className="product-deck">I built a business communications platform that connects outreach to follow-up, orders and fulfillment.</p>
            <div className="product-sequence" aria-label="CoreLinq workflow"><span>Email / SMS / voice</span><ArrowUpRight size={18} /><strong>Follow-up &amp; fulfillment</strong></div>
            <h4>The whole platform, from the ground up.</h4><p>Email, SMS, drip campaigns, cold and warm-lead calling, AI inbox handling and scheduling—connected through an agentic process.</p>
            <h4>Built for the parts that don’t go to plan.</h4><p>Checks conversation outcomes before creating tasks. Detects stalled work, limits retries and brings in a person when needed.</p>
            <p className="story-result"><strong>In use:</strong> automating communications and supporting sales outreach for client businesses.</p>
            <p className="tech-line">Next.js · TypeScript · Supabase · Inngest · Retell · Twilio</p>
            </div><figure className="product-image"><div className="screen-label"><span>CORELINQ / OUTBOUND</span><span>PRODUCT VIEW</span></div><div className="screen-window"><Image src="/images/products/corelinq-campaign.png" alt="CoreLinq campaign interface showing outreach progress and call outcomes in a demo workspace" width={1680} height={992} sizes="(max-width: 700px) 90vw, 650px" /></div><figcaption>Actual product screenshot · synthetic demo data</figcaption></figure>
          </article>
          <article className="product-story" id="scribe">
            <div className="product-copy">
            <div className="story-meta"><span>03 / CORELINQ SCRIBE</span><span>DENTAL PRACTICES</span></div>
            <h3>Less time charting.<br />A better-prepared practice.</h3>
            <p className="product-deck">I built a dental documentation product that turns patient encounters into structured notes and connects the schedule to inventory needs.</p>
            <div className="product-sequence" aria-label="Scribe workflow"><span>Patient encounter</span><ArrowUpRight size={18} /><strong>Draft → review → approve</strong></div>
            <h4>Useful drafts, with review built in.</h4><p>Generates SOAP notes, ICD and CDT codes, and procedural notes. Clinicians can edit, review and approve the documentation.</p>
            <h4>Prepare for what’s on the schedule.</h4><p>Predictive inventory cross-references upcoming appointments and connects to suppliers for automatic ordering. The product also includes claims and pre-authorizations.</p>
            <a className="story-demo" href="https://scribe-two-tau.vercel.app/demo" target="_blank" rel="noreferrer">Explore the populated demo <ArrowUpRight size={18} /></a>
            <p className="tech-line">Next.js · React · Supabase · Anthropic · OpenAI</p>
            </div><figure className="product-image scribe-image"><div className="screen-label"><span>CORELINQ SCRIBE / PRACTICE</span><span>PRODUCT VIEW</span></div><div className="screen-window"><Image src="/images/products/scribe-dashboard.png" alt="CoreLinq Scribe development screenshot showing the Demo Doctor practice dashboard" width={1343} height={1900} sizes="(max-width: 700px) 90vw, 650px" /></div><figcaption>Development screenshot · demo practice</figcaption></figure>
          </article>
        </div>
      </section>
      <section className="experience-section shell" id="experience">
        <div className="section-heading"><div><p className="eyebrow">EXPERIENCE</p><h2>Build it. Lead it.<br />Understand the business.</h2></div><a className="text-link" href="/Matthew_Rundle_Resume.pdf">Full résumé <ArrowUpRight size={17} /></a></div>
        <article className="leadership-story"><div className="leadership-copy"><p className="eyebrow">EXPEDIA GROUP / VRBO · 2019–2025</p><h3>Data is useful when<br />it changes a decision.</h3><p>I built and managed a team of six data scientists, working with executives on the commercial decisions behind a travel business.</p><ul><li><strong>Understand the market.</strong> Market segmentation and executive analytics.</li><li><strong>Focus the effort.</strong> Supply prioritization and commercial decision support.</li><li><strong>Build the team.</strong> Data science leadership, with Databricks, Python and SQL.</li></ul></div></article>
        <div className="timeline">{experience.map(item => <article key={item.company}><p className="years">{item.years}</p><div><h3>{item.company}</h3><h4>{item.role}</h4></div><p>{item.text}</p></article>)}</div>
      </section>
      <section className="about-section" id="about"><div className="shell about-grid"><div><p className="eyebrow">HOW I WORK</p><h2>Close to the business.<br />Close to the build.</h2></div><div><p>I work across product, data and operations: understanding the problem, defining the workflow and staying involved through implementation.</p><p>My background spans leading data scientists, supporting executive decisions and building the tools an operating business depends on.</p><div className="capabilities"><span>Equipment integration</span><span>Applied AI</span><span>Data leadership</span><span>Team building</span></div></div></div></section>

    </main>
    <footer className="footer" id="contact"><div className="shell"><p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p><div className="footer-main"><div><h2>Good work starts<br />with a conversation.</h2><a className="footer-email" href="mailto:matthewtrundle@gmail.com">matthewtrundle@gmail.com <ArrowUpRight size={23} /></a></div><div className="footer-links"><a href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="mailto:matthewtrundle@gmail.com"><Mail size={18} /> Email</a></div></div><div className="copyright"><span>© 2026 Matthew Rundle</span><span>Austin, Texas</span></div></div></footer>
  </>;
}
