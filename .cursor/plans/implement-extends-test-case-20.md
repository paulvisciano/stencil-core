# Implement Extends Test Case #20 - Mixed Decorator Types

## Overview

Test case #20 validates runtime behavior when the same name is used with different decorator types in inheritance chains. Unlike Test Case #15 (same decorator type conflicts, which are allowed with component override), Test Case #20 tests conflicts between different decorator types (e.g., @Prop vs @State, @Method vs @Prop) to document and verify runtime behavior when these conflicts exist.

**Note**: Since WDIO tests require successful builds, this test case focuses on runtime behavior rather than compiler error detection. The tests will document what happens when mixed decorator types exist, which can inform future compiler validation improvements if needed.

## Files to Create

### 1. Base Class: `test/wdio/ts-target/extends-mixed-decorators/mixed-decorators-base.ts`

Create a base class with decorators that will conflict with different decorator types in components:
- `@Prop() mixedName: string = 'base prop value'` - will conflict with @State in component
- `@State() mixedStateName: string = 'base state value'` - will conflict with @Prop in component  
- `@Method() async mixedMethodName(): Promise<string>` - returns `'base method'`, will conflict with @Prop in component
- Additional non-conflicting properties/methods for comparison:
  - `@Prop() baseOnlyProp: string = 'base only prop'`
  - `@State() baseOnlyState: string = 'base only state'`
  - `@Method() async baseOnlyMethod(): Promise<string>` returns `'base only method'`

### 2. Component: `test/wdio/ts-target/extends-mixed-decorators/cmp.tsx`

- Extends MixedDecoratorsBase
- Defines conflicting decorators with same names but different types:
  - `@State() mixedName: string = 'component state value'` (conflicts with base @Prop)
  - `@Prop() mixedStateName: string = 'component prop value'` (conflicts with base @State)
  - `@Prop() mixedMethodName: string = 'component prop value'` (conflicts with base @Method)
- Component-specific properties for comparison:
  - `@State() componentOnlyState: string = 'component only state'`
- Renders UI showing which decorator type is active and their values
- Provides @Method decorators to trigger property changes for testing

### 3. Test Spec: `test/wdio/ts-target/extends-mixed-decorators/cmp.test.ts`

Tests runtime behavior when mixed decorator types exist:

**Tests for @Prop in Base, @State in Component (`mixedName`)**:
- Verify which decorator type takes precedence (component @State should override base @Prop)
- Test that component @State value is used (not base @Prop value)
- Test that component @State updates trigger re-renders correctly
- Test that component @State can be updated via method
- Verify base @Prop is not accessible (component @State wins)

**Tests for @State in Base, @Prop in Component (`mixedStateName`)**:
- Verify which decorator type takes precedence (component @Prop should override base @State)
- Test that component @Prop value is used (not base @State value)
- Test that component @Prop can be set via attribute/property
- Verify base @State is not accessible (component @Prop wins)

**Tests for @Method in Base, @Prop in Component (`mixedMethodName`)**:
- Verify which decorator type takes precedence (component @Prop should override base @Method)
- Test that component @Prop value is used (not base @Method)
- Test that component @Prop can be set via attribute/property
- Verify base @Method is not accessible (component @Prop wins)

**Tests for Runtime Behavior**:
- Verify only one version exists in final component metadata
- Test that the "winning" decorator type behaves correctly (getters/setters, reactivity)
- Test that non-conflicting base decorators remain accessible
- Test both dist and custom-elements outputs

### 4. HTML Test Pages

- `test/wdio/ts-target/extends-mixed-decorators/es2022.dist.html` - Dist build test page
- `test/wdio/ts-target/extends-mixed-decorators/es2022.custom-element.html` - Custom elements test page

## Implementation Details

### Mixed Decorator Scenarios to Test (from test-coverage.json):

1. **@Prop in Base, @State in Component**: Same name used as @Prop in base class and @State in component - runtime behavior
2. **@State in Base, @Prop in Component**: Same name used as @State in base class and @Prop in component - runtime behavior
3. **@Method in Base, @Prop in Component**: Same name used as @Method in base class and @Prop in component - runtime behavior
4. **Runtime Behavior**: Verify which decorator type takes precedence and how conflicts are resolved

### Pattern to Follow:

