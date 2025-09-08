// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-formassociated-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-formassociated-false-styles',
  shadow: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | ✗ | - | - | ✓</div>;
  }
}
