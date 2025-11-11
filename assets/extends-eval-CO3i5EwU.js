import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-CIFNtjGQ.js";import{M as r}from"./blocks-BNjj_hWA.js";import"./iframe-BkEE5etF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-xatiZYQD.js";const d=""+new URL("extends-compiler-error-BAwOuV-h.png",import.meta.url).href;function i(s){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Behavior/Extends/Extends Evaluation",tags:["dev-only","pending-review"]}),`
`,e.jsx(n.h1,{id:"extends-only-phase-1-evaluation",children:"Extends-Only Phase 1 Evaluation"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Historical background: see ",e.jsx(n.a,{href:"?path=/docs/testing-behavior-extends-historical-controller-context--docs",children:"Historical @Controller Context"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["PR enabling component inheritance: ",e.jsx("a",{href:"https://github.com/stenciljs/core/pull/6362",target:"_blank",rel:"noopener noreferrer",children:"PR #6362"})]}),`
`,e.jsxs(n.li,{children:["Released in Stencil v4.37.0: ",e.jsx("a",{href:"https://github.com/stenciljs/core/releases/tag/v4.37.0",target:"_blank",rel:"noopener noreferrer",children:"Stencil v4.37.0 Release"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"minimum-required-version",children:"Minimum Required Version"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Stencil >= v4.37.0 for ",e.jsx(n.code,{children:"extends"})," support in components and mixin composition."]}),`
`]}),`
`,e.jsx(n.h2,{id:"goal",children:"Goal"}),`
`,e.jsxs(n.p,{children:["For Phase 1 we evaluate whether plain class inheritance (extends) is sufficient for the immediate needs, without introducing a ",e.jsx(n.code,{children:"@Controller"})," decorator or runtime host APIs."]}),`
`,e.jsx(n.h2,{id:"focused-questions",children:"Focused Questions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Can we move shared functionality into a service (base class or plain helper)?"}),`
`,e.jsx(n.li,{children:"Can that service be reused across multiple components?"}),`
`,e.jsx(n.li,{children:"Can the shared logic tap into component lifecycle events?"}),`
`,e.jsx(n.li,{children:"With mixins from PR #6362, can we compose multiple behaviors into a single component (multi-behavior composition)?"}),`
`]}),`
`,e.jsx(n.p,{children:"Definitions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Service (for this evaluation): A base class supplying logic + optional lifecycle hooks (",e.jsx(n.code,{children:"connectedCallback"}),", ",e.jsx(n.code,{children:"disconnectedCallback"}),", ",e.jsx(n.code,{children:"componentWillLoad"}),", ",e.jsx(n.code,{children:"componentDidLoad"}),", ",e.jsx(n.code,{children:"componentShouldUpdate"}),", ",e.jsx(n.code,{children:"componentWillRender"}),", ",e.jsx(n.code,{children:"componentDidRender"}),", ",e.jsx(n.code,{children:"componentDidUpdate"}),", ",e.jsx(n.code,{children:"componentDidUnload"}),"). It may manage resources (observers, timers) and expose methods used by derived components."]}),`
`,e.jsxs(n.li,{children:["Reuse: Two or more distinct Stencil components (different ",e.jsx(n.code,{children:"@Component({ tag })"}),") extending the same service base."]}),`
`,e.jsxs(n.li,{children:["Tap into lifecycle: Base class overrides lifecycle methods and derived components inherit that behavior (with ability to call ",e.jsx(n.code,{children:"super"})," when also overriding)."]}),`
`,e.jsx(n.li,{children:"Mixins: Multiple behavior classes composed into a single component constructor (introduced alongside inheritance in PR #6362), enabling composition beyond single inheritance."}),`
`]}),`
`,e.jsx(n.p,{children:"Planned Test Additions (WDIO-first)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["WDIO specs under ",e.jsx(n.code,{children:"test/wdio/service-inheritance/"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify two distinct components (",e.jsx(n.code,{children:"svc-inherit-a"}),", ",e.jsx(n.code,{children:"svc-inherit-b"}),") can extend a shared base service and call its methods."]}),`
`,e.jsx(n.li,{children:"Assert lifecycle tapping by reading DOM markers emitted by base hooks (willLoad/didLoad/willUpdate/didUpdate)."}),`
`,e.jsx(n.li,{children:"Assert per-instance isolation (service call counter increments only for the triggering component)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["WDIO specs under ",e.jsx(n.code,{children:"test/wdio/service-mixins/"})," (new):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Define two simple behavior mixins (e.g., ",e.jsx(n.code,{children:"BehaviorA"}),", ",e.jsx(n.code,{children:"BehaviorB"}),") that each add lifecycle markers and a method."]}),`
`,e.jsx(n.li,{children:"Compose both into a single component; verify both sets of lifecycle markers appear and instance state isolation holds."}),`
`,e.jsx(n.li,{children:"Add a second component using only one mixin to validate selective composition and reuse."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Ensure inclusion via ",e.jsx(n.code,{children:"test/wdio/wdio.conf.ts"})," globs (inheritance and mixins suites)."]}),`
`,e.jsx(n.li,{children:"Defer compiler-unit coverage for now to stay consistent with the decorators’ WDIO-focused flow in this effort."}),`
`]}),`
`,e.jsx(n.p,{children:"Lifecycle Hook Coverage via Inheritance/Mixins"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Base or mixin defines lifecycle methods. Framework calls them on the instance; override chain uses standard JS ",e.jsx(n.code,{children:"super"})," semantics. For mixins, ensure method composition does not collide; where applicable, call through to previous implementation."]}),`
`,e.jsx(n.li,{children:"Limitation: Async pre-render gating is still out-of-scope in Phase 1."}),`
`]}),`
`,e.jsx(n.p,{children:"Out-of-Scope (Explicitly Ignored For Now)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Async pre-render gating (awaiting before first render)."}),`
`,e.jsx(n.li,{children:"Dynamic attachment/detachment of behaviors at runtime."}),`
`,e.jsx(n.li,{children:"SSR/hydration specific ordering guarantees beyond existing inheritance/mixin behavior."}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance Criteria (Phase 1 extends-only + mixins)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A base class method is callable from two separate derived components at runtime, verified via WDIO DOM assertions."}),`
`,e.jsx(n.li,{children:"Base lifecycle methods execute, verified via WDIO by reading emitted markers from the page."}),`
`,e.jsx(n.li,{children:"Composition via mixins: a component can consume 2+ behaviors and receive both sets of lifecycle effects and methods without collisions, verified via WDIO."}),`
`]}),`
`,e.jsx(n.h2,{id:"coverage-summary",children:"Coverage Summary"}),`
`,e.jsx("div",{style:{maxWidth:"100%",width:"100%",background:"#fff"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"18%"}}),e.jsx("col",{style:{width:"52%"}}),e.jsx("col",{style:{width:"15%"}}),e.jsx("col",{style:{width:"15%"}})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Area"}),e.jsx("th",{children:"Scenario"}),e.jsx("th",{children:"Spec"}),e.jsx("th",{style:{textAlign:"center"},children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Inheritance"}),e.jsx("td",{children:"Shared service base reused across multiple components"}),e.jsx("td",{children:e.jsx("code",{children:"service-inheritance/cmp.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#16a34a",color:"#fff",padding:"2px 8px",borderRadius:12},children:"PASS"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Inheritance"}),e.jsx("td",{children:"Lifecycle tapping via base hooks (will/did load/update)"}),e.jsx("td",{children:e.jsx("code",{children:"service-inheritance/cmp.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#16a34a",color:"#fff",padding:"2px 8px",borderRadius:12},children:"PASS"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Inheritance"}),e.jsx("td",{children:"Runtime host state updates from base service (mouse controller example)"}),e.jsx("td",{children:e.jsx("code",{children:"service-inheritance/cmp.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#16a34a",color:"#fff",padding:"2px 8px",borderRadius:12},children:"PASS"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mixins"}),e.jsx("td",{children:"Compose two behaviors into one component; both lifecycles/methods present"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mixins"}),e.jsx("td",{children:"Selective composition (single behavior component) and reuse across components"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mixins"}),e.jsx("td",{children:"Conflict scenario: same-name methods across behaviors and resolution strategy"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mixins"}),e.jsx("td",{children:"Override precedence in component with super() chaining"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mixins"}),e.jsx("td",{children:"Watchers/Props/State merge assertions across composed behaviors"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mixins"}),e.jsx("td",{children:"Lifecycle ordering across multiple behaviors"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]})]})]})}),`
`,e.jsx("small",{children:e.jsxs(n.p,{children:["Legend: ",e.jsx("span",{style:{background:"#16a34a",color:"#fff",padding:"1px 6px",borderRadius:10},children:"PASS"})," = implemented and green in WDIO; ",e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"1px 6px",borderRadius:10},children:"PENDING"})," = planned, not yet implemented."]})}),`
`,e.jsx(n.h2,{id:"checkpoint-inheritance-support-verified-v4371",children:"Checkpoint: Inheritance Support Verified (v4.37.1)"}),`
`,e.jsx(n.p,{children:"Status: PASS (inheritance); PENDING (mixins suite)"}),`
`,e.jsx(n.p,{children:"Evidence"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Local branch: ",e.jsx(n.code,{children:"feat/reactive-elements"})," after merging upstream ",e.jsx(n.code,{children:"main"})," containing v4.37.1 (package.json now shows ",e.jsx(n.code,{children:"4.37.1"}),")."]}),`
`,e.jsxs(n.li,{children:["Rebuilt compiler (",e.jsx(n.code,{children:"npm run build"}),") with no inheritance-related compile errors."]}),`
`,e.jsxs(n.li,{children:["Ran WDIO build for ",e.jsx(n.code,{children:"service-inheritance"}),' suite successfully; prior compiler error ("Classes decorated with @Component can not extend from a base class") no longer emitted.']}),`
`,e.jsx(n.li,{children:"Confirms: base class extension is now accepted by the compiler and downstream generated output compiles/runs in WDIO environment."}),`
`]}),`
`,e.jsx(n.h3,{id:"wdio-run-output-excerpt",children:"WDIO Run Output (excerpt)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`[chrome 140.0.7339.186 mac #0-0] service-inheritance (extends-only)
[chrome 140.0.7339.186 mac #0-0]    ✓ reuses a shared service via base class and taps lifecycle (2.2s)

Spec Files: 1 passed, 1 total (100% completed)
`})}),`
`,e.jsxs(n.p,{children:["Timestamp: 2025-09-24T23:59:24Z (local run)",e.jsx(n.br,{}),`
`,"Result: PASS ✅"]}),`
`,e.jsx(n.p,{children:"Pending Follow-ups"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add and execute ",e.jsx(n.code,{children:"service-mixins"})," WDIO suite to validate multi-behavior composition."]}),`
`,e.jsx(n.li,{children:"Capture lifecycle marker assertions from the inheritance test run (optional: add snippet/screenshot) once mixins results are also documented."}),`
`,e.jsx(n.li,{children:"Update Go/No-Go matrix after mixins verification."}),`
`]}),`
`,e.jsx(n.h2,{id:"parity-with-lit-reactive-controllers-test-plan",children:"Parity with Lit Reactive Controllers (Test Plan)"}),`
`,e.jsxs(n.p,{children:["Reference: ",e.jsx("a",{href:"https://lit.dev/docs/composition/controllers/",target:"_blank",rel:"noopener noreferrer",children:"Lit: Reactive Controllers"})]}),`
`,e.jsx("div",{style:{maxWidth:"100%",width:"100%",background:"#fff"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"24%"}}),e.jsx("col",{style:{width:"36%"}}),e.jsx("col",{style:{width:"20%"}}),e.jsx("col",{style:{width:"20%"}})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Lit Feature"}),e.jsx("th",{children:"Stencil Mapping (extends/mixins)"}),e.jsx("th",{children:"Spec Path"}),e.jsx("th",{style:{textAlign:"center"},children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"External input: mousemove controller"}),e.jsxs("td",{children:["Base service attaches window listener in ",e.jsx("code",{children:"connectedCallback"}),", updates host ",e.jsx("code",{children:"@State"})]}),e.jsx("td",{children:e.jsx("code",{children:"service-inheritance/cmp.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#16a34a",color:"#fff",padding:"2px 8px",borderRadius:12},children:"PASS"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lifecycle: setup/cleanup"}),e.jsxs("td",{children:[e.jsx("code",{children:"connectedCallback"}),"/",e.jsx("code",{children:"disconnectedCallback"})," establish and tear down listeners/observers"]}),e.jsx("td",{children:e.jsx("code",{children:"service-inheritance/cmp.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#16a34a",color:"#fff",padding:"2px 8px",borderRadius:12},children:"PASS"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lifecycle: pre/post update hooks"}),e.jsxs("td",{children:["Map Lit ",e.jsx("code",{children:"hostUpdate/hostUpdated"})," to Stencil ",e.jsx("code",{children:"componentWillRender/componentDidRender"}),"; assert ordering and DOM reads"]}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Update scheduling (requestUpdate)"}),e.jsxs("td",{children:["Trigger host re-render via ",e.jsx("code",{children:"@State"})," mutations from base/mixin; coalescing by counting ",e.jsx("code",{children:"componentWillRender"})," calls"]}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Multiple controllers per host"}),e.jsx("td",{children:"Compose multiple behaviors via mixins; both lifecycles and methods present"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Controller composition"}),e.jsx("td",{children:"Behavior A internally composes Behavior B (mixin chain); verify call-through"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dynamic attach/detach"}),e.jsxs("td",{children:["Lit ",e.jsx("code",{children:"addController/removeController"})," dynamic behavior. Stencil: not supported in Phase 1 (static class composition)."]}),e.jsx("td",{children:"—"}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#ef4444",color:"#fff",padding:"2px 8px",borderRadius:12},children:"GAP"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Keyboard input"}),e.jsxs("td",{children:["Base/mixin listens to ",e.jsx("code",{children:"keydown"})," on window; updates host state"]}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Resize observer"}),e.jsx("td",{children:"Behavior owns a ResizeObserver; exposes attach API; asserts size state updates"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mutation observer"}),e.jsx("td",{children:"Behavior observes child changes; state reflects mutation count"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Async task lifecycle"}),e.jsxs("td",{children:["Task-like behavior with states: ",e.jsx("code",{children:"idle"})," → ",e.jsx("code",{children:"pending"})," → ",e.jsx("code",{children:"resolved/error"}),"; triggers updates; abort on disconnect"]}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Cleanup on disconnect"}),e.jsx("td",{children:"After host removal, external events no longer mutate state; no stray timers"}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Update completion signal"}),e.jsxs("td",{children:["Lit ",e.jsx("code",{children:"updateComplete"})," Promise. Stencil: emulate via ",e.jsx("code",{children:"componentDidUpdate"})," markers/next frame waits"]}),e.jsx("td",{children:e.jsx("code",{children:"service-mixins/*.test.tsx"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#f59e0b",color:"#111827",padding:"2px 8px",borderRadius:12},children:"PENDING"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Directive integration"}),e.jsx("td",{children:"Lit directives + controllers. Stencil: N/A; pattern can be simulated with methods returning callbacks for refs."}),e.jsx("td",{children:"—"}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{background:"#9ca3af",color:"#111827",padding:"2px 8px",borderRadius:12},children:"N/A"})})]})]})]})}),`
`,e.jsx("small",{children:e.jsx(n.p,{children:"Notes: Controllers in Lit are instance-based and can be dynamically added/removed. Stencil Phase 1 focuses on static composition (extends/mixins). Where direct parity isn't possible, gaps are recorded explicitly."})}),`
`,e.jsx(n.h2,{id:"preliminary-conclusion",children:"Preliminary Conclusion"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Extends-only path appears sufficient for the three narrow questions (shared logic, reuse, lifecycle tapping). With mixins, composition of multiple behaviors is also feasible without introducing ",e.jsx(n.code,{children:"@Controller"})," in Phase 1."]}),`
`,e.jsx(n.li,{children:"Keep this evaluation doc updated as tests land."}),`
`]}),`
`,e.jsx(n.p,{children:"Next Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Land and stabilize the WDIO specs under ",e.jsx(n.code,{children:"test/wdio/service-inheritance/"})," and add ",e.jsx(n.code,{children:"test/wdio/service-mixins/"}),"."]}),`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.code,{children:"test/wdio/wdio.conf.ts"})," to include the mixins suite."]}),`
`,e.jsx(n.li,{children:"Revisit broader controller features only if async gating, SSR-specific ordering, or advanced ergonomics are required."}),`
`]}),`
`,e.jsx(n.h2,{id:"compatibility-note-older-stencil-builds",children:"Compatibility note (older Stencil builds)"}),`
`,e.jsx(n.p,{children:"If your local environment has not yet pulled the Stencil update that introduced component inheritance (PR #6362), attempting to extend from a base class will fail at compile time."}),`
`,e.jsx(n.p,{children:"Screenshot"}),`
`,e.jsx("img",{src:d,alt:"Compiler error when extending from a base class on older Stencil",style:{maxWidth:"780px",border:"1px solid #eee",borderRadius:"4px"}}),`
`,e.jsx(n.p,{children:"Example error output"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`[ ERROR ] service-inheritance/cmp-a.tsx:5:26
Classes decorated with @Component can not extend from a base class.
Stencil needs to be able to switch between different base classes in order to implement the different output targets such as: lazy and raw web components.

L4: @Component({ tag: 'svc-inherit-a' })
L5: export class SvcInheritA extends ServiceBase {
L6:   @State() value: string = '';

[ ERROR ] service-inheritance/cmp-b.tsx:5:26
Classes decorated with @Component can not extend from a base class.
Stencil needs to be able to switch between different base classes in order to implement the different output targets such as: lazy and raw web components.

L4: @Component({ tag: 'svc-inherit-b' })
L5: export class SvcInheritB extends ServiceBase {
L6:   @State() value: string = '';
`})}),`
`,e.jsxs(n.p,{children:["Action: pull latest ",e.jsx(n.code,{children:"stenciljs/core"})," that includes PR #6362 to enable ",e.jsx(n.code,{children:"extends"})," and mixins support before running these WDIO tests."]})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
