// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-assetsdirs-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-assetsdirs-formassociated',
  shadow: true,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpShadowScopedFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✓ | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
