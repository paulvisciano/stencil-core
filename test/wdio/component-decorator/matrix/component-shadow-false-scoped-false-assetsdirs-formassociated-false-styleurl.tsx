import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
