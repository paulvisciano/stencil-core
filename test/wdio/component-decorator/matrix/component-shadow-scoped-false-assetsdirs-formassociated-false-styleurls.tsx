import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-false-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-a4.css']
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
