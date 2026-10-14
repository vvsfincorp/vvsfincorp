import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/layout/Header'
import UtilityBar from './components/layout/UtilityBar'
import Footer from './components/layout/Footer'
import AppRouter from './routes/AppRouter'
import RouteMeta from './seo/RouteMeta'
import { brandTheme } from './theme'

// Moves keyboard focus past the header to the current page's <main> landmark
function skipToContent(event) {
  const main = document.querySelector('main')
  if (!main) return
  event.preventDefault()
  main.setAttribute('tabindex', '-1')
  main.focus()
}

function App() {
  return (
    <ThemeProvider theme={brandTheme}>
      <CssBaseline />
      <RouteMeta />
      <a className="skip-link" href="#main" onClick={skipToContent}>Skip to content</a>
      <UtilityBar />
      <Header />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  )
}

export default App
