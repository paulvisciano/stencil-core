// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-styles',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedAssetsdirsStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | - | - | - | ✓</div>;
  }
}
