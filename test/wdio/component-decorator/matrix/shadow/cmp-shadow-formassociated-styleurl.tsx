// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-styleurl',
  shadow: true,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✓ | - | - | ✓ | ✓ | - | -</div>;
  }
}
