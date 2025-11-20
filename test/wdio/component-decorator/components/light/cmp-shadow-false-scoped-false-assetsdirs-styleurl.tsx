import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
