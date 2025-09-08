// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-styleurl',
  assetsDirs: ['assets'],
  styleUrl: 'matrix-gen.css'
})
export class ComponentAssetsdirsStyleurl {
  render() {
    return <div>Permutation: - | - | ✓ | - | ✓ | - | -</div>;
  }
}
