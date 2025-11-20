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
