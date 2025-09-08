import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
