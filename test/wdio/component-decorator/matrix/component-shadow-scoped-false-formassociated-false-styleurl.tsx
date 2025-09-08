import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrl: 'matrix-b5.css'
})
export class ComponentShadowScopedFalseFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
