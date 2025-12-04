import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-styles',
  shadow: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | - | ✓</div>;
  }
}
