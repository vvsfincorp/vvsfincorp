/**
 * Generates web-optimised copies of the site's source images.
 *
 *   npm run optimize:images
 *
 * Source images stay where they are (src/assets/...). This script writes
 * resized WebP files to src/assets/optimized/ and brand files (favicon,
 * splash logo, social-sharing image) to public/brand/.
 *
 * To replace an image later: overwrite the source file listed below (or
 * change its path here), run the command again, and rebuild. Page layouts
 * read images through src/config/images.js, so no component changes are needed.
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const assets = path.join(root, 'src/assets')
const optimizedDir = path.join(assets, 'optimized')
const brandDir = path.join(root, 'public/brand')

// name -> source file + output widths (px). Aspect ratio is preserved.
const photos = {
  'hero-1': { source: 'HeroSection/herosectionSlider1.jpg', widths: [640, 1024, 1600] },
  'hero-2': { source: 'HeroSection/herosectionSlider2.jpg', widths: [640, 1024, 1600] },
  'hero-3': { source: 'HeroSection/herosectionSlider3.jpg', widths: [640, 1024, 1600] },
  'company-board': { source: 'CompanyPhotos/companyBoard.jpg', widths: [640, 1076] },
}

const logoSource = path.join(assets, 'companyLogo/VVSFINCORP-removebg-preview.png')
const fullLogoSource = path.join(assets, 'companyLogo/VVSFINCORPLOGOFULL.jpeg')

async function optimizePhotos() {
  await mkdir(optimizedDir, { recursive: true })
  for (const [name, { source, widths }] of Object.entries(photos)) {
    for (const width of widths) {
      const output = path.join(optimizedDir, `${name}-${width}.webp`)
      const info = await sharp(path.join(assets, source))
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 74, effort: 5 })
        .toFile(output)
      console.log(`${path.relative(root, output)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
    }
  }
}

async function optimizeBrand() {
  await mkdir(brandDir, { recursive: true })
  const logo = sharp(logoSource).trim()

  // Header / footer / splash logo
  await logo.clone().resize({ width: 192, height: 192, fit: 'contain', background: '#0000' }).webp({ quality: 90 }).toFile(path.join(optimizedDir, 'logo-192.webp'))
  await logo.clone().resize({ width: 256, height: 256, fit: 'contain', background: '#0000' }).webp({ quality: 90 }).toFile(path.join(brandDir, 'logo-256.webp'))
  await logo.clone().resize({ width: 512, height: 512, fit: 'contain', background: '#0000' }).png().toFile(path.join(brandDir, 'logo-512.png'))

  // Favicons
  await logo.clone().resize({ width: 48, height: 48, fit: 'contain', background: '#0000' }).png().toFile(path.join(brandDir, 'favicon-48.png'))
  await logo.clone().resize({ width: 152, height: 152, fit: 'contain', background: '#fff' })
    .extend({ top: 14, bottom: 14, left: 14, right: 14, background: '#fff' })
    .flatten({ background: '#fff' }).png().toFile(path.join(brandDir, 'apple-touch-icon.png'))

  // Social-sharing image (1200x630)
  const fullLogo = await sharp(fullLogoSource).resize({ height: 600, fit: 'inside' }).toBuffer()
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
    .composite([{ input: fullLogo, gravity: 'center' }])
    .jpeg({ quality: 82 })
    .toFile(path.join(brandDir, 'og-image.jpg'))

  console.log('Brand assets written to public/brand/ and src/assets/optimized/logo-192.webp')
}

await optimizePhotos()
await optimizeBrand()
