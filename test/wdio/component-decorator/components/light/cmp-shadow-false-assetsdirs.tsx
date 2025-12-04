import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs',
  shadow: false,
  assetsDirs: ['assets']
})
export class CmpShadowFalseAssetsdirs {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | - | - | -</div>;
  }
}
