# Vibecoding for Business School Students — Site Information Architecture

> A draft IA for the course website. Designed for **two audiences in one site**:
> a *linear learner* taking the course end-to-end, and a *returning reference user* looking up a specific concept or recipe.

---

## 1. Top-level navigation

Persistent header on every page:

| Nav item | URL | Purpose |
|---|---|---|
| Start here | `/start` | The hook. Module 0 — why Business School Students should care. |
| Course | `/course` | Linear curriculum, modules 1–7. |
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
│   │   └── /course/01-talking-to-ai/use-case                                             ✅
│   │
│   ├── /course/02-chat-to-agent                                                           ✅
│   │   ├── /course/02-chat-to-agent/agent-mental-model                                    ✅
│   │   ├── /course/02-chat-to-agent/what-agents-unlock                                    ✅
│   │   └── /course/02-chat-to-agent/agent-harness                                         ✅
│   ├── /course/03-setup                                                                   ✅ all 7 sub-pages built
│   │   ├── /course/03-setup/why-move-beyond-browser                                       ✅
│   │   ├── /course/03-setup/install-claude-code   (setup overview)                       ✅
│   │   ├── /course/03-setup/install-macos                                                ✅
│   │   ├── /course/03-setup/install-windows                                              ✅
│   │   ├── /course/03-setup/login                                                        ✅
│   │   ├── /course/03-setup/using-vscode                                                 ✅
│   │   └── /course/03-setup/appendix-opencode                                            ✅
│   ├── /course/04-workflow                                                                ✅ all 8 sub-pages built
│   │   ├── /course/04-workflow/planning                                                  ✅
│   │   ├── /course/04-workflow/information-environment                                   ✅
│   │   ├── /course/04-workflow/specifying-the-task                                       ✅
│   │   ├── /course/04-workflow/verify-before-you-trust                                   ✅
│   │   ├── /course/04-workflow/memory                                                    ✅
│   │   ├── /course/04-workflow/helpful-tips                                              ✅
│   │   ├── /course/04-workflow/use-case-event-recap        (Use case I)                  ✅
│   │   ├── /course/04-workflow/use-case-model-automation    (Use case II)                ✅
│   │   └── /course/04-workflow/use-case-demand-forecast     (Use case III)               ✅
│   ├── /course/05-scaling                                                                 🚧 index only
│   └── /course/06-limits-and-ethics                                                       ✅ all 4 sub-pages built
│       ├── /course/06-limits-and-ethics/protect-the-information                          ✅
│       ├── /course/06-limits-and-ethics/control-agent-actions                            ✅
│       ├── /course/06-limits-and-ethics/real-cost                                        ✅
│       └── /course/06-limits-and-ethics/when-not-to-vibecode                             ✅
│   (Module 7 is the /cases library; no separate /course/07 directory)
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
│   ├── /cases/operations                                                                  ✅
│   │   ├── /cases/operations/demand-forecast-dashboard  (task + worked solution)        ✅
│   │   │   ├── demand-forecast-sample-solution.html  (the worked solution artifact)
│   │   │   ├── sales_history.csv      (sample data)
│   │   │   ├── product_catalog.csv    (sample data)
│   │   │   └── marketing_calendar.csv (sample data)
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

> **2026-08-19 renumbering:** the old Module 5, "Knowing when to trust the
> output" (`/course/05-evaluating-output`, index-only, never built), was
> dropped from the course entirely — its planned territory (checking
> correctness, spotting hallucinations) is now covered by Module 4's
> verify-before-you-trust page instead, so nothing was lost, just relocated.
> Modules 6–9 shifted down to fill the gap: old Module 6 (Limits, risks, and
> responsibility) → new Module 5; old Module 7 (Scaling up) → new Module 6;
> old Module 8 (Use cases / `/cases`, no directory) → new Module 7; old
> Module 9 (Capstone) → new Module 8. Directories were renamed to match
> (`06-limits-and-ethics` → `05-limits-and-ethics`, `07-scaling` →
> `06-scaling`, `09-capstone` → `08-capstone`) since none of those four had
> any sub-pages built yet — only their stub `index.html` moved. Every
> sidebar "All modules" list, `course/index.html`'s syllabus table, the home
> page's module count, and every prose cross-reference to a module by number
> sitewide were updated in the same pass; a couple of dangling case-page
> forward-references that pointed at the old Module 5 with no replacement
> topic (e.g. "the multi-audience version" in the event-recap case) were
> dropped rather than redirected, since nothing in the new numbering covers
> that specific idea. Total course time dropped from ~12 to ~11 hours at this
> point; module count from 9 to 8 (permanent — see below, this stayed 8 even
> after Module 5 got built out later the same day and time crept back to
> ~12 hours).

### Module 0 — Why Business School Students should care (`/start`)
Landing page with brief pitch. Sub-pages (demo reel, case vignettes) are planned but not yet built.

