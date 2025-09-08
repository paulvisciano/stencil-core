import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated-styleurl',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: 'test-style.css',
})
export class ComponentScopedAssetsDirsFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: scoped, assetsDirs, formAssociated, styleUrl</div>;
  }
}
