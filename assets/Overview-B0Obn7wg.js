import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BxMiAmRf.js";import{c}from"./component-coverage-data-BpxPFTM1.js";import{p as o}from"./prop-coverage-data-D6B7HdhD.js";import{s as a}from"./state-coverage-data-BlMXqPhH.js";import{e as i}from"./event-coverage-data-6WugtqOd.js";import{l}from"./listen-coverage-data-yVofxz5Q.js";import{m as d}from"./method-coverage-data-CNhJBYjn.js";import"./iframe-C2C1ItUp.js";import"./preload-helper-D9Z9MdNV.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"decorator-test-coverage-overview",children:"Decorator Test Coverage Overview"}),`
`,e.jsx(t.p,{children:"This section tracks test coverage for all Stencil decorators. Each decorator has its own matrix and coverage notes. Use this as a reference for contributors and maintainers."}),`
`,e.jsx(t.h2,{id:"what-are-decorators-in-stencil",children:"What Are Decorators in Stencil?"}),`
`,e.jsx(t.p,{children:"Stencil decorators are special TypeScript annotations that add metadata and behavior to component classes, properties, methods, and events. They enable features like reactive state, property reflection, event emission, and lifecycle hooks. Decorators are a core part of Stencil's API and are used to define how components interact with the DOM and with each other."}),`
`,e.jsx(t.h3,{id:"example-stencil-component-using-decorators",children:"Example Stencil Component Using Decorators"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Component, Prop, State, Event, EventEmitter, Method, Listen } from '@stencil/core';

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
`,e.jsx(t.h2,{id:"decorators",children:"Decorators"}),`
`,e.jsx(t.p,{children:"Below are all the decorators provided by Stencil. Each decorator has a dedicated page that includes a detailed test coverage matrix, along with a description and usage examples. Click the name of the decorator to view its testing matrix:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/testing-decorators-component",children:e.jsx(t.code,{children:"@Component"})}),": Defines a custom element and its metadata, such as tag name, style, encapsulation, and shadow DOM options."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`@Component({ tag: 'example-cmp' })
export class ExampleCmp { /* ... */ }
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/testing-decorators-prop",children:e.jsx(t.code,{children:"@Prop"})}),": Exposes a property to consumers and can reflect it to an attribute."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`@Prop({ reflect: true }) label: string;
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/testing-decorators-state",children:e.jsx(t.code,{children:"@State"})}),": Creates internal reactive state."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`@State() count: number = 0;
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/testing-decorators-event",children:e.jsx(t.code,{children:"@Event"})}),": Allows the component to emit custom events."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`@Event() valueChanged: EventEmitter<number>;
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/testing-decorators-method",children:e.jsx(t.code,{children:"@Method"})}),": Exposes public methods to consumers."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`@Method()
async increment() { /* ... */ }
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/testing-decorators-listen",children:e.jsx(t.code,{children:"@Listen"})}),": Attaches event listeners to the host, window, or document."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`@Listen('click', { target: 'window' })
handleWindowClick() { /* ... */ }
`})}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"coverage-summary",children:"Coverage Summary"}),`
`,e.jsx("div",{style:{maxWidth:"100%",width:"100%",background:"#fff"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"50%"}}),e.jsx("col",{style:{width:"50%"}})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Decorator"}),e.jsx("th",{style:{textAlign:"center"},children:"Coverage Percentage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"@Component"}),e.jsxs("td",{style:{textAlign:"center"},children:[c.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Prop"}),e.jsxs("td",{style:{textAlign:"center"},children:[o.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@State"}),e.jsxs("td",{style:{textAlign:"center"},children:[a.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Event"}),e.jsxs("td",{style:{textAlign:"center"},children:[i.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Listen"}),e.jsxs("td",{style:{textAlign:"center"},children:[l.coverage.percent,"%"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@Method"}),e.jsxs("td",{style:{textAlign:"center"},children:[d.coverage.percent,"%"]})]})]})]})})]})}function y(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{y as default};
