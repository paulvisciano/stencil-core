// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-formassociated-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-formassociated-styles',
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: - | - | ✓ | ✓ | - | - | ✓</div>;
  }
}
