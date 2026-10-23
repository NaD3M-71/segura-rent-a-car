import Link from 'next/link'
import { ArrowIcon } from './Icons'

type Variant = 'rent' | 'taxi'

type HeaderProps = {
  variant: Variant
  nav: { href: string; label: string }[]
}

function Brand({ variant }: { variant: Variant }) {
  if (variant === 'rent') {
    return (
      <span className="flex items-center gap-3">
        <img src="/img/logo.webp" width={409} height={291} alt="" className="h-9 w-auto" />
        <span className="leading-none">
          <span className="block font-display text-lg font-extrabold tracking-tight">SEGURA</span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">Rent a Car</span>
        </span>
      </span>
    )
  }
  return (
    <span className="flex items-center gap-3">
      <img src="/img/taxi-logo.webp" width={512} height={512} alt="" className="h-10 w-10 rounded-full" />
      <span className="font-display text-lg font-extrabold uppercase tracking-tight">
        <span className="text-taxi">Taxi</span> Segura
      </span>
    </span>
  )
}

export default function Header({ variant, nav }: HeaderProps) {
  const other =
    variant === 'rent'
      ? { href: '/taxi/', label: 'Ir a Taxi Segura' }
      : { href: '/rent-a-car/', label: 'Ir a Rent a Car' }

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Volver a la portada de Segura">
          <Brand variant={variant} />
        </Link>

        <nav aria-label="Secciones" className="hidden items-center gap-7 text-sm text-fog/80 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href={other.href}
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition-colors hover:border-white/50 hover:bg-white/5"
        >
          {other.label}
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  )
}
