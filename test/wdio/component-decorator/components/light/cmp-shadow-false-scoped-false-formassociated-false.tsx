import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-false',
  shadow: false,
  scoped: false,
  formAssociated: false
})
export class CmpShadowFalseScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✗ | - | - | -</div>;
  }
}
