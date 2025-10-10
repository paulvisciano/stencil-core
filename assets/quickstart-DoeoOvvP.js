import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DkM_JNzF.js";import{M as o}from"./blocks-CGqGehBw.js";import"./iframe-DnsNI89h.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DfHBohhK.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Testing/Framework/Quickstart",tags:["ai","coverage","stable"]}),`
`,e.jsx(n.h1,{id:"quickstart-coverage--generate--verify",children:"Quickstart: Coverage → Generate → Verify"}),`
`,e.jsx(n.p,{children:"A concise, repeatable loop to maintain 100% coverage of valid decorator permutations, driven by a single rules file."}),`
`,e.jsx(n.h2,{id:"source-of-truth",children:"Source of truth"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rules JSON (per decorator): e.g., ",e.jsx(n.code,{children:"Testing/Decorators/Component/rules.json"})]}),`
`,e.jsxs(n.li,{children:["Coverage output (per decorator): e.g., ",e.jsx(n.code,{children:"Testing/Decorators/Component/coverage-data.json"})]}),`
`,e.jsxs(n.li,{children:["Generated artifacts (per decorator): e.g., ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/{shadow,scoped,light}/"})]}),`
`]}),`
`,e.jsxs(n.h2,{id:"one-pass-loop-from-aitesting",children:["One-pass loop (from ",e.jsx(n.code,{children:".ai/testing"}),")"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Refresh coverage, generate any missing, refresh again",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run coverage-loop"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Verify matrix integrity (coverage parity, grouping, exclusivity) BEFORE building (for the active decorator)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run component:verify-matrix"})," (use ",e.jsx(n.code,{children:"npm run state:verify-matrix"})," for @State)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Build the WDIO components",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run build-wdio-components"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Run component tests (or target a spec)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm run run-component-tests"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run run-component-tests:spec -- ./<decorator>/**/*.test.tsx"})," (e.g., ",e.jsx(n.code,{children:"./component-decorator/**/*.test.tsx"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-rules-change-or-compiler-errors-occur",children:"When rules change or compiler errors occur"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Preferred (one-liner to sync data and files):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run coverage-loop"})," (refresh → generate → refresh)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Verify early:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run component:verify-matrix"})," (or ",e.jsx(n.code,{children:"npm run state:verify-matrix"}),")"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If the build reports compiler errors after you generate components:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tweak the rules JSON for the active decorator (e.g., ",e.jsx(n.code,{children:"Testing/Decorators/Component/rules.json"}),") to correct the permutation space or exclusivity"]}),`
`,e.jsxs(n.li,{children:["Re-run ",e.jsx(n.code,{children:"npm run coverage-loop"})]}),`
`,e.jsxs(n.li,{children:["Re-run ",e.jsx(n.code,{children:"npm run component:verify-matrix"})]}),`
`,e.jsxs(n.li,{children:["Once the matrix verifies cleanly, build again with ",e.jsx(n.code,{children:"npm run build-wdio-components"})]}),`
`,e.jsx(n.li,{children:"Then move on to tests"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Optional sanity check (prove rule-driven growth):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"VERIFY_PROBE_ENCAPSULATION=1 npm run component:verify-matrix"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"guardrails-enforced",children:"Guardrails enforced"}),`
`,e.jsx(n.p,{children:"For @Component (example):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Exclusivity: exactly one of ",e.jsx(n.code,{children:"styleUrl | styleUrls | styles"})," (or none). Shadow and scoped cannot both be true."]}),`
`,e.jsxs(n.li,{children:["Parity: total ",e.jsx(n.code,{children:".tsx"})," files under the decorator folder must equal ",e.jsx(n.code,{children:"coverage.covered"}),"."]}),`
`,e.jsxs(n.li,{children:["Grouping: files live under ",e.jsx(n.code,{children:"matrix/{shadow|scoped|light}/"})," with parent‑relative CSS paths."]}),`
`]}),`
`,e.jsx(n.p,{children:"For other decorators, use their rules JSON to define validity/exclusivity and apply the same loop."}),`
`,e.jsx(n.h2,{id:"tips",children:"Tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The generator reads coverage JSON (not rules). Always refresh coverage after changing rules."}),`
`,e.jsx(n.li,{children:"The coverage script derives the permutation space directly from the rules JSON."}),`
`]}),`
`,e.jsx(n.p,{children:"This is the fastest path to keep the matrix healthy and at 100%."})]})}function x(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
