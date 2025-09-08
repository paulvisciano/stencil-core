// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-assetsdirs-formassociated.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentScopedAssetsdirsFormassociated {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✓ | - | - | -</div>;
  }
}
