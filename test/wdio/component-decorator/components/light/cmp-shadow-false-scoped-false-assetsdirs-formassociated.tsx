import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-formassociated',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpShadowFalseScopedFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
