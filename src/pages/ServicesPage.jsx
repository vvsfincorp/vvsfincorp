import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { Link as RouterLink } from 'react-router-dom'
import CtaBanner from '../components/common/CtaBanner'
import PageHero from '../components/common/PageHero'
import ProcessSteps from '../components/common/ProcessSteps'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import { cardSx, dotPatternSx, goldButtonSx, outlineLightButtonSx, pageWidthSx, sectionSx, textLinkButtonSx, type, visuallyHiddenSx } from '../components/common/styles'
import { pageImages, serviceImages } from '../config/images'
import { services, stats } from '../data/siteContent'

function ServicesPage() {
  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Our services"
        title="Business loans & funding services in Chennai"
        intro="Three funding solutions for businesses and individuals, with requests from ₹1 lakh to ₹30 crore and short-term tenures from 3 to 10 months."
        image={pageImages.services}
        actions={
          <>
            <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={goldButtonSx}>
              Request funding
            </Button>
            <Button component={RouterLink} to="/#emi-calculator" variant="outlined" startIcon={<CalculateOutlinedIcon />} sx={outlineLightButtonSx}>
              Repayment calculator
            </Button>
          </>
        }
      />

      {/* Key facts, from the same data as the home page stats strip */}
      <Box component="section" aria-label="Funding at a glance" sx={{ ...pageWidthSx, position: 'relative', zIndex: 1, mt: { xs: -2.5, md: -3.5 } }}>
        <Box component="dl" sx={{ m: 0, display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, bgcolor: '#fff', border: '1px solid #e3eaf2', borderRadius: 3, boxShadow: '0 14px 36px #0a2e5d14', overflow: 'hidden' }}>
          {stats.map((stat, index) => (
            <Box key={stat.label} sx={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'flex-end', px: { xs: 1.5, md: 2.5 }, py: { xs: 2, md: 2.5 }, textAlign: 'center', borderLeft: { xs: index % 2 ? '1px solid #e8edf3' : 'none', md: index ? '1px solid #e8edf3' : 'none' }, borderTop: { xs: index > 1 ? '1px solid #e8edf3' : 'none', md: 'none' } }}>
              <Typography component="dt" sx={{ ...type.small, color: 'text.secondary' }}>{stat.label}</Typography>
              <Typography component="dd" sx={{ m: 0, mb: 0.25, color: 'primary.dark', fontSize: { xs: 14.5, md: 17 }, fontWeight: 800, lineHeight: 1.3 }}>{stat.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" aria-labelledby="services-list" sx={sectionSx}>
        <Box sx={pageWidthSx}>
          <Reveal>
            <SectionHeading
              id="services-list"
              align="center"
              eyebrow="Funding solutions"
              title="Choose the option that fits your requirement"
              intro="Not sure which one applies to you? Share your requirement and our team will talk you through the options."
              sx={{ mb: { xs: 3, md: 3.5 } }}
            />
          </Reveal>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: { xs: 2, md: 2.5 } }}>
            {services.map((service, index) => {
              const image = serviceImages[service.slug]
              return (
                <Reveal key={service.slug} delay={index * 90}>
                  <Box component="article" aria-labelledby={`service-${service.slug}`} sx={{ ...cardSx, p: 0, display: 'flex', flexDirection: 'column', '&:hover img': { transform: 'scale(1.04)' } }}>
                    <Box sx={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', bgcolor: '#eaf1f9' }}>
                      <Box component="img" src={image.src} srcSet={image.srcSet} sizes="(min-width: 1300px) 380px, (min-width: 900px) 30vw, (min-width: 600px) 50vw, 100vw" width={image.width} height={image.height} alt={image.alt} loading="lazy" decoding="async" sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease', '@media (prefers-reduced-motion: reduce)': { transition: 'none' } }} />
                      <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.1, py: 0.4, borderRadius: 99, bgcolor: '#062149d9', color: 'secondary.light', fontSize: 11, fontWeight: 800, letterSpacing: '.12em' }}>
                        0{index + 1}
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: { xs: 2.5, md: 3 } }}>
                      <Typography id={`service-${service.slug}`} component="h3" sx={{ ...type.h3, fontSize: { xs: 18, md: 19 }, color: 'primary.dark' }}>
                        {service.title}
                      </Typography>
                      <Typography sx={{ ...type.body, mt: 1, color: 'text.secondary' }}>{service.description}</Typography>
                      <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 2, mb: 2.5, p: 0, pt: 2, borderTop: '1px solid #edf1f6', display: 'grid', gap: 1 }}>
                        {service.benefits.map((benefit) => (
                          <Stack key={benefit} component="li" direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                            <Box aria-hidden sx={{ width: 18, height: 18, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#fdf3d3', color: '#8a6a00' }}>
                              <CheckRoundedIcon sx={{ fontSize: 13 }} />
                            </Box>
                            <Typography sx={{ color: '#3f5165', fontSize: 14, lineHeight: 1.5 }}>{benefit}</Typography>
                          </Stack>
                        ))}
                      </Box>
                      <Stack direction="row" spacing={2} sx={{ mt: 'auto', alignItems: 'center' }}>
                        <Button component={RouterLink} to={`/services/${service.slug}`} variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...goldButtonSx, minHeight: 40, px: 2.25, fontSize: 12.5, boxShadow: 'none' }}>
                          Learn more<Box component="span" sx={visuallyHiddenSx}> about {service.title}</Box>
                        </Button>
                        <Button component={RouterLink} to="/contact" sx={{ ...textLinkButtonSx, fontSize: 12.5 }}>
                          Enquire now
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Reveal>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="services-process" sx={{ ...sectionSx, bgcolor: '#f5f8fc', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, ...dotPatternSx, WebkitMaskImage: 'linear-gradient(#000, transparent 60%)', maskImage: 'linear-gradient(#000, transparent 60%)', pointerEvents: 'none' } }}>
        <Box sx={{ ...pageWidthSx, position: 'relative' }}>
          <Reveal>
            <SectionHeading id="services-process" align="center" eyebrow="How it works" title="From enquiry to a clear decision" sx={{ mb: { xs: 3, md: 3.5 } }} />
          </Reveal>
          <ProcessSteps />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 3.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{ ...type.body, color: 'text.secondary' }}>Have questions about amounts, tenure or documents?</Typography>
            <Button component={RouterLink} to="/faq" endIcon={<ArrowForwardRoundedIcon />} sx={textLinkButtonSx}>Read the FAQs</Button>
          </Stack>
        </Box>
      </Box>

      <CtaBanner />
    </Box>
  )
}

export default ServicesPage
