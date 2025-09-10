// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-styleurls',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFalseAssetsdirsStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
