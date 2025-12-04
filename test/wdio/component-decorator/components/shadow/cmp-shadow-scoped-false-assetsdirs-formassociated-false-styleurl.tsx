import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
