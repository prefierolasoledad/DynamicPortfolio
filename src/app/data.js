/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

// Shown in this order on the Projects page; `featured` ones get a badge.
// Each description has an English, Hindi and Japanese version.
export const projectsData = [
  {
    id: 9,
    name: "Kintsugi 金継ぎ",
    description: {
      en: "Marketplace with Stripe, Kafka outbox & Postgres failover on K8s.",
      hi: "Stripe, Kafka आउटबॉक्स और K8s पर Postgres फ़ेलओवर वाला मार्केटप्लेस।",
      jp: "Stripe・Kafkaアウトボックス・K8s上のPostgresフェイルオーバーを備えたマーケットプレイス",
    },
    date: "2026-08-21",
    demoLink: "https://github.com/prefierolasoledad/Kintsugi",
    featured: true,
  },
  {
    id: 2,
    name: "Lumina AI",
    description: {
      en: "AI-powered teaching platform generating custom exams using Gemini AI.",
      hi: "Gemini AI से कस्टम परीक्षा पेपर बनाने वाला AI टीचिंग प्लैटफ़ॉर्म।",
      jp: "Gemini AIでオリジナルの試験を作成するAI教育プラットフォーム",
    },
    date: "2025-03-15",
    demoLink: "https://github.com/prefierolasoledad/Lumina_AI",
    featured: true,
  },
  {
    id: 10,
    name: "Koders Task Platform",
    description: {
      en: "Real-time Kanban with WebSockets, JWT auth and RBAC.",
      hi: "WebSockets, JWT ऑथ और RBAC के साथ रियल-टाइम कानबन।",
      jp: "WebSocket・JWT認証・RBAC対応のリアルタイムかんばん",
    },
    date: "2026-02-18",
    demoLink: "https://github.com/prefierolasoledad/koders-task-platform",
    featured: true,
  },
  {
    id: 11,
    name: "CodeVector Product API",
    description: {
      en: "Cursor-based pagination over 200,000+ products.",
      hi: "2,00,000+ प्रोडक्ट्स पर कर्सर-आधारित पेजिनेशन।",
      jp: "20万件以上の商品をカーソル方式でページネーション",
    },
    date: "2026-06-23",
    demoLink: "https://github.com/prefierolasoledad/CodeVector-product-tasks",
    featured: true,
  },
  {
    id: 1,
    name: "ADVENTROZ",
    description: {
      en: "Smart travel booking and adventures.",
      hi: "स्मार्ट ट्रैवल बुकिंग और एडवेंचर।",
      jp: "スマートな旅行予約とアドベンチャー",
    },
    date: "2024-07-20",
    demoLink: "https://drive.google.com/file/d/1KqksVSekL3yrKpturye_wK6J0iHyDQue/view?usp=sharing",
  },
  {
    id: 3,
    name: "Dynamic Portfolio",
    description: {
      en: "Showcase projects interactively.",
      hi: "प्रोजेक्ट्स को इंटरैक्टिव तरीके से दिखाएँ।",
      jp: "プロジェクトをインタラクティブに紹介",
    },
    date: "2025-02-09",
    demoLink: "https://github.com/prefierolasoledad/DynamicPortfolio",
  },
  {
    id: 4,
    name: "Vespera",
    description: {
      en: "Tech fest event registration platform.",
      hi: "टेक फ़ेस्ट इवेंट रजिस्ट्रेशन प्लैटफ़ॉर्म।",
      jp: "テックフェスのイベント登録プラットフォーム",
    },
    date: "2024-10-20",
    demoLink: "https://vespera-usar.netlify.app/",
  },
  {
    id: 5,
    name: "To-Do List",
    description: {
      en: "Manage daily tasks efficiently.",
      hi: "रोज़ के काम आसानी से मैनेज करें।",
      jp: "毎日のタスクを効率よく管理",
    },
    date: "2023-07-20",
    demoLink: "https://github.com/prefierolasoledad/ToDoList",
  },
  {
    id: 6,
    name: "VENDUGO",
    description: {
      en: "Car rental service frontend.",
      hi: "कार रेंटल सर्विस का फ़्रंटएंड।",
      jp: "レンタカーサービスのフロントエンド",
    },
    date: "2024-08-03",
    demoLink: "https://github.com/prefierolasoledad/VENDUGO",
  },
  {
    id: 7,
    name: "Blog Website",
    description: {
      en: "Explore and share blog content.",
      hi: "ब्लॉग पढ़ें और शेयर करें।",
      jp: "ブログ記事を読んで共有",
    },
    date: "2024-08-05",
    demoLink: "https://github.com/prefierolasoledad/blog-website",
  },
  {
    id: 8,
    name: "QR Code Generator",
    description: {
      en: "Create QR codes instantly.",
      hi: "तुरंत QR कोड बनाएँ।",
      jp: "QRコードをすぐに作成",
    },
    date: "2024-11-30",
    demoLink: "https://github.com/prefierolasoledad/qr-code-generator",
  },
];


export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/prefierolasoledad",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/karan-bhatt-0081a0295",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Leetcode",
    link: "https://leetcode.com/u/Karan_Bhatt",
    icon: "leetcode",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


// Speech bubble from the 3D model on the home page. It starts with the
// page's language, then cycles through the others.
// `locale` is the URL segment; `lang` is the standard language code.
export const greetings = [
  { locale: "hi", lang: "hi", greeting: "नमस्ते!", line: "करन के पोर्टफ़ोलियो में आपका स्वागत है" },
  { locale: "en", lang: "en", greeting: "Hello!", line: "Welcome to Karan's portfolio" },
  { locale: "jp", lang: "ja", greeting: "こんにちは！", line: "カランのポートフォリオへようこそ" },
];
