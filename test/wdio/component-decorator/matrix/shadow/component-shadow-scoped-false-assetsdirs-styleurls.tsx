import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowScopedFalseAssetsDirsStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
