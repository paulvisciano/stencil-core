import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'test-style.css',
})
export class ComponentShadowAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: shadow, assetsDirs, formAssociated, styleUrl</div>;
  }
}
