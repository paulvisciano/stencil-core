import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets']
})
export class CmpShadowFalseScopedFalseAssetsdirs {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | - | - | -</div>;
  }
}
