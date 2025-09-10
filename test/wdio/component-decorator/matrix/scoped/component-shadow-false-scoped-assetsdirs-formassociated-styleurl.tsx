import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
