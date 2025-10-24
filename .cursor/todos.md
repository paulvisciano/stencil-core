# TODOs - Stencil Testing Framework

## 🔄 Active Refactoring (Priority 1)

### Data Structure & Script Pattern Migration
Convert remaining decorators from legacy pattern to new standardized structure.

#### ✅ Completed (New Pattern)
- **@Prop**: `data/` folder with components.json, rules.json, test-coverage.json + new scripts
- **@State**: `data/` folder with components.json, rules.json, test-coverage.json + new scripts  
- **@Event**: `data/` folder with components.json, rules.json, test-coverage.json + new scripts
- **@Method**: `data/` folder with components.json, rules.json, test-coverage.json + new scripts

#### 🚧 Legacy Pattern (Needs Conversion)
- **@Component**: Still using coverage-data.json, coverage-overlay.json, coverage.js (old pattern)
- **@Listen**: Still using coverage-data.json, coverage-overlay.json, coverage.js (old pattern)

#### 📋 Migration Tasks for Each Legacy Decorator
1. **Create data/ folder structure**: components.json, rules.json, test-coverage.json  
2. **Update generation script**: Use new `_shared/generate-components-core.js`
3. **Update test coverage script**: Use new `_shared/test-coverage-core.js` with testCaseStatus
4. **Migrate existing data**: Convert legacy JSON files to new format
5. **Update documentation**: Ensure MDX files use new data structure
6. **Remove legacy files**: Clean up old coverage-data.json, coverage-overlay.json, coverage.js

#### 🎥 Knowledge Transfer Opportunity
- **Record refactoring session**: Document the migration process for future reference
- **Create migration guide**: Step-by-step instructions for pattern conversion
- **Team learning**: Use recording for onboarding new developers

### Test Case Status Logic Migration
Move test case discovery logic from React components to pre-calculated JSON data.

#### ✅ Completed
- **@Prop**: Enhanced test-coverage-core.js and simplified @Prop.mdx React logic

#### 🚧 In Progress  
- **@Event**: Update to use enhanced test-coverage-core.js with testCaseStatus
- **@Method**: Update to use enhanced test-coverage-core.js with testCaseStatus  
- **@State**: Update to use enhanced test-coverage-core.js with testCaseStatus

#### 📋 Tasks for Each Decorator
1. **Regenerate test-coverage.json**: Use enhanced core script to add `testCaseStatus`
2. **Simplify React Logic**: Replace complex filtering/calculation with simple JSON lookups
3. **Verify Query Integration**: Ensure `npm run query-missing-tests` shows correct status

#### 🛠️ Commands to Execute
```bash
# Update remaining decorators to use enhanced logic
cd test/storybook/docs/.ai/testing
npm run event:test-coverage
npm run method:test-coverage  
npm run state:test-coverage

# Verify all working
npm run query-missing-tests
```

---

## 📋 Phase 1 Completion (Priority 2)

### Missing Decorators (3/9 remaining)
Complete Phase 1 implementation for remaining Stencil decorators.

#### 🎯 @Element Decorator
- [ ] Research `@Element` permutation matrix and valid combinations
- [ ] Create `generate-components.js` script following established patterns
- [ ] Create `test-coverage.js` script with enhanced core
- [ ] Implement compiler-driven rule discovery
- [ ] Update documentation with component table and rules

#### 🎯 @Watch Decorator  
- [ ] Research `@Watch` property watching patterns and options
- [ ] Create generation scripts using shared infrastructure
- [ ] Implement testing following established patterns
- [ ] Document discovered rules and component matrix

#### 🎯 @AttachInternals Decorator
- [ ] Research `@AttachInternals` form association patterns
- [ ] Create generation scripts for valid combinations
- [ ] Implement testing framework integration
- [ ] Document form-related testing scenarios

#### 🎥 End-to-End Implementation Recording
- [ ] **Record complete decorator implementation**: Document full process from scratch
- [ ] **Choose @Element as demonstration**: Most complex remaining decorator for comprehensive example
- [ ] **Cover complete workflow**: Matrix research → Rule discovery → Component generation → Test implementation
- [ ] **Knowledge transfer value**: Perfect onboarding material for new developers

#### 📋 Complete Implementation Process (To Be Recorded)
1. **Research Phase**: Analyze @Element decorator documentation and usage patterns
2. **Matrix Definition**: Create permutation matrix of all valid option combinations  
3. **Script Creation**: Build `generate-components.js` using shared infrastructure
4. **Compiler Testing**: Run generation and discover rules through compiler errors
5. **Rule Documentation**: Update `rules.json` with discovered constraints
6. **Component Regeneration**: Apply rules and regenerate clean component set
7. **Test Coverage Setup**: Create `test-coverage.js` with enhanced core
8. **Documentation Creation**: Build MDX file with component table and test cases
9. **Integration Verification**: Ensure query system shows correct status
10. **Pattern Validation**: Confirm new decorator follows established architecture

