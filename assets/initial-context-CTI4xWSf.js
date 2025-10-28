import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Bs-ld6WQ.js";import{M as r}from"./blocks-CrcodpOZ.js";import"./iframe-BYykHvt_.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B1B_kTCg.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Behavior/Extends/Historical Controller Context",tags:["dev-only","pending-review"]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Current evaluation summary: see ",e.jsx(n.a,{href:"./extends-eval.mdx",children:"Extends / Mixins Evaluation"}),"."]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/stenciljs/core/issues/3162",rel:"nofollow",children:"GitHub issue #3162"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/lit/lit/blob/f8ee010bc515e4bb319e98408d38ef3d971cc08b/packages/reactive-element/src/reactive-controller.ts#L11",rel:"nofollow",children:"Lit implementation (reactive-controller.ts)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://gist.github.com/WickyNilliams/79ee85ea370506ac6b16de1920f48e5e",rel:"nofollow",children:"Sample implementation gist"})}),`
`]}),`
`,e.jsx(n.h2,{id:"current-direction-extends--mixins--no-decorator-needed",children:"Current Direction (Extends + Mixins – No Decorator Needed)"}),`
`,e.jsxs(n.p,{children:["Initial exploration proposed a ",e.jsx(n.code,{children:"@Controller"})," decorator to enable reusable behavior objects with lifecycle participation. Since then, compiler support for direct component inheritance and mixin composition (implemented by @johnjenkins and released in >= v4.37.0) provides the required capabilities out of the box:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shared logic via a base class (service-style) using ",e.jsx(n.code,{children:"extends"}),"."]}),`
`,e.jsxs(n.li,{children:["Multiple behavior composition via ",e.jsx(n.code,{children:"Mixin(FooFactory, BarFactory, ...)"})," without extra runtime APIs."]}),`
`,e.jsxs(n.li,{children:["Lifecycle tapping by simply implementing lifecycle methods in the base class or mixin factories (standard JS ",e.jsx(n.code,{children:"super"})," chaining / method composition handled by emitted class structure)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["As a result, adding a new ",e.jsx(n.code,{children:"@Controller"})," decorator and transform layer is no longer necessary for Phase 1 goals. The historical proposal below is retained only for context. Current effort shifts to hardening the inheritance + mixin path with comprehensive tests."]}),`
`,e.jsx(n.h3,{id:"test-focus-planned--in-progress",children:"Test Focus (Planned / In-Progress)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Inheritance basics: base lifecycle hook invocation (",e.jsx(n.code,{children:"willLoad"}),", ",e.jsx(n.code,{children:"didLoad"}),", ",e.jsx(n.code,{children:"willUpdate"}),", ",e.jsx(n.code,{children:"didUpdate"}),")."]}),`
`,e.jsx(n.li,{children:"Multiple components reusing the same base ensuring per-instance state isolation."}),`
`,e.jsx(n.li,{children:"Mixins: combining 2+ behavior factories; verifying merged props, states, methods, watchers (where applicable) without collisions."}),`
`,e.jsxs(n.li,{children:["Override precedence: derived component overrides calling ",e.jsx(n.code,{children:"super"})," (when present) – ensure no double invocation or loss of base logic."]}),`
`,e.jsx(n.li,{children:"Conflict detection: intentional same-name method in two mixins (document expected last-in-wins behavior or mitigation strategy)."}),`
`,e.jsx(n.li,{children:"Watchers/Methods/Props/State propagation from mixins into the final component metadata (compiler merge correctness)."}),`
`,e.jsx(n.li,{children:"Lifecycle ordering snapshot (base before derived render side-effects) – doc evidence."}),`
`,e.jsx(n.li,{children:"Edge: absence of async pre-render gating (explicitly documented limitation vs original controller concept)."}),`
`,e.jsx(n.li,{children:'Regression: ensure older compiler error (pre-4.37.0 "@Component can not extend") no longer surfaces.'}),`
`]}),`
`,e.jsx(n.p,{children:"If later requirements emerge (dynamic attach/detach of behaviors, async gating before first render, SSR ordering guarantees) we can re-evaluate a decorator or runtime hook abstraction. For now: decorator deferred."}),`
`,e.jsx(n.h2,{id:"original-description--context-historical-controller-proposal",children:"Original Description / Context (Historical @Controller Proposal)"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Historical context: see ",e.jsx(n.a,{href:"./extends-eval.mdx",children:"Extends / Mixins Evaluation"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"issue",children:"Issue"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/stenciljs/core/issues/3162",rel:"nofollow",children:"Issue #3162"})}),`
`,e.jsx(n.h3,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["Attaching controllers to Stencil components allows extracting logic out of the component and making code shareable across multiple components. A controller implements ",e.jsx(n.a,{href:"https://stenciljs.com/docs/component-lifecycle",rel:"nofollow",children:"lifecycle"})," methods of a Stencil component and contains its own scope to store data as well as provide functions that can be accessed from within the component. Real world examples:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"MouseController"})," that registers mouse event handlers, observes the mouse position, and changes state when the mouse is close to the component's rendered position."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"ResizeController"})," that changes the structure of the component to improve responsive rendering."]}),`
`]}),`
`,e.jsx(n.p,{children:"The referenced issue contains various suggestions on how this could look from the user POV. Suggested (historic) shape:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Component, Fragment, Controller, h } from '@stencil/core';

import MouseController from '../controller/mouse.js';
import ResizeController from '../controllers/resize.js';

@Component({
  tag: 'my-component',
})
export class MyComponent {
  @Controller()
  someController = new MouseController();

  @Controller()
  someOtherController = new ResizeController();

  render() {
    // access controller from within the component
    this.someController.action();
    this.someOtherController.action();

    return (
      <>
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </>
    );
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Introducing a ",e.jsx(n.code,{children:"@Controller"})," decorator would align with current design patterns and allow for future extensibility, e.g. behavioral attributes:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`@Controller({
  // restrict access to \`componentWillLoad\` only
  lifecycles: ['componentWillLoad'],
  // execute before user code
  order: 'pre',
})
someOtherController = new ResizeController();
`})}),`
`,e.jsx(n.h3,{id:"implementation-sketch-historic",children:"Implementation Sketch (Historic)"}),`
`,e.jsxs(n.p,{children:["Decorators in Stencil are compile-time only. A transformed artifact for a ",e.jsx(n.code,{children:"dist-custom-element"})," build could look like:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { p as proxyCustomElement, H, h } from './p-BCkgn2oy.js';

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
  constructor() {
    super();
    this.__registerHost();

    // register controllers
    this.someController = new MouseController(this);
    this.someOtherController = new ResizeController(this);
  }

  componentWillLoad() {
    this.someController.componentWillLoad();
    this.someOtherController.componentWillLoad();
    // continue with user code...
  }

  // ... potentially other lifecycle hooks

  render() {
    return (
      h(h.Fragment, null,
        h('div', { key: 'a' }, '...'),
        h('div', { key: 'b' }, '...'),
        h('div', { key: 'c' }, '...'),
      )
    );
  }
}, [0, 'my-component']);
function defineCustomElement$1() {
  if (typeof customElements === 'undefined') {
    return;
  }
  const components = ['my-component'];
  components.forEach(tagName => {
    switch (tagName) {
      case 'my-component':
        if (!customElements.get(tagName)) {
          customElements.define(tagName, MyComponent$1);
        }
        break;
    }
  });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
`})}),`
`,e.jsx(n.h4,{id:"controller-base-class-draft",children:"Controller Base Class Draft"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { ComponentInterface } from '@stencil/core';

export abstract class StencilController<T extends ComponentInterface = ComponentInterface> {
  protected host: T;

  constructor(host: T) {
    this.host = host;
  }

  componentWillLoad?(): void | Promise<void>;
  componentDidLoad?(): void | Promise<void>;
  componentWillRender?(): void | Promise<void>;
  componentDidRender?(): void;
  componentWillUpdate?(): void | Promise<void>;
  componentDidUpdate?(): void;
  disconnectedCallback?(): void;
}
`})}),`
`,e.jsx(n.p,{children:"Example usage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { StencilController } from './stencil-controller';

export default class MouseController extends StencilController {
  position = { x: 0, y: 0 };

  componentWillLoad() {
    console.log('MouseController initialized for', this.host);
  }

  action() {
    return this.position;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"questions-historic-evaluation-prompts",children:"Questions (Historic Evaluation Prompts)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"What would be the scope of that feature on Stencil based on their ask, our understanding, and Christian's analysis?"}),`
`,e.jsx(n.li,{children:"Ballpark estimate for someone with little to no experience in the project?"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Note: This document is preserved for historical context. Current Phase 1 evaluation focuses on class inheritance and mixins instead of introducing ",e.jsx(n.code,{children:"@Controller"}),"."]})]})}function m(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{m as default};
