import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated-false-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
