# Implement Extends Test Case #11 - Watch Decorator Inheritance

## Overview

Test case #11 validates @Watch decorator behavior through inheritance chains. It tests multiple @Watch decorators at different inheritance levels, execution order, reactive property chains, and watch handler override behavior.

## Files to Create

### 1. Base Class: `test/wdio/ts-target/extends-watch/watch-base.ts`

- Base class with @Watch decorators on @Prop and @State properties
- Track watch handler calls for testing (similar to EventBase pattern)
- Include watch handlers that can be overridden
- Watch handlers that trigger other property changes (reactive chains)

### 2. Component: `test/wdio/ts-target/extends-watch/cmp.tsx`

- Extends WatchBase
- Adds additional @Watch decorators (some watching same properties as base)
- Overrides some base watch handlers
- Provides @Method decorators to trigger property changes for testing
- Renders UI showing watch execution tracking

### 3. Test Spec: `test/wdio/ts-target/extends-watch/cmp.test.ts`

- Tests for @Watch decorator inheritance from base class
- Tests watch execution order (base vs component handlers)
- Tests reactive property chains (watch handlers triggering other changes)
- Tests watch handler override behavior
- Tests for both dist and custom-elements outputs

### 4. HTML Test Pages

- `test/wdio/ts-target/extends-watch/es2022.dist.html` - Dist build test page
- `test/wdio/ts-target/extends-watch/es2022.custom-element.html` - Custom elements test page

## Implementation Details

### Watch Features to Test (from test-coverage.json):

1. **@Watch Decorator Inheritance**: Multiple @Watch decorators for same property at different inheritance levels
2. **Watch Execution Order**: Order of watch handler execution (base class first, component second, or override behavior)
3. **Reactive Property Chains**: Watch handlers triggering other property changes through inheritance hierarchy
4. **Watch Handler Override**: When base class and component both watch same property - execution behavior and conflicts

### Pattern to Follow:

- Similar structure to `extends-events` test case (#10)
- Base class tracks watch calls in arrays (like EventBase tracks events)
- Component extends base and adds its own watch handlers
- Tests verify watch handlers are called in correct order
- Tests verify reactive chains work correctly
- Tests verify override behavior when both base and component watch same property

## Testing Strategy

- Use @Method decorators to trigger property changes
- Track watch handler execution order via arrays/logs
- Verify DOM updates reflect watch handler side effects
- Test both dist and custom-elements output targets

## Implementation Notes

### Key Implementation Details:

1. **Base Class (`watch-base.ts`)**:
   - Uses @Watch decorators on @Prop and @State properties
   - Tracks execution in `baseWatchLog` array
   - Implements reactive chains (watch handlers update other properties)
   - Provides `overrideProp` property for testing override behavior

2. **Component (`cmp.tsx`)**:
   - Extends WatchBase
   - Adds child-specific @Watch decorators
   - Overrides `overrideProp` watch handler
   - Also watches `baseProp` at child level (tests multiple @Watch decorators)
   - Provides @Method decorators for triggering property changes

3. **Test Spec (`cmp.test.ts`)**:
   - 16 total tests (13 dist + 3 custom-elements)
   - Tests inheritance, execution order, reactive chains, and override behavior
   - Uses `waitUntil` to wait for specific log entries to appear (not just counts)

### Common Issues and Solutions:

- **Issue**: Test waiting for count threshold but log content not updated yet
- **Solution**: Wait for specific log entries to appear instead of just checking counts
- **Pattern**: Use `browser.waitUntil` with condition checking for specific log content

## Results

- ✅ All 16 tests passing
- ✅ Test coverage updated (16/21 test cases implemented, 155 total tests)
- ✅ Documentation auto-updated with timestamp

## Reference Files

- Similar implementation: `test/wdio/ts-target/extends-events/` (test case #10)
- Test coverage: `test/storybook/docs/Testing/Behavior/Extends/data/test-coverage.json`
- Documentation: `test/storybook/docs/Testing/Behavior/Extends/README.md`

