// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs',
  scoped: true,
  assetsDirs: ['assets']
})
export class CmpScopedAssetsdirs {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | - | - | -</div>;
  }
}
