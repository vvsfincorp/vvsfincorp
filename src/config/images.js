/**
 * Central image registry. Every page and component reads images from here,
 * so an image can be replaced without touching any layout.
 *
 * How to replace an image:
 *  1. Overwrite the original in src/assets/ (e.g. HeroSection/towfiqu-barbhuiya-nApaSgkzaxg-unsplash.jpg),
 *     or point scripts/optimize-images.mjs at a new file.
 *  2. Run `yarn optimize:images` to regenerate the WebP sizes in src/assets/optimized/.
 *  3. Update `width`/`height` below if the new image has a different aspect ratio.
 * For a quick swap you can also import any .jpg/.png/.webp here and set it as `src`
 * (leave `srcSet` empty).
 */
import logoSmall from '../assets/optimized/logo-96.webp'
import logoMedium from '../assets/optimized/logo-160.webp'
import logoImage from '../assets/optimized/logo-192.webp'
import home1Small from '../assets/optimized/home-1-640.webp'
import home1Medium from '../assets/optimized/home-1-1024.webp'
import home1Large from '../assets/optimized/home-1-1469.webp'
import home2Small from '../assets/optimized/home-2-640.webp'
import home2Medium from '../assets/optimized/home-2-1024.webp'
import home2Large from '../assets/optimized/home-2-1469.webp'
import home3Small from '../assets/optimized/home-3-640.webp'
import home3Medium from '../assets/optimized/home-3-1024.webp'
import home3Large from '../assets/optimized/home-3-1469.webp'
import home4Small from '../assets/optimized/home-4-640.webp'
import home4Medium from '../assets/optimized/home-4-1024.webp'
import home4Large from '../assets/optimized/home-4-1488.webp'
import home5Small from '../assets/optimized/home-5-640.webp'
import home5Medium from '../assets/optimized/home-5-1024.webp'
import home5Large from '../assets/optimized/home-5-1488.webp'
import home6Small from '../assets/optimized/home-6-640.webp'
import home6Medium from '../assets/optimized/home-6-1024.webp'
import home6Large from '../assets/optimized/home-6-1488.webp'
import hero2Small from '../assets/optimized/hero-2-640.webp'
import hero2Medium from '../assets/optimized/hero-2-1024.webp'
import hero2Large from '../assets/optimized/hero-2-1600.webp'
import boardSmall from '../assets/optimized/company-board-640.webp'
import boardMedium from '../assets/optimized/company-board-800.webp'
import boardLarge from '../assets/optimized/company-board-1076.webp'
import { heroSlideChoices } from './heroSlides'
import analyticsXs from '../assets/optimized/analytics-400.webp'
import analyticsSmall from '../assets/optimized/analytics-640.webp'
import analyticsTablet from '../assets/optimized/analytics-768.webp'
import analyticsMedium from '../assets/optimized/analytics-1024.webp'
import analyticsLarge from '../assets/optimized/analytics-1600.webp'
import handshakeXs from '../assets/optimized/handshake-400.webp'
import handshakeSmall from '../assets/optimized/handshake-640.webp'
import handshakeTablet from '../assets/optimized/handshake-768.webp'
import handshakeMedium from '../assets/optimized/handshake-1024.webp'
import handshakeLarge from '../assets/optimized/handshake-1600.webp'
import planningXs from '../assets/optimized/planning-400.webp'
import planningSmall from '../assets/optimized/planning-640.webp'
import planningTablet from '../assets/optimized/planning-768.webp'
import planningMedium from '../assets/optimized/planning-1024.webp'
import planningLarge from '../assets/optimized/planning-1600.webp'
import consultationXs from '../assets/optimized/consultation-400.webp'
import consultationSmall from '../assets/optimized/consultation-640.webp'
import consultationTablet from '../assets/optimized/consultation-768.webp'
import consultationMedium from '../assets/optimized/consultation-1024.webp'
import consultationLarge from '../assets/optimized/consultation-1600.webp'

const srcSet = (sources) => sources.map(([file, width]) => `${file} ${width}w`).join(', ')

// Shown at 50-76px; the srcSet lets 1x/2x screens pick the 96/160px file instead of 192px
export const logo = {
  src: logoImage,
  srcSet: srcSet([[logoSmall, 96], [logoMedium, 160], [logoImage, 192]]),
  alt: 'VVS Fincorp logo',
  width: 192,
  height: 192,
}

