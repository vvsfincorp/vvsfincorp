import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'

const GOLD = '#f5c33b'
const phoneNumber = '+91 9363329147'
const focusRing = { outline: `3px solid ${GOLD}`, outlineOffset: 3, borderRadius: 1 }

function QuickContact() {
  return (
    <Box component="section" aria-labelledby="quick-contact-heading" sx={{ bgcolor: '#fff', color: '#fff', py: { xs: 3, md: 4 } }}>
      <Box sx={{ width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1400, mx: 'auto' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 3 }}
          sx={{
            mt: 0,
            p: { xs: 3, md: 4 },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            borderRadius: 4,
            bgcolor: 'primary.dark',
            border: '1px solid #174779',
            boxShadow: '0 16px 40px #06214924',
          }}
        >
          <Box sx={{ maxWidth: 620 }}>
            <Typography id="quick-contact-heading" component="h2" sx={{ color: '#fff', fontSize: { xs: 22, md: 28 }, fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.02em' }}>
              Ready to fund your next step?
            </Typography>
            <Typography sx={{ mt: 1, color: '#d5e1ef', fontSize: { xs: 14.5, md: 16 }, lineHeight: 1.65 }}>
              Talk to our team and explore the right funding option for your business.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: { xs: '100%', md: 'auto' }, flex: '0 0 auto' }}>
            <Button
              component="a"
              href="#contact"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                px: 3.5,
                py: 1.35,
                borderRadius: 99,
                bgcolor: 'secondary.light',
                color: 'primary.dark',
                fontSize: 14,
                fontWeight: 800,
                '&:hover': { bgcolor: '#f0d276' },
                '&:focus-visible': focusRing,
              }}
            >
              Request funding
            </Button>
            <Button
              component="a"
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              startIcon={<CallOutlinedIcon />}
              sx={{
                px: 3,
                py: 1.3,
                border: '1px solid #ffffff66',
                borderRadius: 99,
                color: '#fff',
                fontSize: 14,
                fontWeight: 800,
                '&:hover': { bgcolor: '#ffffff1f', borderColor: GOLD },
                '&:focus-visible': focusRing,
              }}
            >
              {phoneNumber}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default QuickContact
