import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import { Link as RouterLink, useParams } from 'react-router-dom'
import companyImage from '../assets/CompanyPhotos/companyBoard.jpg'
import { heroSlides, services } from '../data/siteContent'

const pageBenefits = [
  { icon: QueryBuilderRoundedIcon, title: 'A clear process', text: 'Talk through your requirement and understand the next steps.' },
  { icon: ShieldRoundedIcon, title: 'Transparent communication', text: 'Get clear information as you explore available options.' },
  { icon: GroupsRoundedIcon, title: 'Personal support', text: 'Our team is here to help you discuss a suitable solution.' },
]

function ServicePage() {
  const { slug } = useParams()
  const serviceIndex = services.findIndex((item) => item.slug === slug)
  const service = services[serviceIndex]
  const heroImage = heroSlides[serviceIndex % heroSlides.length]

  if (!service) {
    return (
      <Box component="main" sx={{ minHeight: '55vh', display: 'grid', placeContent: 'center', justifyItems: 'center', gap: 2, px: 3, py: 8, textAlign: 'center', bgcolor: '#f5f8fc' }}>
        <Typography sx={{ color: 'secondary.main', fontSize: 14, fontWeight: 800, letterSpacing: '.12em' }}>SERVICE</Typography>
        <Typography component="h1" sx={{ color: 'primary.dark', fontSize: { xs: 30, md: 42 }, fontWeight: 800 }}>Service not found</Typography>
        <Button component={RouterLink} to="/#services" variant="contained" sx={{ mt: 1, px: 3, py: 1.2, borderRadius: 99, color: 'primary.dark', bgcolor: 'secondary.light', '&:hover': { bgcolor: '#f0d276' } }}>
          Browse our services
        </Button>
      </Box>
    )
  }

  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <Box
        component="section"
        aria-labelledby="service-title"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 3, md: 4 },
          pb: { xs: 5, md: 8 },
          bgcolor: 'primary.dark',
          color: '#fff',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 75% 20%, #174779 0%, transparent 55%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Box sx={{ position: 'relative', width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1400, mx: 'auto' }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#d5e1ef', '& a': { color: '#d5e1ef' }, '& .MuiBreadcrumbs-separator': { color: '#93a9c2' } }}>
            <Link component={RouterLink} to="/" underline="hover">Home</Link>
            <Link component={RouterLink} to="/#services" underline="hover">Services</Link>
            <Typography color="inherit">{service.title}</Typography>
          </Breadcrumbs>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, .95fr) minmax(0, 1.05fr)' }, gap: { xs: 4, md: 6 }, alignItems: 'center', mt: { xs: 4, md: 5 } }}>
            <Box sx={{ py: { md: 3 }, position: 'relative', zIndex: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ width: 9, height: 9, borderRadius: '2px', bgcolor: 'secondary.light' }} />
                <Typography sx={{ color: 'secondary.light', fontSize: 12, fontWeight: 800, letterSpacing: 1.7, textTransform: 'uppercase' }}>
                  Funding solutions by VVS Fincorp
                </Typography>
              </Stack>
              <Typography id="service-title" component="h1" sx={{ mt: 2, maxWidth: 690, fontSize: { xs: 39, sm: 50, md: 62 }, lineHeight: 1.04, letterSpacing: '-.045em', fontWeight: 800 }}>
                {service.title}
              </Typography>
              <Typography sx={{ mt: 2.5, maxWidth: 610, color: '#d5e1ef', fontSize: { xs: 16, md: 18 }, lineHeight: 1.75 }}>
                {service.description}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3.5 }}>
                <Button component={RouterLink} to="/#contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ minHeight: 52, px: 3, borderRadius: 99, color: 'primary.dark', bgcolor: 'secondary.light', fontWeight: 800, '&:hover': { bgcolor: '#f0d276', transform: 'translateY(-2px)' }, transition: 'transform .2s ease, background-color .2s ease' }}>
                  Discuss your requirements
                </Button>
                <Button component={RouterLink} to="/#services" variant="outlined" startIcon={<ArrowBackRoundedIcon />} sx={{ minHeight: 52, px: 2.5, borderRadius: 99, borderColor: '#ffffff80', color: '#fff', '&:hover': { borderColor: 'secondary.light', bgcolor: '#ffffff12' } }}>
                  All services
                </Button>
              </Stack>
              <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mt: 3.5 }}>
                {['Flexible options', 'Responsive support', 'Transparent process'].map((item) => (
                  <Stack key={item} direction="row" alignItems="center" spacing={0.75} sx={{ px: 1.25, py: 0.75, border: '1px solid #ffffff30', borderRadius: 99, bgcolor: '#ffffff0d' }}>
                    <CheckRoundedIcon sx={{ color: 'secondary.light', fontSize: 16 }} />
                    <Typography sx={{ color: '#edf3f9', fontSize: 11.5, fontWeight: 600 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Box sx={{ minHeight: { xs: 270, sm: 350, md: 430 }, position: 'relative', overflow: 'visible' }}>
              <Box sx={{ position: 'absolute', inset: { xs: '10px -7px -8px 7px', md: '16px -14px -14px 14px' }, border: '2px solid', borderColor: 'secondary.light', borderRadius: { xs: 3, md: 4 } }} />
              <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: { xs: 3, md: 4 }, border: '1px solid #ffffff80', bgcolor: '#0a1e34', boxShadow: '0 22px 54px #0004' }}>
                <Box component="img" src={heroImage.image} alt={heroImage.alt} sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #071a2c6b, transparent 75%), linear-gradient(0deg, #071a2cd9 0%, transparent 48%)' }} />
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ position: 'absolute', left: { xs: 14, sm: 22 }, right: { xs: 14, sm: 'auto' }, bottom: { xs: 14, sm: 22 }, maxWidth: { sm: 330 }, p: { xs: 1.5, sm: 2 }, border: '1px solid #ffffff80', borderRadius: 2.5, bgcolor: '#fff', boxShadow: '0 12px 30px #061a3350' }}>
                  <Box sx={{ width: 46, height: 46, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: 2, bgcolor: '#f7edc9', color: 'primary.main' }}>
                    <AccountBalanceWalletRoundedIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'primary.dark', fontSize: 14, fontWeight: 800 }}>Funding for your next step</Typography>
                    <Typography sx={{ mt: 0.25, color: 'text.secondary', fontSize: 12, lineHeight: 1.5 }}>Practical support, with a process built around your needs.</Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" aria-label="Service highlights" sx={{ position: 'relative', zIndex: 1, mt: { xs: -1, md: -2 }, width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1280, mx: 'auto' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, bgcolor: '#fff', border: '1px solid #e3eaf1', borderRadius: { xs: 3, md: 4 }, boxShadow: '0 16px 44px #0a2e5d14', overflow: 'hidden' }}>
          {pageBenefits.map((item, index) => {
            const Icon = item.icon
            return (
              <Stack key={item.title} direction="row" spacing={1.5} alignItems="center" sx={{ p: { xs: 2.25, md: 3 }, borderRight: { xs: 'none', sm: index < pageBenefits.length - 1 ? '1px solid #e8edf3' : 'none' }, borderBottom: { xs: index < pageBenefits.length - 1 ? '1px solid #e8edf3' : 'none', sm: 'none' } }}>
                <Box sx={{ width: 46, height: 46, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: 2, bgcolor: '#fdf3d3', color: 'primary.main' }}>
                  <Icon />
                </Box>
                <Box>
                  <Typography sx={{ color: 'primary.dark', fontSize: 14, fontWeight: 800 }}>{item.title}</Typography>
                  <Typography sx={{ mt: 0.35, color: 'text.secondary', fontSize: 12, lineHeight: 1.5 }}>{item.text}</Typography>
                </Box>
              </Stack>
            )
          })}
        </Box>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 11 }, bgcolor: '#fff' }}>
        <Box sx={{ width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1280, mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, .95fr) minmax(0, 1.05fr)' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
          <Box sx={{ position: 'relative', minHeight: { xs: 260, sm: 340, md: 440 }, overflow: 'hidden', borderRadius: { xs: 3, md: 4 }, boxShadow: '0 18px 44px #0a2e5d20' }}>
            <Box component="img" src={companyImage} alt="VVS Fincorp team and company information" sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #062149a6 0%, transparent 55%)' }} />
            <Box sx={{ position: 'absolute', left: { xs: 16, md: 24 }, bottom: { xs: 16, md: 24 }, px: 2, py: 1.25, border: '1px solid #ffffff80', borderRadius: 2, bgcolor: '#062149b8', backdropFilter: 'blur(8px)' }}>
              <Typography sx={{ color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>Fast funding. Trusted partnership.</Typography>
            </Box>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: 9, height: 9, borderRadius: '2px', bgcolor: 'secondary.light' }} />
              <Typography sx={{ color: 'secondary.main', fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>About this solution</Typography>
            </Stack>
            <Typography component="h2" sx={{ mt: 1.5, color: 'primary.dark', fontSize: { xs: 31, sm: 38, md: 46 }, lineHeight: 1.1, letterSpacing: '-.035em', fontWeight: 800 }}>
              A practical way to move forward.
            </Typography>
            <Typography sx={{ mt: 2.25, color: '#526477', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
              {service.overview}
            </Typography>
            <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, borderLeft: '4px solid', borderColor: 'secondary.light', borderRadius: '0 12px 12px 0', bgcolor: '#f5f8fc' }}>
              <Typography sx={{ color: 'primary.dark', fontSize: 13, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase' }}>Who this may suit</Typography>
              <Typography sx={{ mt: 0.75, color: '#526477', fontSize: 15, lineHeight: 1.7 }}>{service.suitableFor}</Typography>
            </Box>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {service.benefits.map((benefit) => (
                <Stack key={benefit} direction="row" alignItems="center" spacing={1.25}>
                  <Box aria-hidden sx={{ width: 22, height: 22, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: 'secondary.light', color: 'primary.dark' }}>
                    <CheckRoundedIcon sx={{ fontSize: 15 }} />
                  </Box>
                  <Typography sx={{ color: '#3f5165', fontSize: 14.5, lineHeight: 1.55 }}>{benefit}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button component={RouterLink} to="/#contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 3.5, px: 3, py: 1.3, borderRadius: 99, color: 'primary.dark', bgcolor: 'secondary.light', fontWeight: 800, '&:hover': { bgcolor: '#f0d276', transform: 'translateY(-2px)' }, transition: 'transform .2s ease, background-color .2s ease' }}>
              Talk to our team
            </Button>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f5f8fc' }}>
        <Box sx={{ width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1280, mx: 'auto' }}>
          <Box sx={{ maxWidth: 700, mx: 'auto', mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
            <Typography sx={{ color: 'secondary.main', fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>How we help</Typography>
            <Typography component="h2" sx={{ mt: 1, color: 'primary.dark', fontSize: { xs: 29, md: 40 }, lineHeight: 1.15, fontWeight: 800 }}>Clear steps. A real conversation.</Typography>
            <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: 15.5, lineHeight: 1.7 }}>Start with your requirement, then speak with our team about the options available to you.</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.5 }}>
            {[
              ['01', 'Share your requirement', 'Tell us what you need funding for and the amount you want to explore.'],
              ['02', 'Discuss your options', 'Our team will talk through the relevant funding options and next steps.'],
              ['03', 'Move ahead with clarity', 'Review the information, ask questions, and decide how you would like to proceed.'],
            ].map(([number, title, text]) => (
              <Box key={number} sx={{ p: { xs: 2.5, md: 3 }, bgcolor: '#fff', border: '1px solid #dde6f0', borderRadius: 3, boxShadow: '0 8px 24px #0a2e5d0a' }}>
                <Typography sx={{ color: 'secondary.main', fontSize: 13, fontWeight: 900, letterSpacing: '.12em' }}>{number}</Typography>
                <Typography component="h3" sx={{ mt: 1.5, color: 'primary.dark', fontSize: 19, fontWeight: 800 }}>{title}</Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: 14, lineHeight: 1.7 }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
        <Box sx={{ width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1280, mx: 'auto' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'flex-end' }} justifyContent="space-between" spacing={2} sx={{ mb: 3 }}>
            <Box>
              <Typography sx={{ color: 'secondary.main', fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>Explore more</Typography>
              <Typography component="h2" sx={{ mt: 1, color: 'primary.dark', fontSize: { xs: 28, md: 36 }, fontWeight: 800 }}>Other funding solutions</Typography>
            </Box>
            <Button component={RouterLink} to="/#services" endIcon={<ArrowForwardRoundedIcon />} sx={{ color: 'primary.main', fontWeight: 800 }}>View all services</Button>
          </Stack>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
            {services.filter((item) => item.slug !== service.slug).map((item) => (
              <Box key={item.slug} component={RouterLink} to={`/services/${item.slug}`} sx={{ display: 'grid', gridTemplateColumns: { xs: '112px minmax(0, 1fr)', sm: '140px minmax(0, 1fr)' }, minHeight: 140, overflow: 'hidden', border: '1px solid #dde6f0', borderRadius: 3, color: 'inherit', textDecoration: 'none', transition: 'transform .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 32px #0a2e5d14' }, '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main', outlineOffset: 3 } }}>
                <Box component="img" src={heroSlides[services.findIndex((entry) => entry.slug === item.slug) % heroSlides.length].image} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box sx={{ p: { xs: 1.75, sm: 2.25 }, alignSelf: 'center' }}>
                  <Typography sx={{ color: 'primary.dark', fontSize: 16, fontWeight: 800, lineHeight: 1.35 }}>{item.title}</Typography>
                  <Typography sx={{ mt: 0.75, color: 'text.secondary', fontSize: 12.5, lineHeight: 1.55 }}>{item.description}</Typography>
                  <Typography sx={{ mt: 1, color: 'secondary.dark', fontSize: 11, fontWeight: 800 }}>LEARN MORE →</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: 'primary.dark' }}>
        <Box sx={{ width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
          <Box>
            <Typography sx={{ color: 'secondary.light', fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>Let’s talk about what’s next</Typography>
            <Typography component="h2" sx={{ mt: 1, maxWidth: 760, color: '#fff', fontSize: { xs: 27, md: 36 }, lineHeight: 1.2, fontWeight: 800 }}>Need help finding a funding option?</Typography>
            <Typography sx={{ mt: 1, color: '#d5e1ef', fontSize: 15, lineHeight: 1.7 }}>Get in touch with our team to discuss your requirement.</Typography>
          </Box>
          <Button component={RouterLink} to="/#contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ minHeight: 52, flex: '0 0 auto', px: 3, borderRadius: 99, color: 'primary.dark', bgcolor: 'secondary.light', fontWeight: 800, '&:hover': { bgcolor: '#f0d276' } }}>
            Contact VVS Fincorp
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ServicePage
