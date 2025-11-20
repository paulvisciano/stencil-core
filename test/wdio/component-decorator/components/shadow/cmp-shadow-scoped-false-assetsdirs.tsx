import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets']
})
export class CmpShadowScopedFalseAssetsdirs {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | - | -</div>;
  }
}
