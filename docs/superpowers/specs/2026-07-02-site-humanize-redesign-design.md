# Site humanize & iikoAnalytics conversion redesign — Design

Date: 2026-07-02
Status: Approved by owner (chat, 2026-07-02)

## Problem

The site reads as an AI-generated template: abstract manifesto copy, geometric
glyphs, decorative orbs, no product proof, no pricing. The iikoAnalytics page
is too long (9 large feature blocks) so visitors don't reach the contact
section. There are no testimonials yet, and no price anywhere.

Owner constraints:
- Keep the existing colors and typography.
- iikoAnalytics: add a prepared testimonials placeholder, anchored pricing
  (₸400 000 struck → ₸300 000 setup; ₸50 000 struck → ₸30 000/mo support),
  compact content so visitors scroll to the end.
- Replace the stop-list feature block with cash-control / theft-protection
  framing (the app's Смены tab: shifts, withdrawals, discrepancies).
- Add an auto-playing phone demo cycling through the real app's 6 tabs
  (Главная, Продажи, Персонал, Расходы, Год/год, Смены) using demo data taken
  from the real Mini App (`/Users/kiluazoldik/Desktop/Work/iiiko/index.html`).
  No AI-advice screen in the demo.

## iikoAnalytics page — new structure

Section order: Hero → Live demo → Features → Pricing → Testimonials
(placeholder) → Onboarding (short) → Contact. Roughly half the current length.

1. **Live demo phone.** CSS/JS phone mockup that auto-cycles through 6 screens
   mirroring the real app tabs, with realistic demo data (revenue, average
   check, top dishes, foodcost, cash discrepancies). Step captions beside the
   phone highlight in sync and are clickable to jump. Pauses on hover/
   interaction. Pure CSS/JS, no dependencies.
2. **Features — not cards.** 4 editorial "chapters" (large index number,
   headline, two lines of copy, hairline rule — magazine table-of-contents
   style):
   1. Выручка в кармане — в реальном времени.
   2. Накладные: фото → в iiko за секунды (OCR).
   3. Контроль кассы — защита от краж (смены, изъятия, расхождения).
   4. Год к году — рост и провалы видно сразу.
   Below, a single line: «И ещё внутри: стоп-лист, ABC-анализ, фудкост,
   отзывы гостей, зарплаты…».
3. **Pricing with anchor.** ~~₸ 400 000~~ → ₸ 300 000 turnkey setup;
   ~~₸ 50 000~~ → ₸ 30 000/mo support & updates. Caption «цена запуска 2026»
   (justifies the discount, adds urgency) plus a payback line («одна
   предотвращённая недостача — и месяц окупился»).
4. **Testimonials placeholder.** «Первые рестораны» section with styled empty
   slots for 2–3 future quotes and a CTA «Станьте первым — подключение по
   цене запуска». Owner pastes real quotes in later.

Removed/condensed: the 9 illustrated feature blocks, the long pain section,
the "open" section — folded into the chapters or cut.

## index.html — targeted de-AI pass

Keep colors, fonts, layout system. Replace the most template-AI markers with
concrete substance:
- Manifesto («tools that disappear») and «Three principles. No fourth.» with
  geometric glyphs → a short concrete block about what the studio actually
  ships (Telegram Mini Apps for restaurants and call-centers, 3 live
  products).
- Remove the decorative radial orb.

## Technical

All changes in existing files: `iikoanalytics.html`, `index.html`,
`style.css`, `main.js`. Bilingual EN/RU via the existing `data-i18n`
dictionary in `main.js`. Demo phone is vanilla CSS/JS.

## Success criteria

- iikoAnalytics page is roughly half as long and ends with price → reviews →
  contact.
- Demo phone cycles all 6 tabs unattended and survives clicks.
- Prices show the struck anchor exactly as specified, in tenge, in both
  languages.
- No layout/color regressions on either page; both languages render fully.
