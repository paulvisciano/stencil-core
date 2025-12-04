import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false',
  scoped: true,
  formAssociated: false
})
export class CmpScopedFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | - | -</div>;
  }
}
