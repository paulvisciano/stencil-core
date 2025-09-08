import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
