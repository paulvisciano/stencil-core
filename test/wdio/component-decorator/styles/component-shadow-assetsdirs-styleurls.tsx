import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentShadowAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: shadow, assetsDirs, styleUrls</div>;
  }
}
