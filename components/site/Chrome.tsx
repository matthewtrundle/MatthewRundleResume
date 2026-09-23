import Link from "next/link";
import { ArrowUpRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { tracks, type Track } from "@/lib/tracks";

type NavProps = { current?: Track; resumeHref: string; sections: { href: string; label: string }[] };

export function Nav({ current, resumeHref, sections }: NavProps) {
  return (
    <header className="nav-bar">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="wordmark" href="/">Matthew Rundle{current && <span> / {current.short}</span>}</Link>
        <div className="nav-links">{sections.map(s => <a key={s.href} href={s.href}>{s.label}</a>)}</div>
        <div className="nav-right">
          <details className="switcher">
            <summary aria-label="Switch résumé track"><i />{current ? current.short : "Tracks"}<ChevronDown size={14} /></summary>
            <div className="switcher-menu">
              <p>Résumé versions</p>
              {tracks.map(t => (
                <Link key={t.slug} href={`/${t.slug}`} aria-current={t.slug === current?.slug ? "page" : undefined}>
                  <i style={{ background: t.accent }} />{t.title}
                </Link>
              ))}
            </div>
          </details>
          <a className="btn dark sm" href={resumeHref}>Résumé <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  );
}

export function Footer({ current }: { current?: Track }) {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <p className="eyebrow">Let’s build something useful</p>
        <div className="footer-main">
          <div>
            <h2>Good work starts<br />with a conversation.</h2>
            <a className="footer-email" href="mailto:matthewtrundle@gmail.com">matthewtrundle@gmail.com <ArrowUpRight size={18} /></a>
          </div>
          <div className="footer-side">
            <div>
              <p>Other versions</p>
              {tracks.filter(t => t.slug !== current?.slug).map(t => (
                <Link key={t.slug} href={`/${t.slug}`}><i style={{ background: t.accent }} />{t.short}</Link>
              ))}
            </div>
            <div>
              <p>Elsewhere</p>
              <a href="https://www.linkedin.com/in/matthewtrundle/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href="https://github.com/matthewtrundle" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href="mailto:matthewtrundle@gmail.com"><Mail size={15} /> Email</a>
            </div>
          </div>
        </div>
        <div className="copyright"><span>© 2026 Matthew Rundle</span><span>Austin, Texas</span></div>
      </div>
    </footer>
  );
}
