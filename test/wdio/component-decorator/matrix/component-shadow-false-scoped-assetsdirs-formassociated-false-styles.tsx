import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-false-styles',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: '.matrix { color: #05a; }'
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | - | ✓</div>;
  }
}
