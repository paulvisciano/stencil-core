// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-false-styleurl',
  shadow: false,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | ✓ | - | -</div>;
  }
}
