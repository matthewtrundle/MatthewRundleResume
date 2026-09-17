import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = { title: "Design directions | Matthew Rundle", robots: { index: false, follow: false } };
const resume = "/Matthew_Rundle_Resume.pdf";
const email = "mailto:matthewtrundle@gmail.com";
const options = [
  { id: "editorial", name: "01 / Editorial", description: "Warm, expressive, leadership-first. A considered profile with a flagship story." },
  { id: "industrial", name: "02 / Industrial", description: "Technical, precise, manufacturing-first. The work leads; the biography follows." },
  { id: "personal", name: "03 / Personal", description: "Quiet, direct, approachable. A compact introduction with room for the work." },
];

function Portrait({ className = "" }: { className?: string }) {
  return <Image className={className} src="/images/headshot.jpeg" alt="Matthew Rundle" width={480} height={600} priority />;
}
function Links() {
  return <div className={styles.links}><a href={resume}>Résumé ↗</a><a href="https://www.linkedin.com/in/matthewtrundle/">LinkedIn ↗</a><a href="https://github.com/matthewtrundle">GitHub ↗</a></div>;
}
function MesDetails() {
  return <details className={styles.details}><summary>What I built <span>+</span></summary><p>I designed and built the manufacturing execution system (MES) from scratch. It connects purchasing, production, quality checks and the records needed to trace work through the factory.</p><p>Western Magnetics now uses it to run its end-to-end manufacturing process.</p></details>;
}
function OtherWork() {
  return <div className={styles.otherWork}>
    <article><span className={styles.label}>02 / CORELINQ</span><h3>AI customer communications</h3><p>I built a platform that automates customer emails, phone calls and sales follow-ups, with staff handling conversations that need a person.</p><details className={styles.details}><summary>What I built <span>+</span></summary><p>I connected email, AI phone calls, scheduling and sales campaigns in one platform. It checks conversation results before creating follow-up tasks and pauses campaigns when automated recovery fails.</p></details></article>
    <article><span className={styles.label}>03 / CORELINQ SCRIBE</span><h3>AI clinical note-taking</h3><p>I built a tool that turns patient encounters into draft clinical notes for dental teams to review and edit.</p><a className={styles.inlineLink} href="https://scribe-two-tau.vercel.app/api/demo/start" target="_blank" rel="noreferrer">Try the Scribe demo ↗</a></article>
  </div>;
}
function Career() {
  return <div className={styles.career}><span className={styles.label}>THE EXPERIENCE BEHIND THE WORK</span><div><p><strong>Western Magnetics</strong><span>Manufacturing systems · 2026–present</span></p><p><strong>Domain Labs</strong><span>Founder, AI & SaaS solutions · 2025</span></p><p><strong>Expedia Group / Vrbo</strong><span>Analytics & data science leadership · 2019–2025</span></p></div></div>;
}

