import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DerBrFPi.js";import{M as r}from"./blocks-D_de16sk.js";import"./iframe-Dx--6jvh.js";import"./preload-helper-D9Z9MdNV.js";import"./index-6izr7o5Y.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Framework/Tests/E2E Tests",tags:["pending-review"]}),`
`,e.jsx(s.h1,{id:"e2e-tests",children:"E2E Tests"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsxs(s.p,{children:["This document covers all ",e.jsx(s.strong,{children:"end-to-end (E2E)"})," tests for Stencil, which are located under the ",e.jsx(s.code,{children:"test"})," folder. These tests validate Stencil from the outside by importing it as a dependency, simulating real-world usage, and testing E2E scenarios and feature behaviors. They are loosely coupled and focus on user-facing features, build outputs, and application-level scenarios."]}),`
`,e.jsxs(s.h2,{id:"end-to-end-tests-testend-to-end",children:["End-to-End Tests (",e.jsx(s.code,{children:"test/end-to-end"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," To test the integration of multiple features and components working together. These tests simulate more complex, real-world scenarios."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Technology:"})," Stencil's built-in ",e.jsx(s.code,{children:"newE2EPage()"})," test utility, which leverages Puppeteer to control a headless browser for simulating user interactions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scope:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Test how different features interact."}),`
`,e.jsx(s.li,{children:"Simulate user flows and interactions between components."}),`
`,e.jsx(s.li,{children:"Verify that features that work in isolation do not have negative side effects when combined."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Benefits:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Confidence:"})," Ensures that the framework is stable when used in complex applications."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Real-World Validation:"})," Tests scenarios that are closer to how developers will actually use Stencil."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"other-test-groupings",children:"Other Test Groupings"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Feature/Functionality-Specific Tests:"})," Focused on specific Stencil features or outputs (e.g., ",e.jsx(s.code,{children:"docs-json"}),", ",e.jsx(s.code,{children:"docs-readme"}),", ",e.jsx(s.code,{children:"copy-task"}),", ",e.jsx(s.code,{children:"style-modes"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Sample Apps & Demos:"})," Example Stencil apps and usage demos (e.g., ",e.jsx(s.code,{children:"hello-world"}),", ",e.jsx(s.code,{children:"todo-app"}),", ",e.jsx(s.code,{children:"ionic-app"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Infrastructure & Utilities:"})," Test/build support scripts and runners (e.g., ",e.jsx(s.code,{children:".scripts"}),", ",e.jsx(s.code,{children:"jest-spec-runner"}),")."]}),`
`]}),`
`,e.jsx(s.h2,{id:"running-tests",children:"Running Tests"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"End-to-End:"})," To run all E2E tests, use ",e.jsx(s.code,{children:"npm test -- --e2e"}),". To run a specific file, use ",e.jsx(s.code,{children:"npm test -- --e2e path/to/your/test.e2e.ts"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Feature/Performance:"})," Refer to the respective folder's README or config files for instructions."]}),`
`]})]})}function u(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{u as default};
