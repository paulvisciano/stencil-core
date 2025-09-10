// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated',
  shadow: false,
  formAssociated: true
})
export class CmpShadowFalseFormassociated {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | - | -</div>;
  }
}
