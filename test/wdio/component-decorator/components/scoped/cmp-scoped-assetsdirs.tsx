import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs',
  scoped: true,
  assetsDirs: ['assets']
})
export class CmpScopedAssetsdirs {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | - | - | -</div>;
  }
}
