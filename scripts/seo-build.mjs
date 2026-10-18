/**
 * Vite plugin that runs after `vite build` and writes SEO files to dist/:
 *
 *  - dist/<route>/index.html for every page in src/seo/seoConfig.js, each with
 *    its own <title>, description, canonical URL, Open Graph tags and JSON-LD,
 *    so crawlers and link previews see the right metadata without running JS
 *    and every URL works when opened directly on a static host.
 *    Each page also preloads the main (LCP) photo for its URL, so the browser starts
 *    downloading it in parallel with the JavaScript instead of after the app has rendered.
 *  - dist/404.html (noindex) for unknown URLs.
 *  - dist/sitemap.xml and dist/robots.txt.
 *
 * Configure with VITE_SITE_URL (production origin) and VITE_ALLOW_INDEXING.
 */
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { buildHead, notFoundPage, pages } from '../src/seo/seoConfig.js'
import { heroSlideChoices } from '../src/config/heroSlides.js'

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// JSON-LD is embedded in a <script>; escape "<" so content can never close the tag
const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c')

function renderHead(head) {
  const tags = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta name="description" content="${escapeHtml(head.description)}" />`,
    `<meta name="robots" content="${head.robots}" />`,
    head.canonical && `<link rel="canonical" href="${escapeHtml(head.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(head.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(head.ogDescription)}" />`,
    head.ogUrl && `<meta property="og:url" content="${escapeHtml(head.ogUrl)}" />`,
    head.ogImage.startsWith('http') && `<meta property="og:image" content="${escapeHtml(head.ogImage)}" />`,
    head.ogImage.startsWith('http') && `<meta property="og:image:width" content="1200" />`,
    head.ogImage.startsWith('http') && `<meta property="og:image:height" content="630" />`,
    head.ogImage.startsWith('http') && `<meta property="og:image:alt" content="${escapeHtml(head.ogImageAlt)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(head.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(head.ogDescription)}" />`,
    head.ogImage.startsWith('http') && `<meta name="twitter:image" content="${escapeHtml(head.ogImage)}" />`,
    head.ogImage.startsWith('http') && `<meta name="twitter:image:alt" content="${escapeHtml(head.ogImageAlt)}" />`,
    ...head.jsonLd.map((item) => `<script type="application/ld+json" data-seo="jsonld">${safeJson(item)}</script>`),
  ]
  return tags.filter(Boolean).join('\n    ')
}

const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/

// Main photo per route: an optimised image name from scripts/optimize-images.mjs and the
// `sizes` its <img> uses. The home page follows src/config/heroSlides.js (first enabled slide);
// keep the others in sync with src/config/images.js (pageImages, serviceImages). A name with
// no matching file only logs a warning.
const HOME_HERO_SIZES = '100vw'
const firstHeroSlide = heroSlideChoices.find((choice) => !choice.disabled) ?? heroSlideChoices[0]
const PAGE_HERO_SIZES = '(min-width: 1300px) 560px, (min-width: 900px) 45vw, 100vw'
const lcpImages = {
  '/': { name: firstHeroSlide.image, sizes: HOME_HERO_SIZES },
  '/about': { name: 'company-board', sizes: PAGE_HERO_SIZES },
  '/services': { name: 'analytics', sizes: PAGE_HERO_SIZES },
  '/services/cheque-based-finance': { name: 'handshake', sizes: PAGE_HERO_SIZES },
  '/services/short-term-business-funding': { name: 'planning', sizes: PAGE_HERO_SIZES },
  '/services/direct-funding-solutions': { name: 'consultation', sizes: PAGE_HERO_SIZES },
  '/why-choose-us': { name: 'hero-2', sizes: PAGE_HERO_SIZES },
}

// Builds the srcset from the hashed files Vite emitted, e.g. assets/home-1-640-AbC123.webp
function buildSrcset(assetFiles, name) {
  const pattern = new RegExp(`^${name}-(\\d+)-[\\w-]+\\.webp$`)
  return assetFiles
    .map((file) => [file, Number(file.match(pattern)?.[1])])
    .filter(([, width]) => width)
    .sort((a, b) => a[1] - b[1])
    .map(([file, width]) => `/assets/${file} ${width}w`)
    .join(', ')
}

// One inline script, identical in every page, that preloads the photo for the current URL.
// It reads location.pathname rather than being baked into each page's HTML, because some hosts
// (and `vite preview`) answer /about with the root index.html; a static <link> would then make
// every inner page download the home page photo.
function preloadScript(preloads) {
  return `<script>!function(m,p){var i=m[p.length>1?p.replace(/\\/+$/,''):p];if(!i)return;var l=document.createElement('link');l.rel='preload';l.as='image';l.type='image/webp';l.setAttribute('imagesrcset',i[0]);l.setAttribute('imagesizes',i[1]);l.setAttribute('fetchpriority','high');document.head.appendChild(l)}(${safeJson(preloads)},location.pathname)</script>`
}

export default function seoBuild({ siteUrl, indexable }) {
  let outDir = 'dist'

  return {
    name: 'vvs-seo-build',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const template = await readFile(path.join(outDir, 'index.html'), 'utf8')
      if (!SEO_BLOCK.test(template)) throw new Error('index.html is missing the <!--seo--> ... <!--/seo--> block')

      const assetFiles = await readdir(path.join(outDir, 'assets'))
      const preloads = {}
      for (const [route, { name, sizes }] of Object.entries(lcpImages)) {
        const srcset = buildSrcset(assetFiles, name)
        if (srcset) preloads[route] = [srcset, sizes]
        else this.warn(`No optimised files found for "${name}" (preload for ${route} skipped)`)
      }
      const preload = preloadScript(preloads)

      const write = async (relativeFile, page) => {
        const head = `${renderHead(buildHead(page, { siteUrl, indexable }))}\n    ${preload}`
        const html = template.replace(SEO_BLOCK, head)
        const file = path.join(outDir, relativeFile)
        await mkdir(path.dirname(file), { recursive: true })
        await writeFile(file, html)
      }

      for (const page of pages) {
        await write(page.path === '/' ? 'index.html' : path.join(page.path, 'index.html'), page)
      }
      await write('404.html', notFoundPage)

      const robots = ['User-agent: *', indexable ? 'Allow: /' : 'Disallow: /']
      if (siteUrl && indexable) {
        const today = new Date().toISOString().slice(0, 10)
        const urls = pages
          .map((page) => `  <url>\n    <loc>${siteUrl}${page.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`)
          .join('\n')
        await writeFile(
          path.join(outDir, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        )
        robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
      }
      await writeFile(path.join(outDir, 'robots.txt'), `${robots.join('\n')}\n`)

      if (!siteUrl) {
        this.warn('VITE_SITE_URL is not set: canonical URLs, absolute Open Graph images, JSON-LD and sitemap.xml were skipped. Set it in .env.production before deploying.')
      }
      if (!indexable) this.warn('VITE_ALLOW_INDEXING=false: every page is marked noindex and robots.txt disallows crawling.')
    },
  }
}
