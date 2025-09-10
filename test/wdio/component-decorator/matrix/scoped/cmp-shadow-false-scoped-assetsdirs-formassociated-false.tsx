// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated-false',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowFalseScopedAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✓ | ✓ | ✗ | - | - | -</div>;
  }
}
