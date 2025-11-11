import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Bpjpk8ZK.js";import{M as o}from"./blocks-BLFg5S-i.js";import"./iframe-DWOLDdAi.js";import"./preload-helper-D9Z9MdNV.js";import"./index-0Ea0Bo0A.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Testing/Framework/Coverage Matrix/Generation",tags:["ai","coverage","stable"]}),`
`,e.jsx(n.h1,{id:"matrix-generation-process",children:"Matrix Generation Process"}),`
`,e.jsxs(n.p,{children:["This document provides a concise, actionable guide for generating and maintaining the coverage matrix for Stencil decorators, with a focus on ",e.jsx(n.code,{children:"@Component"}),". It captures the rules we enforce, the standardized assets we use, the generator behavior, and the end-to-end workflow using the ",e.jsx(n.code,{children:".ai"})," scripts."]}),`
`,e.jsx(n.h2,{id:"canonical-rules",children:"Canonical Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shadow/scoped exclusivity: ",e.jsx(n.code,{children:"shadow: true"})," and ",e.jsx(n.code,{children:"scoped: true"})," cannot both be true. Such permutations are invalid and excluded from enumeration and coverage."]}),`
`,e.jsxs(n.li,{children:["Style exclusivity: At most one of ",e.jsx(n.code,{children:"styleUrl"}),", ",e.jsx(n.code,{children:"styleUrls"}),", or ",e.jsx(n.code,{children:"styles"})," may be set per component. Files that set more than one are skipped by coverage and must be fixed."]}),`
`,e.jsxs(n.li,{children:["One file per unique permutation: Exactly one ",e.jsx(n.code,{children:".tsx"})," component per unique permutation under ",e.jsx(n.code,{children:"test/wdio/component-decorator/**"}),"."]}),`
`,e.jsxs(n.li,{children:["Naming conventions: Prefer ",e.jsx(n.code,{children:"cmp-*"})," (or ",e.jsx(n.code,{children:"component-*"}),") with descriptive suffixes that reflect options. Place generated files under ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Options order used by coverage: ",e.jsx(n.code,{children:"[shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles]"}),"."]}),`
`,e.jsx(n.h2,{id:"standardized-assetsdefaults",children:"Standardized Assets/Defaults"}),`
`,e.jsx(n.p,{children:"To keep the matrix predictable and easy to audit, the generator uses canonical assets:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleUrl"}),": ",e.jsx(n.code,{children:"'matrix-gen.css'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleUrls"}),": ",e.jsx(n.code,{children:"['matrix-gen.css', 'matrix-alt.css']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styles"}),": ",e.jsx(n.code,{children:"':host{display:block}'"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["These CSS files live in ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/"})," and are shared by all generated components. Legacy examples under ",e.jsx(n.code,{children:"test/wdio/component-decorator/styles/**"})," are retained; do not modify them."]}),`
`,e.jsx(n.h2,{id:"generator-behavior",children:"Generator Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Script: ",e.jsx(n.code,{children:"Testing/Decorators/Component/generate-components.js"})]}),`
`,e.jsxs(n.li,{children:["Emission folder: ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/"})]}),`
`,e.jsxs(n.li,{children:["Filename prefix: ",e.jsx(n.code,{children:"cmp-"})]}),`
`,e.jsxs(n.li,{children:["Imports: ",e.jsx(n.code,{children:"import { Component, h } from '@stencil/core'"})]}),`
`,e.jsx(n.li,{children:"Enforcement: emits exactly one file per missing permutation, honoring the rules above."}),`
`]}),`
`,e.jsx(n.h2,{id:"end-to-end-workflow-ai-scripts",children:"End-to-End Workflow (.ai scripts)"}),`
`,e.jsxs(n.p,{children:["From ",e.jsx(n.code,{children:"test/storybook/docs/.ai/testing"}),":"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Compute coverage and write JSON artifacts"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run refresh-coverage-matrix"})," → updates per-decorator coverage data including ",e.jsx(n.code,{children:"Testing/Decorators/Component/coverage-data.json"}),"."]}),`
`,e.jsxs(n.li,{children:["Shortcut: ",e.jsx(n.code,{children:"npm run coverage-loop"})," runs steps 1–3 in one go."]}),`
`]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Generate any missing ",e.jsx(n.code,{children:"@Component"})," permutations"]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run component:generate-components"})," → creates components under ",e.jsx(n.code,{children:"matrix/"})," as needed."]}),`
`]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Re-run coverage and verify 100%"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run refresh-coverage-matrix"})," → expect ",e.jsx(n.code,{children:"covered === total"})," for ",e.jsx(n.code,{children:"Component/coverage-data.json"}),"."]}),`
`]}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Build WDIO components"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run build-wdio-components"})," → builds ",e.jsx(n.code,{children:"test/wdio"})," using the repository scripts."]}),`
`]}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"If the build surfaces compiler errors (e.g., mutually exclusive decorator properties), fix the offending components or update the coverage rules, then rebuild until clean"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Re-verify coverage remains at 100%"}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run refresh-coverage-matrix"})," → confirm parity still holds after fixes."]}),`
`]}),`
`,e.jsxs(n.ol,{start:"7",children:[`
`,e.jsx(n.li,{children:"Next phase: generate tests for the matrix components"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.a,{href:"?path=/docs/testing-framework-tests-component-tests--docs",children:"Component Tests"}),". Run tests with ",e.jsx(n.code,{children:"npm run run-component-tests"})," or target a spec: ",e.jsx(n.code,{children:"npm run run-component-tests:spec -- ./component-decorator/**/*.test.tsx"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"verification-and-guardrails",children:"Verification and Guardrails"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Coverage target: 100% across valid permutations (excludes ",e.jsx(n.code,{children:"shadow:true + scoped:true"}),")."]}),`
`,e.jsxs(n.li,{children:["File count parity: The total ",e.jsx(n.code,{children:".tsx"})," files under ",e.jsx(n.code,{children:"test/wdio/component-decorator/**"})," must equal the ",e.jsx(n.code,{children:"covered"})," count recorded in ",e.jsx(n.code,{children:"Component/coverage-data.json"}),"."]}),`
`,e.jsxs(n.li,{children:["Style exclusivity audit: If coverage drops unexpectedly, search for components that set multiple of ",e.jsx(n.code,{children:"styleUrl|styleUrls|styles"})," and fix them."]}),`
`]}),`
`,e.jsx(n.h2,{id:"portability-notes",children:"Portability Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The generation/coverage logic operates purely on source files and JSON outputs, with no project-specific build assumptions beyond paths noted here."}),`
`,e.jsxs(n.li,{children:["CSS assets are co-located in ",e.jsx(n.code,{children:"matrix/"})," and referenced with relative paths, ensuring components remain portable within the repo."]}),`
`,e.jsxs(n.li,{children:["Scripts are invoked from ",e.jsx(n.code,{children:".ai/testing"})," and use relative path traversal to address both the Storybook docs and WDIO projects."]}),`
`]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Missing CSS during WDIO build: ensure ",e.jsx(n.code,{children:"matrix-gen.css"})," and ",e.jsx(n.code,{children:"matrix-alt.css"})," exist under ",e.jsx(n.code,{children:"matrix/"})," (they are created/maintained in this repo)."]}),`
`,e.jsxs(n.li,{children:["Invalid permutations in repo: delete or fix any file that sets ",e.jsx(n.code,{children:"shadow:true"})," with ",e.jsx(n.code,{children:"scoped:true"}),", or multiple style props."]}),`
`,e.jsxs(n.li,{children:["Duplicate permutations: if two files implement the same permutation, delete/rename so only one remains under ",e.jsx(n.code,{children:"component-decorator/**"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Best practices and lessons from previous cycles are reflected here. For verification specifics, see ",e.jsx(n.code,{children:"coverage-matrix/verification.mdx"}),". For status details and examples, see ",e.jsx(n.code,{children:"decorators/component.mdx"}),"."]})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
