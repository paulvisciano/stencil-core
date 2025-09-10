// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurls',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFalseScopedFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | ✗ | - | ✓ | -</div>;
  }
}
