import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false-styles',
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpScopedFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
