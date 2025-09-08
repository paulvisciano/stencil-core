import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentShadowAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: shadow, assetsDirs, formAssociated, styleUrls</div>;
  }
}
