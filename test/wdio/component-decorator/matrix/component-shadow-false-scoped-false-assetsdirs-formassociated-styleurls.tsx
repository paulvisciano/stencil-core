import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-styleurls',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-d17.css']
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
