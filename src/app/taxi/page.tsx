import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Pic from '@/components/Pic'
import JsonLd from '@/components/JsonLd'
import QuickRequest from '@/components/QuickRequest'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import DevCredit from '@/components/DevCredit'
import { ArrowIcon, CarIcon, ChatIcon, ClockIcon, PinIcon, PlaneIcon } from '@/components/Icons'
import { SITE_URL, CITY, REGION, taxi, waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Taxi en Esquel',
  description:
    'Taxi Segura, 15 años de trayectoria en Esquel: atención inmediata de 6 a 22 hs y las 24 horas con reserva. Te esperamos en el aeropuerto y te llevamos a tu residencia u hotel. Pedí tu taxi por WhatsApp.',
  alternates: { canonical: '/taxi/' },
  openGraph: { url: '/taxi/', title: 'Taxi en Esquel | Taxi Segura' },
}

const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-pedir', label: 'Cómo pedir' },
  { href: '#zona', label: 'Zona' },
  { href: '#contacto', label: 'Contacto' },
]

const services = [
  {
    icon: CarIcon,
    title: 'Traslados dentro y fuera de Esquel',
    text: 'Viajes por la ciudad y hacia otras localidades, en autos recientes y cuidados.',
  },
  {
    icon: PlaneIcon,
    title: 'Te esperamos en el aeropuerto',
    text: 'Te recibimos en el aeropuerto de Esquel y te llevamos a tu residencia u hotel.',
  },
  {
    icon: ClockIcon,
    title: 'Atención inmediata de 6 a 22 hs',
    text: 'Pedí tu taxi dentro de este horario y salimos a buscarte en el momento.',
  },
  {
    icon: ClockIcon,
    title: '24 horas con reserva',
    text: 'Podés pedir cualquier horario, de día o de noche, siempre que lo reserves con anticipación.',
  },
]

const steps = [
  { n: '01', title: 'Escribinos', text: 'Mandanos un mensaje por WhatsApp o completá el formulario de arriba.' },
  { n: '02', title: 'Indicá tu viaje', text: 'Decinos dónde te buscamos, a dónde vas y para cuándo.' },
  { n: '03', title: 'Te confirmamos', text: 'Te respondemos con la disponibilidad y salimos a buscarte.' },
]

