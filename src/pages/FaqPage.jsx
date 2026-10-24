import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import { Link as RouterLink } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import Reveal from '../components/common/Reveal'
import { goldButtonSx, iconBoxSx, outlineLightButtonSx, pageWidthSx, sectionSx, type } from '../components/common/styles'
import { companyInfo, faqs } from '../data/siteContent'

const contactLinkSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  color: '#e6eef7',
  fontSize: 14,
  fontWeight: 600,
  overflowWrap: 'anywhere',
  '& svg': { color: 'secondary.light', fontSize: 18 },
  '&:hover': { color: '#fff' },
}

// The same questions are published as FAQPage structured data (src/seo/seoConfig.js),
// so the visible answers and the search-engine version always match.
function FaqPage() {
  const [expanded, setExpanded] = useState(0)

  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        eyebrow="Frequently asked questions"
        title="Business loan FAQs"
        intro="Answers to common questions about business loan amounts, tenure, documents and how to get started with VVS Fincorp."
      />

      <Box component="section" aria-label="Questions and answers" sx={{ ...sectionSx, bgcolor: '#f5f8fc' }}>
        <Box sx={{ ...pageWidthSx, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 320px' }, gap: { xs: 3, md: 4 }, alignItems: 'start' }}>
          <Stack spacing={1.25}>
            {faqs.map((item, index) => {
              const open = expanded === index
              return (
                <Reveal key={item.question} delay={Math.min(index, 4) * 50}>
                  <Accordion
                    disableGutters
                    elevation={0}
                    expanded={open}
                    onChange={(_, isOpen) => setExpanded(isOpen ? index : false)}
                    slots={{ heading: 'h2' }}
                    sx={{
                      border: '1px solid',
                      borderColor: open ? '#e8c45a' : '#e3eaf2',
                      borderRadius: '12px !important',
                      bgcolor: '#fff',
                      boxShadow: open ? '0 12px 28px #0a2e5d10' : 'none',
                      transition: 'border-color .2s ease, box-shadow .2s ease',
                      '&::before': { display: 'none' },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<AddRoundedIcon />}
                      aria-controls={`faq-${index}-content`}
                      id={`faq-${index}-header`}
                      sx={{
                        px: { xs: 2, md: 2.5 },
                        minHeight: 56,
                        '& .MuiAccordionSummary-content': { my: 1.5, alignItems: 'center', gap: 1.5 },
                        '& .MuiAccordionSummary-expandIconWrapper': { width: 28, height: 28, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: open ? 'secondary.light' : '#f0f4f9', color: 'primary.dark', transition: 'transform .25s ease, background-color .2s ease' },
                        '& .MuiAccordionSummary-expandIconWrapper svg': { fontSize: 18 },
                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(45deg)' },
                        '&.Mui-focusVisible': { bgcolor: '#f3f7fb' },
                      }}
                    >
                      <Typography component="span" aria-hidden sx={{ color: '#8a6a00', fontSize: 12, fontWeight: 900, letterSpacing: '.08em', minWidth: 20 }}>
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                      <Typography component="span" sx={{ color: 'primary.dark', fontSize: { xs: 15, md: 16 }, fontWeight: 700, lineHeight: 1.45 }}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: { xs: 2, md: 2.5 }, pl: { xs: 6, md: 6.5 }, pt: 0, pb: 2.25 }}>
                      <Typography sx={{ ...type.body, color: '#526477' }}>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Reveal>
              )
            })}
          </Stack>

          {/* Help card: sticks beside the questions on desktop */}
          <Reveal delay={150} sx={{ position: { md: 'sticky' }, top: { md: 136 } }}>
            <Box sx={{ position: 'relative', overflow: 'hidden', p: { xs: 2.5, md: 3 }, borderRadius: 3, bgcolor: 'primary.dark', color: '#fff', boxShadow: '0 20px 40px -16px #041a3573', '&::before': { content: '""', position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 100% 0%, #174779 0%, transparent 65%)', pointerEvents: 'none' } }}>
              <Box sx={{ position: 'relative' }}>
                <Box aria-hidden sx={{ ...iconBoxSx, bgcolor: '#ffffff12', borderColor: '#ffffff26', color: 'secondary.light' }}>
                  <SupportAgentOutlinedIcon />
                </Box>
                <Typography component="h2" sx={{ ...type.h3, mt: 2 }}>Still have a question?</Typography>
                <Typography sx={{ ...type.small, mt: 0.75, color: '#c9d7e6' }}>Our team is happy to talk through your requirement.</Typography>
                <Stack spacing={1.25} sx={{ mt: 2.25 }}>
                  <Box component="a" href={`tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`} sx={contactLinkSx}><CallOutlinedIcon />{companyInfo.primaryPhone}</Box>
                  <Box component="a" href={`mailto:${companyInfo.email}`} sx={contactLinkSx}><EmailOutlinedIcon />{companyInfo.email}</Box>
                </Stack>
                <Stack spacing={1} sx={{ mt: 2.5 }}>
                  <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...goldButtonSx, boxShadow: 'none' }}>
                    Ask our team
                  </Button>
                  <Button component={RouterLink} to="/services" variant="outlined" sx={outlineLightButtonSx}>
                    View services
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Box>

    </Box>
  )
}

export default FaqPage
