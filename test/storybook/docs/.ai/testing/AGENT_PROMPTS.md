# Example Prompts for the GenAI Testing Loop

> Load full context first: In your AI session, load the entire `.ai/testing` folder (AGENT_KEYWORDS.md, AGENT_PROMPTS.md, project-config.mdx, coverage-matrix/, decorators/, tests/ docs) so the framework has complete context.

These copy-paste prompts help contributors drive the testing workflow consistently. Use them together with the context in this folder.

References:
- Always load `.ai/testing/AGENT_KEYWORDS.md` and `project-config.mdx` for standard terms and paths.
- Coverage scripts/data live under `Testing/Decorators/`.
- WDIO components live under `test/wdio/`.

---

## 1) Coverage Matrix: Refresh → Generate → Refresh (Components)
> Using the Context Pack and `project-config.mdx`, read `Testing/Decorators/component-coverage-data.json`, list `missingPermutations`, then generate exactly one `.tsx` per missing permutation under `test/wdio/component-decorator/matrix/` with 1-level grouping by render mode (`matrix/shadow`, `matrix/scoped`, `matrix/light`). Enforce exclusivity: only one of `styleUrl|styleUrls|styles`; `shadow` and `scoped` cannot both be true. Use standardized CSS assets with parent-relative paths from subfolders:
> - `styleUrl: '../matrix-gen.css'`
> - `styleUrls: ['../matrix-gen.css', '../matrix-alt.css']`
> Re-run coverage and ensure parity: `.tsx` count under `test/wdio/component-decorator/**` equals `covered`. Stop when `covered === total`.
> Preferred scripts (run from `.ai/testing`): `npm run refresh-coverage-matrix`, `npm run generate-missing-components`, `npm run coverage-loop`.

## 2) Build and Verify (no tests yet)
> After reaching 100% component coverage, build the WDIO project and fix any compiler errors (e.g., mutually exclusive decorator options). Re-run coverage to confirm it stays at 100%.
> Scripts: `npm run build-wdio-components` → fix issues → `npm run refresh-coverage-matrix`.

## 3) Targeted WDIO Run (Listen suite)
> Run only the Listen decorator tests via the targeted runner to validate changes without executing the whole suite.
> Command (from `.ai/testing`): `npm run run-component-tests:spec -- ./listen/**/*.test.tsx`

## 4) Test Generation for Matrix Components
> Using the finalized `@Component` coverage matrix, generate WDIO tests for each component following the documented patterns (isolation per feature, simple DOM interactions, and assertions). Prefer event verification via in-component `@Listen` where applicable. Place tests under the corresponding WDIO folder, and use the targeted runner while iterating.
> Scripts: `npm run build-wdio-components`, then `npm run run-component-tests:spec -- <glob>`.

## 5) Single-Spec Debug Prompt
> I’m debugging a flaky or failing spec. Limit the run to a single file and provide suggested fixes based on the component and test code. Re-run the same spec until green. Command: `npm run run-component-tests:spec -- ./path/to/spec.test.tsx`.

## Rules Recap (quick)
- One file per unique `@Component` permutation.
- Exclusivity:
  - Only one of `styleUrl | styleUrls | styles`.
  - `shadow: true` and `scoped: true` cannot both be true.
- Group by render mode under `matrix/shadow | matrix/scoped | matrix/light`.
- Standard CSS assets and parent-relative paths from grouped subfolders.
- Maintain parity: `.tsx` count equals `covered` in coverage JSON after each refresh.

## Helpful Scripts
- Refresh coverage (all decorators): `npm run refresh-coverage-matrix`
- Auto loop (refresh → generate → refresh): `npm run coverage-loop`
- Generate components for gaps: `npm run generate-missing-components`
- Build WDIO components: `npm run build-wdio-components`
- Run all WDIO tests: `npm run run-component-tests`
- Targeted WDIO run: `npm run run-component-tests:spec -- <glob>`

---

Future: ingestion pipeline
- A future iteration can add an ingestion step that reads the target repo structure and updates `project-config.mdx` (and related settings) automatically so the framework is truly project-agnostic.
