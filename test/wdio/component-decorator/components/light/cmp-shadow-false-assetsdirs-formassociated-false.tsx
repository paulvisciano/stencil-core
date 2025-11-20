import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-false',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | - | - | -</div>;
  }
}
