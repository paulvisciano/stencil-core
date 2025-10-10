# @Component Decorator Coverage Strategy

This document outlines the approach to achieve and maintain 100% coverage for valid `@Component` permutations as defined by `Testing/Decorators/Component/coverage.js`.

## Source of Truth
- Coverage data: `Testing/Decorators/Component/coverage-data.json`
- Script: `Testing/Decorators/Component/coverage.js`
- Matrix location: `test/wdio/component-decorator/matrix/`

## Options & Valid States
- Options order: `[shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles]`
- Symbols: `✓` (true/set), `✗` (false), `-` (absent)
- Style exclusivity: At most one of `styleUrl`, `styleUrls`, or `styles` may be set per component.

Valid style states:
- `[✓, -, -]`  → `styleUrl`
- `[-, ✓, -]`  → `styleUrls`
- `[-, -, ✓]`  → `styles`
- `[-, -, -]`  → none

## Rules
- Shadow and Scoped are mutually exclusive; do not set both to true.
- Exactly one file per unique permutation.
- Names: `cmp-*` or `component-*`, placed in `matrix/`.

## Standardized Assets
- `styleUrl`: `'matrix-gen.css'`
- `styleUrls`: `['matrix-gen.css', 'matrix-alt.css']`
- `styles`: `':host{display:block}'`

## Workflow (.ai scripts)
From `test/storybook/docs/.ai/testing`:
- `npm run refresh-coverage-matrix` → refresh coverage JSON
- `npm run component:generate-components` → fill gaps under `matrix/`
- `npm run refresh-coverage-matrix` → confirm 100%
- `npm run build-wdio-components` → build WDIO project

## Status (2025-09-08)
- Covered: 192/192 (100.0%)
- .tsx count under `test/wdio/component-decorator/**` equals covered (192)
- Imports normalized to `import { Component, h } from '@stencil/core'`
- Invalid permutations pruned; exclusivity enforced
- Generator emits one file per missing permutation with `cmp-` prefix

## Verification Guardrails
- Parity check: `.tsx` count must equal `coverage.covered`
- No files setting multiple style props
- No `shadow:true` + `scoped:true`

## Decorator Folder Convention (applies to all decorators)
To keep Phase 1 (compile coverage) and Phase 2 (runtime tests) consistent across the project, each decorator has its own subfolder under `Testing/Decorators/<Decorator>/` with the same set of scripts and JSON files:

- `@<Decorator>.mdx` — Storybook docs page for the decorator.
- `rules.json` — single source of truth for Component property rules; rendered in docs via `RulesAtAGlance` to avoid drift.
- `generate-components.js` — generates components for all permutations in the matrix under the relevant WDIO matrix folder.
- `coverage.js` — scans the matrix, computes Phase 1 compile coverage, and writes `coverage-data.json`.
- `coverage-data.json` — compile-time coverage summary (covered/total/missing) plus files per permutation; used by docs and verification.
- `coverage-overlay.json` — Phase 2 runtime test overlay (tested/testedBy/group), built by the verify pipeline.

Examples today:
- `Testing/Decorators/Component/`
- `Testing/Decorators/State/`

Remaining decorators (Prop, Event, Listen, Method) will follow the same folder/file convention as they are aligned to this system.

## Troubleshooting
- If WDIO build fails due to missing CSS, ensure `matrix-gen.css` and `matrix-alt.css` exist in `matrix/`.
- If coverage dips, search for invalid permutations or duplicate files.
