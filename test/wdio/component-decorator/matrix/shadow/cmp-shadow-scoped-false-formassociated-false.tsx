// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-false',
  shadow: true,
  scoped: false,
  formAssociated: false
})
export class CmpShadowScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | - | -</div>;
  }
}
