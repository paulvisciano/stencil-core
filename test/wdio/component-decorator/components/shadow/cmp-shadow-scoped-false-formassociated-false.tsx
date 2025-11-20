import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-false',
  shadow: true,
  scoped: false,
  formAssociated: false
})
export class CmpShadowScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | - | -</div>;
  }
}
