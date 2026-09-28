import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { heroSlides } from '../../data/siteContent'

function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ bgcolor: '#fff', py: { xs: 6, md: 11 }, scrollMarginTop: 24 }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, .92fr) minmax(0, 1.08fr)' },
        alignItems: 'center',
        gap: { xs: 4, sm: 5, md: 8 },
        width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' },
        maxWidth: 1400, mx: 'auto',
      }}>
        <Box sx={{
          minHeight: { xs: 280, sm: 360, md: 500 },
          position: 'relative', overflow: 'visible',
          '&::before': {
            content: '""', position: 'absolute', zIndex: 0,
            top: { xs: 10, md: 16 }, left: { xs: 10, md: 16 },
            right: { xs: -10, md: -16 }, bottom: { xs: -10, md: -16 },
            border: '2px solid', borderColor: 'secondary.light', borderRadius: { xs: 3, md: 4 },
          },
        }}>
          <Box sx={{
            position: 'absolute', zIndex: 1, inset: 0, overflow: 'hidden',
            borderRadius: { xs: 3, md: 4 }, bgcolor: '#eaf1f9',
            boxShadow: '0 20px 48px #0a2e5d24',
            '&::after': {
              content: '""', position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, #06214935 0%, transparent 32%, transparent 55%, #06214965 100%)',
              pointerEvents: 'none',
            },
          }}>
            <Box
              component="img"
              src={heroSlides[0].image}
              alt={heroSlides[0].alt}
              sx={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                objectPosition: 'center',
                transition: 'transform .6s ease',
                '&:hover': { transform: 'scale(1.035)' },
              }}
            />
            <Box sx={{
              position: 'absolute', zIndex: 1, top: { xs: 14, sm: 20 }, left: { xs: 14, sm: 20 },
              px: 1.5, py: 0.75, border: '1px solid #ffffff80', borderRadius: 99,
              bgcolor: '#062149a6', backdropFilter: 'blur(8px)',
            }}>
              <Typography sx={{ color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>
                VVS Fincorp
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={1.25} sx={{
              position: 'absolute', zIndex: 1,
              left: { xs: 12, sm: 'auto' }, right: { xs: 12, sm: 20 }, bottom: { xs: 12, sm: 20 },
              maxWidth: { xs: 'calc(100% - 24px)', sm: 290 },
              px: { xs: 1.5, sm: 2 }, py: { xs: 1.25, sm: 1.75 },
              border: '1px solid #ffffffb3', borderRadius: 2.5,
              bgcolor: '#fff', boxShadow: '0 12px 30px #06214935',
            }}>
              <Box sx={{
                width: { xs: 38, sm: 44 }, height: { xs: 38, sm: 44 }, flex: '0 0 auto',
                display: 'grid', placeItems: 'center', borderRadius: 2,
                bgcolor: '#f7edc9', color: 'primary.main',
              }}>
                <AccountBalanceRoundedIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: 'primary.main', fontSize: { xs: 12, sm: 14 }, fontWeight: 700, lineHeight: 1.3 }}>
                  Funding for your next step
                </Typography>
                <Typography sx={{ mt: 0.35, color: 'text.secondary', fontSize: { xs: 10, sm: 11 }, lineHeight: 1.35 }}>
                  Practical solutions for growing businesses
                </Typography>
              </Box>
              <CheckRoundedIcon sx={{ ml: 'auto', color: 'secondary.main', fontSize: 20, flex: '0 0 auto' }} />
            </Stack>
          </Box>
        </Box>
        <Box sx={{ maxWidth: 700 }}>
          <Typography sx={{
            display: 'flex', alignItems: 'center', gap: 1, color: 'secondary.main',
            fontSize: 12, lineHeight: 1.4, fontWeight: 800, letterSpacing: 1.6, textTransform: 'uppercase',
          }}>
            <Box component="span" sx={{ width: 9, height: 9, borderRadius: '2px', bgcolor: 'secondary.light' }} />
            About VVS Fincorp
          </Typography>
          <Typography component="h2" sx={{
            mt: 1.5, color: 'primary.dark', fontSize: { xs: 32, sm: 40, md: 48 },
            lineHeight: 1.12, letterSpacing: '-.035em', fontWeight: 800,
          }}>
            Funding that moves your business forward.
          </Typography>
          <Typography sx={{ mt: 2.25, color: '#526477', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
            VVS Fincorp is a Chennai-based financial services company helping businesses access quick, reliable funding. We make the process straightforward, so you can focus on what comes next.
          </Typography>
          <Typography sx={{ mt: 1.5, color: '#526477', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
            From working capital to short-term business finance, we work to match your funding needs with practical solutions and clear communication.
          </Typography>
          <Stack spacing={1.25} sx={{ mt: 2.5 }}>
            {['Quick, hassle-free funding process', 'Clear and transparent communication', 'Solutions tailored to your business'].map((item) => (
              <Stack key={item} direction="row" alignItems="center" spacing={1}>
                <Box sx={{ width: 22, height: 22, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#e8f0f8', color: 'primary.main' }}>
                  <CheckRoundedIcon sx={{ fontSize: 15 }} />
                </Box>
                <Typography sx={{ color: 'primary.main', fontSize: { xs: 13, md: 14 }, fontWeight: 600, lineHeight: 1.5 }}>{item}</Typography>
              </Stack>
            ))}
          </Stack>
          <Button component="a" href="#services" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{
            mt: 3.5, minWidth: 190, px: 3.5, py: 1.4, borderRadius: 99,
            color: 'primary.dark', bgcolor: 'secondary.light', fontSize: 13,
            boxShadow: '0 8px 18px #d4af3733',
            '&:hover': { bgcolor: '#f0d276', boxShadow: '0 10px 22px #d4af3750', transform: 'translateY(-1px)' },
            transition: 'transform .2s ease, box-shadow .2s ease, background-color .2s ease',
          }}>
            Explore Our Services
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutSection
