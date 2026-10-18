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
import analyticsXs from '../assets/optimized/analytics-400.webp'
import analyticsSmall from '../assets/optimized/analytics-640.webp'
import analyticsMedium from '../assets/optimized/analytics-1024.webp'
import analyticsLarge from '../assets/optimized/analytics-1600.webp'
import handshakeXs from '../assets/optimized/handshake-400.webp'
import handshakeSmall from '../assets/optimized/handshake-640.webp'
import handshakeMedium from '../assets/optimized/handshake-1024.webp'
import handshakeLarge from '../assets/optimized/handshake-1600.webp'
import planningXs from '../assets/optimized/planning-400.webp'
import planningSmall from '../assets/optimized/planning-640.webp'
import planningMedium from '../assets/optimized/planning-1024.webp'
import planningLarge from '../assets/optimized/planning-1600.webp'
import consultationXs from '../assets/optimized/consultation-400.webp'
import consultationSmall from '../assets/optimized/consultation-640.webp'
import consultationMedium from '../assets/optimized/consultation-1024.webp'
import consultationLarge from '../assets/optimized/consultation-1600.webp'

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

const analytics = {
  src: analyticsLarge,
  srcSet: srcSet([[analyticsXs, 400], [analyticsSmall, 640], [analyticsMedium, 1024], [analyticsLarge, 1600]]),
  width: 1600,
  height: 1140,
  alt: 'Laptop showing a business finance dashboard with revenue charts',
}

const handshake = {
  src: handshakeLarge,
  srcSet: srcSet([[handshakeXs, 400], [handshakeSmall, 640], [handshakeMedium, 1024], [handshakeLarge, 1600]]),
  width: 1600,
  height: 1068,
  alt: 'Business owner and finance partner shaking hands over a funding agreement',
}

const planning = {
  src: planningLarge,
  srcSet: srcSet([[planningXs, 400], [planningSmall, 640], [planningMedium, 1024], [planningLarge, 1600]]),
  width: 1600,
  height: 1068,
  alt: 'Business owner reviewing short-term cash flow charts on a tablet',
}

const consultation = {
  src: consultationLarge,
  srcSet: srcSet([[consultationXs, 400], [consultationSmall, 640], [consultationMedium, 1024], [consultationLarge, 1600]]),
  width: 1600,
  height: 997,
  alt: 'Funding advisor talking clients through their options on a laptop',
}

// Home page hero slider
export const heroSlides = [heroMeeting, heroPlanning, heroDiscussion]

// Page banners. Each page's banner differs from every other photo on that page.
export const pageImages = {
  about: companyBoard,
  services: analytics,
  whyChooseUs: { ...heroPlanning, alt: 'Reviewing a clear, transparent funding plan' },
}

// One image per service slug (used on service cards and service detail pages)
export const serviceImages = {
  'cheque-based-finance': handshake,
  'short-term-business-funding': planning,
  'direct-funding-solutions': consultation,
}
