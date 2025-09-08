// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated-false-styles',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentScopedFalseAssetsdirsFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✗ | - | - | ✓</div>;
  }
}
