import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-styleurls',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedAssetsdirsStyleurls {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | ✓ | -</div>;
  }
}
