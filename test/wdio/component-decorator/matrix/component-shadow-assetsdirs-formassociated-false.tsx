import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-false',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentShadowAssetsDirsFormAssociatedFalse {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | - | -</div>;
  }
}
