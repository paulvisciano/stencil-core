// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-assetsdirs-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-styleurl',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFalseAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
