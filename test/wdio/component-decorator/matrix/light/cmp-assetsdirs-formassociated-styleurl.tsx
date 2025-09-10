// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-styleurl',
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | ✓ | - | -</div>;
  }
}
