import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-styleurls',
  shadow: false,
  scoped: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowFalseScopedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | - | ✓ | -</div>;
  }
}
