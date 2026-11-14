import "../globals.css";
import { buildMetadata, deployUrl, siteUrl } from "@/i18n/seo";

// Link-preview bots don't run JavaScript, so they never reach /en. Give the
// bare domain (the URL people usually share) the English preview card too.
const english = buildMetadata("en", "home");

export const metadata = {
  ...english,
  metadataBase: new URL(deployUrl),
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: `${siteUrl}/en`, languages: english.alternates.languages },
  openGraph: { ...english.openGraph, url: `${deployUrl}/` },
  // These pages only forward to /en, /hi or /jp; keep them out of search
  // results but let crawlers follow the language links.
  robots: { index: false, follow: true },
};

// Root layout for the language-picking redirect pages ("/", "/about", ...).
// The real site lives under app/[lang], which has its own root layout.
export default function RedirectLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
