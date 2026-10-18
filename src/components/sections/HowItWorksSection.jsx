import { Box } from '@mui/material'
import ProcessSteps from '../common/ProcessSteps'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import { pageWidthSx, sectionSx } from '../common/styles'

// Home page: the three-step customer journey, between the services and the calculator.
function HowItWorksSection() {
  return (
    <Box component="section" aria-labelledby="how-it-works" sx={{ ...sectionSx, py: { xs: 5, md: 7 }, bgcolor: '#fff' }}>
      <Box sx={pageWidthSx}>
        <Reveal>
          <SectionHeading
            id="how-it-works"
            align="center"
            eyebrow="How it works"
            title="From requirement to funding in three simple steps"
            intro="No complicated paperwork or long waits. Share what you need and our team will guide you from there."
            sx={{ mb: { xs: 3, md: 4.5 } }}
          />
        </Reveal>
        <ProcessSteps />
      </Box>
    </Box>
  )
}

export default HowItWorksSection
