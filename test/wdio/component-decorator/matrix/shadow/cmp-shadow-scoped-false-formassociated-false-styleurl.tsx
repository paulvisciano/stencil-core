// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
