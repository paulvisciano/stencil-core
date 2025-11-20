import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
