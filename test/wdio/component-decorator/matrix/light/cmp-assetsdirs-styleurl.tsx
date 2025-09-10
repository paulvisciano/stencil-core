// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-styleurl.tsx
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
