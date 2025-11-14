# AI Prompt Shortcuts for Stencil Testing Framework

## Component Generation (Super Quick)

### Generation Only (Step 1)
- **@Prop**: `"gen the @Prop components"` → Generates + verifies all 24 test components
- **@State**: `"gen the @State components"` → Generates + verifies all 12 state components
- **@Event**: `"gen the @Event components"` → Generates + verifies all 8 event components
- **@Method**: `"gen the @Method components"` → Generates + verifies all 8 method components
- **@Listen**: `"gen the @Listen components"` → Generates + verifies all 44 listener components
- **@Component**: `"gen the @Component components"` → Generates + verifies all 193 component decorator variants

### Build & Test Steps
- **Build**: `"build the components"` → Compiles all WDIO test components
- **Test**: `"test the components"` → Runs WDIO test suite

## Test Case Status Queries

### Missing Test Cases
When asked about missing test cases, ALWAYS run the query script first:

- **Primary Queries** (all run `/test/storybook/docs/Testing/Decorators/_shared/query-missing-tests.js`):
  - `"what test cases are missing"` → Run query script to show missing tests
  - `"query missing test cases"` → Run query script to show missing tests
  - `"show me the missing test cases"` → Run query script to show missing tests
  - `"what tests are missing"` → Run query script to show missing tests
- **Phase 2 Status**: `"check Phase 2 progress"` → Shows WDIO test implementation status for all decorators

**Note**: DO NOT ask for clarification when the user asks about missing tests - immediately search for and run the query-missing-tests.js script.

### Test Coverage Updates
- **Update All Coverage**: `"update the test coverage"` → Runs `npm run test-coverage` from `.ai/testing/` directory (updates all decorator and Extends coverage)
- **Update Extends Coverage**: `"update extends coverage"` → Manually updates extends test-coverage.json without running tests

### Extends Functionality (Behavior Testing)
- **Test Extends**: `"test extends functionality"` → Runs extends tests and auto-updates coverage + timestamp
- **Status**: 11/17 test cases implemented, 108 tests passing

### Complete 3-Step Workflow
```
gen the @Prop components    # Generate component files
build the components        # Compile with Stencil
test the components         # Run WDIO tests
```

## Key Locations
- **Scripts**: `/test/storybook/docs/.ai/testing/package.json`
- **Working Directory**: `/test/storybook/docs/.ai/testing/` (REQUIRED for all npm commands)
- **Query Utility**: `/test/storybook/docs/Testing/Decorators/_shared/query-missing-tests.js` (includes Extends)
- **@Prop Components**: `/test/wdio/prop/components/`
- **@State Components**: `/test/wdio/state/components/`
- **Legacy Components**: `/test/wdio/{decorator}/matrix/`
- **Extends Tests**: `/test/wdio/ts-target/extends-*/`
- **Extends Docs**: `/test/storybook/docs/Testing/Behavior/Extends/`

## ⚠️ CRITICAL: Working Directory
**All testing framework scripts MUST be run from `/test/storybook/docs/.ai/testing/` directory, NOT from the project root.**

## Component Patterns
- **@Prop**: `prop-{type}-reflect-{boolean}-mutable-{boolean}.tsx`
- **@State**: `state-{type}-{default-state}.tsx`

## Built-in Verification
- Generation scripts include automatic verification (coverage, file count, grouping, exclusivity)
- 100% coverage expected and validated during generation
- "generate+verify" completes successfully before proceeding
- Test coverage updates automatically after generation

## Expected Outputs

### Component Generation
- **@Prop**: 24 components (6 types × 2 reflect × 2 mutable)
- **@State**: 12 components (6 types × 2 default states)
- **Total Framework**: 289 test components across all decorators

### Test Case Status Query
- **Format**: 
  - Decorators: `✅ @Event: All test cases implemented` | `⚠️ @Prop: Missing cases #6` | `❌ @Method: No testCaseStatus found`
  - Behavior: `⚠️ Extends: 9/17 implemented, missing #4, #5, #10, #11, #13, #14, #15, #16 (86 tests passing)`
- **Details**: Shows both component assignment AND actual WDIO test implementation status
- **Breakdown**: Identifies specific missing test case numbers for immediate action
- **Coverage**: Includes Extends functionality alongside decorator tests

## Build & Test Integration
- Generation → Build → Test → Coverage verification
- All steps automated in single prompt workflows
- WDIO integration for browser testing
- Stencil compiler integration for component compilation
