import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-styles',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpScopedFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
