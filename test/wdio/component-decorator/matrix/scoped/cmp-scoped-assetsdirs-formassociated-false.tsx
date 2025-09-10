// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated-false',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpScopedAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | - | -</div>;
  }
}
