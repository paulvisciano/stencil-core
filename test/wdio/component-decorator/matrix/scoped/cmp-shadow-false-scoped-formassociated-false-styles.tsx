// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-false-styles',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
