import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
