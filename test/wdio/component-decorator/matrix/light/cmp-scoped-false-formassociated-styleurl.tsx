// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-styleurl',
  scoped: false,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
