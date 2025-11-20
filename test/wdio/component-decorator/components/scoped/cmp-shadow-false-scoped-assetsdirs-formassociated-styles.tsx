import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated-styles',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | - | - | ✓</div>;
  }
}
