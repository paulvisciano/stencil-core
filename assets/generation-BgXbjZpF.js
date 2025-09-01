import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-oON1Pjnu.js";import{M as o}from"./blocks-D7qAqVvl.js";import"./iframe-D5Xv28TE.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Ui5v9HiU.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Testing/Coverage Matrix/Generation"}),`
`,e.jsx(n.h1,{id:"matrix-generation-process",children:"Matrix Generation Process"}),`
`,e.jsx(n.p,{children:"This document provides a concise guide for generating the coverage matrix for Stencil decorators. It outlines the iterative process for maintaining comprehensive coverage as the codebase evolves."}),`
`,e.jsx(n.h2,{id:"process-overview",children:"Process Overview"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enumerate Permutations:"})," List all possible decorator permutations and options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scan for Coverage:"})," Identify which permutations are already covered by existing components/tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generate Missing Cases:"})," Create new components/tests for uncovered permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Update Matrix:"})," Revise the matrix and documentation after each iteration."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Best practices and lessons learned from previous cycles are captured here. For verification steps, see ",e.jsx(n.code,{children:"verification.mdx"}),"."]})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{m as default};
