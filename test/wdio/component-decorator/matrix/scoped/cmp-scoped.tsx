// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped',
  scoped: true
})
export class CmpScoped {
  render() {
    return <div>Permutation: - | ✓ | - | - | - | - | -</div>;
  }
}
