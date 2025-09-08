import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-styleurl',
  shadow: true,
  scoped: false,
  styleUrl: 'matrix-b9.css'
})
export class ComponentShadowScopedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | ✓ | - | -</div>;
  }
}
