// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-scoped-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-styleurl',
  scoped: true,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedAssetsdirsStyleurl {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | ✓ | - | -</div>;
  }
}
