// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated-false',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentScopedFalseAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | - | -</div>;
  }
}
