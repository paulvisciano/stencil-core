// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated',
  shadow: true,
  scoped: false,
  formAssociated: true
})
export class CmpShadowScopedFalseFormassociated {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | - | - | -</div>;
  }
}
