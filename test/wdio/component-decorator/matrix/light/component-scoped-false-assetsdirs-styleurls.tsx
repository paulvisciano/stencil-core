// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-assetsdirs-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-assetsdirs-styleurls',
  scoped: false,
  assetsDirs: ['assets'],
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentScopedFalseAssetsdirsStyleurls {
  render() {
    return <div>Permutation: - | ✗ | ✓ | - | - | ✓ | -</div>;
  }
}
