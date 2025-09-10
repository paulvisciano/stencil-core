// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false-styleurl',
  scoped: true,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | ✓ | - | -</div>;
  }
}
