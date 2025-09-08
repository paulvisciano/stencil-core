import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-false',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedFalse {
  render() {
    return <div>Permutation: ✓|✓|✓|✗|-|-|-</div>;
  }
}
