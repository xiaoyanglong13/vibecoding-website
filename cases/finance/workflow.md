# Monthly Three-Statement Model Update — Workflow

## Files you need at the start of each month
- New `trial_balance.csv` (replace the previous month's file)
- Previous month's `model_YYYY-MM.xlsx` (already in the folder from last month's run)
- `account_mapping.csv` (carry forward, already updated)

---

## Step 1 — Drop in the new trial balance
Replace `trial_balance.csv` with the current month's export. The period column (e.g. `2026-05`) drives everything — the script reads it automatically.

## Step 2 — Run the script
```
python3 update_model.py
```
The script will:
- Match all TB accounts to model lines via `account_mapping.csv`
- Compute `(credit − debit) × sign` per model line
- Find the matching period column in the `Inputs` sheet of the prior model
- Write values, skip any formula cells
- Save `model_YYYY-MM.xlsx` (new file, source untouched)
- Write `unmapped_YYYY-MM.csv` if any accounts had no mapping

## Step 3 — Review unmapped accounts
If `unmapped_YYYY-MM.csv` is non-empty, ask Claude to produce a review table:
> "Show me the unmapped accounts with a recommended model_line and reason for each."

Claude will present a table like the one below — **do not edit the mapping yet.**

| Account | Name | Amount | Recommended model_line | Sign | Reason |
|---|---|---|---|---|---|
| 23100 | Lease liability - ST (new) | Cr 1,240 | Lease liability ST | 1 | New ST lease, mirrors 23000 |
| ... | | | | | |

Review each row. For each account either:
- **Approve** the suggested mapping as-is
- **Override** with a different `model_line` or `sign`
- **Defer** — leave unmapped this month (it will stay out of the model)

## Step 4 — Add approved mappings
Once you have confirmed the mappings, tell Claude:
> "Add the approved accounts to account_mapping.csv."

Claude will insert each row in account-number order. If any account requires a new model line that does not yet exist in the `Inputs` sheet, add that row to the sheet manually before re-running.

Sign convention: `sign = -1` for debit-normal assets; `sign = 1` for everything else (liabilities, equity, income, expenses).

## Step 5 — Re-run the script
```
python3 update_model.py
```
Confirm the console shows `All TB accounts mapped` and `lines with no TB data: 0`.

## Step 6 — Sanity checks
- Open `model_YYYY-MM.xlsx` → `Inputs`: confirm the new period column is populated
- Check `IS`, `BS`, `CF` sheets recalculated (they reference `Inputs` via formulas)
- Verify balance sheet: Assets − (Liabilities + Equity + Current NI) = 0
- Spot-check one line manually against the raw TB

## Step 7 — Generate summary
Ask Claude to produce the summary table (revenue, net income, BS balance, new mappings) and save it as `summary_YYYY-MM.xlsx`.

---

## What carries forward automatically

| Item | How it carries forward |
|---|---|
| Source model | Script picks the latest `model_YYYY-MM.xlsx` excluding the output period |
| Account mapping | Persistent — just add new rows as needed |
| Period column | Matched from the TB `period` field — no manual config |

**The only manual steps each month** are reviewing and approving unmapped accounts (Steps 3–4) before they are written to `account_mapping.csv`.
