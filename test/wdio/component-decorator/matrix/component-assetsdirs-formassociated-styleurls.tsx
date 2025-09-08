// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated-styleurls',
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | - | ✓ | -</div>;
  }
}
