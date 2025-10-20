# Conventions

## File Organization

### Generated Components

**Storage Conventions**:
- **New convention**: `/test/wdio/{decorator}/components/` (@State, @Prop)
- **Legacy convention**: `/test/wdio/{decorator}/matrix/` (@Component, @Event, @Listen, @Method)

**Organization Examples**:
- **@State**: Organized by type directories (string, number, boolean, array, object, any)
- **@Prop**: Organized by type directories with naming pattern including reflect/mutable

**Naming Patterns**:
- **@State**: `state-{type}-{default-state}.tsx` (e.g., `state-string-default.tsx`)
- **@Prop**: `prop-{type}-reflect-{boolean}-mutable-{boolean}.tsx`

### Component Structure
```typescript
@Component({
  tag: 'component-name',
  shadow: true,
})
export class ComponentName {
  @State() val: type = defaultValue; // or no default

  render() {
    return (
      <div>
        <p>Type: {type} | Default: {hasDefault}</p>
        <p>Value: {this.val}</p>
        <button onClick={() => (this.val = newValue)}>Change</button>
      </div>
    );
  }
}
```

## Testing Conventions

### Shortcut Scripts
**Location**: `/test/storybook/docs/.ai/testing/package.json`
- **All Decorators**: `npm run generate-components`
- **Individual**: `npm run {decorator}:generate-components`
- **Coverage**: `npm run {decorator}:test-coverage` or `{decorator}:verify-matrix`
- **Build**: `npm run components-build`
- **Test**: `npm run tests`

### Matrix Testing
- **6 Decorators**: @State, @Prop, @Component, @Event, @Listen, @Method
- **Unique Patterns**: Each decorator has different permutation dimensions
- **Component Counts**: @State(12), @Prop(24), @Component(193), @Event(8), @Listen(44), @Method(8)  
- **Total**: 289 components across all decorators

### Verification
- **Coverage**: 100% expected (12/12 for @State)
- **File Count**: Exact match required
- **Structure**: Directory organization validation
- **Exclusivity**: No duplicate or missing components

## Documentation Conventions

### AI Context Structure
- **`.ai/`**: Detailed testing documentation and configurations
- **`.cursor/`**: Project-wide memories and quick reference
- **Complementary**: Both systems work together, different scopes

### Memory Organization
- **testing-framework.md**: Testing-specific processes and locations
- **project-structure.md**: Directory organization and key locations
- **workflows.md**: Step-by-step processes and automation
- **key-concepts.md**: Core concepts and philosophy
- **conventions.md**: Standards and patterns (this file)

## Code Style

### TypeScript
- Strict typing throughout
- Interface definitions for component props
- Proper decorator usage (@State, @Prop, etc.)

### Component Testing
- Interactive elements for state mutation testing
- Clear labeling of type and default status
- Shadow DOM enabled for proper encapsulation
