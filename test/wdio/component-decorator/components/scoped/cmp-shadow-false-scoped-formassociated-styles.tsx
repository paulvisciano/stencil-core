import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-styles',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | - | ✓</div>;
  }
}
