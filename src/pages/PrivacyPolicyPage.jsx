import { Box, Typography } from '@mui/material'
import PageHero from '../components/common/PageHero'
import { pageWidthSx, sectionSx, type } from '../components/common/styles'
import { companyInfo } from '../data/siteContent'

// Plain-language notice describing what this website actually does with enquiry data.
// Have it reviewed before launch and update it if the website starts collecting anything else.
const sections = [
  {
    title: 'Information you share with us',
    body: [
      'When you send an enquiry through this website, we receive the details you enter: your name, company name, mobile number, email address, funding requirement, loan type and any message you add.',
      'This website does not ask for bank account numbers, card details, passwords or OTPs. Please do not send them through the form, email or WhatsApp.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'We use your enquiry only to contact you about your funding requirement and to discuss the options available.',
      'Enquiries are delivered to our team by email. When the form sends your enquiry directly, it is passed through EmailJS, an email delivery service, to our inbox.',
    ],
  },
  {
    title: 'Maps and other services',
    body: [
      'Our home and contact pages show an embedded Google Map so you can find our office. Google may collect information when the map loads, under its own privacy policy.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      `To ask what information we hold about you, or to have your enquiry deleted, email ${companyInfo.email} or call ${companyInfo.primaryPhone}.`,
    ],
  },
]

function PrivacyPolicyPage() {
  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        eyebrow="Legal"
        title="Privacy policy"
        intro="How VVS Fincorp handles the information you share through this website."
      />
      <Box component="section" aria-label="Privacy policy" sx={sectionSx}>
        <Box sx={{ ...pageWidthSx, maxWidth: 780 }}>
          {sections.map((section) => (
            <Box key={section.title} sx={{ '& + &': { mt: 3.5 } }}>
              <Typography component="h2" sx={{ ...type.h3, fontSize: { xs: 18, md: 20 }, color: 'primary.dark' }}>{section.title}</Typography>
              {section.body.map((paragraph) => (
                <Typography key={paragraph} sx={{ ...type.body, mt: 1, color: '#526477' }}>{paragraph}</Typography>
              ))}
            </Box>
          ))}
          <Typography component="address" sx={{ mt: 5, pt: 3, borderTop: '1px solid #e3eaf1', color: 'text.secondary', fontSize: 14.5, fontStyle: 'normal', lineHeight: 1.7 }}>
            {companyInfo.name}, {companyInfo.address}, Tamil Nadu
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PrivacyPolicyPage
