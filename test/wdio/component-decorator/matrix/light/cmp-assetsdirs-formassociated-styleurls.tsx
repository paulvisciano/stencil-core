// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-styleurls',
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | - | ✓ | -</div>;
  }
}
