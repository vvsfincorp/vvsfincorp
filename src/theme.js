import { createTheme } from '@mui/material/styles'

export const brandTheme = createTheme({
  palette: {
    primary: { main: '#0a2e5d', dark: '#062149' },
    // secondary.dark: gold dark enough for small text on light backgrounds (WCAG AA)
    secondary: { main: '#d4af37', light: '#e8c45a', dark: '#8a6a00' },
    text: { primary: '#0a2e5d', secondary: '#526b87' },
  },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.055em' },
    h2: { fontWeight: 500 },
    button: { fontWeight: 700, letterSpacing: '0.04em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { defaultProps: { disableRipple: true } },
  },
})
