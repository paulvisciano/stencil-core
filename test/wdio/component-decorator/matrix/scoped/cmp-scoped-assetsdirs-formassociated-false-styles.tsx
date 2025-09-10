// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-false-styles',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpScopedAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | - | ✓</div>;
  }
}
