import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowScopedFalseAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
