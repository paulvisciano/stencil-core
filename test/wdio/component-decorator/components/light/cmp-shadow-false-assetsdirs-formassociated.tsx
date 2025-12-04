import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpShadowFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | - | -</div>;
  }
}
