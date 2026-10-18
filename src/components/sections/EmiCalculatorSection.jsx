import { Suspense, lazy, useRef, useState } from 'react'
import { Box, Button, InputAdornment, Slider, Stack, TextField, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { useInView } from '../../utils/useInView'

// The chart library is large, so it loads separately, and only once the chart is near the
// viewport; the box below keeps its space reserved.
const EmiBreakupChart = lazy(() => import('./EmiBreakupChart'))

const MIN_AMOUNT = 100000
const MAX_AMOUNT = 300000000
const MIN_RATE = 1
const MAX_RATE = 12
const MIN_TENURE = 3
const MAX_TENURE = 36
const NAVY = '#0a2e5d'
const GOLD = '#f5c33b'
const CHART_COLORS = [NAVY, GOLD]

const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
const formatCurrency = (amount) => currency.format(amount)

// 7500000 -> "₹75 Lakh", 25000000 -> "₹2.5 Crore"
function formatCompact(amount) {
  const trim = (n) => String(Number(n.toFixed(2)))
  if (amount >= 10000000) return `₹${trim(amount / 10000000)} Crore`
  if (amount >= 100000) return `₹${trim(amount / 100000)} Lakh`
  return formatCurrency(amount)
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

// Text input that lets people type freely and only applies the value on blur / Enter
function ValueInput({ id, label, value, min, max, decimals = 0, adornment, position = 'end', onCommit }) {
  const [draft, setDraft] = useState(null)

  const commit = () => {
    if (draft === null) return
    const parsed = Number(draft.replace(/,/g, ''))
    if (draft.trim() !== '' && Number.isFinite(parsed)) {
      const factor = 10 ** decimals
      onCommit(clamp(Math.round(parsed * factor) / factor, min, max))
    }
    setDraft(null)
  }

  const adornmentNode = <InputAdornment position={position}>{adornment}</InputAdornment>

  return (
    <TextField
      id={id}
      size="small"
      value={draft ?? String(value)}
      onChange={(event) => setDraft(event.target.value)}
      onBlur={commit}
      onKeyDown={(event) => event.key === 'Enter' && commit()}
      slotProps={{
        htmlInput: { inputMode: 'decimal', 'aria-label': label, 'aria-describedby': `${id}-range` },
        input: position === 'start' ? { startAdornment: adornmentNode } : { endAdornment: adornmentNode },
      }}
      sx={{ width: { xs: 140, sm: 170 }, '& .MuiInputBase-input': { py: 0.8, fontSize: 14.5, fontWeight: 700, color: NAVY } }}
    />
  )
}

function EmiCalculatorSection() {
  const [amount, setAmount] = useState(7500000)
  const [rate, setRate] = useState(2)
  const [tenure, setTenure] = useState(10)
  const chartRef = useRef(null)
  const showChart = useInView(chartRef, { rootMargin: '400px 0px', once: true })

  const interest = Math.round(amount * (rate / 100) * tenure)
  const totalRepayment = amount + interest
  const monthlyInstallment = Math.round(totalRepayment / tenure)
  const interestShare = Math.round((interest / totalRepayment) * 100)
  const chartData = [
    { name: 'Principal', value: amount, share: 100 - interestShare },
    { name: 'Flat-rate interest', value: interest, share: interestShare },
  ]

  const controls = [
    {
      id: 'loan-amount', label: 'Loan amount', hint: formatCompact(amount), value: amount,
      min: MIN_AMOUNT, max: MAX_AMOUNT, step: 100000, minLabel: '₹1 Lakh',       maxLabel: '₹30 Crore',
      valueText: formatCurrency, adornment: '₹', position: 'start', onChange: setAmount,
    },
    {
      id: 'interest-rate', label: 'Flat monthly interest rate', value: rate,
      min: MIN_RATE, max: MAX_RATE, step: 0.1, decimals: 1, minLabel: '1%', maxLabel: '12%',
      valueText: (v) => `${v} percent per month`, adornment: '%', onChange: (v) => setRate(Math.round(v * 10) / 10),
    },
    {
      id: 'loan-tenure', label: 'Loan tenure', value: tenure,
      min: MIN_TENURE, max: MAX_TENURE, step: 1, minLabel: '3 months', maxLabel: '36 months',
      valueText: (v) => `${v} months`, adornment: 'months', onChange: setTenure,
    },
  ]

  const rows = [
    { label: 'Loan amount', value: formatCurrency(amount) },
    { label: `Flat-rate interest (${rate}% per month)`, value: formatCurrency(interest) },
    { label: 'Total repayment', value: formatCurrency(totalRepayment) },
    { label: 'Loan tenure', value: `${tenure} months` },
    { label: 'Monthly installment', value: formatCurrency(monthlyInstallment), highlight: true },
  ]

  return (
    <Box
      component="section"
      id="emi-calculator"
      aria-labelledby="emi-heading"
      sx={{ bgcolor: 'primary.main', py: { xs: 4.5, md: 6 }, scrollMarginTop: 112 }}
    >
      <Box
        sx={{
          width: { xs: 'calc(100% - 36px)', md: 'calc(100% - 96px)' },
          maxWidth: 1400,
          mx: 'auto',
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: { xs: 3, md: 4 },
          bgcolor: '#fff',
          boxShadow: '0 24px 64px #061b3b55',
        }}
      >
        {/* Header */}
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Box sx={{ width: 10, height: 10, bgcolor: GOLD, borderRadius: '2px' }} />
          <Typography sx={{ color: 'secondary.dark', fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Plan with confidence
          </Typography>
        </Stack>
        <Typography
          id="emi-heading"
          component="h2"
          sx={{ mt: 1.5, color: 'primary.dark', fontSize: { xs: 25, sm: 28, md: 32 }, lineHeight: 1.15, letterSpacing: '-.03em', fontWeight: 800 }}
        >
          Calculate your repayment plan
        </Typography>
        <Typography sx={{ mt: 1.5, mb: { xs: 2.5, md: 3.5 }, maxWidth: 620, color: 'text.secondary', fontSize: { xs: 14.5, md: 16 }, lineHeight: 1.65 }}>
          Adjust the amount, flat monthly rate, and tenure to estimate your monthly installment.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .85fr) minmax(0, 1.15fr)' }, gap: 2.5, alignItems: 'stretch' }}>
          {/* Controls */}
          <Stack
            divider={<Box aria-hidden sx={{ borderTop: '1px dashed #cdd9e8' }} />}
            spacing={{ xs: 2.5, md: 3 }}
            sx={{ p: { xs: 2, sm: 2.5, md: 3 }, border: '1px solid #dde6f0', borderRadius: 3, justifyContent: 'space-between' }}
          >
            {controls.map((control) => (
              <Box key={control.id}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography component="label" htmlFor={control.id} sx={{ display: 'block', color: 'primary.dark', fontSize: 14.5, fontWeight: 700, lineHeight: 1.3 }}>
                      {control.label}
                    </Typography>
                    {control.hint && (
                      <Typography sx={{ mt: 0.25, color: 'text.secondary', fontSize: 13.5 }}>{control.hint}</Typography>
                    )}
                  </Box>
                  <ValueInput
                    id={control.id}
                    label={control.label}
                    value={control.value}
                    min={control.min}
                    max={control.max}
                    step={control.step}
                    decimals={control.decimals}
                    adornment={control.adornment}
                    position={control.position}
                    onCommit={control.onChange}
                  />
                </Stack>
                <Slider
                  aria-label={`${control.label} slider`}
                  getAriaValueText={control.valueText}
                  value={control.value}
                  min={control.min}
                  max={control.max}
                  step={control.step}
                  onChange={(_, value) => control.onChange(value)}
                  sx={{
                    mt: 1.5, mb: 0, py: 1.25, color: NAVY,
                    '& .MuiSlider-rail': { bgcolor: '#dde6f0', opacity: 1 },
                    '& .MuiSlider-track': { border: 0 },
                    '& .MuiSlider-thumb': {
                      width: 20, height: 20, bgcolor: GOLD, border: '3px solid #fff', boxShadow: '0 2px 8px #0a2e5d40',
                      '&:hover, &.Mui-focusVisible': { boxShadow: `0 0 0 6px ${GOLD}55` },
                    },
                  }}
                />
                <Stack id={`${control.id}-range`} direction="row" sx={{ justifyContent: 'space-between' }}>
                  <Typography sx={{ color: 'text.secondary', fontSize: 13, fontWeight: 600 }}>{control.minLabel}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: 13, fontWeight: 600 }}>{control.maxLabel}</Typography>
                </Stack>
              </Box>
            ))}
          </Stack>

          {/* Summary */}
          <Box sx={{ minWidth: 0, p: { xs: 2, sm: 2.5, md: 3 }, border: '1px solid #dde6f0', borderRadius: 3, bgcolor: '#f8fafd' }}>
            <Typography component="h3" sx={{ color: 'primary.dark', fontSize: 20, fontWeight: 800 }}>
              Loan summary
            </Typography>

            <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' }, gap: 2.5, alignItems: 'stretch' }}>
              {/* Figures */}
              <Box component="dl" sx={{ m: 0, p: { xs: 1.5, sm: 2 }, bgcolor: '#fff', border: '1px solid #e8edf3', borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {rows.map((row, index) => (
                  <Stack
                    key={row.label}
                    direction="row"
                    spacing={2}
                    sx={{
                      py: 1.25,
                      px: row.highlight ? 1.5 : 0,
                      mt: row.highlight ? 1 : 0,
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      borderRadius: 1.5,
                      bgcolor: row.highlight ? '#fdf3d3' : 'transparent',
                      borderBottom: index < rows.length - 2 ? '1px solid #eef2f6' : 'none',
                    }}
                  >
                    <Typography component="dt" sx={{ color: row.highlight ? 'primary.dark' : 'text.secondary', fontSize: 14, fontWeight: row.highlight ? 700 : 400, lineHeight: 1.45 }}>
                      {row.label}
                    </Typography>
                    <Typography
                      component="dd"
                      aria-live={row.highlight ? 'polite' : undefined}
                      sx={{ m: 0, color: 'primary.dark', fontSize: row.highlight ? 18 : 14, fontWeight: 800, textAlign: 'right', whiteSpace: 'nowrap' }}
                    >
                      {row.value}
                    </Typography>
                  </Stack>
                ))}
              </Box>

              {/* Chart */}
              <Box sx={{ minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', fontSize: 13.5, fontWeight: 700 }}>Loan breakup</Typography>
                <Box ref={chartRef} aria-hidden sx={{ width: '100%', height: { xs: 220, sm: 250 } }}>
                  {showChart && (
                    <Suspense fallback={null}>
                      <EmiBreakupChart data={chartData} colors={CHART_COLORS} formatValue={formatCurrency} />
                    </Suspense>
                  )}
                </Box>
                <Stack direction="row" sx={{ mt: 1, gap: 2.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {chartData.map((entry, index) => (
                    <Stack key={entry.name} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Box sx={{ width: 12, height: 12, flex: '0 0 auto', borderRadius: 0.5, bgcolor: CHART_COLORS[index] }} />
                      <Typography sx={{ color: 'text.secondary', fontSize: 13.5 }}>{entry.name} ({entry.share}%)</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4 }}
          sx={{ mt: 3, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Typography sx={{ maxWidth: 760, color: 'text.secondary', fontSize: 13.5, lineHeight: 1.6 }}>
            This is an indicative estimate using flat monthly interest. Final rates, fees, and repayment terms are subject to assessment.
          </Typography>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            disableElevation
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              flex: '0 0 auto', px: 3, py: 1.1, borderRadius: 999, bgcolor: GOLD, color: 'primary.dark',
              fontSize: 13, fontWeight: 800, letterSpacing: '.06em', whiteSpace: 'nowrap',
              '& .MuiButton-endIcon': { transition: 'transform .2s ease' },
              '&:hover': { bgcolor: 'primary.main', color: '#fff', '& .MuiButton-endIcon': { transform: 'translateX(4px)' } },
              '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 },
              '@media (prefers-reduced-motion: reduce)': { '& .MuiButton-endIcon': { transition: 'none' }, '&:hover .MuiButton-endIcon': { transform: 'none' } },
            }}
          >
            Apply now
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default EmiCalculatorSection