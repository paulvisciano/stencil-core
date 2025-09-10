import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-styles',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: '.matrix { color: #a50; }'
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | - | - | ✓</div>;
  }
}
