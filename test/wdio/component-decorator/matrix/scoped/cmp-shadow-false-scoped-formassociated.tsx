// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-formassociated.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated',
  shadow: false,
  scoped: true,
  formAssociated: true
})
export class CmpShadowFalseScopedFormassociated {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | - | -</div>;
  }
}
