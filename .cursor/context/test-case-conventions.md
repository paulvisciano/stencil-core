# Test Case Conventions

## Overview

The @Prop and @State decorators follow a structured test case convention that makes it easy to document existing tests and create new ones using AI assistance.

## Test Structure Pattern

### 1. **Numbered Test Cases with Descriptive Names**
```typescript
describe('Test Case #1 – Primitive mutation', () => {
  // Related tests grouped together
});

describe('Test Case #2 – Complex static render', () => {
  // Related tests grouped together  
});
```

### 2. **Complete Component Matrix Rendering**
All generated components are rendered in the `before()` hook using a comprehensive template:

```typescript
before(async () => {
  render({
    template: () => (
      <Fragment>
        {/* All generated components rendered */}
        <prop-string-reflect-false-mutable-false></prop-string-reflect-false-mutable-false>
        <prop-string-reflect-false-mutable></prop-string-reflect-false-mutable>
        // ... all 24 @Prop components
      </Fragment>
    ),
  });
});
```

### 3. **Consistent Test Patterns**
Each test follows predictable structure:
- **Component Selection**: `const cmp = await $('component-tag')`
- **DOM Assertions**: `await expect(cmp.$('selector')).toHaveText('expected')`
- **Attribute Assertions**: `await expect(cmp).toHaveAttribute('attr', 'value')`
- **Interaction Testing**: Button clicks, property mutations

## Test Case Categories

### @State Decorator Test Cases

#### **Test Case #1 – Primitive mutation**
- Tests state mutation and DOM updates for primitives
- Covers: string, boolean, number types  
- Covers: both default and no-default variants
- Pattern: Check initial value → Click button → Verify updated value

#### **Test Case #2 – Complex static render**
- Tests static rendering of complex types
- Covers: any, array, object types
- Covers: both default and no-default variants  
- Pattern: Check initial rendered values

### @Prop Decorator Test Cases

#### **Test Case #1 – Primitive runtime coverage**
- Tests basic prop rendering and values
- Covers: string, number, boolean with reflect+mutable
- Pattern: Check type display and initial values

#### **Test Case #2 – Complex static render**
- Tests complex type rendering
- Covers: Array, Object, Set types
- Pattern: Check static rendering of complex types

#### **Test Case #3 – reflect=true (primitives)**
- Tests attribute reflection when reflect=true
- Covers: string, number, boolean types
- Pattern: Set property → Check DOM text → Check attribute reflection

#### **Test Case #4 – reflect=false (primitives)**  
- Tests no reflection when reflect=false
- Covers: string, number types
- Pattern: Set property → Check DOM text → Verify no attribute

#### **Test Case #5 – mutable=true (primitives)**
- Tests internal mutation capability
- Covers: string, number, boolean types
- Pattern: Multiple mutations → Verify final state

## AI-Friendly Benefits

### **Easy Documentation**
- Clear test case numbering and naming
- Consistent patterns make coverage obvious
- Complete matrix ensures no gaps

### **Simple Extension**
- Add new test cases by following numbered pattern
- Copy existing test structure for new decorators
- Matrix approach scales automatically

### **Automated Generation**
- AI can easily understand the pattern
- Generate new test cases following convention
- Extend to new decorator types using same structure

## Usage Examples

### Adding a New Test Case
```typescript
describe('Test Case #6 – New Feature Testing', () => {
  it('tests new behavior pattern', async () => {
    const cmp = await $('component-selector');
    await expect(cmp.$('target')).toHaveText('expected');
  });
});
```

### Extending to New Decorator
1. Create comprehensive component matrix in template
2. Follow numbered test case pattern
3. Use consistent assertion patterns
4. Group related functionality in same test case

## Integration with Generated Components

### Component Tag Patterns
- **@State**: `state-{type}-{default-state}`
- **@Prop**: `prop-{type}-reflect-{boolean}-mutable-{boolean}`

### DOM Structure Expectations
Components follow consistent render patterns:
```typescript
<div>
  <p>Type: {type} | Default: {hasDefault}</p>  {/* :nth-child(1) */}
  <p>Value: {this.val}</p>                     {/* :nth-child(2) */}
  <button onClick={...}>Change</button>
</div>
```

This convention enables AI to quickly understand test coverage, generate new tests, and maintain consistency across the entire testing framework.
