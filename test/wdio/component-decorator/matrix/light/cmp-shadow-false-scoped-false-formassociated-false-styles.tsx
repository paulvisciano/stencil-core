// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-false-styles',
  shadow: false,
  scoped: false,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFalseFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✗ | - | - | ✓</div>;
  }
}
