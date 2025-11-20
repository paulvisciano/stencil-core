import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-false',
  scoped: false,
  formAssociated: false
})
export class CmpScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | - | - | -</div>;
  }
}
