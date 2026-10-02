/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Electric Sheep";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "We design & build digital tools that are automated by AI, but driven by people.";
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