- Similar structure to `extends-conflicts` (test case #15) but testing different decorator types
- Base class defines decorators with specific types and values
- Component defines same-named decorators with different types and different values
- Tests verify runtime behavior: which decorator type wins, which value is used, how it behaves

### Key Implementation Details:

1. **Base Class (`mixed-decorators-base.ts`)**:
   - `@Prop() mixedName: string = 'base prop value'`
   - `@State() mixedStateName: string = 'base state value'`
   - `@Method() async mixedMethodName(): Promise<string>` returns `'base method'`
   - Non-conflicting properties: `@Prop() baseOnlyProp`, `@State() baseOnlyState`, `@Method() async baseOnlyMethod()`

2. **Component (`cmp.tsx`)**:
   - `@State() mixedName: string = 'component state value'` (overrides base @Prop)
   - `@Prop() mixedStateName: string = 'component prop value'` (overrides base @State)
   - `@Prop() mixedMethodName: string = 'component prop value'` (overrides base @Method)
   - Renders values showing component decorator types are active
   - Provides methods to update states for testing

3. **Test Spec (`cmp.test.ts`)**:
   - Verify component decorator type values are used (not base)
   - Verify component decorator types behave correctly (reactivity, attribute binding)
   - Verify base decorator types are not accessible when overridden
   - Test both dist and custom-elements outputs

## Runtime Behavior Analysis

The compiler's `mergeExtendedClassMeta` function merges decorators separately by type:
- `properties = [...deDupeMembers(mixinProps, properties), ...properties];`
- `states = [...deDupeMembers(mixinStates, states), ...states];`
- `methods = [...deDupeMembers(mixinMethods, methods), ...methods];`

At runtime, `cmpMeta.$members$` is a single object keyed by member name. When both a `@Prop` and `@State` exist with the same name, they would conflict in `$members$`. The tests will document:
- Which decorator type takes precedence (likely component decorator type)
- How the runtime resolves these conflicts
- Whether both are accessible or one overrides the other
- Any unexpected behavior or conflicts

This runtime behavior documentation can inform future compiler validation improvements if needed.

## Implementation Steps

1. **Create Base Class** (`mixed-decorators-base.ts`)
   - Define @Prop, @State, and @Method decorators that will conflict
   - Add non-conflicting properties for comparison

2. **Create Component** (`cmp.tsx`)
   - Extend MixedDecoratorsBase
   - Define conflicting decorators with same names but different types
   - Render UI showing component decorator types are active
   - Add methods to update states and track behavior

3. **Create Test Spec** (`cmp.test.ts`)
   - Write tests for @Prop/@State conflicts (5 tests)
   - Write tests for @State/@Prop conflicts (4 tests)
   - Write tests for @Method/@Prop conflicts (4 tests)
   - Write tests for runtime behavior (3 tests)
   - Add tests for both dist and custom-elements outputs

4. **Create HTML Test Pages**
   - Create `es2022.dist.html` for dist build
   - Create `es2022.custom-element.html` for custom elements build

5. **Build Components**
   ```bash
   cd test/storybook/docs/.ai/testing
   npm run components-build
   ```
   This builds all components including the extends-mixed-decorators component.
   The `components-build` script runs the full build process from `test/wdio` which includes ES2022 builds.
   
   Note: All paths are relative to the workspace root. Navigate to the workspace root first if running from a different directory.

6. **Run Tests**
   First, run the specific extends-mixed-decorators tests to verify they pass:
   ```bash
   # From workspace root:
   cd test/wdio
   npm run wdio -- --spec='./ts-target/extends-mixed-decorators/*.test.ts'
   ```
   Or using a single command from workspace root:
   ```bash
   cd test/wdio && npm run wdio -- --spec='./ts-target/extends-mixed-decorators/*.test.ts'
   ```
   
   Then, run all extends tests to ensure the new tests don't break existing functionality:
   ```bash
   cd test/storybook/docs/.ai/testing
   npm run extends:test
   ```
   The `extends:test` script runs all extends-* tests and automatically updates coverage via `postextends:test` hook.
   Both test runs should pass before proceeding to update coverage.
   
   Note: All commands should be run from the workspace root directory.

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
   - Preserves manual documentation fields (description, mixedDecoratorScenarios, etc.)

## Results

- ✅ All 20 tests passing (16 dist + 4 custom-elements)
- ✅ Test coverage updated (18/19 test cases implemented, 194 total tests)
- ✅ Documentation auto-updated with timestamp
- ✅ All expected behaviors confirmed:
  - Component @State correctly overrides base @Prop
  - Component @Prop initial values work but updates may conflict with base @State
  - Base @Method makes component @Prop read-only (cannot be assigned)
  - Runtime conflicts documented for future compiler validation improvements

## Reference Files

- Similar implementation: `test/wdio/ts-target/extends-conflicts/` (test case #15)
- Compiler logic: `src/compiler/transformers/static-to-meta/class-extension.ts`
- Runtime logic: `src/runtime/proxy-component.ts`
- Test coverage: `test/storybook/docs/Testing/Behavior/Extends/data/test-coverage.json`
- Plan reference: `.cursor/plans/implement-extends-test-case-15.md`

