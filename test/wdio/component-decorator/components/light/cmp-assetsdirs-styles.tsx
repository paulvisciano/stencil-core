import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-styles',
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpAssetsdirsStyles {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | - | ✓</div>;
  }
}
