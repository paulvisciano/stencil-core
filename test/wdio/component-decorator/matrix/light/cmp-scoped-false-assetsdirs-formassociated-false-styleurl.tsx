// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-assetsdirs-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-false-styleurl',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFalseAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
