# LEP Site Rewrite — Handoff Brief

## Why this handoff exists

Seth Oranburg's LEP site at `/Users/sco/LEP/` (published at `oranburg.law/LEP/`) presents the Law and Entrepreneurship Program at the Catholic University of America Columbus School of Law. The site has been built by accretion across many sessions: Seth's original pages, then five essays drafted by Sonnet sub-agents, then layered edits.

The technical layer is now sound: the access gate works, seven Mermaid diagrams render through the `lawj graphics` pipeline, the Hebrew transliteration scheme is applied consistently, em-dashes and the banned-word list are clean, cross-links resolve. Voice is competent.

**What does not work is the argument.** The constellation reads as a portfolio of related essays rather than a single intellectual position. A reader cannot tell from any one essay, or from the index, what the Program *is for*. The essays describe pieces of an argument but the argument itself is unstated. That is the failure to repair.

The goal of this rewrite is not more polish. It is to make the spine of the Program's argument explicit, then write every page of the site so that page delivers a specific piece of that spine. Each piece should do one job for the whole and signal where it sits in the larger argument.

## The proposed spine

The Program trains lawyers to make private law (jurisgenesis) in the form of partnership at shared risk (*societas* / *shutafut*), using formation methods recovered from three surviving traditions (Athens, Jerusalem, Rome), exercised against the live constraint of the federal regulatory state (Washington), at the only American law school where both the Catholic doctrinal inheritance and the Washington setting converge (CUA Columbus).

Five elements:

1. **What lawyers do** — they make private law in the act of drafting. *Jurisgenesis*, Robert Cover, 1983.
2. **Under what substantive norm** — partnership at shared risk. The convergent doctrine of Catholic *societas* (Aquinas through Salamanca to the encyclicals) and Jewish *shutafut* (Torah through Maimonides to the *heter iska*).
3. **How the lawyer is formed to do it** — three pedagogical methods that have survived where most have not: the Socratic elenchus (severed and reclaimed), ḥavruta (continuous communal), the disputation (continuous institutional).
4. **Against what** — the live regulatory state. Washington is not a station of formation alongside the three; it is the deployment site where the inherited methods meet friction.
5. **Where it can happen** — CUA Columbus, the only American law school holding the pontifical charter, the *Ex Corde Ecclesiae* mission, the unbroken natural-law tradition, and the Washington setting at the same address.

The diagnosis (the deskilling loop) names what happens when professional formation is run without this spine. The Babel/Nehemia opposition in *Magnifica Humanitas* names the AI-era restatement.

The fresh-session team may refine the spine, but it must end on **one** spine, stated explicitly somewhere on the site, and every page must visibly serve it.

## What you need to read first

Three contexts, in this order:

1. **Seth's auto-memory and standing rules** at `/Users/sco/.claude/projects/-Users-sco/memory/MEMORY.md` and the linked feedback files. Especially:
   - No em-dashes anywhere
   - The banned-word list (delve, navigate, landscape, multifaceted, indeed, arguably, moreover, robust, leverage, load-bearing, "runs through", "uniquely positioned", "engagement" as filler, "ecosystem" as buzzword)
   - No meta-narration ("this page", "this essay", "this section")
   - No AI prose patterns (file at `feedback_no-ai-prose-patterns.md`)
   - Voids not vapidity: leave a void rather than fill with hollow language
   - Read the source: never extrapolate from labels
   - Verify citations in LawJ; never invent

2. **The LEP CLAUDE.md** at `/Users/sco/LEP/CLAUDE.md`. Defines the toolchain (`lawj graphics`, the figure include, the access gate, the transliteration scheme).

3. **The full LEP repo at `/Users/sco/LEP/`.** Read everything in `_essays/`, `_pages/`, `_data/`, `_includes/`, `_layouts/`. Especially read `_pages/lineage.md` (the Moral Anatomy reframe) as the voice model and `_essays/deskilling-loop.md` as the strongest current essay.

## Current inventory

`_essays/` (gated, behind access-key `lep-2026-may`):
- `three-states.md` — Athens/Jerusalem/Rome typology
- `deskilling-loop.md` — four-profession diagnosis (strongest essay)
- `cua-as-home.md` — institutional brief
- `ai-as-havruta.md` — pedagogy under AI
- `washington-taken-seriously.md` — the deployment site claim
- `jurisgenesis-drafting.md` — the lawyer as maker of private law
- `heter-iska-operative.md` — Jewish commercial form
- `magnifica-babel.md` — Leo XIV on AI-platform equity
- `pilgrimage-bootcamp.md` — student cohort summer track
- `field-immersion-institute.md` — faculty research and executive education track
- `index.md` — the essays landing page (public)

