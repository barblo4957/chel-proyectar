import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CHEL PROYECTAR | Yeso Proyectado y Capa Fina en España',
  description:
    'Especialistas en yeso proyectado, capa fina y reformas integrales. Presupuesto sin compromiso en toda España.',
  keywords: [
    'yeso proyectado',
    'alisado de paredes',
    'capa fina',
    'reformas',
    'presupuesto sin compromiso'
  ],
  openGraph: {
    title: 'CHEL PROYECTAR | Yeso Proyectado y Capa Fina en España',
    description:
      'Servicio profesional de yeso proyectado, acabados de capa fina y reformas integrales con garantia.',
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
