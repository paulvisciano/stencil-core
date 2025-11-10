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
- **Query Status**: `"query missing test cases"` → Shows complete missing test case summary across all decorators AND Extends
- **Show Missing**: `"show me the missing test cases"` → Displays holistic view of unimplemented tests (Decorators + Behavior)
- **Test Coverage**: `"what test cases are missing"` → Runs enhanced query utility with detailed status
- **Phase 2 Status**: `"check Phase 2 progress"` → Shows WDIO test implementation status for all decorators

### Extends Functionality (Behavior Testing)
- **Test Extends**: `"test extends functionality"` → Runs extends tests and auto-updates coverage + timestamp
- **Update Extends Coverage**: `"update extends coverage"` → Manually updates extends test-coverage.json without running tests
- **Status**: 8/17 test cases implemented, 71 tests passing

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
  - Behavior: `⚠️ Extends: 8/17 implemented, missing #3, #4, #5... (71 tests passing)`
- **Details**: Shows both component assignment AND actual WDIO test implementation status
- **Breakdown**: Identifies specific missing test case numbers for immediate action
- **Coverage**: Now includes Extends functionality alongside decorator tests

## Build & Test Integration
- Generation → Build → Test → Coverage verification
- All steps automated in single prompt workflows
- WDIO integration for browser testing
- Stencil compiler integration for component compilation
