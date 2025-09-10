// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-styleurl',
  shadow: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | ✓ | - | -</div>;
  }
}
