import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-false',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
