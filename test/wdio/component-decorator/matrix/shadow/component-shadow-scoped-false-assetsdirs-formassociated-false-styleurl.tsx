import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
