// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-formassociated-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-styles',
  formAssociated: true,
  styles: ':host{display:block}'
})
export class CmpFormassociatedStyles {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | - | ✓</div>;
  }
}
