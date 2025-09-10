// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated',
  assetsDirs: ['assets'],
  formAssociated: true
})
export class CmpAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | - | - | -</div>;
  }
}
