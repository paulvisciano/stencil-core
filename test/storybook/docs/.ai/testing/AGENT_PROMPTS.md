# Minimal, conversational prompts for the GenAI testing loop

Load context first (required):
- Load the entire `.ai/testing` folder.
- Include `AGENT_KEYWORDS.md` and `project-config.mdx`.
- Also load `Testing/Decorators/*` for coverage scripts/data.

Note: Let the AI infer the exact scripts/commands from the `.ai/testing` docs and package.json. Keep prompts short and task-focused.

---

### Generate @Prop components

Copy/paste this minimal prompt to generate components:

```
gen the @Prop components
```

This will:
- Generate all 24 @Prop test components (6 types × 2 reflect × 2 mutable)
- Automatically verify coverage (24/24), file count, grouping, and exclusivity
- Update component coverage data

### Complete workflow (3-step process)

```
gen the @Prop components
build the components  
test the components
```

### Build components only

```
build the components
```

### Test components only

```
test the components
```

---

### Generate other decorator components

```
gen the @State components
```

```
gen the @Event components  
```

```
gen the @Method components
```

```
gen the @Listen components
```

```
gen the @Component components
```

---

### Implement missing @Prop test cases

Copy/paste one of these minimal prompts into ChatGPT/Copilot:

```
Implement Test Case #5 for the @Prop decorator following the existing convention.

Use the current patterns in the repo:
- Add or extend WDIO specs under test/wdio/prop/tests so the relevant <prop-...> tags are rendered in JSX (overlay detects tags from JSX).
- Add small, robust assertions (exact text, attribute presence) consistent with other @Prop/@State specs.
- Re-run the Prop test-coverage.js so data/test-coverage.json updates and the @Prop docs show #5 in the Test Cases table and “Tested By”.
```

```
Implement Test Case #6 for the @Prop decorator following the existing convention.

Same guidance: add/extend tests under test/wdio/prop/tests, ensure JSX renders the right tags, keep assertions simple, and re-run the Prop test-coverage.js to update coverage and docs.
```
