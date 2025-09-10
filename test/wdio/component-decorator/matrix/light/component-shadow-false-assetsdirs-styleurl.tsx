// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-styleurl',
  shadow: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | ✓ | - | -</div>;
  }
}