export default function TaxiPage() {
  const url = `${SITE_URL}/taxi/`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': ['LocalBusiness', 'TaxiService'],
          name: taxi.name,
          url,
          image: `${SITE_URL}/img/og.jpg`,
          telephone: taxi.phone,
          description: 'Servicio de taxi en Esquel, Chubut, con 15 años de trayectoria: atención inmediata de 6 a 22 hs y las 24 horas con reserva. Traslados dentro y fuera de la ciudad y servicio de aeropuerto.',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '06:00',
            closes: '22:00',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: CITY,
            addressRegion: REGION,
            addressCountry: 'AR',
          },
          areaServed: ['Esquel', 'Aeropuerto de Esquel'],
        }}
      />

      <Header variant="taxi" nav={nav} />

      <main className="page-in">
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-16">
          <Pic
            name="taxi-nieve"
            width={1600}
            height={720}
            small
            alt="Taxi blanco junto al cartel de Esquel con nieve y la cordillera de fondo"
            priority
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/75 to-ink" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                <ClockIcon className="h-4 w-4 text-taxi" />
                15 años de trayectoria
              </p>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
                Taxi <span className="text-taxi">en Esquel</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-fog/85">
                Traslados dentro y fuera de Esquel. Atención inmediata de 6 a 22 hs y las 24 horas con reserva. Te
                esperamos en el aeropuerto y te llevamos a tu residencia u hotel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink(taxi.whatsapp, 'Hola, necesito un taxi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-taxi px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
                >
                  <ChatIcon className="h-5 w-5" />
                  Pedir un taxi
                </a>
                <a
                  href="#servicios"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Ver servicios
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <QuickRequest
              accent="taxi"
              title="Pedí tu taxi"
              intro="Completá los datos del viaje y se abre WhatsApp con el mensaje listo."
              whatsapp={taxi.whatsapp}
              opening="Hola, necesito un taxi."
              cta="Pedir por WhatsApp"
              fields={[
                { name: 'origen', label: 'Te buscamos en', type: 'text', placeholder: 'Dirección o lugar' },
                { name: 'destino', label: 'Vas a', type: 'text', placeholder: 'Dirección o lugar' },
                { name: 'cuando', label: 'Cuándo', type: 'text', placeholder: 'Ahora, o día y hora' },
                {
                  name: 'pasajeros',
                  label: 'Pasajeros',
                  type: 'select',
                  options: ['1', '2', '3', '4'],
                },
              ]}
            />
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taxi">Servicios</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Moverte por Esquel, simple</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="reveal rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-taxi/60"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-taxi/15 text-taxi">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog/75">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* COMO PEDIR */}
        <section id="como-pedir" className="border-y border-white/10 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="reveal max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taxi">Cómo pedir</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Tres pasos y listo</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="reveal rounded-3xl border border-line bg-surface-2 p-7">
                  <span className="font-display text-5xl font-extrabold text-taxi/90">{s.n}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog/75">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ZONA */}
        <section id="zona" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taxi">Zona de trabajo</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Conocemos cada camino</h2>
            <p className="mt-4 max-w-md text-fog/80">
              Trabajamos en Esquel y hacemos viajes fuera de la ciudad. Nuestras unidades son autos recientes, dentro de la
              antigüedad que exige la normativa. Consultanos tu destino y lo coordinamos.
            </p>
            <a
              href={waLink(taxi.whatsapp, 'Hola, quiero consultar por un viaje en taxi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-taxi px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
            >
              <ChatIcon className="h-5 w-5" />
              Consultar un viaje
            </a>
          </div>
          <div className="reveal overflow-hidden rounded-3xl border border-white/10">
            <Pic
              name="taxi-trochita"
              width={1280}
              height={1118}
              small
              sizes="(min-width: 1024px) 520px, 100vw"
              alt="Taxi Segura estacionado frente a la locomotora de La Trochita en Esquel"
              className="h-auto max-h-[560px] w-full object-cover"
            />
          </div>
        </section>


        {/* NUESTROS TAXIS */}
        <section className="border-t border-white/10 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="reveal max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taxi">Nuestros taxis</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Siempre en movimiento</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <figure className="reveal overflow-hidden rounded-3xl">
                <Pic
                  name="taxi-nieve2"
                  width={1600}
                  height={720}
                  small
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt="Taxi blanco en un mirador nevado con el cartel de Esquel"
                  className="h-full w-full object-cover"
                />
              </figure>
              <figure className="reveal overflow-hidden rounded-3xl">
                <Pic
                  name="taxi-terminal"
                  width={1280}
                  height={576}
                  small
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt="Tres taxis blancos esperando frente a la terminal de Esquel"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
            <h2 className="reveal font-display text-4xl font-extrabold sm:text-5xl">Pedí tu taxi ahora</h2>
            <p className="reveal mt-4 text-fog/80">
              Escribinos por WhatsApp o llamanos al <strong className="text-white">{taxi.phone}</strong>. Atención inmediata de 6 a 22 hs; fuera de ese horario, reservá con anticipación.
            </p>
            <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink(taxi.whatsapp, 'Hola, necesito un taxi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-taxi px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
              >
                <ChatIcon className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:+${taxi.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Llamar
              </a>
            </div>
          </div>
        </section>

        {/* CRUCE CON RENT A CAR */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link
            href="/rent-a-car/"
            className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand/40 bg-brand/10 p-8 transition-colors hover:bg-brand/15 sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-display text-2xl font-extrabold">¿Preferís manejar vos?</p>
              <p className="mt-1 text-fog/80">Alquilá un Volkswagen Polo con Segura Rent a Car.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white">
              Ir a Rent a Car
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-mute">
        <p>
          © {new Date().getFullYear()} Taxi Segura · {CITY}, {REGION}, Argentina
        </p>
        <DevCredit />
      </footer>

      <FloatingWhatsApp number={taxi.whatsapp} message="Hola, necesito un taxi." />
    </>
  )
}
