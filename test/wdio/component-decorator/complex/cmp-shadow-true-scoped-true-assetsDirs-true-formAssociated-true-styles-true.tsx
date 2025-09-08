import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-true-styles-true',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host { color: green; }'
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedTrueStylesTrue {
  render() {
    return <div>Permutation: ✓|✓|✓|✓|-|-|✓</div>;
  }
}
