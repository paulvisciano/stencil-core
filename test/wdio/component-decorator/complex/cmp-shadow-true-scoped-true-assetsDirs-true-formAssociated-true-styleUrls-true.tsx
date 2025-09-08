import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-true-styleUrls-true',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-true-styleUrls-true.css']
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedTrueStyleUrlsTrue {
  render() {
    return <div>Permutation: ✓|✓|✓|✓|-|✓|-</div>;
  }
}
