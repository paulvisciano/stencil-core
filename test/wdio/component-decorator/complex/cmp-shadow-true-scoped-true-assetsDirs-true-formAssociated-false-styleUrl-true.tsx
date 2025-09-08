import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-false-styleUrl-true',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-false-styleUrl-true.css'
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedFalseStyleUrlTrue {
  render() {
    return <div>Permutation: ✓|✓|✓|✗|✓|-|-</div>;
  }
}
