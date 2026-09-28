import logo from '../../assets/companyLogo/VVSFINCORP-removebg-preview.png'
import { companyInfo, navigationLinks, services, socialLinks } from '../../data/siteContent'
import { Box, IconButton, Link, Stack, Typography } from '@mui/material'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import FacebookRoundedIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

const socialIcons = [FacebookRoundedIcon, InstagramIcon, LinkedInIcon, YouTubeIcon]
const phoneNumbers = ['+91 9363329147', '+91 9363720179']

const headingSx = {
  mb: 2,
  color: '#fff',
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: '.08em',
  textTransform: 'uppercase',
}

const footerLinkSx = {
  color: '#d5e1ef',
  fontSize: 12,
  lineHeight: 1.5,
  textDecoration: 'none',
  '&:hover': { color: 'secondary.light' },
}

function Footer() {
  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'primary.dark', color: '#fff' }}>
      <Box sx={{
        width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' },
        maxWidth: 1400, mx: 'auto', py: { xs: 5, md: 6 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: '1.3fr .8fr 1.15fr .85fr' },
        gap: { xs: 4, sm: 4, lg: 5 },
      }}>
        <Box>
          <Link href="#home" aria-label="VVS Fincorp home" underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25 }}>
            <Box sx={{
              width: 56, height: 56, flex: '0 0 auto', display: 'grid', placeItems: 'center',
              bgcolor: '#fff', borderRadius: 1.5, boxShadow: '0 3px 12px #0002',
            }}>
              <Box component="img" src={logo} alt="" sx={{ width: 48, height: 48, objectFit: 'contain' }} />
            </Box>
            <Box>
              <Typography sx={{ color: '#fff', font: '700 21px/1 Georgia, serif', letterSpacing: '-.4px' }}>
                VVS <Box component="span" sx={{ color: 'secondary.light' }}>FINCORP</Box>
              </Typography>
              <Typography sx={{ mt: 0.5, color: '#d5e1ef', fontSize: 9, fontWeight: 700, letterSpacing: '.08em' }}>
                FAST FUNDING. TRUSTED PARTNERSHIP.
              </Typography>
            </Box>
          </Link>
          <Typography sx={{ mt: 2, maxWidth: 300, color: '#d5e1ef', fontSize: 12, lineHeight: 1.7 }}>
            Empowering businesses with quick, reliable funding solutions to help turn plans into progress.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
            {socialLinks.map((social, index) => {
              const SocialIcon = socialIcons[index]
              return (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  aria-label={social.label}
                  size="small"
                  sx={{
                    width: 32, height: 32, color: 'primary.dark',
                    bgcolor: 'secondary.light', '&:hover': { bgcolor: '#fff', transform: 'translateY(-2px)' },
                    transition: 'transform .2s ease, background-color .2s ease',
                  }}
                >
                  <SocialIcon sx={{ fontSize: 16 }} />
                </IconButton>
              )
            })}
          </Stack>
        </Box>

        <Box>
          <Typography sx={headingSx}>Quick links</Typography>
          <Stack spacing={1.15}>
            {navigationLinks.map((link) => (
              <Link key={link.label} href={link.href} underline="none" sx={footerLinkSx}>
                {link.label}
              </Link>
            ))}
            <Link href="#emi-calculator" underline="none" sx={footerLinkSx}>Repayment calculator</Link>
            <Link href="#contact" underline="none" sx={footerLinkSx}>Contact</Link>
          </Stack>
        </Box>

        <Box>
          <Typography sx={headingSx}>Our services</Typography>
          <Stack spacing={1.15}>
            {services.map((service) => (
              <Link key={service.title} href="#services" underline="none" sx={footerLinkSx}>
                {service.title}
              </Link>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography sx={headingSx}>Contact info</Typography>
          <Stack spacing={1.5}>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <LocationOnOutlinedIcon sx={{ mt: '1px', color: 'secondary.light', fontSize: 17, flex: '0 0 auto' }} />
              <Typography sx={{ color: '#d5e1ef', fontSize: 11, lineHeight: 1.6 }}>{companyInfo.address}</Typography>
            </Stack>
            {phoneNumbers.map((phone) => (
              <Stack key={phone} direction="row" alignItems="center" spacing={1}>
                <CallOutlinedIcon sx={{ color: 'secondary.light', fontSize: 16, flex: '0 0 auto' }} />
                <Link href={`tel:${phone.replace(/\s/g, '')}`} underline="none" sx={footerLinkSx}>{phone}</Link>
              </Stack>
            ))}
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <EmailOutlinedIcon sx={{ mt: '1px', color: 'secondary.light', fontSize: 16, flex: '0 0 auto' }} />
              <Link href={`mailto:${companyInfo.email}`} underline="none" sx={{ ...footerLinkSx, overflowWrap: 'anywhere' }}>{companyInfo.email}</Link>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ borderTop: '1px solid #ffffff26' }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
          spacing={1}
          sx={{
            width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' },
            maxWidth: 1400, minHeight: 56, mx: 'auto', py: 1.5, pr: { xs: 6, sm: 0 },
          }}
        >
          <Typography sx={{ color: '#d5e1ef', fontSize: 11 }}>
            © {new Date().getFullYear()} VVS Fincorp. All rights reserved.
          </Typography>
          <Typography sx={{ color: '#d5e1ef', fontSize: 11 }}>
            Fast Funding. Trusted Partnership.
          </Typography>
        </Stack>
      </Box>

      <IconButton
        component="a"
        href="#home"
        aria-label="Back to top"
        sx={{
          position: 'absolute', right: { xs: 16, md: 28 }, bottom: 14,
          width: 38, height: 38, borderRadius: 1, bgcolor: 'secondary.light',
          color: 'primary.dark', boxShadow: '0 4px 12px #0003',
          '&:hover': { bgcolor: '#f0d276', transform: 'translateY(-2px)' },
          transition: 'transform .2s ease, background-color .2s ease',
        }}
      >
        <ArrowUpwardRoundedIcon />
      </IconButton>
    </Box>
  )
}

export default Footer
