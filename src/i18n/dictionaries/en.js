const en = {
  meta: {
    title: "Karan Bhatt Portfolio",
    description:
      "A unique creative portfolio designed by Karan Bhatt with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion.",
  },
  // Search engines and link previews (see src/i18n/seo.js).
  seo: {
    "siteName": "Karan Bhatt",
    "titleTemplate": "%s | Karan Bhatt",
    "ogLocale": "en_US",
    "personDescription": "Backend engineer building scalable distributed systems with Node.js, TypeScript, PostgreSQL, Redis and Kafka, moving into NLP research on machine translation for low-resource Indian languages.",
    "jobTitle": "Backend Engineer",
    "keywords": [
      "Karan Bhatt",
      "backend engineer",
      "Node.js developer",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "distributed systems",
      "system design",
      "NLP",
      "machine translation",
      "Indian languages",
      "portfolio",
      "New Delhi"
    ],
    "ogImageAlt": "Karan Bhatt: Backend Engineer → NLP Researcher. Portfolio preview with a 3D character saying hello.",
    "pages": {
      "home": {
        "title": "Karan Bhatt | Backend Engineer → NLP Researcher",
        "description": "Portfolio of Karan Bhatt, a backend engineer (Node.js, TypeScript, PostgreSQL, Redis, Kafka) moving into NLP research on machine translation for Indian languages."
      },
      "about": {
        "title": "About",
        "description": "Karan Bhatt: SDE intern at GSX Solutions, co-founder of Adventroz, 400+ LeetCode problems solved, now researching tourism translation for low-resource Indian languages."
      },
      "projects": {
        "title": "Projects",
        "description": "Projects by Karan Bhatt: Kintsugi, a marketplace with Stripe, Kafka and Kubernetes; Lumina AI exam generator; a real-time Kanban; cursor-paginated APIs and more."
      },
      "contact": {
        "title": "Contact",
        "description": "Get in touch with Karan Bhatt about backend engineering roles, NLP research, internships or collaborations."
      }
    }
  },
  switcher: { label: "Change language" },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    github: "Github",
    linkedin: "LinkedIn",
    leetcode: "Leetcode",
    resume: "Resume",
    goHome: "Go to Home Page",
  },
  sound: {
    prompt: "Do you like to play the background music?",
    yes: "Yes",
    no: "No",
    button: "Sound control button",
  },
  about: {
    name: "KaranBhatt",
    subtitle: "Meet the Programmer behind this portfolio",
    roleLines: [
      "Backend Engineer → NLP Researcher",
      "Machine Translation for Indian Languages",
      "Node.js · TypeScript · PostgreSQL · Kafka",
      "日本語を勉強中 · Learning Japanese",
    ],
    heading: "Backend Systems Today, Language Technology Next",
    intro:
      "Backend Engineer building scalable distributed systems with Node.js, TypeScript, PostgreSQL, Redis, Kafka and Docker. I’m an SDE Intern at GSX Solutions, working on the backend of a real-time prediction exchange, and before that I co-founded Adventroz, an AI-powered travel platform, and led its engineering end to end.",
    // Rendered as: before + highlight (in yellow) + after
    goal: {
      before: "Next, I’m pointing the same production discipline at ",
      highlight: "NLP",
      after:
        ": machine translation for low-resource Indian languages, starting with tourism and cultural text, so language technology works for the languages and places today’s models handle worst.",
    },
    projects: "projects",
    experience: "years of experience",
    leetcode: "LeetCode",
    problemsSolved: "problems solved",
    contestRating: "contest rating",
    alsoLearning: "Also learning",
    learningJapanese: "Learning Japanese alongside the ML work.",
    skillsBackend: "Backend, Infra & Web",
    skillsMl: "Machine Learning & NLP",
    skillsMlNote: "· where I’m heading",
    alt: {
      topLangs: "Most used languages on GitHub",
      stats: "GitHub stats",
      skillsBackend: "Backend, infrastructure and web skills",
      skillsMl: "Python, PyTorch, TensorFlow, scikit-learn and Anaconda",
      streak: "GitHub contribution streak",
      pin: "Kintsugi repository card",
    },
  },
  research: {
    heading: "Currently Researching",
    headingSub: "研究中",
    badge: "in progress",
    status: { now: "in progress", next: "next", goal: "milestone" },
    title: "Tourism Translation for Indian Languages",
    summary:
      "Evaluating how well today’s models translate tourism and cultural text into Indian languages, then improving on them.",
    // status: "now" (working on it), "next" (planned), "goal" (milestone)
    steps: [
      {
        label: "Dataset",
        detail: "FLORES-200 plus my own tourism passages, across 2–3 Indian languages",
        status: "now",
      },
      {
        label: "Baselines",
        detail: "API models and a small open model, scored with chrF and COMET",
        status: "now",
      },
      {
        label: "LoRA fine-tuning",
        detail: "Adapt an open model to tourism and cultural text",
        status: "next",
      },
      {
        label: "Evaluation",
        detail: "Human evaluation and error analysis: place names, cultural terms, scripts",
        status: "next",
      },
      {
        label: "Publish",
        detail: "Write-up and code on GitHub, early 2027",
        status: "goal",
      },
    ],
  },
  projects: { featured: "featured" },
  contact: {
    heading: "Deploy Your Thoughts",
    intro:
      "Whether you’re debugging ideas, committing to new collaborations, or just exploring new frameworks of thought, let’s connect. Drop your message below, and let’s build something great together. From brainstorming innovative solutions to optimizing existing ones, every line of communication brings us closer to pushing boundaries. Let’s architect something meaningful—one message at a time.",
    form: {
      name: "name",
      email: "email",
      message: "message",
      submit: "Execute your message!",
      required: "This field is required!",
      nameMin: "Name should be at least 3 characters long.",
      messageMax: "Message should be less than 500 characters",
      messageMin: "Message should be more than 50 characters",
      sending: "Sending your message, please wait...",
      success: "I have received your message, I will get back to you soon!",
      error: "There was an error sending your message, please try again later!",
      notConfigured: "The contact form is not configured in this environment.",
    },
  },
};

export default en;
