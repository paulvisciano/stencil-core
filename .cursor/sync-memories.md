# Memory Sync Instructions

This document provides instructions for syncing `.cursor/` directory content with IDE AI memories.

## Automatic Sync (Recommended)

Run the memory sync script:

```bash
# From project root
cd .cursor
node memory-sync.js --dry-run  # Preview changes
node memory-sync.js            # Execute sync
```

## Manual Sync

If automatic sync isn't available, manually update these memories:

### 1. Testing Framework (Update Existing)
**Memory ID**: `10133438`  
**Source**: `memories/testing-framework.md`  
**Title**: "Comprehensive Stencil.js Decorator Testing Framework - 289 Components"

### 2. Project Structure (Create New)
**Source**: `memories/project-structure.md`  
**Title**: "Stencil.js Project Structure and Organization"

### 3. Development Workflows (Create New)  
**Source**: `memories/workflows.md`  
**Title**: "Stencil.js Development Workflows and Automation"

### 4. Core Concepts (Create New)
**Source**: `context/key-concepts.md`  
**Title**: "Stencil.js Core Concepts and Testing Philosophy" 

### 5. Code Conventions (Create New)
**Source**: `context/conventions.md`  
**Title**: "Stencil.js Code Conventions and Standards"

## Sync Frequency

- **After major updates**: Always sync when updating `.cursor/` files
- **Team onboarding**: Sync when new team members join
- **Release cycles**: Sync before major releases to ensure consistent AI assistance

## Validation

After syncing, validate that AI assistants can access:
- Correct component counts (289 total)
- Proper folder conventions (components/ vs matrix/)
- Accurate workflow scripts and locations
- Current project structure understanding
