# Testing Framework Memories

## Comprehensive Decorator Testing Framework

**Shortcut Scripts Location**: `/test/storybook/docs/.ai/testing/package.json`

### All Supported Decorators
1. **@State** - State management testing
2. **@Prop** - Property testing  
3. **@Component** - Component testing
4. **@Event** - Event handling testing
5. **@Listen** - Event listener testing
6. **@Method** - Method exposure testing

### Generation Process
**⚠️ CRITICAL: All scripts must be run from `/test/storybook/docs/.ai/testing/` directory, NOT project root**

**Quick Start**: `npm run generate-components` (generates all decorators - from .ai/testing/ directory)

**AI Agent Quick Prompts**:
- **Generate**: "gen the @{decorator} components" (creates component files only)
- **Build**: "build the components" (compiles with Stencil)
- **Test**: "test the components" (runs WDIO test suite)
- **3-Step Workflow**: gen → build → test for complete validation

**Individual Generation**:
- Each decorator has its own generate script: `{decorator}:generate-components`
- **Working Directory**: `/test/storybook/docs/.ai/testing/` (REQUIRED)
- **Component Locations**:
  - **New convention**: `/test/wdio/{decorator}/components/` (@State, @Prop)
  - **Legacy convention**: `/test/wdio/{decorator}/matrix/` (@Component, @Event, @Listen, @Method)
- Matrix-based approach with unique permutation patterns per decorator

### Decorator-Specific Component Counts

**@State (12 components)**:
- Process: `npm run state:generate-components` (from .ai/testing/ directory)
- Pattern: 6 types × 2 default states = 12 components
- Location: `/test/wdio/state/components/`
- Organization: By type directories (string, number, boolean, array, object, any)

**@Prop (24 components)**:
- Process: `npm run prop:generate-components` (from .ai/testing/ directory)
- Pattern: 6 types × 2 reflect × 2 mutable = 24 components
- Location: `/test/wdio/prop/components/`
- **AI Workflow**: "gen the @Prop components" → generates 24 component files with built-in verification (coverage, file count, grouping, exclusivity)

**@Component (193 components)**:
- Process: `npm run component:generate-components` (from .ai/testing/ directory)
- Pattern: Complex multi-dimensional matrix
- Location: `/test/wdio/component-decorator/matrix/`

**@Event (8 components)**:
- Process: `npm run event:generate-components` (from .ai/testing/ directory)
- Location: `/test/wdio/event/matrix/`

**@Listen (44 components)**:
- Process: `npm run listen:generate-components` (from .ai/testing/ directory)
- Location: `/test/wdio/listen/matrix/`

**@Method (8 components)**:
- Process: `npm run method:generate-components` (from .ai/testing/ directory)
- Location: `/test/wdio/method/matrix/`

**Total Framework: 289 test components**

### Coverage & Verification
- **Coverage Analysis**: `{decorator}:test-coverage` scripts
- **Matrix Verification**: `{decorator}:verify-matrix` scripts
- **Automated Validation**: Scripts confirm coverage, file count, grouping, and exclusivity

## AI Context Directory

**Location**: `/test/storybook/docs/.ai/`

**Contents**:
- Comprehensive AI context for Stencil.js project
- GenAI-powered testing framework documentation
- Testing strategies and coverage matrix tools
- Component testing docs and automated workflows
- 2025 roadmap and agent keywords/prompts
- Central hub for AI-assisted testing automation

**Key Files**:
- `overview.mdx` - Main overview
- `AGENT_KEYWORDS.md` - Keywords for AI agents
- `AGENT_PROMPTS.md` - Standardized prompts
- `testing/` - Various testing configuration and documentation files

## Coverage Matrix Tools

**Purpose**: Scripts for generating test components and running coverage analysis
**Integration**: Works with automated workflows for test matrix management
**Verification**: Automated validation of component generation and test coverage
