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
