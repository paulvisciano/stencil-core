import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated-false-styles',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | - | ✓</div>;
  }
}
