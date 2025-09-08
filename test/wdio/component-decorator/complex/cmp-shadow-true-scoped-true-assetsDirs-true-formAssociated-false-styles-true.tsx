import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true-assetsDirs-true-formAssociated-false-styles-true',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host { color: blue; }'
})
export class CmpShadowTrueScopedTrueAssetsDirsTrueFormAssociatedFalseStylesTrue {
  render() {
    return <div>Permutation: ✓|✓|✓|✗|-|-|✓</div>;
  }
}
