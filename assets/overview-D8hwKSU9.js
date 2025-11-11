import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Bpjpk8ZK.js";import{M as t}from"./blocks-BLFg5S-i.js";import"./iframe-DWOLDdAi.js";import"./preload-helper-D9Z9MdNV.js";import"./index-0Ea0Bo0A.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Testing/Framework/Overview",tags:["pending-review"]}),`
`,e.jsx(n.h1,{id:"testing-framework-overview",children:"Testing Framework Overview"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsx(n.h1,{id:"stenciljs-testing-strategy",children:"Stencil.js Testing Strategy"}),`
`,e.jsxs(n.p,{children:["This document outlines the comprehensive testing strategy for the Stencil.js codebase. Our approach combines two complementary methodologies: ",e.jsx(n.strong,{children:"matrix-based testing"})," for decorators and ",e.jsx(n.strong,{children:"scenario-based testing"})," for behavior patterns. Both are powered by GenAI automation to ensure comprehensive, maintainable, and scalable test coverage."]}),`
`,e.jsx(n.h2,{id:"philosophy",children:"Philosophy"}),`
`,e.jsx(n.p,{children:"For a foundational library like Stencil, the testing strategy must be rigorous. It should not only validate that features work as expected but also ensure they are reliable in isolation and play well with others. We follow a model inspired by the classic testing pyramid."}),`
`,e.jsxs(n.p,{children:["A key aspect of our strategy is recognizing the difference between ",e.jsx(n.strong,{children:"static coverage analysis"})," and ",e.jsx(n.strong,{children:"runtime behavior testing"}),". Our coverage scripts work by statically analyzing the source code for specific patterns (e.g., the presence of a ",e.jsx(n.code,{children:"@Prop"})," decorator with certain options). This is a fast and effective way to inventory our features, but it does not execute the code to verify its behavior. Therefore, our testing strategy is designed to satisfy both our static analysis tools and the need for robust, behavior-driven validation."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," For a deeper dive into how the permutation matrix is generated and used for coverage, see ",e.jsx(n.a,{href:"?path=/docs/testing-framework-coverage-matrix-generation--docs",children:"Matrix Generation"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"summary-the-testing-pyramid-in-practice",children:"Summary: The Testing Pyramid in Practice"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Test Type"}),e.jsx("th",{children:"Directory"}),e.jsx("th",{children:"Technology"}),e.jsx("th",{children:"Approach"}),e.jsx("th",{children:"Goal"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Core Tests"})}),e.jsx("td",{children:e.jsx("code",{children:"src/"})}),e.jsx("td",{children:"Jest"}),e.jsx("td",{children:"Unit Testing"}),e.jsx("td",{children:"Verify Stencil's internal compiler and runtime functionality"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Decorator Tests"})}),e.jsx("td",{children:e.jsx("code",{children:"test/wdio/[decorator]/"})}),e.jsx("td",{children:"WebdriverIO"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Matrix-Based"}),e.jsx("br",{}),"Systematic permutation generation"]}),e.jsx("td",{children:"Comprehensive coverage of all decorator option combinations via generated components"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Behavior Tests"})}),e.jsx("td",{children:e.jsx("code",{children:"test/wdio/ts-target/extends-*/"})}),e.jsx("td",{children:"WebdriverIO"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Scenario-Based"}),e.jsx("br",{}),"Real-world pattern testing"]}),e.jsx("td",{children:"Validate inheritance patterns, lifecycle chains, and reactive controllers"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"E2E Tests"})}),e.jsx("td",{children:e.jsx("code",{children:"test/end-to-end/"})}),e.jsxs("td",{children:["Puppeteer (",e.jsx("code",{children:"newE2EPage"}),")"]}),e.jsx("td",{children:"Integration Testing"}),e.jsx("td",{children:"Cross-feature integration and browser environment validation"})]})]})]}),`
`,e.jsx(n.h2,{id:"dual-testing-methodologies",children:"Dual Testing Methodologies"}),`
`,e.jsxs(n.p,{children:["Our testing strategy employs ",e.jsx(n.strong,{children:"two complementary approaches"})," tailored to different testing needs:"]}),`
`,e.jsx(n.h3,{id:"matrix-based-testing-decorators",children:"Matrix-Based Testing (Decorators)"}),`
`,e.jsxs(n.p,{children:["Systematic ",e.jsx(n.strong,{children:"permutation matrix generation"})," for comprehensive decorator coverage:"]}),`
`,e.jsx(n.h4,{id:"step-1-rules-discovery-",children:e.jsx(n.strong,{children:"Step 1: Rules Discovery 🔍"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI generates comprehensive matrix"})," of ALL possible decorator permutations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generate components"})," from broad initial matrix (includes invalid combinations)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Compile components"})," to discover constraint violations through compiler errors"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Create/update ",e.jsx(n.code,{children:"rules.json"})]})," to encode discovered constraints (e.g., mutually exclusive properties)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Refine matrix"})," based on compiler-enforced rules, eliminating invalid permutations"]}),`
`]}),`
`,e.jsx(n.h4,{id:"step-2-generate--build-️",children:e.jsx(n.strong,{children:"Step 2: Generate & Build 🏗️"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generate final components"})," from refined rules and validated matrix"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build components"})," successfully with no compiler errors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shared infrastructure"})," (",e.jsx(n.code,{children:"_shared/generate-components-core.js"}),") eliminates code duplication"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated verification"})," via ",e.jsx(n.code,{children:"verify-matrix-core.js"})," ensures 100% coverage"]}),`
`]}),`
`,e.jsx(n.h4,{id:"step-3-test--verify-",children:e.jsx(n.strong,{children:"Step 3: Test & Verify ✅"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structured test cases"})," follow established patterns (Test Case #1, #2, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Runtime verification"})," ensures compiled components behave correctly"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage tracking"})," via ",e.jsx(n.code,{children:"test-coverage-core.js"})," with JSON-driven documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community-friendly"})," patterns enable collaborative test case expansion"]}),`
`]}),`
`,e.jsx(n.h3,{id:"scenario-based-testing-behavior-patterns",children:"Scenario-Based Testing (Behavior Patterns)"}),`
`,e.jsxs(n.p,{children:["Targeted ",e.jsx(n.strong,{children:"real-world scenario testing"})," for inheritance and composition patterns:"]}),`
`,e.jsx(n.h4,{id:"scenario-identification-",children:e.jsx(n.strong,{children:"Scenario Identification 🎯"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Real-world use cases"})," drive test case selection (lifecycle inheritance, reactive controllers)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customer feedback"})," influences priority and implementation approach"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern complexity"})," determines test case categorization (Basic → Standard → Advanced)"]}),`
`]}),`
`,e.jsx(n.h4,{id:"implementation--validation-",children:e.jsx(n.strong,{children:"Implementation & Validation 🔧"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Manual component creation"})," following established patterns (e.g., ",e.jsx(n.code,{children:"extends-abstract"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ES2022 target"})," with iframe testing for robust validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global array pattern"})," for reliable event tracking without render loops"]}),`
`]}),`
`,e.jsx(n.h4,{id:"documentation--expansion-",children:e.jsx(n.strong,{children:"Documentation & Expansion 📊"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JSON-driven tables"})," maintain test case status and coverage data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Complexity categories"})," organize tests from foundational to production-ready"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Systematic expansion"})," enables progressive enhancement"]}),`
`]}),`
`,e.jsx(n.h3,{id:"methodology-benefits",children:"Methodology Benefits"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Comprehensive coverage"}),": Matrix approach ensures no decorator combinations are missed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Real-world validation"}),": Scenario approach tests actual usage patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic adaptation"})," to framework changes through compiler-driven discovery"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community scalability"})," via standardized patterns and AI-friendly documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shared infrastructure"})," eliminates duplication across both methodologies"]}),`
`]}),`
`,e.jsx(n.h2,{id:"current-testing-landscape",children:"Current Testing Landscape"}),`
`,e.jsx(n.h3,{id:"️-decorators-matrix-based---production-ready",children:e.jsx(n.strong,{children:"🏗️ Decorators (Matrix-Based) - Production Ready"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"6 Decorators"}),": ",e.jsx(n.code,{children:"@Component"}),", ",e.jsx(n.code,{children:"@State"}),", ",e.jsx(n.code,{children:"@Prop"}),", ",e.jsx(n.code,{children:"@Event"}),", ",e.jsx(n.code,{children:"@Listen"}),", ",e.jsx(n.code,{children:"@Method"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"289 Generated Components"}),": Systematic coverage across all valid permutations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shared Infrastructure"}),": Eliminates 80% code duplication via ",e.jsx(n.code,{children:"_shared/"})," utilities"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"100% Coverage"}),": All decorators have complete matrix generation and verification"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structured Test Cases"}),": 2-8 test cases per decorator with comprehensive runtime validation"]}),`
`]}),`
`,e.jsx(n.h3,{id:"-behaviorextends-scenario-based---active-development",children:e.jsx(n.strong,{children:"🎯 Behavior/Extends (Scenario-Based) - Active Development"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"11 Test Cases Planned"}),": From basic inheritance to advanced reactive controllers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"3 Test Cases Implemented"}),": Lifecycle inheritance, multi-level chains, controller updates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ES2022 Architecture"}),": Uses ",e.jsx(n.code,{children:"ts-target"})," directory with iframe testing for robust validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Real-World Patterns"}),": Customer-driven scenarios like ClockController, FloatingUI integration"]}),`
`]}),`
`,e.jsx(n.h2,{id:"quickstart",children:"Quickstart"}),`
`,e.jsx(n.p,{children:"For a concise, step‑by‑step path, see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Matrix Testing"}),": ",e.jsx(n.a,{href:"?path=/docs/testing-framework-quickstart--docs",children:"Quickstart: Coverage → Generate → Verify"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Decorator Overview"}),": ",e.jsx(n.a,{href:"?path=/docs/testing-decorators-overview--docs",children:"All Decorator Test Matrices"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Behavior Testing"}),": ",e.jsx(n.a,{href:"?path=/docs/testing-behavior-extends-overview--docs",children:"Extends Functionality Testing"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"running-scripts-with-packagejson-shortcuts",children:"Running Scripts with package.json Shortcuts"}),`
`,e.jsxs(n.p,{children:["To streamline the testing workflow and avoid path resolution issues, a ",e.jsx(n.code,{children:"package.json"})," file with shortcut scripts is provided in the ",e.jsx(n.code,{children:".ai/testing"})," folder. These scripts automatically ",e.jsx(n.code,{children:"cd"})," into the correct directory and run the required commands, ensuring consistent execution regardless of your current working directory."]}),`
`,e.jsxs(n.p,{children:["See also: Example Prompts at ",e.jsx(n.code,{children:".ai/testing/AGENT_PROMPTS.md"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How to use:"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"All Decorators:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Generate all decorator components: ",e.jsx(n.code,{children:"npm run generate-components"})]}),`
`,e.jsxs(n.li,{children:["Query missing test cases across all decorators: ",e.jsx(n.code,{children:"npm run query-missing-tests"})]}),`
`,e.jsxs(n.li,{children:["Build WDIO components: ",e.jsx(n.code,{children:"npm run components-build"})]}),`
`,e.jsxs(n.li,{children:["Run all WDIO tests: ",e.jsx(n.code,{children:"npm run tests"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Individual Decorators:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run [decorator]:generate-components"})," - Generate components (state, prop, event, method)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run [decorator]:test-coverage"})," - Analyze test coverage (state, prop, event, method)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run [decorator]:verify-matrix"})," - Verify matrix completeness (component, listen)"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available Decorators:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"component"})," - Component metadata and options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"state"})," - Internal reactive state management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prop"})," - External component properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event"})," - Custom event emission"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listen"})," - Event listening and handling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method"})," - Public component methods"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Examples:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run state:generate-components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run prop:test-coverage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run component:verify-matrix"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Best Practice:"}),`
Always use these shortcuts from the `,e.jsx(n.code,{children:".ai/testing"})," folder to avoid path issues and ensure scripts run in the correct environment. Update or add new shortcuts as needed to keep the workflow efficient and reliable."]}),`
`,e.jsx(n.h2,{id:"recording-learnings",children:"Recording Learnings"}),`
`,e.jsxs(n.p,{children:["After each testing loop iteration, all learnings—including mistakes, improvements, coverage script gaps, and best practices—should be documented in the appropriate ",e.jsx(n.code,{children:".ai"})," folder file for the feature or decorator. Additionally, a summary of key learnings and process changes should be added to the audit log (",e.jsx(n.code,{children:"audit.mdx"}),") to ensure institutional knowledge is preserved and future contributors benefit from past experience."]}),`
`,e.jsx(n.h2,{id:"community-driven-testing-ecosystem",children:"Community-Driven Testing Ecosystem"}),`
`,e.jsxs(n.p,{children:["Our testing framework creates a ",e.jsx(n.strong,{children:"crowdsourceable ecosystem"})," where the open source community can systematically contribute to test coverage. This approach scales testing quality through collaborative effort."]}),`
`,e.jsx(n.h3,{id:"crowdsourcing-opportunities",children:"Crowdsourcing Opportunities"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Gap Identification Dashboard"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Missing test cases"})," automatically identified in coverage reports"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual matrix"})," showing which decorator/option combinations need tests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Priority ranking"})," based on real-world usage patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test coverage JSON"})," provides structured data for community analysis"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Community Contribution Pathways"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Easy entry point"}),': "Add a test case for X scenario"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Guided templates"}),": Follow existing patterns in structured test cases"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI-assisted implementation"}),": Contributors can use AI following established conventions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Model-agnostic"}),": Works with any AI model (proprietary or open-source)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Expandable Test Scenarios"}),`
Beyond current test cases, community can add:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Edge case testing"})," (null/undefined handling, boundary conditions)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance scenarios"})," (large data sets, memory usage)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration patterns"})," (component composition, complex interactions)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser compatibility"})," (specific browser behaviors, polyfills)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility scenarios"})," (screen reader support, keyboard navigation)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Real-world use cases"})," discovered in production applications"]}),`
`]}),`
`,e.jsx(n.h3,{id:"contribution-process",children:"Contribution Process"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fork the repository"})," and identify gaps using coverage reports"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Follow the 3-step loop"})," with your preferred AI model or manual implementation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Submit pull requests"})," with new test cases following established patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community review"})," ensures quality and consistency"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated verification"})," through systematic coverage tracking"]}),`
`]}),`
`,e.jsxs(n.p,{children:["This dual approach enables both ",e.jsx(n.strong,{children:"systematic completeness"})," (matrix) and ",e.jsx(n.strong,{children:"practical validation"})," (scenarios), harnessing collective intelligence to build comprehensive test coverage that scales with framework complexity."]}),`
`,e.jsx(n.h3,{id:"shared-testing-infrastructure",children:"Shared Testing Infrastructure"}),`
`,e.jsxs(n.p,{children:["Our framework uses ",e.jsx(n.strong,{children:"shared core utilities"})," that eliminate code duplication and ensure consistency:"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Core Generation (",e.jsx(n.code,{children:"_shared/generate-components-core.js"}),")"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"164 lines"})," handle help, setup, generation loop, and verification for ALL decorators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single source of truth"})," for component generation patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistent behavior"})," across all decorator types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Eliminates duplication"})," of identical logic across scripts"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Core Coverage Analysis (",e.jsx(n.code,{children:"_shared/test-coverage-core.js"}),")"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"118 lines"})," provide configurable scanning, statistics, and output logic"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dramatic code reduction"}),": 80% duplication eliminated across decorators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistent output format"})," for all test coverage reports"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Easy decorator addition"})," via simple callback configuration"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Shared UI Components (",e.jsx(n.code,{children:"_shared/*.jsx"}),")"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TestCasesTable"}),": Collapsible tables with preview functionality"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GeneratedComponentsTable"}),": Matrix visualization with filtering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RulesAtAGlance"}),": Rule constraint visualization"]}),`
`]}),`
`,e.jsx(n.h3,{id:"dual-documentation-systems",children:"Dual Documentation Systems"}),`
`,e.jsxs(n.p,{children:["Our framework supports ",e.jsx(n.strong,{children:"two complementary documentation approaches"}),":"]}),`
`,e.jsx(n.h4,{id:"matrix-based-documentation-decorators",children:e.jsx(n.strong,{children:"Matrix-Based Documentation (Decorators)"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Structured Test Cases"}),": Each decorator follows consistent patterns"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@Prop"}),": 5 test cases (primitive runtime, complex render, reflect behaviors, mutable)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@State"}),": 2 test cases (primitive mutation, complex static render)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@Method"}),": 8 test cases (promise/async patterns, argument variations)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Component Naming"}),": ",e.jsx(n.code,{children:"[decorator]-[options]"})," convention"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`prop-string-reflect-true-mutable-false
state-number-default
method-promise-async-true-args-two
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Coverage Tracking"}),": Automated JSON reports with gap analysis"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "coverage": { "covered": 24, "total": 24, "percent": "100.00" },
  "testCaseStatus": {
    "1": { "implemented": true, "description": "Primitive runtime coverage" }
  },
  "items": [{
    "group": "string", "options": { "type": "string", "reflect": true },
    "tested": true, "caseIds": [1, 3, 5]
  }]
}
`})}),`
`,e.jsx(n.h4,{id:"scenario-based-documentation-behavior-patterns",children:e.jsx(n.strong,{children:"Scenario-Based Documentation (Behavior Patterns)"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Real-World Test Cases"}),": Complexity-organized scenarios"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basic Inheritance (1-5)"}),": Lifecycle, properties, methods, render"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standard Patterns (6-11)"}),": Abstract classes, mixins, events, watch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Advanced Controllers"}),": Production-ready reactive patterns"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Component Organization"}),": Semantic naming by functionality"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`extends-lifecycle-basic/
extends-lifecycle-multilevel/
extends-controller-updates/
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status Tracking"}),": JSON-driven tables with implementation status"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "testCaseStatus": {
    "1": {
      "implemented": true,
      "description": "Lifecycle inheritance (Load, Render, Update)",
      "specPath": "test/wdio/ts-target/extends-lifecycle-basic/cmp.test.ts"
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"evolution-and-continuous-improvement",children:"Evolution and Continuous Improvement"}),`
`,e.jsx(n.h3,{id:"framework-maturity-timeline",children:e.jsx(n.strong,{children:"Framework Maturity Timeline"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Phase 1 Complete"}),": Matrix-based decorator testing with shared infrastructure"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Phase 2 Active"}),": Scenario-based behavior testing for real-world patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Phase 3 Planned"}),": Advanced reactive controllers and production edge cases"]}),`
`]}),`
`,e.jsx(n.h3,{id:"recent-innovations",children:e.jsx(n.strong,{children:"Recent Innovations"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shared Infrastructure"}),": Eliminated massive code duplication (80% reduction)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dual Methodologies"}),": Matrix + Scenario approaches serve different testing needs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JSON-Driven Documentation"}),": Automated table generation from test coverage data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community Scalability"}),": AI-friendly patterns enable collaborative expansion"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ES2022 Architecture"}),": Modern TypeScript targets for inheritance testing"]}),`
`]}),`
`,e.jsx(n.h3,{id:"learning-documentation",children:e.jsx(n.strong,{children:"Learning Documentation"})}),`
`,e.jsx(n.p,{children:"This strategy is a living document. After each major testing iteration, we update:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Strategy Documentation"}),": This overview and methodology guides"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Decorator-Specific Guides"}),": Individual decorator testing patterns and learnings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Audit Log"}),": ",e.jsx(n.a,{href:"?path=/docs/testing-framework-audit--docs",children:"Comprehensive change tracking"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shared Infrastructure"}),": Common utilities and patterns"]}),`
`]}),`
`,e.jsx(n.h3,{id:"institutional-knowledge-capture",children:e.jsx(n.strong,{children:"Institutional Knowledge Capture"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI Learnings"}),": Successful patterns, common pitfalls, and correction strategies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Discoveries"}),": Gaps identified and systematic improvements implemented"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Process Evolution"}),": Workflow optimizations and shared utility development"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community Contributions"}),": Patterns that enable scalable collaborative testing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Technical Innovations"}),": Architecture decisions like ES2022, iframe testing, Global Array Pattern"]}),`
`]}),`
`,e.jsx(n.h3,{id:"success-metrics",children:e.jsx(n.strong,{children:"Success Metrics"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"289 Generated Components"})," systematically testing all valid decorator combinations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zero code duplication"})," in generation scripts via shared infrastructure"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"13 Test Cases"})," covering lifecycle inheritance to production reactive controllers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"100% Matrix Coverage"})," for all 6 Stencil decorators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI-Friendly Documentation"})," enabling community contribution at scale"]}),`
`]}),`
`,e.jsxs(n.p,{children:["By combining systematic matrix coverage with real-world scenario validation, we've built a ",e.jsx(n.strong,{children:"comprehensive, scalable testing ecosystem"})," that ensures Stencil remains reliable for all developers while enabling rapid framework evolution."]}),`
`,e.jsx(n.hr,{})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
