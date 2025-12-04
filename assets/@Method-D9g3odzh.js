import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-C9JfSZFR.js";import{M as v}from"./blocks-D-NAOpI1.js";import{o as c}from"./test-coverage-BvLazDkF.js";import{r as y}from"./iframe-sQV3dP9n.js";import{G as C,R as b}from"./GeneratedComponentsTable-C_MN9VcQ.js";import{T as f}from"./TestCasesTable-6XFIDRgK.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BgekLC3r.js";const w="@Method",T={returns:["void","value","promise"],async:["✓","✗"],args:["none","one"]},S=[],I=[{name:"void",when:{returns:"void"}},{name:"value",when:{returns:"value"}},{name:"promise",when:{returns:"promise"}}],D={naming:{prefix:"method",includeOptions:["returns","async","args"]}},O={decorator:w,options:T,exclusiveGroups:S,modes:I,emit:D},B={covered:8,total:8,percent:"100.0"},k=[{options:["void","✓","none"],count:1,files:["void/method-void-async-true-args-none.tsx"]},{options:["void","✓","one"],count:1,files:["void/method-void-async-true-args-one.tsx"]},{options:["value","✓","none"],count:1,files:["value/method-value-async-true-args-none.tsx"]},{options:["value","✓","one"],count:1,files:["value/method-value-async-true-args-one.tsx"]},{options:["promise","✗","none"],count:1,files:["promise/method-promise-async-false-args-none.tsx"]},{options:["promise","✗","one"],count:1,files:["promise/method-promise-async-false-args-one.tsx"]},{options:["promise","✓","none"],count:1,files:["promise/method-promise-async-true-args-none.tsx"]},{options:["promise","✓","one"],count:1,files:["promise/method-promise-async-true-args-one.tsx"]}],a={coverage:B,coveredPermutations:k},R=()=>{const o=c.testCaseStatus||{},t=Object.values(o),i=t.filter(d=>d.implemented).length,s=t.length||3,n=s>0?Math.round(i/s*100):0,r=t.reduce((d,h)=>d+(h.testCount||0),0);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",marginBottom:"32px"},children:[e.jsxs("div",{style:{background:"#fff",padding:"20px",borderRadius:"8px",border:"2px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px"},children:"Test Cases Implemented"}),e.jsxs("div",{style:{fontSize:"36px",fontWeight:"700",color:"#111827",lineHeight:"1",marginBottom:"6px"},children:[i,e.jsxs("span",{style:{color:"#d1d5db"},children:["/",s]})]}),e.jsxs("div",{style:{fontSize:"13px",color:"#6b7280"},children:[n,"% complete"]})]}),e.jsxs("div",{style:{background:"#fff",padding:"20px",borderRadius:"8px",border:"2px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px"},children:"Total Tests"}),e.jsx("div",{style:{fontSize:"36px",fontWeight:"700",color:"#111827",lineHeight:"1",marginBottom:"6px"},children:r}),e.jsxs("div",{style:{fontSize:"13px",color:"#6b7280",borderTop:"1px solid #e5e7eb",paddingTop:"8px",marginTop:"8px"},children:["📅 Last run: ",c.lastRunFormatted]})]})]})},E=()=>{const o=c.testCaseStatus||{},i=Object.keys(o).map(s=>parseInt(s)).sort((s,n)=>s-n).map(s=>{const n=o[s],r={1:"Promise methods expose public API and update DOM after resolution across different async configurations and argument patterns.",2:"Value-returning methods provide immediate results and update component state synchronously.",3:"Void methods trigger side effects without return values, updating internal state via async lifecycle.",4:"Method inheritance basics - methods inherited from base classes, super() calls, method override, and method composition.",5:"Methods with state management - methods that update component state and trigger re-renders.",6:"Methods returning component instances - methods that return component instances for testing/debugging.",7:"Methods with DOM/slot interaction - methods that interact with slot elements (assignedElements, assignedNodes).",8:"Methods with event emission - methods that emit events.",9:"Methods with dynamic imports - methods that use dynamic imports.",10:"Methods with focus/blur handling - methods that handle focus/blur events.",11:"Methods in props/state inheritance - methods that update inherited props and state.",12:"Methods in mixin inheritance - methods in mixin-based inheritance scenarios.",13:"Methods in external component inheritance - methods in external component inheritance.",14:"Methods in component inheritance - methods in component-to-component inheritance.",15:"Methods in abstract class inheritance - methods in abstract class inheritance."};return{id:s,implemented:n.implemented,desc:r[s]||`Test Case #${s}`,types:e.jsxs(e.Fragment,{children:["Components: ",n.componentCount||0,e.jsx("br",{}),e.jsxs("small",{children:["Tests: ",n.testCount||0]})]}),tested:n.testCount||0,total:n.componentCount||0,section:n.implemented?"implemented":"missing",testCount:n.testCount||0}});return e.jsx(f,{rows:i,previewCount:15})},P=()=>{const o=y.useMemo(()=>{const i=c.items||[],s=new Map(i.map(n=>[n.optionsKey,n]));return(a.coveredPermutations||[]).map((n,r)=>{const[d,h,x]=n.options||[],u=(n.options||[]).join("|"),l=s.get(u)||{},j=Array.isArray(l.caseIds)?[...l.caseIds].sort((g,M)=>g-M):[];return{index:r,returns:d,async:h,args:x,caseNumbers:j}})},[]),t=[{key:"returns",label:"Returns",width:"25%"},{key:"async",label:"Async",width:"20%"},{key:"args",label:"Args",width:"20%"},{key:"testedBy",label:"Tested By",width:"35%"}];return e.jsx(C,{rows:o,columns:t,previewCount:3})},A=()=>{const o=c.testCaseStatus||{},i=Object.keys(o).map(s=>parseInt(s)).sort((s,n)=>s-n).filter(s=>!o[s].implemented).map(s=>({id:s,desc:`Test Case #${s} - Not yet implemented`}));return i.length===0?null:e.jsx("div",{children:i.map(({id:s,desc:n})=>e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsxs("strong",{children:["Test Case #",s," TODO"]}),": ",n]},s))})};function m(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Testing/Decorators/@Method"}),`
`,e.jsx(t.h1,{id:"method-decorator",children:"@Method Decorator"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"@Method"})," decorator exposes public instance methods on a Stencil component. This page documents the test coverage, patterns, generated components, and implementation status."]}),`
`,e.jsx(t.h2,{id:"decorator-properties",children:"Decorator Properties"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"returns: void | value | promise"}),`
`,e.jsx(t.li,{children:"async: marks the method async (affects return type when returning a promise)"}),`
`,e.jsx(t.li,{children:"args: none | one"}),`
`]}),`
`,e.jsx(t.h2,{id:"rules-at-a-glance",children:"Rules (at a glance)"}),`
`,e.jsx(b,{rules:O,sourcePath:"./data/rules.json",modeLabel:"Return kind"}),`
`,e.jsx(t.h2,{id:"test-cases",children:"Test Cases"}),`
`,e.jsxs(t.p,{children:["Test cases are organized by ",e.jsx(t.strong,{children:"return type"})," and ",e.jsx(t.strong,{children:"behavioral patterns"})," - from promise-returning methods to void methods, and from basic method calls to inheritance scenarios. ",e.jsx(t.code,{children:"@Method"})," tests are located throughout the ",e.jsx("code",{children:"test/wdio"})," directory, with the core generated components in ",e.jsx("code",{children:"test/wdio/method"})," and additional real-world scenarios in other test directories."]}),`
`,`
`,e.jsx(R,{}),`
`,`
`,e.jsx(E,{}),`
`,e.jsx(t.h2,{id:"generated-components",children:"Generated Components"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Generated Components:"})," ",a.coverage.covered," of ",a.coverage.total,` generated (
`,e.jsxs("strong",{children:[a.coverage.percent,"%"]}),")"]})}),`
`,e.jsx("p",{style:{marginTop:8},children:e.jsxs(t.p,{children:[`This section lists the generated components we build to stress the compiler. Each row is one component with a
unique combination of decorator options (`,e.jsx("code",{children:"returns"})," × ",e.jsx("code",{children:"async"})," × ",e.jsx("code",{children:"args"}),`). If a combo fails to compile,
we capture that as a rule in `,e.jsx("code",{children:"rules.json"}),`, update the list, and regenerate. The "Tested By" column reflects which
high‑level test cases cover each component.`]})}),`
`,`
`,e.jsx(P,{}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"test-categories",children:"Test Categories"}),`
`,e.jsxs(t.h3,{id:"-basic-method-types-1-3--3-test-cases",children:[e.jsx(t.strong,{children:"🟡 Basic Method Types (1-3)"})," — 3 test cases"]}),`
`,e.jsx(t.p,{children:"Core method return types covering promise, value, and void methods with various async and argument configurations."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #1 - Promise Methods"}),": Promise-returning methods that expose public API and update DOM after resolution, covering async configurations and argument patterns. Tests located in ",e.jsx(t.code,{children:"test/wdio/method/tests.tsx"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #2 - Value Methods"}),": Value-returning methods that provide immediate results and update component state synchronously. Tests located in ",e.jsx(t.code,{children:"test/wdio/method/tests.tsx"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #3 - Void Methods"}),": Void methods that trigger side effects without return values, updating internal state via async lifecycle. Tests located in ",e.jsx(t.code,{children:"test/wdio/method/tests.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-method-inheritance-4--1-test-case",children:[e.jsx(t.strong,{children:"🟡 Method Inheritance (4)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods in inheritance scenarios, including base class methods, super() calls, method override, and composition."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #4 - Method Inheritance Basics"}),": Tests for @Method decorator inheritance, super() calls, method override, and method composition. Tests located in ",e.jsx(t.code,{children:"test/wdio/ts-target/extends-methods/cmp.test.ts"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-state-management-methods-5--1-test-case",children:[e.jsx(t.strong,{children:"🟡 State Management Methods (5)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods that update component state and trigger re-renders."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #5 - Methods with State Management"}),": Methods that update component state and trigger re-renders. Components: ",e.jsx(t.code,{children:"attribute-boolean-root"}),", ",e.jsx(t.code,{children:"computed-properties-state-decorator"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/attribute-boolean/cmp.test.tsx"})," and ",e.jsx(t.code,{children:"test/wdio/computed-properties-state-decorator/cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-instance-return-methods-6--1-test-case",children:[e.jsx(t.strong,{children:"🟡 Instance Return Methods (6)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods that return component instances for testing or debugging purposes."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #6 - Methods Returning Component Instances"}),": Methods that return component instances for testing/debugging. Component: ",e.jsx(t.code,{children:"attribute-complex"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/attribute-complex/cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-domslot-interaction-methods-7--1-test-case",children:[e.jsx(t.strong,{children:"🟡 DOM/Slot Interaction Methods (7)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods that interact with DOM elements, particularly slot elements."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #7 - Methods with DOM/Slot Interaction"}),": Methods that interact with slot elements (assignedElements, assignedNodes). Component: ",e.jsx(t.code,{children:"scoped-slot-assigned-methods"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/scoped-slot-assigned-methods/cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-event-emission-methods-8--1-test-case",children:[e.jsx(t.strong,{children:"🟡 Event Emission Methods (8)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods that emit events."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #8 - Methods with Event Emission"}),": Methods that emit events. Component: ",e.jsx(t.code,{children:"esm-import"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/esm-import/cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-dynamic-import-methods-9--1-test-case",children:[e.jsx(t.strong,{children:"🟡 Dynamic Import Methods (9)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods that use dynamic imports."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #9 - Methods with Dynamic Imports"}),": Methods that use dynamic imports. Component: ",e.jsx(t.code,{children:"dynamic-import"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/dynamic-imports/cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-focusblur-handling-methods-10--1-test-case",children:[e.jsx(t.strong,{children:"🟡 Focus/Blur Handling Methods (10)"})," — 1 test case"]}),`
`,e.jsx(t.p,{children:"Methods that handle focus and blur events."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #10 - Methods with Focus/Blur Handling"}),": Methods that handle focus/blur events. Component: ",e.jsx(t.code,{children:"ion-radio"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/radio-group-blur/cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"-inheritance-scenarios-11-15--5-test-cases",children:[e.jsx(t.strong,{children:"🟡 Inheritance Scenarios (11-15)"})," — 5 test cases"]}),`
`,e.jsx(t.p,{children:"Methods in various inheritance scenarios, including props/state inheritance, mixin inheritance, external component inheritance, component inheritance, and abstract class inheritance."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #11 - Methods in Props/State Inheritance"}),": Methods that update inherited props and state. Component: ",e.jsx(t.code,{children:"extends-props-state"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/ts-target/extends-props-state/cmp.test.ts"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #12 - Methods in Mixin Inheritance"}),": Methods in mixin-based inheritance scenarios. Components: ",e.jsx(t.code,{children:"extends-mixin-cmp"}),", ",e.jsx(t.code,{children:"mixin-a"}),", ",e.jsx(t.code,{children:"mixin-b"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/ts-target/extends-mixin/cmp.test.ts"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #13 - Methods in External Component Inheritance"}),": Methods in external component inheritance. Components: ",e.jsx(t.code,{children:"extends-external"}),", ",e.jsx(t.code,{children:"sibling-extended-base"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/ts-target/extends-external/cmp.test.ts"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #14 - Methods in Component Inheritance"}),": Methods in component-to-component inheritance. Components: ",e.jsx(t.code,{children:"extends-cmp-cmp"}),", ",e.jsx(t.code,{children:"extended-cmp"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/ts-target/extends-cmp/cmp.test.ts"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test Case #15 - Methods in Abstract Class Inheritance"}),": Methods in abstract class inheritance. Components: ",e.jsx(t.code,{children:"extends-abstract"}),", ",e.jsx(t.code,{children:"mixin-parent"}),". Tests located in ",e.jsx(t.code,{children:"test/wdio/ts-target/extends-abstract/cmp.test.ts"}),"."]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,`
`,(()=>{const i=c.testCaseStatus||{},s=Object.keys(i).map(r=>parseInt(r)).sort((r,d)=>r-d);return s.filter(r=>i[r].implemented).length===s.length?null:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"📋 TODO - Remaining Test Cases"}),e.jsx(A,{})]})})(),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"component-grouping",children:"Component Grouping"}),`
`,e.jsxs(t.p,{children:["Generated components are organized by return type under ",e.jsx(t.code,{children:"test/wdio/method/components/"}),":"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"void/"})," — void-returning methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value/"})," — value-returning methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"promise/"})," — promise-returning methods"]}),`
`]}),`
`,e.jsxs(t.p,{children:["Additional components with ",e.jsx(t.code,{children:"@Method"})," decorators are located throughout the ",e.jsx(t.code,{children:"test/wdio"})," directory:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/attribute-boolean/"})," — State management methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/computed-properties-state-decorator/"})," — Computed state methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/attribute-complex/"})," — Instance return methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/scoped-slot-assigned-methods/"})," — Slot interaction methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/esm-import/"})," — Event emission methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/dynamic-imports/"})," — Dynamic import methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/radio-group-blur/"})," — Focus/blur handling methods"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"test/wdio/ts-target/extends-*/"})," — Inheritance scenario methods"]}),`
`]})]})}function _(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(m,{...o})}):m(o)}export{R as MethodCoverageSummary,P as MethodGeneratedComponents,A as MethodTODOSection,E as MethodTestCasesTable,_ as default};
