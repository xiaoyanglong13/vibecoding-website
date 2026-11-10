This folder contains material for a website that teaches building business solutions with AI to undergraduate business students.

Do not use phrases like "it is not xxx, it is xxx" or "it is xxx---not xxx".

The writing style is undergraduate economic textbook.

`site-ia.md` is the authoritative IA/status doc — read it first when resuming work. Whenever a
page is added, removed, or renamed under `course/` or `cases/`, update the matching entries in
`site-ia.md` (page tree in §2, module/case summary in §4, build-status table in §9) in the same
change.

After each completed change, run appropriate checks, commit the changes, and deploy
through the existing GitHub main → Vercel workflow. The user has authorized this
as the default; do not ask for confirmation again unless they explicitly request
local-only work or a different workflow. Verify deployment success before reporting
completion.
