// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-styleurl',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseScopedFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
