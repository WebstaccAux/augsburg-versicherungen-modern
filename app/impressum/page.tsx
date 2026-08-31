import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Anbieterkennzeichnung und rechtliche Angaben der ARAG Generalagentur Florian Dietze in Augsburg.',
  alternates: { canonical: '/impressum' },
};

const toc = [
  { href: '#anbieter', label: 'Anbieter' },
  { href: '#beruf', label: 'Berufsangaben' },
  { href: '#register', label: 'Vermittlerregister' },
  { href: '#schlichtung', label: 'Streitbeilegung' },
  { href: '#inhalt', label: 'Inhalte' },
];

export default function Impressum() {
  return (
    <LegalLayout
      title="Impressum"
      eyebrow="Rechtliches · Anbieterkennzeichnung"
      intro="Alle Angaben zum Anbieter, zur beruflichen Zulassung und zu den zuständigen Stellen – kompakt und transparent zusammengefasst."
      toc={toc}
    >
      <section className="legal-section" id="anbieter">
        <span className="legal-index">01</span>
        <div>
          <p className="legal-label">Angaben gemäß § 5 DDG</p>
          <h2>Anbieter & Kontakt</h2>
          <div className="legal-data-grid">
            <p><span>Unternehmen</span><strong>Florian Dietze<br />ARAG Generalagent</strong></p>
            <p><span>Anschrift</span><strong>Ortlerstraße 49<br />86163 Augsburg</strong></p>
            <p><span>Telefon</span><strong><a href="tel:+4982147865935">0821 478 659 35</a><br /><a href="tel:+491735734715">0173 573 4715</a></strong></p>
            <p><span>E-Mail</span><strong><a href="mailto:florian.dietze@augsburg-versicherungen.de">florian.dietze@augsburg-versicherungen.de</a></strong></p>
          </div>
        </div>
      </section>

      <section className="legal-section" id="beruf">
        <span className="legal-index">02</span>
        <div>
          <p className="legal-label">Berufliche Angaben</p>
          <h2>Zulassung & Regelungen</h2>
          <p>Gebundener Versicherungsvertreter nach § 34d Absatz 7 Satz 1 Nummer 1 GewO, Bundesrepublik Deutschland.</p>
          <h3>Berufsrechtliche Regelungen</h3>
          <ul>
            <li>§ 34d Gewerbeordnung (GewO)</li>
            <li>§§ 59–68 Versicherungsvertragsgesetz (VVG)</li>
            <li>Versicherungsvermittlungsverordnung (VersVermV)</li>
          </ul>
          <p>Die Regelungen sind über die vom Bundesministerium der Justiz betriebene Website <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noreferrer">gesetze-im-internet.de ↗</a> zugänglich.</p>
          <h3>Zuständige Industrie- und Handelskammer</h3>
          <p>IHK Schwaben<br />Stettenstraße 1 + 3, 86150 Augsburg<br /><a href="https://www.ihk.de/schwaben" target="_blank" rel="noreferrer">ihk.de/schwaben ↗</a></p>
        </div>
      </section>

      <section className="legal-section" id="register">
        <span className="legal-index">03</span>
        <div>
          <p className="legal-label">Öffentliches Register</p>
          <h2>Versicherungsvermittlerregister</h2>
          <div className="legal-highlight">
            <span>Register-Nr.</span>
            <strong>D-AIAV-SU4B3-48</strong>
          </div>
          <p>Deutsche Industrie- und Handelskammer (DIHK)<br />Breite Straße 29, 10178 Berlin<br /><a href="https://www.vermittlerregister.info" target="_blank" rel="noreferrer">vermittlerregister.info ↗</a></p>
        </div>
      </section>

      <section className="legal-section" id="schlichtung">
        <span className="legal-index">04</span>
        <div>
          <p className="legal-label">Außergerichtliche Streitbeilegung</p>
          <h2>Versicherungsombudsmann</h2>
          <p>Versicherungsombudsmann e. V.<br />Postfach 08 06 32, 10006 Berlin<br />Telefon: 0800 3696000<br /><a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noreferrer">versicherungsombudsmann.de ↗</a></p>
        </div>
      </section>

      <section className="legal-section" id="inhalt">
        <span className="legal-index">05</span>
        <div>
          <p className="legal-label">Redaktionelle Verantwortung</p>
          <h2>Inhalte dieser Website</h2>
          <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Florian Dietze, Ortlerstraße 49, 86163 Augsburg.</p>
          <p>Die Inhalte dieser Website wurden mit Sorgfalt erstellt und werden regelmäßig überprüft. Verbindliche Leistungen und Bedingungen ergeben sich ausschließlich aus den jeweils vereinbarten Versicherungsunterlagen.</p>
          <p>Für Inhalte externer Websites, auf die verlinkt wird, sind ausschließlich deren Betreiber verantwortlich.</p>
        </div>
      </section>
    </LegalLayout>
  );
}
