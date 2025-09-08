import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'matrix-d16.css'
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
