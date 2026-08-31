import type { Metadata } from 'next';
import './globals.css';

const heroReliabilityStyles = `
  .hero-copy,
  .hero-visual,
  .experience {
    animation: none !important;
  }

  .hero .eyebrow,
  .hero h1,
  .hero h1 em,
  .hero-intro,
  .hero-actions,
  .trust-row,
  .hero-visual {
    opacity: 1 !important;
    transform: none !important;
  }

  .hero h1,
  .hero h1 em {
    color: #050505 !important;
  }

  .hero-visual {
    transition: none !important;
    transform-style: flat !important;
  }

  .portrait-frame {
    transform: none !important;
  }

  .availability,
  .experience {
    z-index: 6 !important;
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.augsburg-versicherungen.de'),
  title: {
    default: 'Rechtsschutz Augsburg | Florian Dietze',
    template: '%s | Florian Dietze Versicherungen',
  },
  description: 'Rechtsschutz in Klartext: persönliche Versicherungsberatung durch Florian Dietze in Augsburg – seit 2007, ohne Callcenter.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ihr gutes Recht. Persönlich geschützt.',
    description: 'Persönliche Rechtsschutz-Beratung in Augsburg – klar, direkt und seit 2007 für Sie da.',
    type: 'website',
    locale: 'de_DE',
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ihr gutes Recht. Persönlich geschützt. – Florian Dietze Rechtsschutz Augsburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ihr gutes Recht. Persönlich geschützt.',
    description: 'Persönliche Rechtsschutz-Beratung in Augsburg – klar, direkt und seit 2007 für Sie da.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <style dangerouslySetInnerHTML={{ __html: heroReliabilityStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
