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
│   │   ├── /course/01-talking-to-ai/what-is-an-llm                                       ✅
│   │   ├── /course/01-talking-to-ai/working-with-ai                                      ✅
│   │   ├── /course/01-talking-to-ai/modes-of-collaboration                               ✅
│   │   └── /course/01-talking-to-ai/case-study                                           ✅
│   │
│   ├── /course/02-chat-to-agent                                                           ✅
│   │   ├── /course/02-chat-to-agent/agent-mental-model                                    ✅
│   │   ├── /course/02-chat-to-agent/what-agents-unlock                                    ✅
│   │   └── /course/02-chat-to-agent/agent-harness                                         ✅
│   ├── /course/03-setup                                                                   🚧 5 of 7 sub-pages
│   │   ├── /course/03-setup/install-claude-code   (tool overview)                        ✅
│   │   ├── /course/03-setup/install-macos                                                ✅
│   │   ├── /course/03-setup/install-windows                                              ✅
│   │   ├── /course/03-setup/login                                                        ✅
│   │   ├── /course/03-setup/using-vscode                                                 ✅
│   │   ├── /course/03-setup/first-run                                                    ❌ planned
│   │   └── /course/03-setup/appendix-opencode                                            ❌ planned
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
│   │   │   ├── model_2026-03.xlsx  (sample data)
│   │   │   └── summary_2026-04.xlsx  (sample data)
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
│   ├── /cases/founder                                                                     🚧 index only
│   │   ├── /cases/founder/landing-page-mvp                                               ❌ coming soon
│   │   ├── /cases/founder/customer-interview-synthesis                                   ❌ coming soon
│   │   └── /cases/founder/prototype-app                                                  ❌ coming soon
│   └── /cases/people                                                                      ✅
│       └── /cases/people/event-recap-generator      (fully written)                      ✅
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
Fully written. Sub-pages: what-is-an-llm, working-with-ai, modes-of-collaboration, case-study. Ends with a small artifact exercise (clean and summarize a messy CSV).

### Module 2 — From chat to agent (`/course/02-chat-to-agent`)
Fully written. Sub-pages: agent-mental-model, what-agents-unlock, agent-harness.
what-agents-unlock is an introduction to vibecoding (what it is, its history, the
shift from implementing to directing) — replaces the earlier worked-example and
when-an-agent-helps sub-pages. Its forecasting walkthrough now shows a detailed,
iterative agentic prompt (initial ask → agent misstep → corrected follow-up)
rather than a one-shot goal, plus a small Python-vs-Claude-Code example
contrasting a written procedure with a stated objective; it ends with "Exercise:
What would you delegate?" agent-harness goes deeper on one principle
what-agents-unlock introduces: the harness (instructions, context, tools, and
boundaries around a model). It includes a minimal meeting-scheduling example, a
"Where is the harness?" section covering built-in vs. connected tools (including
MCP) and memory, and a concrete "setting up a price-tracking agent" example
showing what each harness part looks like in practice (a mock prompt window, a
folder/file tree, and a tool list); it no longer has its own closing exercise,
since it was redundant with what-agents-unlock's.

### Module 3 — Setting up your workspace (`/course/03-setup`)
Index written, ~90 minutes total. Restructured to mirror the page-by-page format of an external
reference guide (a Chinese-language textbook, `ai.lingnan.top` chapter 3 — Mac and Windows install
guides split into separate pages rather than combined), adapted to Claude Code only — no Opencode.
Five of seven sub-pages built, all revised multiple times since the initial build to add real
screenshots, worked examples, and reference-level step-by-step detail:
- **install-claude-code** — "Tool overview": an 8-row checklist (Xcode Command Line Tools,
  Homebrew, Node.js + npm, Git, Miniconda, Pandoc, VS Code, Claude Code) with columns Tool / What
  it's for / Mac (✓/✗) / Windows (✓/✗), plus prose on what each tool is and why it's needed,
  OS-agnostic. Ends with two cards forking to the OS-specific walkthroughs. Git and Miniconda in
  particular are installed ahead of when they're used (Module 4's version-safety page; the finance
  case's pandas/openpyxl script) so nothing requires a mid-course install later.
