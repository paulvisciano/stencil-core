import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-assetsdirs-styles',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class ComponentShadowScopedAssetsDirsStyles {
  render() {
    return <div>Permutation: ✓ | ✓ | ✓ | - | - | - | ✓</div>;
  }
}
