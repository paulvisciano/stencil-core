// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated',
  formAssociated: true
})
export class CmpFormassociated {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | - | -</div>;
  }
}
