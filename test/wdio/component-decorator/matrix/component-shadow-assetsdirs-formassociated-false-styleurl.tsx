import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-false-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-c3.css'
})
export class ComponentShadowAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
