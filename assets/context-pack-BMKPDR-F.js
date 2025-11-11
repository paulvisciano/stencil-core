import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CIFNtjGQ.js";import{M as o}from"./blocks-BNjj_hWA.js";import"./iframe-BkEE5etF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-xatiZYQD.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Testing/Framework/Context Pack",tags:["dev-only","pending-review"]}),`
`,e.jsx(n.h1,{id:"genai-testing-context-pack",children:"GenAI Testing Context Pack"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#d1fae5",color:"#065f46",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"Portable, context-first workflow"}),`
`,e.jsx(n.p,{children:"A portable, framework-agnostic package of prompts, policies, scripts, and docs that enables a GenAI-powered testing loop in any repository. Invest in the context; generation quality follows."}),`
`,e.jsx(n.h2,{id:"what-it-contains",children:"What it contains"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Strategy and audit docs: ",e.jsx(n.code,{children:"overview.mdx"}),", ",e.jsx(n.code,{children:"audit.mdx"})]}),`
`,e.jsxs(n.li,{children:["Conventions and prompts: ",e.jsx(n.code,{children:"AGENT_KEYWORDS.md"}),", ",e.jsx(n.code,{children:"AGENT_PROTOCOL.md"})]}),`
`,e.jsxs(n.li,{children:["Project glue: ",e.jsx(n.code,{children:"project-config.mdx"}),", script shortcuts in ",e.jsx(n.code,{children:"package.json"})]}),`
`,e.jsxs(n.li,{children:["Coverage matrix guides: ",e.jsx(n.code,{children:"coverage-matrix/*"})]}),`
`,e.jsxs(n.li,{children:["Decorator playbooks (example): ",e.jsx(n.code,{children:"decorators/component.mdx"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"why-context-first",children:"Why context-first"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Matrices + scripts are the source of truth. AI enumerates missing permutations, generates components, then tests."}),`
`,e.jsx(n.li,{children:"Strong context yields reliable generation as models improve (GPT-5 > GPT-4.1 results observed here)."}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-import-into-a-new-repo",children:"How to import into a new repo"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Copy the ",e.jsx(n.code,{children:".ai/testing"})," folder into the target repo (recommended path: ",e.jsx(n.code,{children:"test/storybook/docs/.ai/testing"}),", adjust paths if needed)."]}),`
`,e.jsxs(n.li,{children:["Open ",e.jsx(n.code,{children:"project-config.mdx"})," and update:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Test tech (unit/component/e2e), runners, and script paths"}),`
`,e.jsxs(n.li,{children:["Component directory root (e.g., ",e.jsx(n.code,{children:"test/wdio"}),")"]}),`
`,e.jsx(n.li,{children:"Coverage script/data locations"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Adjust ",e.jsx(n.code,{children:".ai/testing/package.json"})," shortcuts to ",e.jsx(n.code,{children:"cd"})," into the correct local folders."]}),`
`,e.jsxs(n.li,{children:["Run coverage from ",e.jsx(n.code,{children:".ai/testing"})," to discover gaps:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All decorators: ",e.jsx(n.code,{children:"npm run refresh-coverage-matrix"})]}),`
`,e.jsxs(n.li,{children:["Shortcut (refresh → generate → refresh): ",e.jsx(n.code,{children:"npm run coverage-loop"})]}),`
`,e.jsxs(n.li,{children:["Specific decorator (examples): ",e.jsx(n.code,{children:"npm run coverage-prop"}),", ",e.jsx(n.code,{children:"npm run coverage-state"}),", ",e.jsx(n.code,{children:"npm run coverage-listen"}),", ",e.jsx(n.code,{children:"npm run coverage-event"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Verify matrices (scripted):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Per-decorator: ",e.jsx(n.code,{children:"npm run <decorator>:verify-matrix"})," (enforces parity, grouping, exclusivity; writes overlays)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Build and run:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Build components: ",e.jsx(n.code,{children:"npm run build-wdio-components"})]}),`
`,e.jsxs(n.li,{children:["Run tests: ",e.jsx(n.code,{children:"npm run run-component-tests"})]}),`
`,e.jsxs(n.li,{children:["Targeted run (spec/glob): ",e.jsx(n.code,{children:"npm run run-component-tests:spec -- ./state/**/*.test.tsx"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"minimal-prompt-template",children:"Minimal prompt template"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Using the Context Pack and ",e.jsx(n.code,{children:"project-config.mdx"}),", read the coverage data, list ",e.jsx(n.code,{children:"missingPermutations"}),", generate exactly one component per missing key following naming/location rules, rebuild, and rerun coverage. Then generate WDIO tests for the new components following the documented patterns."]}),`
`]}),`
`,e.jsx(n.h2,{id:"validation-checklist",children:"Validation checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["One style prop max per component: exactly one of ",e.jsx(n.code,{children:"styleUrl | styleUrls | styles"})," (or none)"]}),`
`,e.jsx(n.li,{children:"Filename matches tag; tag rendered in component; location under the correct matrix folder"}),`
`,e.jsxs(n.li,{children:["After each batch:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coverage.covered"})," increases by the number of new files"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".tsx"})," file count under the decorator folder equals ",e.jsx(n.code,{children:"covered"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Verification is scripted: run ",e.jsx(n.code,{children:"npm run <decorator>:verify-matrix"})," to enforce parity/grouping/exclusivity and write overlays; manual spot checks are optional"]}),`
`]}),`
`,e.jsx(n.h2,{id:"crowdsourcing-workflow",children:"Crowdsourcing workflow"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Contributors run the loop, add missing permutations/tests, and open PRs"}),`
`,e.jsxs(n.li,{children:["Keep changes minimal and convention-aligned; document additions in ",e.jsx(n.code,{children:"audit.mdx"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"versioning-and-drift",children:"Versioning and drift"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Keep a ",e.jsx(n.code,{children:"Context Pack"})," version header here; bump when changing conventions or scripts"]}),`
`,e.jsxs(n.li,{children:["Document repo-specific overrides in ",e.jsx(n.code,{children:"project-config.mdx"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"model-policy",children:"Model policy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Generation: GPT-5 (Preview)"}),`
`,e.jsx(n.li,{children:"Documentation: GPT-4.1"}),`
`]}),`
`,e.jsx(n.h2,{id:"related-docs",children:"Related docs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/testing-framework-overview--docs",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/testing-framework-audit--docs",children:"Audit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/testing-framework-coverage-matrix-overview--docs",children:"Coverage Matrix: Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/testing-framework-quickstart--docs",children:"Quickstart: Coverage → Generate → Verify"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/testing-decorators-component--docs",children:"@Component Strategy"})}),`
`,e.jsxs(n.li,{children:["Example Prompts: ",e.jsx(n.code,{children:".ai/testing/AGENT_PROMPTS.md"})]}),`
`]})]})}function x(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};
