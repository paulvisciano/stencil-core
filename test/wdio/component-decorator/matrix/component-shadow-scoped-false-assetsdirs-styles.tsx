import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styles: '.matrix { color: orange; }'
})
export class ComponentShadowScopedFalseAssetsDirsStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | - | ✓</div>;
  }
}