### Module 1 — Talking to AI (`/course/01-talking-to-ai`)
Fully written. Sub-pages: what-is-an-llm, working-with-ai, modes-of-collaboration, use-case (renamed from case-study 2026-08-21). Ends with a small artifact exercise (clean and summarize a messy CSV).

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
Index written, ~100 minutes total. Restructured to mirror the page-by-page format of an external
reference guide (a Chinese-language textbook, `ai.lingnan.top` chapter 3 — Mac and Windows install
guides split into separate pages rather than combined), with the main walkthrough adapted to Claude
Code only; the reference's own OpenCode content was held back for a closing appendix instead
(see appendix-opencode below). All seven sub-pages are now built, most revised multiple times since
the initial build to add real screenshots, worked examples, and reference-level step-by-step detail:
- **why-move-beyond-browser** — new page 1 (10 min), added 2026-08-21 ahead of the rest of the
  module. Motivates why this course moves from browser-based chat to a local agent workspace: what
  an agent needs a workspace for, graphical apps vs. terminal-based agents as the two common local
  options, a cross-ecosystem table (Anthropic/OpenAI/Google/OpenCode graphical vs. terminal
  products), and a table of terminal advantages (portability, transparency, flexibility, a clearer
  work environment) — closing with this course's own choice (Claude Code inside VS Code, with the
  Claude desktop app as a fallback). No reference-guide equivalent. Every other sub-page's sidebar,
  eyebrow page count, and next-cta was renumbered from a 6-page to a 7-page sequence to fit it in.
