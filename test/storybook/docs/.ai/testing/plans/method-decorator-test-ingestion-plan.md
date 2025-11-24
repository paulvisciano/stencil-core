# Method Decorator Test Ingestion Plan

## Overview

The current @Method decorator documentation only includes tests from `test/wdio/method`, but there are many other components in the WDIO folder that use @Method decorators. This plan will scan all WDIO folders, find components with @Method decorators, identify their tests, categorize them into test cases, and update the documentation.

## Implementation Results

**Status**: ✅ Completed

**Summary**:
- Found 29 files with `@Method` decorators across `test/wdio/`
- Created 15 test cases (3 existing + 12 new)
- Documented 26 components total
- Verified 99 total tests passing
- Updated documentation with comprehensive test coverage

**Test Cases Created**:
- Test Cases #1-3: Basic method types (already existed)
- Test Case #4: Method inheritance basics (already existed)
- Test Cases #5-15: New test cases covering real-world scenarios

**Files Modified**:
1. `test/storybook/docs/Testing/Decorators/Method/data/test-coverage.json` - Added 12 new test cases
2. `test/storybook/docs/Testing/Decorators/Method/test-coverage.js` - Added documentation comments
3. `test/storybook/docs/Testing/Decorators/Method/@Method.mdx` - Updated with all test cases

**Verification**:
- All 99 tests verified passing
- All test file paths verified correct
- Documentation renders correctly
- Coverage statistics accurate

## Current State Analysis

### Existing Test Cases (from test/wdio/method):

- **Test Case #1**: Promise methods (returns promise, async/non-async, with/without args)
- **Test Case #2**: Value methods (returns value, async, with/without args)
- **Test Case #3**: Void methods (returns void, async, with/without args)
- **Test Case #4**: Method Inheritance Basics (from test/wdio/ts-target/extends-methods)

### Components Found with @Method Decorators:

