// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-formassociated-styles',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
