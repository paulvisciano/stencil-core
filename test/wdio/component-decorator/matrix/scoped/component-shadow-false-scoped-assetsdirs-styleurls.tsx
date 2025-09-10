import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFalseScopedAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | ✓ | -</div>;
  }
}
