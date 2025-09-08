import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
