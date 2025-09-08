// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-scoped-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-styleurls',
  scoped: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class CmpScopedStyleurls {
  render() {
    return <div>Permutation: - | ✓ | - | - | - | ✓ | -</div>;
  }
}
