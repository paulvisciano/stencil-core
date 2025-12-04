import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-false-styles',
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | - | - | ✓</div>;
  }
}
