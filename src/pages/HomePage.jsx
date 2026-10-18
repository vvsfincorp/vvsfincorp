import { Suspense, lazy, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import { afterLoad } from '../utils/afterLoad'

// Only the hero renders with the first paint. The sections below it are a separate chunk that
// starts downloading once the page has loaded, so it never competes with the hero (LCP).
const HomeBelowFold = lazy(() => import('./HomeBelowFold'))

// Keeps the space below the hero while the sections load (the footer stays out of view)
const belowFoldFallback = <Box aria-busy="true" sx={{ minHeight: '100vh' }} />

function HomePage() {
  const { hash } = useLocation()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => afterLoad(() => setLoaded(true)), [])

  // A #hash (e.g. /#emi-calculator from another page) needs its section right away
  const showBelowFold = loaded || Boolean(hash)

  return (
    <main id="home">
      <HeroSection />
      {showBelowFold ? (
        <Suspense fallback={belowFoldFallback}>
          <HomeBelowFold />
        </Suspense>
      ) : belowFoldFallback}
    </main>
  )
}

export default HomePage
