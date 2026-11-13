"use client";
import { useEffect } from "react";
import { htmlLang, isLocale, localeNames, locales } from "@/i18n/config";

// Picks the visitor's language: the one they chose last time, else the first
// browser language we support, else English.
function pickLocale() {
  try {
    const saved = localStorage.getItem("lang");
    if (isLocale(saved)) return saved;
  } catch {}
  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const tag of preferred) {
    const base = (tag || "").toLowerCase().split("-")[0];
    const match = locales.find((l) => htmlLang[l] === base);
    if (match) return match;
  }
  return "en";
}

// Static export has no server redirects, so "/" and the old unprefixed URLs
// (/about, ...) forward to the localized page in the browser.
const LocaleRedirect = ({ path = "" }) => {
  useEffect(() => {
    const { search, hash } = window.location;
    window.location.replace(`/${pickLocale()}${path}${search}${hash}`);
  }, [path]);

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <nav className="flex gap-6 text-lg" aria-label="Language">
        {locales.map((locale) => (
          <a
            key={locale}
            href={`/${locale}${path}`}
            hrefLang={htmlLang[locale]}
            lang={htmlLang[locale]}
            className="hover:text-accent underline-offset-4 hover:underline"
          >
            {localeNames[locale]}
          </a>
        ))}
      </nav>
    </main>
  );
};

export default LocaleRedirect;
