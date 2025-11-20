import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-styleurls',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | ✓ | -</div>;
  }
}
