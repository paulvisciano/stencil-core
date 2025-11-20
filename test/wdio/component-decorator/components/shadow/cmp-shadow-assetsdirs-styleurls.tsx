import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-styleurls',
  shadow: true,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowAssetsdirsStyleurls {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | - | ✓ | -</div>;
  }
}
