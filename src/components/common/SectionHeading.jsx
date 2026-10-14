import { Box, Typography } from '@mui/material'
import { type } from './styles'

// Eyebrow chip + H2 + optional intro, used at the top of every inner-page section.
function SectionHeading({ id, eyebrow, title, intro, align = 'left', light = false, sx }) {
  const centered = align === 'center'
  return (
    <Box sx={{ maxWidth: centered ? 680 : 620, mx: centered ? 'auto' : 0, textAlign: centered ? 'center' : 'left', ...sx }}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.875,
          px: 1.25,
          py: 0.5,
          borderRadius: 99,
          border: '1px solid',
          borderColor: light ? '#e8c45a59' : '#e8c45a99',
          bgcolor: light ? '#ffffff0d' : '#fdf6de',
        }}
      >
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#f5c33b' }} />
        <Typography component="span" sx={{ ...type.eyebrow, color: light ? 'secondary.light' : '#8a6a00' }}>
          {eyebrow}
        </Typography>
      </Box>
      <Typography id={id} component="h2" sx={{ ...type.h2, mt: 1.5, color: light ? '#fff' : 'primary.dark' }}>
        {title}
      </Typography>
      {intro && (
        <Typography sx={{ ...type.lead, mt: 1.25, color: light ? '#d5e1ef' : 'text.secondary' }}>
          {intro}
        </Typography>
      )}
    </Box>
  )
}

export default SectionHeading
