// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-false-styleurl',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
