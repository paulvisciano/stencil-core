import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFalseAssetsdirsStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
