import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-a2.css']
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
