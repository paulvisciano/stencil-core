import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated-styles',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: '.test { color: brown; }',
})
export class ComponentScopedAssetsDirsFormAssociatedStyles {
  render() {
    return <div>Permutation: scoped, assetsDirs, formAssociated, styles</div>;
  }
}
