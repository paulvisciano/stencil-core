// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-false-styles',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | - | ✓</div>;
  }
}
