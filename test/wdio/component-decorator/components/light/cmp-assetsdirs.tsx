import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs',
  assetsDirs: ['assets']
})
export class CmpAssetsdirs {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | - | -</div>;
  }
}
