import { useEffect, useRef, useState } from 'react'
import { Avatar, Box, IconButton, Rating, Stack, Typography } from '@mui/material'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { useInView } from '../../utils/useInView'

const GOLD = '#f5c33b'
const AUTO_SCROLL_MS = 4000

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Business owner',
    quote: 'VVS Fincorp helped us secure funding quickly when our business needed immediate working capital. Highly recommended.',
    initials: 'RK',
  },
  {
    name: 'Priya Enterprises',
    company: 'Business customer',
    quote: 'The process was simple, transparent, and professional. We received funding much faster than expected.',
    initials: 'PE',
  },
  {
    name: 'Arun Traders',
    company: 'Business customer',
    quote: 'Excellent support team and a hassle-free documentation process made the funding journey straightforward.',
    initials: 'AT',
  },
  {
    name: 'Meena Textiles',
    company: 'Manufacturing business',
    quote: 'Our seasonal stock purchase needed funds on short notice. The team understood our cash cycle and made it happen without delays.',
    initials: 'MT',
  },
  {
    name: 'Suresh Babu',
    company: 'Retail store owner',
    quote: 'No hidden charges and clear communication at every step. I always knew where my application stood.',
    initials: 'SB',
  },
  {
    name: 'Lakshmi Foods',
    company: 'Food business',
    quote: 'We expanded our second outlet with their support. The repayment options were flexible and suited our monthly earnings.',
    initials: 'LF',
  },
  {
    name: 'Karthik Logistics',
    company: 'Transport business',
    quote: 'Quick approval, minimal paperwork, and a team that actually picks up the phone. Exactly what a growing business needs.',
    initials: 'KL',
  },
  {
    name: 'Anitha Sharma',
    company: 'Boutique owner',
    quote: 'As a small business owner I was worried about the process, but the advisors guided me patiently from start to finish.',
    initials: 'AS',
  },
]

const arrowSx = {
  color: '#fff',
  border: '1px solid #ffffff66',
  '&:hover': { bgcolor: '#ffffff1f', borderColor: GOLD },
  '&:focus-visible': { outline: `3px solid ${GOLD}`, outlineOffset: 2 },
}

