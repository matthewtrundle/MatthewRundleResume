import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Track } from "@/lib/tracks";
import { Nav, Footer } from "./Chrome";
import Work from "./Work";

const experience = [
  { years: "2026 — Present", company: "Western Magnetics", role: "Manufacturing systems and applied AI", text: "Built and deployed the MES and ERP running production, quality, purchasing, inventory and shipping." },
  { years: "2025", company: "Domain Labs", role: "Founder, AI and SaaS Solutions", text: "Designed and built custom SaaS for small businesses, including CoreLinq Communications and CoreLinq Scribe." },
  { years: "2021 — 2025", company: "Expedia Group / Vrbo", role: "Senior Manager, Supply and Commercial Data Science", text: "Built and managed a team of six data scientists. Established executive analytics for commercial strategy and resource allocation." },
  { years: "2019 — 2021", company: "Expedia Group / Vrbo", role: "Manager, Analytics and Data Science", text: "Market segmentation across more than 15 variables; regional reporting for sales visibility and prioritization." },
  { years: "2013 — 2019", company: "HomeAway · National Instruments · Advisory Board", role: "Analytics and consulting", text: "Global reporting, data analytics consulting and business analysis." },
];

function Experience({ resumeHref }: { resumeHref: string }) {
  return (
    <section className="experience" id="experience" aria-labelledby="exp-title">
      <div className="shell">
        <div className="section-heading">
          <div><p className="eyebrow">Experience</p><h2 id="exp-title">Build it. Lead it.<br />Understand the business.</h2></div>
          <a className="btn ghost" href={resumeHref}>Full résumé <ArrowUpRight size={15} /></a>
        </div>
        <article className="lead-card reveal">
          <div>
            <p className="eyebrow">Expedia Group / Vrbo · 2019–2025</p>
            <h3>Data is useful when it changes a decision.</h3>
          </div>
          <div>
            <p>I built and managed a team of six data scientists, working with executives on the commercial decisions behind a travel business.</p>
            <ul>
              <li><strong>Build the team.</strong> Shared Python and SQL standards for analytics work.</li>
              <li><strong>Understand the market.</strong> Segmentation across more than 15 variables to prioritize high-value property acquisition.</li>
              <li><strong>Inform the executives.</strong> Integrated disparate data into executive reporting for strategy and resource allocation.</li>
            </ul>
          </div>
        </article>
        <div className="timeline">
          {experience.map(item => (
            <article key={item.role}>
              <p className="years">{item.years}</p>
              <div><h3>{item.company}</h3><h4>{item.role}</h4></div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TrackPage({ track }: { track: Track }) {
  const sections = [{ href: "#approach", label: "Approach" }, { href: "#work", label: "Work" }, { href: "#experience", label: "Experience" }, { href: "#faq", label: "FAQ" }];
  const style = { "--accent": track.accent } as CSSProperties;
  const roleLabel = track.short.toLowerCase().replace("ai", "AI");
  return (
    <div style={style}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav current={track} resumeHref={track.resumePdf} sections={sections} />
      <main id="main">
        <div className="hero-wrap">
          <section className="hero shell" aria-labelledby="hero-title">
            <div>
              <p className="eyebrow rise">{track.eyebrow}</p>
              <h1 id="hero-title" className="rise d1">{track.headline}</h1>
              <p className="hero-lede rise d2">{track.lede}</p>
              <div className="hero-actions rise d3">
                <a className="btn dark" href="#work">See the work <ArrowDownRight size={16} /></a>
                <a className="btn ghost" href={track.resumePdf}>Download résumé <ArrowUpRight size={15} /></a>
              </div>
              <p className="availability rise d4"><span /> Austin, Texas · Open to {roleLabel} roles</p>
            </div>
            <figure className="portrait rise d2">
              <Image src="/images/headshot.jpeg" alt="Matthew Rundle" width={800} height={800} sizes="(max-width: 700px) 90vw, 420px" preload />
              <figcaption>
                <div><strong>Matthew Rundle</strong><span>Builder. Team leader. Hands-on.</span></div>
                <em>{track.short}</em>
              </figcaption>
            </figure>
          </section>
          <div className="shell">
            <div className="facts">
              {track.stats.map(s => <div key={s.label}><strong>{s.value}</strong><p>{s.label}</p></div>)}
              <div className="resume-card">
                <div><p className="eyebrow">This résumé</p><h3 style={{ marginTop: 10 }}>{track.title}</h3></div>
                <a className="btn ghost" href={track.resumePdf} style={{ alignSelf: "start" }}>Download PDF <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <p className="fact-note">{track.statNote}</p>
          </div>
        </div>

        <section className="approach" id="approach" aria-labelledby="approach-title">
          <div className="shell">
            <div className="approach-grid">
              <div><p className="eyebrow">How I work</p><h2 id="approach-title">{track.manifesto}</h2></div>
              <div className="pillars">
                {track.pillars.map((p, i) => <article key={p.label} className="reveal"><span>0{i + 1}</span><div><h3>{p.label}</h3><p>{p.text}</p></div></article>)}
              </div>
            </div>
            <div className="flow reveal">
              <p className="eyebrow">{track.flowTitle}</p>
              <ol>
                {track.flow.map(step => <li key={step.tag}><b>{step.tag}</b><strong>{step.title}</strong><small>{step.detail}</small></li>)}
              </ol>
            </div>
          </div>
        </section>

        {track.leadFirst && <Experience resumeHref={track.resumePdf} />}
        <Work order={track.work} emphasis={track.workEmphasis} showMesDemo={track.showMesDemo} showArchitecture={track.showArchitecture} />
        {!track.leadFirst && <Experience resumeHref={track.resumePdf} />}

        <section className="toolkit" aria-labelledby="skills-title">
          <div className="shell">
            <p className="eyebrow" id="skills-title">Toolkit</p>
            <div className="skills">
              {track.skills.map(s => <article key={s.label} className="reveal"><h3>{s.label}</h3><p>{s.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="shell faq-grid">
            <div><p className="eyebrow">Fair questions</p><h2 id="faq-title">What people<br />usually ask.</h2></div>
            <div className="faq">
              {track.faq.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer current={track} />
    </div>
  );
}
