# .cursor - AI Assistant Memories & Context

This directory contains version-controlled memories and context for AI assistants working on the Stencil.js core project. It ensures consistent AI behavior across team members and preserves important project knowledge.

## Structure

```
.cursor/
├── README.md                 # This file
├── memories/                 # AI memories organized by topic
│   ├── testing-framework.md  # Testing framework specific memories
│   ├── project-structure.md  # Project organization and architecture
│   └── workflows.md          # Development workflows and processes
└── context/                  # Additional AI context files
    ├── key-concepts.md       # Important project concepts
    └── conventions.md        # Coding and naming conventions
```

## Purpose

This system complements the existing `.ai` directory in `test/storybook/docs/.ai/` by providing:

- **Project-wide memories**: Key information that AI assistants should remember across sessions
- **Team consistency**: Shared AI context ensures all developers get similar AI assistance
- **Knowledge preservation**: Important discoveries and patterns are documented for future reference
- **Quick reference**: Easy access to project-specific AI context

## Usage

### For AI Assistants
AI assistants should reference these files to understand:
- Project conventions and patterns  
- Testing framework workflows
- Component generation processes
- Development best practices

### Memory Sync
Keep IDE AI memories synchronized with version-controlled context:

```bash
# From .cursor/ directory
npm run memory-sync:dry-run  # Preview changes
npm run memory-sync          # Execute sync
```

### Commands
- `npm run memory-sync` - Sync memories with IDE
- `npm run memory-sync:dry-run` - Preview sync changes  
- `npm run validate` - Check .cursor structure
- `npm run help` - Show available commands

## Maintenance

- Update memories when discovering new patterns or workflows
- Keep content concise and focused on actionable information
- Use clear, descriptive filenames
- Reference the `.ai` directory for detailed testing documentation

## Related Documentation

- **Comprehensive AI Context**: `test/storybook/docs/.ai/` - Detailed testing framework documentation
- **Project Docs**: `docs/` - Core Stencil.js documentation
- **Contributing**: `CONTRIBUTING.md` - Development guidelines
