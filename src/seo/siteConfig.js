// Production settings read from Vite environment variables (see .env.example).
export const siteUrl = (import.meta.env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
export const indexable = import.meta.env.VITE_ALLOW_INDEXING !== 'false'
