import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: '.matrix { color: purple; }'
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
