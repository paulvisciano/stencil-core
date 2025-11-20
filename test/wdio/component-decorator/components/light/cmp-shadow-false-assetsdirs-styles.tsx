import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-styles',
  shadow: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | - | - | ✓</div>;
  }
}
