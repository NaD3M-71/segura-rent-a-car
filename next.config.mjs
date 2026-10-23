/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera HTML estatico en la carpeta /out: se sube a cualquier hosting
  output: 'export',
  // /rent-a-car/ -> /rent-a-car/index.html (funciona bien en hosting estatico)
  trailingSlash: true,
  // Las imagenes ya se optimizan con scripts/optimize-images.mjs
  images: { unoptimized: true },
}

export default nextConfig
