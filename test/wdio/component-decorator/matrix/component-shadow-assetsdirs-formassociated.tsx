import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentShadowAssetsDirsFormAssociated {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✓ | - | - | -</div>;
  }
}
