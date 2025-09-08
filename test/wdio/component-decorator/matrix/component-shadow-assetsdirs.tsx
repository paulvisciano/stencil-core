import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs',
  shadow: true,
  assetsDirs: ['assets']
})
export class ComponentShadowAssetsDirs {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | - | - | -</div>;
  }
}
