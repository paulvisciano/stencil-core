import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['matrix-a6.css']
})
export class ComponentShadowScopedFalseAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
