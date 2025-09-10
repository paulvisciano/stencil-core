// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-scoped-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-styles',
  scoped: true,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpScopedFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✓ | - | ✓ | - | - | ✓</div>;
  }
}
