import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-false-styles',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpScopedAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | - | ✓</div>;
  }
}
