import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs',
  shadow: true,
  assetsDirs: ['assets']
})
export class CmpShadowAssetsdirs {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | - | - | -</div>;
  }
}
