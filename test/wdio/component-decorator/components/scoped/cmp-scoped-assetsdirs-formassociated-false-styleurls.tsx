import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-false-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
