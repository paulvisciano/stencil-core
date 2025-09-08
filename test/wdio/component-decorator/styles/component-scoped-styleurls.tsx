import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-styleurls',
  scoped: true,
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentScopedStyleUrls {
  render() {
    return <div>Permutation: scoped, styleUrls</div>;
  }
}
