import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
