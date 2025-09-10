// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-false-styleurl',
  shadow: true,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | ✓ | - | -</div>;
  }
}
