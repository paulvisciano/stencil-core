import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-styleurl',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | ✓ | - | -</div>;
  }
}
