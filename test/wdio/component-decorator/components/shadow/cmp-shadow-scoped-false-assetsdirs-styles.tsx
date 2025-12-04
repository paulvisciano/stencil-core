import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | - | ✓</div>;
  }
}
