import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-styles',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
