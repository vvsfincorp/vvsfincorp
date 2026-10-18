import { Suspense, lazy, useEffect, useLayoutEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { hideSplash } from '../utils/splash'

// The home page ships in the main bundle; inner pages load on demand.
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ServicePage = lazy(() => import('../pages/ServicePage'))
const WhyChooseUsPage = lazy(() => import('../pages/WhyChooseUsPage'))
const FaqPage = lazy(() => import('../pages/FaqPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

// New page: start at the top. Same page with a #hash: scroll to that section.
function ScrollManager() {
  const { hash, pathname } = useLocation()

  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  // The target may be in a section that is still loading (e.g. /#emi-calculator from another
  // page), so keep looking for it each frame for a few seconds.
  useEffect(() => {
    if (!hash) return undefined

    const id = decodeURIComponent(hash.slice(1))
    const giveUpAt = performance.now() + 4000
    let frame = 0
    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start',
        })
      } else if (performance.now() < giveUpAt) {
        frame = window.requestAnimationFrame(scrollToTarget)
      }
    }
    frame = window.requestAnimationFrame(scrollToTarget)

    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname])

  return null
}

// Rendered inside Suspense, so it only runs once the first page's content is on screen.
function SplashDone() {
  useEffect(hideSplash, [])
  return null
}

// Keeps the space below the header while a page chunk downloads (avoids the footer jumping up).
const pageFallback = <Box aria-busy="true" sx={{ minHeight: '70vh', bgcolor: 'primary.dark' }} />

// The first page is not animated, so the enter animation never delays the first paint (LCP).
// The class is fixed per mounted page, so #hash links within a page never replay it.
let appHasRendered = false
function PageTransition({ children }) {
  const [className] = useState(() => (appHasRendered ? 'page-enter' : undefined))
  useEffect(() => {
    appHasRendered = true
  }, [])
  return <div className={className}>{children}</div>
}

function AppRouter() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollManager />
      <Suspense fallback={pageFallback}>
        <SplashDone />
        <PageTransition key={pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </>
  )
}

export default AppRouter
