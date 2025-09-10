// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-false-styleurls',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | - | ✓ | -</div>;
  }
}