const homeTradingDesk = {
  src: home1Large,
  srcSet: srcSet([[home1Small, 640], [home1Medium, 1024], [home1Large, 1469]]),
  width: 1469,
  height: 704,
  alt: 'Executive desk with a tablet showing financial charts, overlooking a city skyline',
}

const homePlanningDesk = {
  src: home2Large,
  srcSet: srcSet([[home2Small, 640], [home2Medium, 1024], [home2Large, 1469]]),
  width: 1469,
  height: 704,
  alt: 'Business plans, market reports and funds laid out on an office desk',
}

const homeAdvisorHandover = {
  src: home3Large,
  srcSet: srcSet([[home3Small, 640], [home3Medium, 1024], [home3Large, 1469]]),
  width: 1469,
  height: 704,
  alt: 'Funding advisor handing over documents to a client across an office desk',
}

const homeStatementReview = {
  src: home4Large,
  srcSet: srcSet([[home4Small, 640], [home4Medium, 1024], [home4Large, 1488]]),
  width: 1488,
  height: 713,
  alt: 'Advisor walking a client through a financial statement at a desk',
}

const homeReportsDesk = {
  src: home5Large,
  srcSet: srcSet([[home5Small, 640], [home5Medium, 1024], [home5Large, 1488]]),
  width: 1488,
  height: 713,
  alt: 'Market reports, business plans and funds on an office desk with a harbour view',
}

const homeSigningDesk = {
  src: home6Large,
  srcSet: srcSet([[home6Small, 640], [home6Medium, 1024], [home6Large, 1488]]),
  width: 1488,
  height: 713,
  alt: 'Advisor signing a funding agreement at a desk overlooking the city',
}

const heroPlanning = {
  src: hero2Large,
  srcSet: srcSet([[hero2Small, 640], [hero2Medium, 1024], [hero2Large, 1600]]),
  width: 1600,
  height: 1067,
  alt: 'Business funding and financial planning',
}

export const companyBoard = {
  src: boardLarge,
  srcSet: srcSet([[boardSmall, 640], [boardMedium, 800], [boardLarge, 1076]]),
  width: 1076,
  height: 900,
  alt: 'VVS Fincorp illuminated company signboard',
}

const analytics = {
  src: analyticsLarge,
  srcSet: srcSet([[analyticsXs, 400], [analyticsSmall, 640], [analyticsTablet, 768], [analyticsMedium, 1024], [analyticsLarge, 1600]]),
  width: 1600,
  height: 1140,
  alt: 'Laptop showing a business finance dashboard with revenue charts',
}

const handshake = {
  src: handshakeLarge,
  srcSet: srcSet([[handshakeXs, 400], [handshakeSmall, 640], [handshakeTablet, 768], [handshakeMedium, 1024], [handshakeLarge, 1600]]),
  width: 1600,
  height: 1068,
  alt: 'Business owner and finance partner shaking hands over a funding agreement',
}

const planning = {
  src: planningLarge,
  srcSet: srcSet([[planningXs, 400], [planningSmall, 640], [planningTablet, 768], [planningMedium, 1024], [planningLarge, 1600]]),
  width: 1600,
  height: 1068,
  alt: 'Business owner reviewing short-term cash flow charts on a tablet',
}

const consultation = {
  src: consultationLarge,
  srcSet: srcSet([[consultationXs, 400], [consultationSmall, 640], [consultationTablet, 768], [consultationMedium, 1024], [consultationLarge, 1600]]),
  width: 1600,
  height: 997,
  alt: 'Funding advisor talking clients through their options on a laptop',
}

// Every photo by its name in src/assets/optimized/ (used by the hero slide choices)
const photosByName = {
  'home-1': homeTradingDesk,
  'home-2': homePlanningDesk,
  'home-3': homeAdvisorHandover,
  'home-4': homeStatementReview,
  'home-5': homeReportsDesk,
  'home-6': homeSigningDesk,
  consultation,
  analytics,
  handshake,
  planning,
  'hero-2': heroPlanning,
  'company-board': companyBoard,
}

// Home page hero slider: the enabled entries of src/config/heroSlides.js, in order
const enabledChoices = heroSlideChoices.filter((choice) => !choice.disabled)
export const heroSlides = (enabledChoices.length ? enabledChoices : heroSlideChoices.slice(0, 1)).map((choice) => {
  const photo = photosByName[choice.image]
  if (!photo) throw new Error(`src/config/heroSlides.js: unknown image "${choice.image}"`)
  return choice.position ? { ...photo, position: choice.position } : photo
})

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
