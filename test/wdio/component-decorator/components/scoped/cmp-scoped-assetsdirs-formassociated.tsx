import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpScopedAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | - | - | -</div>;
  }
}
