// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-formassociated-styles',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | - | ✓</div>;
  }
}
