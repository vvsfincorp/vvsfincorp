import { useEffect, useState } from 'react'

// True while the ref's element is within rootMargin of the viewport.
// With once: true it stays true after the first time (used to defer loading until needed).
export function useInView(ref, { rootMargin = '0px', once = false } = {}) {
  // Without IntersectionObserver (very old browsers) treat the element as visible
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (once && entry.isIntersecting) observer.disconnect()
      },
      { rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, rootMargin, once])

  return inView
}
