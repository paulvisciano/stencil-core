// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated-false',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowScopedFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
