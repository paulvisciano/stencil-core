import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-styleurls',
  shadow: false,
  scoped: true,
  styleUrls: ['matrix-d14.css']
})
export class ComponentShadowFalseScopedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | - | ✓ | -</div>;
  }
}
