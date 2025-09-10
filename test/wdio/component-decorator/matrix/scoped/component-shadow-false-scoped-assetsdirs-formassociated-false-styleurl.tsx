import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
