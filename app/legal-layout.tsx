/* eslint-disable @next/next/no-html-link-for-pages */
import type { ReactNode } from 'react';

type TocItem = {
  href: string;
  label: string;
};

type LegalLayoutProps = {
  title: string;
  eyebrow: string;
  intro: string;
  toc: TocItem[];
  children: ReactNode;
};

export default function LegalLayout({ title, eyebrow, intro, toc, children }: LegalLayoutProps) {
  return (
    <main className="legal-page">
      <div className="legal-backdrop" aria-hidden="true"><span /><span /><span /></div>

      <header className="legal-header">
        <a className="brand" href="/" aria-label="Florian Dietze Versicherungen – Startseite">
          <img className="arag-logo" src="/assets/arag-logo.svg" alt="ARAG" />
          <span><strong>Florian Dietze</strong><small>ARAG Generalagentur · Augsburg</small></span>
        </a>
        <nav className="legal-nav" aria-label="Rechtliche Seiten">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a className="legal-home-link" href="/">Zur Website <span>↗</span></a>
        </nav>
      </header>

      <section className="legal-hero">
        <div className="legal-hero-copy">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="legal-status">
          <span>Aktueller Stand</span>
          <strong>31. August 2026</strong>
          <small>Transparent. Verständlich. Direkt erreichbar.</small>
        </div>
      </section>

      <div className="legal-layout">
        <aside className="legal-sidebar">
          <p>Auf dieser Seite</p>
          <nav aria-label={`Inhalt ${title}`}>
            {toc.map((item, index) => (
              <a href={item.href} key={item.href}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</a>
            ))}
          </nav>
          <div className="legal-contact-box">
            <span>Direkter Kontakt</span>
            <strong>Fragen zu diesen Angaben?</strong>
            <a href="mailto:florian.dietze@augsburg-versicherungen.de">E-Mail schreiben ↗</a>
          </div>
        </aside>

        <article className="legal-content">{children}</article>
      </div>

      <footer className="legal-footer">
        <a className="brand" href="/">
          <img className="arag-logo" src="/assets/arag-logo.svg" alt="ARAG" />
          <span><strong>Florian Dietze</strong><small>ARAG Generalagentur · Augsburg</small></span>
        </a>
        <span>© 2026 Florian Dietze Versicherungen</span>
        <span><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></span>
      </footer>
    </main>
  );
}
