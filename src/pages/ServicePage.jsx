import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Link as RouterLink, useParams } from 'react-router-dom'
import CtaBanner from '../components/common/CtaBanner'
import PageHero from '../components/common/PageHero'
import ProcessSteps from '../components/common/ProcessSteps'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import { cardSx, goldButtonSx, outlineLightButtonSx, pageWidthSx, sectionSx, textLinkButtonSx, type } from '../components/common/styles'
import { companyBoard, serviceImages } from '../config/images'
import { services } from '../data/siteContent'
import NotFoundPage from './NotFoundPage'

function ServicePage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFoundPage />

  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
        eyebrow="Business loans in Chennai by VVS Fincorp"
        title={service.title}
        intro={service.description}
        image={serviceImages[service.slug]}
        highlights={['Fast approval', 'Minimal documentation', 'Transparent process']}
        actions={
          <>
            <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={goldButtonSx}>
              Discuss your requirement
            </Button>
            <Button component={RouterLink} to="/services" variant="outlined" startIcon={<ArrowBackRoundedIcon />} sx={outlineLightButtonSx}>
              All services
            </Button>
          </>
        }
      />

      <Box component="section" aria-labelledby="service-overview" sx={sectionSx}>
        <Box sx={{ ...pageWidthSx, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(0, .9fr)' }, gap: { xs: 3.5, md: 6 }, alignItems: 'center' }}>
          <Reveal>
            <SectionHeading id="service-overview" eyebrow="About this solution" title="A practical way to move forward" />
            <Typography sx={{ ...type.lead, mt: 1.75, color: '#526477' }}>{service.overview}</Typography>

            <Box sx={{ mt: 2.5, p: { xs: 2, md: 2.25 }, borderLeft: '3px solid', borderColor: 'secondary.light', borderRadius: '0 10px 10px 0', bgcolor: '#f5f8fc' }}>
              <Typography component="h3" sx={{ ...type.eyebrow, color: 'primary.dark' }}>Who this may suit</Typography>
              <Typography sx={{ ...type.body, mt: 0.5, color: '#526477' }}>{service.suitableFor}</Typography>
            </Box>

            <Typography component="h3" sx={{ ...type.h3, mt: 3, color: 'primary.dark' }}>Key benefits</Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mt: 1.5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.25 }}>
              {service.benefits.map((benefit) => (
                <Stack key={benefit} component="li" direction="row" spacing={1.1} sx={{ alignItems: 'center', px: 1.5, py: 1.1, border: '1px solid #e3eaf2', borderRadius: 2, bgcolor: '#fff' }}>
                  <Box aria-hidden sx={{ width: 20, height: 20, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: 'secondary.light', color: 'primary.dark' }}>
                    <CheckRoundedIcon sx={{ fontSize: 14 }} />
                  </Box>
                  <Typography sx={{ color: '#3f5165', fontSize: 14, fontWeight: 600, lineHeight: 1.45 }}>{benefit}</Typography>
                </Stack>
              ))}
            </Box>

            <Stack direction="row" spacing={1} sx={{ mt: 2.5, alignItems: 'flex-start' }}>
              <InfoOutlinedIcon sx={{ mt: '2px', color: 'text.secondary', fontSize: 17 }} />
              <Typography sx={{ ...type.small, color: 'text.secondary' }}>
                Every request is assessed individually. Rates, fees and repayment terms are confirmed only after assessment.
              </Typography>
            </Stack>
          </Reveal>

          <Reveal delay={100} sx={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 3, overflow: 'hidden', boxShadow: '0 16px 40px #0a2e5d1f' }}>
            <Box component="img" src={companyBoard.src} srcSet={companyBoard.srcSet} sizes="(min-width: 900px) 40vw, 100vw" width={companyBoard.width} height={companyBoard.height} alt={companyBoard.alt} loading="lazy" decoding="async" sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
          </Reveal>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="service-process" sx={{ ...sectionSx, bgcolor: '#f5f8fc' }}>
        <Box sx={pageWidthSx}>
          <Reveal>
            <SectionHeading
              id="service-process"
              align="center"
              eyebrow="How we help"
              title="Clear steps. A real conversation."
              intro="Start with your requirement, then speak with our team about the options available to you."
              sx={{ mb: { xs: 3, md: 3.5 } }}
            />
          </Reveal>
          <ProcessSteps />
        </Box>
      </Box>

      <Box component="section" aria-labelledby="other-services" sx={sectionSx}>
        <Box sx={pageWidthSx}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 3, alignItems: { xs: 'flex-start', sm: 'flex-end' }, justifyContent: 'space-between' }}>
            <SectionHeading id="other-services" eyebrow="Explore more" title="Other funding solutions" />
            <Button component={RouterLink} to="/services" endIcon={<ArrowForwardRoundedIcon />} sx={textLinkButtonSx}>View all services</Button>
          </Stack>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
            {services.filter((item) => item.slug !== service.slug).map((item, index) => {
              const image = serviceImages[item.slug]
              return (
                <Reveal key={item.slug} delay={index * 90}>
                  <Box component={RouterLink} to={`/services/${item.slug}`} sx={{ ...cardSx, p: 0, display: 'grid', gridTemplateColumns: { xs: '100px minmax(0, 1fr)', sm: '130px minmax(0, 1fr)' }, minHeight: 124, color: 'inherit', textDecoration: 'none', '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main', outlineOffset: 3 } }}>
                    <Box component="img" src={image.src} srcSet={image.srcSet} sizes="130px" width={image.width} height={image.height} alt="" loading="lazy" decoding="async" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <Box sx={{ p: { xs: 1.75, sm: 2.25 }, alignSelf: 'center' }}>
                      <Typography component="h3" sx={{ ...type.h3, fontSize: 16, color: 'primary.dark' }}>{item.title}</Typography>
                      <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: 13, lineHeight: 1.55 }}>{item.description}</Typography>
                      <Typography aria-hidden sx={{ mt: 1, color: '#8a6a00', fontSize: 11.5, fontWeight: 800, letterSpacing: '.06em' }}>LEARN MORE →</Typography>
                    </Box>
                  </Box>
                </Reveal>
              )
            })}
          </Box>
        </Box>
      </Box>

      <CtaBanner text={`Get in touch with our team to discuss your ${service.title.toLowerCase()} requirement.`} />
    </Box>
  )
}

export default ServicePage
