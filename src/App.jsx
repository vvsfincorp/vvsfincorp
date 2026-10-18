import { Suspense, lazy, useEffect, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/layout/Header'
import UtilityBar from './components/layout/UtilityBar'
import AppRouter from './routes/AppRouter'
import RouteMeta from './seo/RouteMeta'
import { brandTheme } from './theme'
import { afterLoad } from './utils/afterLoad'

// The footer is below the fold on every page, so it renders once the page has loaded
const Footer = lazy(() => import('./components/layout/Footer'))

// Moves keyboard focus past the header to the current page's <main> landmark
function skipToContent(event) {
  const main = document.querySelector('main')
  if (!main) return
  event.preventDefault()
  main.setAttribute('tabindex', '-1')
  main.focus()
}

function App() {
  const [showFooter, setShowFooter] = useState(false)
  useEffect(() => afterLoad(() => setShowFooter(true)), [])

  return (
    <ThemeProvider theme={brandTheme}>
      <CssBaseline />
      <RouteMeta />
      <a className="skip-link" href="#main" onClick={skipToContent}>Skip to content</a>
      <UtilityBar />
      <Header />
      {/* Skip-link target; skipToContent moves focus to the <main> inside */}
      <div id="main">
        <AppRouter />
      </div>
      {showFooter && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </ThemeProvider>
  )
}

export default App
