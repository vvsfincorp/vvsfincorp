import HeroSection from '../components/sections/HeroSection'
import StatsStrip from '../components/sections/StatsStrip'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import EmiCalculatorSection from '../components/sections/EmiCalculatorSection'
import QuickContact from '../components/sections/QuickContact'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

function HomePage() {
  return (
    <main id="home">
      <HeroSection />
      <AboutSection />
      <StatsStrip />
      <ServicesSection />
      <EmiCalculatorSection />
      <QuickContact />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

export default HomePage
