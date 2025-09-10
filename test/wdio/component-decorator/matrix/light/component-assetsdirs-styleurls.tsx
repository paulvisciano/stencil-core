// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-styleurls',
  assetsDirs: ['assets'],
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentAssetsdirsStyleurls {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | ✓ | -</div>;
  }
}
