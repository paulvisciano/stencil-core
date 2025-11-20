import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-false-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | - | ✓</div>;
  }
}
