/**
 * Vite plugin that runs after `vite build` and writes SEO files to dist/:
 *
 *  - dist/<route>/index.html for every page in src/seo/seoConfig.js, each with
 *    its own <title>, description, canonical URL, Open Graph tags and JSON-LD,
 *    so crawlers and link previews see the right metadata without running JS
 *    and every URL works when opened directly on a static host.
 *  - dist/404.html (noindex) for unknown URLs.
 *  - dist/sitemap.xml and dist/robots.txt.
 *
 * Configure with VITE_SITE_URL (production origin) and VITE_ALLOW_INDEXING.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { buildHead, notFoundPage, pages } from '../src/seo/seoConfig.js'

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
    `<meta name="twitter:title" content="${escapeHtml(head.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(head.ogDescription)}" />`,
    head.ogImage.startsWith('http') && `<meta name="twitter:image" content="${escapeHtml(head.ogImage)}" />`,
    ...head.jsonLd.map((item) => `<script type="application/ld+json" data-seo="jsonld">${safeJson(item)}</script>`),
  ]
  return tags.filter(Boolean).join('\n    ')
}

const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/

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

      const write = async (relativeFile, page) => {
        const html = template.replace(SEO_BLOCK, renderHead(buildHead(page, { siteUrl, indexable })))
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
