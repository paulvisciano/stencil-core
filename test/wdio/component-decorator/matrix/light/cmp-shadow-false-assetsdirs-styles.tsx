// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-styles',
  shadow: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | - | - | ✓</div>;
  }
}
