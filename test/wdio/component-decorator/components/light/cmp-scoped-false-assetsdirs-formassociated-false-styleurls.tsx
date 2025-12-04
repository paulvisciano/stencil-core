import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-false-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
