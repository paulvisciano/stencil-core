import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'matrix-c13.css'
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
