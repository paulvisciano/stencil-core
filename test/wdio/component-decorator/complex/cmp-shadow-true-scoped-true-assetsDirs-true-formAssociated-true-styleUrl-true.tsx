import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-true-styleUrl-true',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-true-styleUrl-true.css'
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedTrueStyleUrlTrue {
  render() {
    return <div>Permutation: ✓|✓|✓|✓|✓|-|-</div>;
  }
}
