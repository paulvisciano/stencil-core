import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DkM_JNzF.js";import{M as o}from"./blocks-CGqGehBw.js";import"./iframe-DnsNI89h.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DfHBohhK.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Testing/Framework/Project Config",tags:["pending-review"]}),`
`,e.jsx(n.h1,{id:"project-specific-coverage-matrix-configuration",children:"Project-Specific Coverage Matrix Configuration"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsx(n.p,{children:"This file documents project-specific details for the coverage matrix workflow. It is intended to keep the main AI testing framework documentation generic and portable, while capturing all configuration and conventions unique to this project."}),`
`,e.jsx(n.h2,{id:"decorator-documentation",children:"Decorator Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each decorator has a corresponding ",e.jsx(n.code,{children:".mdx"})," file in ",e.jsx(n.code,{children:"test/storybook/docs/Testing/Decorators"}),"."]}),`
`,e.jsx(n.li,{children:"These files document the decorator's properties, the Permutation Matrix, and a summary table of test cases."}),`
`]}),`
`,e.jsx(n.h2,{id:"coverage-scripts-and-data",children:"Coverage Scripts and Data"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each decorator has a ",e.jsx(n.code,{children:"decorator-coverage.js"})," script to generate the coverage matrix."]}),`
`,e.jsxs(n.li,{children:["Coverage data is stored in a corresponding ",e.jsx(n.code,{children:"coverage-data.json"})," file."]}),`
`]}),`
`,e.jsx(n.h2,{id:"running-coverage-scripts",children:"Running Coverage Scripts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You can run a coverage script directly for a specific decorator."}),`
`,e.jsxs(n.li,{children:["To run all coverage scripts at once, use ",e.jsx(n.code,{children:"test/storybook/docs/Testing/Decorators/run-all-coverage.js"}),"."]}),`
`,e.jsxs(n.li,{children:["Alternatively, from ",e.jsx(n.code,{children:"test/storybook"}),", run ",e.jsx(n.code,{children:"npm run coverage"})," to execute all coverage scripts."]}),`
`]}),`
`,e.jsx(n.h2,{id:"project-paths-and-coverage-script-config",children:"Project Paths and Coverage Script Config"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Directory:"})," ",e.jsx(n.code,{children:"test/wdio"})," (see ",e.jsx(n.code,{children:"COMPONENTS_DIR"})," in verify-matrix.js)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Script:"})," ",e.jsx(n.code,{children:"test/storybook/docs/Testing/Decorators/run-all-coverage.js"})," (see ",e.jsx(n.code,{children:"COVERAGE_SCRIPT"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Data:"})," ",e.jsx(n.code,{children:"test/storybook/docs/Testing/Decorators/coverage-data.json"})," (see ",e.jsx(n.code,{children:"COVERAGE_DATA"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-test-directory",children:"Component Test Directory"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All component tests are located in ",e.jsx(n.code,{children:"test/wdio"}),"."]}),`
`,e.jsx(n.li,{children:"This is the dedicated directory for isolated component-level tests."}),`
`]}),`
`,e.jsx(n.h2,{id:"adding-new-components-and-tests",children:"Adding New Components and Tests"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When adding new component files in ",e.jsx(n.code,{children:"test/wdio"}),", place them under a folder named after the decorator being tested.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"test/wdio/event"})," for components testing the ",e.jsx(n.code,{children:"@Event"})," decorator."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Add the corresponding test file under the same folder.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The test file must be named ",e.jsx(n.code,{children:"cmp.test.tsx"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"This organization keeps both components and their tests grouped by decorator."}),`
`,e.jsxs(n.li,{children:["After adding new components, build them before running any tests:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Run: ",e.jsx(n.code,{children:"npm run build"})," in the ",e.jsx(n.code,{children:"test/wdio"})," folder."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"building-new-components-for-tests",children:"Building New Components for Tests"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["After adding new component files in ",e.jsx(n.code,{children:"test/wdio"}),", you must build the components before running any tests."]}),`
`,e.jsxs(n.li,{children:["Use the build script in the ",e.jsx(n.code,{children:"test/wdio"})," folder:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Run: ",e.jsx(n.code,{children:"npm run build"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"running-component-tests",children:"Running Component Tests"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To run the component tests in ",e.jsx(n.code,{children:"test/wdio"}),", use the following command in that folder:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run wdio"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["This will execute all tests named ",e.jsx(n.code,{children:"cmp.test.tsx"})," under the relevant decorator folders."]}),`
`]}),`
`,e.jsx(n.h2,{id:"test-file-naming-and-location-conventions",children:"Test File Naming and Location Conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Tests:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Directory: ",e.jsx(n.code,{children:"test/wdio"})]}),`
`,e.jsxs(n.li,{children:["Component files must have a ",e.jsx(n.code,{children:"-cmp"})," suffix (e.g., ",e.jsx(n.code,{children:"my-feature-cmp.tsx"}),")"]}),`
`,e.jsxs(n.li,{children:["Test files: ",e.jsx(n.code,{children:"cmp.test.tsx"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Core Tests:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Directory: ",e.jsx(n.code,{children:"src/"})]}),`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.code,{children:"core_tests.mdx"})," for subdirectory conventions"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"E2E Tests:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Directory: ",e.jsx(n.code,{children:"test/end-to-end"})]}),`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.code,{children:"e2e_tests.mdx"})," for additional groupings"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"coverage-matrix-workflow",children:"Coverage Matrix Workflow"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Coverage scripts enumerate all decorator permutations and scan for coverage in generated components/tests."}),`
`,e.jsx(n.li,{children:"Missing permutations trigger new component/test generation."}),`
`,e.jsx(n.li,{children:"Matrix and documentation are updated after each iteration."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verification process:"})," Sampling of the matrix will be done manually. (Refer to ",e.jsx(n.code,{children:"verification.mdx"})," and ",e.jsx(n.code,{children:"verify-matrix.js"})," for guidance.)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"This file should be updated with any new conventions, paths, or project-specific details as the coverage matrix workflow evolves."})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
