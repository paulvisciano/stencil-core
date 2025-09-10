// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-false',
  formAssociated: false
})
export class CmpFormassociatedFalse {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | - | -</div>;
  }
}
