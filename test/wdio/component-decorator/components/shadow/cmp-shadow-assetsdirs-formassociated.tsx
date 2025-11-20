import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpShadowAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✓ | - | - | -</div>;
  }
}
