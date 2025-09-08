// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated-false-styles',
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | - | ✓ | ✗ | - | - | ✓</div>;
  }
}
