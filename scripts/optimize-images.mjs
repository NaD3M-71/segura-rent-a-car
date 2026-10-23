// Convierte las imagenes originales de public/img/src a WebP optimizado en public/img
// Uso: npm run images
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'public/img/src'
const OUT = 'public/img'

// ancho maximo por imagen; si es mayor a 900 tambien genera version -640 para mobile
const MAX = {
  laguna: 1170,
  'esquel-aereo': 720,
  trochita: 1476,
  polo: 1400,
  'taxi-logo': 512,
  'taxi-terminal': 1280,
  'taxi-nieve': 1600,
  'taxi-nieve2': 1600,
  'taxi-trochita': 1280,
  arrayanes: 720,
  terraplen: 720,
  tulipanes: 720,
  juan: 150,
  logo: 409,
  gscode: 96,
}

await mkdir(OUT, { recursive: true })
for (const file of await readdir(SRC)) {
  const name = path.parse(file).name
  const max = MAX[name] ?? 1200
  const input = sharp(path.join(SRC, file))
  const meta = await input.metadata()
  const width = Math.min(meta.width, max)
  await sharp(path.join(SRC, file)).resize({ width }).webp({ quality: 78 }).toFile(`${OUT}/${name}.webp`)
  if (width > 900) {
    await sharp(path.join(SRC, file)).resize({ width: 640 }).webp({ quality: 76 }).toFile(`${OUT}/${name}-640.webp`)
  }
  console.log(name, `${meta.width}x${meta.height} -> ${width}w`)
}

// imagen para redes sociales (Open Graph) 1200x630
await sharp(path.join(SRC, 'laguna.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(`${OUT}/og.jpg`)
console.log('og.jpg listo')
