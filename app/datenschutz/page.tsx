import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzhinweise der ARAG Generalagentur Florian Dietze für die Nutzung dieser Website.',
  alternates: { canonical: '/datenschutz' },
};

const toc = [
  { href: '#verantwortlich', label: 'Verantwortlicher' },
  { href: '#hosting', label: 'Hosting' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '#dienste', label: 'Externe Dienste' },
  { href: '#rechte', label: 'Ihre Rechte' },
];

export default function Datenschutz() {
  return (
    <LegalLayout
      title="Datenschutz"
      eyebrow="Rechtliches · Ihre Daten"
      intro="Hier erfahren Sie klar und verständlich, welche Daten beim Besuch dieser Website oder bei einer Kontaktaufnahme verarbeitet werden."
      toc={toc}
    >
      <section className="legal-section" id="verantwortlich">
        <span className="legal-index">01</span>
        <div>
          <p className="legal-label">Verantwortlicher gemäß Art. 4 Nr. 7 DSGVO</p>
          <h2>Wer für Ihre Daten verantwortlich ist</h2>
          <p><strong>Florian Dietze · ARAG Generalagent</strong><br />Ortlerstraße 49, 86163 Augsburg</p>
          <p>Telefon: <a href="tel:+4982147865935">0821 478 659 35</a><br />E-Mail: <a href="mailto:florian.dietze@augsburg-versicherungen.de">florian.dietze@augsburg-versicherungen.de</a></p>
        </div>
      </section>

      <section className="legal-section" id="hosting">
        <span className="legal-index">02</span>
        <div>
          <p className="legal-label">Bereitstellung der Website</p>
          <h2>Hosting & Server-Logdateien</h2>
          <p>Diese Website wird bei IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, gehostet. Beim Aufruf können technisch notwendige Zugriffsdaten verarbeitet werden, insbesondere die angeforderte Seite oder Datei, Referrer, Browsertyp und -version, Betriebssystem, Gerätetyp, Zugriffszeit und eine anonymisierte IP-Adresse.</p>
          <p>Die Verarbeitung dient der sicheren, stabilen und fehlerfreien Bereitstellung des Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der Sicherheit und Funktionsfähigkeit der Website. Nach Angaben von IONOS werden Besuchsdaten bei Webhosting-Produkten grundsätzlich für acht Wochen gespeichert und nicht in Drittstaaten übertragen.</p>
          <p><a href="https://www.ionos.de/hilfe/datenschutz/datenverarbeitung-durch-ihr-ionos-produktes/datenverarbeitung-durch-webhosting-produkte/" target="_blank" rel="noreferrer">Datenschutzinformationen von IONOS ↗</a></p>
        </div>
      </section>

      <section className="legal-section" id="kontakt">
        <span className="legal-index">03</span>
        <div>
          <p className="legal-label">Direkte Kommunikation</p>
          <h2>Kontakt per Telefon oder E-Mail</h2>
          <p>Wenn Sie telefonisch oder per E-Mail Kontakt aufnehmen, werden die von Ihnen mitgeteilten Daten verarbeitet, um Ihre Anfrage zu beantworten und die weitere Kommunikation zu führen. Dazu können insbesondere Name, Kontaktdaten, Inhalt der Anfrage und der Zeitpunkt der Kontaktaufnahme gehören.</p>
          <p>Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist. Im Übrigen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse besteht in einer effizienten Bearbeitung Ihrer Anfrage.</p>
          <p>Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Gründe für eine weitere Speicherung bestehen.</p>
        </div>
      </section>

      <section className="legal-section" id="dienste">
        <span className="legal-index">04</span>
        <div>
          <p className="legal-label">Von Ihnen aktiv aufgerufene Dienste</p>
          <h2>Online-Anfragen, WhatsApp & externe Links</h2>
          <h3>Tally-Formulare</h3>
          <p>Die Schaltflächen „Angebot anfordern“ und „Rückruf vereinbaren“ führen zu Formularen des Anbieters Tally BV, Sint-Pietersnieuwstraat 11, 9000 Gent, Belgien. Erst wenn Sie den Link öffnen, wird eine Verbindung zu Tally hergestellt. Tally verarbeitet die dort eingegebenen Angaben als Auftragsverarbeiter für die Bearbeitung Ihrer Anfrage. Welche Angaben erhoben werden, ist im jeweiligen Formular ersichtlich.</p>
          <p><a href="https://tally.so/help/gdpr" target="_blank" rel="noreferrer">Datenschutzinformationen von Tally ↗</a></p>

          <h3>WhatsApp</h3>
          <p>Die WhatsApp-Schaltflächen öffnen eine Unterhaltung mit der angegebenen Mobilnummer. Erst nach Ihrer aktiven Auswahl verlassen Sie diese Website. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist WhatsApp Ireland Limited. Für die anschließende Kommunikation gelten ergänzend die Datenschutzbedingungen von WhatsApp. Bitte übermitteln Sie über Messenger keine besonders sensiblen Daten.</p>
          <p><a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer">Datenschutzinformationen von WhatsApp ↗</a></p>

          <h3>Bewertungen, Blog & soziale Netzwerke</h3>
          <p>Links zu ProvenExpert, Facebook, Instagram, YouTube und zum externen Blog sind nicht eingebettet. Beim bloßen Besuch dieser Website werden deshalb keine Daten an diese Anbieter übertragen. Eine Verbindung entsteht erst, wenn Sie einen entsprechenden Link selbst öffnen. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.</p>
        </div>
      </section>

      <section className="legal-section">
        <span className="legal-index">05</span>
        <div>
          <p className="legal-label">Tracking & lokale Speicherung</p>
          <h2>Cookies und Analyse</h2>
          <p>Diese Website setzt nach aktuellem Stand keine eigenen Cookies ein und bindet keine eigenen Analyse-, Werbe- oder Marketingdienste im Browser ein. Eine Einwilligungsabfrage ist daher für die Website selbst derzeit nicht erforderlich. Die technisch bedingte Verarbeitung durch den Hostinganbieter bleibt hiervon unberührt.</p>
        </div>
      </section>

      <section className="legal-section" id="rechte">
        <span className="legal-index">06</span>
        <div>
          <p className="legal-label">Art. 15–21 DSGVO</p>
          <h2>Ihre Datenschutzrechte</h2>
          <p>Sie haben – soweit die gesetzlichen Voraussetzungen erfüllt sind – das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
          <p>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a href="mailto:florian.dietze@augsburg-versicherungen.de">florian.dietze@augsburg-versicherungen.de</a>.</p>
          <h3>Beschwerderecht</h3>
          <p>Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Für nichtöffentliche Stellen in Bayern ist insbesondere zuständig:</p>
          <p><strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />Promenade 18, 91522 Ansbach<br /><a href="https://www.lda.bayern.de" target="_blank" rel="noreferrer">lda.bayern.de ↗</a></p>
          <h3>Sicherheit und Aktualisierung</h3>
          <p>Die Website wird verschlüsselt über HTTPS bereitgestellt. Diese Datenschutzhinweise werden angepasst, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern.</p>
        </div>
      </section>
    </LegalLayout>
  );
}
