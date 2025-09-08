// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-assetsdirs-formassociated-false.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-false',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentShadowFalseScopedFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
