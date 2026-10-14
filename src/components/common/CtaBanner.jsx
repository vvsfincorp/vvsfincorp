import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import { Link as RouterLink } from 'react-router-dom'
import { companyInfo } from '../../data/siteContent'
import { goldButtonSx, outlineLightButtonSx, pageWidthSx, type } from './styles'
import Reveal from './Reveal'

// Closing call to action used at the bottom of inner pages: a navy card on a white band.
function CtaBanner({
  eyebrow = 'Let’s talk about what’s next',
  title = 'Need help finding a funding option?',
  text = 'Share your requirement and our team will talk you through the options available.',
}) {
  return (
    <Box component="section" aria-labelledby="cta-heading" sx={{ py: { xs: 3.5, md: 4 }, bgcolor: '#fff' }}>
      <Reveal
        sx={{
          ...pageWidthSx,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 2.5, md: 4 },
          px: { xs: 3, md: 5 },
          py: { xs: 3, md: 3.5 },
          borderRadius: 4,
          bgcolor: 'primary.dark',
          boxShadow: '0 20px 44px -16px #041a3573',
          '&::before': { content: '""', position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 100% 0%, #174779 0%, transparent 60%)', pointerEvents: 'none' },
          '&::after': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: 'secondary.light' },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Typography sx={{ ...type.eyebrow, color: 'secondary.light' }}>{eyebrow}</Typography>
          <Typography id="cta-heading" component="h2" sx={{ ...type.h2, mt: 1, maxWidth: 640, color: '#fff', fontSize: { xs: 22, md: 28 } }}>
            {title}
          </Typography>
          <Typography sx={{ ...type.body, mt: 0.75, maxWidth: 580, color: '#d5e1ef' }}>{text}</Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ position: 'relative', flex: '0 0 auto' }}>
          <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={goldButtonSx}>
            Request funding
          </Button>
          <Button component="a" href={`tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`} variant="outlined" startIcon={<CallOutlinedIcon />} sx={outlineLightButtonSx}>
            {companyInfo.primaryPhone}
          </Button>
        </Stack>
      </Reveal>
    </Box>
  )
}

export default CtaBanner