#### 👥 Team Coordination  
- [ ] Create onboarding materials for Jacob using established patterns
- [ ] **Record @Element implementation with Jacob**: Live mentoring session as learning exercise
- [ ] Enable Jacob to implement @Watch and @AttachInternals independently using recorded process

---

## 🔧 Technical Improvements (Priority 3)

### Architecture Enhancements
- [ ] **Shared Infrastructure**: Ensure all decorators use `_shared/` utilities consistently
- [ ] **Error Handling**: Improve error messages in generation and coverage scripts
- [ ] **Performance**: Optimize component generation for large permutation matrices
- [ ] **Validation**: Add more comprehensive verification in verify-matrix scripts

### Documentation & UX
- [ ] **Storybook Integration**: Ensure all MDX files render properly with enhanced logic
- [ ] **AI Shortcuts**: Test and refine natural language prompt mappings
- [ ] **Query Utility**: Add more detailed output options (verbose mode, filtering, etc.)

---

## 🚀 Phase 2 Implementation (Priority 2)

### Baseline Test Case Implementation
Ensure all decorators have at least a few working WDIO test cases and clear documentation of missing ones.

#### 🎯 Goal: Minimum Viable Testing per Decorator
- **Implement**: At least 2-3 core test cases for each decorator
- **Document**: Clear "Not Implemented" sections for remaining test cases
- **Contribution Ready**: Make it easy for others to pick up missing test cases

#### 📋 Decorator Test Status Audit
- [ ] **@Prop**: Has 5/6 test cases ✅ | Missing: Test Case #6 (mutable=false) 📋
- [ ] **@State**: Review current WDIO tests, document gaps 🔍
- [ ] **@Event**: Review current WDIO tests, document gaps 🔍  
- [ ] **@Method**: Review current WDIO tests, document gaps 🔍
- [ ] **@Listen**: Currently placeholder - implement 2-3 basic test cases ⚡
- [ ] **@Component**: Currently placeholder - implement 2-3 basic test cases ⚡
- [ ] **@Element**: Will implement during recording session 🎥
- [ ] **@Watch**: Jacob's task - ensure some baseline tests 👥
- [ ] **@AttachInternals**: Jacob's task - ensure some baseline tests 👥

#### 🔧 Implementation Tasks for Each Decorator
1. **Audit Existing Tests**: Review what WDIO tests currently exist
2. **Identify Gaps**: Compare against documented test cases in MDX files
3. **Implement Core Tests**: Add 2-3 essential test cases if missing
4. **Update Documentation**: Ensure "Not Implemented" sections are clear and inviting
5. **Verify Query Integration**: Confirm `npm run query-missing-tests` shows accurate status

#### 🎯 Contribution Opportunities
- **Clear "Not Implemented" sections**: Make gaps visible and approachable
- **Established WDIO patterns**: New contributors can follow existing test structure
- **AI assistance available**: Contributors can use "I see test case #X is missing" workflow
- **Immediate feedback**: Query system shows progress after implementation

#### 📊 Success Criteria
- **Query Command**: `npm run query-missing-tests` shows detailed status for all decorators
- **Baseline Coverage**: Every decorator has some working WDIO tests  
- **Clear Gaps**: Missing test cases are explicitly documented and ready for contribution
- **Pattern Consistency**: All tests follow established WDIO and component generation patterns

### Additional Phase 2 Gaps
Address specific gaps identified by query system beyond baseline implementation.

---

## 📝 Long-term Vision (Documented)

### Future Ingestion Approaches
Comprehensive strategies documented in `adding-tests.mdx`:

1. **✅ AI-Assisted Test Case Implementation** (Available Today)
2. **✅ Manual Test Addition** (Available Today)  
3. **🔄 Existing Test Ingestion** (Future Plan)
4. **🔄 GitHub Issues Mining** (Future Plan)
5. **🔄 Cross-Framework Test Ingestion** (Future Plan)

---

## 🎯 Immediate Next Steps

### This Week
1. **Complete Refactoring**: Finish @Event, @Method, @State logic migration
2. **Verify Query System**: Ensure all decorators show correct status
3. **Jacob Onboarding**: Begin @Element decorator mentoring

### Next Week  
1. **@Element Implementation**: Complete with Jacob as learning exercise
2. **Framework Validation**: Ensure all patterns work consistently
3. **Documentation Review**: Update any outdated references

---

## 📊 Progress Tracking

### Phase 1 Status: 6/9 Decorators Complete (67%)
- ✅ @Prop, @State, @Event, @Method, @Listen, @Component
- 🚧 @Element, @Watch, @AttachInternals (Jacob tasks)

### Refactoring Status: 1/4 Complete (25%)  
- ✅ @Prop (React logic simplified)
- 🚧 @Event, @Method, @State (need React simplification)

### Infrastructure Status: ✅ Complete
- ✅ Enhanced test-coverage-core.js with WDIO test detection
- ✅ Query utility with natural language shortcuts
- ✅ Package.json scripts and AI prompt mappings
- ✅ Comprehensive documentation in adding-tests.mdx
