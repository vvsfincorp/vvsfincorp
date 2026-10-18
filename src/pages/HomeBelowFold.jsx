import { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import AboutSection from '../components/sections/AboutSection'
import StatsStrip from '../components/sections/StatsStrip'
import ServicesSection from '../components/sections/ServicesSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import EmiCalculatorSection from '../components/sections/EmiCalculatorSection'
import QuickContact from '../components/sections/QuickContact'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

const sections = [
  AboutSection,
  StatsStrip,
  ServicesSection,
  HowItWorksSection,
  EmiCalculatorSection,
  QuickContact,
  TestimonialsSection,
  ContactSection,
]

// How far below the viewport the next section starts rendering
const PRELOAD_MARGIN = '0px 0px 1200px 0px'

// Home page sections below the hero (loaded separately by HomePage). Sections mount one at a
// time as the visitor scrolls towards them, so loading the page never pays for rendering the
// whole home page. Crawlers render with a very tall viewport, so they still get every section.
// Whenever the URL has a #hash (on load, an in-page #link, or /#emi-calculator from the footer),
// every section mounts so ScrollManager can find the target.
function HomeBelowFold() {
  const { hash } = useLocation()
  // Browsers without IntersectionObserver get every section straight away
  const [count, setCount] = useState(() =>
    window.location.hash || typeof IntersectionObserver === 'undefined' ? sections.length : 1,
  )
  // A #hash showed up (in-page link or router navigation): render the rest now, during render,
  // so the target exists by the time ScrollManager looks for it
  if (hash && count < sections.length) setCount(sections.length)
  const sentinelRef = useRef(null)

  // A fresh observer per step reports straight away whether the sentinel (just below the last
  // mounted section) is still near the viewport, so short sections chain on to the next one.
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || count >= sections.length) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setCount((current) => Math.min(current + 1, sections.length))
      },
      { rootMargin: PRELOAD_MARGIN },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [count])

  return (
    <>
      {/* The list order never changes, so the index is a stable key */}
      {sections.slice(0, count).map((Section, index) => <Section key={index} />)}
      {count < sections.length && <Box ref={sentinelRef} aria-hidden sx={{ height: '100vh' }} />}
    </>
  )
}

export default HomeBelowFold
