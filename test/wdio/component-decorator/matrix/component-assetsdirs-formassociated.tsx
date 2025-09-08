// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated',
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | - | - | -</div>;
  }
}
