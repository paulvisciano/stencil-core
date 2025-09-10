// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-false',
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | - | - | -</div>;
  }
}
