# Implement Extends Test Case #15 - Decorator Conflicts

## Overview

Test case #15 validates decorator conflict resolution when duplicate decorator names of the same type exist in inheritance chains. It tests compiler precedence rules for duplicate @Prop names, duplicate @State names, duplicate @Method names, and verifies that component decorators override base class decorators.

## Files to Create

### 1. Base Class: `test/wdio/ts-target/extends-conflicts/conflicts-base.ts`

- Base class with @Prop, @State, and @Method decorators
- Properties/methods that will be duplicated in component:
- `@Prop() duplicateProp: string` - will be duplicated in component
- `@State() duplicateState: string` - will be duplicated in component  
- `@Method() async duplicateMethod(): Promise<string>` - will be duplicated in component
- Additional non-duplicate properties/methods for comparison
- Tracking mechanism to verify which version is used (base vs component)

### 2. Component: `test/wdio/ts-target/extends-conflicts/cmp.tsx`

- Extends ConflictsBase
- Defines duplicate decorators with same names:
- `@Prop() duplicateProp: string` - same name as base, should override
- `@State() duplicateState: string` - same name as base, should override
- `@Method() async duplicateMethod(): Promise<string>` - same name as base, should override
- Component versions should have different values/behavior to verify precedence
- Renders UI showing which version is active (component should win)
- Provides @Method decorators to trigger property changes for testing

### 3. Test Spec: `test/wdio/ts-target/extends-conflicts/cmp.test.ts`

- Tests for duplicate @Prop names:
- Component @Prop overrides base @Prop
- Component @Prop value is used (not base value)
- Component @Prop can be set via attribute/property
- Tests for duplicate @State names:
- Component @State overrides base @State
- Component @State value is used (not base value)
- Component @State updates trigger re-renders correctly
- Tests for duplicate @Method names:
- Component @Method overrides base @Method
- Component @Method implementation is called (not base)
- Component @Method return value is used
- Tests compiler precedence rules:
- Component decorators take precedence over base decorators
- Base decorators are not accessible when overridden
- Tests for both dist and custom-elements outputs

### 4. HTML Test Pages

- `test/wdio/ts-target/extends-conflicts/es2022.dist.html` - Dist build test page
- `test/wdio/ts-target/extends-conflicts/es2022.custom-element.html` - Custom elements test page

## Implementation Details

### Conflict Scenarios to Test (from test-coverage.json):

1. **Duplicate @Prop Names**: Same prop name defined in base class and component - compiler precedence rules
2. **Duplicate @State Names**: Same state name defined in base class and component - runtime behavior and conflicts
3. **Duplicate @Method Names**: Same method name defined in base class and component - override behavior
4. **Compiler Precedence Rules**: Verify compiler precedence rules when duplicate names exist

### Pattern to Follow:

