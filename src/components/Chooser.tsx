'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Pic from './Pic'
import { ArrowIcon } from './Icons'

type Key = 'rent' | 'taxi'

export default function Chooser() {
  const router = useRouter()
  const [leaving, setLeaving] = useState<Key | null>(null)

  // Si el usuario vuelve con "atras" y el navegador restaura la pagina, se quita el estado de salida
  useEffect(() => {
    const reset = () => setLeaving(null)
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  function go(e: React.MouseEvent, href: string, key: Key) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    e.preventDefault()
    setLeaving(key)
    window.setTimeout(() => router.push(href), 480)
  }

  // Estado visual de cada mitad: normal, expandida (eligio esa) o colapsada (eligio la otra)
  function panelState(key: Key) {
    if (leaving === key) return 'flex-[40]'
    if (leaving) return 'flex-[0.001] opacity-0'
    return 'flex-1 md:hover:flex-[1.35] md:focus-visible:flex-[1.35]'
  }

  return (
    <main className="relative flex h-svh min-h-[560px] flex-col overflow-hidden md:flex-row">
      {/* Marca centrada sobre las dos mitades */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col items-center px-4 pt-6 text-center transition-opacity duration-300 md:pt-9 ${
          leaving ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img src="/img/logo.webp" width={409} height={291} alt="" className="h-12 w-auto drop-shadow-lg md:h-16" />
        <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white drop-shadow md:text-4xl">
          SEGURA
        </h1>
        <p className="mt-1 text-sm text-white/85 drop-shadow md:text-base">
          Rent a Car y Taxi en Esquel, Chubut
        </p>
      </div>

      {/* Mitad 1: Rent a Car */}
      <Link
        href="/rent-a-car/"
        onClick={(e) => go(e, '/rent-a-car/', 'rent')}
        className={`group relative flex min-h-0 items-end overflow-hidden transition-[flex-grow,opacity] duration-500 ease-out ${panelState(
          'rent',
        )}`}
      >
        <Pic
          name="laguna"
          width={1170}
          height={635}
          small
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Laguna La Zeta y la cordillera nevada, cerca de Esquel"
          priority
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-brand/30" />
        <div className="relative z-10 w-full p-6 pb-8 md:p-12 md:pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Alquiler de autos</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-none text-white md:text-6xl">
            Rent a Car
          </h2>
          <p className="mt-3 max-w-sm text-sm text-white/85 md:text-base">
            Volkswagen Polo para recorrer Esquel, Trevelin y la cordillera a tu ritmo.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-brand-dark">
            Ver autos y reservar
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      {/* Mitad 2: Taxi */}
      <Link
        href="/taxi/"
        onClick={(e) => go(e, '/taxi/', 'taxi')}
        className={`group relative flex min-h-0 items-end overflow-hidden transition-[flex-grow,opacity] duration-500 ease-out ${panelState(
          'taxi',
        )}`}
      >
        <Pic
          name="esquel-aereo"
          width={720}
          height={900}
          alt="Vista aerea de Esquel con la cordillera nevada de fondo"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-taxi/25" />
        <div className="relative z-10 w-full p-6 pb-8 md:p-12 md:pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taxi">Traslados</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-none text-white md:text-6xl">
            Taxi Segura
          </h2>
          <p className="mt-3 max-w-sm text-sm text-white/85 md:text-base">
            Traslados dentro y fuera de Esquel, las 24 horas. Te esperamos en el aeropuerto.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-taxi px-5 py-2.5 text-sm font-semibold text-black transition-[filter] group-hover:brightness-110">
            Pedir un taxi
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </main>
  )
}