`_pages/` (public):
- `lineage.md` — The Moral Anatomy of Enterprise (the doctrinal anchor)
- `partnership-at-shared-risk.md` — the rule in transactional drafting
- `magnifica-humanitas.md`, `societas.md`, `traditions-comparison.md`, `lineage-timeline.md`, `glossary.md`
- Audience hubs: `about.md`, `methodology.md`, `theme.md`, `faq.md`
- Audience-routed: `for-students.md`, `for-students-prospective.md`, `for-students-current.md`, `for-students-mentors.md`, `teach.md`, `partner.md`, `support.md`
- Program briefs: `program-entrepreneurship-v-poverty.md`, `program-leo-fellowship.md`, `program-subsidiarity-campaign.md`, `program-magisterium-micro-credential.md`
- Static: `working-papers.md`, `readings.md`, `events.md`, `news.md`, `press.md`, `people.md`, `collaborators.md`, `search.md`

`assets/figures/web/` — seven SVGs rendered through `lawj graphics`: `callout-judgment-vs-procedure`, `callout-societas-shutafut`, `callout-three-stations`, `cua-as-home-convergence`, `deskilling-loop-cycle`, `formation-and-deployment`, `heter-iska-structure`. Sources in `assets/figures/source/`.

`_data/figures/` — YAML metadata for the lineage page's click-to-expand Mermaid modals.

## Non-negotiables to preserve

