import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-LEn82Xdr.js";import{M as c}from"./blocks-Be46xOuq.js";import"./iframe-CUSS-ND5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CqKsMeIy.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Testing/Decorators/@Component Coverage Strategy",tags:["ai","coverage","stable"]}),`
`,e.jsx(s.h1,{id:"component-decorator-coverage-strategy",children:"@Component Decorator Coverage Strategy"}),`
`,e.jsxs(s.p,{children:["This document outlines the approach to achieve and maintain 100% coverage for valid ",e.jsx(s.code,{children:"@Component"})," permutations as defined by ",e.jsx(s.code,{children:"Testing/Decorators/Component/coverage.js"}),"."]}),`
`,e.jsx(s.h2,{id:"source-of-truth",children:"Source of Truth"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Coverage data: ",e.jsx(s.code,{children:"Testing/Decorators/Component/coverage-data.json"})]}),`
`,e.jsxs(s.li,{children:["Script: ",e.jsx(s.code,{children:"Testing/Decorators/Component/coverage.js"})]}),`
`,e.jsxs(s.li,{children:["Matrix location: ",e.jsx(s.code,{children:"test/wdio/component-decorator/matrix/"})]}),`
`]}),`
`,e.jsx(s.h2,{id:"options--valid-states",children:"Options & Valid States"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Options order: ",e.jsx(s.code,{children:"[shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles]"})]}),`
`,e.jsxs(s.li,{children:["Symbols: ",e.jsx(s.code,{children:"✓"})," (true/set), ",e.jsx(s.code,{children:"✗"})," (false), ",e.jsx(s.code,{children:"-"})," (absent)"]}),`
`,e.jsxs(s.li,{children:["Style exclusivity: At most one of ",e.jsx(s.code,{children:"styleUrl"}),", ",e.jsx(s.code,{children:"styleUrls"}),", or ",e.jsx(s.code,{children:"styles"})," may be set per component."]}),`
`]}),`
`,e.jsx(s.p,{children:"Valid style states:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"[✓, -, -]"}),"  → ",e.jsx(s.code,{children:"styleUrl"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"[-, ✓, -]"}),"  → ",e.jsx(s.code,{children:"styleUrls"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"[-, -, ✓]"}),"  → ",e.jsx(s.code,{children:"styles"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"[-, -, -]"}),"  → none"]}),`
`]}),`
`,e.jsx(s.h2,{id:"rules",children:"Rules"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Shadow and Scoped are mutually exclusive; do not set both to true."}),`
`,e.jsx(s.li,{children:"Exactly one file per unique permutation."}),`
`,e.jsxs(s.li,{children:["Names: ",e.jsx(s.code,{children:"cmp-*"})," or ",e.jsx(s.code,{children:"component-*"}),", placed in ",e.jsx(s.code,{children:"matrix/"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"standardized-assets",children:"Standardized Assets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"styleUrl"}),": ",e.jsx(s.code,{children:"'matrix-gen.css'"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"styleUrls"}),": ",e.jsx(s.code,{children:"['matrix-gen.css', 'matrix-alt.css']"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"styles"}),": ",e.jsx(s.code,{children:"':host{display:block}'"})]}),`
`]}),`
`,e.jsx(s.h2,{id:"workflow-ai-scripts",children:"Workflow (.ai scripts)"}),`
`,e.jsxs(s.p,{children:["From ",e.jsx(s.code,{children:"test/storybook/docs/.ai/testing"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npm run refresh-coverage-matrix"})," → refresh coverage JSON"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npm run component:generate-components"})," → fill gaps under ",e.jsx(s.code,{children:"matrix/"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npm run refresh-coverage-matrix"})," → confirm 100%"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npm run build-wdio-components"})," → build WDIO project"]}),`
`]}),`
`,e.jsx(s.h2,{id:"status-2025-09-08",children:"Status (2025-09-08)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Covered: 192/192 (100.0%)"}),`
`,e.jsxs(s.li,{children:[".tsx count under ",e.jsx(s.code,{children:"test/wdio/component-decorator/**"})," equals covered (192)"]}),`
`,e.jsxs(s.li,{children:["Imports normalized to ",e.jsx(s.code,{children:"import { Component, h } from '@stencil/core'"})]}),`
`,e.jsx(s.li,{children:"Invalid permutations pruned; exclusivity enforced"}),`
`,e.jsxs(s.li,{children:["Generator emits one file per missing permutation with ",e.jsx(s.code,{children:"cmp-"})," prefix"]}),`
`]}),`
`,e.jsx(s.h2,{id:"verification-guardrails",children:"Verification Guardrails"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Parity check: ",e.jsx(s.code,{children:".tsx"})," count must equal ",e.jsx(s.code,{children:"coverage.covered"})]}),`
`,e.jsx(s.li,{children:"No files setting multiple style props"}),`
`,e.jsxs(s.li,{children:["No ",e.jsx(s.code,{children:"shadow:true"})," + ",e.jsx(s.code,{children:"scoped:true"})]}),`
`]}),`
`,e.jsx(s.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["If WDIO build fails due to missing CSS, ensure ",e.jsx(s.code,{children:"matrix-gen.css"})," and ",e.jsx(s.code,{children:"matrix-alt.css"})," exist in ",e.jsx(s.code,{children:"matrix/"}),"."]}),`
`,e.jsx(s.li,{children:"If coverage dips, search for invalid permutations or duplicate files."}),`
`]})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default};
