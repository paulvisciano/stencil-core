// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated-false-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated-false-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-gen.css']
})
export class ComponentScopedFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
