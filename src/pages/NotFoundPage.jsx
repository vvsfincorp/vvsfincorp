import { Box, Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function NotFoundPage() {
  return (
    <Box component="main" sx={{
      minHeight: '55vh', display: 'grid', placeContent: 'center', justifyItems: 'center',
      gap: 2, px: 3, py: 8, textAlign: 'center', bgcolor: '#f5f8fc',
    }}>
      <Typography sx={{ color: 'secondary.main', fontSize: 14, fontWeight: 800, letterSpacing: '.12em' }}>
        404
      </Typography>
      <Typography component="h1" sx={{ color: 'primary.dark', fontSize: { xs: 30, md: 42 }, fontWeight: 800 }}>
        Page not found
      </Typography>
      <Typography sx={{ maxWidth: 440, color: 'text.secondary', lineHeight: 1.7 }}>
        The page you’re looking for doesn’t exist or may have moved.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained" sx={{
        mt: 1, px: 3, py: 1.2, borderRadius: 99, color: 'primary.dark',
        bgcolor: 'secondary.light', '&:hover': { bgcolor: '#f0d276' },
      }}>
        Back to home
      </Button>
    </Box>
  )
}

export default NotFoundPage
