import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/layout/Header'
import UtilityBar from './components/layout/UtilityBar'
import Footer from './components/layout/Footer'
import AppRouter from './routes/AppRouter'
import { brandTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={brandTheme}>
      <CssBaseline />
      <UtilityBar />
      <Header />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  )
}

export default App
