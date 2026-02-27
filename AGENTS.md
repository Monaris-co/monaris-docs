> First-time setup: Customize this file for your team before scaling documentation work.
> For Mintlify product knowledge (components, configuration, writing standards), install: `npx skills add https://mintlify.com/docs`

# Monaris documentation instructions

## Project basics

- This is a Mintlify docs site.
- Content pages are MDX with YAML frontmatter.
- Main config is `docs.json`.
- Local preview: `mint dev`
- Link check: `mint broken-links`

## Source-of-truth policy

- Generate docs from the Monaris product brief provided by the team.
- Do not invent features, limits, pricing, legal positions, or launch status.
- If information is unknown, keep `[PLACEHOLDER: ...]` and flag it clearly.
- Keep section order exactly when translating the brief into docs.

## Documentation architecture

1. `index.mdx`: What Monaris is, what it is not, core insight, product map.
2. `getting-started.mdx`: first 5-minute user experience.
3. Product pages:
   - Invoices (`invoices/*`)
   - Score (`score/*`)
   - Mona (`mona/*`)
   - Pay (`pay/*`)
   - Privacy (`privacy/*`)
   - Credit (`credit/*`)
   - Business (`business/*`)
4. Concepts (`concepts/*`): cashflow underwriting, privacy, stablecoin credit, flywheel.
5. API (`api/*`): overview, score API, webhooks, privacy API, integration guide.
6. Reference (`reference/*`): glossary, architecture, data sources, user flows, security/privacy, roadmap.

## Voice and style

- Direct, technical, human.
- No fluff and no corporate filler.
- Active voice and second person.
- Use exact product names:
  - Monaris
  - Mona
  - Monaris Score
  - Monaris Pay
  - Monaris AR/AP
  - Monaris Credit
  - Monaris Business
- Use sentence case in headings.
- Bold UI labels and actions.
- Use code formatting for commands, paths, API fields, statuses, and endpoints.

## Safety and legal content rules

- Any page touching credit must include a disclaimer:
  - "This documentation does not constitute financial, legal, or investment advice."
  - Include jurisdiction placeholder text until counsel-approved language is provided.
- Never describe credit as available to everyone.
- Always present Monaris Credit eligibility before rates, fees, and limits.
- Do not use the word "guaranteed" for projected financial outcomes.

## Feature maturity labeling

- V1: live and in current product.
- V2/V3/V4: planned or roadmap; label clearly as not live where applicable.
- Keep maturity labeling consistent across all linked pages.

## Quality gate before publish

- Frontmatter includes `title` and `description`.
- Internal links resolve.
- Terminology matches `reference/glossary.mdx`.
- Numbers/thresholds are consistent across pages.
- Placeholders are explicit and easy to locate.
