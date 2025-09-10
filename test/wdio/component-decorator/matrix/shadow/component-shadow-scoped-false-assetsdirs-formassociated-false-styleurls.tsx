import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-assetsdirs-formassociated-false-styleurls',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowScopedFalseAssetsDirsFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
