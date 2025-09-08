import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: 'matrix-a5.css'
})
export class ComponentShadowScopedFalseAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
