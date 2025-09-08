import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentScopedAssetsDirsFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: scoped, assetsDirs, formAssociated, styleUrls</div>;
  }
}
