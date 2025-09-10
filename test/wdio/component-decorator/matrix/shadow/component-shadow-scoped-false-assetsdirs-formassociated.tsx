import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociated {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
