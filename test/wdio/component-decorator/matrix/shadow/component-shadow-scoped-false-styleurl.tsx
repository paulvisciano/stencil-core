import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-styleurl',
  shadow: true,
  scoped: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowScopedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | ✓ | - | -</div>;
  }
}
