// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-styles',
  shadow: true,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpShadowFormassociatedStyles {
  render() {
    return <div>Permutation: ✓ | - | - | ✓ | - | - | ✓</div>;
  }
}
