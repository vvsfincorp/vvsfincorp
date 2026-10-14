/**
 * Central image registry. Every page and component reads images from here,
 * so an image can be replaced without touching any layout.
 *
 * How to replace an image:
 *  1. Overwrite the original in src/assets/ (e.g. HeroSection/herosectionSlider1.jpg),
 *     or point scripts/optimize-images.mjs at a new file.
 *  2. Run `yarn optimize:images` to regenerate the WebP sizes in src/assets/optimized/.
 *  3. Update `width`/`height` below if the new image has a different aspect ratio.
 * For a quick swap you can also import any .jpg/.png/.webp here and set it as `src`
 * (leave `srcSet` empty).
 */
import logoImage from '../assets/optimized/logo-192.webp'
import hero1Small from '../assets/optimized/hero-1-640.webp'
import hero1Medium from '../assets/optimized/hero-1-1024.webp'
import hero1Large from '../assets/optimized/hero-1-1600.webp'
import hero2Small from '../assets/optimized/hero-2-640.webp'
import hero2Medium from '../assets/optimized/hero-2-1024.webp'
import hero2Large from '../assets/optimized/hero-2-1600.webp'
import hero3Small from '../assets/optimized/hero-3-640.webp'
import hero3Medium from '../assets/optimized/hero-3-1024.webp'
import hero3Large from '../assets/optimized/hero-3-1600.webp'
import boardSmall from '../assets/optimized/company-board-640.webp'
import boardLarge from '../assets/optimized/company-board-1076.webp'

const srcSet = (sources) => sources.map(([file, width]) => `${file} ${width}w`).join(', ')

export const logo = {
  src: logoImage,
  alt: 'VVS Fincorp logo',
  width: 192,
  height: 192,
}

const heroMeeting = {
  src: hero1Large,
  srcSet: srcSet([[hero1Small, 640], [hero1Medium, 1024], [hero1Large, 1600]]),
  width: 1600,
  height: 1067,
  alt: 'Business owner planning growth with financial documents',
}

const heroPlanning = {
  src: hero2Large,
  srcSet: srcSet([[hero2Small, 640], [hero2Medium, 1024], [hero2Large, 1600]]),
  width: 1600,
  height: 1067,
  alt: 'Business funding and financial planning',
}

const heroDiscussion = {
  src: hero3Large,
  srcSet: srcSet([[hero3Small, 640], [hero3Medium, 1024], [hero3Large, 1600]]),
  width: 1600,
  height: 1067,
  alt: 'Entrepreneurs discussing a funding plan',
}

export const companyBoard = {
  src: boardLarge,
  srcSet: srcSet([[boardSmall, 640], [boardLarge, 1076]]),
  width: 1076,
  height: 900,
  alt: 'VVS Fincorp illuminated company signboard',
}

// Home page hero slider
export const heroSlides = [heroMeeting, heroPlanning, heroDiscussion]

// Page banners: reuse existing photos until the client supplies final images
export const pageImages = {
  about: companyBoard,
  services: heroPlanning,
  whyChooseUs: heroDiscussion,
  faq: heroPlanning,
  contact: heroMeeting,
}

// One image per service slug (used on service cards and service detail pages)
export const serviceImages = {
  'cheque-based-finance': heroMeeting,
  'short-term-business-funding': heroPlanning,
  'direct-funding-solutions': heroDiscussion,
}
