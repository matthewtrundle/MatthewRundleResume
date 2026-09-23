import Image from "next/image";
import type { Track } from "@/lib/tracks";
import { Nav, Footer, b64 } from "./Chrome";
import Window from "./Window";
import Work from "./Work";
import { Clock, Glider } from "./DeskToys";

const experience = [
  { years: "2026 — Present", company: "Western Magnetics", role: "Manufacturing systems and applied AI", text: "Built and deployed the MES and ERP running production, quality, purchasing, inventory and shipping." },
  { years: "2025", company: "Domain Labs", role: "Founder, AI and SaaS Solutions", text: "Designed and built custom SaaS for small businesses, including CoreLinq Communications and CoreLinq Scribe." },
  { years: "2021 — 2025", company: "Expedia Group / Vrbo", role: "Senior Manager, Supply and Commercial Data Science", text: "Built and managed a team of six data scientists. Established executive analytics for commercial strategy and resource allocation." },
  { years: "2019 — 2021", company: "Expedia Group / Vrbo", role: "Manager, Analytics and Data Science", text: "Market segmentation across more than 15 variables; regional reporting for sales visibility and prioritization." },
  { years: "2013 — 2019", company: "HomeAway · National Instruments · Advisory Board", role: "Analytics and consulting", text: "Global reporting, data analytics consulting and business analysis." },
];

function Leadership() {
  return (
    <section className="lead" id="experience" aria-labelledby="lead-title">
      <div className="shell crop lead-grid">
        <div>
          <p className="eyebrow">Expedia Group / Vrbo · 2019–2025</p>
          <h2 className="section-title" id="lead-title" style={{ marginTop: 18 }}>Data Is Useful When It Changes A Decision.</h2>
          <ul>
            <li><strong>Build the team.</strong> Built and managed six data scientists with shared Python and SQL standards.</li>
            <li><strong>Understand the market.</strong> Segmentation across more than 15 variables to prioritize high-value property acquisition.</li>
            <li><strong>Inform the executives.</strong> Integrated disparate data into executive reporting for strategy and resource allocation.</li>
          </ul>
        </div>
        <div className="timeline">
          {experience.map(item => (
            <article key={item.role}>
              <p className="years">{item.years}</p>
              <div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.text}</p></div>
            </article>
          ))}
        </div>
        <span className="crop-b" />
      </div>
    </section>
  );
}

export default function TrackPage({ track }: { track: Track }) {
  const sections = [{ href: "#work", label: "Work" }, { href: "#experience", label: "Experience" }, { href: "#faq", label: "FAQ" }];
  return (
    <div className={`band-${track.band}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav current={track.slug} resumeHref={track.resumePdf} sections={sections} />
      <main id="main">
        <header className="hero">
          <div className="sky" aria-hidden="true" />
          <div className="hero-windows">
            <Window title={<>Sept 2026 • Now Open</>}>
              <p>OPEN TO {track.short.toUpperCase()} ROLES</p>
              <p>Based in Austin, Texas</p>
              <a className="pixel-btn" href={track.resumePdf}>Download résumé</a>
            </Window>
            <Window title={<>Résumé version • {track.short}</>}>
              <p>{track.title}</p>
              <a href="#work">Read the work</a>
            </Window>
          </div>
          <div className="shell crop hero-title">
            <p className="vertical-code" aria-hidden="true">{b64(`matthew rundle / ${track.slug} / austin tx`)}</p>
            <p className="kicker">{track.kicker}</p>
            <h1 className="display">{track.headline}</h1>
            <p className="hero-lede">{track.lede}</p>
            <div className="big-links">
              <a href="#work">See The Work</a>
              <a href="mailto:matthewtrundle@gmail.com">Get In Touch</a>
            </div>
            <span className="crop-b" />
          </div>
        </header>

        <section className="band" aria-labelledby="manifesto-title">
          <div className="shell" style={{ paddingTop: 40 }}>
            <div className="desktop">
              <span className="desk-label">MR.{track.slug.toUpperCase()}.OS</span>
              <div className="desk-grid">
                <div className="flow" aria-label={track.flowTitle}>
                  {track.flow.map((step, i) => (
                    <Window key={step.tag} title={`${track.flowTitle} / 0${i + 1}`}>
                      <span className="tag">{step.tag}</span><strong>{step.title}</strong>
                      <small>{step.detail}</small>
                    </Window>
                  ))}
                </div>
                <div className="desk-side">
                  <Window title="Portrait.jpg" className="portrait">
                    <Image src="/images/headshot.jpeg" alt="Matthew Rundle" width={800} height={800} sizes="(max-width: 1000px) 45vw, 300px" preload />
                  </Window>
                  <Clock />
                  <Glider />
                </div>
              </div>
            </div>
          </div>
          <div className="shell crop manifesto">
            <h2 className="display" id="manifesto-title">{track.manifesto}</h2>
            <span className="crop-b" />
          </div>
          <div className="shell pillars">
            {track.pillars.map(p => (
              <article key={p.label}><h3>{p.label}</h3><p>{p.text}</p></article>
            ))}
            <div aria-hidden="true"><p className="mono" style={{ fontSize: 10, marginBottom: 8 }}>[B.64]</p><p className="b64">{b64(`${track.title}. ${track.lede}`)}</p></div>
          </div>
          <div className="shell crop" aria-label="Key facts">
            <div className="stats">
              {track.stats.map(s => <div className="stat" key={s.label}><strong>{s.value}</strong><p>{s.label}</p></div>)}
            </div>
            <p className="stat-note">{track.statNote}</p>
            <span className="crop-b" />
          </div>
          <div style={{ height: 40 }} />
        </section>

        {track.leadFirst && <Leadership />}
        <Work order={track.work} emphasis={track.workEmphasis} showMesDemo={track.showMesDemo} showArchitecture={track.showArchitecture} />
        {!track.leadFirst && <Leadership />}

        <section className="shell crop" aria-labelledby="skills-title">
          <h2 className="section-title" id="skills-title" style={{ marginBottom: 32 }}>Toolkit.</h2>
          <div className="skills">
            {track.skills.map(s => <Window key={s.label} title={s.label}><p>{s.text}</p></Window>)}
          </div>
          <span className="crop-b" />
        </section>

        <section className="dark" id="faq" aria-labelledby="faq-title">
          <div className="shell crop">
            <h2 className="section-title" id="faq-title" style={{ textAlign: "center", marginBottom: 56 }}>Fair Questions</h2>
            <div className="faq">
              <div>
                {track.faq.map((f, i) => (
                  <details key={f.q} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
              <div className="faq-side" aria-hidden="true"><p className="mono" style={{ fontSize: 10, marginBottom: 8 }}>[B.64]</p><p className="b64">{b64(track.faq.map(f => f.q).join(" "))}</p></div>
            </div>
            <span className="crop-b" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
