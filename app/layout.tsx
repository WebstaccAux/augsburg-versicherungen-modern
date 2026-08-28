import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Rechtsschutz Augsburg | Florian Dietze',
    template: '%s | Florian Dietze Versicherungen',
  },
  description: 'Rechtsschutz in Klartext: persönliche Versicherungsberatung durch Florian Dietze in Augsburg – seit 2007, ohne Callcenter.',
  openGraph: {
    title: 'Ihr gutes Recht. Persönlich geschützt.',
    description: 'Persönliche Rechtsschutz-Beratung in Augsburg – klar, direkt und seit 2007 für Sie da.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ihr gutes Recht. Persönlich geschützt.',
    description: 'Persönliche Rechtsschutz-Beratung in Augsburg – klar, direkt und seit 2007 für Sie da.',
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
