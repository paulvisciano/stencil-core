// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated',
  scoped: true,
  formAssociated: true
})
export class CmpScopedFormassociated {
  render() {
    return <div>Permutation: - | ✓ | - | ✓ | - | - | -</div>;
  }
}
