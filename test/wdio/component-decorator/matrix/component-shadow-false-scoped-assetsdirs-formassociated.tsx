import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociated {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | - | - | -</div>;
  }
}
