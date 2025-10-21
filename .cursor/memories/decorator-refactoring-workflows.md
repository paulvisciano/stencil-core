# Stencil.js Decorator Refactoring Workflows and Best Practices

## Component Regeneration Strategy

**Key Principle**: Always prioritize updating generation scripts over manual editing
- Update the `generate-components.js` template with desired changes
- Add `--force` flag support to bypass file existence checks: `if (!forceRegenerate && fs.existsSync(filePath)) continue;`
- Use `npm run {decorator}:generate-components:force` to regenerate all components
- This approach is 5-10x faster than manually moving/editing individual component files
- Ensures complete consistency across all generated components
- Eliminates human error in repetitive edits

## Script Integration and Standards

**Pattern Consistency**: Follow established patterns from working decorators (@Prop, @State)
- `generate-components.js` must integrate with `runVerifier` utility from `_shared/verify-matrix-core.js`
- Use `test-coverage.js` (not `coverage.js`) for analyzing test coverage
- Write coverage data to `data/test-coverage.json` format
- Delete obsolete `verify-matrix.js` files during refactoring
- Generation scripts should only create missing components by default
- Support `--force` flag for regenerating all components when template changes

## Testing and Validation Workflow

**Test Early and Often**: Don't wait until the end to validate changes
- Run tests after each major structural change
- Always rebuild components (`npm run components-build`) after regenerating them
- Check generated component code for template bugs before testing
- Look for: undefined variable references, incorrect argument values, missing imports
- Validate the complete workflow: Generate → Build → Test
- All three decorator test suites run together (@Method + @Prop + @State)

## Refactoring Structure and Naming

**Follow Established Patterns**: Study working decorators first, don't invent new approaches
- **File structure**: `components/` directory with type-based subdirectories
- **Naming conventions**: Consistent hyphen-separated format (e.g., `method-promise-async-true-args-one`)
- **Documentation structure**: `@Decorator.mdx` using shared components like `TestCasesTable` and `GeneratedComponentsTable`
- **Script integration**: Use shared utilities and established npm script naming
- **npm scripts**: `{decorator}:generate-components`, `{decorator}:test-coverage`, `{decorator}:generate-components:force`

## Common Pitfalls and Solutions

**Generation Script Issues**:
- Scripts may only generate "missing" components - use `--force` flag for full regeneration
- Check `missingPermutations` array in `data/components.json` - if empty, no components generated
- Template bugs (like wrong argument values) require force regeneration, not manual fixes

**Test Failures**:
- JavaScript ReferenceErrors usually indicate template generation bugs
- Build failures after regeneration require `components-build` step
- Test assertion failures may indicate incorrect test expectations vs generated behavior

## Force Flag Implementation

**Standard Pattern** for adding `--force` support to generation scripts:
```javascript
const forceRegenerate = process.argv.includes('--force');
// In generation loop:
if (!forceRegenerate && fs.existsSync(filePath)) continue;
```

**Help Documentation**:
```javascript
if (process.argv.includes('--help')) {
  console.log('Options:');
  console.log('  --force    Regenerate all components (even if they exist)');
  console.log('Use --force when you modify the component template in this script.');
}
```
