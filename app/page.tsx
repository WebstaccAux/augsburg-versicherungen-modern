'use client';

import { useEffect, useState } from 'react';

const services = [
  { no: '01', icon: 'PR', title: 'Privatrechtsschutz', tag: 'Privat & Familie', text: 'Sicherheit im Alltag, im Beruf, im Verkehr und rund ums Wohnen – passend zu Ihrer Lebenssituation.' },
  { no: '02', icon: 'VR', title: 'Vermieterrechtsschutz', tag: 'Immobilien', text: 'Klare Absicherung bei Mietausfällen, Streit mit Mietern und Konflikten rund um Ihre Immobilie.' },
  { no: '03', icon: 'FR', title: 'Firmenrechtsschutz', tag: 'Unternehmen', text: 'Rechtliche Rückendeckung für Betriebe – von Arbeitsrecht bis Vertrags- und Steuerrechtsschutz.' },
  { no: '04', icon: 'MR', title: 'Managerrechtsschutz', tag: 'Verantwortung', text: 'Persönlicher Schutz für Geschäftsführer, Vorstände und leitende Angestellte bei hoher Verantwortung.' },
  { no: '05', icon: 'IT', title: 'IT-Versicherungen', tag: 'Cyber & Technik', text: 'Individuelle Absicherung gegen Cyberrisiken, Datenverlust und digitale Betriebsunterbrechungen.' },
  { no: '06', icon: 'PK', title: 'Private Krankenversicherung', tag: 'Gesundheit', text: 'Leistungsstarke Versorgung, verständlich verglichen und langfristig auf Ihre Pläne abgestimmt.' },
  { no: '07', icon: 'AV', title: 'Altersvorsorge 2027', tag: 'Zukunft', text: 'Vorausschauende Vorsorge mit einem Konzept, das zu Einkommen, Familie und Ruhestandsziel passt.' },
];

const benefits = [
  { icon: '§', title: 'Waffengleichheit', text: 'Streiten Sie auf Augenhöhe – egal ob gegen Konzerne, Behörden oder den Nachbarn.' },
  { icon: '€', title: 'Voller Kostenschutz', text: 'Keine Angst vor hohen Anwalts- und Gerichtskosten. Dieses Risiko nimmt Ihnen der passende Schutz ab.' },
  { icon: '↗', title: 'Smarte Konfliktlösung', text: 'Oft helfen Mediation oder ein klärendes Gespräch. Ich zeige Ihnen den schnellsten Weg zur Lösung.' },
];

const reviews = [
  { name: 'Thomas Scheid', text: 'Schnell! Fachlich und sachlich super! Beratung im Sinne des VN! So sollte es sein.', age: 'vor 2 Jahren' },
  { name: 'Josipa Čičak', text: 'Herr Dietze ist sehr kompetent, freundlich und immer erreichbar. Wir sind sehr mit dem Service zufrieden.', age: 'vor 1 Jahr' },
  { name: 'Anke Schneider', text: 'Professionelle Beratung und sehr freundliche Kommunikation. Unsere Anfrage wurde zügig und problemlos bearbeitet.', age: 'vor 3 Jahren' },
  { name: 'Sandra Diegelmann', text: 'Zielführende, rasche und ausführliche Beratung zum Vermieterrechtsschutz. Gewissenhaft und persönlich.', age: 'vor 2 Jahren' },
  { name: 'Monique Zö', text: 'Super Beratung, schnelle Reaktion auf Anfragen und sehr freundlich. Vielen lieben Dank!', age: 'vor 3 Jahren' },
  { name: 'Kai Pawlitzki', text: 'Immer gut erreichbar und eine tadellose Beratung, die auch wirklich zum Ziel führt.', age: 'vor 5 Jahren' },
];

