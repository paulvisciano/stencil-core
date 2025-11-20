import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-styleurl',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
