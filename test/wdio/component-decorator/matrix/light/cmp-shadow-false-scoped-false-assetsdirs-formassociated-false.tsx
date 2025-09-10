// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-assetsdirs-formassociated-false',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowFalseScopedFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
