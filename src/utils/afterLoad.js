// Calls back once the window has loaded and the browser has a moment to spare.
// Used to start non-essential rendering (below-the-fold sections, footer) after the first paint.
// Returns a cleanup function.
export function afterLoad(callback) {
  let cancelIdle = () => {}
  const idle = () => {
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(callback, { timeout: 1000 })
      cancelIdle = () => window.cancelIdleCallback(id)
    } else {
      const id = window.setTimeout(callback, 200)
      cancelIdle = () => window.clearTimeout(id)
    }
  }
  if (document.readyState === 'complete') idle()
  else window.addEventListener('load', idle, { once: true })
  return () => {
    window.removeEventListener('load', idle)
    cancelIdle()
  }
}
