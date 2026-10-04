import logo from '../../assets/companyLogo/VVSFINCORP-removebg-preview.png'
import { companyInfo, navigationLinks, services, socialLinks } from '../../data/siteContent'
import { Box, Button, IconButton, Link, Stack, Typography } from '@mui/material'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import FacebookRoundedIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

const GOLD = '#f5c33b'
const socialIcons = [FacebookRoundedIcon, InstagramIcon, LinkedInIcon, YouTubeIcon]
const phoneNumbers = ['+91 9363992147', '+91 9363772019']
const focusRing = { outline: `3px solid ${GOLD}`, outlineOffset: 3, borderRadius: 1 }

const footerLinkSx = {
  display: 'inline-flex',
  width: 'fit-content',
  color: '#d5e1ef',
  fontSize: 14.5,
  lineHeight: 1.5,
  textDecoration: 'none',
  transition: 'color .2s ease, transform .2s ease',
  '&:hover': { color: GOLD, transform: 'translateX(4px)' },
  '&:focus-visible': focusRing,
  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { color: GOLD, transform: 'none' } },
}

function ColumnHeading({ children }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Typography component="h3" sx={{ color: '#fff', fontSize: 14, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>
        {children}
      </Typography>
      <Box sx={{ width: 28, height: 3, mt: 1, borderRadius: 99, bgcolor: GOLD }} />
    </Box>
  )
}

function ContactRow({ icon, children }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
      <Box
        aria-hidden
        sx={{
          flex: '0 0 auto',
          width: 34,
          height: 34,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 1.5,
          bgcolor: '#ffffff14',
          border: '1px solid #ffffff1f',
          color: GOLD,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0, pt: '5px' }}>{children}</Box>
    </Stack>
  )
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'primary.dark',
        color: '#fff',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, #174779 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1400, mx: 'auto' }}>
        {/* Main columns */}
        <Box
          sx={{
            py: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: '1.4fr .8fr 1.1fr 1.25fr' },
            gap: { xs: 4.5, sm: 5, lg: 6 },
          }}
        >
          <Box>
            <Link
              href="#home"
              aria-label="VVS Fincorp home"
              underline="none"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, '&:focus-visible': focusRing }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  flex: '0 0 auto',
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: '#fff',
                  borderRadius: 2,
                  boxShadow: '0 6px 18px #0003',
                }}
              >
                <Box component="img" src={logo} alt="" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
              </Box>
              <Box>
                <Typography sx={{ color: '#fff', font: '700 23px/1 Georgia, serif', letterSpacing: '-.4px' }}>
                  VVS <Box component="span" sx={{ color: 'secondary.light' }}>FINCORP</Box>
                </Typography>
                <Typography sx={{ mt: 0.75, color: '#d5e1ef', fontSize: 10.5, fontWeight: 700, letterSpacing: '.08em' }}>
                  FAST FUNDING. TRUSTED PARTNERSHIP.
                </Typography>
              </Box>
            </Link>
            <Typography sx={{ mt: 2.5, maxWidth: 340, color: '#d5e1ef', fontSize: 14.5, lineHeight: 1.75 }}>
              Empowering businesses with quick, reliable funding solutions to help turn plans into progress.
            </Typography>
            <Stack direction="row" spacing={1.25} sx={{ mt: 3 }}>
              {socialLinks.map((social, index) => {
                const SocialIcon = socialIcons[index]
                const isExternal = /^https?:/.test(social.href)
                return (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    aria-label={social.label}
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                    sx={{
                      width: 40,
                      height: 40,
                      color: '#fff',
                      border: '1px solid #ffffff40',
                      transition: 'transform .2s ease, background-color .2s ease, color .2s ease, border-color .2s ease',
                      '&:hover': { bgcolor: 'secondary.light', color: 'primary.dark', borderColor: 'secondary.light', transform: 'translateY(-3px)' },
                      '&:focus-visible': { outline: `3px solid ${GOLD}`, outlineOffset: 3 },
                      '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                    }}
                  >
                    <SocialIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                )
              })}
            </Stack>
          </Box>

          <Box component="nav" aria-label="Quick links">
            <ColumnHeading>Quick links</ColumnHeading>
            <Stack spacing={1.5}>
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
            <ColumnHeading>Our services</ColumnHeading>
            <Stack spacing={1.5}>
              {services.map((service) => (
                <Link key={service.title} href="#services" underline="none" sx={footerLinkSx}>
                  {service.title}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <ColumnHeading>Contact info</ColumnHeading>
            <Stack spacing={2}>
              <ContactRow icon={<LocationOnOutlinedIcon sx={{ fontSize: 19 }} />}>
                <Typography sx={{ color: '#d5e1ef', fontSize: 14.5, lineHeight: 1.65 }}>{companyInfo.address}</Typography>
              </ContactRow>
              <ContactRow icon={<CallOutlinedIcon sx={{ fontSize: 19 }} />}>
                <Stack spacing={0.5}>
                  {phoneNumbers.map((phone) => (
                    <Link key={phone} href={`tel:${phone.replace(/\s/g, '')}`} underline="none" sx={{ ...footerLinkSx, transform: 'none', '&:hover': { color: GOLD } }}>
                      {phone}
                    </Link>
                  ))}
                </Stack>
              </ContactRow>
              <ContactRow icon={<EmailOutlinedIcon sx={{ fontSize: 19 }} />}>
                <Link
                  href={`mailto:${companyInfo.email}`}
                  underline="none"
                  sx={{ ...footerLinkSx, overflowWrap: 'anywhere', transform: 'none', '&:hover': { color: GOLD } }}
                >
                  {companyInfo.email}
                </Link>
              </ContactRow>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Bottom bar */}
      <Box sx={{ position: 'relative', borderTop: '1px solid #ffffff26' }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' },
            maxWidth: 1400,
            minHeight: 68,
            mx: 'auto',
            py: 1.5,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ color: '#d5e1ef', fontSize: 13.5, lineHeight: 1.5 }}>
            © {new Date().getFullYear()} VVS Fincorp. All rights reserved.
          </Typography>
          <IconButton
            component="a"
            href="#home"
            aria-label="Back to top"
            sx={{
              width: 42,
              height: 42,
              flex: '0 0 auto',
              borderRadius: 1.5,
              bgcolor: 'secondary.light',
              color: 'primary.dark',
              boxShadow: '0 4px 12px #0003',
              transition: 'transform .2s ease, background-color .2s ease',
              '&:hover': { bgcolor: '#f0d276', transform: 'translateY(-3px)' },
              '&:focus-visible': { outline: `3px solid ${GOLD}`, outlineOffset: 3 },
              '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
            }}
          >
            <ArrowUpwardRoundedIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer