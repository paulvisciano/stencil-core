import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-styleurl',
  scoped: true,
  styleUrl: 'test-style.css',
})
export class ComponentScopedStyleUrl {
  render() {
    return <div>Permutation: scoped, styleUrl</div>;
  }
}
