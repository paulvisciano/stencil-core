// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  styleUrl: 'matrix-gen.css'
})
export class CmpShadowAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | ✓ | - | -</div>;
  }
}
