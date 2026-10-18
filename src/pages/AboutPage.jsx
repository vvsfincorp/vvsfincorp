import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import { Link as RouterLink } from 'react-router-dom'
import CtaBanner from '../components/common/CtaBanner'
import PageHero from '../components/common/PageHero'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import { cardSx, dotPatternSx, goldButtonSx, iconBoxSx, outlineDarkButtonSx, outlineLightButtonSx, pageWidthSx, sectionSx, textLinkButtonSx, type } from '../components/common/styles'
import StatsStrip from '../components/sections/StatsStrip'
import { pageImages } from '../config/images'
import { companyInfo, services } from '../data/siteContent'

// The same three commitments shown in the home page "About" section
const values = [
  { icon: BoltRoundedIcon, title: 'Quick, hassle-free process', text: 'We simplify the financing process so you can focus on running and growing your business.' },
  { icon: ForumRoundedIcon, title: 'Clear, transparent communication', text: 'Straightforward information at every step, and terms explained before you decide.' },
  { icon: TuneRoundedIcon, title: 'Solutions tailored to you', text: 'We work to match your funding requirement with a practical option that suits it.' },
]

function AboutPage() {
  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        eyebrow="About VVS Fincorp"
        title="A Chennai funding partner for growing businesses"
        intro={`Founded in ${companyInfo.founded} in Chennai, Tamil Nadu, VVS Fincorp is a financial services company helping businesses access quick, reliable funding.`}
        image={pageImages.about}
        actions={
          <>
            <Button component={RouterLink} to="/services" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={goldButtonSx}>
              Explore our services
            </Button>
            <Button component={RouterLink} to="/contact" variant="outlined" sx={outlineLightButtonSx}>
              Talk to our team
            </Button>
          </>
        }
      />

      <Box component="section" aria-labelledby="about-story" sx={sectionSx}>
        <Box sx={{ ...pageWidthSx, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.15fr) minmax(0, .85fr)' }, gap: { xs: 3.5, md: 6 }, alignItems: 'center' }}>
          <Reveal>
            <SectionHeading id="about-story" eyebrow="Who we are" title="Funding that moves your business forward" />
            <Typography sx={{ ...type.lead, mt: 1.75, color: '#526477' }}>
              VVS Fincorp was founded in {companyInfo.founded} in Chennai. We simplify the financing process, enabling businesses to focus on growth and what comes next.
            </Typography>
            <Typography sx={{ ...type.body, mt: 1.5, color: '#526477' }}>
              From working capital to short-term business finance, we work to match your funding needs with practical solutions and clear communication. Funding requests from ₹1 lakh to ₹30 crore can be discussed with our team, and every request is assessed individually.
            </Typography>
          </Reveal>

          <Reveal delay={120} sx={{ position: 'relative', overflow: 'hidden', p: { xs: 3, md: 3.5 }, borderRadius: 3, bgcolor: 'primary.dark', color: '#fff', boxShadow: '0 20px 40px -16px #041a3573', '&::before': { content: '""', position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 100% 0%, #174779 0%, transparent 65%)', pointerEvents: 'none' } }}>
            <Box sx={{ position: 'relative' }}>
              <FormatQuoteRoundedIcon aria-hidden sx={{ fontSize: 36, color: 'secondary.light', transform: 'rotate(180deg)' }} />
              <Typography sx={{ ...type.eyebrow, mt: 1, color: 'secondary.light' }}>Our mission</Typography>
              <Typography sx={{ mt: 1, fontSize: { xs: 18, md: 20 }, fontWeight: 700, lineHeight: 1.45 }}>
                {companyInfo.mission}
              </Typography>
              <Box sx={{ width: 32, height: 3, mt: 2.5, borderRadius: 99, bgcolor: 'secondary.light' }} />
              <Typography sx={{ ...type.small, mt: 1.5, color: '#c9d7e6', letterSpacing: '.04em' }}>{companyInfo.tagline}</Typography>
            </Box>
          </Reveal>
        </Box>
      </Box>
    <Box component="section" aria-labelledby="about-visit" sx={{ pb: { xs: 1, md: 2 } }}>
        <Reveal sx={{ ...pageWidthSx, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 2.5, p: { xs: 2.5, md: 3 }, border: '1px solid #e3eaf2', borderRadius: 3, bgcolor: '#f5f8fc' }}>
          <Stack direction="row" spacing={1.75} sx={{ alignItems: 'center' }}>
            <Box aria-hidden sx={{ ...iconBoxSx, bgcolor: 'primary.dark', borderColor: 'primary.dark', color: 'secondary.light' }}>
              <LocationOnRoundedIcon />
            </Box>
            <Box>
              <Typography id="about-visit" component="h2" sx={{ ...type.h3, color: 'primary.dark' }}>Visit our Chennai office</Typography>
              <Typography component="address" sx={{ ...type.small, mt: 0.25, color: 'text.secondary', fontStyle: 'normal' }}>{companyInfo.address}, Tamil Nadu</Typography>
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ flex: '0 0 auto' }}>
            <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...goldButtonSx, boxShadow: 'none' }}>Map &amp; contact details</Button>
            <Button component="a" href={`tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`} variant="outlined" startIcon={<CallOutlinedIcon />} sx={outlineDarkButtonSx}>
              {companyInfo.primaryPhone}
            </Button>
          </Stack>
        </Reveal>
      </Box>

      <StatsStrip />

      <Box component="section" aria-labelledby="about-values" sx={{ ...sectionSx, position: 'relative', bgcolor: '#f5f8fc', '&::before': { content: '""', position: 'absolute', inset: 0, ...dotPatternSx, WebkitMaskImage: 'linear-gradient(#000, transparent 60%)', maskImage: 'linear-gradient(#000, transparent 60%)', pointerEvents: 'none' } }}>
        <Box sx={{ ...pageWidthSx, position: 'relative' }}>
          <Reveal>
            <SectionHeading id="about-values" align="center" eyebrow="What we stand for" title="How we work with you" sx={{ mb: { xs: 3, md: 3.5 } }} />
          </Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: { xs: 2, md: 2.5 } }}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={index * 90}>
                  <Box sx={cardSx}>
                    <Box aria-hidden sx={iconBoxSx}><Icon /></Box>
                    <Typography component="h3" sx={{ ...type.h3, mt: 2, color: 'primary.dark' }}>{value.title}</Typography>
                    <Typography sx={{ ...type.body, mt: 0.75, color: 'text.secondary' }}>{value.text}</Typography>
                  </Box>
                </Reveal>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="about-services" sx={sectionSx}>
        <Box sx={{ ...pageWidthSx, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, .8fr) minmax(0, 1.2fr)' }, gap: { xs: 3, md: 6 }, alignItems: 'center' }}>
          <Reveal>
            <SectionHeading id="about-services" eyebrow="What we offer" title="Three ways we can help" intro="Each solution is explained in detail on its own page." />
            <Button component={RouterLink} to="/services" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...textLinkButtonSx, mt: 1.5 }}>View all services</Button>
          </Reveal>
          <Stack spacing={1.25}>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <Box component={RouterLink} to={`/services/${service.slug}`} sx={{ display: 'flex', alignItems: 'center', gap: 2, px: { xs: 2, md: 2.5 }, py: { xs: 1.75, md: 2 }, border: '1px solid #e3eaf2', borderRadius: 2.5, bgcolor: '#fff', transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease', '&:hover': { transform: 'translateX(4px)', borderColor: 'secondary.light', boxShadow: '0 10px 24px #0a2e5d12' }, '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main', outlineOffset: 3 }, '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } } }}>
                  <Box aria-hidden sx={{ ...iconBoxSx, width: 40, height: 40, fontSize: 13, fontWeight: 900, color: 'primary.dark' }}>0{index + 1}</Box>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography component="h3" sx={{ ...type.h3, fontSize: 16, color: 'primary.dark' }}>{service.title}</Typography>
                    <Typography sx={{ mt: 0.25, color: 'text.secondary', fontSize: 13.5, lineHeight: 1.55 }}>{service.description}</Typography>
                  </Box>
                  <ArrowForwardRoundedIcon aria-hidden sx={{ color: 'primary.main', fontSize: 20, flex: '0 0 auto' }} />
                </Box>
              </Reveal>
            ))}
          </Stack>
        </Box>
      </Box>

  
      <CtaBanner />
    </Box>
  )
}

export default AboutPage
