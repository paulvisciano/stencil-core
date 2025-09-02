import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-BxMiAmRf.js";import{M as r}from"./blocks-DmHRBODb.js";import"./iframe-C2C1ItUp.js";import"./preload-helper-D9Z9MdNV.js";import"./index-SXJHywsQ.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Framework/Tests/Core Tests",tags:["pending-review"]}),`
`,e.jsx(s.h1,{id:"core-testing-in-the-stencil-project",children:"Core Testing in the Stencil Project"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsxs(s.p,{children:["This document covers all ",e.jsx(s.strong,{children:"core (source/implementation)"})," tests for Stencil, which are located under the ",e.jsx(s.code,{children:"src"})," folder. These tests directly exercise Stencil's source code, validating its core logic, compiler internals, CLI utilities, and system utilities. They are tightly coupled to the implementation and often use internal APIs and mocks."]}),`
`,e.jsx(s.h2,{id:"test-locations--purpose",children:"Test Locations & Purpose"}),`
`,e.jsxs(s.h3,{id:"cli-srcclitest",children:["CLI (",e.jsx(s.code,{children:"src/cli/test/"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit & Integration"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," Test CLI commands, flag parsing, config management, and task execution."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ionic-config.spec.ts"}),": Reading, writing, and updating CLI config files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"parse-flags.spec.ts"}),": CLI flag parsing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"run.spec.ts"}),": Running CLI commands and task execution."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"task-generate.spec.ts"}),": CLI task generation and file creation."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"compiler-srccompilertest",children:["Compiler (",e.jsx(s.code,{children:"src/compiler/*/test/"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit & Integration"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," Test core compiler logic, output targets, build processes, and configuration validation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"output-targets-dist.spec.ts"}),", ",e.jsx(s.code,{children:"output-targets-www.spec.ts"}),", ",e.jsx(s.code,{children:"custom-elements-types.spec.ts"}),": Output generation for different targets."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"prerender-optimize.spec.ts"}),", ",e.jsx(s.code,{children:"prerendered-write-path.spec.ts"}),", ",e.jsx(s.code,{children:"crawl-urls.spec.ts"}),": Prerendering logic and optimizations."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"build-stats.spec.ts"}),", ",e.jsx(s.code,{children:"write-export-maps.spec.ts"}),": Build stats and export map generation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"run-program.spec.ts"}),", ",e.jsx(s.code,{children:"create-watch-program.spec.ts"}),": TypeScript program creation and transpilation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"validate-output-dist.spec.ts"}),", ",e.jsx(s.code,{children:"validate-testing.spec.ts"}),": Config validation for output and testing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"generate-app-types.spec.ts"}),", ",e.jsx(s.code,{children:"generate-component-types.spec.ts"}),", ",e.jsx(s.code,{children:"generate-event-detail-types.spec.ts"}),": Type generation for components and events."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"markdown-overview.spec.ts"}),", ",e.jsx(s.code,{children:"style-docs.spec.ts"}),", ",e.jsx(s.code,{children:"docs-util.spec.ts"}),": Documentation generation and parsing."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"system-utilities-srccompilersystests-srcutilstest-etc",children:["System Utilities (",e.jsx(s.code,{children:"src/compiler/sys/tests/"}),", ",e.jsx(s.code,{children:"src/utils/test/"}),", etc.)"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," System utilities, file system mocks, and helper functions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"in-memory-fs.spec.ts"}),", ",e.jsx(s.code,{children:"stencil-sys.spec.ts"}),", ",e.jsx(s.code,{children:"fetch-module.spec.ts"}),": System and file system utilities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"util.spec.ts"}),", ",e.jsx(s.code,{children:"scope-css.spec.ts"}),", ",e.jsx(s.code,{children:"output-target.spec.ts"}),": Utility and helper functions for CSS, output targets, and general logic."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"runtime-srcruntimetest",children:["Runtime (",e.jsx(s.code,{children:"src/runtime/test/"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit & Integration"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," Runtime behavior, JSX rendering, style encapsulation, and virtual DOM utilities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"jsx.spec.tsx"}),", ",e.jsx(s.code,{children:"style.spec.tsx"}),": Runtime rendering, style encapsulation, and DOM behavior."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"vdom/test/util.spec.ts"}),": Virtual DOM utility tests."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"dev-server-srcdev-servertest",children:["Dev Server (",e.jsx(s.code,{children:"src/dev-server/test/"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," Dev server utilities and SSR data path handling."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dev-server-utils.spec.ts"}),", ",e.jsx(s.code,{children:"util.spec.ts"}),": Dev server and SSR utilities."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"testing-platform-srctestingjestjest-28test",children:["Testing Platform (",e.jsx(s.code,{children:"src/testing/jest/jest-28/test/"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," Jest integration and platform-specific testing helpers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"jest-preprocessor.spec.ts"}),": Jest preprocessor integration tests."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"scripts-scriptsutilstest",children:["Scripts (",e.jsx(s.code,{children:"scripts/utils/test/"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Unit"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Purpose:"})," Build/release script utilities and options parsing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"options.spec.ts"}),", ",e.jsx(s.code,{children:"release-utils.spec.ts"}),": Build/release script and options tests."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"test-types",children:"Test Types"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Unit Tests:"})," Validate individual functions, classes, or modules in isolation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Integration Tests:"})," Test interactions between multiple modules or systems."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Config/Validation Tests:"})," Ensure configuration options and validation logic work as expected."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type Generation Tests:"})," Ensure correct TypeScript type output for Stencil components."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Build/Output Tests:"})," Validate build artifacts and output file correctness."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Runtime/JSX Tests:"})," Test runtime rendering, style encapsulation, and DOM behavior."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:"For more details, see individual test files and folder READMEs."})]})}function a(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default};
