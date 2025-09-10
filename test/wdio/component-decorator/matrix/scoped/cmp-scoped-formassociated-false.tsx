// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false',
  scoped: true,
  formAssociated: false
})
export class CmpScopedFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | - | -</div>;
  }
}
