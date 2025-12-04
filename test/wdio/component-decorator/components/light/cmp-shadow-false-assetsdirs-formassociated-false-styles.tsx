import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-false-styles',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | - | - | ✓</div>;
  }
}
