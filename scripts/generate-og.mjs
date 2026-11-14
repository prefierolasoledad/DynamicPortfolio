// Generates the link-preview images (Open Graph / Twitter cards) at
// public/og/<domain>/{en,hi,jp}.png, 1200x630, for each domain in OG_HOSTS.
//
// Each card shows the name, role and stack in that language next to a real
// screenshot of the home page, with the 3D character greeting in that
// language.
//
// Usage (with the dev server running on http://localhost:3000):
//   npm run og
// Options via env: SITE=http://localhost:3000  CHROME=/usr/bin/chromium
//
// Needs only Node 22+ and a local Chrome/Chromium (no npm packages).

import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = (process.env.SITE || "http://localhost:3000").replace(/\/$/, "");
const CHROME = process.env.CHROME || "/usr/bin/chromium";
// One set of cards per domain the site is served from (keep in sync with
// ogHosts in src/i18n/seo.js). Each card shows its own domain.
const OG_HOSTS = ["karanbhatt.me", "karan-bhatt-portfolio.netlify.app"];

const load = async (rel) => (await import(pathToFileURL(join(root, rel)).href));
const { greetings } = await load("src/app/data.js");
const dicts = {
  en: (await load("src/i18n/dictionaries/en.js")).default,
  hi: (await load("src/i18n/dictionaries/hi.js")).default,
  jp: (await load("src/i18n/dictionaries/jp.js")).default,
};
const htmlLang = { en: "en", hi: "hi", jp: "ja" };
const label = { en: "PORTFOLIO", hi: "पोर्टफ़ोलियो", jp: "ポートフォリオ" };
const stack = ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Kubernetes", "PyTorch"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const escapeHtml = (s) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// --- Minimal Chrome DevTools Protocol client ---------------------------------
const work = mkdtempSync(join(tmpdir(), "og-"));
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn(
  CHROME,
  ["--headless=new", "--no-sandbox", "--hide-scrollbars", "--enable-unsafe-swiftshader",
   `--remote-debugging-port=${port}`, `--user-data-dir=${join(work, "profile")}`, "about:blank"],
  { stdio: "ignore" }
);
let target;
for (let i = 0; i < 60 && !target; i++) {
  await sleep(300);
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    target = list.find((t) => t.type === "page");
  } catch {}
}
if (!target) throw new Error(`Could not start ${CHROME}`);
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let nextId = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const id = ++nextId;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });
const evaluate = async (expression) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }))
    .result?.result?.value;
const screenshot = async (clip) =>
  (await send("Page.captureScreenshot", { format: "png", ...(clip && { clip }) })).result.data;

await send("Page.enable");
// Skip the "play music?" popup in screenshots.
await send("Page.addScriptToEvaluateOnNewDocument", {
  source: "try{localStorage.setItem('musicConsent','false');localStorage.setItem('consentTime',new Date().toISOString())}catch{}",
});

// --- 1. Screenshot the home page, waiting for the greeting -------------------
async function captureHome(lang) {
  await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url: `${SITE}/${lang}` });
  const greeting = greetings.find((g) => g.locale === lang).greeting;
  // "visible" = the greeting is on screen, fully popped in and not leaving.
  const bubbleState = () =>
    evaluate(`(() => {
      const p = [...document.querySelectorAll('p')].find(p => p.textContent === ${JSON.stringify(greeting)});
      if (!p) return 'absent';
      const el = p.closest('.origin-bottom-left');
      if (!el || el.className.includes('bubble-out')) return 'leaving';
      return getComputedStyle(el).opacity === '1' ? 'visible' : 'entering';
    })()`);

  for (let attempt = 0; attempt < 120; attempt++) {
    if (attempt === 0) {
      // Once loaded, hide the orbiting nav buttons (they can cover the greeting).
      for (let i = 0; i < 200 && (await bubbleState()) === "absent"; i++) await sleep(300);
      // Also skip the bubble's pop/float animations: under software rendering
      // they run so slowly that the bubble is rarely fully visible.
      await evaluate(`(() => { const s = document.createElement('style');
        s.textContent = '.animate-spin-slow { visibility: hidden !important; }' +
          '.origin-bottom-left, .origin-bottom-left * { animation: none !important; }';
        document.head.appendChild(s); return true; })()`);
    }
    if ((await bubbleState()) !== "visible") { await sleep(150); continue; }
    // Zoom in on the character and her speech bubble.
    const shot = await screenshot({ x: 260, y: 40, width: 864, height: 540, scale: 1.4 });
    // The bubble changes language every few seconds; keep the shot only if it
    // still showed this language's greeting when the capture finished.
    if ((await bubbleState()) === "visible") return shot;
  }
  throw new Error(`/${lang}: could not catch the greeting (is the dev server running at ${SITE}?)`);
}

