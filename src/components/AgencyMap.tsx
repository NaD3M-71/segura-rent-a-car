'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

type Props = { lat: number; lng: number; label: string; address: string }

// Pin con los colores de la marca (SVG propio, sin imagenes externas)
const PIN_SVG = `<svg width="36" height="44" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M18 43C18 43 33 28 33 16A15 15 0 0 0 3 16c0 12 15 27 15 27z" fill="#ee3a3f" stroke="#fff" stroke-width="2"/>
  <circle cx="18" cy="16" r="5.5" fill="#fff"/>
</svg>`

// Mapa con Leaflet y OpenStreetMap. La libreria se descarga recien cuando el mapa esta por verse.
export default function AgencyMap({ lat, lng, label, address }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let cancelled = false
    let map: import('leaflet').Map | undefined

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()

        const mod = await import('leaflet')
        const L = (mod.default ?? mod) as typeof import('leaflet')
        if (cancelled) return

        map = L.map(el, { scrollWheelZoom: false }).setView([lat, lng], 16)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map)

        const icon = L.divIcon({
          className: '',
          html: PIN_SVG,
          iconSize: [36, 44],
          iconAnchor: [18, 44],
          popupAnchor: [0, -40],
        })
        L.marker([lat, lng], { icon, title: label })
          .addTo(map)
          .bindPopup(`<strong>${label}</strong><br>${address}`)
          .openPopup()

        // El zoom con la rueda se activa recien al hacer click, para no trabar el scroll de la pagina
        map.once('click', () => map?.scrollWheelZoom.enable())
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)

    return () => {
      cancelled = true
      observer.disconnect()
      map?.remove()
    }
  }, [lat, lng, label, address])

  return (
    <div className="map-dark relative z-0 overflow-hidden rounded-3xl border border-white/10 bg-surface-2">
      <div
        ref={ref}
        role="region"
        aria-label={`Mapa con la ubicacion de ${label}`}
        className="h-[340px] w-full md:h-[400px]"
      />
    </div>
  )
}
