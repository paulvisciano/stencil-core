// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-false-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-false-styleurl',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseAssetsdirsFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | ✓ | - | -</div>;
  }
}
