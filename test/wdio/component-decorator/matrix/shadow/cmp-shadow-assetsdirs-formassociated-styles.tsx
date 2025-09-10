// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-styles',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✓ | - | - | ✓</div>;
  }
}
