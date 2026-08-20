# Event Recap Generator

This project turns raw notes from a case competition into a polished recap document, matching the
style of the club's past recaps. It runs once per event/semester.

## Folder layout

- `inputs/` — that event's raw materials: notes (e.g. `notes.txt`) and the official invite/logistics
  doc (date, location, format, judges, scoring weights, team counts).
- `references/` — past finished recaps. The **most recent file here is the style template** — its
  structure, tone, and formatting are what every new recap must match.
- `outputs/` — finished recaps land here.

**Technical note:** `.docx` files can't be read directly with the Read tool. Convert to text first
with `textutil -convert txt -output <scratch-path>.txt <source>.docx` (macOS), writing the output to
a scratch location — never overwrite or modify the original source `.docx`.

## Style source of truth

Match the latest reference recap's structure exactly:

1. Title / header block — event name, "Prepared by \<club\>", Date, Location, Format, Team,
   Competing teams.
2. Results — a short narrative paragraph, then a rank table (Category / Our rank / Note).
3. Key learnings — a short bulleted list of retrospective insights.
4. What we'd do differently — a short bulleted list of concrete action items (distinct from Key
   learnings, not a restatement of them).
5. Thank-yous — warm, specific, names people and their affiliation/role.

Match the reference's prose register: concise, warm, professional, first-person-plural ("we").

## Rules

**Structure fidelity.** Every section above appears every time, regardless of how much material
that event's notes provide. Never delete a section for lack of content. If a section would come out
noticeably thinner than the reference's version (fewer or vaguer bullets, a sparser table), keep it
but flag it inline in the draft with a `[REVIEW: ...]` marker explaining what's thin and why — so
it's easy to spot before the recap is finalized.

**Missing facts.** Never invent, infer, or silently placeholder a fact the format needs but the
source material doesn't contain — e.g. the club's name, a teammate's last name, or how a note maps
to an official scoring category. The moment such a gap is found, stop and ask the user directly,
before continuing to draft. Don't guess and don't leave silent placeholders like `[CLUB NAME]`.

**Naming & tone.** Keep the reference's diplomatic register. Raw notes may contain candid critique
tied to real named people — a judge pushing hard on a specific number, a rival school's team being
singled out as stronger. Never attach criticism to a named individual or a named competing team in
the output. Summarize such moments neutrally and constructively (what was probed or learned, not who
did the probing or who "beat" whom). Reserve names for positive mentions — thank-yous, praise, judge
or alumni credits.

**Output.** The final deliverable is always a `.docx` in `outputs/`, formatted like the reference
(headers, tables), named `competition-recap-<season>-<year>.docx` (e.g.
`competition-recap-fall-2025.docx`).

## Workflow

1. Read that event's invite + notes, and the latest reference recap.
2. Identify anything the format needs that the source material doesn't provide; ask the user before
   drafting anything that depends on it.
3. Draft the recap matching the reference's structure exactly, flagging any thin section inline.
4. After the user reviews/edits, produce the final `.docx` in `outputs/`.
