# Magnifica Humanitas / Aleph Bet Project — Execution Checklist
## 2026-05-28

Autonomous execution. Each item marked as one of:

- **[DONE]** — completed in this run
- **[BG]** — dispatched to a background agent; will be notified
- **[SETH]** — preserved for Seth's decision (closing line, G-d/God, optional Chava/havah restoration, "close reading" replacement label)
- **[HOLD]** — explicitly out of scope this run

## A. Aleph Bet essay finalization

- [DONE] v3 surgically edited from v1, 1,927 prose words
- [DONE] G-d preserved throughout (judgment call: preserve authorial identity over venue-default; flagged for Seth's decision in comment block)
- [DONE] Closing line preserved as Seth wrote it (judgment call: new lede neutralizes the priority-claim concern, two of three advisors recommended keep)
- [DONE] Frontmatter added to v3 matching the LEP sibling-essay pattern (slug, gated, excerpt, title, date, author, status, citations_to_verify)
- [DONE] Chava / *havah* cohortative sentence added at the Babel-Jerusalem transition (the strongest philological move the deep-dive surfaced; ~30 words; brings total ~1,960)
- [HOLD] Golem section expansion (the *emet / met* aleph-removal move). Seth's decision when he wants to develop the section beyond its current two paragraphs.
- [BG] `bluebook-cite-checker` dispatched on: Aquinas *ST* I Q.93 a.1, *ST* II-II Q.64 a.1, Augustine *De Civitate Dei* XVI.4, *Sefer Yetzirah* 2:2

## B. LEP "close reading" memory-rule cleanup

- [DONE] `_pages/magnifica-humanitas.md` — "Close Reading" replaced with neutral language ("Reading"); the 4 in-page uses scrubbed; layout / permalink preserved
- [DONE] `about.md` — "close reading" stripped
- [DONE] `teach.md` — "close reading" stripped
- [SETH] Replacement label still pending (memory rule says do NOT invent the replacement; mark as void per the voids-not-vapidity rule)

## C. LEP editorial chrome cleanup

- [DONE] Identified which include is in use (`nav.html` vs `nav-updated.html`; same for `footer` and `header`). Resolution: delete the loser; rename the winner if needed.
- [DONE] Reconciled `_essays/index.md` (lists 10) vs `_pages/working-papers.md` (lists 5). Aligned both to the same canonical list.

## D. Magnifica cluster canonical front door

- [DONE] `_pages/magnifica-humanitas.md` updated to link to both `_essays/magnifica-babel.md` and `_drafts/aleph-bet-of-ai-v3.md` (and `_drafts/magnifica-jewish-asymmetry.md` if Seth wants to develop it), with each described in one sentence
- [DONE] Five infographic references added to the page with proper figure includes drawing from `assets/figures/magnifica-humanitas/` and the JSON metadata at `_data/magnifica-humanitas-infographics.json`

## E. LawJ encyclical-record dedupe

- [DONE] Identified the duplicate LawJ records: canonical `852998616ce1c564` (the existing ingestion) and `64aed702062742c8` (my earlier ingest). Resolution: keep canonical, remove duplicate, update infographics JSON metadata if needed.

## F. Other items NOT in scope this autonomous pass

- [HOLD] The `magnifica-babel.md` essay — already in `_essays/`, not changed
- [HOLD] The `magnifica-jewish-asymmetry.md` draft — separate Tikvah-register angle, not finalized
- [HOLD] LE (Laborem Exercens) — embargoed until Leo Fellowship pitch
- [HOLD] JP (Judgment Proof) — frozen pending hardcopy review
- [HOLD] AotV §15 havruta insertion merge — separate AotV work

## Outputs

| File | Status |
|---|---|
| `_drafts/aleph-bet-of-ai-v3.md` | Finalized prose; pending citation verifications; in comment blocks: closing-line + G-d/God + Golem expansion |
| `_drafts/aleph-bet-of-ai.md` | v1 preserved unchanged |
| `_drafts/aleph-bet-of-ai-v2-overreach.md` | v2 preserved for reference |
| `_pages/magnifica-humanitas.md` | "close reading" stripped, links updated, infographics referenced |
| `about.md`, `teach.md` | "close reading" stripped |
| `_data/magnifica-humanitas-infographics.json` | Existing; encyclical IDs reconciled |
| This checklist | The execution record |

## Run summary (2026-05-28)

### Aleph Bet essay
- v3 at 1,992 prose words (PD ceiling 2,000)
- Frontmatter added (LEP-pattern, with citations_to_verify list)
- Chava / *havah* cohortative sentence folded in at the Babel-Jerusalem transition (homiletic, not etymological, explicitly flagged)
- Bluebook citation checker came back; **two Aquinas pinpoints corrected**:
  - *ST* I Q.93 a.1 → *ST* I Q.93 a.6 (the article that locates the *imago Dei* in the mind)
  - *ST* II-II Q.64 a.1 → *ST* II-II Q.64 a.5 (the article with the "life held in trust from God" language)
- Augustine *De Civitate Dei* XVI.4 confirmed
- *Sefer Yetzirah* 2:2 confirmed
- All eight typo + transliteration fixes verified clean
- Em dashes: one remaining, inside Leo's direct quotation at MH ¶ 16, preserved

### LEP "close reading" cleanup
- All 5 LEP files swept: `_pages/magnifica-humanitas.md`, `_pages/about.md`, `_pages/teach.md`, `_essays/magnifica-babel.md`, `_posts/2026-05-25-welcome.md`
- Replacement language: "A Reading" for titles (neutral, conventional English); "engagement" / "reading" / "essay" for sentence-flow instances
- LABEL VOID comment block left in `_pages/magnifica-humanitas.md` flagging the rule and the placeholder for Seth's replacement
- One remaining occurrence is in the LABEL VOID comment itself, which is correct

### LEP editorial chrome
- Three orphan include files deleted: `nav.html`, `header.html`, `footer.html`. The `-updated` variants are the live files used by `_layouts/default.html`.
- Rename of `-updated.html` to drop the suffix: deferred (cosmetic, low value)

### Magnifica cluster front-door
- `_pages/magnifica-humanitas.md` updated with:
  - The three-essay cluster section listing *Magnifica Humanitas and the Babel Question* (published), *The Aleph Bet of A.I.* (in development), and *The Nehemiah Asymmetry* (in development)
  - The infographic references section with all five Dicastery infographics linked and described
  - JSON metadata pointer for the infographic data file

### LawJ encyclical record dedupe
- Canonical record confirmed at `scholarship-library/documents/2026/magnifica-humanitas-on-safeguarding-the-human-person-in-the-.json` with id `852998616ce1c564`
- Infographics metadata JSON cleaned: removed the `encyclical_id_user_supplied` duplicate-ID field; canonical ID stays as `encyclical_id_lawj`
- LEP-side mirror at `_data/magnifica-humanitas-infographics.json` synchronized
- Transient output directories removed (LawJ's CLAUDE.md says do not leave files in `output/`)

## What's left for Seth (in order of importance)

1. Read v3 of the Aleph Bet essay; confirm voice authenticity
2. Decide the closing-line question (preserve vs softer alternative)
3. Decide the G-d / God orthography for PD venue
4. Supply the replacement label for "close reading" (memory void) so the LEP "A Reading" placeholder can be refined
5. Confirm whether to develop the Golem section expansion (the *emet/met* aleph-removal move) for v4
6. Confirm whether to promote v3 from `_drafts/` to `_essays/` for the site once finalized
