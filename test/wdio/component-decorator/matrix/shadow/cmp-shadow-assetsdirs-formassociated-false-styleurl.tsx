// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-assetsdirs-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-false-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
