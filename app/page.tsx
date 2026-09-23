import Link from "next/link";
import { Nav, Footer, b64 } from "@/components/site/Chrome";
import Window from "@/components/site/Window";
import { Clock } from "@/components/site/DeskToys";
import { tracks } from "@/lib/tracks";

const swatch: Record<string, string> = { pink: "var(--pink)", sage: "var(--sage)", lilac: "var(--lilac)", sky: "#a9d3f2", stone: "var(--stone)" };

export default function Home() {
  return (
    <div className="band-pink">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav resumeHref="/Matthew_Rundle_Resume.pdf" sections={[]} />
      <main id="main">
        <header className="hero">
          <div className="sky" aria-hidden="true" />
          <div className="hero-windows">
            <Window title="Sept 2026 • Matthew Rundle">
              <p>FIVE RÉSUMÉS. ONE BUILDER.</p>
              <p>Pick the track that fits the role.</p>
              <a className="pixel-btn" href="#tracks">Choose a track</a>
            </Window>
            <Clock />
          </div>
          <div className="shell crop hero-title">
            <p className="vertical-code" aria-hidden="true">{b64("matthew rundle / austin tx / builder")}</p>
            <p className="kicker">Matthew Rundle ........................ Austin, Texas</p>
            <h1 className="display">Software That Gets Used</h1>
            <p className="hero-lede">I built the MES running Western Magnetics&apos; production, shipped agentic SaaS through Domain Labs, and led a team of six data scientists at Expedia Group.</p>
            <div className="big-links">
              <a href="#tracks">Pick A Track</a>
              <a href="mailto:matthewtrundle@gmail.com">Get In Touch</a>
            </div>
            <span className="crop-b" />
          </div>
        </header>
        <section className="band" id="tracks" aria-labelledby="tracks-title">
          <div className="shell crop manifesto">
            <h2 className="display" id="tracks-title">Five Tracks</h2>
            <span className="crop-b" />
          </div>
          <div className="shell" style={{ paddingBottom: 80 }}>
            <div className="desktop">
              <span className="desk-label">MR.TRACKS.OS</span>
              <div className="track-grid">
                {tracks.map((t, i) => (
                  <Link key={t.slug} href={`/${t.slug}`} className="win">
                    <div className="win-bar"><span>0{i + 1} / {t.short}</span><span>Open</span></div>
                    <div className="win-body">
                      <div className="swatch" style={{ background: swatch[t.band] }} />
                      <h3>{t.headline}</h3>
                      <p>{t.title}</p>
                      <span className="open">Open track →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
