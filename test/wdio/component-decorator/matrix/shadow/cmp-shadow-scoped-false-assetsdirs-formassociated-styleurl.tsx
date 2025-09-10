// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