const faqs = [
  { q: 'Was sollte ein guter Privatrechtsschutz abdecken?', a: 'Mindestens Privat- und Berufsrechtsschutz, Verkehrsrechtsschutz sowie je nach Lebenssituation Mieter- oder Vermieterrechtsschutz. Wichtig sind außerdem eine hohe Deckungssumme, Auslandsleistungen, telefonische Rechtsberatung und Mediation.' },
  { q: 'Wie lässt sich beim Rechtsschutz Geld sparen?', a: 'Eine höhere Selbstbeteiligung senkt meist den Beitrag. Ebenso sinnvoll: nur die Bausteine wählen, die Sie wirklich brauchen, jährlich statt monatlich zahlen und bestehende Verträge regelmäßig prüfen lassen.' },
  { q: 'Kann ich die Selbstbeteiligung selbst bestimmen?', a: 'Ja. Üblich sind Stufen zwischen 150 und 500 Euro pro Rechtsstreit. Welche Kombination aus Beitrag und Eigenanteil sinnvoll ist, hängt von Ihrem Budget und Sicherheitsbedürfnis ab.' },
  { q: 'Was leistet eine Rechtsschutzversicherung nicht?', a: 'Typische Ausschlüsse sind vorsätzliche Straftaten, bereits bekannte Konflikte, bestimmte Bau- und Erbstreitigkeiten sowie Geldstrafen. Die Details unterscheiden sich je nach Tarif erheblich.' },
  { q: 'Was kostet eine Rechtsschutzversicherung?', a: 'Der Beitrag hängt von Bausteinen, Selbstbeteiligung und versicherten Personen ab. Solider Schutz für Einzelpersonen beginnt häufig bei etwa 10–20 Euro im Monat; ein persönliches Angebot ist genauer.' },
  { q: 'Gilt Rechtsschutz auch im Ausland?', a: 'Die meisten Tarife enthalten europäischen Auslandsschutz, viele auch weltweiten Schutz. Deckungssummen und Geltungsdauer können außerhalb Deutschlands begrenzt sein.' },
  { q: 'Wer ist im Familientarif mitversichert?', a: 'In der Regel Ehe- oder Lebenspartner sowie unverheiratete Kinder – oft auch während Studium oder Ausbildung. Altersgrenzen und Voraussetzungen variieren je nach Anbieter.' },
  { q: 'Welche Wartezeiten gelten?', a: 'Viele Bereiche starten direkt. Für Miet-, Vermieter- oder Arbeitsrechtsschutz gelten je nach Tarif oft drei Monate Wartezeit. Es gibt auch Sofortschutz-Varianten.' },
  { q: 'Besteht freie Anwaltswahl?', a: 'Ja. Sie können Ihren Anwalt grundsätzlich frei wählen. Auf Wunsch hilft Florian Dietze auch bei der Suche nach einem passenden Fachanwalt.' },
  { q: 'Welche Kosten werden übernommen?', a: 'Je nach Tarif Anwaltsgebühren nach RVG, Gerichtskosten, Zeugen- und Sachverständigenkosten und bei Prozessverlust oft auch die Kosten der Gegenseite. Bußgelder und Geldstrafen sind nicht versichert.' },
];

