import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CH0APm6g.js";import{c as o}from"./coverage-data-7tBcwMQm.js";import{o as i}from"./test-coverage-DFmqcdZJ.js";import{o as a}from"./test-coverage-DD4fwNCt.js";import{e as c}from"./test-coverage-BLf7Y8HM.js";import{l}from"./coverage-data-DdkU-Vpw.js";import{m as d}from"./test-coverage-c93k6olc.js";import"./iframe-ClBj42JF.js";import"./preload-helper-D9Z9MdNV.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"decorator-testing-overview",children:"Decorator Testing Overview"}),`
`,e.jsx(n.p,{children:"This section tracks test coverage for all Stencil decorators. Each decorator has its own matrix and coverage notes. Use this as a reference for contributors and maintainers."}),`
`,e.jsx(n.h2,{id:"what-are-decorators-in-stencil",children:"What Are Decorators in Stencil?"}),`
`,e.jsx(n.p,{children:"Stencil decorators are special TypeScript annotations that add metadata and behavior to component classes, properties, methods, and events. They enable features like reactive state, property reflection, and event emission. Decorators are a core part of Stencil's API and are used to define how components interact with the DOM and with each other."}),`
`,e.jsx(n.h3,{id:"example-stencil-component-using-decorators",children:"Example Stencil Component Using Decorators"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Component, Prop, State, Event, EventEmitter, Method, Listen } from '@stencil/core';

@Component({
  tag: 'example-cmp',
})
export class ExampleCmp {
  @Prop({ reflect: true }) label: string;
  @State() count: number = 0;
  @Event() valueChanged: EventEmitter<number>;

  @Method()
  async increment() {
    this.count++;
    this.valueChanged.emit(this.count);
  }

  @Listen('click', { target: 'window' })
  handleWindowClick() {
    // handle global click
  }

  render() {
    return <button onClick={() => this.increment()}>{this.label}: {this.count}</button>;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"decorators",children:"Decorators"}),`
`,e.jsx(n.p,{children:"Below are all the decorators provided by Stencil. Each decorator has a dedicated page that includes a detailed test coverage matrix, along with a description and usage examples. Click the name of the decorator to view its testing matrix:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/testing-decorators-component",children:e.jsx(n.code,{children:"@Component"})}),": Defines a custom element and its metadata, such as tag name, style, encapsulation, and shadow DOM options."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@Component({ tag: 'example-cmp' })
export class ExampleCmp { /* ... */ }
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/testing-decorators-prop",children:e.jsx(n.code,{children:"@Prop"})}),": Exposes a property to consumers and can reflect it to an attribute."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@Prop({ reflect: true }) label: string;
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/testing-decorators-state",children:e.jsx(n.code,{children:"@State"})}),": Creates internal reactive state."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@State() count: number = 0;
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/testing-decorators-event",children:e.jsx(n.code,{children:"@Event"})}),": Allows the component to emit custom events."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@Event() valueChanged: EventEmitter<number>;
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/testing-decorators-method",children:e.jsx(n.code,{children:"@Method"})}),": Exposes public methods to consumers."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@Method()
async increment() { /* ... */ }
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/testing-decorators-listen",children:e.jsx(n.code,{children:"@Listen"})}),": Attaches event listeners to the host, window, or document."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@Listen('click', { target: 'window' })
handleWindowClick() { /* ... */ }
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"project-phases",children:"Project Phases"}),`
`,e.jsx(n.h3,{id:"phase-1-documentation-and-component-generation",children:"Phase 1. Documentation and Component Generation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Document all properties of each decorator."}),`
`,e.jsx(n.li,{children:"Define a permutation matrix for the Decorator based on the properties"}),`
`,e.jsx(n.li,{children:"Create a script to generate components based off of the permutations matrix"}),`
`,e.jsxs(n.li,{children:["Verify the matrix and ",e.jsx(n.code,{children:"compile all generated components"})," to discover ",e.jsx(n.code,{children:"actual compiler rules"})," (e.g., mutually-exclusive options)."]}),`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.code,{children:"rules.json"})," with discovered rules and adjust the matrix; regenerate until all components compile."]}),`
`,e.jsxs(n.li,{children:["Prevent drift: docs render rules from ",e.jsx(n.code,{children:"rules.json"})," using ",e.jsx(n.code,{children:"RulesAtAGlance"}),", and a verify script checks accuracy."]}),`
`,e.jsxs(n.li,{children:["Doc layout convention per decorator:",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Decorator Properties"}),`
`,e.jsx(n.li,{children:"Rules (at a glance)"}),`
`,e.jsx(n.li,{children:"Generated Components"}),`
`,e.jsx(n.li,{children:"Component Grouping"}),`
`,e.jsx(n.li,{children:"Test Cases"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs("div",{role:"note","aria-label":"Phase 1 Goal",style:{border:"1px solid #e0e0e0",background:"#fffbe6",padding:12,borderRadius:6,margin:"12px 0"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:6},children:"Phase 1 Goal"}),e.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[e.jsx("li",{children:"Stress-test the compiler by generating a broad set of components (unique option combinations)."}),e.jsxs("li",{children:["Discover the true, compiler‑enforced rules and record them in ",e.jsx("code",{children:"rules.json"}),"."]}),e.jsxs("li",{children:["Regenerate until ",e.jsx("strong",{children:"100%"})," of generated components compile cleanly."]})]})]}),`
`,e.jsx(n.h3,{id:"phase-2-behavioral-tests-for-generated-components",children:"Phase 2. Behavioral Tests for Generated Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Purpose: verify that compiled components from Phase 1 behave as expected at runtime."}),`
`,e.jsx(n.li,{children:"Reuse existing WDIO tests as templates; study each test’s use case and intent."}),`
`,e.jsx(n.li,{children:"Propagate each applicable test across all generated components that match the scenario (skip when not applicable)."}),`
`,e.jsxs(n.li,{children:["Record results in each decorator’s ",e.jsx(n.code,{children:"coverage-overlay.json"})," (",e.jsx(n.code,{children:"tested"}),", ",e.jsx(n.code,{children:"testedBy"}),") so the “Tested / Test Cases” column reflects reality."]}),`
`,e.jsx(n.li,{children:"Prefer tags/metadata to express applicability (e.g., by mode/options) so propagation is automated and repeatable."}),`
`,e.jsx(n.li,{children:"Report progress in docs; do not change compiler rules in Phase 2 unless tests uncover spec gaps."}),`
`]}),`
`,e.jsxs("div",{role:"note","aria-label":"Phase 2 Goal",style:{border:"1px solid #e0e0e0",background:"#e6f7ff",padding:12,borderRadius:6,margin:"12px 0"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:6},children:"Phase 2 Goal"}),e.jsxs("ul",{style:{margin:0,paddingLeft:18},children:[e.jsx("li",{children:"Give confidence that the compiled components from Phase 1 (Web Components) also work as expected at runtime"}),e.jsx("li",{children:"Systematically apply relevant WDIO tests to every applicable generated component."}),e.jsx("li",{children:"Track tested status in overlay and surface it in the docs."})]})]}),`
`,e.jsx(n.h2,{id:"generated-components-summary",children:"Generated Components Summary"}),`
`,e.jsx("div",{style:{maxWidth:"100%",width:"100%",background:"#fff"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"50%"}}),e.jsx("col",{style:{width:"50%"}})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Decorator"}),e.jsx("th",{style:{textAlign:"center"},children:"Components Generated %"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"@Component"}),e.jsxs("td",{style:{textAlign:"center"},children:[o.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Prop"}),e.jsxs("td",{style:{textAlign:"center"},children:[i.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@State"}),e.jsxs("td",{style:{textAlign:"center"},children:[a.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Event"}),e.jsxs("td",{style:{textAlign:"center"},children:[c.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Listen"}),e.jsxs("td",{style:{textAlign:"center"},children:[l.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Method"}),e.jsxs("td",{style:{textAlign:"center"},children:[d.coverage.percent,"%"]})]})]})]})})]})}function b(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{b as default};
