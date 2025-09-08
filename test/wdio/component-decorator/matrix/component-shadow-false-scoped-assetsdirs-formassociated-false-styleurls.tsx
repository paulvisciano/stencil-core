import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-false-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-c18.css']
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
