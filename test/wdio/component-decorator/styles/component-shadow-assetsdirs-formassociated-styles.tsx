import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-assetsdirs-formassociated-styles',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: '.test { color: navy; }',
})
export class ComponentShadowAssetsDirsFormAssociatedStyles {
  render() {
    return <div>Permutation: shadow, assetsDirs, formAssociated, styles</div>;
  }
}
