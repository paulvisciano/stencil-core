// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-formassociated-styles',
  scoped: false,
  assetsDirs: ['assets'],
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentScopedFalseAssetsdirsFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✗ | ✓ | ✓ | - | - | ✓</div>;
  }
}
