import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
