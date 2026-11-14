import { htmlLang, locales } from "@/i18n/config";
import { pagePaths, siteUrl } from "@/i18n/seo";

// /sitemap.xml: every page in every language, each linked to its translations.
export default function sitemap() {
  const lastModified = new Date();
  return Object.entries(pagePaths).flatMap(([page, path]) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: page === "home" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [htmlLang[l], `${siteUrl}/${l}${path}`])
        ),
      },
    }))
  );
}
