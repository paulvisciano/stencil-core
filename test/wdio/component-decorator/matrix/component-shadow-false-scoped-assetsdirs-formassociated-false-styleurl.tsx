import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-c17.css'
})
export class ComponentShadowFalseScopedAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
