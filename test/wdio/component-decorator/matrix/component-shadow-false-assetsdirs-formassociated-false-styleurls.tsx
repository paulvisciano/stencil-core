// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-false-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-false-styleurls',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrls: ['matrix-gen.css']
})
export class ComponentShadowFalseAssetsdirsFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | - | ✓ | -</div>;
  }
}
