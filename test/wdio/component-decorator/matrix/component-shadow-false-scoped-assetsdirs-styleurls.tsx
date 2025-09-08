import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['matrix-d02.css']
})
export class ComponentShadowFalseScopedAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | ✓ | -</div>;
  }
}
