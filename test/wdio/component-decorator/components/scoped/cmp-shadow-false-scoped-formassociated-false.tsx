import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-false',
  shadow: false,
  scoped: true,
  formAssociated: false
})
export class CmpShadowFalseScopedFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | - | -</div>;
  }
}
