import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-styleurl',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'matrix-a1.css'
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | ✓ | - | -</div>;
  }
}
