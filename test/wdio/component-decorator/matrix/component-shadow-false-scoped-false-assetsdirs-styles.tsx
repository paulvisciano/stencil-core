// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-assetsdirs-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-assetsdirs-styles',
  shadow: false,
  scoped: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | ✓ | - | - | - | ✓</div>;
  }
}
