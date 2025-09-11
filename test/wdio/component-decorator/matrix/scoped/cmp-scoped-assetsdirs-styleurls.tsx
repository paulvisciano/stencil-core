// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedAssetsdirsStyleurls {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | - | ✓ | -</div>;
  }
}
