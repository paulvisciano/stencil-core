// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-assetsdirs-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✓ | - | ✓ | -</div>;
  }
}
