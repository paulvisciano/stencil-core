import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated',
  shadow: false,
  formAssociated: true
})
export class CmpShadowFalseFormassociated {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | - | -</div>;
  }
}
