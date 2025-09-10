// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
