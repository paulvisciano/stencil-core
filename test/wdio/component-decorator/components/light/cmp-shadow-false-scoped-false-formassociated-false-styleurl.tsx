import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-false-styleurl',
  shadow: false,
  scoped: false,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
