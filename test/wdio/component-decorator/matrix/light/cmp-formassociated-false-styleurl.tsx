// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-false-styleurl',
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | - | - | ✗ | ✓ | - | -</div>;
  }
}
