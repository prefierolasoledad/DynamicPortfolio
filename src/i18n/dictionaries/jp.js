const jp = {
  meta: {
    title: "カラン・バット ポートフォリオ",
    description:
      "Next.js、Tailwind CSS、Three.js、Framer Motionなどの最新技術で作られた、カラン・バットのクリエイティブなポートフォリオ。",
  },
  // Search engines and link previews (see src/i18n/seo.js).
  seo: {
    "siteName": "カラン・バット",
    "titleTemplate": "%s | カラン・バット",
    "ogLocale": "ja_JP",
    "personDescription": "Node.js、TypeScript、PostgreSQL、Redis、Kafkaでスケーラブルな分散システムを構築するバックエンドエンジニア。リソースの少ないインドの言語の機械翻訳を中心に、NLP研究へと歩みを進めています。",
    "jobTitle": "バックエンドエンジニア",
    "keywords": [
      "カラン・バット",
      "Karan Bhatt",
      "バックエンドエンジニア",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "分散システム",
      "機械翻訳",
      "インドの言語",
      "NLP",
      "ポートフォリオ"
    ],
    "ogImageAlt": "カラン・バット：バックエンドエンジニア → NLP研究者。あいさつする3Dキャラクターが登場するポートフォリオのプレビュー。",
    "pages": {
      "home": {
        "title": "カラン・バット | バックエンドエンジニア → NLP研究者",
        "description": "カラン・バットのポートフォリオ。Node.js・TypeScript・PostgreSQL・Redis・Kafkaを扱うバックエンドエンジニアとして、インドの言語の機械翻訳に関するNLP研究に取り組んでいます。"
      },
      "about": {
        "title": "自己紹介",
        "description": "カラン・バット：GSX SolutionsのSDEインターン、Adventroz共同創業者。LeetCodeで400問以上を解き、現在はインドの言語の観光翻訳を研究しています。"
      },
      "projects": {
        "title": "プロジェクト",
        "description": "カラン・バットのプロジェクト：Stripe・Kafka・Kubernetesを使ったマーケットプレイスKintsugi、AI試験作成ツールLumina AI、リアルタイムかんばんなど。"
      },
      "contact": {
        "title": "お問い合わせ",
        "description": "バックエンド開発、NLP研究、インターンシップやコラボレーションのご相談はこちらからカラン・バットへ。"
      }
    }
  },
  switcher: { label: "言語を切り替える" },
  nav: {
    home: "ホーム",
    about: "自己紹介",
    projects: "プロジェクト",
    contact: "お問い合わせ",
    github: "GitHub",
    linkedin: "LinkedIn",
    leetcode: "LeetCode",
    resume: "履歴書",
    goHome: "ホームページへ",
  },
  sound: {
    prompt: "BGMを再生しますか？",
    yes: "はい",
    no: "いいえ",
    button: "サウンド切り替えボタン",
  },
  about: {
    name: "カラン・バット",
    subtitle: "このポートフォリオの作者です",
    roleLines: [
      "バックエンドエンジニア → NLP研究者",
      "インドの言語のための機械翻訳",
      "Node.js · TypeScript · PostgreSQL · Kafka",
      "日本語を勉強中です",
    ],
    heading: "今はバックエンド、次は言語技術",
    intro:
      "Node.js、TypeScript、PostgreSQL、Redis、Kafka、Dockerを使って、スケーラブルな分散システムを構築するバックエンドエンジニアです。現在はGSX SolutionsでSDEインターンとして、リアルタイム予測取引所のバックエンドを担当しています。以前はAIを活用した旅行プラットフォームAdventrozを共同創業し、エンジニアリング全体を率いていました。",
    goal: {
      before: "これからは、同じ本番品質へのこだわりを",
      highlight: "NLP",
      after:
        "に向けていきます。リソースの少ないインドの言語の機械翻訳に取り組み、まずは観光・文化のテキストから始めて、今のモデルが最も苦手とする言語や地域でも言語技術が役立つようにすることが目標です。",
    },
    projects: "プロジェクト",
    experience: "年の経験",
    leetcode: "LeetCode",
    problemsSolved: "問題を解決",
    contestRating: "コンテストレーティング",
    alsoLearning: "勉強中",
    learningJapanese: "MLの研究と並行して日本語を勉強しています。",
    skillsBackend: "バックエンド・インフラ・Web",
    skillsMl: "機械学習とNLP",
    skillsMlNote: "· 目指している分野",
    alt: {
      topLangs: "GitHubでよく使う言語",
      stats: "GitHubの統計",
      skillsBackend: "バックエンド・インフラ・Webのスキル",
      skillsMl: "Python、PyTorch、TensorFlow、scikit-learn、Anaconda",
      streak: "GitHubのコントリビューション連続記録",
      pin: "Kintsugiリポジトリのカード",
    },
  },
  research: {
    heading: "研究中のテーマ",
    headingSub: "",
    badge: "進行中",
    status: { now: "進行中", next: "次", goal: "目標" },
    title: "インドの言語のための観光翻訳",
    summary:
      "観光・文化に関するテキストを、今のモデルがどれだけ正確にインドの言語へ翻訳できるかを評価し、さらに改善します。",
    steps: [
      {
        label: "データセット",
        detail: "FLORES-200と独自の観光テキスト（インドの2〜3言語）",
        status: "now",
      },
      {
        label: "ベースライン",
        detail: "APIモデルと小規模なオープンモデルをchrFとCOMETで評価",
        status: "now",
      },
      {
        label: "LoRAファインチューニング",
        detail: "オープンモデルを観光・文化のテキストに適応させる",
        status: "next",
      },
      {
        label: "評価",
        detail: "人手評価とエラー分析：地名、文化的な用語、文字体系",
        status: "next",
      },
      {
        label: "公開",
        detail: "まとめとコードを2027年初頭にGitHubで公開",
        status: "goal",
      },
    ],
  },
  projects: { featured: "注目" },
  contact: {
    heading: "あなたの考えをデプロイしよう",
    intro:
      "アイデアのデバッグでも、新しいコラボへのコミットでも、新しい考え方を探っているだけでも、ぜひつながりましょう。下のフォームからメッセージを送ってください。一緒に素晴らしいものを作りましょう。革新的なアイデアのブレインストーミングから既存の仕組みの最適化まで、一つひとつのやり取りが限界を押し広げてくれます。メッセージ一通ずつ、意味のあるものを設計していきましょう。",
    form: {
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      submit: "メッセージを送信！",
      required: "この項目は必須です！",
      nameMin: "お名前は3文字以上で入力してください。",
      messageMax: "メッセージは500文字以内で入力してください",
      messageMin: "メッセージは50文字以上で入力してください",
      sending: "送信中です。少々お待ちください...",
      success: "メッセージを受け取りました。近いうちにご連絡します！",
      error: "送信中にエラーが発生しました。しばらくしてからもう一度お試しください！",
      notConfigured: "この環境ではお問い合わせフォームが設定されていません。",
    },
  },
};

export default jp;
