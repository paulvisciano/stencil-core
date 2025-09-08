import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-styles',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedAssetsDirsStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | - | ✓</div>;
  }
}
