// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-styleurl',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | ✓ | - | -</div>;
  }
}
