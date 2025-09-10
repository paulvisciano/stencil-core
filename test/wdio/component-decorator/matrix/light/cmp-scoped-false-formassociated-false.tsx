// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-false',
  scoped: false,
  formAssociated: false
})
export class CmpScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | - | - | -</div>;
  }
}
