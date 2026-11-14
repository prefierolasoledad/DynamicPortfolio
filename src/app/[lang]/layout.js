import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary } from "@/i18n";
import { htmlLang, locales } from "@/i18n/config";
import { buildJsonLd, deployUrl, siteUrl } from "@/i18n/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Static export: only /en, /hi and /jp are built, so any other first segment
// is a 404 on the host. (Don't add `dynamicParams = false` here: with
// output: 'export', Next 14.2's dev server then rejects every page.)
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export function generateMetadata({ params }) {
  const { seo, meta } = getDictionary(params.lang);
  return {
    // Relative URLs (preview images) resolve against the host being deployed.
    metadataBase: new URL(deployUrl),
    title: { template: seo.titleTemplate, default: seo.pages.home.title },
    description: meta.description,
    applicationName: seo.siteName,
    authors: [{ name: "Karan Bhatt", url: siteUrl }],
    creator: "Karan Bhatt",
    publisher: "Karan Bhatt",
    category: "technology",
    formatDetection: { email: false, address: false, telephone: false },
    icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport = {
  themeColor: "#1b1b1b",
  colorScheme: "dark",
};

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
        <script
          type="application/ld+json"
          // Structured data (schema.org Person + WebSite) for search engines.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd(params.lang)).replace(/</g, "\\u003c"),
          }}
        />
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
