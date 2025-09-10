// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-false-styles',
  shadow: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpShadowFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | - | ✓</div>;
  }
}
