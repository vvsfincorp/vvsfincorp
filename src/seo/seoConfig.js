// Single source of truth for page metadata and structured data.
// Used at runtime (RouteMeta) and at build time (vite.config.js -> scripts/seo-build.mjs),
// so it must stay free of browser-only APIs and asset imports.
import { companyInfo, faqs, serviceAreas, services, socialLinks } from '../data/siteContent.js'

export const OG_IMAGE_PATH = '/brand/og-image.jpg'
export const LOGO_PATH = '/brand/logo-512.png'

const home = { label: 'Home', path: '/' }

export const pages = [
  {
    path: '/',
    title: 'Business Loan in Chennai | Quick Loan Process | VVS Fincorp',
    description: 'Quick business loans in Chennai, Tamil Nadu: cheque-based loans, short-term working capital loans and funding through lending partners, from ₹1 lakh to ₹30 crore. Minimal documents.',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About VVS Fincorp | Business Loan & Finance Company in Chennai, Tamil Nadu',
    description: 'VVS Fincorp is a Chennai finance company founded in December 2024, helping businesses get quick, reliable business loans and funding with clear communication.',
    breadcrumbs: [home, { label: 'About Us', path: '/about' }],
    priority: '0.8',
  },
  {
    path: '/services',
    title: 'Business Loans & Funding Services in Chennai, Tamil Nadu | VVS Fincorp',
    description: 'Cheque-based loans, short-term business loans (3–10 months) and direct funding from ₹1 lakh to ₹30 crore. Explore VVS Fincorp business loan services in Chennai.',
    breadcrumbs: [home, { label: 'Services', path: '/services' }],
    priority: '0.9',
  },
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    title: service.seoTitle,
    description: service.seoDescription,
    breadcrumbs: [home, { label: 'Services', path: '/services' }, { label: service.title, path: `/services/${service.slug}` }],
    service,
    priority: '0.8',
  })),
  {
    path: '/why-choose-us',
    title: 'Why Choose VVS Fincorp | Quick, Transparent Business Loan Process in Chennai',
    description: 'A quick business loan process in Chennai: three simple steps, minimal documentation, transparent communication and dedicated support from VVS Fincorp.',
    breadcrumbs: [home, { label: 'Why Choose Us', path: '/why-choose-us' }],
    priority: '0.7',
  },
  {
    path: '/faq',
    title: 'Business Loan FAQs | VVS Fincorp, Chennai',
    description: 'Answers to common questions about business loans in Chennai: loan amounts, tenure, documents, how quick the process is and how to apply with VVS Fincorp.',
    breadcrumbs: [home, { label: 'FAQ', path: '/faq' }],
    faq: true,
    priority: '0.7',
  },
  {
    path: '/contact',
    title: 'Apply for a Business Loan | Contact VVS Fincorp, Villivakkam, Chennai',
    description: `Apply for a business loan or talk to the VVS Fincorp team. Call ${companyInfo.primaryPhone}, email ${companyInfo.email} or visit us in Villivakkam, Chennai.`,
    breadcrumbs: [home, { label: 'Contact', path: '/contact' }],
    priority: '0.8',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | VVS Fincorp',
    description: 'How VVS Fincorp handles the information you share through this website’s enquiry form.',
    breadcrumbs: [home, { label: 'Privacy Policy', path: '/privacy-policy' }],
    priority: '0.3',
  },
]

export const notFoundPage = {
  path: null,
  title: 'Page Not Found | VVS Fincorp',
  description: 'The page you’re looking for doesn’t exist or may have moved.',
  noindex: true,
}

const normalizePath = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname)

export function findPage(pathname) {
  const path = normalizePath(pathname)
  return pages.find((page) => page.path === path) ?? notFoundPage
}

const absolute = (siteUrl, path) => `${siteUrl}${path === '/' ? '/' : path}`

const areaServedSchema = () => serviceAreas.map((name) => ({ '@type': 'City', name }))

function organizationSchema(siteUrl) {
  const sameAs = socialLinks.map((link) => link.href).filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': `${siteUrl}/#organization`,
    name: companyInfo.name,
    slogan: companyInfo.tagline,
    description: companyInfo.description,
    url: absolute(siteUrl, '/'),
    logo: `${siteUrl}${LOGO_PATH}`,
    image: `${siteUrl}${OG_IMAGE_PATH}`,
    email: companyInfo.email,
    telephone: companyInfo.primaryPhone.replace(/\s/g, ''),
    foundingDate: companyInfo.foundingDate,
    address: { '@type': 'PostalAddress', ...companyInfo.addressParts },
    geo: { '@type': 'GeoCoordinates', ...companyInfo.geo },
    areaServed: areaServedSchema(),
    ...(sameAs.length ? { sameAs } : {}),
  }
}

function websiteSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: companyInfo.name,
    url: absolute(siteUrl, '/'),
    inLanguage: 'en-IN',
    publisher: { '@id': `${siteUrl}/#organization` },
  }
}

function breadcrumbSchema(siteUrl, breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absolute(siteUrl, crumb.path),
    })),
  }
}

function serviceSchema(siteUrl, page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.service.title,
    alternateName: page.service.keywords,
    serviceType: 'Business loan',
    description: page.service.overview,
    url: absolute(siteUrl, page.path),
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: areaServedSchema(),
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/**
 * Everything that goes into <head> for a page.
 * siteUrl: production origin without a trailing slash (e.g. https://www.example.com), or '' when unknown.
 * indexable: false for staging/preview builds.
 */
export function buildHead(page, { siteUrl = '', indexable = true } = {}) {
  const canonical = siteUrl && page.path ? absolute(siteUrl, page.path) : ''
  const noindex = page.noindex || !indexable
  const jsonLd = []
  if (page.path) {
    jsonLd.push(organizationSchema(siteUrl))
    if (page.path === '/') jsonLd.push(websiteSchema(siteUrl))
    if (page.breadcrumbs) jsonLd.push(breadcrumbSchema(siteUrl, page.breadcrumbs))
    if (page.service) jsonLd.push(serviceSchema(siteUrl, page))
    if (page.faq) jsonLd.push(faqSchema())
  }

  return {
    title: page.title,
    description: page.description,
    canonical,
    robots: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    ogTitle: page.title,
    ogDescription: page.description,
    ogUrl: canonical,
    ogImage: `${siteUrl}${OG_IMAGE_PATH}`,
    ogImageAlt: `${companyInfo.name} logo`,
    jsonLd: siteUrl ? jsonLd : [],
  }
}
