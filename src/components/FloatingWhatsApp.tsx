import { ChatIcon } from './Icons'
import { waLink } from '@/lib/site'

type Props = { number: string; message: string }

// Boton fijo abajo a la derecha: el contacto siempre a un toque
export default function FloatingWhatsApp({ number, message }: Props) {
  return (
    <a
      href={waLink(number, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="ping-soft fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-black shadow-lg transition-transform hover:scale-105 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"
    >
      <ChatIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  )
}
