/* =============================================================
   WIRE GROUP — interactions
   ============================================================= */

(() => {
  /* ----------- Translations ----------- */
  const i18n = {
    en: {
      // ===== Call Analytics (catalogue 03) =====
      "ca-back": "Wire Group · Catalogue 03",
      "ca-kicker": "For call-centers on Binotel · v1.0 · 2026",
      "ca-head-1": "Your call-center,",
      "ca-head-2": "on quiet autopilot.",
      "ca-sub": "Every answered call, transcribed and scored by AI — without anyone hitting play. Bad calls and lost deals surface to the top, each operator gets a score, and a best operator of the day is named. You stop guessing which call to listen to. Works only with Binotel telephony.",
      "ca-cta-open": "Discuss details",
      "ca-cta-inside": "See what's inside",
      "ca-qf1-label": "Setup",
      "ca-qf1-value": "2 keys · ~60 seconds",
      "ca-qf2-label": "Channel",
      "ca-qf2-value": "Telegram Mini App",
      "ca-qf3-label": "Integration",
      "ca-qf3-value": "Binotel API 4.0 — only",
      "ca-qf4-label": "AI",
      "ca-qf4-value": "Whisper + Claude · Anthropic",
      "ca-orbit-1": "AI · Call scoring",
      "ca-orbit-1m": "Whisper + Claude",
      "ca-orbit-2": "Operators · ranked",
      "ca-orbit-2m": "Best operator named",
      "ca-orbit-3": "Lost deal · caught",
      "ca-orbit-3a": "Interested",
      "ca-orbit-3b": "no close",
      "ca-mockup-cap": "Preview · actual interface",
      "ca-pain-sec": "What changes",
      "ca-pain-title-1": "Before Call Analytics",
      "ca-pain-title-2": "After.",
      "ca-pain-sub": "The everyday pain of call-center quality control. Solved — automatically, every night.",
      "ca-pain-1b": "Listening to random calls",
      "ca-pain-1a": "AI picks only what matters",
      "ca-pain-2b": "No idea who handled the call",
      "ca-pain-2a": "Operator named on every call",
      "ca-pain-3b": "Bad calls slip through",
      "ca-pain-3a": "Low scores float to the top",
      "ca-pain-4b": "Lost-interest clients invisible",
      "ca-pain-4a": "Lost deals flagged",
      "ca-pain-5b": "Hours of manual QA",
      "ca-pain-5a": "Nightly auto-analysis",
      "ca-pain-6b": "\"Who is my best agent?\"",
      "ca-pain-6a": "Best operator of the day",
      "ca-feat-sec": "Inside Call Analytics",
      "ca-feat-headline": "Every call worth hearing, scored and sorted into one screen.",
      "ca-f1-tag": "Daily summary",
      "ca-f1-title": "Day summary — the floor in one screen",
      "ca-f1-body": "Average score for the day, how many calls were good, average and bad, and how many interested clients were lost. The whole shift, at a glance.",
      "ca-f1-li1": "Average score 0–10",
      "ca-f1-li2": "Good / average / bad split",
      "ca-f1-li3": "Lost-deal counter",
      "ca-f2-tag": "Triage",
      "ca-f2-title": "Only what's worth your time",
      "ca-f2-body": "At the end of the day the list keeps just the calls you should actually hear — the single best one and every bad or lost-deal call. The rest is hidden.",
      "ca-f2-li1": "Best call + all problem calls",
      "ca-f2-li2": "Reason to listen on every card",
      "ca-f2-li3": "No more scrolling 200 calls",
      "ca-f3-tag": "Operators",
      "ca-f3-title": "Every call tied to its operator",
      "ca-f3-body": "The operator's name comes straight from Binotel and sits on every call. A per-operator board shows the weakest on top and crowns the best of the day.",
      "ca-f3-li1": "Name on each call (from Binotel)",
      "ca-f3-li2": "Average score per operator",
      "ca-f3-li3": "Best operator of the day",
      "ca-f4-tag": "Killer feature",
      "ca-f4-title": "Recording to score — fully automatic",
      "ca-f4-body": "The bot pulls the recording from Binotel, transcribes it locally with Whisper (audio never leaves the server), and Claude scores the operator 0–10 with a written breakdown. No one presses play.",
      "ca-f4-li1": "Local Whisper transcription · ru / kk",
      "ca-f4-li2": "Claude scores script, politeness, closing",
      "ca-f4-li3": "Summary, client need and objections",
      "ca-f4-li4": "\"Next step secured\" — yes / no",
      "ca-f5-tag": "Lost deals",
      "ca-f5-title": "Lost-deal radar",
      "ca-f5-body": "The AI catches the worst miss in sales: a client who was clearly interested, but the operator never closed on a next step. Those calls get flagged so you can coach and call back.",
      "ca-f5-li1": "Interest level read from the talk",
      "ca-f5-li2": "Next-step check, yes / no",
      "ca-f5-li3": "Flag on every missed deal",
      "ca-f6-tag": "Auto-triage",
      "ca-f6-title": "Smart nightly triage",
      "ca-f6-body": "You don't analyse 300 calls a day. Each night the bot picks the suspicious ones — very short calls, clients who called back, plus a fair sample per operator — within a daily limit. Cheap, and it still catches the problems.",
      "ca-f6-li1": "Runs automatically every night",
      "ca-f6-li2": "Short · repeat · per-operator sample",
      "ca-f6-li3": "Daily limit keeps cost in check",
      "ca-onb-sec": "Onboarding",
      "ca-onb-heading": "We set it up for you.",
      "ca-onb-sub": "No installs, no app store. Message us and we'll connect Call Analytics to your Binotel and configure everything.",
      "ca-step1-title": "Write to us",
      "ca-step1-body": "Message @wiregroup in Telegram and tell us a bit about your call center.",
      "ca-step2-title": "We connect Binotel",
      "ca-step2-body": "We link it to your Binotel telephony via API 4.0 and tune call scoring — nothing to set up on your side.",
      "ca-step3-title": "You get the reports",
      "ca-step3-body": "From the next morning you receive scored calls and a daily summary, right in Telegram.",
      "ca-trust-title": "Privacy · the details",
      "ca-trust-1": "Audio is transcribed locally with Whisper — the recording never leaves the server for a third-party transcription service.",
      "ca-trust-2": "Binotel keys are stored encrypted (Fernet). The only paid external API is Anthropic, for scoring the text.",
      "ca-trust-3": "Mini App auth via Telegram initData (HMAC signature). No separate passwords.",
      "ca-trust-4": "Backend in FastAPI on Render, integration with Binotel API 4.0.",
      "ca-for-title": "Built for",
      "ca-for-1": "Call-center and sales-department owners",
      "ca-for-2": "Supervisors who coach operators",
      "ca-for-3": "Any team on Binotel telephony",
      "ca-why-title": "Only for Binotel",
      "ca-why-1": "Connects to Binotel PBX via API 4.0",
      "ca-why-2": "Pulls answered calls and recordings",
      "ca-why-3": "Operator names read from Binotel",
      "ca-why-4": "Other telephony is not supported",
      "ca-open-eyebrow": "Catalogue · 03 / Call Analytics · v1.0",
      "ca-open-head-1": "Hear only the calls that matter",
      "ca-open-head-2": "tonight.",
      "ca-open-sub": "Message us on Telegram — we'll discuss the details and connect it to your Binotel.",
      "ca-cta-channel": "Telegram",
      "ca-cta-massive": "Discuss details",
      "ca-foot-1": "Binotel only",
      "ca-foot-2": "Audio stays local",
      "ca-foot-3": "No app to install",
      "ca-contact-sec": "Contact · Wire Group",
      "ca-contact-headline": "For pilots, integrations, or a quiet conversation about your call-center.",
      "ca-contact-sub": "Reach the studio directly. We answer within one working day.",
      "ca-wa": "Direct line",
      // Topbar / menu
      status: "Open for restaurant partners · 2026",
      menu: "Menu",
      close: "Close",
      "menu-eyebrow": "Navigation — Wire Group",
      "nav-home": "Home",
      "nav-manifesto": "Manifesto",
      "nav-catalogue": "Catalogue",
      "nav-product": "iikoAnalytics",
      "nav-features": "Features",
      "nav-open": "Open the bot",
      "nav-catalog": "Catalogue",
      "nav-contact": "Contact us",
      direct: "Direct",
      channels: "Channels",
      meridian: "Meridian",

      // Hero
      "hero-eyebrow": "Wire Group · Makers of iikoAnalytics · Almaty, KZ",
      "slogan-1": "Makers of iikoAnalytics — restaurant intelligence in Telegram.",
      "slogan-2": "Quiet software for the restaurant trade.",
      "slogan-3": "An independent studio shipping intelligent products.",
      "meta-discipline": "Discipline",
      "meta-discipline-value": "Restaurant analytics · AI · Telegram",
      "meta-index": "Flagship",
      "meta-location": "Location",
      "logo-label": "Logo",
      "slogan-label": "Slogan",
      scroll: "Scroll",

      // Brand page hero + manifesto + catalogue + approach + contact
      "brand-eyebrow": "Independent · Almaty · MMXXVI",
      "brand-tagline": "A studio for intelligent products.",
      "brand-cta-1": "See the catalogue",
      "brand-cta-2": "Contact",
      "manifesto-kicker": "— Manifesto · 01",
      "manifesto-1": "We make tools",
      "manifesto-2": "that disappear",
      "manifesto-3": "into the work.",
      "manifesto-foot": "Few products. Held longer. Refined deeper.",
      "catalogue-kicker": "— Catalogue · 2026",
      "catalogue-title-1": "Built by hand,",
      "catalogue-title-2": "released slowly.",
      "tile-1-desc": "A Telegram Mini App that puts your iiko restaurant in your pocket. Revenue, stop-list, invoice OCR, an AI analyst — all without a laptop.",
      "tile-cta": "See the product",
      "tile-2-status": "In progress",
      "tile-2-name": "Untitled",
      "tile-2-desc": "Forthcoming work — details when it's ready.",
      "tile-3-status": "Reserved",
      "tile-3-name": "For the right idea.",
      "tile-3-desc": "An open slot. We take on one project at a time.",
      "approach-kicker": "— How we work",
      "approach-title-1": "Three principles.",
      "approach-title-2": "No fourth.",
      "p1-name": "Few",
      "p1-body": "Few products. Held longer. Refined deeper. We release fewer and keep them in our hands.",
      "p2-name": "Quiet",
      "p2-body": "No theatrics. The product speaks first. Interfaces step back so the work can step forward.",
      "p3-name": "Whole",
      "p3-body": "Engineered, not assembled. Every component shaped to its purpose, nothing borrowed by default.",
      "contact-brand-kicker": "— Reach out",
      "contact-brand-title-1": "Let's",
      "contact-brand-title-2": "talk.",
      "contact-brand-sub": "For pilots, integrations or commissions. One working day reply.",
      "pillar-direct": "Direct line",
      "back-wg": "Wire Group · Catalogue 01",

      // Product intro
      "product-title": "Product / iikoAnalytics",
      "product-kicker": "For restaurants on iiko POS · v1.0 · 2026",
      "product-headline-1": "Your restaurant",
      "product-headline-2": "in Telegram.",
      "product-sub": "iiko analytics in your pocket. No laptop, no logins, no desktop. Open Telegram — see revenue, average check, supplier invoices and cash shifts. An AI analyst tells you what is wrong with the day, in plain language.",
      "cta-open-bot": "Open the bot",
      "cta-how-works": "See what's inside",
      "qf-1-label": "Setup", "qf-1-value": "3 steps · ~90 seconds",
      "qf-2-label": "Channel", "qf-2-value": "Telegram Mini App",
      "qf-3-label": "Integration", "qf-3-value": "iiko Server REST 9.x",
      "qf-4-label": "AI", "qf-4-value": "Claude Sonnet · Anthropic",
      "mockup-caption": "Preview · actual interface",
      // Live demo phone
      "demo-note": "Live demo · the app's real tabs",
      "demo-tab-1": "Home", "demo-tab-2": "Sales", "demo-tab-3": "Staff",
      "demo-tab-4": "Costs", "demo-tab-5": "Year/year", "demo-tab-6": "Shifts",
      "demo-cap-1": "Revenue, average check and guests — the moment you open Telegram.",
      "demo-cap-2": "Where the money comes from: channels and top dishes.",
      "demo-cap-3": "Who sells — and who is on shift right now.",
      "demo-cap-4": "Foodcost, invoices and write-offs, under control.",
      "demo-cap-5": "This June against last June. Growth you can see.",
      "demo-cap-6": "Cash shifts and discrepancies. Theft has nowhere to hide.",
      "demo-s1-rev": "Revenue · today", "demo-s1-check": "Avg. check", "demo-s1-guests": "Guests", "demo-s1-forecast": "Day forecast",
      "demo-s2-channels": "Channels · today", "demo-s2-hall": "Dine-in", "demo-s2-delivery": "Delivery", "demo-s2-pickup": "Pickup",
      "demo-s2-top": "Top dishes", "demo-s2-d1": "Ribeye steak", "demo-s2-d2": "Tom yum", "demo-s2-d3": "BBQ burger",
      "demo-s3-onshift": "On shift now", "demo-s3-rank": "Waiters · revenue",
      "demo-s3-n1": "Aigerim", "demo-s3-n2": "Damir", "demo-s3-n3": "Aliya",
      "demo-s4-food": "Foodcost", "demo-s4-inv": "Invoices · 7 days", "demo-s4-wo": "Write-offs · week", "demo-s4-last": "Last · Moloko Dom",
      "demo-s5-head": "June · year over year", "demo-s5-check": "Avg. check", "demo-s5-guests": "Guests",
      "demo-s6-shift": "Shift № 142 · closed", "demo-s6-disc": "Cash discrepancy", "demo-s6-wd": "Withdrawals · 2",
      "demo-s6-note": "Every tenge accounted for.",
      "orbit-ai-label": "AI · Invoice OCR",
      "orbit-ai-meta": "Claude · ~2 s",
      "orbit-net-label": "5 Branches · Live",
      "orbit-net-meta": "Merged in one view",
      "orbit-price-label": "Price · Watch",
      "orbit-price-name": "Milk",

      // Pain / Solution

      // Features
      "features-title": "Inside iikoAnalytics",
      "features-headline": "Four things it does for you, every day.",
      "ch-1-title": "Revenue in your pocket",
      "ch-1-body": "Open Telegram — revenue, average check and guests across every branch. No laptop, no VPN, no office.",
      "ch-1-tag": "Live \u00b7 30 s",
      "ch-2-title": "Invoices: photo \u2192 iiko",
      "ch-2-body": "Shoot the supplier invoice. AI reads the items and prices, you confirm — and it is posted into iiko. Seconds instead of half an hour.",
      "ch-2-tag": "OCR \u00b7 ~2 s",
      "ch-3-title": "Cash control — theft protection",
      "ch-3-body": "Cash shifts, withdrawals and discrepancies are visible the same evening. A missing sum can no longer hide until the end of the month.",
      "ch-3-tag": "Shift audit",
      "ch-4-title": "Year over year",
      "ch-4-body": "Weeks, months and channels against last year. Growth and dips without a single Excel sheet.",
      "ch-4-tag": "Built in",
      "chapters-more": "And that is not all — inside: stop-list, ABC analysis, foodcost, guest reviews, payroll, branch comparison. All in one app.",

      // Onboarding
      "onboarding-title": "Onboarding",
      "onboarding-heading": "Three steps. Under two minutes.",
      "onboarding-sub": "No installs, no app store, no password to remember. iikoAnalytics lives inside Telegram.",
      "step-1-title": "Server URL", "step-1-body": "Paste your iiko server URL (the one your iikoOffice uses).",
      "step-2-title": "Login", "step-2-body": "Your existing iiko username. No new accounts to create.",
      "step-3-title": "Password → branches", "step-3-body": "Enter password, pick the branches you want to see. Done.",

      // Trust / For / Why
      "trust-title": "Security · the details",
      "trust-1": "Branch isolation lives in iiko itself — a manager sees only their location, an owner sees the network. No manual role-mapping.",
      "trust-2": "Full logout wipes credentials from the database and the device.",
      "trust-3": "Mini App auth via Telegram initData (HMAC signature). No separate passwords.",
      "trust-4": "Backend in FastAPI, persistent on Render, integration with iiko Server REST 9.x.",
      "for-title": "Built for",
      "for-1": "Restaurant chain owners (2–20 locations)",
      "for-2": "Managers running a single venue",
      "for-3": "Accountants and buyers who post invoices",
      "why-title": "Why Telegram, not an app",
      "why-1": "No installs · no App Store / Google Play",
      "why-2": "Works on iOS, Android, desktop — same UI",
      "why-3": "Notifications already built in",
      "why-4": "Sign-in in one tap, via your Telegram account",

      // Big CTA
      "open-eyebrow": "Catalogue · 01 / iikoAnalytics · v1.0",
      "open-head-1": "Open your dashboard",
      "open-head-2": "now.",
      "open-sub": "Three steps to connect. Works in any Telegram client. Free to try.",
      "cta-channel": "Telegram Mini App",
      "cta-massive-text": "Open in Telegram",
      "open-foot-1": "No app to install",
      "open-foot-2": "No card on file",
      "open-foot-3": "Cancel anytime",

      // Contact / footer
      "contact-title": "Contact · Wire Group",
      "contact-headline": "For pilots, integrations, or a quiet conversation about your restaurant.",
      "contact-sub": "Reach the studio directly. We answer within one working day.",
      "footer-note": "An independent studio · makers of iikoAnalytics",
      "footer-build": "Hand built · No templates",

      // Catalogue page
      "catalog-title-1": "The",
      "catalog-title-2": "catalogue.",
      "catalog-intro": "iikoAnalytics is the first volume. Each entry is a self-contained product, made by Wire Group.",
      "catalog-meta-volume": "Volume",
      "catalog-meta-volume-value": "01 · 2026 edition",
      "catalog-meta-status": "Status",
      "catalog-meta-status-value": "iikoAnalytics live · accepting pilots",
      "catalog-meta-update": "Last revised",
      "filter-all": "All",
      "filter-ai": "Restaurant tech",
      "filter-soft": "Software",
      "filter-soon": "Forthcoming",
      "card-1-name": "iikoAnalytics",
      "card-1-desc": "Telegram Mini App for iiko restaurants — revenue, stop-list, invoice OCR, AI analyst.",
      "card-2-name": "AI Services",
      "card-2-desc": "Bots, sites and process automation under one roof. Built bespoke for your business in 1–4 weeks.",
      "card-2-cat": "02 / AI services",
      "card-2-badge": "Services · 2026",
      "card-2-arrow": "Volume 02 ⟶",
      "card-3-name": "Untitled",
      "card-3-desc": "Forthcoming work — a quiet software companion in development.",
      "card-4-name": "Reserved",
      "card-4-desc": "An open slot, kept for the right idea.",
      "back-home": "Return to index",
      "back-catalog": "Return to catalogue",

      // AI services section
      "ai-kicker": "Catalogue · Volume 02 · Services",
      "ai-headline-1": "Bespoke AI solutions",
      "ai-headline-2": "for your business.",
      "ai-sub": "We pick and build the right tool for your task — bot, site, or process automation.",
      "ai-1-time": "2–3 weeks",
      "ai-1-title": "Turnkey AI bot",
      "ai-1-body": "A chat-bot for WhatsApp and Telegram. Takes orders, answers 24/7, integrates with CRM or your POS.",
      "ai-2-time": "3–4 weeks",
      "ai-2-title": "Site + AI bot",
      "ai-2-body": "A catalogue site or landing — together with a chat-bot that converts visitors into orders.",
      "ai-3-time": "1–2 weeks",
      "ai-3-title": "Process automation",
      "ai-3-body": "Notifications, sales funnels, integrations between systems. Saves hours per week.",
      "ai-cta-title": "Didn't find your case?",
      "ai-cta-sub": "Describe your task — we'll propose a solution.",
      "ai-cta-btn": "Write to us",

      // AI service modals
      "ai-more": "Details ⟶",
      "ai-pack-label": "Package",
      "ai-includes": "What's included",
      "ai-stack": "Stack & integrations",
      "ai-out-label": "Deliverables",
      "ai-modal-cta": "Discuss your project",

      "ai-1-list-1": "Conversation flow tailored to your business — 5–8 branches",
      "ai-1-list-2": "WhatsApp Business API and Telegram setup",
      "ai-1-list-3": "Knowledge base — bot answers from your documents and FAQ",
      "ai-1-list-4": "Order intake — handoff to a manager or fully automated",
      "ai-1-list-5": "CRM integration (amoCRM, Bitrix24) or iiko / POS",
      "ai-1-list-6": "Admin panel — view dialogues, edit answers, export leads",
      "ai-1-list-7": "Two weeks of post-launch tuning",
      "ai-1-out": "A working bot on both channels, full access, brief onboarding for your team.",

      "ai-2-list-1": "Custom design on-brand — mobile-first",
      "ai-2-list-2": "Responsive build, on-page SEO, sub-2s page speed",
      "ai-2-list-3": "Embedded AI assistant — answers visitors directly in the site chat",
      "ai-2-list-4": "Lead-capture flows — contact and order details",
      "ai-2-list-5": "One bot across all channels — site, WhatsApp, Telegram",
      "ai-2-list-6": "CRM integration — every lead lands in your pipeline",
      "ai-2-list-7": "Domain, hosting and analytics — all configured",
      "ai-2-out": "Live website, embedded AI assistant, connected CRM lead pipeline.",

      "ai-3-list-1": "Workflow audit — find what eats time in your team",
      "ai-3-list-2": "Notifications to Telegram, email or Slack on the right events",
      "ai-3-list-3": "Integrations across CRM, POS, sheets, accounting (Make / n8n)",
      "ai-3-list-4": "Auto-funnels — follow-ups, reminders, status changes",
      "ai-3-list-5": "Daily and weekly digests — sales, stock, KPI in one report",
      "ai-3-list-6": "Webhook triggers tied to your existing systems",
      "ai-3-list-7": "Documentation — your team can edit flows themselves",
      "ai-3-out": "Live automations, full documentation, one week of post-launch support.",
    },
    ru: {
      // ===== Call Analytics (catalogue 03) =====
      "ca-back": "Wire Group · Каталог 03",
      "ca-kicker": "Для колл-центров на Binotel · v1.0 · 2026",
      "ca-head-1": "Твой колл-центр —",
      "ca-head-2": "на тихом автопилоте.",
      "ca-sub": "Каждый отвеченный звонок ИИ расшифровывает и оценивает — никто не нажимает «play». Плохие звонки и упущенные сделки всплывают наверх, у каждого оператора есть оценка, а лучший оператор дня назван. Больше не нужно гадать, какой звонок слушать. Работает только с телефонией Binotel.",
      "ca-cta-open": "Обсудить детали",
      "ca-cta-inside": "Что внутри",
      "ca-qf1-label": "Подключение",
      "ca-qf1-value": "2 ключа · ~60 секунд",
      "ca-qf2-label": "Канал",
      "ca-qf2-value": "Telegram Mini App",
      "ca-qf3-label": "Интеграция",
      "ca-qf3-value": "Только Binotel API 4.0",
      "ca-qf4-label": "ИИ",
      "ca-qf4-value": "Whisper + Claude · Anthropic",
      "ca-orbit-1": "ИИ · Оценка звонка",
      "ca-orbit-1m": "Whisper + Claude",
      "ca-orbit-2": "Операторы · рейтинг",
      "ca-orbit-2m": "Лучший оператор назван",
      "ca-orbit-3": "Упущенная сделка",
      "ca-orbit-3a": "Заинтересован",
      "ca-orbit-3b": "не закрыли",
      "ca-mockup-cap": "Превью · реальный интерфейс",
      "ca-pain-sec": "Что меняется",
      "ca-pain-title-1": "До Call Analytics",
      "ca-pain-title-2": "После.",
      "ca-pain-sub": "Ежедневная боль контроля качества в колл-центре. Решена — автоматически, каждую ночь.",
      "ca-pain-1b": "Слушаешь случайные звонки",
      "ca-pain-1a": "ИИ выбирает только важное",
      "ca-pain-2b": "Непонятно, кто вёл звонок",
      "ca-pain-2a": "Оператор указан на каждом звонке",
      "ca-pain-3b": "Плохие звонки проскакивают",
      "ca-pain-3a": "Низкие оценки — наверху",
      "ca-pain-4b": "Упущенные клиенты не видны",
      "ca-pain-4a": "Упущенные сделки помечены",
      "ca-pain-5b": "Часы ручного контроля",
      "ca-pain-5a": "Ночной авто-разбор",
      "ca-pain-6b": "«Кто мой лучший оператор?»",
      "ca-pain-6a": "Сотрудник дня",
      "ca-feat-sec": "Внутри Call Analytics",
      "ca-feat-headline": "Каждый звонок, который стоит послушать, — оценён и собран в один экран.",
      "ca-f1-tag": "Сводка дня",
      "ca-f1-title": "Сводка дня — смена на одном экране",
      "ca-f1-body": "Средняя оценка за день, сколько звонков хорошие, средние и плохие, и сколько заинтересованных клиентов упустили. Вся смена — с одного взгляда.",
      "ca-f1-li1": "Средняя оценка 0–10",
      "ca-f1-li2": "Деление: хорошо / средне / плохо",
      "ca-f1-li3": "Счётчик упущенных сделок",
      "ca-f2-tag": "Отбор",
      "ca-f2-title": "Только то, что стоит твоего времени",
      "ca-f2-body": "В конце дня в списке остаются лишь те звонки, которые стоит послушать — один лучший и все плохие или упущенные. Остальное скрыто.",
      "ca-f2-li1": "Лучший звонок + все проблемные",
      "ca-f2-li2": "Причина прослушать на каждой карточке",
      "ca-f2-li3": "Не нужно листать 200 звонков",
      "ca-f3-tag": "Операторы",
      "ca-f3-title": "Каждый звонок привязан к оператору",
      "ca-f3-body": "Имя оператора берётся прямо из Binotel и стоит на каждом звонке. Рейтинг по операторам показывает слабых сверху и венчает лучшего за день.",
      "ca-f3-li1": "Имя на каждом звонке (из Binotel)",
      "ca-f3-li2": "Средняя оценка по оператору",
      "ca-f3-li3": "Сотрудник дня",
      "ca-f4-tag": "Killer-функция",
      "ca-f4-title": "От записи до оценки — полностью автоматически",
      "ca-f4-body": "Бот берёт запись из Binotel, расшифровывает её локально через Whisper (аудио не покидает сервер), и Claude оценивает оператора 0–10 с письменным разбором. Никто не нажимает «play».",
      "ca-f4-li1": "Локальная расшифровка Whisper · ru / kk",
      "ca-f4-li2": "Claude оценивает скрипт, вежливость, закрытие",
      "ca-f4-li3": "Итог, потребность и возражения клиента",
      "ca-f4-li4": "«Договорились о след. шаге» — да / нет",
      "ca-f5-tag": "Упущенные сделки",
      "ca-f5-title": "Радар упущенных сделок",
      "ca-f5-body": "ИИ ловит худший промах в продажах: клиент явно заинтересован, но оператор не закрыл на следующий шаг. Такие звонки помечаются, чтобы можно было разобрать и перезвонить.",
      "ca-f5-li1": "Уровень интереса считывается из разговора",
      "ca-f5-li2": "Проверка следующего шага, да / нет",
      "ca-f5-li3": "Метка на каждой упущенной сделке",
      "ca-f6-tag": "Авто-отбор",
      "ca-f6-title": "Умный ночной отбор",
      "ca-f6-body": "Ты не разбираешь 300 звонков в день. Каждую ночь бот выбирает подозрительные — очень короткие звонки, перезвонивших клиентов и честную выборку по операторам — в рамках дневного лимита. Дёшево и всё равно ловит проблемы.",
      "ca-f6-li1": "Запускается автоматически каждую ночь",
      "ca-f6-li2": "Короткие · повторные · выборка по оператору",
      "ca-f6-li3": "Дневной лимит держит расходы под контролем",
      "ca-onb-sec": "Подключение",
      "ca-onb-heading": "Подключим за вас.",
      "ca-onb-sub": "Без установок и магазинов приложений. Напишите нам — подключим Call Analytics к вашему Binotel и всё настроим.",
      "ca-step1-title": "Напишите нам",
      "ca-step1-body": "Напишите @wiregroup в Telegram и коротко расскажите про ваш кол-центр.",
      "ca-step2-title": "Подключаем Binotel",
      "ca-step2-body": "Подключаем к вашей телефонии Binotel через API 4.0 и настраиваем оценку звонков — с вашей стороны настраивать ничего не нужно.",
      "ca-step3-title": "Получаете отчёты",
      "ca-step3-body": "Со следующего утра получаете оценённые звонки и сводку за день прямо в Telegram.",
      "ca-trust-title": "Приватность · детали",
      "ca-trust-1": "Аудио расшифровывается локально через Whisper — запись не уходит в сторонний сервис распознавания.",
      "ca-trust-2": "Ключи Binotel хранятся в зашифрованном виде (Fernet). Единственный платный внешний API — Anthropic, для оценки текста.",
      "ca-trust-3": "Авторизация Mini App через Telegram initData (подпись HMAC). Без отдельных паролей.",
      "ca-trust-4": "Бэкенд на FastAPI на Render, интеграция с Binotel API 4.0.",
      "ca-for-title": "Для кого",
      "ca-for-1": "Владельцы колл-центров и отделов продаж",
      "ca-for-2": "Супервайзеры, обучающие операторов",
      "ca-for-3": "Любая команда на телефонии Binotel",
      "ca-why-title": "Только для Binotel",
      "ca-why-1": "Подключается к АТС Binotel через API 4.0",
      "ca-why-2": "Берёт отвеченные звонки и записи",
      "ca-why-3": "Имена операторов — из Binotel",
      "ca-why-4": "Другая телефония не поддерживается",
      "ca-open-eyebrow": "Каталог · 03 / Call Analytics · v1.0",
      "ca-open-head-1": "Слушай только те звонки, что важны",
      "ca-open-head-2": "уже сегодня ночью.",
      "ca-open-sub": "Напишите нам в Telegram — обсудим детали и подключим к вашему Binotel.",
      "ca-cta-channel": "Telegram",
      "ca-cta-massive": "Обсудить детали",
      "ca-foot-1": "Только Binotel",
      "ca-foot-2": "Аудио остаётся локально",
      "ca-foot-3": "Без установки приложений",
      "ca-contact-sec": "Контакт · Wire Group",
      "ca-contact-headline": "Для пилотов, интеграций или спокойного разговора о твоём колл-центре.",
      "ca-contact-sub": "Свяжись со студией напрямую. Отвечаем в течение одного рабочего дня.",
      "ca-wa": "Прямая линия",
      // Topbar / menu
      status: "Открыты для ресторанных партнёров · 2026",
      menu: "Меню",
      close: "Закрыть",
      "menu-eyebrow": "Навигация — Wire Group",
      "nav-home": "Главная",
      "nav-manifesto": "Манифест",
      "nav-catalogue": "Каталог",
      "nav-product": "iikoAnalytics",
      "nav-features": "Возможности",
      "nav-open": "Открыть бота",
      "nav-catalog": "Каталог",
      "nav-contact": "Связаться с нами",
      direct: "Прямая связь",
      channels: "Каналы",
      meridian: "Время",

      // Hero
      "hero-eyebrow": "Wire Group · Создатели iikoAnalytics · Алматы, Казахстан",
      "slogan-1": "Создатели iikoAnalytics — аналитика ресторана в Telegram.",
      "slogan-2": "Тихое программное обеспечение для ресторанного бизнеса.",
      "slogan-3": "Независимая студия умных продуктов.",
      "meta-discipline": "Направление",
      "meta-discipline-value": "Аналитика ресторанов · AI · Telegram",
      "meta-index": "Флагман",
      "meta-location": "Локация",
      "logo-label": "Логотип",
      "slogan-label": "Слоган",
      scroll: "Скролл",

      // Brand page hero + manifesto + catalogue + approach + contact
      "brand-eyebrow": "Независимая студия · Алматы · MMXXVI",
      "brand-tagline": "Студия умных продуктов.",
      "brand-cta-1": "Открыть каталог",
      "brand-cta-2": "Контакты",
      "manifesto-kicker": "— Манифест · 01",
      "manifesto-1": "Мы создаём инструменты,",
      "manifesto-2": "которые исчезают",
      "manifesto-3": "в самой работе.",
      "manifesto-foot": "Мало продуктов. Дольше в руках. Глубже отшлифованы.",
      "catalogue-kicker": "— Каталог · 2026",
      "catalogue-title-1": "Сделано вручную,",
      "catalogue-title-2": "выпущено не спеша.",
      "tile-1-desc": "Telegram Mini App, который кладёт ваш iiko-ресторан в карман. Выручка, стоп-лист, OCR накладных, AI-аналитик — без ноутбука.",
      "tile-cta": "Открыть продукт",
      "tile-2-status": "В работе",
      "tile-2-name": "Без названия",
      "tile-2-desc": "Будущая работа — детали, когда продукт будет готов.",
      "tile-3-status": "Зарезервировано",
      "tile-3-name": "Для правильной идеи.",
      "tile-3-desc": "Открытый слот. Мы делаем по одному проекту за раз.",
      "approach-kicker": "— Как мы работаем",
      "approach-title-1": "Три принципа.",
      "approach-title-2": "Без четвёртого.",
      "p1-name": "Мало",
      "p1-body": "Мало продуктов. Дольше в наших руках. Глубже отшлифованы. Выпускаем меньше — сопровождаем дольше.",
      "p2-name": "Тихо",
      "p2-body": "Без театра. Сначала говорит продукт. Интерфейс отходит на шаг назад, чтобы работа вышла вперёд.",
      "p3-name": "Целиком",
      "p3-body": "Сконструировано, а не собрано. Каждый компонент создан под свою цель, ничего по умолчанию.",
      "contact-brand-kicker": "— Связаться",
      "contact-brand-title-1": "Давайте",
      "contact-brand-title-2": "поговорим.",
      "contact-brand-sub": "Для пилотов, интеграций и заказов. Ответ в течение одного рабочего дня.",
      "pillar-direct": "Прямая линия",
      "back-wg": "Wire Group · Каталог 01",

      // Product intro
      "product-title": "Продукт / iikoAnalytics",
      "product-kicker": "Для ресторанов на iiko · v1.0 · 2026",
      "product-headline-1": "Ваш ресторан",
      "product-headline-2": "в Telegram.",
      "product-sub": "Аналитика iiko в кармане. Без ноутбука, без логинов, без десктопа. Открыл Telegram — видишь выручку, средний чек, стоп-лист, накладные. AI-аналитик подскажет, что не так с днём, простым языком.",
      "cta-open-bot": "Открыть бота",
      "cta-how-works": "Посмотреть, что внутри",
      "qf-1-label": "Подключение", "qf-1-value": "3 шага · ~90 секунд",
      "qf-2-label": "Канал", "qf-2-value": "Telegram Mini App",
      "qf-3-label": "Интеграция", "qf-3-value": "iiko Server REST 9.x",
      "qf-4-label": "AI", "qf-4-value": "Claude Sonnet · Anthropic",
      "mockup-caption": "Превью · реальный интерфейс",
      // Живое демо
      "demo-note": "Живое демо · реальные вкладки приложения",
      "demo-tab-1": "Главная", "demo-tab-2": "Продажи", "demo-tab-3": "Персонал",
      "demo-tab-4": "Расходы", "demo-tab-5": "Год/год", "demo-tab-6": "Смены",
      "demo-cap-1": "Выручка, средний чек и гости — сразу, как открыли Telegram.",
      "demo-cap-2": "Откуда деньги: каналы продаж и топ-блюда.",
      "demo-cap-3": "Кто продаёт — и кто сейчас на смене.",
      "demo-cap-4": "Фудкост, накладные и списания — под контролем.",
      "demo-cap-5": "Этот июнь против прошлого. Рост видно сразу.",
      "demo-cap-6": "Кассовые смены и расхождения. Краже негде спрятаться.",
      "demo-s1-rev": "Выручка · сегодня", "demo-s1-check": "Средний чек", "demo-s1-guests": "Гостей", "demo-s1-forecast": "Прогноз на день",
      "demo-s2-channels": "Каналы · сегодня", "demo-s2-hall": "Зал", "demo-s2-delivery": "Доставка", "demo-s2-pickup": "Самовывоз",
      "demo-s2-top": "Топ-блюда", "demo-s2-d1": "Стейк рибай", "demo-s2-d2": "Том ям", "demo-s2-d3": "Бургер BBQ",
      "demo-s3-onshift": "Сейчас на смене", "demo-s3-rank": "Официанты · выручка",
      "demo-s3-n1": "Айгерим", "demo-s3-n2": "Дамир", "demo-s3-n3": "Алия",
      "demo-s4-food": "Фудкост", "demo-s4-inv": "Накладные · 7 дней", "demo-s4-wo": "Списания · неделя", "demo-s4-last": "Последняя · Молочный дом",
      "demo-s5-head": "Июнь · год к году", "demo-s5-check": "Средний чек", "demo-s5-guests": "Гостей",
      "demo-s6-shift": "Смена № 142 · закрыта", "demo-s6-disc": "Расхождение по кассе", "demo-s6-wd": "Изъятия · 2",
      "demo-s6-note": "Виден каждый тенге.",
      "orbit-ai-label": "AI · Накладные",
      "orbit-ai-meta": "Claude · ~2 с",
      "orbit-net-label": "5 филиалов · live",
      "orbit-net-meta": "Свод одним кликом",
      "orbit-price-label": "Цена · алерт",
      "orbit-price-name": "Молоко",

      // Pain / Solution

      // Features
      "features-title": "Внутри iikoAnalytics",
      "features-headline": "Четыре вещи, которые он делает за вас каждый день.",
      "ch-1-title": "Выручка в кармане",
      "ch-1-body": "Открыли Telegram — выручка, средний чек и гости по всем точкам. Без ноутбука, VPN и офиса.",
      "ch-1-tag": "Live \u00b7 30 с",
      "ch-2-title": "Накладные: фото \u2192 iiko",
      "ch-2-body": "Сфотографируйте накладную поставщика. AI распознаёт позиции и цены, вы подтверждаете — и она уже в iiko. Секунды вместо получаса.",
      "ch-2-tag": "OCR \u00b7 ~2 с",
      "ch-3-title": "Контроль кассы — защита от краж",
      "ch-3-body": "Кассовые смены, изъятия и расхождения видны в тот же вечер. Недостача больше не прячется до конца месяца.",
      "ch-3-tag": "Аудит смен",
      "ch-4-title": "Год к году",
      "ch-4-body": "Недели, месяцы и каналы против прошлого года. Рост и провалы — без единой таблицы Excel.",
      "ch-4-tag": "Встроено",
      "chapters-more": "И это не всё — внутри: стоп-лист, ABC-анализ, фудкост, отзывы гостей, зарплаты, сравнение точек. Всё в одном приложении.",

      // Onboarding
      "onboarding-title": "Подключение",
      "onboarding-heading": "Три шага. Меньше двух минут.",
      "onboarding-sub": "Без установок, без app store, без новых паролей. iikoAnalytics живёт внутри Telegram.",
      "step-1-title": "URL сервера", "step-1-body": "Вставьте URL вашего iiko-сервера (тот, что использует iikoOffice).",
      "step-2-title": "Логин", "step-2-body": "Ваш существующий логин iiko. Никаких новых аккаунтов.",
      "step-3-title": "Пароль → филиалы", "step-3-body": "Введите пароль, выберите филиалы. Готово.",

      // Trust / For / Why
      "trust-title": "Безопасность · детали",
      "trust-1": "Изоляция филиалов на уровне самого iiko — менеджер видит только свою точку, владелец — всю сеть. Без ручных ролей.",
      "trust-2": "Полный логаут стирает учётные данные из базы и устройства.",
      "trust-3": "Авторизация Mini App через Telegram initData (HMAC-подпись). Без отдельных паролей.",
      "trust-4": "Бэкенд на FastAPI, persistent на Render, интеграция с iiko Server REST 9.x.",
      "for-title": "Сделано для",
      "for-1": "Владельцев ресторанных сетей (2–20 точек)",
      "for-2": "Управляющих одного заведения",
      "for-3": "Бухгалтеров и закупщиков, проводящих накладные",
      "why-title": "Почему Telegram, а не приложение",
      "why-1": "Без установок · без App Store / Google Play",
      "why-2": "Работает на iOS, Android, desktop — одинаково",
      "why-3": "Уведомления уже встроены",
      "why-4": "Вход в один тап через Telegram-аккаунт",

      // Big CTA
      "open-eyebrow": "Каталог · 01 / iikoAnalytics · v1.0",
      "open-head-1": "Откройте свою панель",
      "open-head-2": "сейчас.",
      "open-sub": "Три шага для подключения. Работает в любом Telegram-клиенте. Бесплатный пробный период.",
      "cta-channel": "Telegram Mini App",
      "cta-massive-text": "Открыть в Telegram",
      "open-foot-1": "Без установки",
      "open-foot-2": "Без карты",
      "open-foot-3": "Отмена в любой момент",

      // Contact / footer
      "contact-title": "Контакты · Wire Group",
      "contact-headline": "Для пилотов, интеграций или тихой беседы о вашем ресторане.",
      "contact-sub": "Свяжитесь со студией напрямую. Отвечаем в течение одного рабочего дня.",
      "footer-note": "Независимая студия · создатели iikoAnalytics",
      "footer-build": "Сделано вручную · Без шаблонов",

      // Catalogue page
      "catalog-title-1": "",
      "catalog-title-2": "Каталог.",
      "catalog-intro": "iikoAnalytics — первый том. Каждая запись — самостоятельный продукт Wire Group.",
      "catalog-meta-volume": "Том",
      "catalog-meta-volume-value": "01 · Издание 2026",
      "catalog-meta-status": "Статус",
      "catalog-meta-status-value": "iikoAnalytics запущен · пилоты открыты",
      "catalog-meta-update": "Последнее обновление",
      "filter-all": "Все",
      "filter-ai": "Ресторанный tech",
      "filter-soft": "Софт",
      "filter-soon": "В разработке",
      "card-1-name": "iikoAnalytics",
      "card-1-desc": "Telegram Mini App для ресторанов на iiko — выручка, стоп-лист, OCR накладных, AI-аналитик.",
      "card-2-name": "AI-услуги",
      "card-2-desc": "Боты, сайты и автоматизация процессов в одном месте. Делаем под твой бизнес за 1–4 недели.",
      "card-2-cat": "02 / AI-услуги",
      "card-2-badge": "Услуги · 2026",
      "card-2-arrow": "Том 02 ⟶",
      "card-3-name": "Без названия",
      "card-3-desc": "Будущая работа — тихий софт-компаньон в разработке.",
      "card-4-name": "Зарезервировано",
      "card-4-desc": "Свободный слот для правильной идеи.",
      "back-home": "Вернуться на главную",
      "back-catalog": "Вернуться в каталог",

      // AI services
      "ai-kicker": "Каталог · Том 02 · Услуги",
      "ai-headline-1": "Индивидуальные AI-решения",
      "ai-headline-2": "для бизнеса.",
      "ai-sub": "Подберём и создадим решение под вашу задачу — бот, сайт или автоматизация процессов.",
      "ai-1-time": "2–3 недели",
      "ai-1-title": "AI-бот под ключ",
      "ai-1-body": "Чат-бот для WhatsApp и Telegram. Принимает заказы, отвечает 24/7, интегрируется с CRM или кассой.",
      "ai-2-time": "3–4 недели",
      "ai-2-title": "Сайт + AI-бот",
      "ai-2-body": "Сайт-каталог или лендинг — вместе с чат-ботом, который превращает посетителей в заказы.",
      "ai-3-time": "1–2 недели",
      "ai-3-title": "Автоматизация процессов",
      "ai-3-body": "Уведомления, воронки, интеграции между системами. Экономит часы в неделю.",
      "ai-cta-title": "Не нашли свой случай?",
      "ai-cta-sub": "Опишите задачу — мы предложим решение.",
      "ai-cta-btn": "Написать нам",

      // AI service modals
      "ai-more": "Подробнее ⟶",
      "ai-pack-label": "Пакет",
      "ai-includes": "Что входит",
      "ai-stack": "Стек и интеграции",
      "ai-out-label": "На выходе",
      "ai-modal-cta": "Обсудить задачу",

      "ai-1-list-1": "Сценарии диалога под ваш бизнес — 5–8 веток",
      "ai-1-list-2": "Подключение WhatsApp Business API и Telegram",
      "ai-1-list-3": "База знаний — бот отвечает по вашим документам и FAQ",
      "ai-1-list-4": "Приём заказов — передача менеджеру или автообработка",
      "ai-1-list-5": "Интеграция с CRM (amoCRM, Bitrix24) или iiko / POS",
      "ai-1-list-6": "Админ-панель — диалоги, правки ответов, выгрузка лидов",
      "ai-1-list-7": "Две недели сопровождения после запуска",
      "ai-1-out": "Рабочий бот в обоих каналах, доступы, краткое обучение команды.",

      "ai-2-list-1": "Дизайн под ваш бренд — mobile-first",
      "ai-2-list-2": "Адаптивная вёрстка, базовое SEO, скорость до 2 секунд",
      "ai-2-list-3": "Встроенный AI-ассистент — отвечает в чате на сайте",
      "ai-2-list-4": "Сценарии сбора лидов — контакт и состав заказа",
      "ai-2-list-5": "Один бот на все каналы — сайт, WhatsApp, Telegram",
      "ai-2-list-6": "Интеграция с CRM — каждый лид сразу в воронке",
      "ai-2-list-7": "Домен, хостинг, аналитика — всё настроено",
      "ai-2-out": "Работающий сайт, AI-ассистент в чате, подключённая CRM.",

      "ai-3-list-1": "Аудит процессов — находим, где теряете время",
      "ai-3-list-2": "Уведомления в Telegram, email или Slack по событиям",
      "ai-3-list-3": "Интеграции CRM, кассы, таблиц, бухгалтерии (Make / n8n)",
      "ai-3-list-4": "Автоворонки — напоминания, follow-up, смена статусов",
      "ai-3-list-5": "Дневные и недельные отчёты — продажи, склад, KPI в одном письме",
      "ai-3-list-6": "Webhook-триггеры к вашим текущим системам",
      "ai-3-list-7": "Документация — команда сможет править процессы сама",
      "ai-3-out": "Работающие сценарии, документация, неделя поддержки после запуска.",
    }
  };

  /* ----------- Page entrance ----------- */
  // No loading screen: fade the page in and stage the hero reveals
  // as soon as the document is ready. This is the transition into the site.
  const enter = () => {
    requestAnimationFrame(() => document.body.classList.add("is-ready"));
  };
  if (document.readyState === "complete" || document.readyState === "interactive") {
    enter();
  } else {
    window.addEventListener("DOMContentLoaded", enter);
  }
  // Safety net so the page never stays hidden if events are missed.
  window.addEventListener("load", enter);
  setTimeout(enter, 1200);

  /* ----------- Custom cursor ----------- */
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (dot && ring && window.matchMedia("(min-width: 901px)").matches) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let dx = mx, dy = my;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
    });
    const animateCursor = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      dot.style.transform  = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      const kind = el.getAttribute("data-cursor");
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
        if (kind === "view") document.body.classList.add("cursor-view");
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover", "cursor-view");
      });
    });
  }

  /* ----------- Menu ----------- */
  const menu = document.getElementById("menu");
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  const closeMenu = () => menu?.classList.remove("is-open");
  menuOpen?.addEventListener("click", () => menu?.classList.add("is-open"));
  menuClose?.addEventListener("click", closeMenu);
  document.querySelectorAll("[data-menu-link]").forEach((link) => {
    link.addEventListener("click", () => setTimeout(closeMenu, 150));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ----------- Language toggle ----------- */
  const langToggle = document.getElementById("langToggle");
  const html = document.documentElement;
  const applyLang = (lang) => {
    const dict = i18n[lang];
    if (!dict) return;
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    const cur = langToggle?.querySelector(".lang-current");
    const oth = langToggle?.querySelector(".lang-other");
    if (cur) cur.textContent = lang === "en" ? "EN" : "RU";
    if (oth) oth.textContent = lang === "en" ? "RU" : "EN";
    localStorage.setItem("wg-lang", lang);
    document.dispatchEvent(new CustomEvent("wg:langchange", { detail: { lang } }));
  };

  const savedLang = localStorage.getItem("wg-lang") || "en";
  applyLang(savedLang);

  langToggle?.addEventListener("click", () => {
    const next = html.getAttribute("data-lang") === "en" ? "ru" : "en";
    if (langToggle) {
      langToggle.style.opacity = "0";
      setTimeout(() => {
        applyLang(next);
        langToggle.style.opacity = "1";
      }, 220);
    }
  });

  /* ----------- Clocks ----------- */
  const menuClock = document.getElementById("menuClock");
  const footerTime = document.getElementById("footerTime");
  const tick = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    if (menuClock) menuClock.textContent = `${hh} : ${mm} : ${ss}`;
    if (footerTime) footerTime.textContent = `${hh}:${mm} LOCAL`;
  };
  tick();
  setInterval(tick, 1000);

  /* ----------- iikoAnalytics · live demo phone ----------- */
  const demoPhone = document.getElementById("demoPhone");
  if (demoPhone) {
    const screens = Array.from(demoPhone.querySelectorAll(".demo-screen"));
    const tabs = Array.from(demoPhone.querySelectorAll(".ph-tab"));
    const track = demoPhone.querySelector(".ph-tabs-track");
    const steps = Array.from(document.querySelectorAll(".demo-step"));
    const caption = document.getElementById("demoCaption");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let demoIdx = 0;
    let demoTimer = null;

    const showScreen = (n) => {
      demoIdx = (n + screens.length) % screens.length;
      screens.forEach((s, i) => s.classList.toggle("is-active", i === demoIdx));
      tabs.forEach((t, i) => t.classList.toggle("is-active", i === demoIdx));
      steps.forEach((s, i) => s.classList.toggle("is-active", i === demoIdx));
      if (track && tabs[demoIdx]) {
        const viewport = track.parentElement.clientWidth;
        const max = Math.max(0, track.scrollWidth - viewport);
        const offset = Math.max(0, Math.min(tabs[demoIdx].offsetLeft - 4, max));
        track.style.transform = `translateX(${-offset}px)`;
      }
      if (caption) {
        const key = `demo-cap-${demoIdx + 1}`;
        caption.setAttribute("data-i18n", key);
        const dict = i18n[html.getAttribute("data-lang")] || i18n.en;
        if (dict[key]) caption.textContent = dict[key];
      }
    };
    const stopDemo = () => { if (demoTimer) { clearInterval(demoTimer); demoTimer = null; } };
    const startDemo = () => {
      if (reducedMotion) return;
      stopDemo();
      demoTimer = setInterval(() => showScreen(demoIdx + 1), 3600);
    };

    steps.forEach((s, i) => s.addEventListener("click", () => { showScreen(i); startDemo(); }));
    demoPhone.addEventListener("mouseenter", stopDemo);
    demoPhone.addEventListener("mouseleave", startDemo);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopDemo(); else startDemo();
    });

    showScreen(0);
    startDemo();
  }

  /* ----------- Lightweight reveals via IntersectionObserver -----------
     Replaces GSAP + Lenis. One observer, one shared CSS class — cheap. */
  if ("IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".section-header, .feature-card, .pain-row, .chapter, .chapters-more, " +
      ".price-row, .price-note, .review-slot, " +
      ".channel, .product-card, .steps li, .trust-block, .for-block, .why-block, " +
      ".product-intro-meta, .product-mockup, .features-headline, .pain-header, .open-inner"
    );
    revealTargets.forEach((el) => el.classList.add("reveal-in"));

    // Stagger repeated rows for visual rhythm
    document.querySelectorAll(".features-grid .feature-card").forEach((el, i) => {
      el.style.setProperty("--reveal-i", i);
    });
    document.querySelectorAll(".pain-list .pain-row").forEach((el, i) => {
      el.style.setProperty("--reveal-i", i);
    });
    document.querySelectorAll(".chapters .chapter, .review-slots .review-slot").forEach((el, i) => {
      el.style.setProperty("--reveal-i", i % 6);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // No IO support — show everything immediately
    document.querySelectorAll(".reveal-in").forEach((el) => el.classList.add("is-revealed"));
  }

  /* ----------- Smooth anchor for menu links ----------- */
  document.querySelectorAll("a[href^=\"#\"]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ----------- Filter chips on catalog ----------- */
  document.querySelectorAll(".filter-tags button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement?.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
})();
