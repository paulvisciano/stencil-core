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
