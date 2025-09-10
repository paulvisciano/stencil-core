// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated-false-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentScopedFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
