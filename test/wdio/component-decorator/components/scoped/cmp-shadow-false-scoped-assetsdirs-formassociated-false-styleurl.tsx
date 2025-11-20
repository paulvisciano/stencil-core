import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
