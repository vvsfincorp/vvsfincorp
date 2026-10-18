# VVS Fincorp website

React + Vite + MUI site for VVS Fincorp, Chennai.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server on port 5173 |
| `npm run build` | Production build to `dist/`, plus per-page SEO HTML, `sitemap.xml` and `robots.txt` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run optimize:images` | Regenerate WebP images in `src/assets/optimized/` and brand files in `public/brand/` |

## Configuration

Copy `.env.example` to `.env.production` (and `.env.local` for development) and fill in:

- `VITE_SITE_URL`: the live domain, set to `https://www.vvsfincorp.com` in `.env.production`. Without it the build skips canonical URLs, structured data and the sitemap.
- `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`: enquiry form delivery. Until all three are set, the form opens the visitor's email app instead.

The EmailJS template can use these variables: `{{from_name}}`, `{{company}}`, `{{mobile}}`, `{{reply_to}}`, `{{funding_amount}}`, `{{loan_type}}`, `{{message}}`, `{{page_url}}`, `{{submitted_at}}`.

## Where things live

- Business content (services, FAQs, contact details, service areas): `src/data/siteContent.js`
- Images: `src/config/images.js` (replace a source image, run `npm run optimize:images`, rebuild)
- Page titles, descriptions and structured data: `src/seo/seoConfig.js`
- Pages: `src/pages/`; shared page parts: `src/components/common/`

## Hosting

Each route is built as its own `index.html` (`dist/about/index.html`, ...), so the site works on any static host. Configure the host to serve `dist/404.html` for unknown URLs.
