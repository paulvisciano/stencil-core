import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-false-styles',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpScopedFalseAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | - | ✓</div>;
  }
}
