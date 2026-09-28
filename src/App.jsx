import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/layout/Header'
import UtilityBar from './components/layout/UtilityBar'
import HeroSection from './components/sections/HeroSection'
import StatsStrip from './components/sections/StatsStrip'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import EmiCalculatorSection from './components/sections/EmiCalculatorSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'
import { brandTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={brandTheme}>
      <CssBaseline />
      <UtilityBar />
      <Header />
      <main id="home">
        <HeroSection />
        
        <AboutSection />
        <StatsStrip />
        <ServicesSection />
        <EmiCalculatorSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
