// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-styles',
  shadow: false,
  scoped: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFalseFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