- Similar structure to `extends-props-state` (test case #3) and `extends-methods` (test case #4)
- Base class defines decorators with specific values/behavior
- Component defines same-named decorators with different values/behavior
- Tests verify component version takes precedence (component overrides base)
- Use tracking/logging to verify which implementation is active

### Key Implementation Details:

1. **Base Class (`conflicts-base.ts`)**:

- `@Prop() duplicateProp: string = 'base prop value'`
- `@State() duplicateState: string = 'base state value'`
- `@Method() async duplicateMethod(): Promise<string>` returns `'base method'`
- Non-duplicate properties for comparison: `@Prop() baseOnlyProp`, `@State() baseOnlyState`, `@Method() async baseOnlyMethod()`

2. **Component (`cmp.tsx`)**:

- `@Prop() duplicateProp: string = 'component prop value'` (overrides base)
- `@State() duplicateState: string = 'component state value'` (overrides base)
- `@Method() async duplicateMethod(): Promise<string>` returns `'component method'` (overrides base)
- Renders values showing component versions are active
- Provides methods to update duplicateState for testing

3. **Test Spec (`cmp.test.ts`)**:

- Verify component @Prop value is used (not base)
- Verify component @State value is used (not base)
- Verify component @Method is called (not base)
- Verify component decorators override base decorators
- Test both dist and custom-elements outputs

### Expected Behavior (based on `deDupeMembers` logic):

- Component decorators override base class decorators when names match
- Order: `[...deDupeMembers(mixinProps, properties), ...properties]` means component members come last and override
- Component's duplicateProp, duplicateState, and duplicateMethod should be the ones used
- Base class versions should not be accessible

## Implementation Steps

1. **Create Base Class** (`conflicts-base.ts`)
   - Define @Prop, @State, and @Method decorators that will be duplicated
   - Add non-duplicate properties/methods for comparison
   - Add tracking mechanism for method calls

2. **Create Component** (`cmp.tsx`)
   - Extend ConflictsBase
   - Define duplicate decorators with same names but different values/behavior
   - Render UI showing component versions are active
   - Add methods to update state and track calls

3. **Create Test Spec** (`cmp.test.ts`)
   - Write tests for duplicate @Prop names (4 tests)
   - Write tests for duplicate @State names (4 tests)
   - Write tests for duplicate @Method names (4 tests)
   - Write tests for compiler precedence rules (3 tests)
   - Add tests for both dist and custom-elements outputs

4. **Create HTML Test Pages**
   - Create `es2022.dist.html` for dist build
   - Create `es2022.custom-element.html` for custom elements build

5. **Build Components**
   ```bash
   cd test/storybook/docs/.ai/testing
   npm run components-build
   ```
   This builds all components including the extends-conflicts component.
   The `components-build` script runs the full build process from `test/wdio` which includes ES2022 builds.
   
   Note: All paths are relative to the workspace root. Navigate to the workspace root first if running from a different directory.

6. **Run Tests**
   First, run the specific extends-conflicts tests to verify they pass:
   ```bash
   cd test/wdio
   npm run wdio -- --spec='./ts-target/extends-conflicts/*.test.ts'
   ```
   This should run 19 tests (15 dist + 4 custom-elements) and all should pass.
   
   Then, run all extends tests to ensure the new tests don't break existing functionality:
   ```bash
   cd test/storybook/docs/.ai/testing
   npm run extends:test
   ```
   The `extends:test` script runs all extends-* tests and automatically updates coverage via `postextends:test` hook.
   Both test runs should pass before proceeding to update coverage.
   
   Note: All paths are relative to the workspace root. If running from a different directory, navigate to the workspace root first or adjust paths accordingly.

7. **Update Test Coverage (Run Script)**
   Instead of manually updating test-coverage.json, run the coverage script:
   ```bash
   cd test/storybook/docs/.ai/testing
   npm run extends:test-coverage
   ```
   This runs `test/storybook/docs/Testing/Behavior/Extends/test-coverage.js` which:
   - Scans all `extends-*` directories in `test/wdio/ts-target/`
   - Counts `it()` blocks in `cmp.test.ts` files
   - Detects output targets from `describe` blocks (dist, customElements, hydrate)
   - Updates `test-coverage.json` with:
     - `implemented` status
     - `componentCount`
     - `testCount`
     - `testBreakdown` (dist, customElements, hydrate counts)
     - `specPath`
   - Updates timestamp in `Overview.mdx`
   - Preserves manual documentation fields (description, conflictScenarios, etc.)

## Results

- ✅ All 19 tests passing (15 dist + 4 custom-elements)
- ✅ Test coverage updated (17/19 test cases implemented, 174 total tests)
- ✅ Documentation auto-updated with timestamp
- ✅ All expected behaviors confirmed:
  - Component decorators override base decorators when names match
  - Component values/implementations are used (not base)
  - Base-only decorators (non-duplicates) remain accessible
  - Compiler precedence rules work as expected

## Common Issues and Solutions

### Issue: Verifying which implementation is called
**Solution**: Use tracking mechanisms (call logs, return values, state changes) to verify component vs base implementation. For methods, track calls in arrays and check which version was executed. For props/state, use different default values to verify which is active.

### Issue: Testing override behavior
**Solution**: Use clearly different values/behavior between base and component:
- Base: `'base prop value'` vs Component: `'component prop value'`
- Base method returns `'base method'` vs Component returns `'component method'`
- This makes it easy to verify which version is active in tests

### Issue: Ensuring base-only decorators still work
**Solution**: Include non-duplicate properties/methods in base class (e.g., `baseOnlyProp`, `baseOnlyState`, `baseOnlyMethod`) and test that they remain accessible. This confirms the override only affects duplicates, not all base decorators.

### Issue: Coverage script vs manual updates
**Solution**: Always use the coverage script (`npm run extends:test-coverage`) instead of manually editing `test-coverage.json`. The script:
- Automatically counts tests
- Detects output target breakdowns
- Preserves manual documentation fields
- Updates timestamps

### Issue: Unrelated test failures
**Solution**: If other extends test suites fail (e.g., `extends-inheritance-scaling`), verify they're unrelated to your changes by:
- Running your specific test suite in isolation (should pass)
- Checking if the failure existed before your changes
- The failure doesn't affect your implementation's validity

## Key Learnings

1. **Component decorators always override base decorators** - This is confirmed behavior, not a bug. The compiler's `deDupeMembers` logic ensures component members come last and take precedence.

2. **Different values are essential for testing** - Using identical values between base and component makes it impossible to verify which version is active. Always use distinct values.

3. **Tracking mechanisms are critical** - For methods especially, use call logs to verify execution. For props/state, render values in UI to verify which version is active.

4. **Test both output targets** - Always include tests for both `dist` and `custom-elements` outputs to ensure behavior is consistent across build types.

5. **Coverage script is reliable** - The automated coverage script handles all updates correctly and preserves manual documentation. Trust it over manual edits.

## Reference Files

- Similar implementation: `test/wdio/ts-target/extends-props-state/` (test case #3)
- Similar implementation: `test/wdio/ts-target/extends-methods/` (test case #4)
- Test coverage: `test/storybook/docs/Testing/Behavior/Extends/data/test-coverage.json`
- Coverage script: `test/storybook/docs/Testing/Behavior/Extends/test-coverage.js`
- Compiler logic: `src/compiler/transformers/static-to-meta/class-extension.ts` (deDupeMembers function)
- Plan reference: `.cursor/plans/implement-extends-test-case-11.md`
- Workflow documentation: `test/storybook/docs/Testing/Behavior/Extends/README.md`

