// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated-false',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpScopedFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
