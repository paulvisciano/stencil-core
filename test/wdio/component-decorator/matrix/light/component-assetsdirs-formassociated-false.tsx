// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated-false',
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | - | - | -</div>;
  }
}
