import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-formassociated-styleurls',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
