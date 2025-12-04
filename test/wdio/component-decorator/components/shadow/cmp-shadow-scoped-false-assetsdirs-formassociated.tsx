import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpShadowScopedFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
