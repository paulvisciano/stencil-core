import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
