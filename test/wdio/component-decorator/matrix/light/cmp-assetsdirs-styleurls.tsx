// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-styleurls',
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpAssetsdirsStyleurls {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | ✓ | -</div>;
  }
}
