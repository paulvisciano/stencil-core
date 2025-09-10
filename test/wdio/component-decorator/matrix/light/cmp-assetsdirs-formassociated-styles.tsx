// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-styles',
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | - | - | ✓</div>;
  }
}
