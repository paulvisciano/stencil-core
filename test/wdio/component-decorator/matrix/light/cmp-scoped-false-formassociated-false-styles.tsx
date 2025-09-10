// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-false-styles',
  scoped: false,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpScopedFalseFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | - | - | ✓</div>;
  }
}
