import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CIFNtjGQ.js";import{M as o}from"./blocks-BNjj_hWA.js";import"./iframe-BkEE5etF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-xatiZYQD.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Testing/Framework/Project Config",tags:["dev-only","pending-review"]}),`
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
`,e.jsxs(n.li,{children:["Each decorator owns a ",e.jsx(n.code,{children:"Testing/Decorators/<Decorator>/coverage.js"})," script that regenerates compile coverage directly from its ",e.jsx(n.code,{children:"rules.json"}),"."]}),`
`,e.jsxs(n.li,{children:["Coverage output lives beside the script as ",e.jsx(n.code,{children:"<Decorator>/coverage-data.json"}),"; docs and verify guards read from that file."]}),`
`]}),`
`,e.jsx(n.h2,{id:"running-coverage-scripts",children:"Running Coverage Scripts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You can run a coverage script directly for a specific decorator."}),`
`,e.jsxs(n.li,{children:["To run all coverage scripts at once, use ",e.jsx(n.code,{children:"test/storybook/docs/Testing/Decorators/run-all-coverage.js"}),"."]}),`
`,e.jsxs(n.li,{children:["Alternatively, from ",e.jsx(n.code,{children:"test/storybook"}),", run ",e.jsx(n.code,{children:"npm run coverage"})," to execute all coverage scripts."]}),`
`]}),`
`,e.jsx(n.h2,{id:"project-paths-and-coverage-script-config",children:"Project Paths and Coverage Script Config"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Directory Root:"})," ",e.jsx(n.code,{children:"test/wdio"})," (per-decorator verify scripts walk this tree via ",e.jsx(n.code,{children:"_shared/verify-matrix-core.js"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Scripts:"})," ",e.jsx(n.code,{children:"Testing/Decorators/run-all-coverage.js"})," for the aggregate loop, or ",e.jsx(n.code,{children:"Testing/Decorators/<Decorator>/coverage.js"})," for a single decorator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Data:"})," ",e.jsx(n.code,{children:"Testing/Decorators/<Decorator>/coverage-data.json"}),"."]}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verification process:"})," Run ",e.jsx(n.code,{children:"Testing/Decorators/<Decorator>/verify-matrix.js"})," (or the ",e.jsx(n.code,{children:"npm run <decorator>:verify-matrix"})," shortcut) to enforce parity/grouping/exclusivity and rebuild ",e.jsx(n.code,{children:"coverage-overlay.json"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"This file should be updated with any new conventions, paths, or project-specific details as the coverage matrix workflow evolves."})]})}function x(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
