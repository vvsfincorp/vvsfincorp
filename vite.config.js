import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import seoBuild from './scripts/seo-build.mjs'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [
      react(),
      seoBuild({
        siteUrl: (env.VITE_SITE_URL || '').trim().replace(/\/+$/, ''),
        indexable: env.VITE_ALLOW_INDEXING !== 'false',
      }),
    ],
    server: {
      host: true,
      port: 5173,
    },
  }
})
