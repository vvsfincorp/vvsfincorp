import { companyInfo, socialLinks } from '../../data/siteContent'
import { Box, Link, Stack } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookRoundedIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const socialIcons = { Facebook: FacebookRoundedIcon, Instagram: InstagramIcon, LinkedIn: LinkedInIcon }
// Only profiles with a real URL are shown (see socialLinks in src/data/siteContent.js)
const activeSocialLinks = socialLinks.filter((social) => social.href)

const contactLinkSx = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: { xs: 12, md: 16 }, fontWeight: 500, '&:hover': { color: 'secondary.light' } }

function UtilityBar() {
  return (
    <Box data-utility-bar sx={{ display: { xs: 'none', md: 'block' }, bgcolor: 'primary.dark', color: '#fff', minHeight: 60, borderBottom: '3px solid', borderColor: 'secondary.main' }}>
      <Box sx={{
        width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 32px)' },
        maxWidth: 1400, minHeight: 60, mx: 'auto', px: { xs: 2, md: 3.5 },
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2,
      }}>
        <Stack direction="row" spacing={{ xs: 0.75, md: 1 }} sx={{ alignItems: 'center', minWidth: 0 }}>
          <EmailOutlinedIcon sx={{ fontSize: { xs: 18, md: 21 }, color: 'secondary.light' }} />
          <Link href={`mailto:${companyInfo.email}`} underline="none" color="inherit" sx={contactLinkSx}>
            {companyInfo.email}
          </Link>
        </Stack>
        <Stack direction="row" spacing={{ xs: 0.75, md: 1.25 }} sx={{ alignItems: 'center' }}>
          {activeSocialLinks.length > 0 ? (
            activeSocialLinks.map((social) => {
              const SocialIcon = socialIcons[social.label]
              return (
                <Link href={social.href} target="_blank" rel="noreferrer" underline="none" aria-label={social.label} key={social.label} sx={{ width: { xs: 30, md: 38 }, height: { xs: 30, md: 38 }, display: 'grid', placeItems: 'center', borderRadius: '50%', color: 'primary.dark', bgcolor: 'secondary.light', transition: 'all .2s ease', '&:hover': { bgcolor: '#fff', color: 'primary.dark', transform: 'translateY(-2px)' } }}>
                  <SocialIcon sx={{ fontSize: 15 }} />
                </Link>
              )
            })
          ) : (
            <>
              <CallOutlinedIcon sx={{ fontSize: 21, color: 'secondary.light' }} />
              <Link href={`tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`} underline="none" color="inherit" sx={contactLinkSx}>
                {companyInfo.primaryPhone}
              </Link>
            </>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default UtilityBar
