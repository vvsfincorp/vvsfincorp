import { useState } from 'react'
import { Alert, Box, Button, ButtonBase, Stack, TextField, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CallRoundedIcon from '@mui/icons-material/CallRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { companyInfo } from '../../data/siteContent'

const GOLD = '#f5c33b'
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5495.431109744533!2d80.1984679778197!3d13.108269299887198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265002c424433%3A0xbd448f4dd89eb96d!2sVVS%20Fincorp!5e0!3m2!1sen!2sin!4v1790599736131!5m2!1sen!2sin'
const phoneNumbers = ['+91 9363329147', '+91 9363720179']
const fundingAmounts = ['₹1 Lakh – ₹5 Lakhs', '₹5 Lakhs – ₹25 Lakhs', '₹25 Lakhs – ₹1 Crore', '₹1 Crore – ₹20 Crore']
const loanTypes = ['Cheque-Based Finance', 'Short-Term Business Funding', 'Direct Funding Solutions', 'Not sure yet']

const initialValues = { name: '', company: '', mobile: '', email: '', amount: '', loanType: '', message: '' }

const validators = {
  name: (v) => (v.trim() ? '' : 'Please enter your full name'),
  company: (v) => (v.trim() ? '' : 'Please enter your company name'),
  mobile: (v) => (/^[+]?[0-9\s()-]{8,15}$/.test(v.trim()) ? '' : 'Enter a valid mobile number'),
  email: (v) => (/^\S+@\S+\.\S+$/.test(v.trim()) ? '' : 'Enter a valid email address'),
  amount: (v) => (v ? '' : 'Select your funding requirement'),
  loanType: (v) => (v ? '' : 'Select a loan type'),
}

const fieldSx = {
  '& .MuiInputLabel-root': { fontSize: 14.5 },
  '& .MuiInputBase-input': { fontSize: 15 },
  '& .MuiFormHelperText-root': { mx: 0.5, fontSize: 12.5 },
  '& .MuiOutlinedInput-root': {
    bgcolor: '#fbfcfe',
    borderRadius: 2,
    '& fieldset': { borderColor: '#d5dfeb' },
    '&:hover fieldset': { borderColor: 'primary.main' },
    '&.Mui-focused': { bgcolor: '#fff' },
  },
}

function ChoiceGroup({ id, label, options, value, onChange, error }) {
  return (
    <Box>
      <Typography id={id} sx={{ mb: 1, color: 'primary.dark', fontSize: 14, fontWeight: 700 }}>
        {label}
      </Typography>
      <Stack role="group" aria-labelledby={id} direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
        {options.map((option) => {
          const selected = value === option
          return (
            <ButtonBase
              key={option}
              aria-pressed={selected}
              onClick={() => onChange(option)}
              sx={{
                gap: 0.75,
                px: 1.75,
                py: 1,
                border: '1px solid',
                borderColor: selected ? 'primary.dark' : '#d5dfeb',
                borderRadius: 99,
                bgcolor: selected ? 'primary.dark' : '#fff',
                color: selected ? '#fff' : '#34465a',
                fontFamily: 'inherit',
                fontSize: 13.5,
                fontWeight: 600,
                transition: 'background-color .15s ease, border-color .15s ease',
                '&:hover': { borderColor: 'primary.main', bgcolor: selected ? 'primary.dark' : '#f4f7fb' },
                '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 2 },
                '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
              }}
            >
              {selected && <CheckRoundedIcon sx={{ fontSize: 16, color: GOLD }} />}
              {option}
            </ButtonBase>
          )
        })}
      </Stack>
      {error && (
        <Typography role="alert" sx={{ mt: 0.75, ml: 0.5, color: 'error.main', fontSize: 12.5 }}>
          {error}
        </Typography>
      )}
    </Box>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <Stack direction="row" spacing={1.75} sx={{ alignItems: 'flex-start' }}>
      <Box
        aria-hidden
        sx={{
          flexShrink: 0,
          width: 44,
          height: 44,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 2,
          bgcolor: '#ffffff14',
          border: '1px solid #ffffff1f',
          color: GOLD,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ color: GOLD, fontSize: 11.5, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase' }}>
          {label}
        </Typography>
        <Box sx={{ mt: 0.5 }}>{children}</Box>
      </Box>
    </Stack>
  )
}

const linkSx = {
  display: 'block',
  color: '#fff',
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 1.6,
  overflowWrap: 'anywhere',
  '&:hover': { color: GOLD },
  '&:focus-visible': { outline: `3px solid ${GOLD}`, outlineOffset: 2, borderRadius: 1 },
}

function ContactSection() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState(false)

  const setField = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: validators[name](value) }))
  }

  const handleChange = (event) => setField(event.target.name, event.target.value)

  const handleBlur = (event) => {
    const { name, value } = event.target
    if (validators[name]) setErrors((current) => ({ ...current, [name]: validators[name](value) }))
  }

  const validateAll = () => {
    const nextErrors = {}
    Object.keys(validators).forEach((key) => {
      nextErrors[key] = validators[key](values[key])
    })
    setErrors(nextErrors)
    return Object.values(nextErrors).every((message) => !message)
  }

  const buildMessage = () =>
    [
      ['Name', values.name],
      ['Company', values.company],
      ['Mobile', values.mobile],
      ['Email', values.email],
      ['Funding requirement', values.amount],
      ['Loan type', values.loanType],
      ['Message', values.message.trim() || 'Not provided'],
    ]
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n')

  const sendEmail = (event) => {
    event.preventDefault()
    if (!validateAll()) return
    const mailto = `mailto:${companyInfo.email}?subject=${encodeURIComponent('Funding request')}&body=${encodeURIComponent(buildMessage())}`
    window.location.assign(mailto)
    setNotice(true)
  }

  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-heading"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#f4f7fb',
        py: { xs: 6, md: 9 },
        scrollMarginTop: 112,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, #e3edf9 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: { xs: 'calc(100% - 32px)', md: 'calc(100% - 96px)' }, maxWidth: 1400, mx: 'auto' }}>
        {/* Heading */}
        <Stack sx={{ mb: { xs: 3.5, md: 5 }, alignItems: 'center', textAlign: 'center' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Box sx={{ width: 10, height: 10, bgcolor: GOLD, borderRadius: '2px' }} />
            <Typography sx={{ color: 'primary.main', fontSize: 12.5, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              Contact us
            </Typography>
          </Stack>
          <Typography
            id="contact-heading"
            component="h2"
            sx={{ mt: 1.5, color: 'primary.dark', fontSize: { xs: 26, sm: 30, md: 36 }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em' }}
          >
            Get quick funding for your business
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 560, color: 'text.secondary', fontSize: { xs: 14.5, md: 16 }, lineHeight: 1.65 }}>
            Fill out the form and our team will get in touch with you shortly.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(300px, .85fr) minmax(0, 1.4fr)' },
            gap: { xs: 2.5, md: 3 },
            alignItems: 'stretch',
          }}
        >
          {/* Contact details */}
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: 'primary.dark',
              color: '#fff',
              boxShadow: '0 24px 44px -16px #041a3573',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 0% 0%, #174779 0%, transparent 65%)',
                pointerEvents: 'none',
              },
            }}
          >
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Typography component="h3" sx={{ color: '#fff', fontSize: 22, fontWeight: 800, lineHeight: 1.25 }}>
                Talk to our team
              </Typography>
              <Typography sx={{ mt: 1, color: '#d5e1ef', fontSize: 14.5, lineHeight: 1.65 }}>
                Prefer to speak directly? Reach us through any of the options below.
              </Typography>

              <Stack spacing={3} sx={{ mt: 3.5 }}>
                <InfoRow icon={<CallRoundedIcon />} label="Call us now">
                  {phoneNumbers.map((phone) => (
                    <Typography key={phone} component="a" href={`tel:${phone.replace(/\s/g, '')}`} sx={linkSx}>
                      {phone}
                    </Typography>
                  ))}
                </InfoRow>

                <InfoRow icon={<EmailRoundedIcon />} label="Email">
                  <Typography component="a" href={`mailto:${companyInfo.email}`} sx={linkSx}>
                    {companyInfo.email}
                  </Typography>
                </InfoRow>

                <InfoRow icon={<LocationOnRoundedIcon />} label="Our location">
                  <Typography sx={{ color: '#d5e1ef', fontSize: 14.5, lineHeight: 1.65 }}>{companyInfo.address}</Typography>
                </InfoRow>
              </Stack>

              <Box
                sx={{
                  height: { xs: 220, md: 240 },
                  mt: 3.5,
                  overflow: 'hidden',
                  borderRadius: 2.5,
                  bgcolor: '#e6eef6',
                  border: '1px solid #ffffff26',
                }}
              >
                <Box
                  component="iframe"
                  title="VVS Fincorp location on Google Maps"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  sx={{ display: 'block', width: '100%', height: '100%', border: 0 }}
                />
              </Box>
              <Button
                component="a"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address)}`}
                target="_blank"
                rel="noreferrer"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  alignSelf: 'flex-start',
                  mt: 1.25,
                  px: 0.5,
                  color: GOLD,
                  fontSize: 13.5,
                  fontWeight: 700,
                  '&:hover': { bgcolor: 'transparent', color: '#fff' },
                }}
              >
                View on Google Maps
              </Button>

              <Button
                component="a"
                href={`https://wa.me/${phoneNumbers[0].replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                startIcon={<WhatsAppIcon />}
                fullWidth
                sx={{
                  mt: 2.5,
                  py: 1.25,
                  borderRadius: 99,
                  bgcolor: 'secondary.light',
                  color: 'primary.dark',
                  fontSize: 14,
                  fontWeight: 800,
                  '&:hover': { bgcolor: '#f0d276' },
                }}
              >
                WhatsApp us
              </Button>
            </Box>
          </Box>

          {/* Form */}
          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 3, md: 4 },
              border: '1px solid #e0e8f1',
              borderRadius: 4,
              bgcolor: '#fff',
              boxShadow: '0 18px 40px -18px #0a2e5d33',
            }}
          >
            <Typography component="h3" sx={{ color: 'primary.dark', fontSize: 22, fontWeight: 800, lineHeight: 1.25 }}>
              Request funding
            </Typography>
            <Typography sx={{ mt: 0.75, mb: 3, color: 'text.secondary', fontSize: 14.5, lineHeight: 1.6 }}>
              Share a few details and we’ll help you explore your options.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField
                name="name"
                label="Full name"
                required
                fullWidth
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.name)}
                helperText={errors.name}
                sx={fieldSx}
              />
              <TextField
                name="company"
                label="Company name"
                required
                fullWidth
                autoComplete="organization"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.company)}
                helperText={errors.company}
                sx={fieldSx}
              />
              <TextField
                name="mobile"
                label="Mobile number"
                type="tel"
                required
                fullWidth
                autoComplete="tel"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile}
                sx={fieldSx}
              />
              <TextField
                name="email"
                label="Email address"
                type="email"
                required
                fullWidth
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email)}
                helperText={errors.email}
                sx={fieldSx}
              />
            </Box>

            <Stack spacing={2.5} sx={{ mt: 3, flex: 1 }}>
              <ChoiceGroup
                id="funding-amount-label"
                label="Funding requirement *"
                options={fundingAmounts}
                value={values.amount}
                onChange={(option) => setField('amount', option)}
                error={errors.amount}
              />
              <ChoiceGroup
                id="loan-type-label"
                label="Loan type *"
                options={loanTypes}
                value={values.loanType}
                onChange={(option) => setField('loanType', option)}
                error={errors.loanType}
              />
              <TextField
                name="message"
                label="Message (optional)"
                fullWidth
                multiline
                minRows={4}
                value={values.message}
                onChange={handleChange}
                sx={{
                  ...fieldSx,
                  flex: 1,
                  minHeight: 130,
                  '& .MuiOutlinedInput-root': {
                    ...fieldSx['& .MuiOutlinedInput-root'],
                    flex: 1,
                    alignItems: 'stretch',
                  },
                  '& .MuiInputBase-inputMultiline': { height: 'auto !important', overflow: 'auto !important' },
                }}
              />
            </Stack>

            {notice && (
              <Alert severity="info" sx={{ mt: 2.5, fontSize: 13.5 }}>
                Continue in your email app to send the request to {companyInfo.email}.
              </Alert>
            )}

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3, alignItems: { sm: 'center' } }}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  px: 3.5,
                  py: 1.35,
                  borderRadius: 99,
                  bgcolor: 'secondary.light',
                  color: 'primary.dark',
                  fontSize: 14,
                  fontWeight: 800,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#f0d276', boxShadow: 'none' },
                }}
              >
                Continue in email
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactSection