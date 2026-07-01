# Site Humanize & iikoAnalytics Conversion Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the iikoAnalytics page a short, price-anchored conversion page with a live auto-cycling phone demo, and strip the most template-AI markers from index.html.

**Architecture:** Static site, no build step. All changes in `iikoanalytics.html`, `index.html`, `style.css`, `main.js`. Bilingual copy goes through the existing flat `i18n` dictionary in `main.js` (`en` and `ru` objects, keys bound via `data-i18n`). The hero phone mockup on iikoanalytics.html becomes the live demo (one phone on the page, not two — deviation from spec's separate demo section, agreed rationale: avoids a redundant second phone and shortens the page further).

**Tech Stack:** Vanilla HTML/CSS/JS. Verification via `python3 -m http.server` + Playwright browser tools (screenshots in both languages).

**Design-system rules (from existing style.css):** colors stay as-is; `mono` class = JetBrains Mono labels; `serif-italic` = Cormorant accents; section headers use `.section-header` with `.section-index / .section-title / .section-rule`; new CSS appended to style.css in a clearly-commented block per section.

## Global Constraints

- Currency: tenge, formatted `₸ 300 000` (space-separated thousands).
- Prices: setup ~~₸ 400 000~~ → **₸ 300 000** once; support ~~₸ 50 000~~ → **₸ 30 000 / мес**.
- Demo phone: exactly 6 screens mirroring real app tabs — Главная, Продажи, Персонал, Расходы, Год/год, Смены. **No AI-advice screen.**
- All new visible copy has both `en` and `ru` i18n entries.
- Colors and fonts unchanged.
- Commit after each task with a descriptive message.

---

### Task 1: Live demo phone in the iikoAnalytics hero

**Files:**
- Modify: `iikoanalytics.html` (hero phone screen, lines ~202–268)
- Modify: `style.css` (append `.demo-*` block)
- Modify: `main.js` (i18n keys + autocycle logic)

**Interfaces:**
- Produces: `#demoPhone` container with 6 `.demo-screen[data-screen]` panes, `.demo-rail` step list with 6 `.demo-step[data-step]` buttons; `initDemoPhone()` invoked on `body.page-iiko` (page already has this class or use presence of `#demoPhone`).

**Behavior spec:**
- Screens cycle automatically every ~3.5 s; active screen fades/slides in (CSS transition on `.is-active`).
- The 6 tab names render as a vertical/horizontal step rail next to/under the phone; active step highlighted in sync; clicking a step jumps to that screen and restarts the timer; hovering the phone pauses the cycle.
- Respect `prefers-reduced-motion`: no auto-cycling, rail still clickable.

**Screen content (RU shown; EN mirrors):**
1. Главная — Выручка сегодня `₸ 4 281 600` ▲ 12.4% + sparkline; Средний чек `₸ 9 240`; Гостей `463`; Прогноз на день `₸ 5 130 000`.
2. Продажи — Каналы: Зал 62% / Доставка 28% / Самовывоз 10% (bars); Топ-блюда: Стейк рибай `₸ 384 000`, Том ям `₸ 291 500`, Бургер BBQ `₸ 240 800`.
3. Персонал — На смене 6; рейтинг: Айгерим `₸ 612 400`, Дамир `₸ 548 200`, Алия `₸ 493 700`.
4. Расходы — Фудкост 31.2% ▼ 1.4%; Накладных за неделю 14; последняя: Молочный дом `₸ 16 400`; Списания `₸ 42 300`.
5. Год/год — Июнь: `₸ 96.4M` vs `₸ 81.7M` (+18%) — paired bars; Средний чек +9%; Гостей +6%.
6. Смены — Смена №142 закрыта; Расхождение по кассе `− ₸ 8 500` (alert style); Изъятия `₸ 25 000` · 2 операции — подпись «виден каждый тенге».

**Steps:**
- [ ] Replace the static `.phone-screen` card stack (Revenue/Stop-list/AI cards) with 6 stacked `.demo-screen` panes reusing existing `.ph-card` styles; keep statusbar/header; replace decorative `.ph-tabs` with a live tab strip showing the active tab name.
- [ ] Add `.demo-rail` with the 6 steps + one-line captions under the mockup (replaces `.mockup-caption`).
- [ ] Append demo CSS to `style.css` (screen switching, rail states, reduced-motion guard).
- [ ] Add `initDemoPhone()` in `main.js` (interval, click-to-jump, hover pause) and i18n keys `demo-*` for tab names, captions and all screen labels (en+ru).
- [ ] Verify in browser: screens cycle, rail syncs, click jumps, RU/EN both complete.
- [ ] Commit: `iikoAnalytics: hero phone becomes live 6-tab demo`.

---

### Task 2: Editorial features + cut pain section

**Files:**
- Modify: `iikoanalytics.html` (delete `#pain` section; replace `#features` grid contents ~342–882)
- Modify: `style.css` (append `.chapters` block)
- Modify: `main.js` (i18n keys; delete now-unused `pain-*`, `feat-*` keys)

**Content — 4 chapters (editorial rows: big index, headline, 2 lines, hairline rule; no cards, no illustrations):**
1. «Выручка в кармане» — открыл Telegram — увидел выручку, чек, гостей по всем точкам. Без ноутбука и VPN. / EN: "Revenue in your pocket…"
2. «Накладные: фото → iiko» — сфотографировал накладную, AI распознал позиции и цены, вы проверили — и она в iiko. Секунды вместо получаса. 
3. «Контроль кассы — защита от краж» — кассовые смены, изъятия и расхождения видны сразу. Недостача не прячется до конца месяца.
4. «Год к году» — рост и провалы видно без Excel: недели, месяцы, каналы.

After chapters, one italic line: «И ещё внутри: стоп-лист, ABC-анализ, фудкост, отзывы гостей, зарплаты, сравнение точек — всё в одном приложении.» (en mirror), key `chapters-more`.

**Steps:**
- [ ] Delete `#pain` section markup; renumber `.section-index` values on remaining sections (features=03, pricing=04, reviews=05, onboarding=06, contact=07).
- [ ] Replace `.features-grid` (9 cards + SVGs) with `.chapters` list of 4 `.chapter` rows + `.chapters-more` line.
- [ ] Append chapter CSS (grid row: index / text; hairline top border; hover accent on index).
- [ ] Update i18n: add `ch-1-title`…`ch-4-body`, `chapters-more`; remove dead `pain-*` and `feat-*` keys from both dictionaries.
- [ ] Verify in browser both languages; page has no leftover empty section shells.
- [ ] Commit: `iikoAnalytics: 4 editorial chapters replace pain+features grid`.

---

### Task 3: Pricing section with anchor

**Files:**
- Modify: `iikoanalytics.html` (new `#pricing` section between chapters and reviews)
- Modify: `style.css` (append `.pricing` block)
- Modify: `main.js` (i18n `price-*` keys)

**Content:**
- Header: section-index 04, title «Цена» / "Pricing".
- Headline: «Одна цена. Всё включено.» / "One price. Everything included."
- Two price rows (not cards — same editorial language as chapters):
  - Внедрение под ключ: `₸ 400 000` (struck, muted) → `₸ 300 000` разово — интеграция с вашим iiko, настройка точек, обучение команды.
  - Поддержка и обновления: `₸ 50 000` (struck) → `₸ 30 000 / мес` — новые функции, мониторинг, помощь в чате.
- Caption mono: «Цена запуска · 2026» / "Launch pricing · 2026".
- Payback line: «Одна предотвращённая недостача по кассе — и месяц уже окупился.» / EN mirror.
- CTA row: primary → `https://t.me/wiregroup` «Подключить по цене запуска», secondary → `@wiredemobot` «Сначала попробовать демо».

**Steps:**
- [ ] Add `#pricing` section markup with struck anchors (`<s class="price-old">`), new prices large (Barlow Condensed display size), caption, payback line, CTA row.
- [ ] Append pricing CSS.
- [ ] Add i18n `price-*` keys (en+ru).
- [ ] Verify strikethroughs, tenge formatting `₸ 300 000`, both languages.
- [ ] Commit: `iikoAnalytics: launch pricing with anchored old prices`.

---

### Task 4: Testimonials placeholder «Первые рестораны»

**Files:**
- Modify: `iikoanalytics.html` (new `#reviews` section after pricing)
- Modify: `style.css` (append `.first-restaurants` block)
- Modify: `main.js` (i18n `rev-*` keys)

**Content:**
- Header: section-index 05, «Первые рестораны» / "First restaurants".
- Sub: «Продукт запущен в 2026. Здесь появятся отзывы первых команд — возможно, ваш.» / EN mirror.
- 3 styled empty quote slots: large Cormorant `„ "` mark, hairline frame, muted placeholder line («Отзыв готовится» / "Review in progress"), slot footer with dash for name/venue. Slots must look designed (reserved, not broken).
- Slot 3 variant = invitation: «Станьте первым — подключение по цене запуска» linking to `https://t.me/wiregroup`.

**Steps:**
- [ ] Add `#reviews` markup (3 slots, third is the CTA variant).
- [ ] Append CSS.
- [ ] Add i18n keys.
- [ ] Verify both languages; slots read as intentional placeholders.
- [ ] Commit: `iikoAnalytics: prepared testimonials section (First restaurants)`.

---

### Task 5: index.html de-AI pass

**Files:**
- Modify: `index.html` (manifesto section ~143–168, approach section ~267–311)
- Modify: `style.css` (small additions only if needed)
- Modify: `main.js` (i18n adjustments)

**Changes:**
- `#manifesto`: remove the decorative radial orb SVG (`.manifesto-bg`). Replace abstract copy «We make tools / that disappear / into the work» with concrete studio statement: «Мы делаем Telegram Mini Apps, которые заменяют ресторану ноутбук.» / EN: "We build Telegram Mini Apps that replace the laptop for restaurants and call-centers." Foot line: «3 живых продукта · Алматы · работаем с 2026» / "3 live products · Almaty · shipping since 2026".
- `#approach` («Three principles. No fourth.» + geometric glyphs): replace with a compact fact strip — no glyphs, no manifesto tone. Three concrete items in the existing grid: «iiko Server REST 9.x» — интеграция с кассой напрямую; «Claude AI» — накладные из фото в iiko за секунды; «Telegram» — без установки, работает на любом телефоне. Title becomes «Что под капотом» / "What's under the hood".
- Keep hero, catalogue tiles, contact, footer untouched (colors/typography constraint).

**Steps:**
- [ ] Edit `#manifesto` markup + i18n (`manifesto-*` keys reused with new copy; orb SVG deleted).
- [ ] Rework `#approach` markup + i18n (`p1-*`…`p3-*` keys reused with concrete copy; glyph SVGs deleted; adjust CSS if glyph removal breaks grid rhythm).
- [ ] Verify index in both languages; no leftover orb/glyph artifacts.
- [ ] Commit: `index: replace abstract manifesto/principles with concrete product facts`.

---

### Task 6: Full visual verification

**Steps:**
- [ ] Serve site: `python3 -m http.server 8090` in the project dir.
- [ ] Playwright: screenshot `index.html` and `iikoanalytics.html`, both EN and RU, desktop (1440) and mobile (390) widths; click through demo rail; confirm demo autocycles.
- [ ] Check console for JS errors.
- [ ] Fix anything found; final commit if fixes were needed.

## Self-review notes

- Spec coverage: demo (T1), chapters + cash-control + «и ещё» (T2), anchored pricing (T3), testimonials placeholder (T4), index de-AI (T5), verification (T6). Deviation from spec: demo lives in hero instead of a separate section (avoids two phones; page shorter) — flagged in Architecture.
- Onboarding section: kept as-is (security details support the sale); only its section index renumbers.
- Dead i18n keys (`pain-*`, `feat-*`) removed in T2 to keep main.js honest.
