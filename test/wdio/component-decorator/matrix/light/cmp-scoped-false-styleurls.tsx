// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-styleurls',
  scoped: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | ✓ | -</div>;
  }
}
