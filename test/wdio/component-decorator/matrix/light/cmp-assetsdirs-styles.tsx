// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-assetsdirs-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-styles',
  assetsDirs: ['assets'],
  styles: ':host{display:block}'
})
export class CmpAssetsdirsStyles {
  render() {
    return <div>Permutation: - | - | ✓ | - | - | - | ✓</div>;
  }
}
