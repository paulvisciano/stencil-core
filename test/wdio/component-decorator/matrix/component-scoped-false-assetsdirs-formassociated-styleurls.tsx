// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-gen.css']
})
export class ComponentScopedFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | - | ✓ | -</div>;
  }
}
