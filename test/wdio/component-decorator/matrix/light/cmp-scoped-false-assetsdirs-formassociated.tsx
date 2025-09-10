// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-assetsdirs-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-formassociated',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpScopedFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
