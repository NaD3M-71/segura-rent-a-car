'use client'

import { useEffect, useState } from 'react'
import { ChatIcon } from './Icons'
import { waLink } from '@/lib/site'

export type QField =
  | { name: string; label: string; type: 'text' | 'date'; placeholder?: string }
  | { name: string; label: string; type: 'select'; options: string[] }
  | { name: string; label: string; type: 'multi'; options: string[] }

type Props = {
  title: string
  intro: string
  fields: QField[]
  whatsapp: string
  opening: string // primera linea del mensaje de WhatsApp
  cta: string
  accent: 'brand' | 'taxi'
}

type Values = Record<string, string | string[]>

const accentBtn = {
  brand: 'bg-brand text-white hover:bg-brand-dark',
  taxi: 'bg-taxi text-black hover:brightness-110',
}
const accentChip = {
  brand: 'has-[:checked]:border-brand has-[:checked]:bg-brand/15',
  taxi: 'has-[:checked]:border-taxi has-[:checked]:bg-taxi/15',
}

const inputCls =
  'w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-fog placeholder:text-mute outline-none transition-colors focus:border-white/50'

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  return y && m && d ? `${d}/${m}/${y}` : iso
}

// Arma el mensaje de WhatsApp con lo que el usuario completo. No guarda nada: solo abre el chat.
export default function QuickRequest({ title, intro, fields, whatsapp, opening, cta, accent }: Props) {
  const [values, setValues] = useState<Values>({})
  const [today, setToday] = useState<string>('')

  // La fecha minima se calcula en el navegador (en el build estatico no sirve la fecha del servidor)
  useEffect(() => {
    const d = new Date()
    const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    setToday(local.toISOString().slice(0, 10))
  }, [])

  function setValue(name: string, value: string | string[]) {
    setValues((v) => ({ ...v, [name]: value }))
  }

  function toggle(name: string, option: string) {
    const current = (values[name] as string[] | undefined) ?? []
    setValue(name, current.includes(option) ? current.filter((o) => o !== option) : [...current, option])
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const lines = [opening]
    for (const f of fields) {
      const v = values[f.name]
      if (!v || (Array.isArray(v) && v.length === 0)) continue
      const text = Array.isArray(v) ? v.join(', ') : f.type === 'date' ? formatDate(v) : v
      lines.push(`${f.label}: ${text}`)
    }
    window.open(waLink(whatsapp, lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-white/10 bg-surface/90 p-5 shadow-2xl backdrop-blur-md sm:p-7"
    >
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-mute">{intro}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `qr-${f.name}`
          const full = f.type === 'multi' || f.name === 'destino' || f.name === 'origen'
          return (
            <div key={f.name} className={full ? 'sm:col-span-2' : ''}>
              {f.type === 'multi' ? (
                <fieldset>
                  <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-mute">{f.label}</legend>
                  <div className="flex flex-wrap gap-2">
                    {f.options.map((o) => (
                      <label
                        key={o}
                        className={`flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-white/40 ${accentChip[accent]}`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={((values[f.name] as string[] | undefined) ?? []).includes(o)}
                          onChange={() => toggle(f.name, o)}
                        />
                        {o}
                      </label>
                    ))}
                  </div>
                </fieldset>
              ) : (
                <>
                  <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
                    {f.label}
                  </label>
                  {f.type === 'select' ? (
                    <select
                      id={id}
                      className={inputCls}
                      value={(values[f.name] as string) ?? ''}
                      onChange={(e) => setValue(f.name, e.target.value)}
                    >
                      <option value="">Seleccionar</option>
                      {f.options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={id}
                      type={f.type}
                      className={inputCls}
                      placeholder={f.type === 'text' ? f.placeholder : undefined}
                      min={f.type === 'date' ? (f.name === 'devolucion' ? ((values.retiro as string) || today) : today) || undefined : undefined}
                      value={(values[f.name] as string) ?? ''}
                      onChange={(e) => setValue(f.name, e.target.value)}
                    />
                  )}
                </>
              )}
            </div>
          )
        })}
      </div>

      <button
        type="submit"
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${accentBtn[accent]}`}
      >
        <ChatIcon className="h-5 w-5" />
        {cta}
      </button>
      <p className="mt-3 text-center text-xs text-mute">Se abre WhatsApp con el mensaje listo para enviar.</p>
    </form>
  )
}
