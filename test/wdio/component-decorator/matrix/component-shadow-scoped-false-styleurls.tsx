import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-styleurls',
  shadow: true,
  scoped: false,
  styleUrls: ['matrix-b10.css']
})
export class ComponentShadowScopedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | - | ✓ | -</div>;
  }
}
