// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-styles',
  scoped: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class ComponentScopedFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | - | ✓</div>;
  }
}
