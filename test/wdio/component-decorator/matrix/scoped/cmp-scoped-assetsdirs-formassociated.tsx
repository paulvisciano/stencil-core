// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-assetsdirs-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpScopedAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | - | - | -</div>;
  }
}
