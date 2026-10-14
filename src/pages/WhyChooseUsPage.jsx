import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { Link as RouterLink } from 'react-router-dom'
import CtaBanner from '../components/common/CtaBanner'
import PageHero from '../components/common/PageHero'
import ProcessSteps from '../components/common/ProcessSteps'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import { cardSx, goldButtonSx, iconBoxSx, outlineLightButtonSx, pageWidthSx, sectionSx, textLinkButtonSx, type } from '../components/common/styles'
import { pageImages } from '../config/images'

// Every point below restates something already offered on the services pages.
const reasons = [
  { icon: AccessTimeOutlinedIcon, title: 'Fast approval process', text: 'Quick decisions and responsive approvals, so you are not left waiting to plan your next step.' },
  { icon: DescriptionOutlinedIcon, title: 'Minimal documentation', text: 'We keep paperwork simple. Our team tells you exactly what is needed for your type of funding.' },
  { icon: AccountBalanceWalletOutlinedIcon, title: '₹1 lakh to ₹30 crore', text: 'A wide range of funding requests can be discussed, from small requirements to large ones.' },
  { icon: HandshakeOutlinedIcon, title: 'Network of financial partners', text: 'Direct funding solutions through our network of financial partners.' },
  { icon: VerifiedUserOutlinedIcon, title: 'No upfront charges', text: 'Direct funding solutions come with no upfront charges, and terms are explained clearly before you proceed.' },
  { icon: SupportAgentOutlinedIcon, title: 'Dedicated support', text: 'Talk to a real person by phone, WhatsApp or email, from first enquiry to decision.' },
]

function WhyChooseUsPage() {
  return (
    <Box component="main" sx={{ bgcolor: '#fff' }}>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Why Choose Us' }]}
        eyebrow="Why choose VVS Fincorp"
        title="A clear, transparent way to fund your business"
        intro="Fast decisions, minimal paperwork and honest communication. Here is what you can expect when you work with our Chennai team."
        image={pageImages.whyChooseUs}
        actions={
          <>
            <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={goldButtonSx}>
              Request funding
            </Button>
            <Button component={RouterLink} to="/services" variant="outlined" sx={outlineLightButtonSx}>
              View services
            </Button>
          </>
        }
      />

      <Box component="section" aria-labelledby="why-reasons" sx={sectionSx}>
        <Box sx={pageWidthSx}>
          <Reveal>
            <SectionHeading id="why-reasons" align="center" eyebrow="What sets us apart" title="Built around what businesses need" sx={{ mb: { xs: 3, md: 3.5 } }} />
          </Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' }, gap: { xs: 2, md: 2.5 } }}>
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.title} delay={(index % 3) * 90}>
                  <Box component="article" sx={cardSx}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Box aria-hidden sx={iconBoxSx}><Icon /></Box>
                      <Typography component="h3" sx={{ ...type.h3, color: 'primary.dark' }}>{reason.title}</Typography>
                    </Stack>
                    <Typography sx={{ ...type.body, mt: 1.5, color: 'text.secondary' }}>{reason.text}</Typography>
                  </Box>
                </Reveal>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="why-process" sx={{ ...sectionSx, position: 'relative', overflow: 'hidden', bgcolor: 'primary.dark', '&::before': { content: '""', position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, #174779 0%, transparent 65%)', pointerEvents: 'none' } }}>
        <Box sx={{ ...pageWidthSx, position: 'relative' }}>
          <Reveal>
            <SectionHeading id="why-process" light align="center" eyebrow="Our process" title="Three simple steps" intro="No complicated forms to start. Just a conversation about what you need." sx={{ mb: { xs: 3, md: 3.5 } }} />
          </Reveal>
          <ProcessSteps light />
        </Box>
      </Box>

      <Box component="section" aria-label="Before you apply" sx={sectionSx}>
        <Box sx={{ ...pageWidthSx, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: 2, md: 2.5 } }}>
          <Reveal sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, bgcolor: '#f5f8fc', border: '1px solid #e3eaf2' }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box aria-hidden sx={{ ...iconBoxSx, bgcolor: '#fff', borderColor: '#e3eaf2' }}><InfoOutlinedIcon /></Box>
              <Typography component="h2" sx={{ ...type.h3, fontSize: { xs: 18, md: 20 }, color: 'primary.dark' }}>Straight answers, up front</Typography>
            </Stack>
            <Typography sx={{ ...type.body, mt: 1.5, color: '#526477' }}>
              Approval is never guaranteed. Every funding request is assessed individually, and rates, fees and repayment terms are confirmed only after that assessment. Our team explains them clearly before you decide to proceed.
            </Typography>
            <Button component={RouterLink} to="/faq" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...textLinkButtonSx, mt: 1 }}>Read common questions</Button>
          </Reveal>
          <Reveal delay={100} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, bgcolor: '#fdf8e8', border: '1px solid #f3dfa0' }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box aria-hidden sx={{ ...iconBoxSx, bgcolor: '#fff' }}><CalculateOutlinedIcon /></Box>
              <Typography component="h2" sx={{ ...type.h3, fontSize: { xs: 18, md: 20 }, color: 'primary.dark' }}>Plan before you apply</Typography>
            </Stack>
            <Typography sx={{ ...type.body, mt: 1.5, color: '#526477' }}>
              Use the repayment calculator on our home page to estimate a monthly installment for the amount, flat monthly rate and tenure you have in mind. It is a planning aid, not an offer.
            </Typography>
            <Button component={RouterLink} to="/#emi-calculator" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...textLinkButtonSx, mt: 1 }}>Open the calculator</Button>
          </Reveal>
        </Box>
      </Box>

      <CtaBanner eyebrow="Ready when you are" title="Let’s talk about your funding requirement" />
    </Box>
  )
}

export default WhyChooseUsPage
