/**
 * Home page hero slider: every photo in src/assets, in slide order.
 *
 *   disabled: false  -> shown in the slider
 *   disabled: true   -> hidden
 *
 * Reorder the entries to change the slide order. The first enabled slide is the one
 * visitors see first, and the build preloads it (scripts/seo-build.mjs), so put a
 * light, dark-on-the-left photo first. If every entry is disabled, the first one is shown.
 *
 * `image` is the photo's name in src/config/images.js (the same as its file name in
 * src/assets/optimized/). Optional `position` sets the crop focus, e.g. 'center 30%'.
 *
 * Kept free of imports so the build step can read it too.
 */
export const heroSlideChoices = [
  // AI-generated: desk with tablet charts and city skyline; dark left side suits the text
  { image: 'home-1', disabled: false },
  // AI-generated: desk with business plans, reports and cash (garbled text on the papers)
  { image: 'home-2', disabled: false },
  // AI-generated: advisor in a navy suit handing over documents, skyline behind (no faces)
  { image: 'home-3', disabled: false },
  // AI-generated: advisor pointing at a financial statement for a client (no faces)
  { image: 'home-4', disabled: false },
  // AI-generated: variant of home-2, reports, cash and a globe on a desk
  { image: 'home-5', disabled: false },
  // AI-generated: advisor signing a document, skyline behind (no faces)
  { image: 'home-6', disabled: false },
  // Advisor with clients; also on the Direct Funding service card on the home page
  { image: 'consultation', disabled: true },
  // Laptop with a finance dashboard; also the Services page banner
  { image: 'analytics', disabled: true },
  // Handshake over a document; also on the Cheque-Based Finance service card on the home page
  { image: 'handshake', disabled: true },
  // Tablet with charts and a calculator; also on the Short-Term Funding service card on the home page
  { image: 'planning', disabled: true },
  // Person reviewing reports with a pen; also the Why Choose Us page banner
  { image: 'hero-2', disabled: false }, 
  // VVS Fincorp signboard; also in the About section on the home page (only 1076px wide, soft on large screens)
  { image: 'company-board', disabled: true },
]
