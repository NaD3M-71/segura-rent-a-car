'use client'

import { useState } from 'react'
import { CheckIcon } from './Icons'

type Group = { title: string; items: string[] }

// Pestanas con las caracteristicas del auto. El contenido llega por props desde la pagina.
export default function FleetSpecs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div role="tablist" aria-label="Caracteristicas del auto" className="flex gap-2">
        {groups.map((g, i) => (
          <button
            key={g.title}
            role="tab"
            id={`spec-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`spec-panel-${i}`}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              active === i
                ? 'border-brand bg-brand text-white'
                : 'border-line text-fog/80 hover:border-white/40 hover:text-white'
            }`}
          >
            {g.title}
          </button>
        ))}
      </div>

      {groups.map((g, i) => (
        <ul
          key={g.title}
          role="tabpanel"
          id={`spec-panel-${i}`}
          aria-labelledby={`spec-tab-${i}`}
          hidden={active !== i}
          className="mt-6 grid gap-3"
        >
          {g.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-fog/90">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
