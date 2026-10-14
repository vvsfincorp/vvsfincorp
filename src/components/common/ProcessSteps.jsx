import { Box, Typography } from '@mui/material'
import { processSteps } from '../../data/siteContent'
import Reveal from './Reveal'
import { type } from './styles'

// The three-step customer journey, with a connecting line between steps on desktop.
function ProcessSteps({ light = false }) {
  return (
    <Box
      component="ol"
      sx={{
        position: 'relative',
        listStyle: 'none',
        m: 0,
        p: 0,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: { xs: 2, md: 3 },
        // Dashed connector behind the step numbers (desktop only)
        '&::before': {
          content: '""',
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          top: 44,
          left: '16%',
          right: '16%',
          borderTop: '2px dashed',
          borderColor: light ? '#ffffff33' : '#cdd9e8',
        },
      }}
    >
      {processSteps.map((step, index) => (
        <Reveal
          key={step.number}
          component="li"
          delay={index * 100}
          sx={{
            position: 'relative',
            p: { xs: 2.5, md: 3 },
            textAlign: { md: 'center' },
            borderRadius: 3,
            border: '1px solid',
            borderColor: light ? '#ffffff21' : '#e3eaf2',
            bgcolor: light ? '#0b2a52' : '#fff',
            boxShadow: light ? 'none' : '0 6px 20px #0a2e5d0a',
          }}
        >
          <Box
            aria-hidden
            sx={{
              width: 40,
              height: 40,
              mx: { md: 'auto' },
              display: 'grid',
              placeItems: 'center',
              borderRadius: '50%',
              bgcolor: 'secondary.light',
              color: 'primary.dark',
              fontSize: 13.5,
              fontWeight: 900,
              boxShadow: light ? '0 0 0 6px #0b2a52' : '0 0 0 6px #fff',
            }}
          >
            {step.number}
          </Box>
          <Typography component="h3" sx={{ ...type.h3, mt: 2, color: light ? '#fff' : 'primary.dark' }}>{step.title}</Typography>
          <Typography sx={{ ...type.body, mt: 0.75, color: light ? '#c9d7e6' : 'text.secondary' }}>{step.text}</Typography>
        </Reveal>
      ))}
    </Box>
  )
}

export default ProcessSteps
