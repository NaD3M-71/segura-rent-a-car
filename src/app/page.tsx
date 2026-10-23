import type { Metadata } from 'next'
import Chooser from '@/components/Chooser'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, CITY, REGION, rentACar } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Segura | Rent a Car y Taxi en Esquel, Chubut' },
  description:
    'Alquiler de autos Volkswagen Polo y servicio de taxi en Esquel, Chubut. Elegí Segura Rent a Car o Taxi Segura y consultá por WhatsApp.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Segura',
          url: SITE_URL,
          logo: `${SITE_URL}/img/logo.webp`,
          telephone: rentACar.phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: CITY,
            addressRegion: REGION,
            addressCountry: 'AR',
          },
          sameAs: [],
        }}
      />
      <Chooser />
    </>
  )
}
