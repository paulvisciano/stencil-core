// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false',
  scoped: false
})
export class CmpScopedFalse {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | - | -</div>;
  }
}
