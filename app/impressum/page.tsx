import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Florian Dietze Versicherungen',
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="brand" href="/" aria-label="Zur Startseite">
          <span className="brand-mark">FD</span>
          <span><strong>Florian Dietze</strong><small>Versicherungen · Augsburg</small></span>
        </a>
        <a className="text-link" href="/">← Zurück zur Startseite</a>
      </header>
      <article className="legal-content">
        <p className="section-kicker">Rechtliches</p>
        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p><strong>Florian Dietze</strong><br />ARAG Generalagent<br />Ortlerstraße 49<br />86163 Augsburg</p>
          <p>Telefon: <a href="tel:+4982147865935">0821 47865935</a><br />Mobil: <a href="tel:+491735734715">0173 573 471 5</a><br />E-Mail: <a href="mailto:florian.dietze@augsburg-versicherungen.de">florian.dietze@augsburg-versicherungen.de</a></p>
        </section>

        <section>
          <h2>Berufsbezeichnung</h2>
          <p>Gebundener Versicherungsvertreter nach § 34d Absatz 7 Satz 1 Nummer 1 GewO, Bundesrepublik Deutschland</p>
        </section>

        <section>
          <h2>Berufsrechtliche Regelungen</h2>
          <ul><li>§ 34d Gewerbeordnung</li><li>§§ 59 – 68 VVG</li><li>VersVermV</li></ul>
          <p>Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebene Website <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noreferrer">gesetze-im-internet.de</a> eingesehen werden.</p>
        </section>

        <section>
          <h2>Eintrag im Versicherungsvermittlerregister</h2>
          <p>Deutscher Industrie- und Handelskammertag (DIHK) e.V.<br />IHK-Register-Nr. D-AIAV-SU4B3-48</p>
          <p>Breite Straße 29, 10178 Berlin<br /><a href="https://www.vermittlerregister.info" target="_blank" rel="noreferrer">vermittlerregister.info</a></p>
        </section>

        <section>
          <h2>Schlichtungsstelle für außergerichtliche Streitbeilegung</h2>
          <p>Versicherungsombudsmann e.V.<br />Postfach 08 06 32, 10006 Berlin<br /><a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noreferrer">versicherungsombudsmann.de</a></p>
        </section>

        <section>
          <h2>Zuständige Industrie- und Handelskammer</h2>
          <p>IHK Schwaben<br />Stettenstraße 1 + 3, 86150 Augsburg<br /><a href="https://www.ihk.de/schwaben" target="_blank" rel="noreferrer">ihk.de/schwaben</a></p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>Florian Dietze, Ortlerstraße 49, 86163 Augsburg</p>
        </section>
      </article>
      <footer className="legal-footer">© 2026 Florian Dietze Versicherungen · <a href="https://www.augsburg-versicherungen.de/datenschutz" target="_blank" rel="noreferrer">Datenschutz ↗</a></footer>
    </main>
  );
}
