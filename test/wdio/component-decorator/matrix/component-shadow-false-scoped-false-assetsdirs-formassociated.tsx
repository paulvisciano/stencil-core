import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociated {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
