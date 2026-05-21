# Vibecoding for Business School Students — Site Information Architecture

> A draft IA for the course website. Designed for **two audiences in one site**:
> a *linear learner* taking the course end-to-end, and a *returning reference user* looking up a specific concept or recipe.

---

## 1. Top-level navigation

Persistent header on every page:

| Nav item | URL | Purpose |
|---|---|---|
| Start here | `/start` | The hook. Module 0 — why Business School Students should care. |
| Course | `/course` | Linear curriculum, modules 1–9. |
| Use cases | `/cases` | Business cases organized by function. |
| Reference | `/reference` | Glossary, cheat sheets, atomic how-tos. (Stub — content planned.) |
| Pitfalls | `/pitfalls` | Common mistakes and how to fix them. |
| About | `/about` | Philosophy, how to use the site, contributing. |

Persistent footer: version/last-updated, About link.

---

## 2. Page tree

Pages marked ✅ are built and have content. Pages marked 🚧 are stubs or placeholders. Pages marked ❌ are planned but not yet created.

```
/                                  Home (hero + three doors: Start, Course, Use cases) ✅
├── /start                         Module 0 — Why this matters for Business School Students ✅
│
├── /course                        Course landing (syllabus, prerequisites, time estimates) ✅
│   ├── /course/01-talking-to-ai                                                           ✅
│   │   ├── /course/01-talking-to-ai/what-is-vibecoding                                   ✅
│   │   ├── /course/01-talking-to-ai/prompting-basics                                     ✅
│   │   └── /course/01-talking-to-ai/exercises                                            ✅
│   │
│   ├── /course/02-chat-to-agent                                                           🚧 index only
│   ├── /course/03-setup                                                                   🚧 index only
│   │   ├── /course/03-setup/install-claude-code                                          ❌ planned
│   │   ├── /course/03-setup/first-run                                                    ❌ planned
│   │   ├── /course/03-setup/appendix-opencode                                            ❌ planned
│   │   └── /course/03-setup/which-model                                                  ❌ planned
│   ├── /course/04-workflow                                                                🚧 index only
│   ├── /course/05-evaluating-output                                                       🚧 index only
│   ├── /course/06-limits-and-ethics                                                       🚧 index only
│   ├── /course/07-scaling                                                                 🚧 index only
│   │   (Module 8 is the /cases library; no separate /course/08 directory)
│   └── /course/09-capstone                                                                🚧 index only
│
├── /cases                         Use case library ✅
│   ├── /cases/marketing                                                                   ✅
│   │   ├── /cases/marketing/segmentation-from-csv    (fully written)                     ✅
│   │   │   └── customers.csv  (sample data)
│   │   ├── /cases/marketing/content-pipeline                                             ❌ coming soon
│   │   └── /cases/marketing/campaign-dashboard                                           ❌ coming soon
│   ├── /cases/finance                                                                     ✅
│   │   ├── /cases/finance/model-automation           (fully written)                     ✅
│   │   │   ├── trial_balance.csv  (sample data)
│   │   │   ├── account_mapping.csv  (sample data)
│   │   │   └── model.xlsx  (sample data)
│   │   ├── /cases/finance/document-analysis-10k                                          ❌ coming soon
│   │   └── /cases/finance/scenario-tool                                                  ❌ coming soon
│   ├── /cases/operations                                                                  🚧 index only
│   │   ├── /cases/operations/process-automation                                          ❌ coming soon
│   │   ├── /cases/operations/internal-tool                                               ❌ coming soon
│   │   └── /cases/operations/data-cleanup                                                ❌ coming soon
│   ├── /cases/sales                                                                       🚧 index only
│   │   ├── /cases/sales/crm-enrichment                                                   ❌ coming soon
│   │   ├── /cases/sales/outreach-personalization                                         ❌ coming soon
│   │   └── /cases/sales/support-triage                                                   ❌ coming soon
│   └── /cases/founder                                                                     🚧 index only
│       ├── /cases/founder/landing-page-mvp                                               ❌ coming soon
│       ├── /cases/founder/customer-interview-synthesis                                   ❌ coming soon
│       └── /cases/founder/prototype-app                                                  ❌ coming soon
│
├── /reference                     Lookup content: glossary, cheat sheets, how-tos        🚧 stub
├── /pitfalls                      Common mistakes log (5 starter entries)                ✅
└── /about                         Philosophy, how to use, contributing, build status      ✅
```

---

## 3. Per-page content template

Every **course module page** follows the same structure so students learn the rhythm:

1. **What you'll be able to do** (one sentence, in business terms)
2. **Why it matters** (2–3 sentences — tie to a real situation)
3. **Mental model** (the concept, taught before the mechanics)
4. **Walkthrough** (a worked example, end to end)
5. **Try it yourself** (exercise with a check-your-work answer)
6. **Next** (single, opinionated "next page" CTA)

Every **use case page** follows a parallel structure so students can compare across cases:

1. **The business decision** being supported
2. **Data available** (sample dataset linked / downloadable)
3. **The build** (step-by-step, with the actual prompts used)
4. **Working code** (copy-paste-ready)
5. **What good looks like** (how to know the output is right)
6. **Extensions** ("what would you change if…")
7. **Skills used** (links back into `/course` modules)

---

## 4. Module summaries

### Module 0 — Why Business School Students should care (`/start`)
Landing page with brief pitch. Sub-pages (demo reel, case vignettes) are planned but not yet built.

