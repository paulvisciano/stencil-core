import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-styleurl',
  shadow: false,
  scoped: false,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
