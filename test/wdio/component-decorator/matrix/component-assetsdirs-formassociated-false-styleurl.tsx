// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated-false-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated-false-styleurl',
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
