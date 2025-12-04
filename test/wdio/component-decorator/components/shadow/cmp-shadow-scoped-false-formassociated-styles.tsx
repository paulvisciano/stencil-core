import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-styles',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseFormassociatedStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
