// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-styleurls',
  shadow: false,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseAssetsdirsStyleurls {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | - | ✓ | -</div>;
  }
}
