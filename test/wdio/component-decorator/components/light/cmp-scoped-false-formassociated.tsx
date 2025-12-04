import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated',
  scoped: false,
  formAssociated: true
})
export class CmpScopedFalseFormassociated {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | - | -</div>;
  }
}
