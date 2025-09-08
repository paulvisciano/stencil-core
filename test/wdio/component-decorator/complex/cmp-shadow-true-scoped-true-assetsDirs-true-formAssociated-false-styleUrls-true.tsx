import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-false-styleUrls-true',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-false-styleUrls-true.css']
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedFalseStyleUrlsTrue {
  render() {
    return <div>Permutation: ✓|✓|✓|✗|-|✓|-</div>;
  }
}
