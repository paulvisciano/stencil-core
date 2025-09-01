import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D_b_KTPz.js";import{M as r}from"./blocks-DpavRa4g.js";import"./iframe-Bz6ozHtr.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Bc_xQhXn.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Framework/Coverage Matrix/Overview"}),`
`,e.jsx(n.h1,{id:"matrix-generation-for-component-permutations",children:"Matrix Generation for Component Permutations"}),`
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
`,e.jsxs(n.p,{children:["Our first application of this strategy to the ",e.jsx(n.code,{children:"@Prop"})," decorator provides a perfect case study of the iterative process in action and highlights the exponential cost of comprehensive testing. For a concrete example of the permutation matrix in practice, see ",e.jsx(n.a,{href:"?path=/docs/testing-decorators-prop--docs#covered-permutations",children:"@Prop Matrix: Covered Permutations"}),"."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial Coverage Push"}),": We began by identifying the primary permutations for ",e.jsx(n.code,{children:"@Prop"}),", focusing on its ",e.jsx(n.code,{children:"type"})," (e.g., ",e.jsx(n.code,{children:"string"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"boolean"}),") and the ",e.jsx(n.code,{children:"reflect"})," option. The AI assistant generated a suite of isolated component tests in ",e.jsx(n.code,{children:"test/wdio/prop-reflect/"})," to cover these cases. After this initial push, our coverage script reported ",e.jsx(n.strong,{children:"100% coverage"})," for the known permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Discovering a Blind Spot"}),": Upon review, we realized we had completely overlooked the ",e.jsx(n.code,{children:"mutable"})," property. It was not being tracked by our coverage script, giving us a false sense of security."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The Cost of a New Permutation"}),": We updated the ",e.jsx(n.code,{children:"prop-coverage.js"})," script to recognize the ",e.jsx(n.code,{children:"mutable"})," property. The impact was immediate and dramatic. The total number of testable permutations doubled, and our coverage plummeted from ",e.jsx(n.strong,{children:"100% to 62.5%"}),". This demonstrated a critical lesson: each new property added to a feature doesn't just add a few more tests; it can exponentially increase the testing matrix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The Next Iteration"}),": We are now back at the beginning of the testing loop, but we are not starting from scratch. With a more accurate permutation matrix, we will now use the same strategy—and the lessons learned from the first iteration—to generate the tests required to cover the new ",e.jsx(n.code,{children:"mutable"})," permutations and bring our coverage back to 100%."]}),`
`]}),`
`,e.jsx(n.p,{children:"This experience validates our strategy. The loop is designed to be self-correcting. It allows us to uncover our own blind spots, systematically address them, and continuously improve the robustness of our test suite."}),`
`,e.jsx(n.h1,{id:"coverage-matrix-shared-context-for-ai-and-humans",children:"Coverage Matrix: Shared Context for AI and Humans"}),`
`,e.jsx(n.p,{children:"This documentation is the source of truth for the coverage matrix workflow. It is designed to be concise and clear for both AI and human readers, enabling iterative evaluation, generation, and verification of coverage."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generation:"})," See ",e.jsx(n.code,{children:"generation.mdx"})," for how to enumerate permutations and generate missing components/tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verification:"})," See ",e.jsx(n.code,{children:"verification.mdx"})," for how to confirm matrix accuracy and automate reliability checks."]}),`
`]}),`
`,e.jsx(n.p,{children:"The process is inherently iterative, adapting as new decorator options and features are added. Testing details (component and e2e) are covered in separate documentation files."}),`
`,e.jsx(n.h2,{id:"key-learnings-and-implications",children:"Key Learnings and Implications"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The Script is the Source of Truth for Components:"})," The reliability of our entire testing loop hinges on the accuracy of these coverage scripts. If a permutation option is not defined in the script, it will not be tracked, creating a blind spot (as seen with the ",e.jsx(n.code,{children:"@Prop({ mutable: true })"})," case)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parsing is Fragile:"})," Source code parsing, whether with regex or line-by-line analysis, can be brittle. Changes in code formatting or syntax could potentially break the scripts. They must be maintained alongside any changes to coding conventions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Human Oversight is Essential:"})," The process is automated but not infallible. It's crucial for developers to periodically review these scripts to ensure they accurately reflect the full feature set of the decorators they are intended to cover. When a new option is added to a decorator, the corresponding coverage script ",e.jsx(n.strong,{children:"must"})," be updated."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Continuous Improvement:"})," After each major testing iteration, document learnings, mistakes, coverage gaps, and process optimizations in the appropriate ",e.jsx(n.code,{children:".ai"})," folder files and documentation. This ensures the methodology evolves and improves over time."]}),`
`]}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further Reading"}),`
`,e.jsxs(n.p,{children:["For a high-level overview of how matrix-driven coverage fits into the overall testing strategy, see ",e.jsx(n.a,{href:"?path=/docs/testing-overview--docs",children:"Testing Overview"}),"."]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
