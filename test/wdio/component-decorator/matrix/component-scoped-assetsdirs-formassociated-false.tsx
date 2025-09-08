// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-assetsdirs-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated-false',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false
})
export class ComponentScopedAssetsdirsFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | - | -</div>;
  }
}
