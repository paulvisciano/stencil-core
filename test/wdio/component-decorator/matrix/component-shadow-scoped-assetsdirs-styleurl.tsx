import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-assetsdirs-styleurl',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrl: 'cmp-m001.css'
})
export class ComponentShadowScopedAssetsDirsStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✓ | ✓ | - | ✓ | - | -</div>;
  }
}
