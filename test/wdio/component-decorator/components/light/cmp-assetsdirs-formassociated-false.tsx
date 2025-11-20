import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-false',
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | - | - | -</div>;
  }
}
