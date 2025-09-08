import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseScopedAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | ✓ | - | -</div>;
  }
}
