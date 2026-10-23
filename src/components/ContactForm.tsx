'use client'

import { useState } from 'react'
import { rentACar } from '@/lib/site'

type Status = 'idle' | 'sending' | 'ok' | 'error'

const inputCls =
  'w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-fog placeholder:text-mute outline-none transition-colors focus:border-white/50'

// Envia la consulta por email usando formsubmit.co (sin servidor propio ni base de datos)
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // Campo trampa para bots: si viene completo, no se envia
    if (data.get('_honey')) return

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${rentACar.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nombre: data.get('nombre'),
          Telefono: data.get('telefono'),
          Email: data.get('email'),
          Consulta: data.get('consulta'),
          _subject: 'Consulta desde la web de Segura',
          _captcha: 'false',
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('fallo')
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
            Nombre y apellido
          </label>
          <input id="nombre" name="nombre" required minLength={3} maxLength={100} autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
            Telefono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            minLength={6}
            maxLength={20}
            autoComplete="tel"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
      </div>
      <div>
        <label htmlFor="consulta" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
          Tu consulta
        </label>
        <textarea id="consulta" name="consulta" required rows={5} maxLength={2000} className={inputCls} />
      </div>

      {/* Campo oculto para bots */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
      </button>

      <p role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === 'ok' && <span className="text-emerald-400">Listo, recibimos tu consulta. Te respondemos a la brevedad.</span>}
        {status === 'error' && (
          <span className="text-brand">
            No pudimos enviarla. Probá de nuevo o escribinos por WhatsApp.
          </span>
        )}
      </p>
    </form>
  )
}
