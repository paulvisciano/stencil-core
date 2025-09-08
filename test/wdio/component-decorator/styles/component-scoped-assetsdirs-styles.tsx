import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-styles',
  scoped: true,
  assetsDirs: ['assets'],
  styles: '.test { color: purple; }',
})
export class ComponentScopedAssetsDirsStyles {
  render() {
    return <div>Permutation: scoped, assetsDirs, styles</div>;
  }
}
