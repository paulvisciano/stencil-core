import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-oON1Pjnu.js";import"./iframe-D5Xv28TE.js";import"./preload-helper-D9Z9MdNV.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"why-stenciljs-was-created",children:"Why StencilJS Was Created"}),`
`,e.jsx(n.p,{children:"StencilJS was born out of the need to solve a growing problem in the frontend ecosystem: framework churn and fragmentation. Initially, the Ionic team built UI components tightly coupled to Angular, which was the dominant framework at the time. As React's popularity surged and other frameworks emerged, it became clear that tying components to a single framework limited their reach and reusability."}),`
`,e.jsx(n.h2,{id:"the-problem",children:"The Problem"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework Lock-In:"})," Ionic components were only usable in Angular projects, excluding developers using React, Vue, or other frameworks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frontend Churn:"})," The rapid evolution of frontend frameworks meant that investing heavily in one could quickly become obsolete."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Developer Experience:"})," Teams wanted a way to write components once and use them everywhere, regardless of the chosen framework."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-solution",children:"The Solution"}),`
`,e.jsxs(n.p,{children:["StencilJS introduced a common syntax for defining UI components, which are then compiled into standards-based ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components",rel:"nofollow",children:"Web Components"}),". This approach allows components to be framework-agnostic and usable in Angular, React, Vue, or even plain HTML projects."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework Compatibility:"})," Stencil components can be consumed in any major frontend framework."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Future-Proof:"})," By building on web standards, Stencil reduces the risk of framework obsolescence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance:"})," Stencil generates highly optimized, lazy-loaded components for fast user experiences."]}),`
`]}),`
`,e.jsx(n.h2,{id:"why-not-just-use-web-components-directly",children:"Why Not Just Use Web Components Directly?"}),`
`,e.jsx(n.p,{children:"Building Web Components from scratch is laborious and lacks many features developers expect from modern frameworks. Early approaches were far behind in terms of developer experience, tooling, and productivity:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Manual Boilerplate:"})," Writing vanilla Web Components required lots of repetitive code for lifecycle, rendering, and state management."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Missing Tooling:"})," Features like live reload, hot module replacement, and fast builds were absent."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Limited Features:"})," No built-in support for JSX, TypeScript, or reactive data binding."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing & Documentation:"})," No integrated solutions for testing, documentation, or storybook-like previews."]}),`
`]}),`
`,e.jsx(n.h2,{id:"what-stenciljs-enables",children:"What StencilJS Enables"}),`
`,e.jsx(n.p,{children:"StencilJS brings the best of modern frameworks to Web Components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JSX Support:"})," Write components using JSX, just like React."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript:"})," First-class TypeScript support for type safety and autocompletion."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive Data Binding:"})," State and props are reactive, making UI updates simple and predictable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Live Reload & Fast Builds:"})," Instant feedback with live reload and optimized build pipeline."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lazy Loading:"})," Automatic code splitting and lazy loading for fast performance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Built-in Testing:"})," Integrated testing utilities for unit and end-to-end tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation Generation:"})," Automatic generation of API docs from source code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prerendering & SSR:"})," Out-of-the-box support for server-side rendering and static site generation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework Bindings:"})," Generate bindings for React, Angular, and Vue from a single codebase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Style Encapsulation:"})," Scoped CSS and Shadow DOM support for style isolation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dev Server:"})," Fast local development server with live reload."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook Integration:"})," Easily preview and document components interactively."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-stencil-component-vs-vanilla-web-component",children:"Example: Stencil Component vs. Vanilla Web Component"}),`
`,e.jsx(n.p,{children:"Below is a simple counter component implemented in StencilJS and the equivalent using vanilla Web Components:"}),`
`,e.jsx(n.h3,{id:"stenciljs-counter-component",children:"StencilJS Counter Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true,
})
export class MyCounter {
  @State() count = 0;

  increment = () => {
    this.count++;
  };

  render() {
    return (
      <button onClick={this.increment}>
        Count: {this.count}
      </button>
    );
  }
}
`})}),`
`,e.jsx(n.h3,{id:"equivalent-vanilla-web-component",children:"Equivalent Vanilla Web Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.count = 0;
    this.button = document.createElement('button');
    this.button.textContent = \`Count: \${this.count}\`;
    this.button.addEventListener('click', () => {
      this.count++;
      this.button.textContent = \`Count: \${this.count}\`;
    });
    this.shadowRoot.appendChild(this.button);
  }
}
customElements.define('my-counter', MyCounter);
`})}),`
`,e.jsx(n.p,{children:"With StencilJS, you get JSX, reactive state, automatic updates, style encapsulation, and build tooling out of the box. The vanilla approach requires manual DOM updates, event handling, and lacks many developer conveniences."}),`
`,e.jsx(n.h2,{id:"underlying-technology",children:"Underlying Technology"}),`
`,e.jsx(n.p,{children:"Stencil leverages Web Components, a set of browser APIs for creating reusable, encapsulated UI elements. By compiling Stencil code to Web Components, the team ensures maximum compatibility and longevity."}),`
`,e.jsx(n.h2,{id:"learn-more",children:"Learn More"}),`
`,e.jsxs(n.p,{children:["For deeper details on Stencil's architecture, CLI, compiler, runtime, and more, explore the additional documentation files located in the ",e.jsx(n.code,{children:"docs"})," folder of this repository (",e.jsx(n.code,{children:"~/docs"}),")."]}),`
`,e.jsx(n.p,{children:"These Markdown files cover:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Project setup and usage"}),`
`,e.jsx(n.li,{children:"CLI commands and architecture"}),`
`,e.jsx(n.li,{children:"Compiler internals"}),`
`,e.jsx(n.li,{children:"Declarations and types"}),`
`,e.jsx(n.li,{children:"Dev server features"}),`
`,e.jsx(n.li,{children:"Hydration and SSR"}),`
`,e.jsx(n.li,{children:"Mocking and testing utilities"}),`
`,e.jsx(n.li,{children:"Runtime behavior"}),`
`,e.jsx(n.li,{children:"Build scripts and automation"}),`
`]}),`
`,e.jsxs(n.p,{children:["Open the relevant ",e.jsx(n.code,{children:".md"})," files in the ",e.jsx(n.code,{children:"docs"})," directory to read further about each topic."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"StencilJS empowers teams to build reusable, future-proof UI components for any frontend stack. By embracing web standards, it helps developers avoid framework churn and focus on delivering great user experiences."})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default};
