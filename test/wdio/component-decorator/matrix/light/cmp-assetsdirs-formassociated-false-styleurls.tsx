// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-false-styleurls',
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | - | ✓ | -</div>;
  }
}
