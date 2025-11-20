import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-styles',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpScopedAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | - | - | ✓</div>;
  }
}
