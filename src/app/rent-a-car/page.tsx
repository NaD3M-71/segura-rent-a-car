import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Pic from '@/components/Pic'
import JsonLd from '@/components/JsonLd'
import FleetSpecs from '@/components/FleetSpecs'
import QuickRequest from '@/components/QuickRequest'
import ContactForm from '@/components/ContactForm'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import DevCredit from '@/components/DevCredit'
import AgencyMap from '@/components/AgencyMap'
import { ArrowIcon, CarIcon, ChatIcon, ClockIcon, LuggageIcon, MailIcon, PhoneIcon, PinIcon, RouteIcon, SeatIcon } from '@/components/Icons'
import { SITE_URL, CITY, REGION, rentACar, waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Alquiler de autos en Esquel',
  description:
    'Segura Rent a Car: alquiler de autos Volkswagen Polo en Esquel, Chubut. Entrega en la ciudad, sillas para niños, portaequipaje y transfer a Trevelin y al aeropuerto.',
  alternates: { canonical: '/rent-a-car/' },
  openGraph: { url: '/rent-a-car/', title: 'Alquiler de autos en Esquel | Segura Rent a Car' },
}

const nav = [
  { href: '#flota', label: 'Flota' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#contacto', label: 'Contacto' },
]

const specs = [
  {
    title: 'Mecánica',
    items: ['Motor MSI 1.6 L de 110 CV', 'Caja manual de 5 velocidades'],
  },
  {
    title: 'Confort',
    items: [
      'Aire acondicionado',
      'Levantacristales eléctricos delanteros y traseros',
      'Computadora de a bordo',
      'Dirección asistida eléctrica progresiva',
      'Pantalla táctil de 6,5" con Bluetooth y entrada auxiliar',
    ],
  },
  {
    title: 'Seguridad',
    items: ['Frenos ABS', '4 airbags', 'Anclaje para asientos infantiles', 'Control de estabilidad', 'Alarma'],
  },
]

const services = [
  {
    icon: SeatIcon,
    title: 'Sillas para niños',
    text: 'Podés sumar hasta 2 sillas de seguridad para niños de hasta 10 años, como pide la ley de tránsito nacional.',
  },
  {
    icon: LuggageIcon,
    title: 'Portaequipaje y portaesquíes',
    text: 'Ideal para llevar el equipo extra al Cerro La Hoya o viajar en familia con todo bien asegurado.',
  },
  {
    icon: RouteIcon,
    title: 'Transfer al aeropuerto y a Trevelin',
    text: 'La entrega del auto dentro de Esquel no tiene costo. El transfer hacia el aeropuerto o Trevelin es un adicional.',
  },
]

const destinos = [
  { img: 'tulipanes', w: 720, h: 901, title: 'Campos de tulipanes', text: 'Trevelin, a pocos kilómetros de Esquel.' },
  { img: 'arrayanes', w: 720, h: 888, title: 'Río Arrayanes', text: 'Agua clara y bosque andino.' },
  { img: 'terraplen', w: 720, h: 900, title: 'Laguna Terraplén', text: 'Un clásico para la foto de la cordillera.' },
  { img: 'trochita', w: 1476, h: 1078, title: 'La Trochita', text: 'El histórico tren a vapor de Esquel.', small: true },
]

export default function RentACarPage() {
  const url = `${SITE_URL}/rent-a-car/`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AutoRental',
          name: rentACar.name,
          url,
          image: `${SITE_URL}/img/og.jpg`,
          telephone: rentACar.phone,
          email: rentACar.email,
          description: 'Alquiler de autos Volkswagen Polo en Esquel, Chubut.',
          geo: { '@type': 'GeoCoordinates', latitude: rentACar.lat, longitude: rentACar.lng },
          address: {
            '@type': 'PostalAddress',
            streetAddress: rentACar.street,
            postalCode: rentACar.postalCode,
            addressLocality: CITY,
            addressRegion: REGION,
            addressCountry: 'AR',
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '21:00',
          },
          areaServed: ['Esquel', 'Trevelin', 'Cordillera de Chubut'],
        }}
      />

      <Header variant="rent" nav={nav} />

      <main className="page-in">
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-16">
          <Pic
            name="laguna"
            width={1170}
            height={635}
            small
            alt="Laguna La Zeta con la cordillera nevada y el cartel de Esquel"
            priority
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                <PinIcon className="h-4 w-4 text-brand" />
                Esquel, Chubut
              </p>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
                Alquiler de autos <span className="text-brand">en Esquel</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-fog/85">
                Autos cómodos y seguros para conocer los paisajes patagónicos que nos rodean, con atención personalizada
                de principio a fin.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink(rentACar.whatsapp, 'Hola, quiero consultar por el alquiler de un auto en Esquel.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  <ChatIcon className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
                <a
                  href="#flota"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Ver la flota
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-fog/80">
                <li className="flex items-center gap-2">
                  <CarIcon className="h-5 w-5 text-brand" />
                  Volkswagen Polo
                </li>
                <li className="flex items-center gap-2">
                  <PinIcon className="h-5 w-5 text-brand" />
                  Entrega sin cargo en Esquel
                </li>
                <li className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-brand" />
                  Atención {rentACar.hours}
                </li>
              </ul>
            </div>

            <QuickRequest
              accent="brand"
              title="Consultá disponibilidad"
              intro="Elegí las fechas y lo que necesitás. Te respondemos por WhatsApp."
              whatsapp={rentACar.whatsapp}
              opening="Hola, quiero consultar disponibilidad para alquilar un auto."
              cta="Enviar consulta por WhatsApp"
              fields={[
                { name: 'retiro', label: 'Retiro', type: 'date' },
                { name: 'devolucion', label: 'Devolución', type: 'date' },
                {
                  name: 'extras',
                  label: 'Adicionales',
                  type: 'multi',
                  options: ['Silla para niños', 'Portaequipaje o portaesquíes', 'Transfer al aeropuerto', 'Transfer a Trevelin'],
                },
              ]}
            />
          </div>
        </section>

        {/* FLOTA */}
        <section id="flota" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Nuestra flota</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Volkswagen Polo Trend</h2>
            <p className="mt-4 text-fog/80">
              Un auto ágil, económico y equipado, ideal tanto para moverte por la ciudad como para salir a la ruta.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal overflow-hidden rounded-3xl border border-white/10 bg-surface">
              <Pic
                name="polo"
                width={1400}
                height={777}
                small
                sizes="(min-width: 1024px) 560px, 100vw"
                alt="Volkswagen Polo blanco con barras portaequipaje frente a un lago y la cordillera"
                className="h-auto w-full"
              />
            </div>
            <div className="reveal">
              <FleetSpecs groups={specs} />
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="border-y border-white/10 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="reveal max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Servicios adicionales</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Todo lo que necesitás para el viaje</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="reveal rounded-3xl border border-line bg-surface-2 p-7 transition-colors hover:border-brand/60"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog/75">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section id="destinos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Para recorrer</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Lugares que valen el camino</h2>
            <p className="mt-4 text-fog/80">
              Con un auto propio armás el viaje a tu medida: salís cuando querés y parás donde te gusta.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinos.map((d) => (
              <figure key={d.title} className="reveal group relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Pic
                  name={d.img}
                  width={d.w}
                  height={d.h}
                  small={d.small}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  alt={d.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold">{d.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{d.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/10 bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contacto</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Reservá tu auto</h2>
              <p className="mt-4 max-w-md text-fog/80">
                Dejanos tu consulta y te respondemos a la brevedad. Gracias por confiar en nosotros.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src="/img/juan.webp"
                  width={150}
                  height={195}
                  alt="Juan Segura"
                  loading="lazy"
                  className="h-24 w-[74px] rounded-2xl object-cover"
                />
                <div>
                  <p className="text-lg font-bold">{rentACar.owner}</p>
                  <p className="text-sm text-mute">Atención personalizada</p>
                </div>
              </div>

              <ul className="mt-8 grid gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-brand" />
                  <a href={`tel:+${rentACar.whatsapp}`} className="hover:underline">
                    {rentACar.phone}
                  </a>
                  <span className="text-mute">Teléfono y WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-brand" />
                  <a href={`mailto:${rentACar.email}`} className="break-all hover:underline">
                    {rentACar.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-brand" />
                  Atención de {rentACar.hours}
                </li>
                <li className="flex items-center gap-3">
                  <PinIcon className="h-5 w-5 text-brand" />
                  {rentACar.street}, {CITY}, {REGION}
                </li>
              </ul>
            </div>

            <div className="reveal rounded-3xl border border-white/10 bg-ink/60 p-6 sm:p-8">
              <h3 className="mb-5 font-display text-2xl font-bold">Enviá tu consulta</h3>
              <ContactForm />
            </div>

            <div className="reveal lg:col-span-2">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold">Dónde estamos</h3>
                  <p className="text-sm text-mute">
                    {rentACar.street}, {CITY}, {REGION}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${rentACar.lat},${rentACar.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Cómo llegar
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <AgencyMap
                lat={rentACar.lat}
                lng={rentACar.lng}
                label={rentACar.name}
                address={`${rentACar.street}, ${CITY}`}
              />
            </div>
          </div>
        </section>

        {/* CRUCE CON TAXI */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link
            href="/taxi/"
            className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-taxi/40 bg-taxi/10 p-8 transition-colors hover:bg-taxi/15 sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-display text-2xl font-extrabold">¿Necesitás un taxi?</p>
              <p className="mt-1 text-fog/80">También tenemos Taxi Segura, para traslados dentro de Esquel y alrededores.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-taxi px-5 py-2.5 text-sm font-bold text-black">
              Ir a Taxi Segura
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-mute">
        <p>
          © {new Date().getFullYear()} Segura Rent a Car · {CITY}, {REGION}, Argentina
        </p>
        <DevCredit />
      </footer>

      <FloatingWhatsApp number={rentACar.whatsapp} message="Hola, quiero consultar por el alquiler de un auto en Esquel." />
    </>
  )
}
