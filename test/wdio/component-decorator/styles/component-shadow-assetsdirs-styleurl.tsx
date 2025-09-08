import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-styleurl',
  shadow: true,
  assetsDirs: ['assets'],
  styleUrl: 'test-style.css',
})
export class ComponentShadowAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: shadow, assetsDirs, styleUrl</div>;
  }
}
