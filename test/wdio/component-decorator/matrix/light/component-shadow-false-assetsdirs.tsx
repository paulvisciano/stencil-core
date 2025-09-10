// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-assetsdirs.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-assetsdirs',
  shadow: false,
  assetsDirs: ['assets']
})
export class ComponentShadowFalseAssetsdirs {
  render() {
    return <div>Permutation: ✗ | - | ✓ | - | - | - | -</div>;
  }
}
