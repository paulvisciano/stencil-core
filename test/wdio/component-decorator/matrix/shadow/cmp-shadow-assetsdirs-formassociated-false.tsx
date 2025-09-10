// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated-false',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class CmpShadowAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | - | ✓ | ✗ | - | - | -</div>;
  }
}
