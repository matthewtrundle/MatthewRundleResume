import Link from "next/link";
import { tracks } from "@/lib/tracks";

type NavProps = { current?: string; resumeHref: string; sections: { href: string; label: string }[] };

export function Nav({ current, resumeHref, sections }: NavProps) {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <Link className="nav-tab" href="/">Matthew Rundle</Link>
      <div className="nav-group">
        {sections.map(s => <a key={s.href} className="nav-tab hide-sm" href={s.href}>{s.label}</a>)}
        <details className="tracks-menu">
          <summary className="nav-tab">Tracks</summary>
          <div className="tracks-list win">
            {tracks.map((t, i) => (
              <Link key={t.slug} href={`/${t.slug}`} aria-current={t.slug === current ? "page" : undefined}>
                {t.short}<span>0{i + 1}</span>
              </Link>
            ))}
          </div>
        </details>
      </div>
      <div className="nav-group">
        <a className="nav-tab hide-sm" href="mailto:matthewtrundle@gmail.com">Email</a>
        <a className="nav-tab dark" href={resumeHref}>Résumé</a>
      </div>
    </nav>
  );
}


export function Footer() {
  return (
    <footer className="dark" id="contact">
      <div className="shell crop footer-mark">
        <p className="display">Matthew Rundle</p>
        <a href="mailto:matthewtrundle@gmail.com">matthewtrundle@gmail.com</a>
        <p className="mono" style={{ fontSize: 10, marginTop: 34 }}>{b64("build it. lead it. understand the business.")}</p>
        <span className="crop-b" />
      </div>
      <div className="shell footer-bar">
        <span>Matthew Rundle © 2026 · Austin, Texas</span>
        <nav aria-label="Contact links">
          <a href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:matthewtrundle@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}

export const b64 = (text: string): string => Buffer.from(text).toString("base64");
