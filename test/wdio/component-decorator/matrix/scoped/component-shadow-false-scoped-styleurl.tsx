import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-styleurl',
  shadow: false,
  scoped: true,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseScopedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | ✓ | - | -</div>;
  }
}