function Editorial() {
  return <div className={`${styles.site} ${styles.editorial}`}>
    <header className={styles.siteNav}><a href="#intro">Matthew Rundle<span className={styles.smallMark}> / </span></a><span>Austin, Texas</span><a href={email}>Get in touch ↗</a></header>
    <main id="intro">
      <section className={styles.editorialHero}><div><p className={styles.label}>APPLIED AI / PRODUCT / DATA LEADERSHIP</p><h1>Ideas are good.<br/><em>Working systems</em><br/>are better.</h1><div className={styles.heroBottom}><span className={styles.down}>↓</span><p>I’m Matthew. I build software around the way businesses actually work—and lead the data teams that help them make better decisions.</p></div></div><figure><Portrait/><figcaption>MATTHEW RUNDLE<br/><span>Business context. Hands-on execution.</span></figcaption></figure></section>
      <div className={styles.sectionBar}><span>SELECTED WORK / 01—03</span><span>From the factory floor to the front office</span></div>
      <section className={styles.editorialMes} id="selected-work"><div><span className={styles.label}>01 / WESTERN MAGNETICS</span><h2>A system that<br/>runs the floor.</h2><p>Built from the ground up. Now running end-to-end manufacturing processing.</p><MesDetails/></div><div className={styles.scopePoster}><div className={styles.posterTop}><span>MANUFACTURING<br/>EXECUTION SYSTEM</span><span>WM / 01</span></div><div className={styles.posterWord}>From order.<br/><i>To operation.</i></div><div className={styles.scopeRows}><span>01 <b>Procurement</b></span><span>02 <b>Production</b></span><span>03 <b>Quality & traceability</b></span></div><small>Scope illustration · Not a product screenshot</small></div></section>
      <OtherWork/><Career/>
      <footer className={styles.editorialFooter}><p className={styles.label}>LET’S BUILD SOMETHING USEFUL.</p><h2>The next chapter,<br/><em>with the right team.</em></h2><a href={email}>Say hello ↗</a><Links/></footer>
    </main>
  </div>;
}
function Industrial() {
  return <div className={`${styles.site} ${styles.industrial}`}>
    <header className={styles.siteNav}><a href="#intro">MR<span className={styles.smallMark}> / </span>MATTHEW RUNDLE</a><span>APPLIED AI & DATA</span><a href={resume}>RÉSUMÉ ↗</a></header>
    <main id="intro"><section className={styles.industrialHero}><div className={styles.industrialIntro}><p className={styles.label}>AUSTIN, TX / SYSTEMS & LEADERSHIP</p><h1>Built for<br/><span>the real world.</span></h1><p>AI-enabled software. Operational understanding. Experience leading data teams.</p><a href="#selected-work" className={styles.solidLink}>EXPLORE THE WORK ↓</a></div><div className={styles.technicalPlate}><div className={styles.plateHeader}><span>FEATURED SYSTEM / 001</span><span className={styles.live}>IN PRODUCTION</span></div><h2>Manufacturing<br/>execution.</h2><p>Western Magnetics</p><div className={styles.flow}><div><span>INPUT</span><strong>Procurement</strong></div><b>↓</b><div className={styles.flowCore}><span>EXECUTION</span><strong>Production</strong></div><b>↓</b><div><span>CONTROL</span><strong>Quality & traceability</strong></div></div><small>Scope illustration · Not a live system view</small></div></section>
      <section className={styles.industrialFeature} id="selected-work"><span className={styles.label}>01 / WESTERN MAGNETICS</span><div><h2>Not a proof of concept.<br/>The production system.</h2><p>I built the MES from the ground up. It now runs the company’s end-to-end manufacturing processing.</p><MesDetails/></div><div className={styles.buildStamp}><span>GROUND-UP BUILD</span><strong>MES</strong><span>DEPLOYED & IN USE</span></div></section>
      <OtherWork/>
      <section className={styles.operator}><Portrait/><div><p className={styles.label}>THE PERSON BEHIND THE SYSTEMS</p><h2>Business fluency.<br/>Technical ownership.</h2><p>I’ve led a six-person data science team at Expedia and built operating software for manufacturing and small businesses. I’m interested in where applied AI meets real operational problems.</p><Links/></div></section><Career/>
      <footer className={styles.industrialFooter}><p className={styles.label}>APPLIED AI / PRODUCT / DATA LEADERSHIP</p><h2>What needs building?</h2><a href={email}>matthewtrundle@gmail.com ↗</a></footer>
    </main>
  </div>;
}
function Personal() {
  return <div className={`${styles.site} ${styles.personal}`}><header className={styles.siteNav}><a href="#intro">Matthew Rundle<span className={styles.smallMark}>.</span></a><a href={email}>Let’s talk ↗</a></header>
    <main id="intro"><section className={styles.personalHero}><div className={styles.personalIdentity}><Portrait/><div><span className={styles.label}>HELLO, I’M MATTHEW.</span><p>Based in Austin, Texas.</p></div></div><h1>I connect the business<br/>problem to <em>the build.</em></h1><p>Applied AI and data leader. I’ve led analytics teams, founded a small software business, and built a manufacturing system that now runs a factory’s end-to-end processing.</p><Links/></section>
      <section className={styles.personalMes} id="selected-work"><div className={styles.personalMesHeading}><span className={styles.label}>WESTERN MAGNETICS / IN USE TODAY</span><span>01</span></div><div className={styles.personalMesContent}><div><h2>Manufacturing management software</h2><p>I built the system Western Magnetics uses to run its manufacturing process—from purchasing materials to production and quality checks.</p><MesDetails/></div><div className={styles.typeGraphic} aria-hidden="true"><span>MANUFACTURING</span><strong>M<br/>E<span>↗</span><br/>S</strong><span>EXECUTION SYSTEM</span></div></div></section>
      <div className={styles.sectionBar}><span>OTHER PROJECTS</span><span>02—03</span></div><OtherWork/>
      <section className={styles.personalAbout}><h2>A little context.</h2><div><p>Before building operating software, I led analytics and data science work at Expedia / Vrbo, managing a team of six and helping leaders understand markets and commercial opportunities.</p><p>Through Domain Labs, I partnered with small businesses on custom SaaS and AI-enabled workflows. I’m now looking for the right team to bring that mix of leadership and hands-on building to.</p></div></section><Career/>
      <footer className={styles.personalFooter}><h2>Good work starts<br/>with a conversation.</h2><a href={email}>matthewtrundle@gmail.com ↗</a><Links/></footer>
    </main></div>;
}

export default async function DesignOptions({ searchParams }: { searchParams: Promise<{ direction?: string }> }) {
  const { direction } = await searchParams;
  const selected = options.find(option => option.id === direction) ?? options[0];
  return <div className={styles.preview}><aside className={styles.switcher} aria-label="Design direction chooser"><div><strong>DESIGN STUDY</strong><span>Local concepts · Live site unchanged</span></div><nav aria-label="Design options">{options.map(option => <Link key={option.id} href={`/design-options?direction=${option.id}`} aria-current={selected.id === option.id ? "page" : undefined}>{option.name}</Link>)}</nav><p>{selected.description}</p></aside><a className={styles.skip} href="#intro">Skip to concept</a>{selected.id === "editorial" ? <Editorial/> : selected.id === "industrial" ? <Industrial/> : <Personal/>}</div>;
}
