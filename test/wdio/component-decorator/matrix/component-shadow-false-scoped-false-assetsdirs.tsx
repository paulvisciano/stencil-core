// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-assetsdirs.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets']
})
export class ComponentShadowFalseScopedFalseAssetsdirs {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | - | - | -</div>;
  }
}