// --- 2. Lay out the card ------------------------------------------------------
function cardHtml(lang, shotBase64, host) {
  const d = dicts[lang];
  const name = d.seo.siteName;
  const [role, focus] = d.about.roleLines;
  return `<!doctype html><html lang="${htmlLang[lang]}"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Noto+Sans+Devanagari:wght@400;600;800&family=Noto+Sans+JP:wght@400;600;800&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: Inter, "Noto Sans Devanagari", "Noto Sans JP", sans-serif;
    color: #e1e1e1;
    background:
      radial-gradient(600px 400px at 85% 45%, rgba(254,254,91,0.16), transparent 70%),
      radial-gradient(500px 500px at 0% 100%, rgba(123,92,255,0.22), transparent 70%),
      #1b1b1b;
    position: relative;
  }
  .dot { position: absolute; width: 8px; height: 8px; border-radius: 50%;
    background: radial-gradient(circle, rgba(253,255,80,0.9), rgba(253,255,80,0) 70%); }
  .text { position: absolute; left: 64px; top: 64px; width: 560px; bottom: 56px;
    display: flex; flex-direction: column; }
  .label { align-self: flex-start; font-size: 18px; letter-spacing: ${lang === "en" ? "0.2em" : "0.05em"};
    color: #FEFE5B; border: 1.5px solid rgba(254,254,91,0.5); border-radius: 999px; padding: 6px 16px; }
  h1 { margin-top: 28px; font-size: ${lang === "jp" ? 72 : 84}px; font-weight: 800; line-height: 1.05;
    color: #FEFE5B; letter-spacing: -0.01em; white-space: nowrap; }
  .role { margin-top: 20px; font-size: 29px; white-space: nowrap; font-weight: 600; color: #fff; line-height: 1.25; }
  .focus { margin-top: 10px; font-size: 24px; color: #b5b5b5; line-height: 1.35; }
  .chips { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 10px; }
  .chip { font-family: Inter, sans-serif; font-size: 17px; padding: 6px 14px; border-radius: 10px;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(254,254,91,0.25); color: #e8e8e8; }
  .foot { margin-top: auto; display: flex; align-items: center; gap: 18px; font-size: 20px; color: #9a9a9a; }
  .foot b { color: #e1e1e1; font-weight: 600; font-family: Inter, sans-serif; }
  .langs span { margin-right: 10px; } .langs .on { color: #FEFE5B; font-weight: 600; }
  .shot { position: absolute; left: 640px; top: 84px; width: 590px; border-radius: 16px; overflow: hidden;
    border: 1px solid rgba(254,254,91,0.35);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(254,254,91,0.12);
    transform: perspective(1400px) rotateY(-14deg) rotateX(4deg); transform-origin: left center; }
  .bar { height: 34px; background: #2a2a2a; display: flex; align-items: center; gap: 8px; padding: 0 14px; }
  .bar i { width: 11px; height: 11px; border-radius: 50%; background: #555; display: block; }
  .bar i:nth-child(1) { background: #ff5f57; } .bar i:nth-child(2) { background: #febc2e; } .bar i:nth-child(3) { background: #28c840; }
  .bar span { margin-left: 12px; font-family: Inter, sans-serif; font-size: 14px; color: #aaa;
    background: #1f1f1f; border-radius: 6px; padding: 3px 12px; }
  .shot img { display: block; width: 100%; }
</style></head><body>
  ${[[620, 40], [1150, 600], [560, 590], [40, 300], [990, 30], [700, 560], [300, 600]]
    .map(([x, y]) => `<div class="dot" style="left:${x}px;top:${y}px"></div>`).join("")}
  <div class="text">
    <div class="label">${escapeHtml(label[lang])}</div>
    <h1>${escapeHtml(name)}</h1>
    <div class="role">${escapeHtml(role)}</div>
    <div class="focus">${escapeHtml(focus)}</div>
    <div class="chips">${stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
    <div class="foot">
      <b>${escapeHtml(host)}</b>
      <span class="langs">${["en", "hi", "jp"]
        .map((l) => `<span class="${l === lang ? "on" : ""}">${{ en: "EN", hi: "हिंदी", jp: "日本語" }[l]}</span>`)
        .join("")}</span>
    </div>
  </div>
  <div class="shot">
    <div class="bar"><i></i><i></i><i></i><span>${escapeHtml(host)}/${lang}</span></div>
    <img src="data:image/png;base64,${shotBase64}" alt="">
  </div>
</body></html>`;
}

// --- 3. Render each card -------------------------------------------------------
const outDir = join(root, "public", "og");
try {
  for (const lang of ["en", "hi", "jp"]) {
    const shot = await captureHome(lang);
    for (const host of OG_HOSTS) {
      const file = join(work, `card-${lang}.html`);
      writeFileSync(file, cardHtml(lang, shot, host));
      await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
      await send("Page.navigate", { url: pathToFileURL(file).href });
      await sleep(500);
      await evaluate("document.fonts.ready.then(() => true)");
      await sleep(300);
      const png = await screenshot({ x: 0, y: 0, width: 1200, height: 630, scale: 1 });
      mkdirSync(join(outDir, host), { recursive: true });
      writeFileSync(join(outDir, host, `${lang}.png`), Buffer.from(png, "base64"));
      console.log(`public/og/${host}/${lang}.png`);
    }
  }
} finally {
  ws.close();
  chrome.kill();
  await sleep(300);
  rmSync(work, { recursive: true, force: true });
}
