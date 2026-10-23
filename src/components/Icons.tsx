// Iconos simples en SVG (trazo), sin librerias externas

type IconProps = { className?: string }

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? 'h-5 w-5'}
    >
      {children}
    </svg>
  )
}

export const ArrowIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
)

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 13l4 4L19 7" />
  </Svg>
)

export const ChatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 12a8 8 0 0 1-11.7 7L3 21l2-5.6A8 8 0 1 1 21 12z" />
  </Svg>
)

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
)

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
)

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
)

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Svg>
)

export const SeatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 4v8a3 3 0 0 0 3 3h6" />
    <path d="M8 9H6M17 15v5M11 15v5M13 4h2" />
  </Svg>
)

export const LuggageIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="8" width="14" height="11" rx="2" />
    <path d="M9 8V5h6v3M9 12v4M15 12v4" />
  </Svg>
)

export const RouteIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
  </Svg>
)

export const CarIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 16v-5l2-5h10l2 5v5M3 16h18M7 19v-3M17 19v-3" />
    <path d="M7 12h10" />
  </Svg>
)

export const PlaneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10 14l-6 3v-2l6-4V5a2 2 0 0 1 4 0v6l6 4v2l-6-3v4l2 1v1l-4-1-4 1v-1l2-1z" />
  </Svg>
)
