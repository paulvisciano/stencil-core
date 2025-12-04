import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpShadowFalseScopedAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | - | - | -</div>;
  }
}
