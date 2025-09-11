// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-styleurl',
  scoped: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedStyleurl {
  render() {
    return <div>Permutation: - | ✓ | - | - | ✓ | - | -</div>;
  }
}
