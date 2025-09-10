// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-false',
  shadow: true,
  formAssociated: false
})
export class CmpShadowFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | - | -</div>;
  }
}
