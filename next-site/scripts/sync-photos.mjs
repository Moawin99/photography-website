import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')
const PHOTOS = path.join(ROOT, 'photos')
const PUBLIC = path.join(ROOT, 'next-site/public/images')
const OUT = path.join(ROOT, 'next-site/lib/portfolio-data.ts')

const COLLECTIONS = [
  { id: 'banff', title: 'Banff', location: 'Canada', srcDir: 'landmarks/banff', source: 'Landmarks/Banff' },
  { id: 'egypt', title: 'Egypt', srcDir: 'landmarks/egypt', source: 'Landmarks/egypt' },
  { id: 'italy', title: 'Italy', srcDir: 'landmarks/italy', source: 'Landmarks/italy' },
  { id: 'portugal', title: 'Portugal', srcDir: 'landmarks/portugal', source: 'Landmarks/portugual' },
  { id: 'nyc', title: 'New York', srcDir: 'landmarks/nyc', source: 'Landmarks/NYC' },
  { id: 'portraits', title: 'Portraits', srcDir: 'grad-shoots', source: 'Grad shoots' },
]

function getDimensions(filePath) {
  const out = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, { encoding: 'utf8' })
  return {
    width: Number(out.match(/pixelWidth: (\d+)/)?.[1]),
    height: Number(out.match(/pixelHeight: (\d+)/)?.[1]),
  }
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((f) => /\.(jpe?g)$/i.test(f) && !f.startsWith('._'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
}

function photoLine({ src, alt, width, height }) {
  return `      { src: '${src}', alt: '${alt}', width: ${width}, height: ${height} },`
}

for (const name of ['landmarks', 'grad-shoots', 'nyc']) {
  const target = path.join(PUBLIC, name)
  if (fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true })
}

const meSrc = path.join(PHOTOS, 'me')
const meDest = path.join(PUBLIC, 'me')
fs.mkdirSync(meDest, { recursive: true })
for (const file of listImages(meSrc)) {
  fs.copyFileSync(path.join(meSrc, file), path.join(meDest, file))
}

const collectionBlocks = COLLECTIONS.map((col) => {
  const srcDir = path.join(PHOTOS, col.source)
  const destDir = path.join(PUBLIC, col.srcDir)
  fs.mkdirSync(destDir, { recursive: true })

  const photos = listImages(srcDir).map((file) => {
    const srcFile = path.join(srcDir, file)
    fs.copyFileSync(srcFile, path.join(destDir, file))
    const { width, height } = getDimensions(srcFile)
    const alt = col.id === 'portraits' ? 'Portrait' : col.title
    return { src: `/images/${col.srcDir}/${file}`, alt, width, height }
  })

  const locationLine = col.location ? `\n    location: '${col.location}',` : ''
  const photoLines = photos.map(photoLine).join('\n')

  return `  {
    id: '${col.id}',
    title: '${col.title}',${locationLine}
    photos: [
${photoLines}
    ],
  }`
}).join(',\n')

const content = `// ✦ All site content lives here. Swap images, update copy, reorder freely.

export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

export interface Collection {
  id: string
  title: string
  location?: string
  photos: Photo[]
}

// ─── Site config ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Mark Moawad',
  tagline: 'Photographer & Videographer — New York',
  email: 'moflickz99@gmail.com',
  instagram: 'https://instagram.com/moflickz',
  bio: [
    "I'm a photographer and videographer based in New York, drawn to the quiet tension between stillness and movement. My work spans editorial portraiture, landscape, and documentary — each frame a pursuit of the moment that most cameras miss.",
    "Whether in the Banff Canada at dawn or the streets of Cairo at dusk, I seek images that hold their breath.",
  ],
}

// ─── Collections ─────────────────────────────────────────────────────────────
// ✦ Source photos live in ../photos/. Run \`npm run sync-photos\` to refresh public/images and this file.
export const collections: Collection[] = [
${collectionBlocks}
]
`

fs.writeFileSync(OUT, content)

const total = COLLECTIONS.reduce((n, col) => n + listImages(path.join(PHOTOS, col.source)).length, 0)
console.log(`Synced ${total} photos to public/images and updated portfolio-data.ts`)
