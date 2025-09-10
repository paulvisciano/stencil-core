// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentScopedFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | - | - | -</div>;
  }
}
