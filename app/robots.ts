import type { MetadataRoute } from "next";

/* ⚠️ غيّر الدومين هنا لدومينك الفعلي بعد الشراء */
const SITE_URL = "https://alam-elroum.net";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thank-you",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
