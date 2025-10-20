# Development Workflows Memories

## Component Generation Workflow

### Shortcut Scripts (Recommended)
**Location**: `/test/storybook/docs/.ai/testing/package.json`

**Generate All Decorators**: `npm run generate-components`
- Runs all 6 decorator types: Component, State, Prop, Event, Listen, Method

**Individual Decorators**:
- `npm run state:generate-components` - @State components
- `npm run prop:generate-components` - @Prop components  
- `npm run component:generate-components` - @Component components (with coverage)
- `npm run event:generate-components` - @Event components (with coverage)
- `npm run listen:generate-components` - @Listen components (with coverage)
- `npm run method:generate-components` - @Method components (with coverage)

**Coverage & Verification**:
- `npm run state:test-coverage` - @State coverage analysis
- `npm run prop:test-coverage` - @Prop coverage analysis
- `npm run component:verify-matrix` - @Component matrix verification
- `npm run event:verify-matrix` - @Event matrix verification
- `npm run listen:verify-matrix` - @Listen matrix verification
- `npm run method:verify-matrix` - @Method matrix verification

### Manual Process (Alternative)
1. **Navigate**: `cd /test/storybook/docs/Testing/Decorators/{DecoratorType}/`
2. **Generate**: `node generate-components.js`
3. **Verify**: `node coverage.js` or `node verify-matrix.js`
4. **Locations**: Components created in:
   - **New convention**: `/test/wdio/{decoratortype}/components/` (@State, @Prop)
   - **Old convention**: `/test/wdio/{decoratortype}/matrix/` (@Component, @Event, @Listen, @Method)

### Coverage Verification
- Automated verification of component generation
- Checks for 100% coverage (12/12 components expected)
- Validates file count and directory organization
- Ensures proper grouping and exclusivity

## Testing Framework Integration

### Build & Test Scripts
**From AI Testing Directory**: `/test/storybook/docs/.ai/testing/`
- `npm run components-build` - Build wdio components
- `npm run tests` - Run WebDriver IO tests

### AI-Powered Testing
- Uses GenAI for test automation and coverage analysis
- Integrates with Storybook for component documentation
- Matrix-based approach for comprehensive testing across all 6 decorators

### Test Matrix Pattern
**Each decorator has unique permutation patterns**:

**Component Counts by Decorator**:
- **@State**: 12 components (6 types × 2 default states)
- **@Prop**: 24 components (6 types × 2 reflect × 2 mutable)  
- **@Component**: 193 components (complex matrix with multiple dimensions)
- **@Event**: 8 components
- **@Listen**: 44 components
- **@Method**: 8 components

**Total Framework**: **289 test components** across all decorators

**Storage Conventions**:
- **New**: `/test/wdio/{decorator}/components/` (@State, @Prop)
- **Legacy**: `/test/wdio/{decorator}/matrix/` (@Component, @Event, @Listen, @Method)

## Build and Release

### Scripts Location
- **`scripts/`** - Build automation and release tasks
- **`build.ts`** - Main build script
- **`release.ts`** - Release automation

### Testing Before Release
- Multiple test suites (unit, integration, e2e)
- WebDriver IO for browser testing
- Jest for unit testing
- Component testing via generated test components

## Documentation Maintenance

### AI Context Updates
- Update `.ai/` directory for detailed testing docs
- Update `.cursor/` directory for project-wide memories
- Keep both systems synchronized but focused on different scopes

### Memory Management
- Regular updates based on new discoveries
- Team-wide consistency through version control
- Integration with existing documentation systems
