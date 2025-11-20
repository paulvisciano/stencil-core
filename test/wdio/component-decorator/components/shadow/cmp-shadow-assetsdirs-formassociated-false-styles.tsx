import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-false-styles',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | - | ✓</div>;
  }
}
