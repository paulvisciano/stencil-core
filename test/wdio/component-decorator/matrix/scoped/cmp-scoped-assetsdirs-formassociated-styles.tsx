// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-styles',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpScopedAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | - | - | ✓</div>;
  }
}
