// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-false-styleurl',
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
