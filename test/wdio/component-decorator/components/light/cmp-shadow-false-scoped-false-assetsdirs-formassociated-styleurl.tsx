import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-formassociated-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedFalseAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
