import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-false-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
