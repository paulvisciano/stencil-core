import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-styles',
  scoped: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpScopedFalseFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
