// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-assetsdirs-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated-false-styleurl',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentScopedAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | ✓ | - | -</div>;
  }
}
