// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-assetsdirs.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs',
  assetsDirs: ['assets']
})
export class CmpAssetsdirs {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | - | -</div>;
  }
}
