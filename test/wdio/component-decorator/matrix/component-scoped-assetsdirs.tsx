// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-assetsdirs.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-assetsdirs',
  scoped: true,
  assetsDirs: ['assets']
})
export class ComponentScopedAssetsdirs {
  render() {
    return <div>Permutation: - | ✓ | ✓ | - | - | - | -</div>;
  }
}
