import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowScopedFalseFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
