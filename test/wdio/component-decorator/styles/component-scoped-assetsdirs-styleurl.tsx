import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-styleurl',
  scoped: true,
  assetsDirs: ['assets'],
  styleUrl: 'test-style.css',
})
export class ComponentScopedAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: scoped, assetsDirs, styleUrl</div>;
  }
}
