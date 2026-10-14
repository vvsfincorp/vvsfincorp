import { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

// One shared observer for every Reveal on the page (cheaper than one per element).
let observer
function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  return observer
}

/**
 * Fades and slides its content in once, when it scrolls into view.
 * Uses CSS classes (src/styles/index.css), so it causes no React re-renders
 * and is disabled automatically for prefers-reduced-motion.
 *   variant="image" zooms a child <img> out slightly instead of sliding.
 */
function Reveal({ children, delay = 0, variant = 'fade', component = 'div', sx, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    const io = getObserver()
    if (!element) return undefined
    if (!io) {
      element.classList.add('is-visible')
      return undefined
    }
    io.observe(element)
    return () => io.unobserve(element)
  }, [])

  return (
    <Box
      ref={ref}
      component={component}
      className={variant === 'image' ? 'reveal reveal-image' : 'reveal'}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Reveal
