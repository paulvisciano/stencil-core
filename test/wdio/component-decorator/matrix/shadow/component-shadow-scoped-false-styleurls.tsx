import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-styleurls',
  shadow: true,
  scoped: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowScopedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | - | ✓ | -</div>;
  }
}
