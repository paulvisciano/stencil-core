import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-styleurl',
  shadow: false,
  scoped: true,
  styleUrl: 'matrix-d13.css'
})
export class ComponentShadowFalseScopedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | ✓ | - | -</div>;
  }
}