- **The Jekyll infrastructure.** Do not change `_config.yml`, `_layouts/`, or the gate mechanism (`_includes/access-gate.html`, `_includes/nav.html`'s lock toggle). Permalinks for already-published URLs stay stable; the lineage page must remain at `/lineage/`.
- **The figure pipeline.** New diagrams go through `lawj graphics`. The repo lives at `/Users/sco/Library/Mobile Documents/com~apple~CloudDocs/Repos/LawJ/LawJ`. Render with `PYTHONPATH=. .venv/bin/python -m lawj.cli graphics render <source.mmd> --out-root /Users/sco/LEP/assets/figures/`. Embed via `{% include figure.html name="..." alt="..." caption="..." %}`.
- **The access gate.** Pages with `gated: true` in frontmatter sit behind the courtesy gate. The current key is `lep-2026-may`; its SHA-256 lives in `_config.yml` as `gate_password_hash`. Rotate if you want to; otherwise leave.
- **Hebrew transliteration scheme.** Seth's: ק = k, ח = ḥ, צ = ẓ, כ unpointed = kh, אpaint right curly quote, ע = left curly quote. The current site uses *iska*, *ḥavruta*, *ẓedakah*, *ḥokhmat lev*, *Bava Meẓia*, *Shulḥan Arukh*, *Sheluḥin*, *gemaḥ*, *pikadon*. URLs and slugs stay ASCII. Display prose uses the diacritics.
- **Voice.** Austere, declarative, claims-first. Short sentences mixed with longer ones. Parataxis where it lands. The lineage page's "Moral Anatomy of Enterprise" opening is the model.
- **Verified citations only.** Eight citations are confirmed: Sinsky 2016, Hayek 1945, Cover 1983, *Laborem Exercens* §12, Yoreh De'ah 167 with Rema, *Aeterni Patris* (1879), *Magnifica Humanitas* (existence; §140 pin still needs vatican.va verification), Polanyi *Tacit Dimension* (1966), Oakeshott *Rationalism in Politics* (1962). The following are confirmed wrong and removed: Edwards 1992 (does not exist; real Edwards is *Contested Terrain* 1979 on manufacturing); $270 billion compliance industry (no source); FAA Boeing 87% wrongly sourced to House Transportation Committee (correct source: DOT IG report, Feb 23 2021). Items still UNVERIFIABLE and VOID-flagged: Lerner 2004, Wimpfheimer page pin for ḥavruta-as-cumulative, Weiss "Art of Ḥavruta" (essay not located), 353,000 compliance officers (BLS confirmation pending), Bank of Israel *heter iska* publication, Maimonides Hilkhot Sheluḥin v'Shutafin ch. 6 (Sefaria 404). Do not unflag without verification.

## The work to do, in order

### Phase A. Write the spine.

Before any essay is rewritten, draft **one** new page that states the spine in full. Working title: *The Program's Argument*, permalink `/argument/` (or whatever makes sense). Length: 1,500 to 2,500 words. Form: five sections, one per element of the spine, each section ~300 words, each section ending on the essay or essays that elaborate it. This page becomes the front-door read for any reader who arrives at the site cold. The home page and the about page should both route directly to it.

This page is the most important single piece of writing on the site. It must be Seth's voice and Seth's argument. Get it right before anything else moves.

### Phase B. Rewrite each essay against the spine.

For each of the ten existing essays, ask: which element of the spine does this essay deliver? Then rewrite the essay so the answer is visible in the opening paragraph and reinforced at the close. An essay that does not clearly serve one element of the spine should be cut, merged, or repurposed.

Use `prose-editor` for voice on each rewrite. Use `heading-architect` to make sure the section heads of each essay name the move that section makes against the spine. Use `abstract-writer` for the excerpt and the index pitch on each.

Suggested mapping (the team may revise):
- *Jurisgenesis in Drafting* delivers element 1 (lawyers make private law)
- *Partnership at Shared Risk* delivers element 2 (the substantive norm)
- *Heter Iska as Operative Form* delivers element 2 in its Jewish vocabulary
- *Three States of a Living Tradition* delivers element 3 (the formation methods)
- *AI as Ḥavruta* delivers element 3 in the AI age
- *Washington Taken Seriously* delivers element 4 (the deployment site)
- *CUA as Home* delivers element 5 (the institutional address)
- *The Deskilling Loop* is the diagnosis without which the spine is unmotivated
- *Magnifica Humanitas and the Babel Question* is the AI-era restatement of elements 2 and 4 together
- *Pilgrimage and Bootcamp* / *Field Immersion and Executive Institute* are the operational realizations of element 3, in different framings for different funder audiences

The two funder one-pagers were rewritten in the previous session to be genuinely different programs sharing infrastructure (student cohort track vs. faculty research track). Verify they still serve different purposes after the spine rewrite.

### Phase C. Rewrite the front-door pages.

- `about.md` should open on the spine, not on disclaimers about CUA authorization. The disclaimer belongs in a paragraph farther down.
- `methodology.md` should describe how the spine is actually implemented in the clinic, the simulation course, the cohort design.
- `theme.md` should locate the inaugural year-theme (*Entrepreneurship v. Poverty*) inside the spine.
- The four `program-*.md` pages should each name which element of the spine the program funds and what specifically it produces.
- `faq.md` should be rewritten to answer questions in the spine's vocabulary.
- The audience-routed pages (`for-students-*`, `teach`, `partner`, `support`, `for-students-mentors`) should each open on what the spine offers that audience, not on a generic welcome.

### Phase D. The lineage page is the doctrinal anchor.

`_pages/lineage.md` (The Moral Anatomy of Enterprise) sits under elements 1 and 2 of the spine. Read it; do not rewrite its substantive content; the Mermaid diagrams, click-to-expand modals, and the seven doctrinal sections should stay. But the opening should explicitly position the page as the doctrinal anchor on which the spine's substantive norm rests. Section VIII (the contemporary instruments) already applies the principle to VC, ESOP, DAO, and AI-platform equity; cross-reference it to the *Partnership at Shared Risk* page (the rule for drafting) and to the new spine page.

### Phase E. The two HTML comparison tables, the seven Mermaid figures, and any new figures.

Existing figures are good. The team may propose new diagrams: a comparison matrix of the three formation states (Athens/Jerusalem/Rome × condition / weakness / required response); a four-profession Deskilling matrix (Medicine / Law / Finance / Aviation × loop instance / evidence / accountability failure); a Three Stations + Washington diagram updated to match whichever spine framing the team lands on. Use `tables-and-figures` to assess what earns its keep. Use the `lawj graphics` pipeline for any new Mermaid; use inline HTML tables (the existing pattern on partnership-at-shared-risk.md and magnifica-babel.md) for comparison matrices that need text in cells.

### Phase F. Final verification.

Run the audit script at `/tmp/lep_audit.py` if it still exists, or rebuild it. Check: zero em-dashes in body prose, zero banned-word hits, zero broken internal links, all frontmatter validates, all figure includes resolve to existing SVGs, no orphaned `==[[` author markup, no `oranburg@cua.edu` references (use `seth.oranburg@gmail.com` until August 20, 2026), no Quaere references anywhere external-facing.

Commit and push when done.

## Agents to deploy

The LawJ agent set lives at `/Users/sco/.claude/agents/`. The agents relevant to this rewrite:

- **`prose-editor`** for voice on every rewrite. Strunk, Chicago, classical rhetoric, Seth's specific style rules. Apply in place.
- **`heading-architect`** for section heads across every page. Noun-phrase form; no AI labels; no stacked headings; cross-file parallelism.
- **`abstract-writer`** for every excerpt and index pitch. Max 35 words; state the move, not the topic.
- **`tables-and-figures`** for the figure layer and any new tables.
- **`bluebook-cite-checker`** for any citation that enters the body. 22nd edition. Verify via WebFetch / WebSearch before letting a cite land.
- **`beit-midrash`** for any Hebrew or Aramaic content (Heter Iska, AI as Ḥavruta, the *shutafut* / *ẓedakah* passages on lineage). Knows Seth's transliteration scheme and the Sefaria corpus.
- **`general-purpose`** for substantive drafting that does not fit a specialist. Use for the spine page itself, the rewritten essays, the front-door pages.

The team has full authority to rewrite from near-scratch. Preserve only the infrastructure listed in *Non-negotiables*; everything else is redrawable if the spine demands it.

## Success criteria

The site succeeds when a reader who lands cold on any page can answer, in two sentences, what the Program is and why it exists. The lineage page, the spine page, and the essays index should each deliver the answer in their own form. The remaining essays and pages should each deliver one piece of the answer, with visible connection to the whole.

A reader who clicks every link and reads every essay should leave with the same one-paragraph summary of the Program no matter where they entered. That is the test of whether the spine has been built.

## Starting move

Begin by reading the lineage page and the deskilling loop essay carefully. Then read the auto-memory rules. Then draft the spine page. Then convene the agent team with the spine in hand. Do not rewrite individual essays before the spine is written and approved by Seth.

## Contact

Seth Oranburg: seth.oranburg@gmail.com (correct mailbox until August 20, 2026).
