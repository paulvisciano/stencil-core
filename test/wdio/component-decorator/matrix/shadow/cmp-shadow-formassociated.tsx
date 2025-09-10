// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated',
  shadow: true,
  formAssociated: true
})
export class CmpShadowFormassociated {
  render() {
    return <div>Permutation: ✓ | - | - | ✓ | - | - | -</div>;
  }
}
