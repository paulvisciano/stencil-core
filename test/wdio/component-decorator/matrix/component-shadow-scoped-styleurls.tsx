import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-styleurls',
  shadow: true,
  scoped: true,
  styleUrls: ['test-style.css']
})
export class ComponentShadowScopedStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✓ | - | - | - | ✓ | -</div>;
  }
}
