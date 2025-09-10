import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets']
})
export class ComponentShadowFalseScopedAssetsDirs {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | - | -</div>;
  }
}
