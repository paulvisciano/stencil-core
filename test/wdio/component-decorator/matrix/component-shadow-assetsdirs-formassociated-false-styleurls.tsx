import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-false-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowAssetsDirsFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | ✓ | -</div>;
  }
}