1. `test/wdio/method/` - Already documented (Test Cases #1-3)
2. `test/wdio/ts-target/extends-methods/` - Already documented (Test Case #4)
3. `test/wdio/esm-import/esm-import.tsx` - Method emits events
4. `test/wdio/attribute-boolean/cmp-root.tsx` - Method toggles state
5. `test/wdio/computed-properties-state-decorator/cmp.tsx` - Method updates computed state
6. `test/wdio/attribute-complex/cmp.tsx` - Method returns component instance
7. `test/wdio/scoped-slot-assigned-methods/cmp.tsx` - Methods interact with slots
8. `test/wdio/dynamic-imports/dynamic-import.tsx` - Method uses dynamic imports
9. `test/wdio/radio-group-blur/test-radio.tsx` - Methods handle focus/blur
10. `test/wdio/ts-target/extends-props-state/cmp.tsx` - Methods update inherited props/state
11. `test/wdio/ts-target/extends-mixin/cmp.tsx` - Methods in mixin inheritance
12. `test/wdio/ts-target/extends-external/cmp.tsx` - Methods in external inheritance
13. `test/wdio/ts-target/extends-cmp/cmp.tsx` - Methods in component inheritance
14. `test/wdio/ts-target/extends-abstract/cmp.tsx` - Methods in abstract class inheritance
15. `test/wdio/test-sibling/src/sibling-extended-base/sibling-extended-base.tsx` - Methods in sibling components

## Implementation Steps

### Step 1: Comprehensive Scan

- Scan all files in `test/wdio/` for components with `@Method` decorator
- Extract component tag names, method signatures, and test file locations
- Map each component to its test file(s)

### Step 2: Categorize into Test Cases

Group components into logical test cases:

**Test Case #5 - Methods with State Management**

- Components: `attribute-boolean-root`, `computed-properties-state-decorator`
- Tests: Methods that update component state and trigger re-renders
- Test files: `test/wdio/attribute-boolean/cmp.test.tsx`, `test/wdio/computed-properties-state-decorator/cmp.test.tsx`

**Test Case #6 - Methods Returning Component Instances**

- Components: `attribute-complex`
- Tests: Methods that return component instances for testing/debugging
- Test file: `test/wdio/attribute-complex/cmp.test.tsx`

**Test Case #7 - Methods with DOM/Slot Interaction**

- Components: `scoped-slot-assigned-methods`
- Tests: Methods that interact with slot elements (assignedElements, assignedNodes)
- Test file: `test/wdio/scoped-slot-assigned-methods/cmp.test.tsx`

**Test Case #8 - Methods with Event Emission**

- Components: `esm-import`
- Tests: Methods that emit events
- Test file: `test/wdio/esm-import/cmp.test.tsx`

**Test Case #9 - Methods with Dynamic Imports**

- Components: `dynamic-import`
- Tests: Methods that use dynamic imports
- Test file: `test/wdio/dynamic-imports/cmp.test.tsx`

**Test Case #10 - Methods with Focus/Blur Handling**

- Components: `ion-radio` (from radio-group-blur)
- Tests: Methods that handle focus/blur events
- Test file: `test/wdio/radio-group-blur/cmp.test.tsx`

**Test Case #11 - Methods in Props/State Inheritance**

- Components: `extends-props-state`
- Tests: Methods that update inherited props and state
- Test file: `test/wdio/ts-target/extends-props-state/cmp.test.ts`

**Test Case #12 - Methods in Mixin Inheritance**

- Components: `extends-mixin-cmp`, `extends-mixin` (mixin-a, mixin-b)
- Tests: Methods in mixin-based inheritance scenarios
- Test file: `test/wdio/ts-target/extends-mixin/cmp.test.ts`

**Test Case #13 - Methods in External Component Inheritance**

- Components: `extends-external`
- Tests: Methods in external component inheritance
- Test file: `test/wdio/ts-target/extends-external/cmp.test.ts`

**Test Case #14 - Methods in Component Inheritance**

- Components: `extends-cmp-cmp`, `extends-cmp`
- Tests: Methods in component-to-component inheritance
- Test file: `test/wdio/ts-target/extends-cmp/cmp.test.ts`

**Test Case #15 - Methods in Abstract Class Inheritance**

- Components: `extends-abstract`
- Tests: Methods in abstract class inheritance
- Test file: `test/wdio/ts-target/extends-abstract/cmp.test.ts`

**Test Case #16 - Methods in Sibling Component Inheritance**

- Components: `sibling-extended-base`
- Tests: Methods in sibling component inheritance scenarios
- Test file: (check if exists)

### Step 3: Update test-coverage.json

- Add new test cases to `test/storybook/docs/Testing/Decorators/Method/data/test-coverage.json`
- For each component:
- Determine return type (promise/value/void) and async status
- Map to appropriate test case(s)
- Add component metadata (tag, files, group, optionsKey)
- Link to test files

**test-coverage.json Structure**:
```json
{
  "testCaseStatus": {
    "N": {
      "implemented": true,
      "componentCount": X,
      "testCount": Y,  // ← Must match actual test count!
      "hasComponents": true,
      "hasWdioTest": true,
      "components": [
        {
          "tag": "component-name",
          "group": "category",
          "optionsKey": "key|format"
        }
      ]
    }
  },
  "items": [
    {
      "group": "category",
      "options": { /* decorator-specific options */ },
      "optionsKey": "key|format",
      "files": ["relative/path/to/component.tsx"],
      "tag": "component-name",
      "tested": true,
      "caseIds": [N],
      "testedBy": ["Test Case #N"],
      "testFile": "test/wdio/path/to/test.test.tsx"  // ← For manually tracked
    }
  ]
}
```

**Key Fields**:
- `testCount`: Actual number of `it()` tests (verify by running tests!)
- `componentCount`: Number of components in this test case
- `testFile`: Path to test file (required for manually tracked test cases)
- `caseIds`: Array of test case IDs this component belongs to
- `optionsKey`: Unique identifier for this component's decorator options

### Step 4: Update test-coverage.js Script

- Modify `test/storybook/docs/Testing/Decorators/Method/test-coverage.js` to:
- Scan beyond `test/wdio/method/` folder
- Recognize additional component tag patterns
- Assign case IDs based on method behavior (not just return type)
- Include test file paths in coverage data

### Step 5: Update Documentation

- Update `test/storybook/docs/Testing/Decorators/Method/@Method.mdx`:
- Add descriptions for new test cases
- Update Test Cases table with new cases
- Add component references with links to test files
- Update coverage summary statistics

### Step 6: Verify Documentation

- Ensure all components are properly categorized
- Verify test file links are correct
- Check that test case descriptions accurately reflect what's being tested
- Confirm coverage statistics are accurate

## Files to Modify

1. `test/storybook/docs/Testing/Decorators/Method/data/test-coverage.json` - Add new test cases and components
2. `test/storybook/docs/Testing/Decorators/Method/test-coverage.js` - Update scanning logic
3. `test/storybook/docs/Testing/Decorators/Method/@Method.mdx` - Update documentation

## Files to Read (for analysis)

- All component files with @Method decorators in `test/wdio/`
- All corresponding test files
- Current test-coverage.json structure
- Test case assignment logic in test-coverage.js

## Lessons Learned & Important Notes

### Test Counting Methodology

**Critical**: Always verify test counts by running the actual tests, not just counting `it()` blocks in code.

1. **Run tests individually** to get accurate counts:
   ```bash
   cd test/wdio
   npm run wdio -- --spec <test-suite-name>
   ```
   Look for the "X passing" message in the output.

2. **Count tests per test case**, not per component:
   - Some test cases span multiple components
   - Some components have multiple test cases
   - Inheritance test cases often have many tests (10-15+)

3. **Verify total count matches documentation**:
   - Sum all test counts from test-coverage.json
   - Run all related tests and verify the total matches
   - Documented total should equal actual test count

### Automatic vs Manual Test Tracking

**Important Gap**: The `test-coverage.js` script only automatically tracks tests in the main decorator folder (e.g., `test/wdio/method/`).

**For Test Cases in Main Folder** (e.g., Test Cases #1-3):
- ✅ Automatically counted by `test-coverage.js`
- ✅ Updates automatically when tests are added/removed
- ✅ Script scans `test/wdio/{decorator}/tests.tsx` and counts `it()` blocks

**For Test Cases Outside Main Folder** (e.g., Test Cases #4-15):
- ❌ Manually tracked in `test-coverage.json`
- ❌ Must manually update `testCount` when tests change
- ❌ Script does NOT scan these files automatically
- ⚠️ **Risk**: Documentation can become out of sync if tests are added/removed

**Recommendation**: When ingesting other decorators, consider:
- Extending the script to scan all WDIO folders
- Or creating a validation script to detect count mismatches
- Or documenting which test cases require manual updates

### Test File Location Patterns

Common patterns found:
- Main decorator tests: `test/wdio/{decorator}/tests.tsx`
- Component-specific tests: `test/wdio/{component-name}/cmp.test.tsx`
- Inheritance tests: `test/wdio/ts-target/extends-*/cmp.test.ts`
- Some tests use `.test.ts`, others use `.test.tsx` (both are valid)

### Component Tag Naming

- Generated components follow patterns: `{decorator}-{option1}-{option2}-{option3}`
- Real-world components use descriptive names: `attribute-boolean-root`, `scoped-slot-assigned-methods`
- Inheritance components: `extends-*`, `sibling-*`
- Some components are nested in subdirectories (e.g., `test-sibling/src/`)

### Test Case Organization

**Group by behavior, not just by decorator options:**
- Basic decorator options (Test Cases #1-3): Organized by return type/async/args
- Real-world scenarios (Test Cases #5-10): Organized by use case (state management, events, etc.)
- Inheritance scenarios (Test Cases #11-15): Organized by inheritance type

**Test case descriptions should:**
- Clearly explain what behavior is being tested
- List the components involved
- Reference the test file location
- Be specific enough to understand the test case without reading code

### Common Gotchas

1. **Test counts can be misleading**: A test case with 1 component might have 15 tests (inheritance scenarios)
2. **Components can belong to multiple test cases**: Inheritance components often test multiple behaviors
3. **Test files might not match component names**: Check actual test file structure
4. **Some components are base classes**: They don't have their own tests but are tested through child components
5. **Test file extensions vary**: `.test.ts` vs `.test.tsx` - both are valid

### Validation Checklist

After ingestion, verify:
- [ ] All test file paths exist and are correct
- [ ] Test counts match actual test runs
- [ ] Total test count matches sum of all test cases
- [ ] All components are properly categorized
- [ ] Test case descriptions are accurate
- [ ] Documentation renders correctly (no syntax errors)
- [ ] Coverage statistics are accurate

### Reusable Patterns for Other Decorators

1. **Scan Strategy**:
   ```bash
   grep -r "@DecoratorName" test/wdio/ --include="*.tsx" --include="*.ts"
   ```

2. **Test Count Verification**:
   ```bash
   # Run each test suite individually
   npm run wdio -- --spec <suite-name>
   # Extract "X passing" from output
   ```

3. **Component-to-Test Mapping**:
   - Check for `cmp.test.tsx` or `cmp.test.ts` in same directory
   - Check for `tests.tsx` in parent directory
   - Some components share test files (inheritance scenarios)

4. **Test Case Categorization**:
   - Start with basic decorator options (if applicable)
   - Add real-world usage scenarios
   - Add edge cases and inheritance scenarios
   - Group logically by behavior, not just by options

5. **Documentation Updates**:
   - Update Test Cases table component to show all cases
   - Add test case descriptions in "Test Categories" section
   - Update component grouping section
   - Ensure TODO section logic handles all cases

### Future Enhancements

Consider implementing:
1. **Automatic test counting** for all test cases (not just main folder)
2. **Validation script** that compares documented vs actual test counts
3. **Test discovery script** that finds all decorator usages automatically
4. **Test case auto-assignment** based on component behavior patterns
5. **Documentation sync check** in CI/CD pipeline

### Notes for Other Decorators

When applying this plan to other decorators (e.g., `@Prop`, `@State`, `@Event`):

1. **Check existing structure**: Some decorators may already have comprehensive coverage
2. **Identify unique patterns**: Each decorator has different usage patterns
3. **Inheritance scenarios**: Many decorators are tested in `ts-target/extends-*` folders
4. **Real-world components**: Look for components that use the decorator in practical ways
5. **Test organization**: Some decorators group tests differently (e.g., by feature vs by option)

### Script Limitations

The current `test-coverage.js` script:
- Only scans `test/wdio/{decorator}/` folder
- Only counts tests in `tests.tsx` files
- Only recognizes components matching tag patterns
- Does not scan subdirectories recursively
- Does not handle test cases outside main folder

**Workaround**: Manually add test cases to `test-coverage.json` with:
- `testFile` property pointing to actual test file
- `testCount` manually set to actual test count
- `tested: true` flag
- Proper `caseIds` array

### Maintenance Notes

**When tests are added/removed:**
- Test Cases #1-3: Run `test-coverage.js` script to auto-update
- Test Cases #4-15: Manually update `test-coverage.json`
- Always verify by running tests and comparing counts
- Update documentation if test case descriptions change

**When components are added/removed:**
- Add/remove component entries in `test-coverage.json` `items` array
- Update `testCaseStatus` component lists
- Update component counts
- Verify test file paths still exist