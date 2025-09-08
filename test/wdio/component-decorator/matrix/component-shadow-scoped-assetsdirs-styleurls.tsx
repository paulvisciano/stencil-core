import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-assetsdirs-styleurls',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['cmp-m002.css']
})
export class ComponentShadowScopedAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✓ | ✓ | - | - | ✓ | -</div>;
  }
}
