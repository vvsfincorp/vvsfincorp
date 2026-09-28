import { companyInfo, socialLinks } from '../../data/siteContent'
import { Box, Link, Stack } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookRoundedIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

const socialIcons = [FacebookRoundedIcon, InstagramIcon, LinkedInIcon, YouTubeIcon]

function UtilityBar() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, bgcolor: 'primary.dark', color: '#fff', minHeight: 60, borderBottom: '3px solid', borderColor: 'secondary.main' }}>
      <Box sx={{
        width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 32px)' },
        maxWidth: 1400, minHeight: 60, mx: 'auto', px: { xs: 2, md: 3.5 },
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2,
      }}>
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.75, md: 1 }} sx={{ minWidth: 0 }}>
          <EmailOutlinedIcon sx={{ fontSize: { xs: 18, md: 21 }, color: 'secondary.light' }} />
          <Link href={`mailto:${companyInfo.email}`} underline="none" color="inherit" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: { xs: 12, md: 16 }, fontWeight: 500 }}>
            {companyInfo.email}
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.75, md: 1.25 }}>
          {socialLinks.map((social, index) => {
            const SocialIcon = socialIcons[index]
            return (
            <Link href={social.href} underline="none" aria-label={social.label} key={social.label} sx={{ width: { xs: 30, md: 38 }, height: { xs: 30, md: 38 }, display: 'grid', placeItems: 'center', borderRadius: '50%', color: 'primary.dark', bgcolor: 'secondary.light', transition: 'all .2s ease', '&:hover': { bgcolor: '#fff', color: 'primary.dark', transform: 'translateY(-2px)' } }}>
              <SocialIcon sx={{ fontSize: 15 }} />
            </Link>
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default UtilityBar
