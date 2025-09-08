import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-false-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-c4.css']
})
export class ComponentShadowAssetsDirsFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | ✓ | -</div>;
  }
}
