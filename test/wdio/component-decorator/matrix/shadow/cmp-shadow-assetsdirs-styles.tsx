// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-styles',
  shadow: true,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowAssetsdirsStyles {
  render() {
    return <div>Permutation: ✓ | - | ✓ | - | - | - | ✓</div>;
  }
}
