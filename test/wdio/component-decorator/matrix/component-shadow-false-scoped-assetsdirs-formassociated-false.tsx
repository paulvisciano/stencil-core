import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-false',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | - | -</div>;
  }
}
