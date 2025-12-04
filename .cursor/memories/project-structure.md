# Project Structure Memories

## Key Directories

### Source Code
- **`src/`** - Main Stencil.js source code
  - Compiler, runtime, testing, utilities
  - TypeScript implementation
  - Component system and hydration

### Testing Infrastructure
- **`test/`** - Comprehensive test suite
  - `wdio/` - WebDriver IO tests (800+ files)
  - `storybook/` - Storybook integration and docs
  - `end-to-end/` - E2E test scenarios
  - Various test apps (todo-app, ionic-app, etc.)

### Build System
- **`build/`** - Compiled output
- **`scripts/`** - Build and release automation
- **`sys/`** - System-specific implementations

## Generated Components Location

**@State Components**: `/test/wdio/state/components/`
- Organized by type directories
- Generated via automation scripts
- Used for testing state management

## AI Documentation

**Primary Location**: `/test/storybook/docs/.ai/`
- Centralized AI context and documentation
- Testing framework guidance
- Agent configuration and keywords

**Secondary Location**: `/.cursor/` (this directory)
- Version-controlled memories
- Team-shared AI context
- Project-wide conventions

## Configuration Files

- **Root level**: `package.json`, `tsconfig.json`, `jest.config.js`
- **Testing**: Various Jest and testing configurations
- **Linting**: `cspell-*.json` for spell checking
- **Documentation**: Multiple markdown files for different areas
