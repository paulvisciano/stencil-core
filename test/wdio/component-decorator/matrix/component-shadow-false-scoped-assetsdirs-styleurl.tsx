import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrl: 'matrix-d01.css'
})
export class ComponentShadowFalseScopedAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | ✓ | - | -</div>;
  }
}
