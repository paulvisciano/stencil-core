#!/usr/bin/env node

/**
 * Memory Sync Script
 * 
 * Synchronizes version-controlled AI context from .cursor/ directory
 * with IDE AI memory system for consistent team-wide AI assistance.
 * 
 * Usage: node memory-sync.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const CURSOR_DIR = __dirname;
const MEMORIES_DIR = path.join(CURSOR_DIR, 'memories');
const CONTEXT_DIR = path.join(CURSOR_DIR, 'context');

// Memory configurations - map files to memory titles and IDs
const MEMORY_CONFIG = {
  'memories/testing-framework.md': {
    title: 'Comprehensive Stencil.js Decorator Testing Framework - 289 Components',
    id: '10133438', // Existing memory ID to update
    priority: 'high'
  },
  'memories/project-structure.md': {
    title: 'Stencil.js Project Structure and Organization',
    id: null, // Will create new memory
    priority: 'medium'
  },
  'memories/workflows.md': {
    title: 'Stencil.js Development Workflows and Automation',
    id: null, // Will create new memory
    priority: 'high'
  },
  'context/key-concepts.md': {
    title: 'Stencil.js Core Concepts and Testing Philosophy',
    id: null, // Will create new memory
    priority: 'medium'
  },
  'context/conventions.md': {
    title: 'Stencil.js Code Conventions and Standards',
    id: null, // Will create new memory
    priority: 'medium'
  },
  'context/test-case-conventions.md': {
    title: 'Stencil.js Test Case Conventions and AI-Friendly Patterns',
    id: null, // Will create new memory
    priority: 'high'
  },
  'memories/decorator-refactoring-workflows.md': {
    title: 'Stencil.js Decorator Refactoring Workflows and Best Practices',
    id: null, // Will create new memory
    priority: 'high'
  }
};

/**
 * Read and process markdown file for memory storage
 * @param {string} filePath - Path to markdown file
 * @returns {string} - Processed content suitable for memory storage
 */
function processMarkdownForMemory(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove markdown headers and format for memory storage
  let processed = content
    // Remove top-level header
    .replace(/^# .*$/m, '')
    // Convert ## headers to section labels
    .replace(/^## (.*$)/gm, '\n**$1**:')
    // Convert ### headers to subsection labels  
    .replace(/^### (.*$)/gm, '\n• **$1**:')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  
  return processed;
}

/**
 * Generate CLI command for updating memory
 * @param {Object} config - Memory configuration
 * @param {string} content - Memory content
 * @returns {string} - CLI command
 */
function generateMemoryCommand(config, content) {
  const action = config.id ? 'update' : 'create';
  const idParam = config.id ? `--existing-id "${config.id}"` : '';
  
  // Escape content for command line
  const escapedContent = content
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
  
  return `cursor-ai memory ${action} ${idParam} --title "${config.title}" --content "${escapedContent}"`;
}

/**
 * Main sync function
 */
function syncMemories(dryRun = false) {
  console.log('🔄 Starting memory sync from .cursor/ directory...\n');
  
  const commands = [];
  let updateCount = 0;
  let createCount = 0;
  
  // Process each configured memory file
  for (const [relativePath, config] of Object.entries(MEMORY_CONFIG)) {
    const fullPath = path.join(CURSOR_DIR, relativePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${relativePath}`);
      continue;
    }
    
    console.log(`📖 Processing: ${relativePath}`);
    
    try {
      const content = processMarkdownForMemory(fullPath);
      const command = generateMemoryCommand(config, content);
      
      commands.push({
        file: relativePath,
        title: config.title,
        action: config.id ? 'update' : 'create',
        command: command,
        priority: config.priority
      });
      
      if (config.id) {
        updateCount++;
      } else {
        createCount++;
      }
      
      console.log(`✅ Prepared ${config.id ? 'update' : 'create'} for: ${config.title}`);
      
    } catch (error) {
      console.log(`❌ Error processing ${relativePath}:`, error.message);
    }
  }
  
  // Display summary
  console.log(`\n📊 Summary:`);
  console.log(`   • ${updateCount} memories to update`);
  console.log(`   • ${createCount} memories to create`);
  console.log(`   • ${commands.length} total operations\n`);
  
  if (dryRun) {
    console.log('🔍 DRY RUN - Commands that would be executed:\n');
    commands.forEach((cmd, i) => {
      console.log(`${i + 1}. [${cmd.action.toUpperCase()}] ${cmd.title}`);
      console.log(`   File: ${cmd.file}`);
      console.log(`   Priority: ${cmd.priority}`);
      console.log(`   Command: ${cmd.command}\n`);
    });
    console.log('Run without --dry-run to execute these commands.');
  } else {
    console.log('⚡ Ready to execute memory sync.');
    console.log('Note: This script generates the commands. You may need to run them manually or integrate with your IDE\'s memory API.\n');
    
    // Output commands in execution order (high priority first)
    const sortedCommands = commands.sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    console.log('Commands to execute:');
    sortedCommands.forEach((cmd, i) => {
      console.log(`\n${i + 1}. ${cmd.command}`);
    });
  }
  
  return commands;
}

// CLI handling
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

try {
  syncMemories(dryRun);
} catch (error) {
  console.error('❌ Memory sync failed:', error.message);
  process.exit(1);
}
