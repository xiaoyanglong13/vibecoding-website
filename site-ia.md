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

Persistent footer: search, version/last-updated, GitHub link (if open-sourced).

---

## 2. Page tree

```
/                                  Home (hero + three doors: Start, Course, Use cases)
├── /start                         Module 0 — Why this matters for Business School Students
│   ├── /start/demos               Demo reel (3 short videos)
│   └── /start/case-vignettes      Three short stories (consultant, PM, founder)
│
├── /course                        Course landing (syllabus, prerequisites, time estimates)
│   ├── /course/01-talking-to-ai
│   │   ├── /course/01-talking-to-ai/what-is-vibecoding
│   │   ├── /course/01-talking-to-ai/prompting-basics
│   │   └── /course/01-talking-to-ai/exercises
│   │
│   ├── /course/02-chat-to-agent
│   │   ├── /course/02-chat-to-agent/agent-mental-model
│   │   ├── /course/02-chat-to-agent/worked-example
│   │   └── /course/02-chat-to-agent/when-an-agent-helps
│   │
│   ├── /course/03-setup
│   │   ├── /course/03-setup/install-claude-code
│   │   ├── /course/03-setup/first-run
│   │   └── /course/03-setup/appendix-opencode
│   │
│   ├── /course/04-workflow
│   │   ├── /course/04-workflow/plan-vs-execute
│   │   ├── /course/04-workflow/information-environment
│   │   ├── /course/04-workflow/context-engineering
│   │   ├── /course/04-workflow/version-safety
│   │   └── /course/04-workflow/iterating
│   │
│   ├── /course/05-evaluating-output
│   │   ├── /course/05-evaluating-output/checking-correctness
│   │   ├── /course/05-evaluating-output/spotting-hallucinations
│   │   ├── /course/05-evaluating-output/debugging-when-it-fails
│   │   └── /course/05-evaluating-output/when-to-stop-and-ask-an-engineer
│   │
│   ├── /course/06-limits-and-ethics
│   │   ├── /course/06-limits-and-ethics/data-security
│   │   ├── /course/06-limits-and-ethics/cost-awareness
│   │   ├── /course/06-limits-and-ethics/academic-integrity
│   │   └── /course/06-limits-and-ethics/when-not-to-vibecode
│   │
│   ├── /course/07-scaling
│   │   ├── /course/07-scaling/skills
│   │   ├── /course/07-scaling/subagents
│   │   ├── /course/07-scaling/hooks
│   │   └── /course/07-scaling/agent-teams
│   │
│   ├── /course/08-use-cases       (overview / index; deep dives live under /cases)
│   │
│   └── /course/09-capstone
│       ├── /course/09-capstone/brief
│       ├── /course/09-capstone/rubric
│       └── /course/09-capstone/peer-review
│
└── /cases                         Use case library (the "spine")
    ├── /cases/marketing
    │   ├── /cases/marketing/segmentation-from-csv
    │   ├── /cases/marketing/content-pipeline
    │   └── /cases/marketing/campaign-dashboard
    ├── /cases/finance
    │   ├── /cases/finance/model-automation
    │   ├── /cases/finance/document-analysis-10k
    │   └── /cases/finance/scenario-tool
    ├── /cases/operations
    │   ├── /cases/operations/process-automation
    │   ├── /cases/operations/internal-tool
    │   └── /cases/operations/data-cleanup
    ├── /cases/sales
    │   ├── /cases/sales/crm-enrichment
    │   ├── /cases/sales/outreach-personalization
    │   └── /cases/sales/support-triage
    └── /cases/founder
        ├── /cases/founder/landing-page-mvp
        ├── /cases/founder/customer-interview-synthesis
        └── /cases/founder/prototype-app
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
Demo reel + three case vignettes. Goal: convert skepticism into curiosity in under 10 minutes. No setup, no concepts.

### Module 1 — Talking to AI (`/course/01-talking-to-ai`)
What vibecoding actually is and isn't. Prompting fundamentals. The difference between *chatting* and *building*. Ends with a small but real artifact (e.g., clean and summarize a messy CSV).

### Module 2 — From chat to agent (`/course/02-chat-to-agent`)
The bridge. What changes when the AI can read your files, run code, and act in loops. Mental model: an agent is a junior analyst with desktop access. One fully-worked example before any installation.

### Module 3 — Setting up your workspace (`/course/03-setup`)
Install Claude Code, account setup, first agent run. OpenCode lives in an appendix as the open-source alternative.

### Module 4 — The vibecoding workflow (`/course/04-workflow`)
The repeatable loop: plan before execute, set up your information environment (folders + CLAUDE.md), context engineering, version safety (git as save-points), and iterating when things go sideways.

### Module 5 — Knowing when to trust the output (`/course/05-evaluating-output`)
The single most important module. Checking correctness, spotting hallucinated APIs and fake data, debugging silent failures, when to stop and call a real engineer.

### Module 6 — Limits, risks, and responsibility (`/course/06-limits-and-ethics`)
Data security, cost awareness, academic integrity and attribution, and an honest "when vibecoding is the wrong tool" page.

### Module 7 — Scaling up (`/course/07-scaling`)
Skills, subagents, hooks, agent teams — each with a concrete business example, not a feature tour.

### Module 8 — Business use cases (`/course/08-use-cases` → `/cases`)
Index/landing for the case library. Organized by business function.

### Module 9 — Capstone (`/course/09-capstone`)
Real project of the student's choice. Brief, rubric, peer review, and a "ship it to someone who'll actually use it" requirement.

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

---

## 7. URL conventions

- **Lowercase, hyphenated** (`/course/05-evaluating-output`, not `/course/Module5`).
- **Numeric prefixes on course modules only** (preserves order in URLs and file systems). Use cases are not numbered — they're meant to be entered laterally.
- **Stable slugs.** Once published, never rename. If a topic moves, redirect.
- **No dates in URLs.** Content is meant to evolve in place.

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

## 9. Suggested build order

1. **Module 0 + one full use case.** This is the minimum viable site — enough to show a faculty sponsor or pilot with 2–3 students.
2. **Modules 1–4 + three use cases.** First teachable unit.
3. **Modules 5–6.** The trust/limits layer — don't ship the course to a real class without these.
4. **Module 7 + remaining use cases.** Depth and breadth.
5. **Module 9 capstone + final polish.** Ship.

Module 8's case library can grow continuously — treat it as a living section, not a fixed deliverable.
