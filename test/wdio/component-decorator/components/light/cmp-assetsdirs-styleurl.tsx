import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-styleurl',
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpAssetsdirsStyleurl {
  render() {
    return <div>Permutation: - | - | ✓ | - | ✓ | - | -</div>;
  }
}
