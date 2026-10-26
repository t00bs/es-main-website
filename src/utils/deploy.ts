/**
 * True on Vercel preview builds: the `staging` branch (staging.electricsheep.design)
 * and every other non-production branch. Read at build time, server-side only.
 *
 * Preview builds are kept out of search (robots noindex on every page) and never
 * load Google Tag Manager, so staging visits don't land in GA4 or the Meta Pixel.
 */
export const IS_PREVIEW_DEPLOY = process.env.VERCEL_ENV === "preview";
