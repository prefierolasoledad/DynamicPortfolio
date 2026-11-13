"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";
import { htmlLang, localeNames, locales } from "@/i18n/config";

// EN | हिंदी | 日本語 pill next to the sound button. Keeps the current page:
// /hi/about -> /jp/about.
const LanguageSwitcher = () => {
  const pathname = usePathname() ?? "/";
  const { lang, dict } = useI18n();
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <motion.nav
      aria-label={dict.switcher.label}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-4 right-14 xs:right-[5.5rem] z-50 flex h-10 xs:h-14 items-center gap-0.5 rounded-full custom-bg px-1 xs:px-1.5 text-xs xs:text-sm"
    >
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest}`}
            hrefLang={htmlLang[locale]}
            lang={htmlLang[locale]}
            aria-current={active ? "page" : undefined}
            prefetch={false}
            scroll={false}
            onClick={() => {
              try {
                localStorage.setItem("lang", locale);
              } catch {}
            }}
            className={clsx(
              "rounded-full px-2.5 py-1 xs:px-3 xs:py-1.5 transition-colors whitespace-nowrap",
              active
                ? "bg-accent text-background font-semibold"
                : "text-foreground hover:text-accent"
            )}
          >
            {localeNames[locale]}
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default LanguageSwitcher;
