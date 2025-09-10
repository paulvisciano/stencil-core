// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated-styleurl',
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class ComponentAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | ✓ | - | -</div>;
  }
}
