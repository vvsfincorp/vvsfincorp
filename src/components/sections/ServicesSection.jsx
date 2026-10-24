import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import { Link as RouterLink } from 'react-router-dom'
import { serviceImages } from '../../config/images'
import { services } from '../../data/siteContent'
import { visuallyHiddenSx } from '../common/styles'

const serviceIcons = [EditNoteRoundedIcon, BusinessRoundedIcon, GroupsRoundedIcon]
const GOLD = '#f5c33b'

function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      aria-labelledby="services-heading"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#f5f8fc',
        py: { xs: 5, md: 7 },
        scrollMarginTop: 112,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: '0 0 auto 0',
          height: { xs: 360, md: 520 },
          backgroundImage: 'radial-gradient(#0a2e5d24 1.4px, transparent 1.6px)',
          backgroundSize: '24px 24px',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 15%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, #000 15%, transparent 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1400, mx: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Heading row: heading left, decorative graphic right */}
        <Box sx={{ position: 'relative', mb: { xs: 3, md: 4 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between' }}
        >
          <Box sx={{ maxWidth: 620 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Box sx={{ width: 10, height: 10, bgcolor: GOLD, borderRadius: '2px' }} />
              <Typography sx={{ color: 'secondary.dark', fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                Our Services
              </Typography>
            </Stack>
            <Typography
              id="services-heading"
              component="h2"
              sx={{ mt: 1.5, color: 'primary.dark', fontSize: { xs: 27, sm: 31, md: 36 }, lineHeight: 1.15, letterSpacing: '-.03em', fontWeight: 800 }}
            >
              Tailored Funding Solutions<br />for Every Need
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: { xs: 15, md: 17 }, lineHeight: 1.65, maxWidth: 520 }}>
              Quick business loans, cheque-based loans and working capital in Chennai to help your business grow and succeed.
            </Typography>
          </Box>
        </Stack>

       
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 2.5, md: 3 },
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            const image = serviceImages[service.slug]
            return (
              <Box
                key={service.title}
                component="article"
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0,
                  bgcolor: '#fff',
                  border: '1px solid #dde6f0',
                  borderRadius: 3,
                  boxShadow: '0 8px 24px #0a2e5d0d',
                  transition: 'box-shadow .25s ease, transform .25s ease',
                  // straight top accent bar (a border-top would curve with the radius)
                  '&::before': {
                    content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, zIndex: 1,
                    bgcolor: 'primary.main', transition: 'background-color .2s ease',
                  },
                  '&:hover, &:focus-within': {
                    boxShadow: '0 22px 44px #0a2e5d24',
                    transform: 'translateY(-4px)',
                    '&::before': { bgcolor: GOLD },
                    '& img': { transform: 'scale(1.05)' },
                  },
                  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover, &:focus-within': { transform: 'none', '& img': { transform: 'none' } } },
                }}
              >
                {/* Photo with the service icon overlapping its bottom edge */}
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ aspectRatio: '16 / 9', overflow: 'hidden', bgcolor: '#eaf1f9' }}>
                    <Box
                      component="img"
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(min-width: 1500px) 440px, (min-width: 900px) 30vw, 100vw"
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease' }}
                    />
                  </Box>
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute', left: { xs: 24, md: 28 }, bottom: -30,
                      width: 60, height: 60, display: 'grid', placeItems: 'center', borderRadius: 2.5,
                      color: 'primary.main', bgcolor: '#fdf3d3', border: '3px solid #fff',
                      boxShadow: '0 8px 20px #0a2e5d26',
                    }}
                  >
                    <Icon sx={{ fontSize: 30 }} />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: { xs: 3, md: 3.5 }, pt: 5.5, pb: { xs: 3, md: 3.5 } }}>
                  <Typography component="h3" sx={{ color: 'primary.dark', fontSize: { xs: 20, md: 22 }, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-.01em' }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: 15, lineHeight: 1.65 }}>
                    {service.description}
                  </Typography>

                  <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 3, mb: 4, p: 0, pt: 3, borderTop: '1px solid #e8edf3', display: 'grid', gap: 1.5 }}>
                    {service.benefits.map((benefit) => (
                      <Stack key={benefit} component="li" direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                        <Box
                          aria-hidden
                          sx={{ mt: '2px', width: 20, height: 20, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: GOLD, color: 'primary.dark' }}
                        >
                          <CheckRoundedIcon sx={{ fontSize: 14 }} />
                        </Box>
                        <Typography sx={{ color: '#3f5165', fontSize: 14.5, lineHeight: 1.5 }}>{benefit}</Typography>
                      </Stack>
                    ))}
                  </Box>

                  <Button
                    component={RouterLink}
                    to={`/services/${service.slug}`}
                    variant="contained"
                    disableElevation
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      mt: 'auto',
                      alignSelf: 'flex-start',
                      px: 3,
                      py: 1.1,
                      borderRadius: 999,
                      bgcolor: GOLD,
                      color: 'primary.dark',
                      fontSize: 13,
                      fontWeight: 800,
                      letterSpacing: '.06em',
                      '& .MuiButton-endIcon': { transition: 'transform .2s ease' },
                      '&:hover': { bgcolor: 'primary.main', color: '#fff', '& .MuiButton-endIcon': { transform: 'translateX(4px)' } },
                      '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 },
                      '@media (prefers-reduced-motion: reduce)': { '& .MuiButton-endIcon': { transition: 'none' }, '&:hover .MuiButton-endIcon': { transform: 'none' } },
                    }}
                  >
                    Learn more<Box component="span" sx={visuallyHiddenSx}> about {service.title}</Box>
                  </Button>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default ServicesSection