import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✓ | ✓ | - | -</div>;
  }
}
