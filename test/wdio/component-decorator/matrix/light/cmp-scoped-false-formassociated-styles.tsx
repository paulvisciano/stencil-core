// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-styles',
  scoped: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpScopedFalseFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
