// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
