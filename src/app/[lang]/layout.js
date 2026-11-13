import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary } from "@/i18n";
import { htmlLang, locales } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Static export: only /en, /hi and /jp are built, so any other first segment
// is a 404 on the host. (Don't add `dynamicParams = false` here: with
// output: 'export', Next 14.2's dev server then rejects every page.)
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export function generateMetadata({ params }) {
  const { meta } = getDictionary(params.lang);
  return {
    title: { template: meta.title, default: meta.title },
    icons: { icon: "/favicon.ico" },
    description: meta.description,
  };
}

export default function RootLayout({ children, params }) {
  const dict = getDictionary(params.lang);
  return (
    <html lang={htmlLang[params.lang] ?? "en"}>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <I18nProvider lang={params.lang} dict={dict}>
          {children}
          <FireFliesBackground />
          <Sound />
          <LanguageSwitcher />
          <div id="my-modal" />
        </I18nProvider>
      </body>
    </html>
  );
}
