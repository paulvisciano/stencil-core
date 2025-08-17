# Why StencilJS Was Created

StencilJS was born out of the need to solve a growing problem in the frontend ecosystem: framework churn and fragmentation. Initially, the Ionic team built UI components tightly coupled to Angular, which was the dominant framework at the time. As React's popularity surged and other frameworks emerged, it became clear that tying components to a single framework limited their reach and reusability.

## The Problem
- **Framework Lock-In:** Ionic components were only usable in Angular projects, excluding developers using React, Vue, or other frameworks.
- **Frontend Churn:** The rapid evolution of frontend frameworks meant that investing heavily in one could quickly become obsolete.
- **Developer Experience:** Teams wanted a way to write components once and use them everywhere, regardless of the chosen framework.

## The Solution
StencilJS introduced a common syntax for defining UI components, which are then compiled into standards-based [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). This approach allows components to be framework-agnostic and usable in Angular, React, Vue, or even plain HTML projects.

- **Framework Compatibility:** Stencil components can be consumed in any major frontend framework.
- **Future-Proof:** By building on web standards, Stencil reduces the risk of framework obsolescence.
- **Performance:** Stencil generates highly optimized, lazy-loaded components for fast user experiences.

## Why Not Just Use Web Components Directly?
Building Web Components from scratch is laborious and lacks many features developers expect from modern frameworks. Early approaches were far behind in terms of developer experience, tooling, and productivity:

- **Manual Boilerplate:** Writing vanilla Web Components required lots of repetitive code for lifecycle, rendering, and state management.
- **Missing Tooling:** Features like live reload, hot module replacement, and fast builds were absent.
- **Limited Features:** No built-in support for JSX, TypeScript, or reactive data binding.
- **Testing & Documentation:** No integrated solutions for testing, documentation, or storybook-like previews.

## What StencilJS Enables
StencilJS brings the best of modern frameworks to Web Components:

- **JSX Support:** Write components using JSX, just like React.
- **TypeScript:** First-class TypeScript support for type safety and autocompletion.
- **Reactive Data Binding:** State and props are reactive, making UI updates simple and predictable.
- **Live Reload & Fast Builds:** Instant feedback with live reload and optimized build pipeline.
- **Lazy Loading:** Automatic code splitting and lazy loading for fast performance.
- **Built-in Testing:** Integrated testing utilities for unit and end-to-end tests.
- **Documentation Generation:** Automatic generation of API docs from source code.
- **Prerendering & SSR:** Out-of-the-box support for server-side rendering and static site generation.
- **Framework Bindings:** Generate bindings for React, Angular, and Vue from a single codebase.
- **Style Encapsulation:** Scoped CSS and Shadow DOM support for style isolation.
- **Dev Server:** Fast local development server with live reload.
- **Storybook Integration:** Easily preview and document components interactively.

## Example: Stencil Component vs. Vanilla Web Component

Below is a simple counter component implemented in StencilJS and the equivalent using vanilla Web Components:

### StencilJS Counter Component
```tsx
import { Component, h, State } from '@stencil/core';

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
```

### Equivalent Vanilla Web Component
```js
class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.count = 0;
    this.button = document.createElement('button');
    this.button.textContent = `Count: ${this.count}`;
    this.button.addEventListener('click', () => {
      this.count++;
      this.button.textContent = `Count: ${this.count}`;
    });
    this.shadowRoot.appendChild(this.button);
  }
}
customElements.define('my-counter', MyCounter);
```

With StencilJS, you get JSX, reactive state, automatic updates, style encapsulation, and build tooling out of the box. The vanilla approach requires manual DOM updates, event handling, and lacks many developer conveniences.

## Underlying Technology
Stencil leverages Web Components, a set of browser APIs for creating reusable, encapsulated UI elements. By compiling Stencil code to Web Components, the team ensures maximum compatibility and longevity.

## Learn More
Explore the rest of the documentation for details on Stencil's architecture, APIs, and usage:

- [README.md](./README.md)
- [cli.md](./cli.md)
- [compiler.md](./compiler.md)
- [declarations.md](./declarations.md)
- [dev-server.md](./dev-server.md)
- [hydrate.md](./hydrate.md)
- [mock-doc.md](./mock-doc.md)
- [runtime.md](./runtime.md)
- [scripts.md](./scripts.md)

---
StencilJS empowers teams to build reusable, future-proof UI components for any frontend stack. By embracing web standards, it helps developers avoid framework churn and focus on delivering great user experiences.
