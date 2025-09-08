import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-c14.css']
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
