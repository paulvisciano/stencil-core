import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-false-styleurl',
  scoped: false,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
