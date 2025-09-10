// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-styleurl',
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
