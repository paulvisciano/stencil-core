// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-styles',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | - | - | ✓</div>;
  }
}
