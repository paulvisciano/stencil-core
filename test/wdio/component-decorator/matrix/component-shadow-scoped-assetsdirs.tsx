import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-assetsdirs',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets']
})
export class ComponentShadowScopedAssetsDirs {
  render() {
    return <div>Permutation: ✓ | ✓ | ✓ | - | - | - | -</div>;
  }
}
