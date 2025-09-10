// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-assetsdirs-styles',
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class ComponentAssetsdirsStyles {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | - | ✓</div>;
  }
}
