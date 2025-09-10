// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-assetsdirs.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs',
  scoped: false,
  assetsDirs: ['assets']
})
export class CmpScopedFalseAssetsdirs {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | - | -</div>;
  }
}
