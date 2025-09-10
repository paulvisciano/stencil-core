// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false-styles',
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpScopedFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
