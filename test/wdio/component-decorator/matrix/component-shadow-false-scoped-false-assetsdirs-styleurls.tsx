// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-assetsdirs-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-styleurls',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['matrix-gen.css']
})
export class ComponentShadowFalseScopedFalseAssetsdirsStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
