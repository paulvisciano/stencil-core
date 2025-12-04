import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs',
  scoped: false,
  assetsDirs: ['assets']
})
export class CmpScopedFalseAssetsdirs {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | - | -</div>;
  }
}
