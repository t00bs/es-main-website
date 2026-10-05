/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Electric Sheep";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "We design and build digital tools for growing service businesses, saving you time and freeing your team to focus on clients.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://electricsheep.design";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-GB";
/**
 * Routes kept out of search results. Each is excluded from the sitemap and
 * served with a `robots: noindex, nofollow` tag, so the two can't disagree.
 *
 * `/work/preview` is the visual editor's sample-content render of the
 * case-study template — a real URL for Stacki to open, not a real page.
 */
export const NOINDEX_ROUTES: string[] = ["/404", "/work/preview"];
/**
 * Google Tag Manager container. It holds GA4 and the Meta Pixel, and loads in
 * production builds only, so editing sessions in dev never reach analytics.
 * Its tags fire on the `analytics-activated` and `marketing-activated` events
 * the cookie banner pushes, never before.
 */
export const GTM_ID = "GTM-W7QG5RS";
/**
 * The first-party cookie that remembers a visitor's cookie choices. Bump
 * `CONSENT_VERSION` when the categories change, and everyone is asked again.
 */
export const CONSENT_COOKIE = "es_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_DAYS = 365;
/**
 * Case-study categories: the keys a case study's `tags` may hold, and how each
 * reads on the site. A case study appears in the homepage row for every tag
 * it has; its first tag picks the "More …" row under its own page.
 */
export const WORK_TAGS = ["design-automation", "portals"] as const;
export const WORK_TAG_LABELS: Record<string, string> = {
  "design-automation": "Design & Automation",
  portals: "Portals",
};
/** Each category in the singular, for describing a noun — "Portal Case Studies". */
export const WORK_TAG_SINGULAR: Record<string, string> = {
  "design-automation": "Design & Automation",
  portals: "Portal",
};
