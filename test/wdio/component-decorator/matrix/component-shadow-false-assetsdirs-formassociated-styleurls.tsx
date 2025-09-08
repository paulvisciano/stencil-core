// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-styleurls',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrls: ['matrix-gen.css']
})
export class ComponentShadowFalseAssetsdirsFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | ✓ | -</div>;
  }
}