### Module 1 — Talking to AI (`/course/01-talking-to-ai`)
Fully written. Sub-pages: what-is-vibecoding, prompting-basics, exercises. Ends with a small artifact exercise (clean and summarize a messy CSV).

### Module 2 — From chat to agent (`/course/02-chat-to-agent`)
Index written. Sub-pages (agent-mental-model, worked-example, when-an-agent-helps) planned but not yet built.

### Module 3 — Setting up your workspace (`/course/03-setup`)
Index written. Sub-pages (install-claude-code, first-run, appendix-opencode, which-model) planned but not yet built.

### Module 4 — The vibecoding workflow (`/course/04-workflow`)
Index written. Sub-pages (plan-vs-execute, information-environment, context-engineering, version-safety, iterating) planned but not yet built.

### Module 5 — Knowing when to trust the output (`/course/05-evaluating-output`)
Index written. Sub-pages (checking-correctness, spotting-hallucinations, debugging-when-it-fails, when-to-stop-and-ask-an-engineer) planned but not yet built.

### Module 6 — Limits, risks, and responsibility (`/course/06-limits-and-ethics`)
Index written. Sub-pages (data-security, cost-awareness, academic-integrity, when-not-to-vibecode) planned but not yet built.

### Module 7 — Scaling up (`/course/07-scaling`)
Index written. Sub-pages (skills, subagents, hooks, agent-teams) planned but not yet built.

### Module 8 — Business use cases (`/cases`)
No separate `/course/08` directory. The `/cases` library serves this purpose directly and is linked from the course syllabus as Module 8.

### Module 9 — Capstone (`/course/09-capstone`)
Index written. Sub-pages (brief, rubric, peer-review) planned but not yet built.

---

## 5. Dual-mode design — how the same content serves both audiences

**Linear course mode.** A persistent left rail on `/course/*` pages shows the syllabus with progress indicators (visited / in-progress / completed via localStorage). Every page ends with a single "Next" CTA. No decision fatigue.

**Reference mode.** Top-level search bar (powered by something simple — Pagefind or Algolia). Every page carries metadata tags (`topic:`, `skill-level:`, `tool:`) that drive a filtered index under `/cases`. Cross-links are dense: a `/cases/finance/model-automation` page links back to the specific `/course/04-workflow/context-engineering` section it depends on.

---

## 6. Cross-cutting elements

**Mini-cases threaded through the course.** Modules 1, 4, and 7 each end with a mini-case (a stripped-down version of a `/cases` page) so the application thread runs through the whole curriculum, not just the end.

**"Skill chips" on every page.** Each page is tagged with the underlying skills it teaches or uses (e.g., `context-engineering`, `subagents`, `data-cleanup`). Clicking a chip lands on a filtered index of every page touching that skill — this is what makes reference mode actually work.

**Progress and bookmarking.** Lightweight, localStorage-only. No accounts in v1.

**Downloadable artifacts.** Every use case page offers a downloadable starter pack (sample data + a `CLAUDE.md` + a README). Lower friction = more students actually try it.

**Pitfalls log.** `/pitfalls` is a living page of common mistakes — each entry is short enough to scan in under a minute. Currently has 5 starter entries. Planned: individual sub-pages per pitfall with fuller examples.

---

## 7. URL conventions

- **Lowercase, hyphenated** (`/course/05-evaluating-output`, not `/course/Module5`).
- **Numeric prefixes on course modules only** (preserves order in URLs and file systems). Use cases are not numbered — they're meant to be entered laterally.
- **Stable slugs.** Once published, never rename. If a topic moves, redirect.
- **No dates in URLs.** Content is meant to evolve in place.
- **Case pages use `.html` extension** when they are sub-pages within a section folder (e.g., `segmentation-from-csv.html`); section index pages use `/index.html` (served at the directory URL).

---

## 8. What's intentionally NOT in v1

To keep scope honest:

- User accounts, logins, certificates.
- Comments or community features.
- Quizzes with auto-grading (write quizzes as exercises with answer keys instead).
- A custom CMS — author in markdown, render with a static site generator (Astro, Next.js, or Docusaurus all work).
- Video production beyond the demo reel.

These are all worth adding in v2 once the content is proven. Building them in v1 will delay launch by months and you won't know what students actually need until they use the thing.

---

## 9. Build status (as of 2026-05-20)

| Section | Status |
|---|---|
| Home `/` | ✅ Complete |
| Start `/start` | ✅ Index written; demo and vignette sub-pages not yet built |
| Course index `/course` | ✅ Complete |
| Module 1 `/course/01-talking-to-ai` | ✅ Fully written (3 sub-pages + index) |
| Modules 2–7, 9 | 🚧 Index pages written; sub-pages not yet built |
| Cases index `/cases` | ✅ Complete |
| Marketing cases | 🚧 1 of 3 cases fully written (`segmentation-from-csv`) |
| Finance cases | 🚧 1 of 3 cases fully written (`model-automation`) |
| Operations, Sales, Founder cases | 🚧 Index pages only; individual cases not yet built |
| Reference `/reference` | 🚧 Stub with planned sections listed |
| Pitfalls `/pitfalls` | ✅ Live with 5 starter entries |
| About `/about` | ✅ Complete |

**Suggested next build priorities:**
1. Sub-pages for Module 2 and Module 3 (the setup path — highest student need).
2. One additional case per function category to demonstrate breadth.
3. Module 5 sub-pages (trust/evaluation — do not pilot without these).
4. Fill in `/reference` glossary and cheat sheets.
