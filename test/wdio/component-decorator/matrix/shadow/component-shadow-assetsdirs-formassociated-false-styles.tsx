import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-false-styles',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: '.matrix { color: #790; }'
})
export class ComponentShadowAssetsDirsFormAssociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | - | ✓</div>;
  }
}
