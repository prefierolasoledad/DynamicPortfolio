// Site languages. The key is the URL segment (/en, /hi, /jp).
export const locales = ["en", "hi", "jp"];
export const defaultLocale = "en";

// Standard language codes for <html lang>, hreflang, etc. ("jp" is a country
// code; the language code for Japanese is "ja").
export const htmlLang = { en: "en", hi: "hi", jp: "ja" };

// Labels shown in the language switcher, each in its own language.
export const localeNames = { en: "EN", hi: "हिंदी", jp: "日本語" };

export const isLocale = (value) => locales.includes(value);

// "/about" -> "/hi/about", "/" -> "/hi"
export const localizeHref = (lang, href) =>
  href === "/" ? `/${lang}` : `/${lang}${href}`;

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  hi: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
};
const WEEKDAYS = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  jp: ["日", "月", "火", "水", "木", "金", "土"],
};

// Formats "2024-07-20" without Intl or the visitor's timezone, so the static
// HTML and the browser always produce the same text (no hydration mismatch).
export function formatDate(lang, isoDate) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const weekday = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  if (lang === "jp") return `${y}年${m}月${d}日(${WEEKDAYS.jp[weekday]})`;
  if (lang === "hi") return `${d} ${MONTHS.hi[m - 1]} ${y}`;
  return `${WEEKDAYS.en[weekday]}, ${MONTHS.en[m - 1]} ${d}, ${y}`;
}
