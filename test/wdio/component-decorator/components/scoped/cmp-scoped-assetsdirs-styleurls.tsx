import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedAssetsdirsStyleurls {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | - | ✓ | -</div>;
  }
}
