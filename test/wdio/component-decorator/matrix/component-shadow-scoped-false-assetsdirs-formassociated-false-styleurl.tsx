import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-a3.css'
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