- **install-macos** — Mac-only, numbered Step 1–9 walkthrough: what a Terminal is (with a real
  screenshot) → operations table → Xcode CLT (exact size figures) → Homebrew (real
  `echo`/`source` PATH commands, a screenshot of brew.sh, a "which chip do I have" tip, `brew
  doctor`) → the combined `brew install` line for the rest → Claude Code → Git config (placeholder
  + a concrete Jamie Chen example + a "use your school email" tip for later GitHub linking) →
  Miniconda init → a trimmed final version-check list → an explicit Q&A-style FAQ (4 items,
  matching the reference's own troubleshooting section; the reference's Tsinghua-mirror workaround
  is deliberately dropped as China-specific and not relevant to this audience).
- **install-windows** — Windows-only, numbered Step 1–9 walkthrough, brought to parity with the
  macOS page's depth and reference 3.3's own granularity: what PowerShell is, shown in a mock
  `.prompt-window` box (no real Windows screenshot exists yet — deliberately not fabricated;
  candidates were listed for the user to capture later if wanted) → operations table (reference's
  own 4-row version) → a "Windows 10 vs. 11 terminal" tip → execution policy as explicit numbered
  sub-steps → each tool (Git, Node.js, Claude Code, VS Code, Miniconda, Pandoc) gets a "what it is
  and why" paragraph before its own numbered install steps → the same Git config example + tip as
  macOS → a 5-item Q&A FAQ (adds case-sensitivity and admin-rights items the macOS FAQ doesn't
  need).
- **login** — new page, no reference equivalent. Two options: Claude account login (a real
  screenshot of a successful `/login`; explicitly notes Claude Code requires at least a Pro plan —
  it does **not** work on the Free plan, and Pro rather than Max is what's recommended for this
  course) and an Anthropic Console API key as a fully spelled-out alternative — numbered steps to
  create a key, what an environment variable is, a session-only version, and a permanent version
  for both Mac (`~/.zshrc`, explained plainly, with a copy-pasteable `echo >>` command) and Windows
  (`SetEnvironmentVariable`), each with its own verify step.
- **using-vscode** — orientation to VS Code's interface, two recommended extensions (Office Viewer,
  Git Graph), opening a project folder, opening the integrated terminal, and launching Claude Code
  there as the module's real smoke test. Not revised since the initial build.

Both `install-claude-code.html` and `assets/styles.css` gained a `.callout.tip` variant (light blue,
distinct from the cream code blocks) — reusable sitewide for future "did you check X" reminders,
not just Module 3.

Sub-pages first-run and appendix-opencode are still planned but not yet built, and sit after
login/using-vscode in the page order rather than immediately after install-claude-code.

**Picking this up next:** install-windows still has no real Windows screenshots (the user said skip
for now — a prioritized shot list exists in this session's history if revisited). first-run and
appendix-opencode haven't been started. If either gets built, update this section and §2/§9 in the
same change per CLAUDE.md.

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

## 9. Build status (as of 2026-08-17)

| Section | Status |
|---|---|
| Home `/` | ✅ Complete |
| Start `/start` | ✅ Index written; demo and vignette sub-pages not yet built |
| Course index `/course` | ✅ Complete |
| Module 1 `/course/01-talking-to-ai` | ✅ Fully written (4 sub-pages + index) |
| Module 2 `/course/02-chat-to-agent` | ✅ Fully written (3 sub-pages + index) |
| Module 3 `/course/03-setup` | 🚧 5 of 7 sub-pages built (`install-claude-code`, `install-macos`, `install-windows`, `login`, `using-vscode`); `first-run` and `appendix-opencode` still planned |
| Modules 4–7, 9 | 🚧 Index pages written; sub-pages not yet built |
| Cases index `/cases` | ✅ Complete |
| Marketing cases | 🚧 1 of 3 cases fully written (`segmentation-from-csv`) |
| Finance cases | 🚧 1 of 3 cases fully written (`model-automation`) |
| People cases | 🚧 1 of 3 cases fully written (`event-recap-generator`) |
| Operations, Sales, Founder cases | 🚧 Index pages only; individual cases not yet built |
| Reference `/reference` | 🚧 Stub with planned sections listed |
| Pitfalls `/pitfalls` | ✅ Live with 5 starter entries |
| About `/about` | ✅ Complete |

**Suggested next build priorities:**
1. Remaining Module 3 sub-pages (`first-run`, `appendix-opencode`).
2. One additional case per function category to demonstrate breadth.
3. Module 5 sub-pages (trust/evaluation — do not pilot without these).
4. Fill in `/reference` glossary and cheat sheets.
