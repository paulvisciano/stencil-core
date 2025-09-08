import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentScopedAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: scoped, assetsDirs, styleUrls</div>;
  }
}
