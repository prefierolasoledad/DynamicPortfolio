import "../globals.css";

export const metadata = {
  title: "Karan Bhatt Portfolio",
  icons: { icon: "/favicon.ico" },
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
