# Extends Functionality Testing Workflow

Complete workflow for building, testing, and maintaining Extends component tests.

## 🚀 Quick Start

### 1. Build Components
```bash
cd test/storybook/docs/.ai/testing
npm run components-build
```

### 2. Run Extends Tests
```bash
npm run extends:test
```
**Auto-runs coverage update** via `postextends:test` hook, which:
- Scans all `extends-*` test directories
- Counts tests per component
- Detects output target breakdowns (dist, customElements, hydrate)
- Updates `test-coverage.json` with current stats
- Updates timestamp in `Overview.mdx`

### 3. View Missing Test Cases
```bash
npm run query-missing-tests
```
Shows all missing test cases across decorators and Extends functionality.

### 4. Manually Update Coverage (Optional)
```bash
npm run extends:test-coverage
```
Only needed if you want to refresh coverage without running tests.

---

## 📋 Workflow Steps

### Adding a New Test Case

1. **Identify missing test case**
   ```bash
   npm run query-missing-tests
   ```
   Example output:
   ```
   ⚠️  Extends: 8/17 implemented, missing #3, #4, #5, #10, #11, #13, #14, #15, #16
   ```

2. **Create test directory**
   ```
   test/wdio/ts-target/extends-[name]/
   ├── cmp.tsx                           # Component implementation
   ├── cmp.test.ts                       # WDIO test specs
   ├── es2022.dist.html                  # Dist build test page
   ├── es2022.custom-element.html        # Custom elements test page
   └── es2022.hydrate.html               # Hydrate test page (optional)
   ```

3. **Build components**
   ```bash
   npm run components-build
   ```

4. **Run tests**
   ```bash
   npm run extends:test
   ```
   Coverage automatically updates! ✅

5. **Verify in documentation**
   - Check `test-coverage.json` for updated counts
   - View `Overview.mdx` in Storybook for visual summary
   - Run `query-missing-tests` to confirm test case is now implemented

---

## 🔧 AI-Assisted Development

### Ask AI to Help

**Example prompts:**
- *"Help me implement test case #3 for Property & State Inheritance"*
- *"Create a test for Method Inheritance Basics (test case #4)"*
- *"Show me examples of @Watch decorator inheritance tests"*

**AI can help with:**
- Scaffolding new test directories
- Writing component implementations
- Creating WDIO test specs
- Debugging test failures
- Updating documentation

### Quick AI Shortcuts

From `ai-prompt-shortcuts.md`:
- `"test extends functionality"` - Run all extends tests
- `"update extends coverage"` - Manually update coverage data
- `"query missing tests"` - Show missing test cases
- `"build components"` - Build all components

---

## 📊 Coverage System

### Automated Updates

The `test-coverage.js` script automatically:
- **Scans** all `extends-*` directories in `test/wdio/ts-target/`
- **Counts** `it()` blocks in `cmp.test.ts` files
- **Detects** output targets from `describe` blocks:
  - `dist output` → counted as "dist"
  - `custom-element output` → counted as "customElements"
  - `hydrate output` → counted as "hydrate"
- **Updates** `test-coverage.json` with:
  - `implemented` status
  - `componentCount`
  - `testCount`
  - `testBreakdown` (e.g., `"dist:4, customElements:1"`)
  - `specPath`
- **Preserves** manual documentation:
  - `description`
  - `note`
  - `category`

### Hybrid Data Model

`test-coverage.json` contains:
- **Auto-generated fields** (updated by script):
  - `version`, `summary.note` (with timestamp)
  - Per test case: `implemented`, `componentCount`, `testCount`, `testBreakdown`, `specPath`
- **Manual fields** (you maintain):
  - Per test case: `description`, `note`, `category`
  - `summary.totalTestCases`, category counts

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `test-coverage.json` | Test metadata and counts (hybrid manual + auto-generated) |
| `Overview.mdx` | Storybook documentation with visual summary |
| `test-coverage.js` | Automation script that scans tests and updates data |
| `package.json` | Scripts for build, test, coverage, query |
| `query-missing-tests.js` | Identifies missing test cases across all features |

---

## 🎯 CI Integration

### Validation Script

```bash
# Run in CI to validate test coverage
npm run extends:test
# Exits with error if tests fail
# Auto-updates coverage data
```

### Verify Coverage Changes

```bash
# After running tests, check git diff
git diff test-coverage.json
git diff Overview.mdx
```

If test counts change unexpectedly, investigate:
- Did someone add/remove tests?
- Are tests being skipped?
- Check `test-coverage.json` diff for specifics

---

## 🔍 Troubleshooting

### Tests not detected
- Ensure test file is named `cmp.test.ts`
- Check that tests use `it()` function (not `test()`)
- Verify directory follows `extends-*` naming pattern

### Coverage not updating
```bash
# Manually run coverage script
npm run extends:test-coverage

# Check for errors in output
# Verify TEST_DIR path in test-coverage.js
```

### Build failures
```bash
# Full rebuild
npm run components-build

# Check for TypeScript errors
# Verify component decorators are correct
```

---

## 📈 Current Status

**8/17 test cases implemented** (71 tests passing)

**Implemented:**
- ✅ #1 - Lifecycle Inheritance (Basic)
- ✅ #2 - Multi-Level Lifecycle Inheritance
- ✅ #6 - Abstract Class Inheritance
- ✅ #7 - External Library Inheritance
- ✅ #8 - Mixin Pattern
- ✅ #9 - ClockController (Reactive Pattern)
- ✅ #12 - Controller-Initiated Updates
- ✅ #12a - Direct State Management

**Missing:**
- ⏳ #3 - Property & State Inheritance
- ⏳ #4 - Method Inheritance
- ⏳ #5 - Render Method Inheritance
- ⏳ #10 - Event Handling Inheritance
- ⏳ #11 - Watch Decorator Inheritance
- ⏳ #13 - FloatingUI Controller
- ⏳ #14 - ValidationController
- ⏳ #15 - Decorator Conflicts & Edge Cases
- ⏳ #16 - SSR & Hydration

---

## 🎨 Storybook Integration

View test coverage in Storybook:
1. Navigate to **Testing > Behavior > Extends > Overview**
2. See visual summary with:
   - Total tests passing
   - Test case breakdown by category
   - Individual test case status
   - Component counts and test distributions
3. Auto-updated timestamp shows last test run

---

*Last updated: Nov 10, 2025*

