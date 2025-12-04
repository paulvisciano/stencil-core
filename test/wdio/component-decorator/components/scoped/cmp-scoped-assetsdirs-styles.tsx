import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-styles',
  scoped: true,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpScopedAssetsdirsStyles {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | - | - | ✓</div>;
  }
}
