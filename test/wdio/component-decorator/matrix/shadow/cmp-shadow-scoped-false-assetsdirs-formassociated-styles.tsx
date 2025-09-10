// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-styles',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