- **install-claude-code** — "Setup overview": an 8-row checklist (Xcode Command Line Tools,
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
  there as the module's real smoke test. Revised since the initial build: a screenshot of the
  integrated terminal open and ready was added before the final step, and Steps 4/6 got small
  wording tweaks. Its closing CTA now points forward to appendix-opencode instead of back to the
  module overview, since it's no longer the last page.
- **appendix-opencode** — optional closing page (10 min), no reference equivalent (drafted using
  `ai.lingnan.top` chapter 3, sections 3.1/3.5/3.6, cross-checked against opencode.ai's own docs,
  then trimmed and revised by the user through several rounds of hands-on testing). Frames OpenCode
  as a provider-agnostic, free-by-default alternative to Claude Code, via a comparison table (model
  support, getting started, cost, project features) plus four steps: install (Homebrew or npm),
  launch from a terminal (real screenshot of the launch screen), an **optional** `/connect` step to
  add a model provider — OpenCode Zen or the same Anthropic key from the login page — noting the
  default needs no login at all (real screenshot of the provider picker), and a "try a prompt" step
  using a live weather query as the smoke test (real screenshot of OpenCode web-searching and
  answering). Closes with a command-reference table and a next-cta forward to Module 4 (changed
  2026-08-19 from a "back to overview" link, at the user's request — it's the module's last page,
  so it should hand off like every other module's closing page does). Earlier
  drafts had a Build/Plan-mode explainer, an `@`/`!` shortcuts callout, and a closing "which tool
  should you use" wrap-up; the user cut all three during revision, so the page is now leaner than
  the other Module 3 pages — don't re-add them without checking first.

The planned **first-run** sub-page ("Your first agent run") was cut from the module rather than
built — Module 3's smoke test already lives at the end of using-vscode, and a separate page for it
was judged redundant. Module 3 was a complete 6-page sequence (appendix-opencode renumbered from
7 to 6 to fill the gap) until why-move-beyond-browser was added as a new page 1 on 2026-08-21,
making it a 7-page sequence; every sidebar, index card, and next-cta across the module was updated
to match both times.

Both `install-claude-code.html` and `assets/styles.css` gained a `.callout.tip` variant (light blue,
distinct from the cream code blocks) — reusable sitewide for future "did you check X" reminders,
not just Module 3. In practice, new tip/knowledge callouts on this site use `.callout.warn`
(light-yellow) instead, per user preference — see login.html's `/model`-switching tip for the
current pattern.

**Picking this up next:** install-windows still has no real Windows screenshots (the user said skip
for now — a prioritized shot list exists in this session's history if revisited). Module 3 itself is
fully built, now as a 7-page sequence as of 2026-08-21 — no open threads on it. Next build priorities
are listed in §9.

### Module 4 — The vibecoding workflow (`/course/04-workflow`)
Fully written and built 2026-08-19. A **ninth sub-page,
use-case-demand-forecast, was added 2026-08-27** as Use case III, taking the
module from 8 pages to 9 and from ~200 to ~320 min; every sidebar, eyebrow page
count, and next-cta across the module was renumbered from "of 8" to "of 9" in
the same pass, use-case-model-automation's closing CTA now points at page 9
instead of Module 5, and `course/index.html`'s syllabus row (200 → 320 min), its
"roughly twelve hours" lede (→ fourteen), and the home page's "~12 hours" card
(→ ~14) were all updated to match. The original 8 sub-pages (~200 min total — a
2026-08-21 planning.html/specifying-the-task.html experiment briefly moved an
"explore before you plan" section between the two pages before the user
rolled it all back the same day; see both bullets below), replacing
the earlier planned list (plan-vs-execute, information-environment,
context-engineering, version-safety, iterating) — version-safety and iterating
were dropped from the module entirely rather than deferred elsewhere. Index page
now uses the card-grid pattern (like Modules 1/2) instead of a stub bullet list,
and was revised again 2026-08-19 from a user-supplied draft: a sharper lede
and two framing paragraphs ("we move one level up: how to manage the work
itself" / small tasks vs. larger projects needing more structure) before
"What you'll be able to do" — no other course index page has paragraphs
ahead of that heading, but it's a legitimate one-off enhancement, not a
mistake, so don't "fix" it to match Modules 1/2's bare module-header→
What-you'll-be-able-to-do structure. (The draft also included a
Plan→Set up context→Specify→Build→Verify→Update memory→Repeat `<pre><code>`
loop between the two framing paragraphs and the heading; the user removed it
by hand in a follow-up edit, so it's gone again — don't re-add it.) The
draft's own first sentence ("Good
vibecoding is not about finding the perfect prompt. It is about managing...")
was rewritten into one em-dash-joined sentence to avoid the "X is not this,
it's that" construction CLAUDE.md disallows; the draft also carried stale
pre-renumber sidebar numbering (Module 5 "Trust the output", `06-limits-and-ethics`,
a hardcoded `class="active"`) which was **not** applied — the live sidebar was
already correct and untouched by this edit.
A 7th page, **verify-before-you-trust**, was inserted between specifying-the-task
and memory on 2026-08-19 — it covers checking output correctness, and is now
the *only* place that content lives: the old Module 5 it originally
overlapped with was dropped from the course later the same day (see the
renumbering note at the top of this section).
Sub-pages, in order (content revised again 2026-08-20 across all five
non-case sub-pages, in a long series of small user-directed edits — the
"renamed on 2026-08-19" provenance notes below still hold, but the structural
descriptions now reflect the 2026-08-20 end state, not the original build):
- **planning** — "Plan before you build" (renamed from "Plan before you
  execute" on 2026-08-19). "What is plan mode?" intro, then the Boris Cherny
  `.pull-quote` ("Start every complex task in plan mode. Pour your energy
  into the plan so Claude can 1-shot the implementation.") — note the
  one-line intro sentence just above the pull-quote currently has two
  uncorrected typos, "creater" and "Antropic", flagged to the user but not
  yet fixed, don't assume they're intentional. "How to turn on plan mode" was
  moved up to directly follow the pull-quote (used to sit lower on the page)
  and now has three `subhead-accent` subsections — Claude Code (Shift+Tab or
  `claude --permission-mode plan`, illustrated with a screenshot of the
  status bar at `images/plan-mode-status-bar.png`), OpenCode (Tab), Codex
  (`/plan` or Shift+Tab) — followed by a `.callout.warn` tip on not
  memorizing shortcuts. Then "What happens during planning?" (decisions-
  hidden checklist + agent-proposal `.example`), "Why planning matters"
  (checkpoint framing + hidden-assumptions example), and a build-immediately-
  vs-plan-first `.example` pair, closing with a `.callout.warn` tip on using a
  browser chatbot to brainstorm and draft a brief before handing it to the
  terminal agent. On 2026-08-21 this tip briefly grew into a full standalone
  "Before planning, explore the problem" `<h2>` section, was then moved
  wholesale to specifying-the-task.html, and was finally rolled back the same
  day at the user's request — the tip is back to its original wording, and
  specifying-the-task.html has no trace of the experiment. Then the
  "Exercise: should you plan
  first?" table (7 task
  requests, decide plan-first-or-not for each) — removed 2026-08-20, restored
  2026-08-20 per the user's request; don't remove it again. The "Example
  prompts" section, removed the same day, stays removed — only the exercise
  came back. Still 20 min.
- **information-environment** — "Set up your information environment"
  (renamed from "Setting up..." on 2026-08-19). Recaps the give-context/
  specify-task/inspect/revise/verify loop as a plain `<pre><code>` block, a
  market-research project-folder example, two `subhead-accent`/
  `.prompt-window` examples (explain the files directly vs. ask the agent to
  explore — the latter now says "explore it in plan mode"), and "As projects
  grow, create a guide to the project" (now also warns that irrelevant
  context filling the window can make instructions harder for the model to
  find) with a project-guide.md example. The old "For one-off tasks, attach
  the relevant file directly" `<h2>` section was condensed into a
  `.callout.warn` tip (per the user's standing preference for tip styling),
  and the old "A practical rule" 3-row table was removed outright — the tip
  now leads straight into the exercise, which was reworded to a generic
  homework/extracurricular-project prompt (previously sales/customer/event/
  marketing-specific) and drops its old closing comparison question.
- **specifying-the-task** — "Specify the task" (renamed from "Specifying the
  task" on 2026-08-19). Objective/requirements table → "Use planning as part
  of task specification" (iterative plan-mode example, unchanged) → "How
  specific should you be?" — fully reworked: the old too-prescriptive-code
  vs. states-the-outcome pair was replaced with a too-much-detail vs.
  focuses-on-the-outcome `.prompt-window` pair (a dashboard comparison
  example), closing with a new blockquote rule ("Be specific about the
  outcome and important constraints, not every detail you can think of") →
  "But don't be too vague" (same "big hammer on a small nail" example, kept)
  → the old "A useful level of specificity" 3-column table was removed; its
  blockquote rule ("Be specific about the outcome and constraints; be
  flexible about the implementation") now sits directly under the vague-
  example instead → "How should you break down a complicated task?" (4-step
  dashboard checkpoint diagram + the 4-row "use a checkpoint when" table,
  now folded into the same section — the old "Human checkpoints are decision
  points" `<h2>` and its closing paragraph were removed). The old
  "Sometimes you need to explore before you can specify the task" and "The
  task may reveal missing information" sections, and the closing "Putting it
  together" iterative-process diagram, were all removed. The closing
  "Exercise" (5-part churn-risk task-writing prompt) was removed 2026-08-20
  — the page now ends right after the checkpoint-use table. Still 25 min (a
  2026-08-21 "Explore before you plan" section briefly landed here — moved
  from planning.html — then was rolled back the same day at the user's
  request; no trace of it remains).
- **verify-before-you-trust** — inserted 2026-08-19 between specifying-the-
  task and memory. Inspect-vs-verify 2-row table, why verification matters
  (list + gross/net revenue `.example`), the 4-question framework loop with
  four `<h3>` subsections, a worked commission-calculator `.example`, "Test
  cases where you know the answer" (4-row table — "Sales dashboard" is now
  "Inventory dashboard" — followed by a `.callout.warn` tip on having the
  agent self-generate test cases, or building them independently in a
  separate conversation or with a different dataset. It briefly (2026-08-20)
  had its own "Example prompt" `.example` box with a 4-step show-input/
  state-expected/run/mark-pass-fail prompt, but that box was removed the
  same day — the section now ends at the Tip callout, with no example
  prompt of its own. "Test the edges, not just the happy path" (tightened
  prose, same -9.9%/-10.0%/-10.1% walkthrough, now framed as "test values
  right around the cutoff") is the section that carries the example prompt
  for both: one `.example` box holds the walkthrough (with an added
  "-10.1% should [be flagged]" pass/fail readout) *and* an "Example prompt"
  that covers both the cutoff values *and* asks the agent to find further
  edge cases (missing values, unusual formats), showing expected/actual/
  pass-fail for each. And the 7-row
  verification-method-by-output-type table. The old "Ask the agent to help
  test its own work," "When something is wrong, investigate before
  patching," and "Verification should feed back into memory" sections were
  all removed and replaced by a "When manual testing is not enough" `<h2>`
  section (prose + a 4-row table: unit/integration/regression/load tests) —
  itself condensed 2026-08-20 into a closing `.callout.warn` tip (no more
  heading or table), matching how memory.html's "no single correct memory
  system" section was condensed the same way. The old closing "A useful
  feedback loop" diagram and "The key idea" blockquote were removed with no
  replacement. The closing "Exercise" (4-question verification plan) was
  removed 2026-08-20 — the page now ends right after that tip. Still
  ~25 min.
- **memory** — "Carry context across sessions" (renamed from "Build project
  memory" on 2026-08-21, itself renamed from "Memory across sessions" on
  2026-08-19; filename stays `memory.html` and page-tree position across all
  three names). The 2026-08-21 rename came with a full reframe, de-emphasizing
  "memory" as the organizing word in favor of plain "carry context forward":
  "Don't rely on the conversation" intro (trimmed — dropped the old paragraph
  that introduced "memory" as this course's umbrella term for persistent
  notes) → 4-row "what should you carry forward" table (renamed from "what
  should memory preserve") → three numbered sections, each dropped its old
  "Prompt docs:" / "Rule docs:" / "Running logs:" label prefix ("1. Save
  repeatable workflows", "2. Preserve rules and corrections", "3. Keep a
  running log") → "Let the agent keep these files up to date" (renamed from
  "...maintain the memory") → its `.callout.warn` "no single correct way to
  organize this information" tip, unchanged → "A special case: CLAUDE.md and
  AGENTS.md" renamed "Project instruction files" → new "Some tools also
  provide memory" section (Claude Code's auto-memory system explicitly framed
  as separate from and less reliable than the deliberate project files above,
  closing with a `.callout.warn` "Claude Code tip" pointing to `/memory` to
  inspect active instructions/memory) → "From saved context to a reusable
  system" (renamed from "From memory files..."; same 4-item list: skills,
  split rule files, summarized logs, retrieval tooling), closing with the same
  "Persistent context helps, but it is not enforcement" `.callout.warn` tip
  (reworded from "Memory helps, but it isn't enforcement" to match the
  de-emphasized framing). Still 20 min. The "Build project memory" wording was
  also swapped sitewide — every Module 4 sidebar, verify-before-you-trust's
  next-cta, the module index card (description also reworded off "Prompt
  docs, rule docs..."), and the use-case chip links in
  use-case-model-automation, cases/people/event-recap-generator, and
  cases/finance/model-automation.
- **helpful-tips** — inserted 2026-08-20 between memory and
  use-case-event-recap (pushing the two case studies from pages 6/7 to
  7/8 of 8; module total rose from ~175 to ~200 min). "Helpful tips for
  working with Claude Code" — a grab-bag of session habits, not tied to a
  single concept: protect the context window (kitchen-sink-session warning,
  a `.callout.warn` tip on using `/clear` — or simply starting a new
  session — after repeated corrections), show Claude what you mean (three
  `subhead-accent` subsections — screenshots, referencing existing
  patterns, pointing directly to the source with `@file`), describe the
  symptom not the fix (broken-filter `.prompt-window` example), an
  Explore → Plan → Execute `<pre><code>` diagram for larger/uncertain tasks,
  let Claude interview you, interrupt bad work early (`Esc` vs.
  `/clear`-or-new-session subsections), and don't explore forever
  (scoped-exploration example). Closes with a 10-row "quick reference"
  table (if-you-want-to / try-this) instead of an exercise. An attribution
  line under the intro links Anthropic's Claude Code best-practices doc
  ("extracted from," not "summarized from" — only a subset made it in).
  Has its own scoped `<style>` block (unlike the rest of the module) giving
  it a deliberately different "cheatsheet" look: h2/h3 headings recolored
  to `--color-accent`, tighter heading spacing (no top border, smaller
  margin), and a `.kbd` keyboard-key badge style applied to the `Esc`/
  `/clear` mentions. A `.chips` jump-link mini index was added under the
  intro, then removed the same day per the user's request — don't
  re-add it. 15 min — the shortest page in the module.
- **use-case-event-recap** (renamed from case-study-event-recap 2026-08-21, along
  with case-study-model-automation → use-case-model-automation and Module 1's
  case-study → use-case; nav labels became "Use case I" / "Use case II" for
  the two Module 4 pages) — no longer a verbatim duplicate of
  `/cases/people/event-recap-generator` (that page is unchanged and still
  follows Module 1's pattern). The course-page version instead walks through
  three attempts at the same task on the same three input files
  (`inputs/competition-invite-fall-2025.docx`, `inputs/notes.txt`,
  `references/competition-recap-fall-2024.docx`): a single browser-chat
  prompt with no project setup, the same prompt in Claude Code with Plan mode
  and iteration, and finally Plan mode plus an explicit CLAUDE.md the agent
  interviews the user to write. Each attempt gets a "what went wrong"
  pitfalls-inline box quoting specific failures (naming judges/competing
  teams, unsupported claims, tone, structure) and a download link to that
  attempt's actual `.docx` output (`event-recap-attempt-1/2/3-final.docx`,
  reused from the earlier card-grid version) — attempt 3 also links the
  generated `cases/people/CLAUDE.md` — closing with a 4-column comparison
  table and the "better results came from improving the workflow around the
  prompt" thesis. A 7-row verification checklist (facts,
  completeness, format, tone, content judgment, unsupported/missing info)
  sits between the task setup and the three attempts. Ends with in-module nav
  to page 7. Runs first, now ~30 min (was ~20).
- **use-case-model-automation** — originally the same treatment as
  use-case-event-recap: a verbatim transplant of
  `/cases/finance/model-automation`'s seven-section content, the scoped
  `<style>` block for its CFO summary table copied into the page's own
  `<head>`, download/image paths rewritten to `/cases/finance/...`. (Two
  earlier drafts existed first: a stage-by-stage retelling with its own
  excerpted prompts, then a short stub linking out to the `/cases`
  original. The user rejected both in favor of matching Module 1's pattern
  exactly. Don't reintroduce either earlier version.) Restructured
  2026-08-20 to match use-case-event-recap's "try it yourself" pattern —
  no longer a verbatim transplant; `/cases/finance/model-automation` is
  unchanged and still runs the old 7-section structure. Sections 1-4
  unchanged since that restructure: "The business task," "Data available,"
  "Try it yourself" (explore the source files, then automate the April
  update to the same output requirements section 5 satisfies), "Verify
  the output" (9-row checklist table).
  Section 5, **"One possible solution,"** replaced with a shorter,
  plainer-language draft the same day (still same day as the restructure)
  — six steps (Plan before building → Run the first update → Review the
  unmapped accounts → Approve and re-run → Generate management insights →
  Save the workflow for next month), each just a sentence or two plus its
  prompt, no extended narrative asides. The unmapped-accounts step briefly
  had its screenshot (`unmapped-recommendations.png`) converted to a real
  `<table>` per the user's request, but that table was **lost** when this
  shorter draft replaced the section — Step 3 is back to the screenshot
  image. If the table is still wanted, it needs to be reapplied on top of
  this draft, not assumed to still be there. Section 6 "What good looks
  like" keeps its real `<table class="summary-table">` (Revenue/Net
  income/Balance sheet, unaffected by any of this — this is a different,
  already-rendered table, not the Step 3 screenshot). Section 7 renamed
  back to **"Reuse the workflow next month"** (was "How to do this again
  next month") and shortened — drops the May walk-through narrative
  (`model_2026-05.xlsx` etc.) for a single generic `@workflow.md` prompt.
  "Watch for" bullets shortened to three generic items (silent mapping
  changes, unexplained balanced model, unsupported explanations) instead
  of the longer checkpoint-specific pair. Sections 8-9 (Extensions, Skills
  used) unchanged. Still ends with the module's closing CTA to Module 5,
  still ~45 min. Runs second as the longer, more procedural case. Its closing
  CTA was repointed from Module 5 to page 9 when Use case III was added.
- **use-case-demand-forecast** — added 2026-08-27 as page 9 of 9 (90–120 min),
  the module's first **analytics** case: a retail demand forecast plus a
  dashboard. Rewritten the same day from a user-supplied revision
  (`use-case-demand-forecast-revised.html`) that replaced the original
  four-section shape with an **eight-section** one — 1. business task /
  decision, 2. data available, 3. explore before you forecast, 4. plan your
  approach, 5. build the forecast and dashboard, 6. verify the output,
  7. improve the first version, 8. one possible solution. That revision is the
  live version; don't restore the four-section draft. **The two copies have
  since diverged on section count**: the user removed "improve the first
  version" from the course page on 2026-08-27, so
  `/course/04-workflow/use-case-demand-forecast` now runs **seven** sections
  (solution at 7) while `/cases/operations/demand-forecast-dashboard` keeps all
  **eight** (solution at 8). The course page's lede was trimmed to match. The
  cases copy also still carries two passages the course page drops — the
  "spend your time on the judgment" note in section 5, and the
  "don't treat this checklist as patches" line plus the **Known totals**
  reconciliation row in section 6. It shares its sample data
  with `/cases/operations/demand-forecast-dashboard` the way the other two share
  theirs with `/cases/people` and `/cases/finance`. Scenario: Harrow & Vale, a
  DTC home-goods brand; the student forecasts 13 weeks of unit demand by
  category for Q4 2025 off a weekly history that ends 2025-09-29, then builds a
  self-contained HTML dashboard. The sample data carries deliberate defects that
  the verification table is built around — stockout-suppressed weeks, an
  "Accessories" → "Add-ons" category rename mid-history, a discontinued SKU, a
  10-week-old SKU, a duplicated weekly export, three missing weeks, and two
  price changes. Section 3 carries the requirements as two explicit lists
  ("What the forecast has to do" / "What the dashboard has to do") and sits
  under section 5; section 6 is a 15-row verification table. The revision added
  four things the first draft lacked: an explicit **grain decision** (forecast
  categories directly or forecast SKUs and aggregate — the student must choose
  and justify), an **unknown Q4 2025 marketing plan** as a deliberate
  information gap to be stated rather than quietly filled, a **simple-baseline
  comparison** requirement (does the method beat same-period-last-year), and a
  closing **improve-the-first-version** step (since removed from the course
  copy, retained on the `/cases` copy — see above). Its three `.callout.warn` boxes
  were converted from the bare blue `.callout` the draft used, per the site's
  dominant pattern and the user's standing preference.
  **The "One possible solution" section was written 2026-08-27** (section 7 on
  the course page, section 8 on the `/cases` copy; both carry the same body at
  different indentation). It links
  `/cases/operations/demand-forecast-sample-solution.html`, a standalone
  dashboard generated by a stdlib-only Python pipeline from the same three
  CSVs, opened in a new tab so the section-6 verification table stays visible.
  The artifact is the real deliverable plus a `.coursebar` banner linking back
  to the case; regenerating it overwrites the file in place, so treat it as
  generated output rather than hand-edited HTML. The section lists the six
  decisions the solution made (grain, method, constrained weeks, catalog
  changes, the marketing information gap, accuracy) and closes with a
  `.callout.warn` stressing that alternatives are defensible when stated and
  defended. Headline figures quoted in the prose — 104,869 units, +21.7&percnt;,
  14.9&percnt; weekly holdout error against a 17.6&percnt; benchmark — come from
  that pipeline; if it is rerun with different settings, update the prose to
  match. This page also now carries the module's closing CTA to Module 5.

Both mini-cases reuse existing `/cases` sample data rather than introducing
new files — consistent with §6's note that Modules 1, 4, and 6 each close
with a mini-case, except Module 4 now gets two instead of one. Both course
pages have now diverged from their `/cases` originals into their own
try-it-yourself-then-compare structure (event-recap: three attempts;
model-automation: one worked solution) — the `/cases/people` and
`/cases/finance` originals are both unchanged, still following Module 1's
verbatim-transplant pattern. Both case pages' own "Skills used" chips (in
`/cases`) were repointed from generic `/course/04-workflow/` links to the
specific new sub-pages (`planning.html`, `information-environment.html`,
`specifying-the-task.html`, `memory.html`) as part of this build, and the
course-page copies carry the same updated chips.

> **2026-08-27 reorder:** Scaling up and Limits, risks, and responsibility
> swapped places at the user's request. Scaling up is now Module 5
> (`/course/05-scaling`) and Limits, risks, and responsibility is now Module 6
> (`/course/06-limits-and-ethics`). Directories were renamed to match, and the
> sidebar order, `course/index.html` syllabus table, and every next-cta chain
> across `/course/*` (Module 4 → 5 → 6 → 7) were updated in the same pass.
> Both modules keep their ~90-minute estimate, so total course time is
> unaffected. The two build narratives below predate this swap and refer to
> each other, and to themselves, using whatever module number and path was
> current at the time they were written — read the numbers/paths inside them
> as history, not as the current map (the section headers just below are
> current).

### Module 5 — Scaling up (`/course/05-scaling`)
Index written (renumbered from Module 7 on 2026-08-19); content revised
2026-08-21 from a user-supplied draft, then revised again the same day from a
v2 draft. Reframed around "prototype → real solution" (a `<pre><code>`
pipeline: build something that works → keep track of changes → extend the
agent with reusable capabilities → put AI inside the solution when useful →
share and deploy it) instead of the earlier skills/subagents/hooks/agent-teams
framing. Planned sub-pages, now in a `.card-grid` (4 cards): version control
with Git/GitHub, extending the agent with **skills and hooks** together (card
2 — v2 folded hooks into this card instead of treating it as an advanced
extension), putting AI inside your own solution (APIs, model calls,
structured outputs, API keys, cost, safeguards), and sharing/deploying
(hosting, environment variables, secrets, updates). Only subagents and agent
teams are now framed as optional/advanced patterns in a closing "What about
subagents and agent teams?" section (hooks moved out of that framing in v2,
since it's now a planned sub-page topic). The closing `<blockquote>` pull
statement from both drafts (reworded from "is not just about X. It is about
Y" to an em-dash construction to satisfy CLAUDE.md) was removed by the user
in a follow-up edit the same day — don't re-add it. The page now ends
directly with the "What about subagents and agent teams?" section, then a
next-cta that pointed straight to Module 7 until the 2026-08-27 reorder; it
now points to Module 6 (Limits, risks, and responsibility), which follows it.

### Module 6 — Limits, risks, and responsibility (`/course/06-limits-and-ethics`)
Fully written and built 2026-08-19 (renumbered from Module 6 earlier the same
day — see the renumbering note at the top of §4; then renumbered back to
Module 6 on 2026-08-27 — see the reorder note just above), all 4 sub-pages
(~90 min total). Index page uses the card-grid pattern like Modules 1/2/4 and
was rewritten again on 2026-08-19 from a second user-supplied draft (a
"better intro") — adds a "four questions" preview table (what can it see / do
/ what happens if wrong / who's responsible) that foreshadows the framework
`when-not-to-vibecode.html` uses later, and a closing "Your work is still
your responsibility" section that bookends the module before the card grid
hands off to page 1. That second draft also used stale pre-renumber numbering
("Module 6", `/course/06-limits-and-ethics/`, a hardcoded `class="active"`
the site never uses elsewhere) and was translated the same way as everything
else this session — coincidentally, that stale numbering is exactly what the
module was renamed back to on 2026-08-27. Replaces the
originally planned outline (data-security, cost-awareness, academic-integrity,
when-not-to-vibecode) with the user's own four pages — **academic integrity
and attribution is no longer covered by this module**; if that topic is still
wanted, it needs its own page later, not assumed to exist here. All four pages
were supplied already using the module's numbering at the time (Module 5,
`/course/05-limits-and-ethics/...`) and the then-current 8-module sidebar, so
this build was mostly straight content-plus-style-conversion, not a
renumbering job. Sub-pages, in order:
- **protect-the-information** (20 min) — access as a decision ("what does the
  agent need to see?"), minimum-necessary-information / least-privilege
  framing with an HR-data `.example`, a 4-question "before sharing data"
  table, the several ways data can reach an agent (uploads, folders, drives,
  APIs/MCP, search tools), a useful-vs-sensitive-fields `.example`, a
  4-row "instead of / consider" safer-alternatives table, company policy,
  and a blockquote rule of thumb.
- **control-agent-actions** (20 min) — read/draft/modify/update/communicate/
  transact as a risk ladder (6-row table), a lower-risk-vs-higher-risk
  300-email `.example`, a "before the agent / you might require" checkpoint
  table, a reversible-actions `.example` (delete vs. propose-and-review),
  permission prompts as part of the workflow (not obstacles to click through),
  minimum-necessary-tools applied to permissions, and a blockquote rule of
  thumb. Explicitly calls back to Module 4's human-checkpoint concept
  ("Earlier in the course, we used human checkpoints to break down
  complicated tasks").
- **real-cost** (20 min) — working vs. economical, a competitor-monitoring
  scale-up `.example`, a 4-row cost-types table (model usage, tools/services,
  human oversight, maintenance), token-usage drivers, a small-inefficiencies-
  at-scale `.example`, a human-review-is-a-cost `.example` (1,000 emails × 2
  min = 30+ hours), maintenance/ownership ("who will own this after the
  prototype works?"), a 5-row cost-estimation-question table, and a blockquote
  rule of thumb.
- **when-not-to-vibecode** (30 min) — capability vs. suitability, a
  high-consequence-situations checklist, a reasonable-vs.-very-different
  project `.example` (staffing prototype vs. production payroll), verification
  ability ("if you don't understand the domain well enough to recognize a
  dangerous mistake, you need someone who does"), a prototype-vs-production-risk
  table, a 4-row "four-question framework" recap table (what can it see / do /
  what happens if wrong / who's responsible), personal responsibility, a
  blockquote rule of thumb, and a 5-row decision exercise. Closing next-cta
  pointed to Module 6 (Scaling up) since it was the module's last page; after
  the 2026-08-27 reorder it points to Module 7 (Business use cases) instead,
  since Limits is the last module again.

Style conversions applied uniformly across all four pages, matching Module 4's
conventions: unicode em dashes (`—`) converted to `&mdash;`; formal "do not"/
"does not" prose converted to contractions throughout (no doc-content
exceptions were needed here — none of these pages quote a rule-doc or
CLAUDE.md-style file the way Module 4's information-environment/memory pages
do); `.example` boxes and blockquote "useful rule" callouts already matched
site convention as supplied, so those were kept as-is. No banned "it is not X,
it is Y" constructions were found in the source content.

### Module 7 — Business use cases (`/cases`)
No separate `/course/07` directory (renumbered from Module 8 on 2026-08-19).
The `/cases` library serves this purpose directly and is linked from the
course syllabus as Module 7.

> **2026-08-27:** Module 8 (Capstone, `/course/08-capstone`) was dropped
> entirely at the user's request — the site now ends at Module 7 (`/cases`).
> Its stub `index.html` (brief/rubric/peer-review were only planned, never
> built) was deleted, along with the "8." sidebar entry on every `/course/*`
> page, the syllabus table row and module count/time on `/course` and the
> home page. Modules 0–7 keep their existing numbers; nothing shifted down
> to fill the slot.

---

## 5. Dual-mode design — how the same content serves both audiences

**Linear course mode.** A persistent left rail on `/course/*` pages shows the syllabus with progress indicators (visited / in-progress / completed via localStorage). Every page ends with a single "Next" CTA. No decision fatigue.

**Reference mode.** Top-level search bar (powered by something simple — Pagefind or Algolia). Every page carries metadata tags (`topic:`, `skill-level:`, `tool:`) that drive a filtered index under `/cases`. Cross-links are dense: a `/cases/finance/model-automation` page links back to the specific `/course/04-workflow/specifying-the-task` section it depends on.

---

## 6. Cross-cutting elements

**Mini-cases threaded through the course.** Modules 1, 4, and 6 each end with a mini-case (a stripped-down version of a `/cases` page) so the application thread runs through the whole curriculum, not just the end.

**"Skill chips" on every page.** Each page is tagged with the underlying skills it teaches or uses (e.g., `context-engineering`, `subagents`, `data-cleanup`). Clicking a chip lands on a filtered index of every page touching that skill — this is what makes reference mode actually work.

**Progress and bookmarking.** Lightweight, localStorage-only. No accounts in v1.

**Downloadable artifacts.** Every use case page offers a downloadable starter pack (sample data + a `CLAUDE.md` + a README). Lower friction = more students actually try it.

**Pitfalls log.** `/pitfalls` is a living page of common mistakes — each entry is short enough to scan in under a minute. Currently has 5 starter entries. Planned: individual sub-pages per pitfall with fuller examples.

---

## 7. URL conventions

- **Lowercase, hyphenated** (`/course/05-scaling`, not `/course/Module5`).
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

## 9. Build status (as of 2026-08-27)

| Section | Status |
|---|---|
| Home `/` | ✅ Complete |
| Start `/start` | ✅ Index written; demo and vignette sub-pages not yet built |
| Course index `/course` | ✅ Complete |
| Module 1 `/course/01-talking-to-ai` | ✅ Fully written (4 sub-pages + index) |
| Module 2 `/course/02-chat-to-agent` | ✅ Fully written (3 sub-pages + index) |
| Module 3 `/course/03-setup` | ✅ All 7 sub-pages built (`why-move-beyond-browser`, `install-claude-code`, `install-macos`, `install-windows`, `login`, `using-vscode`, `appendix-opencode`) |
| Module 4 `/course/04-workflow` | ✅ All 9 sub-pages built (`planning`, `information-environment`, `specifying-the-task`, `verify-before-you-trust`, `memory`, `helpful-tips`, `use-case-event-recap`, `use-case-model-automation`, `use-case-demand-forecast`) — all solution sections now written |
| Module 5 `/course/05-scaling` | 🚧 Index page written; sub-pages not yet built |
| Module 6 `/course/06-limits-and-ethics` | ✅ All 4 sub-pages built (`protect-the-information`, `control-agent-actions`, `real-cost`, `when-not-to-vibecode`) |
| Cases index `/cases` | ✅ Complete |
| Marketing cases | 🚧 1 of 3 cases fully written (`segmentation-from-csv`) |
| Finance cases | 🚧 1 of 3 cases fully written (`model-automation`) |
| People cases | 🚧 1 of 3 cases fully written (`event-recap-generator`) |
| Operations cases | 🚧 1 of 4 cases fully written (`demand-forecast-dashboard`, task + worked solution) |
| Sales, Founder cases | 🚧 Index pages only; individual cases not yet built |
| Reference `/reference` | 🚧 Stub with planned sections listed |
| Pitfalls `/pitfalls` | ✅ Live with 5 starter entries |
| About `/about` | ✅ Complete |

**Suggested next build priorities:**
1. Add the demand-forecast case's Extensions and Skills-used sections, which
   still don't exist on either copy (its "One possible solution" section was
   written 2026-08-27).
2. One additional case per function category to demonstrate breadth (Sales and
   Founder are still index-only).
3. Module 5 (Scaling up) sub-pages — version control (Git/GitHub), extending
   the agent with skills and hooks, putting AI inside your own solution (APIs), share &amp;
   deploy.
4. Fill in `/reference` glossary and cheat sheets.
5. If academic integrity/attribution is still wanted somewhere, it needs a
   new home — Module 6 dropped it when the user's own four pages replaced
   the originally planned outline (see Module 6's summary above).
