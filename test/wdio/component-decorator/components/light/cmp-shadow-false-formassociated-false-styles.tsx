import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-false-styles',
  shadow: false,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | - | - | ✓</div>;
  }
}
