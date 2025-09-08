import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-false',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
