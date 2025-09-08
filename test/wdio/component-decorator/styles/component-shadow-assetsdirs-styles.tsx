import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-styles',
  shadow: true,
  assetsDirs: ['assets'],
  styles: '.test { color: olive; }',
})
export class ComponentShadowAssetsDirsStyles {
  render() {
    return <div>Permutation: shadow, assetsDirs, styles</div>;
  }
}
