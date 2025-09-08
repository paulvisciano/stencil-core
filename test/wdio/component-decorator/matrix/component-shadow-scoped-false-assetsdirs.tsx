import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
})
export class ComponentShadowScopedFalseAssetsDirs {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | - | -</div>;
  }
}
