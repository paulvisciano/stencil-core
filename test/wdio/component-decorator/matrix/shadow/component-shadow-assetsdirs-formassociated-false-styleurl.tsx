import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-false-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowAssetsDirsFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
