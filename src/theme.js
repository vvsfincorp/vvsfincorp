import { createTheme } from '@mui/material/styles'

export const brandTheme = createTheme({
  palette: {
    primary: { main: '#0a2e5d', dark: '#062149' },
    secondary: { main: '#d4af37', light: '#e8c45a' },
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
