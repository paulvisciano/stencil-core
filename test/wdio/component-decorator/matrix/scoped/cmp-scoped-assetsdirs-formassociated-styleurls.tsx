// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-scoped-assetsdirs-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class CmpScopedAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
