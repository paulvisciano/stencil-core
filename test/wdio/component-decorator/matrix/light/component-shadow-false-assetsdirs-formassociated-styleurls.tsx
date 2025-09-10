// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-styleurls',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | ✓ | -</div>;
  }
}
