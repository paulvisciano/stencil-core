// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs',
  scoped: false,
  assetsDirs: ['assets']
})
export class ComponentScopedFalseAssetsdirs {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | - | -</div>;
  }
}
