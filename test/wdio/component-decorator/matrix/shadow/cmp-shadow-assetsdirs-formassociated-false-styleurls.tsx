// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-false-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | ✓ | -</div>;
  }
}