const posts = [
  { image: '/assets/blog-beep.jpeg', category: 'Rechtsschutz einfach erklärt', date: '5. Juni 2026', title: 'Das BEEP-Gesetz: Was sich jetzt für Sie ändert' },
  { image: '/assets/blog-vermieter.jpeg', category: 'Vermieterrechtsschutz', date: '19. Februar 2025', title: 'Vermieten mit Sicherheit statt Bauchschmerzen' },
  { image: '/assets/blog-arbeitsgericht.jpg', category: 'Arbeitsrecht', date: '11. August 2024', title: 'Jobverlust nach 20 Jahren Betriebszugehörigkeit' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const scenes = document.querySelectorAll<HTMLElement>('[data-scene]');
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));

    let frame = 0;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let smoothVelocity = 0;
    const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

    const renderScroll = (time = performance.now()) => {
      const currentY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? currentY / max : 0;
      const elapsed = Math.max(16, time - lastTime);
      const instantVelocity = (currentY - lastY) / elapsed;
      smoothVelocity += (instantVelocity - smoothVelocity) * .16;
      root.style.setProperty('--scroll-progress', String(progress));
      root.style.setProperty('--hero-progress', String(clamp(currentY / (window.innerHeight * .92))));
      root.style.setProperty('--hero-shift', `${Math.min(currentY * .12, 92)}px`);
      root.style.setProperty('--scene-scroll', `${currentY}px`);
      root.style.setProperty('--scroll-velocity', String(clamp(Math.abs(smoothVelocity), 0, 2.4)));

      let activeScene = 0;
      let activeDistance = Number.POSITIVE_INFINITY;
      scenes.forEach((scene, index) => {
        const rect = scene.getBoundingClientRect();
        const sceneProgress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
        const sceneCenter = clamp((window.innerHeight * .5 - (rect.top + rect.height * .5)) / window.innerHeight, -1, 1);
        scene.style.setProperty('--scene-progress', sceneProgress.toFixed(4));
        scene.style.setProperty('--scene-center', sceneCenter.toFixed(4));
        const distance = Math.abs(rect.top + rect.height * .5 - window.innerHeight * .5);
        if (distance < activeDistance) {
          activeDistance = distance;
          activeScene = index;
        }
      });

      scenes.forEach((scene, index) => scene.classList.toggle('is-active-scene', index === activeScene));
      const indexNode = document.querySelector<HTMLElement>('.scroll-scene-index');
      const nameNode = document.querySelector<HTMLElement>('.scroll-scene-name');
      if (indexNode) indexNode.textContent = String(activeScene + 1).padStart(2, '0');
      if (nameNode) nameNode.textContent = scenes[activeScene]?.dataset.sceneLabel ?? 'Start';

      lastY = currentY;
      lastTime = time;
    };
    const requestScrollRender = () => {
      if (frame) return;
      frame = window.requestAnimationFrame((time) => {
        frame = 0;
        renderScroll(time);
      });
    };
    const updatePointer = (event: PointerEvent) => {
      if (reducedMotion.matches) return;
      const x = (event.clientX / window.innerWidth - .5) * 2;
      const y = (event.clientY / window.innerHeight - .5) * 2;
      root.style.setProperty('--pointer-x', x.toFixed(3));
      root.style.setProperty('--pointer-y', y.toFixed(3));
    };
    root.classList.toggle('motion-reduced', reducedMotion.matches);
    renderScroll();
    window.addEventListener('scroll', requestScrollRender, { passive: true });
    window.addEventListener('resize', requestScrollRender, { passive: true });
    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestScrollRender);
      window.removeEventListener('resize', requestScrollRender);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient-scene" aria-hidden="true">
        <span className="ambient-orbit orbit-large" />
        <span className="ambient-orbit orbit-small" />
        <span className="ambient-sphere sphere-yellow" />
        <span className="ambient-sphere sphere-glass" />
      </div>
      <div className="cinematic-stage" aria-hidden="true">
        <span className="depth-grid" />
        <span className="light-beam beam-one" />
        <span className="light-beam beam-two" />
        <span className="scene-flare" />
        <div className="scroll-hud">
          <span className="scroll-scene-index">01</span>
          <span className="hud-line"><i /></span>
          <span className="scroll-scene-name">Start</span>
        </div>
      </div>
      <div className="flow-spine" aria-hidden="true"><span /><span /><span /></div>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Florian Dietze Versicherungen – Startseite">
          <img className="arag-logo" src="/assets/arag-logo.svg" alt="ARAG" />
          <span><strong>Florian Dietze</strong><small>ARAG Generalagentur · Augsburg</small></span>
        </a>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Hauptnavigation">
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#ueber-mich" onClick={closeMenu}>Über mich</a>
          <a href="#bewertungen" onClick={closeMenu}>Bewertungen</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>
        <a className="button button-small header-cta" href="https://tally.so/r/7RMbKz" target="_blank" rel="noreferrer">Angebot anfordern</a>
        <button className="menu-button" type="button" aria-label="Menü öffnen" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero scene-panel" id="top" data-scene data-scene-label="Start">
        <div className="hero-ring ring-one" /><div className="hero-ring ring-two" /><div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Rechtsschutz-Spezialist in Augsburg</div>
          <h1>Ihr gutes Recht.<br /><em>Persönlich geschützt.</em></h1>
          <p className="hero-intro">Rechtsschutz in Klartext – vom Spezialisten, nicht aus dem Callcenter. Seit 2007 persönlich für Sie da.</p>
          <div className="hero-actions">
            <a className="button" href="https://tally.so/r/7RMbKz" target="_blank" rel="noreferrer">Angebot in 24 h anfordern <span>↗</span></a>
            <a className="text-link" href="tel:+4982147865935">☎ 0821 478 659 35</a>
          </div>
          <div className="trust-row">
            <span><strong>4,9</strong> ★★★★★<small>600+ Bewertungen</small></span>
            <span><strong>Seit 2007</strong><small>in Augsburg</small></span>
            <span><strong>IHK</strong><small>Fachwirt & Betriebswirt</small></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img src="/assets/florian-dietze.jpg" alt="Florian Dietze, Versicherungsspezialist in Augsburg" width={907} height={1360} />
          </div>
          <div className="availability"><i /> Persönlich erreichbar</div>
          <div className="experience"><strong>19</strong><span>Jahre<br />Erfahrung</span></div>
        </div>
      </section>

      <div className="promise-bar" aria-label="Serviceversprechen">
        <div className="promise-track">
          <span>Persönliche Beratung</span><b>◆</b><span>Klare Empfehlungen</span><b>◆</b><span>Schnelle Rückmeldung</span><b>◆</b><span>Kein Callcenter</span><b>◆</b><span>Persönliche Beratung</span><b>◆</b><span>Klare Empfehlungen</span>
        </div>
      </div>

      <section className="section benefits-section scene-panel" data-scene data-scene-label="Warum Rechtsschutz">
        <div className="section-heading reveal">
          <p className="section-kicker">Warum Rechtsschutz?</p>
          <h2>Sicherheit, die Ihnen<br /><em>den Rücken freihält.</em></h2>
          <p>Ein Konflikt kommt selten gelegen. Mit dem passenden Schutz behalten Sie die Ruhe – finanziell und persönlich.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map((item, index) => (
            <article className="benefit-card reveal" style={{ transitionDelay: `${index * 90}ms` }} key={item.title}>
              <span className="card-icon">{item.icon}</span>
              <span className="card-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section scene-panel" id="leistungen" data-scene data-scene-label="Leistungen">
        <div className="services-depth" aria-hidden="true"><span /><span /></div>
        <div className="section-heading inverse reveal">
          <p className="section-kicker">Leistungen</p>
          <h2>Welcher Schutz passt<br /><em>zu Ihrem Leben?</em></h2>
          <p>Keine Standardpakete. Gemeinsam wählen wir genau die Bausteine, die Sie wirklich brauchen.</p>
        </div>
        <div className="service-list reveal">
          {services.map((service) => (
            <a className="service-row" href="#kontakt" key={service.no}>
              <span className="service-no">{service.no}</span>
              <span className="service-icon">{service.icon}</span>
              <span className="service-main"><small>{service.tag}</small><strong>{service.title}</strong></span>
              <span className="service-text">{service.text}</span>
              <span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section scene-panel" id="ueber-mich" data-scene data-scene-label="Über mich">
        <div className="about-depth" aria-hidden="true"><span /></div>
        <div className="about-image reveal">
          <img src="/assets/florian-dietze.jpg" alt="Florian Dietze bei der persönlichen Beratung" width={907} height={1360} loading="lazy" />
          <div className="image-badge"><span>FD</span><p>Ihr Partner<br /><strong>auf Augenhöhe.</strong></p></div>
        </div>
        <div className="about-copy reveal">
          <p className="section-kicker">Über mich</p>
          <h2>Beratung mit<br /><em>Haltung & Klartext.</em></h2>
          <p className="lead">Seit 2007 helfe ich Menschen dabei, ihr Recht zu bekommen. Ich bin keine anonyme Hotline, sondern Ihr persönlicher Ansprechpartner.</p>
          <p>Meine Kunden schätzen, dass ich ehrlich sage, was versicherbar ist – und was nicht. So erleben Sie im Ernstfall keine bösen Überraschungen.</p>
          <div className="credentials">
            <span>Versicherungskaufmann <i>IHK</i></span>
            <span>Fachwirt für Finanzberatung <i>IHK</i></span>
            <span>Betriebswirt <i>IHK</i></span>
          </div>
          <a className="button dark-button" href="#kontakt">Persönlich kennenlernen <span>↗</span></a>
        </div>
      </section>

      <section className="reviews-section scene-panel" id="bewertungen" data-scene data-scene-label="Kundenstimmen">
        <div className="reviews-halo" aria-hidden="true" />
        <div className="reviews-heading reveal">
          <div>
            <p className="section-kicker">Kundenstimmen</p>
            <h2>Vertrauen, das<br /><em>man nachlesen kann.</em></h2>
          </div>
          <div className="rating-big"><strong>4,9</strong><span>★★★★★<small>aus 600+ Bewertungen</small></span></div>
        </div>
        <div className="review-marquee reveal">
          <div className="review-track">
            {[...reviews, ...reviews].map((review, index) => (
              <article className="review-card" key={`${review.name}-${index}`}>
                <div className="review-stars">★★★★★</div>
                <blockquote>„{review.text}“</blockquote>
                <footer><span>{review.name}</span><small>{review.age} · Google</small></footer>
              </article>
            ))}
          </div>
        </div>
        <p className="review-note reveal">Bewertungen stammen von Google, ProvenExpert, finanzen.de und einem eigenen, nur an tatsächlich beratene Kunden versendeten Bewertungsformular. <a href="https://www.provenexpert.com/arag-versicherungen-florian-dietze/" target="_blank" rel="noreferrer">Alle Bewertungen ansehen ↗</a></p>
      </section>

      <section className="process-section scene-panel" data-scene data-scene-label="Ablauf">
        <div className="process-ribbon" aria-hidden="true" />
        <div className="section-heading reveal">
          <p className="section-kicker">So funktioniert’s</p>
          <h2>In drei Schritten<br /><em>zum passenden Schutz.</em></h2>
        </div>
        <div className="process-grid">
          {[
            ['01', 'Anfrage senden', 'Sagen Sie mir kurz, worum es geht – online, telefonisch oder per WhatsApp.'],
            ['02', 'Persönlich sprechen', 'Ich kläre Ihren Bedarf, beantworte Fragen und zeige ehrlich die relevanten Optionen.'],
            ['03', 'Klar entscheiden', 'Sie erhalten innerhalb von 24 Stunden eine konkrete, nachvollziehbare Empfehlung.'],
          ].map((step, index) => (
            <article className="process-card reveal" style={{ transitionDelay: `${index * 100}ms` }} key={step[0]}>
              <span>{step[0]}</span><div className="process-dot" /><h3>{step[1]}</h3><p>{step[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section scene-panel" id="faq" data-scene data-scene-label="Häufige Fragen">
        <div className="faq-heading reveal">
          <p className="section-kicker">Häufige Fragen</p>
          <h2>Klar gefragt.<br /><em>Klar beantwortet.</em></h2>
          <p>Noch etwas unklar? Rufen Sie mich an – Sie sprechen direkt mit mir.</p>
          <a className="text-link" href="tel:+4982147865935">☎ 0821 478 659 35</a>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <article className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={faq.q}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{faq.q}</strong><i>＋</i>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-section scene-panel" id="wissen" data-scene data-scene-label="Wissen">
        <div className="journal-heading reveal">
          <div><p className="section-kicker">Wissen</p><h2>Rechtsschutz.<br /><em>Einfach erklärt.</em></h2></div>
          <a className="text-link" href="https://www.augsburg-versicherungen.de/blog" target="_blank" rel="noreferrer">Alle Beiträge ansehen ↗</a>
        </div>
        <div className="journal-grid">
          {posts.map((post, index) => (
            <a className="post-card reveal" style={{ transitionDelay: `${index * 90}ms` }} href="https://www.augsburg-versicherungen.de/blog" target="_blank" rel="noreferrer" key={post.title}>
              <div className="post-image"><img src={post.image} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <p>{post.category} · {post.date}</p><h3>{post.title}</h3><i>Weiterlesen ↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section scene-panel" id="kontakt" data-scene data-scene-label="Kontakt">
        <div className="contact-orb orb-a" /><div className="contact-orb orb-b" />
        <div className="contact-copy reveal">
          <p className="section-kicker">Kontakt</p>
          <h2>Lassen Sie uns über<br /><em>Ihren Schutz sprechen.</em></h2>
          <p>Ich melde mich persönlich – meist innerhalb eines Werktages. Kein Callcenter, keine Weiterleitung.</p>
          <div className="contact-actions">
            <a className="button" href="https://tally.so/r/7RMbKz" target="_blank" rel="noreferrer">Angebot in 24 h anfordern <span>↗</span></a>
            <a className="ghost-button" href="https://tally.so/r/obvDyN" target="_blank" rel="noreferrer">Rückruf vereinbaren</a>
          </div>
        </div>
        <div className="contact-card reveal">
          <div className="contact-person"><img src="/assets/florian-dietze.jpg" alt="Florian Dietze" width={907} height={1360} loading="lazy" /><span><i /> Persönlich für Sie da</span></div>
          <a href="tel:+4982147865935"><small>Festnetz</small><strong>0821 478 659 35</strong><span>↗</span></a>
          <a href="https://wa.me/491735734715" target="_blank" rel="noreferrer"><small>Mobil / WhatsApp</small><strong>0173 573 4715</strong><span>↗</span></a>
          <a href="mailto:florian.dietze@augsburg-versicherungen.de"><small>E-Mail</small><strong>florian.dietze@augsburg-versicherungen.de</strong><span>↗</span></a>
          <p>Termin nach Vereinbarung · Ortlerstraße 49, 86163 Augsburg</p>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><img className="arag-logo" src="/assets/arag-logo.svg" alt="ARAG" /><span><strong>Florian Dietze</strong><small>ARAG Generalagentur · Augsburg</small></span></a>
        <div className="footer-links"><a href="#leistungen">Leistungen</a><a href="#ueber-mich">Über mich</a><a href="#faq">FAQ</a><a href="#kontakt">Kontakt</a></div>
        <div className="footer-social"><a href="https://www.facebook.com/ARAG.Florian.Dietze/" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://www.instagram.com/dein_rechtsschutz/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/channel/UCSlMrmGLg4Bf0DFiwiSOp-Q" target="_blank" rel="noreferrer">YouTube ↗</a></div>
        <div className="footer-bottom"><span>© 2026 Florian Dietze Versicherungen</span><span><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/491735734715" target="_blank" rel="noreferrer" aria-label="Auf WhatsApp schreiben"><span>✆</span><small>WhatsApp</small></a>
    </main>
  );
}
