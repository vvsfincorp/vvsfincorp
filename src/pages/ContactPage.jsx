import { Box, Button } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PageHero from '../components/common/PageHero'
import { goldButtonSx, outlineLightButtonSx } from '../components/common/styles'
import ContactSection from '../components/sections/ContactSection'
import { companyInfo } from '../data/siteContent'

// Reuses the existing home page enquiry form (ContactSection), so there is only one form to maintain.
function ContactPage() {
  return (
    <Box component="main" sx={{ bgcolor: '#f4f7fb' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact VVS Fincorp"
        title="Request business funding"
        intro="Share your requirement through the form below, or call, email or WhatsApp our team in Villivakkam, Chennai."
        actions={
          <>
            <Button component="a" href={`tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`} variant="contained" startIcon={<CallOutlinedIcon />} sx={goldButtonSx}>
              Call {companyInfo.primaryPhone}
            </Button>
            <Button component="a" href={`mailto:${companyInfo.email}`} variant="outlined" startIcon={<EmailOutlinedIcon />} sx={{ ...outlineLightButtonSx, textTransform: 'none' }}>
              {companyInfo.email}
            </Button>
          </>
        }
      />
      <ContactSection />
    </Box>
  )
}

export default ContactPage