function TestimonialsSection() {
  const scrollerRef = useRef(null)
  const activeRef = useRef(0)
  const pausedRef = useRef(false)
  const scrollFrameRef = useRef(0)
  const [active, setActive] = useState(0)
  const inView = useInView(scrollerRef)

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const updateActive = (index) => {
    activeRef.current = index
    setActive(index)
  }

  const goTo = (index) => {
    const scroller = scrollerRef.current
    const card = scroller?.children[index]
    if (!card) return
    scroller.scrollTo({ left: card.offsetLeft, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    updateActive(index)
  }

  const move = (step) => goTo((activeRef.current + step + testimonials.length) % testimonials.length)

  // auto scroll: move to the next card every few seconds while the row is on screen
  // (pauses on hover, focus and touch)
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return undefined
    const timer = setInterval(() => {
      if (!pausedRef.current && !document.hidden) move(1)
    }, AUTO_SCROLL_MS)
    return () => clearInterval(timer)
  }, [inView])

  useEffect(() => () => cancelAnimationFrame(scrollFrameRef.current), [])

  // keep the dots in sync with native scrolling (touch, trackpad, wheel, keyboard);
  // measured at most once per frame, since reading offsetLeft forces layout
  const handleScroll = () => {
    if (scrollFrameRef.current) return
    scrollFrameRef.current = requestAnimationFrame(syncActiveToScroll)
  }

  const syncActiveToScroll = () => {
    scrollFrameRef.current = 0
    const scroller = scrollerRef.current
    if (!scroller) return
    const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4
    let nearest = 0
    let nearestDistance = Infinity
    Array.from(scroller.children).forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scroller.scrollLeft)
      if (distance < nearestDistance) {
        nearestDistance = distance
        nearest = index
      }
    })
    updateActive(atEnd ? testimonials.length - 1 : nearest)
  }

  const pause = () => {
    pausedRef.current = true
  }
  const resume = () => {
    pausedRef.current = false
  }

  return (
    <Box
      component="section"
      aria-labelledby="testimonials-heading"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'primary.dark',
        py: { xs: 5, md: 6.5 },
        scrollMarginTop: 112,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, #174779 0%, transparent 65%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' }, maxWidth: 1400, mx: 'auto' }}>
        {/* Heading */}
        <Stack sx={{ mb: { xs: 3, md: 4 }, alignItems: 'center', textAlign: 'center' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Box sx={{ width: 10, height: 10, bgcolor: GOLD, borderRadius: '2px' }} />
            <Typography sx={{ color: GOLD, fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              What our clients say
            </Typography>
          </Stack>
          <Typography
            id="testimonials-heading"
            component="h2"
            sx={{ mt: 1.5, color: '#fff', fontSize: { xs: 25, sm: 28, md: 32 }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em' }}
          >
            Trusted by businesses like yours
          </Typography>
        </Stack>

        {/* Scrollable row (auto scroll, swipe, trackpad, wheel or arrows) */}
        <Box
          ref={scrollerRef}
          onScroll={handleScroll}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
          tabIndex={0}
          role="region"
          aria-label="Client testimonials, scroll horizontally"
          sx={{
            position: 'relative',
            display: 'flex',
            gap: { xs: 2, md: 3 },
            overflowX: 'auto',
            pt: 0.5,
            pb: 4,
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            '&:focus-visible': { outline: `3px solid ${GOLD}`, outlineOffset: 4, borderRadius: 3 },
            '@media (prefers-reduced-motion: no-preference)': { scrollBehavior: 'smooth' },
          }}
        >
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.name}
              component="article"
              sx={{
                flex: { xs: '0 0 86%', sm: '0 0 62%', md: '0 0 calc((100% - 48px) / 2.4)' },
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                p: { xs: 2.5, md: 3.5 },
                bgcolor: '#fff',
                borderRadius: 3,
                boxShadow: '0 18px 32px -10px #041a3566',
              }}
            >
              <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Box
                  aria-hidden
                  sx={{ width: 44, height: 44, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#fdf3d3', color: 'primary.dark' }}
                >
                  <FormatQuoteRoundedIcon sx={{ fontSize: 28, transform: 'rotate(180deg)' }} />
                </Box>
                <Rating value={5} readOnly size="small" aria-label="5 out of 5 stars" sx={{ color: GOLD }} />
              </Stack>

              <Typography component="blockquote" sx={{ m: 0, mt: 2.5, flex: 1, color: '#34465a', fontSize: 15.5, lineHeight: 1.7 }}>
                {testimonial.quote}
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ mt: 3, pt: 2.5, borderTop: '1px solid #e8edf3', alignItems: 'center' }}>
                <Avatar sx={{ width: 44, height: 44, bgcolor: 'primary.dark', color: GOLD, fontSize: 14, fontWeight: 800 }}>
                  {testimonial.initials}
                </Avatar>
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ color: 'primary.dark', fontSize: 15, fontWeight: 800, lineHeight: 1.3 }}>{testimonial.name}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: 13.5, lineHeight: 1.4 }}>{testimonial.company}</Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Controls */}
        <Stack direction="row" spacing={2} sx={{ mt: 0.5, alignItems: 'center', justifyContent: 'center' }}>
          <IconButton aria-label="Previous testimonial" onClick={() => move(-1)} size="small" sx={arrowSx}>
            <ArrowBackRoundedIcon fontSize="small" />
          </IconButton>
          <Stack direction="row" role="group" aria-label="Choose testimonial" sx={{ alignItems: 'center' }}>
            {testimonials.map((testimonial, index) => (
              <IconButton
                key={testimonial.name}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={active === index}
                onClick={() => goTo(index)}
                disableRipple
                // The button is a 24px touch target; the visible pill is drawn by ::before
                sx={{
                  width: active === index ? 40 : 24,
                  height: 24,
                  minWidth: 0,
                  p: 0,
                  borderRadius: 99,
                  transition: 'width .2s ease',
                  '&::before': {
                    content: '""',
                    width: active === index ? 26 : 10,
                    height: 10,
                    borderRadius: 99,
                    bgcolor: active === index ? GOLD : '#ffffff80',
                    transition: 'width .2s ease, background-color .2s ease',
                  },
                  '&:hover::before': { bgcolor: GOLD },
                  '&:focus-visible': { outline: `3px solid ${GOLD}`, outlineOffset: -4 },
                  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&::before': { transition: 'none' } },
                }}
              />
            ))}
          </Stack>
          <IconButton aria-label="Next testimonial" onClick={() => move(1)} size="small" sx={arrowSx}>
            <ArrowForwardRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default TestimonialsSection