// /manifest.webmanifest: name, colours and icon when saved to a home screen.
export default function manifest() {
  return {
    name: "Karan Bhatt Portfolio",
    short_name: "Karan Bhatt",
    description:
      "Backend engineer moving into NLP research on machine translation for Indian languages.",
    start_url: "/",
    display: "standalone",
    background_color: "#1b1b1b",
    theme_color: "#1b1b1b",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
