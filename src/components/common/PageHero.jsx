import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { Link as RouterLink } from 'react-router-dom'
import { pageWidthSx, type } from './styles'

/**
 * Navy page header used by every inner page: breadcrumbs, eyebrow, H1,
 * intro text, optional actions, optional highlight chips and an optional framed image.
 * breadcrumbs: [{ label, to }] — the last item is rendered as the current page.
 */
function PageHero({ breadcrumbs, eyebrow, title, intro, actions, highlights, image, aside }) {
  const hasMedia = Boolean(image)

  return (
    <Box
      component="section"
      aria-labelledby="page-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 2.5, md: 3.5 },
        pb: { xs: 4, md: hasMedia ? 5 : 4.5 },
        bgcolor: 'primary.dark',
        color: '#fff',
        // Soft light source plus a faint dotted texture on the right
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 78% 15%, #174779 0%, transparent 55%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: '60%', md: '45%' },
          backgroundImage: 'radial-gradient(#ffffff1a 1.2px, transparent 1.4px)',
          backgroundSize: '22px 22px',
          WebkitMaskImage: 'linear-gradient(to left, #000, transparent)',
          maskImage: 'linear-gradient(to left, #000, transparent)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ ...pageWidthSx, position: 'relative', zIndex: 1 }}>
        <Breadcrumbs
          aria-label="Breadcrumb"
          sx={{ color: '#b9cadc', fontSize: 13, '& a': { color: '#b9cadc' }, '& .MuiBreadcrumbs-separator': { color: '#7f98b4' } }}
        >
          {breadcrumbs.slice(0, -1).map((crumb) => (
            <Link key={crumb.to} component={RouterLink} to={crumb.to} underline="hover" sx={{ '&:hover': { color: '#fff' }, '&:focus-visible': { outline: '3px solid #f5c33b', outlineOffset: 2, borderRadius: 1 } }}>
              {crumb.label}
            </Link>
          ))}
          <Typography color="#fff" aria-current="page" sx={{ fontSize: 13 }}>
            {breadcrumbs.at(-1).label}
          </Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: hasMedia ? 'minmax(0, 1.05fr) minmax(0, .95fr)' : '1fr' },
            gap: { xs: 3.5, md: 6 },
            alignItems: 'center',
            mt: { xs: 3, md: 3.5 },
          }}
        >
          <Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: 'secondary.light' }} />
              <Typography sx={{ ...type.eyebrow, color: 'secondary.light' }}>{eyebrow}</Typography>
            </Stack>
            <Typography id="page-title" component="h1" sx={{ ...type.h1, mt: 1.5, maxWidth: 680 }}>
              {title}
            </Typography>
            {intro && (
              <Typography sx={{ ...type.lead, mt: 1.75, maxWidth: 600, color: '#d5e1ef' }}>
                {intro}
              </Typography>
            )}
            {actions && (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ mt: 3, alignItems: { xs: 'stretch', sm: 'center' } }}>
                {actions}
              </Stack>
            )}
            {highlights && (
              <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap', mt: 3 }}>
                {highlights.map((item) => (
                  <Stack key={item} direction="row" spacing={0.6} sx={{ alignItems: 'center', px: 1.25, py: 0.6, border: '1px solid #ffffff26', borderRadius: 99, bgcolor: '#ffffff0d' }}>
                    <CheckRoundedIcon sx={{ color: 'secondary.light', fontSize: 15 }} />
                    <Typography sx={{ color: '#e6eef7', fontSize: 12, fontWeight: 600 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>

          {image && (
            <Box sx={{ position: 'relative', height: { xs: 190, sm: 260, md: 300 }, mr: { xs: 1, md: 1.5 } }}>
              <Box sx={{ position: 'absolute', inset: { xs: '8px -6px -6px 6px', md: '12px -12px -12px 12px' }, border: '2px solid', borderColor: 'secondary.light', borderRadius: 3, opacity: 0.8 }} />
              <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 3, border: '1px solid #ffffff59', bgcolor: '#0a1e34', boxShadow: '0 20px 48px #0005' }}>
                <Box
                  component="img"
                  src={image.src}
                  srcSet={image.srcSet || undefined}
                  sizes="(min-width: 900px) 45vw, 100vw"
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  fetchPriority="high"
                  decoding="async"
                  sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #071a2ca6 0%, transparent 50%)' }} />
                {aside}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default PageHero
