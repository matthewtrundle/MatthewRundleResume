import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Nav, Footer } from "@/components/site/Chrome";
import { tracks } from "@/lib/tracks";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav resumeHref="/Matthew_Rundle_Resume.pdf" sections={[{ href: "#tracks", label: "Résumé versions" }, { href: "#contact", label: "Contact" }]} />
      <main id="main">
        <div className="hero-wrap">
          <section className="hero shell" aria-labelledby="hero-title">
            <div>
              <p className="eyebrow rise">Matthew Rundle / Austin, Texas</p>
              <h1 id="hero-title" className="rise d1">Software that gets used.</h1>
              <p className="hero-lede rise d2">I built the MES running Western Magnetics’ production, shipped agentic SaaS through Domain Labs, and led a team of six data scientists at Expedia Group.</p>
              <div className="hero-actions rise d3">
                <a className="btn dark" href="#tracks">Choose a version <ArrowDownRight size={16} /></a>
                <a className="btn ghost" href="mailto:matthewtrundle@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
              </div>
              <p className="availability rise d4"><span /> Austin, Texas · Open to applied AI, manufacturing and data leadership roles</p>
            </div>
            <figure className="portrait rise d2">
              <Image src="/images/headshot.jpeg" alt="Matthew Rundle" width={800} height={800} sizes="(max-width: 700px) 90vw, 420px" preload />
              <figcaption><div><strong>Matthew Rundle</strong><span>Builder. Team leader. Hands-on.</span></div></figcaption>
            </figure>
          </section>
        </div>
        <section className="tracks-section shell" id="tracks" aria-labelledby="tracks-title">
          <div className="section-heading">
            <div><p className="eyebrow">Five résumé versions</p><h2 id="tracks-title">Pick the version<br />that fits the role.</h2></div>
            <p>Same history, same evidence. Each version leads with the work most relevant to that kind of role.</p>
          </div>
          <div className="track-cards">
            {tracks.map((t, i) => (
              <Link key={t.slug} href={`/${t.slug}`} className="track-card reveal" style={{ "--c": t.accent } as CSSProperties}>
                <p className="eyebrow">0{i + 1} / {t.short}</p>
                <h3>{t.headline}</h3>
                <p>{t.title}</p>
                <span>Open this version <ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
