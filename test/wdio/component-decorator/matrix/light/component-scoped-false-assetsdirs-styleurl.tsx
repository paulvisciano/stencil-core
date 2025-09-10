// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-styleurl',
  scoped: false,
  assetsDirs: ['assets'],
  styleUrl: '../matrix-gen.css'
})
export class ComponentScopedFalseAssetsdirsStyleurl {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | ✓ | - | -</div>;
  }
}
