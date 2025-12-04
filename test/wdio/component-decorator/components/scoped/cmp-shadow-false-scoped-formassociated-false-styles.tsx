import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-false-styles',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
