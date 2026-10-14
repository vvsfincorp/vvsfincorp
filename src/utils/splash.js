// Fades out the logo splash screen defined in index.html once the first page has rendered.
// window.__hideSplash also runs on an 8 s failsafe timer, so the splash can never trap visitors.
export function hideSplash() {
  if (typeof window !== 'undefined' && typeof window.__hideSplash === 'function') {
    window.requestAnimationFrame(() => window.__hideSplash())
  }
}
