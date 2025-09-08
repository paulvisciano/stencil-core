// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-styles',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✓ | - | - | ✓</div>;
  }
}
