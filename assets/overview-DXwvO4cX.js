import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dx_hR-Ta.js";import{M as r}from"./blocks-C75T4PbY.js";import"./iframe-Cg0s360y.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BLRaQ8_L.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Framework/Coverage Matrix/Overview",tags:["pending-review"]}),`
`,e.jsx(n.h1,{id:"matrix-generation-for-component-permutations",children:"Matrix Generation for Component Permutations"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsx(n.h2,{id:"why-matrix-driven-static-analysis-coverage-is-essential",children:"Why Matrix-Driven Static Analysis Coverage Is Essential"}),`
`,e.jsx(n.p,{children:"Traditional unit test coverage tools (like Istanbul/NYC) are effective for verifying the compiler's internal logic, but they cannot ensure that every possible decorator permutation is exercised in real-world usage. This is because, to truly flex the compiler, we must use it as an external consumer—generating components and running them through the build/test pipeline. Standard coverage tools cannot track which decorator permutations are exercised in generated code."}),`
`,e.jsx(n.p,{children:"Matrix-driven static analysis bridges this gap:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Permutation Matrix:"})," For each decorator, all possible permutations (based on its properties/options) are enumerated in a machine-readable matrix (typically an ",e.jsx(n.code,{children:".mdx"})," file)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Analysis:"})," Scripts scan the codebase to check which permutations are present in generated components and tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Reporting:"})," The matrix is updated to show which permutations are covered and which are missing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test Generation:"})," Missing permutations trigger new component/test generation, ensuring every case is exercised."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expansion:"})," While currently focused on Component Tests, this approach will expand to e2e tests, ensuring full coverage across all test types."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: As of Iteration X, we exclude permutations where both ",e.jsx(n.code,{children:"shadow"})," and ",e.jsx(n.code,{children:"scoped"})," are true. Stencil treats these as invalid (mutually exclusive), so they are not counted in total permutations."]}),`
`]}),`
`,e.jsx(n.p,{children:"This matrix-driven strategy is essential for maintaining confidence in Stencil’s feature coverage, especially as new decorator options are added. It complements runtime tests and standard coverage tools, providing a systematic way to achieve and maintain comprehensive coverage."}),`
`,e.jsx(n.h2,{id:"core-objective",children:"Core Objective"}),`
`,e.jsxs(n.p,{children:["The primary goal of each ",e.jsx(n.code,{children:"*-coverage.js"})," script is to determine the component permutation coverage for a specific Stencil decorator (e.g., ",e.jsx(n.code,{children:"@Prop"}),", ",e.jsx(n.code,{children:"@Listen"}),"). It achieves this by performing two key functions:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Defining the entire universe of possible feature permutations."})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Scanning the codebase to see which of those permutations are actually implemented in dedicated test components."})}),`
`]}),`
`,e.jsx(n.p,{children:`The final output is a comparison between the "possible" and the "actual," resulting in a coverage percentage and a list of what's missing.`}),`
`,e.jsx(n.h2,{id:"the-generation-process-a-step-by-step-guide",children:"The Generation Process: A Step-by-Step Guide"}),`
`,e.jsx(n.p,{children:"All coverage scripts follow a similar underlying logic, which can be broken down into the following steps:"}),`
`,e.jsx(n.h3,{id:"1-defining-the-scope",children:"1. Defining the Scope"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Directories:"})," Each script begins by defining a list of directories to scan for component files. This is typically ",e.jsx(n.code,{children:"test/wdio"})," and ",e.jsx(n.code,{children:"test/end-to-end"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Permutation Options:"}),` The script hardcodes the "source of truth" for a decorator's permutations. This includes all possible properties and their potential values.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Example (",e.jsx(n.code,{children:"@Listen"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TARGET_OPTIONS"}),": ",e.jsx(n.code,{children:"['window', 'document', 'body', 'parent', 'host']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"capture"}),": ",e.jsx(n.code,{children:"[true, false]"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-finding-relevant-component-files",children:"2. Finding Relevant Component Files"}),`
`,e.jsxs(n.p,{children:["A file system utility recursively searches the specified component directories for files with a specific extension, almost always ",e.jsx(n.code,{children:".tsx"}),". This produces a list of all component files that could contain decorator implementations."]}),`
`,e.jsx(n.h3,{id:"3-parsing-source-code-to-find-decorators",children:"3. Parsing Source Code to Find Decorators"}),`
`,e.jsx(n.p,{children:"This is the most critical and variable step. The script reads the content of each component file and uses a specific strategy to find all instances of the target decorator."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Strategy A: Regex for Simple Decorators:"})," For decorators with a straightforward, single-line syntax like ",e.jsx(n.code,{children:"@Listen"}),", a single, effective regex (",e.jsx(n.code,{children:"/@Listen\\s*\\(([^)]*)\\)/g"}),") is used to capture all instances and their options at once. This is efficient and concise."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Strategy B: Line-by-Line Parsing for Complex Decorators:"})," For decorators like ",e.jsx(n.code,{children:"@Prop"})," where the declaration can be multi-line and associated with a typed class property, a more robust line-by-line parsing approach is necessary. The script iterates through the file's lines, identifies a decorator, and then continues reading subsequent lines to piece together the full context (e.g., the property's type, name, and initializer)."]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"4-extracting-and-normalizing-data",children:"4. Extracting and Normalizing Data"}),`
`,e.jsx(n.p,{children:"Once a decorator is found, its options are extracted."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Extraction:"})," Regex is used to pull out the values of specific keys (e.g., ",e.jsx(n.code,{children:"reflect: true"}),", ",e.jsx(n.code,{children:"target: 'window'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Defaults:"})," The script logic accounts for default values. For instance, in ",e.jsx(n.code,{children:"@Listen"}),", if ",e.jsx(n.code,{children:"target"})," is not specified, it defaults to ",e.jsx(n.code,{children:"'host'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Normalization:"})," The extracted values are normalized into a consistent format for easy comparison. A common example is converting boolean ",e.jsx(n.code,{children:"true"}),"/",e.jsx(n.code,{children:"false"})," into checkmark icons (",e.jsx(n.code,{children:"✓"}),"/",e.jsx(n.code,{children:"✗"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"5-calculating-coverage",children:"5. Calculating Coverage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The script programmatically generates a complete list of all possible permutation keys from the hardcoded options (e.g., ",e.jsx(n.code,{children:'"window|✓"'}),", ",e.jsx(n.code,{children:'"window|✗"'}),")."]}),`
`,e.jsx(n.li,{children:"It then creates a map of all the permutations it found during the parsing step."}),`
`,e.jsx(n.li,{children:'By comparing the "found" map against the "all possible" list, it calculates the total number of covered permutations, the overall percentage, and a list of the specific permutations that are missing.'}),`
`]}),`
`,e.jsx(n.h3,{id:"6-generating-output",children:"6. Generating Output"}),`
`,e.jsxs(n.p,{children:["The final results are typically written to a ",e.jsx(n.code,{children:".json"})," file (e.g., ",e.jsx(n.code,{children:"prop-coverage-data.json"}),"). This file serves as a data source for other tools and, in many cases, is used to dynamically build and update the coverage matrix tables displayed in the ",e.jsx(n.code,{children:".mdx"})," documentation files."]}),`
`,e.jsxs(n.h2,{id:"real-world-example-the-prop-decorator",children:["Real-World Example: The ",e.jsx(n.code,{children:"@Prop"})," Decorator"]}),`
`,e.jsxs(n.p,{children:["Our application of this strategy to the ",e.jsx(n.code,{children:"@Prop"})," decorator demonstrates the complete ",e.jsx(n.strong,{children:"3-step testing loop"})," in action and showcases the exponential value of systematic testing. For concrete examples, see ",e.jsx(n.a,{href:"?path=/docs/testing-decorators-prop--docs#covered-permutations",children:"@Prop Matrix: Covered Permutations"}),"."]}),`
`,e.jsx(n.h3,{id:"the-complete-loop-success-story",children:"The Complete Loop Success Story"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 1: Rules Discovery"})," 🔍"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI Matrix Generation"}),": Started with broad matrix: 6 types × 2 reflect × 2 mutable = 24 permutations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial Component Generation"}),": Generated all 24 components (including invalid ones)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Compiler-Driven Discovery"}),": Build attempts revealed constraint violations:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Complex types (Array, Object, Set) cannot use ",e.jsx(n.code,{children:"reflect: true"})]}),`
`,e.jsx(n.li,{children:"Compiler errors became the source of truth for valid combinations"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rules Encoding"}),": Created ",e.jsx(n.code,{children:"rules.json"})," capturing discovered constraints"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Matrix Refinement"}),": Updated matrix eliminated invalid permutations, kept 24 valid ones"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 2: Generate & Build"})," 🏗️"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clean Generation"}),": Generated 24 components from compiler-validated matrix"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zero-Error Build"}),": All components compiled successfully"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Systematic Organization"}),": Components organized by type directories with consistent naming"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 3: Test & Verify"})," ✅"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structured Testing"}),": Implemented 5 test cases covering all behavioral scenarios"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Complete Coverage"}),": Achieved 100% coverage across all ",e.jsx(n.strong,{children:"valid"})," permutations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Runtime Validation"}),": Verified functionality through WebDriver I/O tests"]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-learnings-from-the-rules-discovery-process",children:"Key Learnings from the Rules Discovery Process"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Compiler as Oracle"}),": Using build failures to discover valid decorator combinations is more reliable than manual specification"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Broad-to-Narrow Approach"}),": Starting with all possible permutations and eliminating invalid ones ensures comprehensive coverage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Constraint Documentation"}),": ",e.jsx(n.code,{children:"rules.json"})," becomes a living document of framework constraints discovered through systematic exploration"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Iterative Refinement"}),": The discovery process naturally handles framework evolution - new constraints are discovered and encoded automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community Scalability"}),": Once rules are discovered, community contributions follow validated patterns"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The Revolutionary Insight"}),": Instead of trying to predict valid decorator combinations, let the compiler teach us what's actually possible!"]}),`
`,e.jsxs(n.p,{children:["This validates our ",e.jsx(n.strong,{children:"Rules Discovery strategy"})," as a scalable, ",e.jsx(n.strong,{children:"compiler-driven"})," approach to maintaining comprehensive test coverage as the framework evolves."]}),`
`,e.jsx(n.h1,{id:"coverage-matrix-community-driven-testing-documentation",children:"Coverage Matrix: Community-Driven Testing Documentation"}),`
`,e.jsx(n.p,{children:"This documentation serves as the source of truth for our crowdsourceable testing ecosystem. It enables both AI and human contributors to systematically identify gaps, implement tests, and verify coverage."}),`
`,e.jsx(n.h2,{id:"test-case-documentation-system",children:"Test Case Documentation System"}),`
`,e.jsx(n.p,{children:"Our structured approach creates comprehensive test case documentation automatically:"}),`
`,e.jsx(n.h3,{id:"coverage-reports-structure",children:"Coverage Reports Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "coverage": {
    "covered": 24,
    "total": 24, 
    "percent": "100.00"
  },
  "items": [
    {
      "group": "string",
      "options": {
        "type": "string",
        "reflect": "✓",
        "mutable": "✓"
      },
      "tested": true,
      "caseIds": [1, 3, 5]
    }
  ]
}
`})}),`
`,e.jsx(n.h3,{id:"test-case-mapping",children:"Test Case Mapping"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case #1"}),": Primitive runtime coverage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case #2"}),": Complex static render"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case #3"}),": reflect=true behaviors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case #4"}),": reflect=false behaviors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case #5"}),": mutable=true behaviors"]}),`
`]}),`
`,e.jsx(n.h2,{id:"community-contribution-opportunities",children:"Community Contribution Opportunities"}),`
`,e.jsx(n.h3,{id:"gap-identification",children:"Gap Identification"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Missing permutations"}),": Automatically identified in coverage reports"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Untested scenarios"}),": ",e.jsx(n.code,{children:'"tested": false'})," entries need implementation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New test cases"}),": Expand beyond current 5 test case types"]}),`
`]}),`
`,e.jsx(n.h3,{id:"contribution-process",children:"Contribution Process"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review coverage reports"})," in ",e.jsx(n.code,{children:"/test/storybook/docs/Testing/Decorators/{decorator}/data/"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Follow the 3-step loop"}),": Rules → Generate → Test"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Implement using established patterns"})," and naming conventions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Submit pull requests"})," with documentation updates"]}),`
`]}),`
`,e.jsx(n.h3,{id:"expandable-test-scenarios",children:"Expandable Test Scenarios"}),`
`,e.jsx(n.p,{children:"Beyond current coverage, community can add:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Edge cases"}),": null/undefined handling, boundary conditions"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Performance scenarios"}),": large datasets, memory usage"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Integration patterns"}),": component composition, complex interactions"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility"}),": screen reader support, keyboard navigation"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Browser compatibility"}),": specific behaviors, polyfills"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Generation:"})," See ",e.jsx(n.code,{children:"generation.mdx"})," for systematic component creation"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Verification:"})," See ",e.jsx(n.code,{children:"verification.mdx"})," for coverage validation and quality assurance"]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"This process is inherently collaborative, enabling community-driven expansion as new decorator options and real-world use cases emerge."}),`
`,e.jsx(n.h2,{id:"key-learnings-and-implications",children:"Key Learnings and Implications"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The Script is the Source of Truth for Components:"})," The reliability of our entire testing loop hinges on the accuracy of these coverage scripts. If a permutation option is not defined in the script, it will not be tracked, creating a blind spot (as seen with the ",e.jsx(n.code,{children:"@Prop({ mutable: true })"})," case)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parsing is Fragile:"})," Source code parsing, whether with regex or line-by-line analysis, can be brittle. Changes in code formatting or syntax could potentially break the scripts. They must be maintained alongside any changes to coding conventions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Human Oversight is Essential:"})," The process is automated but not infallible. It's crucial for developers to periodically review these scripts to ensure they accurately reflect the full feature set of the decorators they are intended to cover. When a new option is added to a decorator, the corresponding coverage script ",e.jsx(n.strong,{children:"must"})," be updated."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Continuous Improvement:"})," After each major testing iteration, document learnings, mistakes, coverage gaps, and process optimizations in the appropriate ",e.jsx(n.code,{children:".ai"})," folder files and documentation. This ensures the methodology evolves and improves over time."]}),`
`]}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further Reading"}),`
`,e.jsxs(n.p,{children:["For a high-level overview of how matrix-driven coverage fits into the overall testing strategy, see ",e.jsx(n.a,{href:"?path=/docs/testing-framework-overview--docs",children:"Testing Overview"}),"."]})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
