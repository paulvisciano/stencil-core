// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-styleurl',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseAssetsdirsFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | ✓ | - | -</div>;
  }
}
