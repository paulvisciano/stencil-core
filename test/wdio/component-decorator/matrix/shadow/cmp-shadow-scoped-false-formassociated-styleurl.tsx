// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
