import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-false-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
