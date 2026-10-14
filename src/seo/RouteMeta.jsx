import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildHead, findPage } from './seoConfig'
import { indexable, siteUrl } from './siteConfig'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!content) {
    element?.remove()
    return
  }
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    element?.remove()
    return
  }
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  element.href = href
}

function setJsonLd(items) {
  document.head.querySelectorAll('script[data-seo="jsonld"]').forEach((element) => element.remove())
  items.forEach((item) => {
    const element = document.createElement('script')
    element.type = 'application/ld+json'
    element.dataset.seo = 'jsonld'
    element.textContent = JSON.stringify(item)
    document.head.appendChild(element)
  })
}

// Keeps <head> in sync with the current route during client-side navigation.
// The same tags are written into each page's static HTML at build time.
function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const head = buildHead(findPage(pathname), { siteUrl, indexable })
    document.title = head.title
    setMeta('name', 'description', head.description)
    setMeta('name', 'robots', head.robots)
    setMeta('property', 'og:title', head.ogTitle)
    setMeta('property', 'og:description', head.ogDescription)
    setMeta('property', 'og:url', head.ogUrl)
    setMeta('name', 'twitter:title', head.ogTitle)
    setMeta('name', 'twitter:description', head.ogDescription)
    setCanonical(head.canonical)
    setJsonLd(head.jsonLd)
  }, [pathname])

  return null
}

export default RouteMeta
