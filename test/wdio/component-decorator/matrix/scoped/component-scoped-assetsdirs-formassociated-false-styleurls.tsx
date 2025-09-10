// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs-formassociated-false-styleurls',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentScopedAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✓ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
