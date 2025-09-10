// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowScopedFalseAssetsdirsStyleurls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
