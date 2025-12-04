import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-styles',
  scoped: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpScopedFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | - | ✓</div>;
  }
}
