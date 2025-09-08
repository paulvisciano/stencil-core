import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-d20.css'
})
export class ComponentShadowFalseScopedFalseAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
