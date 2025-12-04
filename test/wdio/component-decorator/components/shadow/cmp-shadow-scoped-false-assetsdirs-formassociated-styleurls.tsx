import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
