import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-styles',
  shadow: true,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowAssetsdirsStyles {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | - | - | ✓</div>;
  }
}
