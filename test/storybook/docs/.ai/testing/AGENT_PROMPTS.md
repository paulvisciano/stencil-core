# Minimal, conversational prompts for the GenAI testing loop

Load context first (required):
- Load the entire `.ai/testing` folder.
- Include `AGENT_KEYWORDS.md` and `project-config.mdx`.
- Also load `Testing/Decorators/*` for coverage scripts/data.

Note: Let the AI infer the exact scripts/commands from the `.ai/testing` docs and package.json. Keep prompts short and task-focused.

---

## Coverage workflow
- "Refresh component coverage, generate any missing @Component matrix components, and verify parity. Stop when coverage is 100%."
- "List current @Component missing permutations and where new files should be created."
- "Regenerate the coverage matrix and ensure grouping by render mode (shadow/scoped/light)."

## Build workflow
- "Build the WDIO components and re-run coverage if needed. Fix any compiler errors you find."

## Targeted testing
- "Run only the Listen decorator tests."
- "Run just this spec and debug it until green: ./path/to/spec.test.tsx"

## Maintenance and summaries
- "Summarize the current coverage status, totals, and parity with the matrix .tsx count."
- "Verify matrix components use parent-relative CSS asset paths per conventions. Fix any that don’t."
