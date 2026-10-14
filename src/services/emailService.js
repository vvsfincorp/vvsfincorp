/**
 * Sends enquiry-form submissions through EmailJS (https://www.emailjs.com).
 *
 * Uses the EmailJS REST endpoint that the @emailjs/browser SDK calls, so no extra
 * dependency is needed. Only the *public* key is used; it is designed to be
 * exposed in frontend code. Never put the EmailJS private key in this project.
 *
 * Configure in .env / .env.production (see .env.example):
 *   VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID
 */
const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'
const REQUEST_TIMEOUT_MS = 15000

const config = {
  publicKey: (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim(),
  serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim(),
  templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim(),
}

export const isEmailServiceConfigured = Boolean(config.publicKey && config.serviceId && config.templateId)

/**
 * Resolves only when EmailJS confirms the request (HTTP 200); rejects otherwise.
 * templateParams keys must match the {{variables}} used in the EmailJS template.
 */
export async function sendEnquiryEmail(templateParams) {
  if (!isEmailServiceConfigured) throw new Error('EmailJS is not configured')

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: templateParams,
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      throw new Error(`EmailJS request failed (${response.status})${detail ? `: ${detail}` : ''}`)
    }
  } finally {
    clearTimeout(timeout)
  }
}
