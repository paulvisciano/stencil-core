import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-false-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: '.matrix { color: teal; }'
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | - | ✓</div>;
  }
}
