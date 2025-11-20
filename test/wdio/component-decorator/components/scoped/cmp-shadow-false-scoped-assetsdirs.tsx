import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets']
})
export class CmpShadowFalseScopedAssetsdirs {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | - | -</div>;
  }
}
