// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-assetsdirs-styleurl.tsx
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
