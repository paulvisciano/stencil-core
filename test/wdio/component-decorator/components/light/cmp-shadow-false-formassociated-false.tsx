import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-false',
  shadow: false,
  formAssociated: false
})
export class CmpShadowFalseFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | - | - | -</div>;
  }
}
