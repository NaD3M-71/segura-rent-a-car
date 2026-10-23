// Imagen WebP con version chica para mobile (si existe NOMBRE-640.webp)

type PicProps = {
  name: string
  width: number
  height: number
  alt: string
  small?: boolean // true si existe la version -640
  sizes?: string
  priority?: boolean
  className?: string
}

export default function Pic({ name, width, height, alt, small, sizes, priority, className }: PicProps) {
  return (
    <img
      src={`/img/${name}.webp`}
      srcSet={small ? `/img/${name}-640.webp 640w, /img/${name}.webp ${width}w` : undefined}
      sizes={small ? (sizes ?? '100vw') : undefined}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  )
}
