import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | ✓ | - | -</div>;
  }
}
