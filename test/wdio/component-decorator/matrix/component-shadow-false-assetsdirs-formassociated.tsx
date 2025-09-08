// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true
})
export class ComponentShadowFalseAssetsdirsFormassociated {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | - | -</div>;
  }
}
