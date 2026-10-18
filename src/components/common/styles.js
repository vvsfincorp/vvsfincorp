// Shared layout, type and component styles for the inner pages, matching the home page palette.

export const pageWidthSx = { width: { xs: 'calc(100% - 32px)', md: 'calc(100% - 96px)' }, maxWidth: 1200, mx: 'auto' }

// Vertical rhythm: every content section uses the same padding.
export const sectionSx = { py: { xs: 4.5, md: 6 } }

// Type scale (mobile -> desktop). Use these instead of ad-hoc font sizes.
export const type = {
  h1: { fontSize: { xs: 28, sm: 34, md: 40 }, lineHeight: 1.12, letterSpacing: '-.035em', fontWeight: 800 },
  h2: { fontSize: { xs: 24, sm: 27, md: 30 }, lineHeight: 1.2, letterSpacing: '-.025em', fontWeight: 800 },
  h3: { fontSize: { xs: 17, md: 18 }, lineHeight: 1.35, letterSpacing: '-.01em', fontWeight: 800 },
  lead: { fontSize: { xs: 15, md: 16.5 }, lineHeight: 1.7 },
  body: { fontSize: { xs: 14.5, md: 15 }, lineHeight: 1.7 },
  small: { fontSize: 13, lineHeight: 1.6 },
  eyebrow: { fontSize: 11.5, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase' },
}

// White card with a navy top accent that turns gold on hover.
export const cardSx = {
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
  p: { xs: 2.5, md: 3 },
  bgcolor: '#fff',
  border: '1px solid #e3eaf2',
  borderRadius: 3,
  boxShadow: '0 6px 20px #0a2e5d0a',
  transition: 'box-shadow .25s ease, transform .25s ease, border-color .25s ease',
  '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: 'primary.main', transition: 'background-color .25s ease' },
  '&:hover': { transform: 'translateY(-4px)', borderColor: '#d9e3ee', boxShadow: '0 18px 36px #0a2e5d17', '&::before': { bgcolor: '#f5c33b' } },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
}

// Rounded gold-tint square that holds a card icon.
export const iconBoxSx = {
  width: 46,
  height: 46,
  flex: '0 0 auto',
  display: 'grid',
  placeItems: 'center',
  borderRadius: 2,
  color: 'primary.main',
  bgcolor: '#fdf3d3',
  border: '1px solid #f3dfa0',
  '& svg': { fontSize: 24 },
}

// Faint dotted texture used behind section content (same motif as the home services section).
export const dotPatternSx = {
  backgroundImage: 'radial-gradient(#0a2e5d1f 1.2px, transparent 1.4px)',
  backgroundSize: '22px 22px',
}

export const goldButtonSx = {
  minHeight: 46,
  px: 2.75,
  borderRadius: 99,
  color: 'primary.dark',
  bgcolor: 'secondary.light',
  fontSize: 13.5,
  fontWeight: 800,
  boxShadow: '0 6px 16px #0002',
  transition: 'transform .2s ease, background-color .2s ease, box-shadow .2s ease',
  '& .MuiButton-endIcon': { transition: 'transform .2s ease' },
  '&:hover': { bgcolor: '#f0d276', transform: 'translateY(-2px)', '& .MuiButton-endIcon': { transform: 'translateX(3px)' } },
  '&:focus-visible': { outline: '3px solid #f5c33b', outlineOffset: 3 },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
}

export const outlineLightButtonSx = {
  minHeight: 46,
  px: 2.5,
  borderRadius: 99,
  borderColor: '#ffffff80',
  color: '#fff',
  fontSize: 13.5,
  fontWeight: 700,
  transition: 'transform .2s ease, background-color .2s ease, border-color .2s ease',
  '&:hover': { borderColor: 'secondary.light', bgcolor: '#ffffff12', transform: 'translateY(-2px)' },
  '&:focus-visible': { outline: '3px solid #f5c33b', outlineOffset: 3 },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
}

// Outline button for light backgrounds
export const outlineDarkButtonSx = {
  ...outlineLightButtonSx,
  borderColor: '#b9c8d9',
  color: 'primary.main',
  '&:hover': { borderColor: 'primary.main', bgcolor: '#0a2e5d08', transform: 'translateY(-2px)' },
}

export const textLinkButtonSx = {
  px: 0,
  color: 'primary.main',
  fontSize: 13.5,
  fontWeight: 800,
  '& .MuiButton-endIcon': { transition: 'transform .2s ease' },
  '&:hover': { bgcolor: 'transparent', color: '#a47b00', '& .MuiButton-endIcon': { transform: 'translateX(3px)' } },
  '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 2 },
}

export const visuallyHiddenSx = { position: 'absolute', width: 1, height: 1, p: 0, m: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }

// Fills the first screen below the top bar + sticky header on laptops and desktops.
// --site-chrome-h is measured and kept up to date by the Header component.
export const firstScreenMinHeight = { md: 'calc(100vh - var(--site-chrome-h, 180px))' }
