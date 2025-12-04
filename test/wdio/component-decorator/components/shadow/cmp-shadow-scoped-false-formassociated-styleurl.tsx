import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
