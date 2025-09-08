// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs-styles',
  shadow: false,
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class ComponentShadowFalseAssetsdirsStyles {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | - | - | ✓</div>;
  }
}
