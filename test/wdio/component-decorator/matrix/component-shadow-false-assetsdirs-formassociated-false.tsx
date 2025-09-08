// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-false',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentShadowFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | - | - | -</div>;
  }
}
