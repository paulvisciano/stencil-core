// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-assetsdirs.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs',
  shadow: true,
  assetsDirs: ['assets']
})
export class CmpShadowAssetsdirs {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | - | - | -</div>;
  }
}
