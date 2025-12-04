import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-false',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpScopedAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | - | -</div>;
  }
}
