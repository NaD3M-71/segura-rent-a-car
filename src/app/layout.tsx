import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/dm-sans'
import './globals.css'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Segura | Rent a Car y Taxi en Esquel, Chubut',
    template: '%s | Segura Esquel',
  },
  description:
    'Segura Rent a Car y Taxi Segura en Esquel, Chubut. Alquiler de autos Volkswagen Polo y servicio de taxi para recorrer Esquel, Trevelin y la cordillera.',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Segura Esquel',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Laguna La Zeta y cordillera, Esquel' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  )
}
