import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: process.env.NEXT_PUBLIC_BLINK_PROJECT_ID || 'scroll-synced-hero-b0jnen57',
  publishableKey: process.env.NEXT_PUBLIC_BLINK_PUBLISHABLE_KEY || 'blnk_pk_geou39ypfWv1QRPdL9F_jRtggQmCEf2I',
  authRequired: false,
  auth: { mode: 'headless' },
})
